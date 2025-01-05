import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-w-[320px] min-h-screen bg-[#1a1a1a] text-white font-orbitron">
      <div className="bg-[#1a1a1a] p-8 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)] w-[350px] flex flex-col items-center relative animate-roaming-line">
        <h2 className="text-4xl mb-5 text-center text-[#1cd41c] font-bold tracking-[2px] drop-shadow-enigma-glow">
          Sign Up
        </h2>
        <form className="w-full" onSubmit={(e) => e.preventDefault()}>
          <p className="text-base text-[#bbb] mb-1 transition-transform duration-300 ease-in-out hover:translate-y-[-4px] hover:text-[#1cd41c] tracking-[1px]">
            Username
          </p>
          <input
            type="text"
            className="w-full p-[10px] my-[10px] border border-[#1cd41c] rounded bg-[#2c2c2c] text-white transition-all duration-300 ease-in-out hover:translate-y-[-4px] hover:border-[#1cd41c] hover:shadow-[0_0_8px_2px_rgba(28,212,28,0.8)] focus:translate-y-[-4px] focus:border-[#1cd41c] focus:shadow-[0_0_8px_2px_rgba(28,212,28,0.8)] focus:outline-none placeholder:text-[#1cd41c] tracking-[1px]"
            placeholder="Choose a username"
            required
          />
          <p className="text-base text-[#bbb] mb-1 transition-transform duration-300 ease-in-out hover:translate-y-[-4px] hover:text-[#1cd41c] tracking-[1px]">
            Email
          </p>
          <input
            type="email"
            className="w-full p-[10px] my-[10px] border border-[#1cd41c] rounded bg-[#2c2c2c] text-white transition-all duration-300 ease-in-out hover:translate-y-[-4px] hover:border-[#1cd41c] hover:shadow-[0_0_8px_2px_rgba(28,212,28,0.8)] focus:translate-y-[-4px] focus:border-[#1cd41c] focus:shadow-[0_0_8px_2px_rgba(28,212,28,0.8)] focus:outline-none placeholder:text-[#1cd41c] tracking-[1px]"
            placeholder="Enter your email"
            required
          />
          <p className="text-base text-[#bbb] mb-1 transition-transform duration-300 ease-in-out hover:translate-y-[-4px] hover:text-[#1cd41c] tracking-[1px]">
            Password
          </p>
          <input
            type="password"
            className="w-full p-[10px] my-[10px] border border-[#1cd41c] rounded bg-[#2c2c2c] text-white transition-all duration-300 ease-in-out hover:translate-y-[-4px] hover:border-[#1cd41c] hover:shadow-[0_0_8px_2px_rgba(28,212,28,0.8)] focus:translate-y-[-4px] focus:border-[#1cd41c] focus:shadow-[0_0_8px_2px_rgba(28,212,28,0.8)] focus:outline-none placeholder:text-[#1cd41c] tracking-[1px]"
            placeholder="Choose a password"
            required
          />
          <p className="text-base text-[#bbb] mb-1 transition-transform duration-300 ease-in-out hover:translate-y-[-4px] hover:text-[#1cd41c] tracking-[1px]">
            Confirm Password
          </p>
          <input
            type="password"
            className="w-full p-[10px] my-[10px] border border-[#1cd41c] rounded bg-[#2c2c2c] text-white transition-all duration-300 ease-in-out hover:translate-y-[-4px] hover:border-[#1cd41c] hover:shadow-[0_0_8px_2px_rgba(28,212,28,0.8)] focus:translate-y-[-4px] focus:border-[#1cd41c] focus:shadow-[0_0_8px_2px_rgba(28,212,28,0.8)] focus:outline-none placeholder:text-[#1cd41c] tracking-[1px]"
            placeholder="Confirm your password"
            required
          />
          <button
            type="submit"
            className="w-full py-3 px-4 mt-[10px] bg-transparent text-[#1cd41c] text-base font-medium rounded-lg border-2 border-[#1cd41c] shadow-[0_4px_8px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out uppercase tracking-[2px] hover:translate-y-[-4px] hover:shadow-[0_0_8px_2px_rgba(28,212,28,0.8),0_0_16px_4px_rgba(28,212,28,0.6)] hover:bg-[#1cd41c] hover:text-white hover:border-[#1cd41c]"
          >
            Create Account
          </button>
        </form>
        <button
          type="button"
          className="bg-transparent text-[#888] border-2 border-[#888] px-4 py-3 mt-5 rounded-lg transition-all duration-300 ease-in-out uppercase tracking-[2px] hover:translate-y-[-4px] hover:shadow-[0_0_8px_2px_rgba(136,136,136,0.8),0_0_16px_4px_rgba(136,136,136,0.6)] hover:bg-[#888] hover:text-white hover:border-[#888]"
          onClick={() => navigate('/login')}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
