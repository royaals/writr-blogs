import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"

import { HoverCardTrigger, HoverCardContent, HoverCard } from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"

import { useUser } from "@/hooks"
interface User {
  name: string;
  
}
export const Appbar = () => {

    const { user } = useUser() as { user: User | null };
    return <div className="border-b flex justify-between px-10 py-4">
                <Link to={'/blogs'} className="flex items-center gap-2">
          <FeatherIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          <span className="text-lg font-semibold">Blog</span>
        </Link>
        <div className="flex items-center">
            <Link to={`/publish`}>
                <div className="flex items-center"> 
                <FeatherIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                    <button type="button" className="text-slate-500 bg-white-700 mr-2 focus:outline-none   font-medium rounded-full text-sm px-5 py-2.5 text-center">Write</button>
                </div> 
            </Link>
            <div className="relative">
            <HoverCard>
        
              <HoverCardTrigger asChild>
              
                <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-sm font-medium  dark:bg-gray-800 dark:hover:bg-gray-700">
          
                <Avatar size={"big"} name={user ? user.name : 'Default'} />




        </div>
        
        </HoverCardTrigger>
        <HoverCardContent align="end" className="w-64" side="bottom">
                
                <div className="space-y-2 p-4">
                  <div className="flex items-center gap-3">
                
                  <Avatar size={"big"} name={user ? user.name : 'Default'} />

              
             
                    <div>
                   
                      <h4 className="text-sm font-semibold">{user ? user.name : 'Default'}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">@{user ? user.name : 'Default'}</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Link to={'/'}>
                    <Button className="w-full mt-5" size="sm" >
                      Sign Out
                    </Button>
                    </Link>
                   
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
        </div>
        </div>
    </div>
}
//@ts-ignore
function FeatherIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
      <line x1="16" x2="2" y1="8" y2="22" />
      <line x1="17.5" x2="9" y1="15" y2="15" />
    </svg>
  )
}


