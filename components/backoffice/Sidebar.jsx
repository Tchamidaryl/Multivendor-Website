"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/tdLogo.webp";
import {
  Boxes,
  Building2,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  HeartHandshake,
  LayoutGrid,
  LayoutList,
  LecternIcon,
  LogOut,
  MonitorPlay,
  ScanSearch,
  Slack,
  Truck,
  User,
  Users2,
  UserSquare2,
  Wallet,
  Warehouse,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

export default function Sidebar({ showSidebar, setShowSidebar }) {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();
  const pathname = usePathname();
  if (status === "loading") {
    return <p className="text-slate-900 dark:text-slate-100">Loading...</p>;
  }

  const role = session?.user?.role;

  let sidebarLinks = [
    {
      title: "Customers",
      icon: Users2,
      href: "/dashboard/customers",
    },
    {
      title: "Markets",
      icon: Warehouse,
      href: "/dashboard/markets",
    },
    {
      title: "Farmers",
      icon: UserSquare2,
      href: "/dashboard/farmers",
    },
    {
      title: "Orders",
      icon: Truck,
      href: "/dashboard/orders",
    },
    {
      title: "Sales",
      icon: Truck,
      href: "/dashboard/sales",
    },
    {
      title: "Our Staff",
      icon: User,
      href: "/dashboard/staff",
    },
    {
      title: "Limi Community",
      icon: Building2,
      href: "/dashboard/community",
    },
    {
      title: "Wallet",
      icon: Wallet,
      href: "/dashboard/wallet",
    },
    {
      title: "Farmer Support",
      icon: HeartHandshake,
      href: "/dashboard/wallet",
    },
    {
      title: "Settings",
      icon: LayoutGrid,
      href: "/dashboard/settings",
    },
    {
      title: "Online Store",
      icon: ExternalLink,
      href: "/",
    },
  ];
  let catalogLinks = [
    {
      title: "Products",
      icon: Boxes,
      href: "/dashboard/products",
    },
    {
      title: "Categories",
      icon: LayoutList,
      href: "/dashboard/categories",
    },
    {
      title: "Coupons",
      icon: ScanSearch,
      href: "/dashboard/coupons",
    },
    {
      title: "Store Banners",
      icon: MonitorPlay,
      href: "/dashboard/banners",
    },
  ];
  if (role === "FARMER") {
    sidebarLinks = [
      {
        title: "Sales",
        icon: Truck,
        href: "/dashboard/sales",
      },
      {
        title: "My Orders",
        icon: Truck,
        href: "/dashboard/orders",
      },
      {
        title: "Wallet",
        icon: Wallet,
        href: "/dashboard/wallet",
      },
      {
        title: "Farmer Support",
        icon: HeartHandshake,
        href: "/dashboard/wallet",
      },
      {
        title: "Settings",
        icon: LayoutGrid,
        href: "/dashboard/settings",
      },
      {
        title: "Online Store",
        icon: ExternalLink,
        href: "/",
      },
    ];
    catalogLinks = [
    {
      title: "Products",
      icon: Boxes,
      href: "/dashboard/products",
    },
    {
      title: "Coupons",
      icon: ScanSearch,
      href: "/dashboard/coupons",
    },
  ];
  }
  if (role === "USER") {
    sidebarLinks = [
      {
        title: "My Orders",
        icon: Truck,
        href: "/dashboard/orders",
      },
      {
        title: "Profile",
        icon: Truck,
        href: "/dashboard/profile",
      },
      {
        title: "Online Store",
        icon: ExternalLink,
        href: "/",
      },
    ];
    catalogLinks = [];
  }

  async function handleLogout() {
    await signOut();
    router.push("/");
  }
  return (
    <div
      className={
        showSidebar
          ? "sm:block dark:bg-slate-800 bg-white space-y-6 w-64 h-screen text-slate-800 dark:text-slate-300 fixed left-0 top-0 shadow-md z-10 mt-20 sm:mt-0 overflow-y-scroll"
          : "hidden sm:block dark:bg-slate-800 bg-white space-y-6 w-64 h-screen text-slate-800 dark:text-slate-300 fixed left-0 top-0 shadow-md z-10 mt-20 sm:mt-0 overflow-y-scroll"
      }
    >
      <Link
        onClick={() => setShowSidebar(false)}
        className="mb-6 flex items-center px-6 py-4"
        href="/dashboard"
      >
        <Image
          src={logo}
          alt="kronos logo"
          width={60}
          height={60}
          className="rounded-full"
        />
        <p className="ml-4 font-bold text-2xl">tdMultiven</p>
      </Link>
      <div className="space-y-3 flex flex-col">
        <Link
          onClick={() => setShowSidebar(false)}
          href="/dashboard"
          className={
            pathname === "/dashboard"
              ? "flex items-center space-x-3 px-6 py-2 border-l-8 border-lime-500 text-lime-600"
              : "flex items-center space-x-3 px-6 py-2"
          }
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>

        {catalogLinks.length > 0 && (
          <Collapsible className="px-6 py-2">
            <CollapsibleTrigger
              className=""
              onClick={() => setOpenMenu(!openMenu)}
            >
              <div className="flex items-center space-x-6 py-2">
                <div className="flex items-center space-x-3">
                  <Slack />
                  <span>Catalog</span>
                </div>
                {openMenu ? <ChevronDown /> : <ChevronRight />}
              </div>
            </CollapsibleTrigger>

            <CollapsibleContent className="py-3 px-3 pl-6 dark:bg-slate-800 rounded-lg dark:text-slate-300">
              {catalogLinks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Link
                    onClick={() => setShowSidebar(false)}
                    key={i}
                    href={item.href}
                    className={
                      pathname === item.href
                        ? "flex items-center space-x-3 py-1 text-sm text-lime-600"
                        : "flex items-center space-x-3 py-1"
                    }
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </Link>
                );
              })}
            </CollapsibleContent>
          </Collapsible>
        )}

        {sidebarLinks.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              onClick={() => setShowSidebar(false)}
              key={i}
              href={item.href}
              className={
                item.href == pathname
                  ? "flex items-center space-x-3 px-6 py-2 border-l-8 border-lime-500 text-lime-600"
                  : "flex items-center space-x-3 px-6 py-2"
              }
            >
              <Icon />
              <span>{item.title}</span>
            </Link>
          );
        })}
        <div className="px-6 py-2">
          <button
            onClick={handleLogout}
            className="bg-lime-600 rounded-md flex items-center space-x-3 px-6 py-3"
          >
            <LogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
