import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"

export const Appbar = () => {
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

            <Avatar size={"big"} name="Royal" />
        </div>
    </div>
}

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


<div className="flex items-center gap-4">
          
          <div className="relative">
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <Avatar className="h-6 w-6">
                    <AvatarImage alt="John Doe" src="/avatar.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <span>John Doe</span>
                </div>
              </HoverCardTrigger>
              <HoverCardContent align="end" className="w-64" side="bottom">
                <div className="space-y-2 p-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage alt="John Doe" src="/avatar.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-sm font-semibold">John Doe</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">@johndoe</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Link className="text-sm font-medium hover:underline" href="#">
                      View Profile
                    </Link>
                    <Link className="text-sm font-medium hover:underline" href="#">
                      Account Settings
                    </Link>
                    <Button className="w-full" size="sm" variant="destructive">
                      Sign Out
                    </Button>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>