import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedText from './components/text';

const TerminalIcon = () => (
  <svg xmlns="http://2000.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#1cd41c]">
    <polyline points="4 17 10 11 4 5"></polyline>
    <line x1="12" y1="19" x2="20" y2="19"></line>
  </svg>
);

const SignUp = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Login logic
      console.log('Login submitted:', { username, password });
    } else {
      // Signup logic
      console.log('Signup submitted:', { username, email, password });
    }
  };

  return (
    <div className="min-h-screen min-w-[320px] flex items-center justify-center bg-[#111111] text-white font-['Orbitron']">
      <div className="bg-[#1a1a1a] p-8 rounded-lg w-[350px] flex flex-col items-center relative 
        animate-border border-2 border-transparent 
        before:absolute before:inset-0 before:bg-gradient-to-r 
        before:from-transparent before:via-[#1cd41c] before:to-transparent 
        before:animate-border-shine before:-z-10">
        <div className="flex items-center gap-2 mb-6 animate-float">
          <TerminalIcon />
          <AnimatedText 
            text="Enigma25" 
            className="text-3xl font-bold text-[#1cd41c] tracking-wider drop-shadow-enigma-glow"
            time={0.5}
          />
        </div>
        
        <div className="flex mb-4">
          <button 
            onClick={() => setIsLogin(true)}
            className={`mr-4 ${isLogin ? 'text-[#1cd41c]' : 'text-gray-500'} 
              hover:scale-105 transition-transform duration-300`}
          >
            <AnimatedText text="Login" time={0.3} />
          </button>
          <button 
            onClick={() => setIsLogin(false)}
            className={`${!isLogin ? 'text-[#1cd41c]' : 'text-gray-500'}
              hover:scale-105 transition-transform duration-300`}
          >
            <AnimatedText text="Sign Up" time={0.3} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          {!isLogin && (
            <InputField
              label="Email"
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          )}
          
          <InputField
            label="Username"
            type="text"
            placeholder={isLogin ? "Enter your username" : "Choose a username"}
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          
          <InputField
            label="Password"
            type="password"
            placeholder={isLogin ? "Enter your password" : "Choose a password"}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <button
            type="submit"
            className="w-full py-3 px-4 mt-4 bg-transparent text-[#1cd41c] border-2 border-[#1cd41c] rounded-lg 
              hover:bg-[#1cd41c] hover:text-white 
              transition-colors duration-300 
              hover:scale-105 
              active:scale-95"
          >
            <AnimatedText text={isLogin ? 'Login' : 'Sign Up'} time={0.3} />
          </button>
        </form>
        
        {isLogin && (
          <div className="mt-4 text-sm text-gray-400">
            <AnimatedText text="Don't have an account?" time={0.3} className="inline" />
            <button 
              onClick={() => setIsLogin(false)}
              className="ml-2 text-[#1cd41c] hover:underline 
                hover:scale-105 transition-transform duration-300"
            >
              <AnimatedText text="Sign Up" time={0.3} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// InputField component (inline to avoid import issues)
const InputField = ({ label, type, placeholder, required, value, onChange }) => {
  return (
    <div className="mb-4">
      <AnimatedText 
        text={label} 
        className="block text-sm text-gray-300 mb-2" 
        time={0.3}
      />
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 bg-[#2c2c2c] border border-[#1cd41c] rounded text-white 
          focus:outline-none focus:border-[#1cd41c] focus:ring-1 focus:ring-[#1cd41c]
          transition-all duration-300
          hover:scale-105 hover:translate-y-[-5px] 
          hover:shadow-[0_5px_15px_rgba(28,212,28,0.4)]
          focus:scale-105 focus:translate-y-[-5px]
          active:scale-95"
      />
    </div>
  );
};

export default SignUp;
