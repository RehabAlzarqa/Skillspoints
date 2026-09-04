"use client";

import React, { useState } from "react";
import Link from "next/link";
import AppLayout from "@/app/components/AppLayout";
import { COURSES } from "@/lib/mockData";
import {
  Search,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Coins,
  Clock,
  Sparkles,
} from "lucide-react";

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Technology",
    "Business",
    "Design",
    "Personal Development",
    "Compliance",
  ];

  const filteredCourses = COURSES.filter((course) => {
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <AppLayout activePath="/courses">
      <div className="space-y-6">
        {/* Title Header */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Browse Courses
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Explore courses and start learning today.
          </p>
        </div>

        {/* Search & Sort Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search courses, topics or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:border-blue-500 focus:outline-none shadow-xs"
            />
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              Sort by:
            </span>
            <select className="bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-700 focus:outline-none shadow-xs cursor-pointer">
              <option>Popular</option>
              <option>Newest</option>
              <option>Highest Points</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-500/20"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition duration-200 flex flex-col justify-between group"
            >
              {/* Thumbnail Container */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-slate-800 text-xs font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                  {course.level}
                </span>
                {course.progress !== undefined && course.progress > 0 && (
                  <span className="absolute bottom-3 right-3 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
                    {course.progress}% Completed
                  </span>
                )}
              </div>

              {/* Card Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 mb-1">
                    <span>{course.category}</span>
                    <span>•</span>
                    <span>{course.lessonsCount} Lessons</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-600 transition">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 line-clamp-2">
                    {course.description}
                  </p>
                </div>

                {/* Progress bar if active */}
                {course.progress !== undefined && course.progress > 0 && (
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-emerald-500 h-1.5 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                )}

                {/* Footer Metadata */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-semibold">
                  <span className="text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {course.duration}
                  </span>
                  <span className="text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full flex items-center gap-1 border border-amber-200/50">
                    <Coins className="w-3.5 h-3.5 fill-amber-500 text-amber-600" />
                    {course.points} pts
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-2 pt-6">
          <button className="p-2 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 disabled:opacity-50">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold text-xs shadow-xs">
            1
          </button>
          <button className="w-8 h-8 rounded-lg border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50">
            2
          </button>
          <button className="w-8 h-8 rounded-lg border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50">
            3
          </button>
          <span className="text-slate-400 text-xs px-1">...</span>
          <button className="w-8 h-8 rounded-lg border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50">
            6
          </button>
          <button className="p-2 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </AppLayout>
  );
}
