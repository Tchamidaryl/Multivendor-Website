'use client'
import React, { useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/logo-dark.jpg'
import { Boxes, Building2, ChevronDown, ChevronRight, ExternalLink, LayoutGrid, LayoutList, LogOut, MonitorPlay, ScanSearch, SendToBack, Slack, Truck, User, Users2, UserSquare2, Wallet, Warehouse } from 'lucide-react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { usePathname } from 'next/navigation'

export default function Sidebar({showSidebar, setShowSidebar}) {
  const pathname = usePathname()
  const sidebarLinks = [
    {
      title:"Customers",
      icon: Users2,
      href:"/dashboard/customers",
    },
    {
      title:"Markets",
      icon: Warehouse,
      href:"/dashboard/markets",
    },
    {
      title:"Farmers",
      icon: UserSquare2,
      href:"/dashboard/farmers",
    },
    {
      title:"Orders",
      icon: Truck,
      href:"/dashboard/orders",
    },
    {
      title:"Our Staff",
      icon: User,
      href:"/dashboard/staff",
    },
    {
      title:"Limi Community",
      icon: Building2,
      href:"/dashboard/community",
    },
    {
      title:"Wallet",
      icon: Wallet,
      href:"/dashboard/wallet",
    },
    {
      title:"Settings",
      icon: LayoutGrid,
      href:"/dashboard/settings",
    },
    {
      title:"Online Store",
      icon: ExternalLink,
      href:"/",
    },
  ];
  const catalogLinks = [
    {
      title:"Products",
      icon: Boxes,
      href:"/dashboard/products",
    },
    {
      title:"Categories",
      icon: LayoutList,
      href:"/dashboard/categories",
    },
    {
      title:"Attributes",
      icon: SendToBack,
      href:"/dashboard/attributes",
    },
    {
      title:"Coupons",
      icon: ScanSearch,
      href:"/dashboard/coupons",
    },
    {
      title:"Store Sliders",
      icon: MonitorPlay,
      href:"/dashboard/banners",
    }
  ];
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className={showSidebar?"sm:block dark:bg-slate-800 bg-white space-y-6 w-64 h-screen text-slate-800 dark:text-slate-300 fixed left-0 top-0 shadow-md z-10 mt-20 sm:mt-0 overflow-y-scroll":"hidden sm:block dark:bg-slate-800 bg-white space-y-6 w-64 h-screen text-slate-800 dark:text-slate-300 fixed left-0 top-0 shadow-md z-10 mt-20 sm:mt-0 overflow-y-scroll"} >
        <Link onClick={() =>setShowSidebar(false)} className="mb-6 flex items-center px-6 py-4" href="/dashboard">
          <Image src={logo} alt="kronos logo" width={60} height={60} className="rounded-full" />
          <p className='ml-4 font-bold text-2xl'>KRONOS</p>
        </Link>
        <div className="space-y-3 flex flex-col">
            <Link onClick={() =>setShowSidebar(false)} href="/dashboard" className={pathname === '/dashboard'?"flex items-center space-x-3 px-6 py-2 border-l-8 border-lime-500 text-lime-600":"flex items-center space-x-3 px-6 py-2"}>
              <LayoutGrid/>
              <span>Dashboard</span>
            </Link>

            <Collapsible className="px-6 py-2" >
              <CollapsibleTrigger className="" onClick={() => setOpenMenu(!openMenu)}>
                <button className='flex items-center space-x-6 py-2'>
                  <div className="flex items-center space-x-3">
                    <Slack/>
                    <span>Catalogue</span>
                  </div>
                  { openMenu ? <ChevronDown/> : <ChevronRight/>}
                </button>
              </CollapsibleTrigger>
              <CollapsibleContent className=" py-3 px-3 pl-6 bg-slate-800 rounded-lg">

                {
                  catalogLinks.map((item,i) => {
                    const Icon = item.icon
                    return(
                        <Link onClick={() =>setShowSidebar(false)} key={i} href={item.href} className={pathname===item.href?"flex items-center space-x-3 py-1 text-sm text-lime-600":"flex items-center space-x-3 py-1 text-slate-100"}>
                          <Icon className="w-4 h-4"/>
                          <span>{item.title}</span>
                        </Link>
                    )
                  })
                }

              </CollapsibleContent>
            </Collapsible>

            {
              sidebarLinks.map((item,i) => {
                const Icon = item.icon
                return(
                  <Link onClick={() =>setShowSidebar(false)} key={i} href={item.href} className={item.href==pathname?"flex items-center space-x-3 px-6 py-2 border-l-8 border-lime-500 text-lime-600":"flex items-center space-x-3 px-6 py-2"}>
                  <Icon />
                  <span>{item.title}</span>
                  </Link>
                )
              })
            }
            <div className="px-6 py-2">
              <button  className='bg-lime-600 rounded-md flex items-center space-x-3 px-6 py-3'>
                <LogOut/>
                <span>Logout</span>
              </button>
            </div>
        </div>
    </div>
  )
}
