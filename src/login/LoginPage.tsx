import React from 'react';
import LoginForm from './LoginForm';
// import { Terminal } from 'lucide-react';

const LoginPage = () => {
  return (
    <div className="min-h-screen min-w-[320px] flex items-center justify-center bg-[#111111] text-white font-['Orbitron']">
      <div className="bg-[#1a1a1a] p-8 rounded-lg w-[350px] flex flex-col items-center relative animate-border border-2 border-transparent">
        <div className="flex items-center gap-2 mb-6 animate-float">
          <Terminal className="w-8 h-8 text-[#1cd41c]" />
          <h2 className="text-3xl font-bold text-[#1cd41c] tracking-wider animate-glow">
            Enigma25
          </h2>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
