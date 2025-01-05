import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-w-[320px] min-h-screen bg-[#111111] text-white font-orbitron">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap');
        `}
      </style>

      <div className="bg-[#1a1a1a] p-8 rounded-lg shadow-lg w-[350px] flex flex-col items-center relative border-2 border-transparent animate-roaming-line">
        <h2 className="text-2xl mb-5 text-center text-[#1cd41c] font-bold tracking-widest glow">
          Enigma25 Login
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Add your login logic here
          }}
          className="w-full"
        >
          <p className="text-base mb-1 text-[#bbb] hover:translate-y-[-4px] hover:text-[#1cd41c] transition-all">
            Username
          </p>
          <input
            type="text"
            className="w-full p-2 mb-4 border border-[#1cd41c] rounded bg-[#2c2c2c] text-white focus:translate-y-[-4px] focus:ring focus:ring-[#1cd41c]/80 focus:outline-none focus:shadow-[0_0_8px_2px_rgba(28,212,28,0.8)] placeholder-[#1cd41c] transition-all"
            placeholder="Username"
            required
          />
          <p className="text-base mb-1 text-[#bbb] hover:translate-y-[-4px] hover:text-[#1cd41c] transition-all">
            Password
          </p>
          <input
            type="password"
            className="w-full p-2 mb-4 border border-[#1cd41c] rounded bg-[#2c2c2c] text-white focus:translate-y-[-4px] focus:ring focus:ring-[#1cd41c]/80 focus:outline-none focus:shadow-[0_0_8px_2px_rgba(28,212,28,0.8)] placeholder-[#1cd41c] transition-all"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="w-full p-3 mt-4 bg-transparent text-[#1cd41c] text-lg font-medium border-2 border-[#1cd41c] rounded-lg uppercase tracking-wider shadow-lg hover:translate-y-[-4px] hover:bg-[#1cd41c] hover:text-white hover:shadow-[0_0_16px_4px_rgba(28,212,28,0.6)] transition-all"
          >
            Login
          </button>
        </form>
        <button
          type="button"
          onClick={() => {
            // Add your signup navigation logic here
          }}
          className="mt-5 px-6 py-3 bg-transparent text-[#888] text-sm font-medium border border-[#888] rounded-lg tracking-widest hover:bg-[#888] hover:text-white hover:shadow-[0_0_16px_4px_rgba(136,136,136,0.6)] transition-all"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

