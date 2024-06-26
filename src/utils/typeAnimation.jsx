import React, { useState, useEffect } from 'react';

const TypeAnimation = ({ sequence, wrapper, repeat }) => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let intervalId;
    if (isTyping) {
      const currentText = sequence[currentIndex];
      intervalId = setInterval(() => {
        setText(prevText => {
          if (prevText === currentText) {
            clearInterval(intervalId);
            setTimeout(() => setIsTyping(false), 3000); // Wait 3 seconds before erasing
            return prevText;
          }
          return currentText.substring(0, prevText.length + 1);
        }, 60); // Typing speed
      });
    } else {
      intervalId = setInterval(() => {
        setText(prevText => {
          if (prevText === '') {
            clearInterval(intervalId);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sequence.length); // Move to next sequence
            setIsTyping(true);
            return prevText;
          }
          return prevText.substring(0, prevText.length - 1);
        }, 50); // Erasing speed
      });
    }

    return () => clearInterval(intervalId);
  }, [currentIndex, isTyping, sequence]);

  return React.createElement(wrapper, null, text);
};

export default TypeAnimation;
