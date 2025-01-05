import React from 'react';

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-bg-enigma-black text-white font-orbitron">
      <div className="bg-[#1a1a1a] p-8 rounded-lg shadow-lg w-96 flex flex-col items-center border-2 border-transparent animate-roaming-line">
        <h2 className="text-2xl mb-5 text-center text-enigma-green font-bold tracking-wide drop-shadow-glow">
          Enigma25 Sign Up
        </h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          // Add your signup here
        }}>
          <p className="text-base text-gray-400 mb-1 hover:text-enigma-green transition-transform transform hover:-translate-y-1">
            Username
          </p>
          <input 
            type="text" 
            placeholder="Choose a username" 
            required
            className="w-full p-2 mb-3 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-enigma-green focus:border-enigma-green focus:ring-2 focus:ring-enigma-green transition-transform transform hover:-translate-y-1"
          />
          
          <p className="text-base text-gray-400 mb-1 hover:text-enigma-green transition-transform transform hover:-translate-y-1">
            Email
          </p>
          <input 
            type="email" 
            placeholder="Enter your email" 
            required
            className="w-full p-2 mb-3 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-enigma-green focus:border-enigma-green focus:ring-2 focus:ring-enigma-green transition-transform transform hover:-translate-y-1"
          />
          
          <p className="text-base text-gray-400 mb-1 hover:text-enigma-green transition-transform transform hover:-translate-y-1">
            Password
          </p>
          <input 
            type="password" 
            placeholder="Choose a password" 
            required
            className="w-full p-2 mb-3 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-enigma-green focus:border-enigma-green focus:ring-2 focus:ring-enigma-green transition-transform transform hover:-translate-y-1"
          />
          
          <p className="text-base text-gray-400 mb-1 hover:text-enigma-green transition-transform transform hover:-translate-y-1">
            Confirm Password
          </p>
          <input 
            type="password" 
            placeholder="Confirm your password" 
            required
            className="w-full p-2 mb-3 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-enigma-green focus:border-enigma-green focus:ring-2 focus:ring-enigma-green transition-transform transform hover:-translate-y-1"
          />
          
          <button 
            type="submit" 
            className="w-full py-2 bg-transparent text-enigma-green text-lg uppercase border-2 border-enigma-green rounded-lg hover:bg-enigma-green hover:text-white shadow-lg transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-enigma-green"
          >
            Create Account
          </button>
        </form>
        <button 
          type="button" 
          className="w-3/5 py-2 mt-5 bg-transparent text-gray-400 border border-gray-400 rounded-lg hover:bg-gray-400 hover:text-white shadow-lg transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-400"
          onClick={() => {
            // Add your navigation here
          }}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;

