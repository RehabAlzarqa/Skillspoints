"use client";


export default function Home() {
  return (
<div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
  <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-10 text-center">
    
    <h1 className="text-5xl font-bold mb-4">Skillspoints</h1>
    <p className="text-lg mb-8 text-gray-600">Développez vos compétences en quelques minutes</p>

    <input 
      type="email" 
      placeholder="Email"
      className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <input 
      type="password" 
      placeholder="Password"
      className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <button className="w-full p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
      Se connecter
    </button>

    <a href="#" className="block mt-5 text-blue-500 hover:underline">
      Mot de passe oublié?
    </a>

  </div>
</div>
  );
}
