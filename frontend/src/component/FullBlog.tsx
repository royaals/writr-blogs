import { Blog } from "../hooks"
import { Appbar } from "./AppBar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({ blog }: {blog: Blog}) => {
    function formattedDate(time: string) {
        let date = new Date(time);
        let options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
      }
      
    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
                <div className="col-span-8">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        Post on {formattedDate(blog.publishedAt)} {/* Use the formatted date here */}
                    </div>
                    <div className="pt-4">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="text-slate-600 text-lg">
                        Author
                    </div>
                    <div className="flex w-full">
                        <div className="pr-4 flex flex-col justify-center">
                            <Avatar size="big" name={blog.author.name || "Anonymous"} />
                        </div>
                        <div>
                            <div className="text-xl font-bold">
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className="pt-2 text-slate-500">
                            An avid explorer of the tech universe, I pen down my journey through the complex world of software and hardware. With a knack for simplifying intricate concepts, I strive to enlighten my readers with clear, engaging, and insightful content. A lifelong learner, I'm constantly evolving with the dynamic realm of technology, sharing my discoveries one blog post at a time.

                            </div>
                        </div>
                    </div>  
                </div>
                
            </div>
        </div>
    </div>
}
