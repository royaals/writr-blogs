import { Appbar } from "../component/AppBar";
import { FullBlog } from "../component/FullBlog";
import { Spinner } from "../component/Spinner";
import { useBlog } from "../hooks";
import {useParams} from "react-router-dom";


export const Blog = () => {
    const { id } = useParams();
    const {loading, blog} = useBlog({
        id: id || ""
    });

    if (loading || !blog) {
        return <div>
            <Appbar />
        
            <div className="h-screen flex flex-col justify-center">
                
                <div className="flex justify-center">
                    <Spinner />
                </div>
            </div>
        </div>
    }
    return <div>
        <FullBlog blog={blog} />
    </div>
}