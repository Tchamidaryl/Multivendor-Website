import { AlignJustify, Bell, LayoutDashboard, LogOut, Settings, Sun, User, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ThemeSwitcherBtn from '../ThemeSwitcherBtn'
import Link from 'next/link'
import UserAvatar from './UserAvatar'


export default function Navbar({setShowSidebar, showSidebar}) {
  const user = {}
  return (
    <div className="flex items-center justify-between bg-white dark:bg-slate-800 text-slate-50 h-20 px-8 py-8 fixed top-0 w-full md:left-64 right-0 z-50 sm:pr-[20rem]">
      <Link href={"/dashboard"} className="sm:hidden">Logo</Link>
      {/* Icons */}
      <button onClick={() => setShowSidebar(!showSidebar)} className="text-lime-700 dark:text-lime-500">
        <AlignJustify className='md:hidden block'/>
      </button>
      {/* 3 Icons */}
      <div className="flex space-x-3">
        {/* theme */}
        <ThemeSwitcherBtn/>

        {/* Notification */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg">
              <Bell className="text-lime-700 dark:text-lime-500"/>
              <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-0 end-6 dark:border-gray-900">20</div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="px-4 py-2 pr-8">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <Image src='/profile.png' alt="User profile" width={200} height={200} className="w-8 h-8 rounded-full"/>
                <div className="flex flex-col space-y-1">
                  <p>Yellow Sweet Corn Stock out,</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-3 py-0.5 bg-red-700 text-white rounded-full text-sm">Stock Out</p>
                    <p>Dec 12 2021 - 12:40PM</p>
                  </div>
                </div>
                <button>
                  <X/>
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <Image src='/profile.png' alt="User profile" width={200} height={200} className="w-8 h-8 rounded-full"/>
                <div className="flex flex-col space-y-1">
                  <p>Yellow Sweet Corn Stock out,</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-3 py-0.5 bg-red-700 text-white rounded-full text-sm">Stock Out</p>
                    <p>Dec 12 2021 - 12:40PM</p>
                  </div>
                </div>
                <button>
                  <X/>
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <Image src='/profile.png' alt="User profile" width={200} height={200} className="w-8 h-8 rounded-full"/>
                <div className="flex flex-col space-y-1">
                  <p>Yellow Sweet Corn Stock out,</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-3 py-0.5 bg-red-700 text-white rounded-full text-sm">Stock Out</p>
                    <p>Dec 12 2021 - 12:40PM</p>
                  </div>
                </div>
                <button>
                  <X/>
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />

          </DropdownMenuContent>
        </DropdownMenu>

        {/* My Account */}
        <UserAvatar user={user}/>
      </div>
    </div>
  )
}
