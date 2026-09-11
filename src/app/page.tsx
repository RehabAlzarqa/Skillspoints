"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Compass,
  BookOpen,
  Gift,
  Trophy,
  Bell,
  PlusCircle,
  PlayCircle,
  Coins,
  ArrowRight,
  Zap,
  FileEdit,
  User,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { COURSES, CURRENT_USER, REWARDS, LEADERBOARD } from "@/lib/mockData";

export default function LandingPage() {
  const [activeScreenTab, setActiveScreenTab] = useState<number>(1);

  const screens = [
    {
      id: 1,
      title: "Dashboard / Home",
      desc: "Dashboard featuring progress hero banner, My Learning, micro-courses catalog, Points balance, course authoring, and rewards preview.",
      badge: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
    },
    {
      id: 2,
      title: "Browse Courses / Catalog",
      desc: "Micro-course catalog with duration filters, difficulty level tags, and vivid blue interactive buttons.",
      badge: "Catalog",
      icon: Compass,
      href: "/courses",
    },
    {
      id: 3,
      title: "Course Details",
      desc: "Course overview with instructor info, duration badges, learning checklist, and start course CTAs.",
      badge: "Details",
      icon: BookOpen,
      href: "/courses/data-security-basics",
    },
    {
      id: 4,
      title: "Lesson Player / Active Course",
      desc: "Clean video lesson player with progress bar, active lesson outline, and previous/next lesson controls.",
      badge: "Player",
      icon: PlayCircle,
      href: "/courses/data-security-basics/lessons/les-3",
    },
    {
      id: 5,
      title: "Course Completion",
      desc: "Trophy completion banner with earned points reward callouts and recommended micro-courses.",
      badge: "Completion",
      icon: Trophy,
      href: "/courses/data-security-basics/completed",
    },
    {
      id: 6,
      title: "Create Course Wizard",
      desc: "Multi-step creation wizard for uploading thumbnails, title, category tags, and duration.",
      badge: "Wizard",
      icon: PlusCircle,
      href: "/create-course",
    },
    {
      id: 7,
      title: "Lesson Editor",
      desc: "Studio editor with rich text controls, video upload dropzone, and section reordering.",
      badge: "Editor",
      icon: FileEdit,
      href: "/create-course/editor",
    },
    {
      id: 8,
      title: "My Learning Tracker",
      desc: "Personal hub organizing ongoing progress (Sitecore Fundemintell 65%), finished courses, and bookmarks.",
      badge: "My Learning",
      icon: BookOpen,
      href: "/my-learning",
    },
    {
      id: 9,
      title: "Points & Rewards Marketplace",
      desc: "Redemption store where learners swap earned points for mobile airtime, gift cards, and company rewards.",
      badge: "Marketplace",
      icon: Gift,
      href: "/rewards",
    },
    {
      id: 10,
      title: "Profile & Settings",
      desc: "User profile management for Sarah Johnson, department tags, bio updates, and security preferences.",
      badge: "Profile",
      icon: User,
      href: "/settings",
    },
    {
      id: 11,
      title: "Leaderboard",
      desc: "Employee ranking board with weekly and monthly filters, rank indicators (#4), and badge achievements.",
      badge: "Leaderboard",
      icon: Trophy,
      href: "/leaderboard",
    },
    {
      id: 12,
      title: "Notifications & Activity Center",
      desc: "Real-time updates for completed lessons, earned points, reward redemptions, and system alerts.",
      badge: "Notifications",
      icon: Bell,
      href: "/notifications",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased">
      {/* Top Header Navbar */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200/80 px-4 sm:px-8 py-3.5 shadow-2xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <Link href="/dashboard" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 flex items-center justify-center">
              <span className="w-4 h-4 rounded-full bg-blue-600 absolute top-0 left-1 shadow-sm" />
              <span className="w-4 h-4 rounded-full bg-cyan-400 absolute top-0 right-1 shadow-sm" />
              <span className="w-4 h-4 rounded-full bg-amber-400 absolute bottom-0 left-2.5 shadow-sm" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-[#1E293B] block leading-none">
                Skills<span className="text-[#4086F4]">Points</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-400 tracking-wider block mt-0.5 uppercase">
                Learn. Share. Earn.
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 font-semibold text-sm text-slate-600">
            <a href="#demo" className="hover:text-[#4086F4] transition">
              12 Screen Demo
            </a>
            <Link href="/courses" className="hover:text-[#4086F4] transition">
              Micro-Courses
            </Link>
            <Link href="/rewards" className="hover:text-[#4086F4] transition">
              Reward
            </Link>
            <Link href="/my-learning" className="hover:text-[#4086F4] transition">
              My Learning
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="px-4 py-2 text-slate-700 hover:text-slate-900 font-semibold text-sm transition"
            >
              Sign In
            </Link>
            <Link
              href="/dashboard"
              className="px-5 py-2.5 rounded-xl bg-[#4086F4] hover:bg-blue-600 text-white font-bold text-sm shadow-md transition flex items-center gap-2"
            >
              <span>Launch Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Banner Section */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#EBF3FF] via-[#E6F0FF] to-[#E0ECFF] rounded-3xl p-8 md:p-12 border border-blue-100/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-blue-200/60 text-[#4086F4] text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" /> Next-Gen Learning Platform
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              Keep learning, share your knowledge, and earn points!
            </h1>

            <p className="text-slate-600 text-base leading-relaxed">
              SkillsPoints combines bite-sized micro-courses, automated point rewards, and an exclusive rewards marketplace to drive continuous employee growth.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/dashboard"
                className="px-6 py-3 bg-[#4086F4] hover:bg-blue-600 text-white font-bold text-sm rounded-xl shadow-md transition flex items-center gap-2"
              >
                <span>Access Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/courses"
                className="px-6 py-3 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold text-sm rounded-xl transition"
              >
                Browse Micro-Courses
              </Link>
            </div>
          </div>

          {/* Graphic Banner Illustration */}
          <div className="w-72 sm:w-80 h-48 bg-white/70 backdrop-blur-xs rounded-3xl border border-blue-200/80 p-5 shadow-lg flex flex-col justify-between shrink-0">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="text-[10px] font-bold text-[#4086F4]">SkillsPoints App</span>
            </div>
            <div className="flex items-center justify-center my-auto">
              <div className="w-12 h-12 rounded-full bg-[#4086F4] text-white flex items-center justify-center shadow-md">
                <PlayCircle className="w-7 h-7" />
              </div>
            </div>
            <div className="flex justify-between items-center text-xs font-bold text-slate-700">
              <span>Sitecore Fundemintell</span>
              <span className="text-[#4086F4]">65% Done</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 12-Screen Showcase Section */}
      <section id="demo" className="py-12 px-4 sm:px-8 max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4086F4] bg-[#EBF3FF] px-3.5 py-1 rounded-full border border-blue-200/60">
            Application Screens Tour
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            Explore All Application Modules
          </h2>
          <p className="text-slate-500 text-sm">
            Select a module to view its exact design and jump directly into the live experience.
          </p>
        </div>

        {/* Tab Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {screens.map((scr) => {
            const Icon = scr.icon;
            const isActive = activeScreenTab === scr.id;
            return (
              <button
                key={scr.id}
                onClick={() => setActiveScreenTab(scr.id)}
                className={`p-3.5 rounded-2xl text-left border transition flex flex-col justify-between space-y-2 cursor-pointer ${
                  isActive
                    ? "bg-[#4086F4] border-blue-600 text-white shadow-md scale-[1.02]"
                    : "bg-white border-slate-200/80 text-slate-600 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold opacity-80">
                    0{scr.id}
                  </span>
                  <Icon className="w-4 h-4" />
                </div>
                <p className="text-xs font-bold line-clamp-1 leading-snug">
                  {scr.badge}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Screen Display Box */}
        {(() => {
          const currentScreen = screens.find((s) => s.id === activeScreenTab) || screens[0];
          const Icon = currentScreen.icon;

          return (
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF3FF] text-[#4086F4] flex items-center justify-center font-bold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {currentScreen.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {currentScreen.desc}
                    </p>
                  </div>
                </div>

                <Link
                  href={currentScreen.href}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#4086F4] hover:bg-blue-600 text-white font-bold text-xs shadow-2xs transition"
                >
                  <span>Launch Live Screen</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-[#F8FAFC] border border-slate-200/60 rounded-2xl p-6">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs text-slate-500 font-medium">
                  <span>SkillsPoints Interface • {currentScreen.title}</span>
                  <span className="text-emerald-600 font-bold">Live System</span>
                </div>

                <div className="pt-4 text-slate-800 text-sm">
                  {currentScreen.id === 1 && (
                    <div className="space-y-4">
                      <p className="font-bold text-slate-900">Dashboard Layout Preview:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-[#EBF3FF] rounded-2xl border border-blue-100">
                          <h4 className="font-bold text-slate-900">Hi Sarah !</h4>
                          <p className="text-xs text-slate-600 mt-1">Keep learning, share your knowledge, and earn points!</p>
                        </div>
                        <div className="p-4 bg-[#EBF3FF] rounded-2xl border border-blue-100">
                          <h4 className="font-bold text-slate-900">My Points</h4>
                          <p className="text-xl font-extrabold text-[#4086F4]">120 Points</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentScreen.id !== 1 && (
                    <p className="text-slate-600">
                      Previewing module <span className="font-bold text-slate-900">{currentScreen.title}</span>. Click &apos;Launch Live Screen&apos; to test this feature directly.
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })()}
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 sm:px-8 bg-white border-t border-slate-200 text-xs text-slate-500 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-slate-900">SkillsPoints</span>
            <span className="text-slate-400">• Learn. Share. Earn.</span>
          </div>

          <div className="flex gap-6 font-semibold text-slate-600">
            <Link href="/dashboard" className="hover:text-[#4086F4]">Home</Link>
            <Link href="/courses" className="hover:text-[#4086F4]">Micro-Courses</Link>
            <Link href="/rewards" className="hover:text-[#4086F4]">Reward</Link>
            <Link href="/rgpd" className="hover:text-[#4086F4]">Privacy Policy</Link>
          </div>

          <p>© {new Date().getFullYear()} SkillsPoints. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}


