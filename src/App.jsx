import React, { useCallback, useEffect, useState } from 'react'
import Navbar from './Components/Navbar'

const App = () => {

  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number) str += "0123456789";
    if(char) str += "!@#$%^&*()_+";

    for (let i = 1 ; i <= length; i++) {
      let characters = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(characters);
      
    }

    setPassword(pass);
  },[length, number, char, setPassword])


  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator, length, number, char])

  return (
    <main className="w-full h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center">
  <Navbar />
  
  {/* Title with Neon Glow */}
  <h1 className="text-5xl text-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text font-extrabold drop-shadow-[0_0_20px_rgba(255,165,0,0.7)] animate-pulse">
    🔐 Password Generator 🔥
  </h1>

  {/* Glassmorphism Card */}
  <div className="w-full max-w-md mx-auto shadow-xl rounded-lg px-6 py-6 my-8 bg-white/10 backdrop-blur-lg border border-gray-600/50 mt-10 transition-transform transform hover:scale-105 duration-500 animate-float">
    
    {/* Animated Password Input */}
    <div className="flex shadow-lg rounded-lg overflow-hidden mb-4 bg-gray-800/50 border border-gray-500/50">
      <input
        type="text"
        value={password}
        className="outline-none w-full py-2 px-3 text-lg text-white font-semibold bg-transparent placeholder-gray-400 animate-shimmer"
        placeholder="Generated Password"
        readOnly
      />
      <button className="px-5 bg-blue-500 text-white font-semibold hover:bg-blue-400 transition-all duration-300 active:scale-95 shadow-md hover:shadow-blue-500/50">
        Copy
      </button>
    </div>

    {/* Controls Section */}
    <div className="flex flex-col text-sm gap-y-3">
      
      {/* Length Slider */}
      <div className="flex items-center justify-between text-gray-300">
        <span className="text-lg font-semibold">Length: {length}</span>
        <input
          type="range"
          min={6}
          max={20}
          value={length}
          className="cursor-pointer accent-red-500 w-40 transition-all duration-300 hover:scale-105"
          onChange={(e) => setLength(e.target.value)}
        />
      </div>

      {/* Checkboxes with Neon Effects */}
      <div className="flex justify-between items-center mt-3">
        
        <label className="flex items-center gap-x-2 text-gray-300 cursor-pointer">
          <input
            type="checkbox"
            defaultChecked={number}
            onChange={() => setNumber((prev) => !prev)}
            className="w-5 h-5 accent-green-500 transition-all duration-300 transform hover:scale-110 checked:shadow-[0_0_10px_rgba(0,255,0,0.7)]"
          />
          <span>Include Numbers</span>
        </label>

        <label className="flex items-center gap-x-2 text-gray-300 cursor-pointer">
          <input
            type="checkbox"
            defaultChecked={char}
            onChange={() => setChar((prev) => !prev)}
            className="w-5 h-5 accent-purple-500 transition-all duration-300 transform hover:scale-110 checked:shadow-[0_0_10px_rgba(128,0,128,0.7)]"
          />
          <span>Special Characters</span>
        </label>
      </div>
    </div>
  </div>
</main>

  )
}

export default App