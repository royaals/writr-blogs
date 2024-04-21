import { Link } from "react-router-dom"
import {
  Card,
  CardContent,

 
  CardHeader,
 
} from "@/components/ui/card"

const Landingpage = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
      <Link to={'/'} className="flex items-center justify-center">
        <img src="/writrlogo.png" alt="logo" className="h-10 w-10" />
       </Link>
      <div className="flex justify-center items-center gap-4 sm:gap-6">
        <Link to={'/signin'} className=" text-sm font-medium hover:underline underline-offset-4" >
          Sign In
        </Link>
        <Link to={'/signup'}
          className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          
        >
          Get Started
        </Link>
      </div>
    </header>
    <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Welcome to Writr
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover the latest news, insights, and trends in our blog posts. Share your own thoughts and connect
                  with our community.
                </p>
                <div className="space-x-4">
                  <Link to={'/signup'}
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  
                  >
                    Explore
                  </Link>
                  
                </div>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
              height="300"
              src="/hero.png"
              width="1270"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Featured Posts
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Discover the Latest Trends</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore our curated selection of the most popular and insightful blog posts. Stay up-to-date with the
                  latest industry news and insights.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <img
                    alt="The Future of Artificial Intelligence image"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="310"
                    src="/Ai.png"
                    width="550"
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                    Technology
                  </div>
                  <h3 className="text-lg font-bold">The Future of Artificial Intelligence</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Explore the latest advancements in AI and how they will shape our future.  Delve into the transformative potential of AI.
                  </p>
                </CardContent>
                
              </Card>
              <Card>
                <CardHeader>
                  <img
                    alt="Effective Strategies for Social Media Marketing Image"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="310"
                    src="/socialmedia.png"
                    width="550"
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                    Marketing
                  </div>
                  <h3 className="text-lg font-bold">Effective Strategies for Social Media Marketing</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Learn how to leverage social media to grow your business and reach new customers.
                  </p>
                </CardContent>
               
              </Card>
              <Card>
                <CardHeader>
                  <img
                    alt="Designing for Accessibility: Best Practices Image"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="310"
                    src="/accessibility.png"
                    width="550"
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Design</div>
                  <h3 className="text-lg font-bold">Designing for Accessibility: Best Practices</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Explore the principles of accessible design and learn how to create inclusive experiences.
                  </p>
                </CardContent>
                
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Writr. All rights reserved.</p>
      
      </footer>
    </div>
  )
}

export default Landingpage