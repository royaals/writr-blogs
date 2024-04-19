import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { Hono } from 'hono'
import {  signinInput, signupInput } from 'writr-common'
export const userRouter=new Hono<{
    Bindings: {
      DATABASE_URL: string,
      JWT_SECRET: string
    }
  }>();


userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    try {
      const body = await c.req.json();
      const validated = signupInput.safeParse(body);
      if (!validated.success) {
        c.status(411);
        return c.json({ message: "invalid input"

        });
      }
      const user = await prisma.user.create({
        data: {
          email: body.email,
          password: body.password,
        }
      })
  
      const token = await sign({ id: user.id }, c.env.JWT_SECRET)
      return c.json({ jwt: token })
    } catch(e) {
      c.status(500);
      return c.json({ error: "An error occurred during signup." })
    }
  })
  
  
  userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
  try{
    const body = await c.req.json();
    const validated = signinInput.safeParse(body);
    if (!validated.success) {
      c.status(411);
      return c.json({ message: "invalid input"

      });
    }
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password
      }
    });
  
    if (!user) {
      c.status(403);
      return c.json({ error: "user not found" });
    }
  
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt });
  
  }
  catch(e){
    c.status(500);
    return c.json({error: "an error occured during signin"})
  }
   
  })
  