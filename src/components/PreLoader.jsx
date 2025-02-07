import React, { useState, useEffect } from 'react';

const Preloader = ({ isLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updateProgress = (event) => {
      if (event.lengthComputable) {
        const percentComplete = Math.round((event.loaded / event.total) * 100);
        setProgress(percentComplete);
      }
    };

    const handleLoad = () => {
      setProgress(100);
      setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem('preloaderShown', 'true');
      }, 500); // Wait for 0.5 seconds
    };

    window.addEventListener('load', handleLoad);
    window.addEventListener('progress', updateProgress);

    return () => {
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('progress', updateProgress);
    };
  }, []);

  const preloaderStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 0.5s ease-in-out',
    pointerEvents: isVisible ? 'auto' : 'none',
  };

  const preloaderContentStyle = {
    textAlign: 'center',
    color: '#fff',
  };

  const preloaderCounterStyle = {
    fontSize: '10rem',
    fontFamily: 'NeueBit',
  };

  return (
    <div style={preloaderStyle}>
      <style>
        {`
          @font-face {
            font-family: 'NeueBit';
            font-style: bold;
            font-weight: 400;
            font-display: swap;
            src: url(/fonts/NeueBit.otf);
          }
        `}
      </style>
      <div style={preloaderContentStyle}>
        <div style={preloaderCounterStyle}>{progress}%</div>
      </div>
    </div>
  );
};

export default Preloader;