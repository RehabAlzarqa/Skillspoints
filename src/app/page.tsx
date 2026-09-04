"use client";

import Link from "next/link";
// homebage my website look like
export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-emerald-50 to-pink-100">
      <nav className="flex justify-between p-4">
        <span className="font-semibold text-lg">SkillsPoints</span>
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-xl text-sm transition shadow-md shadow-blue-500/20"
          >
            Accéder à l&apos;application
          </Link>
          <Link
            href="/signup"
            className="bg-gray-50 px-4 py-2 text-gray-600 rounded-xl cursor-pointer border border-gray-300 text-sm font-semibold hover:bg-gray-100 transition"
          >
            Commencer
          </Link>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center gap-4 px-4">
        <p className="font-bold text-5xl">Développez vos</p>
        <p className="font-bold text-5xl">compétences</p>
        <p className="text-[#4CAF50] font-bold text-5xl">en quelques minutes</p>
        <p className="text-gray-600 max-w-xl">
          Une plateforme d’apprentissage moderne pour acquérir de nouvelles
          compétences rapidement et efficacement.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-10 px-4">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 max-w-xs flex flex-col items-center text-center ransform hover:scale-110 transition group">
            <div className="w-12 h-12 rounded-full bg-[#A7F3D0] flex items-center justify-center mb-4 transform group-hover:scale-125 transition">
              📘
            </div>
            <h3 className="font-semibold mb-2">Micro-cours ciblés</h3>
            <p className="text-gray-600 text-sm">
              Des leçons courtes et efficaces pour apprendre rapidement ce dont
              vous avez besoin.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 max-w-xs flex flex-col items-center text-center transform hover:scale-110 transition group">
            <div className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center mb-4 transform group-hover:scale-125 transition">
              ⭐
            </div>
            <h3 className="font-semibold mb-2">Système de points</h3>
            <p className="text-gray-600 text-sm">
              Gagnez des points en complétant des cours et validez vos
              compétences.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 max-w-xs flex flex-col items-center text-center transform hover:scale-110 transition group">
            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4 transform group-hover:scale-125 transition">
              🎁
            </div>
            <h3 className="font-semibold mb-2">Récompenses</h3>
            <p className="text-gray-600 text-sm">
              Débloquez des badges et récompenses en progressant dans votre
              apprentissage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
