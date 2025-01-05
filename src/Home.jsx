import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Hamburger from './components/hamburger';
import Footer from './components/footer';
import MovableSquare from './components/cursor';
import BackgroundEffect from './components/background-hover';

function Home() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Hamburger />
      <div className='text-4xl font-calcio text-left px-4'>ENIGMA</div>
      
      {/* Main content with centered login button */}
      <div className="flex-grow flex items-center justify-center">
        <button
          onClick={() => navigate('/login')}
          className="bg-transparent text-[#1cd41c] border-2 border-[#1cd41c] px-8 py-4 rounded-lg 
                   font-orbitron text-xl uppercase tracking-[2px] 
                   transition-all duration-300 ease-in-out
                   hover:translate-y-[-4px] 
                   hover:shadow-[0_0_8px_2px_rgba(28,212,28,0.8),0_0_16px_4px_rgba(28,212,28,0.6)] 
                   hover:bg-[#1cd41c] hover:text-white hover:border-[#1cd41c]
                   focus:outline-none focus:ring-2 focus:ring-[#1cd41c] focus:ring-opacity-50"
        >
          Enter Enigma
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default Home;