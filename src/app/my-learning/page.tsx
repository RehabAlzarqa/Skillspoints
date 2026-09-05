"use client";

import React, { useState } from "react";
import Link from "next/link";
import AppLayout from "@/app/components/AppLayout";
import { COURSES } from "@/lib/mockData";
import { BookOpen, Compass, ArrowRight, Play } from "lucide-react";

export default function MyLearningPage() {
  const [activeTab, setActiveTab] = useState<"in-progress" | "completed" | "saved">(
    "in-progress"
  );

  const inProgressCourses = COURSES.filter(
    (c) => c.progress !== undefined && c.progress > 0
  );
  const completedCourses = COURSES.slice(2, 5);
  const savedCourses = COURSES.slice(1, 4);

  return (
    <AppLayout activePath="/my-learning">
      <div className="space-y-6">
        {/* Page Title */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            My Learning
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Track your ongoing courses, finished credentials, and saved items.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-3 border-b border-slate-200">
          <button
            onClick={() => setActiveTab("in-progress")}
            className={`pb-3 text-sm font-bold border-b-2 transition cursor-pointer ${
              activeTab === "in-progress"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            In Progress ({inProgressCourses.length})
          </button>
          <button
            onClick={() => setActiveTab("completed")}
            className={`pb-3 text-sm font-bold border-b-2 transition cursor-pointer ${
              activeTab === "completed"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            Completed (12)
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={`pb-3 text-sm font-bold border-b-2 transition cursor-pointer ${
              activeTab === "saved"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            Saved (5)
          </button>
        </div>

        {/* Tab Content List */}
        <div className="space-y-4">
          {activeTab === "in-progress" &&
            inProgressCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs hover:border-blue-200 transition"
              >
                <div className="flex items-center gap-5 w-full sm:w-auto">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-20 h-20 rounded-xl object-cover shrink-0"
                  />
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <h3 className="text-base font-bold text-slate-900 truncate">
                      {course.title}
                    </h3>
                    <p className="text-xs text-slate-500">
                      Continue: Lesson {course.completedLessons} of{" "}
                      {course.lessonsCount}
                    </p>

                    {/* Progress Bar */}
                    <div className="flex items-center gap-3 pt-1">
                      <div className="w-48 bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-emerald-500 h-2 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                      <span className="text-xs font-bold text-slate-700">
                        {course.progress}%
                      </span>
                    </div>
                  </div>
                </div>

                <Link
                  href={`/courses/${course.id}/lessons/les-3`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition shadow-xs shrink-0"
                >
                  <span>Continue</span>
                  <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                </Link>
              </div>
            ))}

          {activeTab === "completed" &&
            completedCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{course.title}</h3>
                    <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md mt-1 inline-block">
                      100% Completed
                    </span>
                  </div>
                </div>
                <Link
                  href={`/courses/${course.id}/completed`}
                  className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  View Certificate
                </Link>
              </div>
            ))}

          {activeTab === "saved" &&
            savedCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{course.title}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{course.level} • {course.duration}</p>
                  </div>
                </div>
                <Link
                  href={`/courses/${course.id}`}
                  className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700"
                >
                  Start Course
                </Link>
              </div>
            ))}
        </div>

        {/* Bottom Catalog Callout Banner */}
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200/60 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-slate-900">
              Looking for more?
            </h2>
            <p className="text-sm text-slate-600 max-w-md">
              Browse our catalog and find the next skill to master.
            </p>
          </div>

          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition shadow-md shadow-blue-500/20 whitespace-nowrap"
          >
            <Compass className="w-4 h-4" />
            <span>Browse Courses</span>
          </Link>
        </div>
      </div>
    </AppLayout>
  );
}
