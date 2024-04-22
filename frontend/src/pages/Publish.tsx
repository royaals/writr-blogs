import { Appbar } from "../component/AppBar";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
const BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;
export const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    return <div>
        <Appbar />
        <main className="flex-1 py-12 md:py-24">
        <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-2">
                <input onChange={(e) => {
                    setTitle(e.target.value)
                }} type="text" className="text-4xl font-bold focus:outline-none tracking-tighter" placeholder="Title" />
</div>
                <TextEditor onChange={(e) => {
                    setDescription(e.target.value)
                }} />
                <Button onClick={async () => {
                    const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                        title,
                        content: description
                    }, {
                        headers: {
                            Authorization: localStorage.getItem("token")
                        }
                    });
                    navigate(`/blog/${response.data.id}`)
                }} type="submit" className="bg-gray-900 text-gray-50 hover:bg-gray-800 px-8 py-3 rounded-md text-sm font-medium">
                    Publish 
                </Button>
            </div>
            </div>
        </main>
       
    </div>
    
}


function TextEditor({ onChange }: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}) {
    return <div className="mt-2">
       
            <div className="flex items-center justify-between ">
            <div className="my-2 bg-white rounded-b-lg w-full">
                <label className="sr-only">Publish post</label>
                <Textarea onChange={onChange} id="editor" rows={15} className="focus-visible:ring-0 text-lg leading-relaxed" placeholder="Compose your thoughts here..." required />
            </div>
        </div>
      
    </div>
    
}

<main className="flex-1 py-12 md:py-24">
<div className="container px-4 md:px-6">
  <div className="max-w-3xl mx-auto space-y-8">
    <div className="space-y-2">
      <Input
        className="text-4xl font-bold tracking-tighter"
        placeholder="Enter your blog post title..."
        type="text"
      />
    </div>
    <Textarea
      className="text-lg leading-relaxed"
      placeholder="Start writing your blog post content here..."
      rows={15}
    />
    <Button
      className="bg-gray-900 text-gray-50 hover:bg-gray-800 px-8 py-3 rounded-md text-sm font-medium"
      type="submit"
    >
      Publish
    </Button>
  </div>
</div>
</main>