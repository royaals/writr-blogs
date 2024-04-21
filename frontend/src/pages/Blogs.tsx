import { Appbar } from "../component/AppBar";
import { BlogCard } from "../component/BlogCard";
import { BlogSkeleton } from "../component/BlogSkeleton";
import { useBlogs } from "../hooks";

import RightCategoryCard from "../component/RightCategoryCard";
import RightNewsLetter from "@/component/RightNewsLetter";
export const Blogs = () => {
    const { loading, blogs } = useBlogs();

    if (loading) {
        return <div>
            <Appbar /> 
            <div  className="flex justify-center">
                <div>
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                </div>
            </div>
        </div>
    }

    return <div>
        <Appbar />
        <div  className="flex justify-center grid grid-cols-12">
            <div className="col-span-9 ml-auto">
                {blogs.map(blog => <BlogCard
                    id={blog.id}
                    authorName={blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    publishedAt={blog.publishedAt}
                />)}
            </div>
            <div className="col-span-3 hidden lg:block">
               <div>
        <RightCategoryCard />
    </div>
    <div>
        <RightNewsLetter/>
    </div>
            </div>
        </div>
    </div>
}
