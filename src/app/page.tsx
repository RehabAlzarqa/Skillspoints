"use client";

import { useRouter } from "next/navigation"
import { useState } from "react";
export default function Home() {
  const [mail, setMail] = useState("")
  const [pass, setPass] = useState("")
  const router =useRouter()

  const handleLogin = () => {
    if (mail === "rehab@example.com" && pass === "12345") {
      router.push("/dashboard");
    } else {
      alert("Email ou mot de passe incorrect");
    }
  };
  

  return (
    
<div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
  <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-10 text-center">
    
    <h1 className="text-5xl font-bold mb-4">Skillspoints</h1>
    <p className="text-lg mb-8 text-gray-600">Développez vos compétences en quelques minutes</p>
    <button type="button" onClick={() => router.push('/dashboard')}>dashbord</button>

    <input  value={mail}
    onChange={(e) => setMail(e.target.value)}
      type="email" 
      placeholder="Email"
      className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <input value={pass}
    onChange={(e) => setPass(e.target.value)}
      type="password" 
      placeholder="Password"
      className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <button 
    onClick={handleLogin}
    className="w-full p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
      Se connecter
    </button>

    <a href="#" className="block mt-5 text-blue-500 hover:underline">
      Mot de passe oublié?
    </a>

  </div>
</div>
  );
}
