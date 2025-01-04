import React, { useState, useRef } from 'react';

const AnimatedText = ({ text, className = '', customText = '' }) => {
  const [animatedTitle, setAnimatedTitle] = useState(text || '');
  const intervalRef = useRef(null);

  // Emojis work too :))
  const letters = customText === '' ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : customText;

  const handleMouseOver = () => {
    let iteration = 0;

    function animateText() {
      intervalRef.current = setInterval(() => {
        const randomText = text
          .split('')
          .map((char, index) => {
            return index < iteration
              ? char
              : letters[Math.floor(Math.random() * letters.length)];
          })
          .join('');

        setAnimatedTitle(randomText);

        iteration += 0.5;

        if (iteration >= text.length) {
          clearInterval(intervalRef.current);
          setAnimatedTitle(text);
        }
      }, 30);
    }

    animateText();
  };

  const handleMouseOut = () => {
    clearInterval(intervalRef.current);
    setAnimatedTitle(text);
  };

  return (
      <div>
        <p className={`${className} inline`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          {animatedTitle}
        </p>
      </div>
  );
};

export default AnimatedText;