import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign ,verify} from 'hono/jwt'
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
          name: body.name,
          email: body.email,
          password: body.password,
        }
      })
  
      const token = await sign({ id: user.id }, c.env.JWT_SECRET)
      return c.json({ jwt: token,name: user.name })
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
    return c.json({ jwt, name: user.name }); // Include the user's name in the response
  
  }
  catch(e){
    c.status(500);
    return c.json({error: "an error occured during signin"})
  }
  
  })
  

  userRouter.get('/username', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    try {
      const token = c.req.header('authorization');
      if (!token) {
        c.status(401);
        return c.json({ error: "No authorization token provided" });
      }
  
      const { id } = await verify(token, c.env.JWT_SECRET);
      const user = await prisma.user.findUnique({
        where: { id },
      });
  
      if (!user) {
        c.status(404);
        return c.json({ error: "User not found" });
      }
  
      return c.json(user);
    } catch (e) {
      c.status(500);
      return c.json({ error: "An error occurred while fetching user data" });
    }
  });