"use client"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { signOut, useSession } from "next-auth/react"
import { User, Mail, LogOut, LayoutDashboard } from "lucide-react"
import { MdEmail } from "react-icons/md"

export function ProfilePopover() {
  const { data: session, status } = useSession()

  if (status !== 'authenticated' || !session?.user) {
    return null
  }

  const { user } = session

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button 
          className="rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2"
          aria-label="Open profile menu"
        >
          {user.image ? (
            <img 
              src={user.image} 
              alt={user.name || "User"} 
              className="h-9 w-9 cursor-pointer rounded-full border-2 border-neutral-800 object-cover"
            />
          ) : (
            <div className="h-10 w-10 rounded-full border-2 border-neutral-800 bg-neutral-700 flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
          )}
        </button>
      </PopoverTrigger>

      <PopoverContent className="w-fit p-0 font-sans border border-neutral-300 shadow-lg">
        <div className="flex flex-col">
          {/* Header */}
          <div className="px-4 py-2 border-b border-neutral-300 ">
            <h3 className="font-semibold text-md text-neutral-700"> My Profile</h3>
          </div>


          {/* Name Section */}
          {user.name && (
            <div className="px-4 py-2  border-b border-neutral-300">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-neutral-500  " />
                  <p className="text-xs text-neutral-500 uppercase tracking-wide ">Name</p>
                  <p className="text-sm text-neutral-900 ">{user.name}</p>
                              </div>
            </div>
          )}

          {/* Email Section */}
          {user.email && (
            <div className="px-4 py-2 border-b border-neutral-300">
              <div className="flex items-center gap-2">
                <MdEmail className="h-4 w-4 text-neutral-500 " />
                  <p className="text-xs text-neutral-500 uppercase tracking-wide">Email</p>
                  <p className="text-sm text-neutral-900 break-words">{user.email}</p>
              </div>
            </div>
          )}

          {
                        <div className="px-2 py-1 ">
              <button onClick={()=>signOut()} className="flex items-center gap-2 text-neutral-500 cursor-pointer hover:text-black  rounded-md px-2 py-1">
                <LogOut className="h-4 w-4  " />
                  <p className="text-sm   tracking-wide">Logout</p>
              </button>
            </div>

          }
        </div>
      </PopoverContent>
    </Popover>
  )
}