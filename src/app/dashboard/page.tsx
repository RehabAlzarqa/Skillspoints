"use client";

import React from "react";
import Link from "next/link";
import AppLayout from "@/app/components/AppLayout";
import { COURSES, CURRENT_USER, REWARDS } from "@/lib/mockData";
import {
  BookOpen,
  CheckCircle2,
  Coins,
  ArrowRight,
  Sparkles,
  Flame,
  Award,
  PlayCircle,
  TrendingUp,
} from "lucide-react";

export default function DashboardPage() {
  const activeCourse = COURSES[0]; // Data Security Basics

  return (
    <AppLayout activePath="/dashboard">
      <div className="space-y-8">
        {/* Welcome Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              Good morning, Sarah! 👋
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Keep learning, keep growing.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/rewards"
              className="inline-flex items-center gap-2 bg-amber-500 text-white font-semibold text-sm px-4 py-2 rounded-xl shadow-md shadow-amber-500/20 hover:bg-amber-600 transition"
            >
              <Coins className="w-4 h-4 fill-white" />
              <span>{CURRENT_USER.points.toLocaleString()} pts</span>
            </Link>
            <Link
              href="/rewards"
              className="text-xs text-blue-600 font-semibold hover:underline"
            >
              View history
            </Link>
          </div>
        </div>

        {/* Top Cards: Progress Stats & Continue Learning */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Progress Summary Card */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Your Progress</h2>
                <p className="text-xs text-slate-400">This week</p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> 87%
              </span>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 border-y border-slate-100 py-4">
              <div>
                <p className="text-xs text-slate-500">Courses in progress</p>
                <p className="text-2xl font-extrabold text-slate-900 mt-1">3</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Lessons completed</p>
                <p className="text-2xl font-extrabold text-slate-900 mt-1">12</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Points earned</p>
                <p className="text-2xl font-extrabold text-blue-600 mt-1">560</p>
              </div>
            </div>

            {/* Weekly Progress Bar */}
            <div>
              <div className="flex justify-between text-xs font-medium mb-1.5">
                <span className="text-slate-600">Keep it up!</span>
                <span className="text-slate-900 font-semibold">87%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: "87%" }}
                />
              </div>
            </div>
          </div>

          {/* Continue Learning Widget */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-6 shadow-lg shadow-blue-500/20 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/20 text-white text-xs font-semibold rounded-full backdrop-blur-xs">
                <BookOpen className="w-3.5 h-3.5" /> Continue Learning
              </span>
              <h3 className="text-xl font-bold mt-3 leading-snug">
                {activeCourse.title}
              </h3>
              <p className="text-blue-100 text-xs">Lesson 3 of 6</p>
            </div>

            <div className="mt-6 space-y-4">
              {/* Progress bar */}
              <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-white h-2 rounded-full"
                  style={{ width: `${activeCourse.progress}%` }}
                />
              </div>

              <Link
                href={`/courses/${activeCourse.id}/lessons/les-3`}
                className="w-full inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-blue-50 transition shadow-sm"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Recommended for You */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500 fill-amber-400" />
              Recommended for you
            </h2>
            <Link
              href="/courses"
              className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1"
            >
              View all <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {COURSES.slice(2, 6).map((course) => (
              <Link
                key={course.id}
                href={`/courses/${course.id}`}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition duration-200 flex flex-col justify-between group"
              >
                <div className="relative h-36 w-full overflow-hidden bg-slate-100">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                    {course.level}
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition">
                      {course.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {course.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100 text-xs font-semibold">
                    <span className="text-slate-500">{course.duration}</span>
                    <span className="text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
                      +{course.points} pts
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Split Section: Recent Activity & Rewards Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity Feed */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Completed lesson: Phishing Basics
                    </p>
                    <p className="text-xs text-slate-400">Data Security Basics</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                  +50 pts
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                    <Coins className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Earned points for daily streak
                    </p>
                    <p className="text-xs text-slate-400">3 days streak</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
                  +100 pts
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Redeemed reward: N1,000 Airtime
                    </p>
                    <p className="text-xs text-slate-400">Rewards Marketplace</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-600 bg-slate-200 px-2.5 py-1 rounded-full">
                  -1,000 pts
                </span>
              </div>
            </div>
          </div>

          {/* Rewards Preview */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-slate-900">Rewards preview</h2>
                <Link
                  href="/rewards"
                  className="text-xs font-semibold text-blue-600 hover:underline"
                >
                  View all
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {REWARDS.slice(0, 3).map((item) => (
                  <Link
                    key={item.id}
                    href="/rewards"
                    className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center hover:border-blue-300 hover:bg-blue-50/50 transition flex flex-col items-center justify-between"
                  >
                    <span className="text-2xl mb-1">{item.image}</span>
                    <p className="text-xs font-medium text-slate-700 line-clamp-1">
                      {item.title}
                    </p>
                    <span className="text-[10px] font-bold text-amber-600 mt-1">
                      {item.points} pts
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/rewards"
              className="mt-6 w-full py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold text-center block hover:bg-slate-800 transition"
            >
              Explore Rewards Catalog
            </Link>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}