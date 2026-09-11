"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Star, Menu, X, Coins, User } from "lucide-react";
import { CURRENT_USER } from "@/lib/mockData";

interface AppLayoutProps {
  children: React.ReactNode;
  activePath?: string;
}

export default function AppLayout({ children, activePath }: AppLayoutProps) {
  const pathname = usePathname();
  const currentPath = activePath || pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mainNavItems = [
    { name: "Home", href: "/dashboard" },
    { name: "Micro-Courses", href: "/courses" },
    { name: "Reward", href: "/rewards" },
    { name: "My Learning", href: "/my-learning" },
    { name: "Leaderboard", href: "/leaderboard" },
    { name: "Create Course", href: "/create-course" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased flex flex-col">
      {/* Top Header Navbar matching mockup */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200/80 px-4 sm:px-8 py-3.5 shadow-2xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo Brand */}
          <Link href="/dashboard" className="flex items-center gap-3 group">
            {/* Colorful three dots icon */}
            <div className="relative w-9 h-9 flex items-center justify-center">
              <span className="w-4 h-4 rounded-full bg-blue-600 absolute top-0 left-1 shadow-sm" />
              <span className="w-4 h-4 rounded-full bg-cyan-400 absolute top-0 right-1 shadow-sm" />
              <span className="w-4 h-4 rounded-full bg-amber-400 absolute bottom-0 left-2.5 shadow-sm" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-[#1E293B] block leading-none">
                Skills<span className="text-[#4086F4]">Points</span>
                <span className="text-amber-400 text-xs ml-0.5">✦</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-400 tracking-wider block mt-0.5 uppercase">
                Learn. Share. Earn.
              </span>
            </div>
          </Link>

          {/* Desktop Center Nav Links */}
          <nav className="hidden md:flex items-center gap-8 font-semibold text-sm text-slate-600">
            {mainNavItems.map((item) => {
              const isActive =
                currentPath === item.href ||
                (item.href !== "/dashboard" && currentPath.startsWith(item.href));

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition duration-150 py-1 ${
                    isActive
                      ? "text-[#4086F4] font-bold border-b-2 border-[#4086F4]"
                      : "hover:text-slate-900"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right User & Points Pill Bar */}
          <div className="flex items-center gap-3">
            {/* Pill Container */}
            <div className="flex items-center gap-2 bg-[#EFEFF3] p-1.5 rounded-full border border-slate-200/60 shadow-2xs">
              {/* Points Pill */}
              <Link
                href="/rewards"
                className="flex items-center gap-1.5 bg-[#D9D9DE] hover:bg-slate-300 text-slate-800 px-3 py-1 rounded-full text-xs font-bold transition"
              >
                <div className="w-4 h-4 rounded-full bg-amber-400 flex items-center justify-center text-white text-[10px]">
                  ★
                </div>
                <span>Points</span>
              </Link>

              {/* User Profile Pill */}
              <Link
                href="/settings"
                className="flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-full text-xs font-bold text-slate-800 shadow-2xs transition"
              >
                <div className="w-5 h-5 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center text-[10px] overflow-hidden">
                  <img
                    src={CURRENT_USER.avatar}
                    alt={CURRENT_USER.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span>Sarah</span>
              </Link>
            </div>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2 font-semibold text-sm text-slate-600">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-slate-100 text-slate-800"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Main Page View */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
        {children}
      </main>
    </div>
  );
}

