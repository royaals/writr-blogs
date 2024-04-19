import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono'
import { verify } from 'hono/jwt'
import { blogInput,updateBlogInput } from 'writr-common'
export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  },
  Variables: {
      userId: string;
  }
}>();

 blogRouter.use('/*', async (c, next) => {
    const authHeader = c.req.header('authorization') || " ";
    try{
        const user = await verify(authHeader, c.env.JWT_SECRET);
        if(user){
            c.set("userId",user.id);
            await next();
        }
        else{
          c.status(403);
          return c.json({message: "You are not logged in"})
        }
    }
    catch(e){
        c.status(403);
        return c.json({message: "You are not logged in"});
    }
  
   
  })
blogRouter.post('/', async(c) => {
    const body=await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
      const validated = blogInput.safeParse(body);
      if (!validated.success) {
        c.status(411);
        return c.json({ message: "invalid input"

        });
      }
     const userId=c.get("userId");
      const blog=await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: userId,
            published: true
           }
          
      })
    return c.json({
        id: blog.id
    })
  })
  
  blogRouter.put('/', async(c) => {
    const body=await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
      const validated = updateBlogInput.safeParse(body);
      if (!validated.success) {
        c.status(411);
        return c.json({ message: "invalid input"

        });
      }
      const blog=await prisma.post.update({
        where:{
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content,
            
           }
          
      })
    return c.json({
        id: blog.id
    })
  })
  
   // add pagination
   blogRouter.get('/bulk', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
      try{
        const blogs=await prisma.post.findMany();
        return c.json({
            blogs
        })
    }
    catch(e){
        c.status(411);
        return c.json({error: "Error while fetching all the blog"})
    }
         
    
  })
  
  
  blogRouter.get('/:id', async(c) => {
    const id= c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
try{
    const blog=await prisma.post.findFirst({
        where:{
            id: id
        },
        
          
      })
    return c.json({
        blog
    })
}
catch(e){
    c.status(411);
    return c.json({error: "Error while fetching the blog"})
}
     
  })
 