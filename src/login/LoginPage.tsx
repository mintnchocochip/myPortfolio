import React from 'react';
import { KeyRound, User } from 'lucide-react';

const LoginPage = () => {
  return (
    <div className="m-0 flex min-h-screen min-w-[320px] items-center justify-center bg-[#111111] font-['Orbitron'] text-white">
      <div className="relative flex w-[350px] flex-col items-center rounded-lg border-2 border-[#1cd41c] bg-[#1a1a1a] p-8 shadow-lg animate-border-glow">
        <h2 className="mb-6 text-center text-3xl font-bold tracking-wider text-[#1cd41c] drop-shadow-[0_0_10px_rgba(28,212,28,1)]">
          Enigma25 Login
        </h2>
        
        <form onSubmit={(e) => e.preventDefault()} className="w-full">
          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium tracking-wide text-gray-300 transition-all duration-300 hover:text-[#1cd41c] hover:-translate-y-1">
              Username
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#1cd41c]" />
              <input
                type="text"
                className="w-full rounded-md border-2 border-[#1cd41c] bg-[#2c2c2c] py-2 pl-10 pr-4 font-['Orbitron'] tracking-wide text-white placeholder-[#1cd41c]/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_8px_2px_rgba(28,212,28,0.8)] focus:outline-none focus:ring-2 focus:ring-[#1cd41c]"
                placeholder="Username"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="mb-1 block text-sm font-medium tracking-wide text-gray-300 transition-all duration-300 hover:text-[#1cd41c] hover:-translate-y-1">
              Password
            </label>
            <div className="relative">
              <KeyRound className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#1cd41c]" />
              <input
                type="password"
                className="w-full rounded-md border-2 border-[#1cd41c] bg-[#2c2c2c] py-2 pl-10 pr-4 font-['Orbitron'] tracking-wide text-white placeholder-[#1cd41c]/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_8px_2px_rgba(28,212,28,0.8)] focus:outline-none focus:ring-2 focus:ring-[#1cd41c]"
                placeholder="Password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg border-2 border-[#1cd41c] bg-transparent px-4 py-3 font-['Orbitron'] text-base font-medium tracking-wider text-[#1cd41c] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#1cd41c] hover:text-white hover:shadow-[0_0_8px_2px_rgba(28,212,28,0.8),0_0_16px_4px_rgba(28,212,28,0.6)]"
          >
            LOGIN
          </button>
        </form>

        <button
          type="button"
          className="mt-6 rounded-lg border-2 border-gray-500 bg-transparent px-6 py-2 font-['Orbitron'] text-sm font-medium tracking-wider text-gray-400 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gray-500 hover:text-white hover:shadow-[0_0_8px_2px_rgba(136,136,136,0.8),0_0_16px_4px_rgba(136,136,136,0.6)]"
        >
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
