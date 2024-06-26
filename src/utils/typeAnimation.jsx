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
        setText(prevText =>
          prevText.length === currentText.length
            ? (() => {
                clearInterval(intervalId);
                setTimeout(() => setIsTyping(false), 3000);
                return prevText;
              })()
            : currentText.substring(0, prevText.length + 1)
        );
      }, 60);
    } else {
      const currentText = sequence[currentIndex];
      intervalId = setInterval(() => {
        setText(prevText =>
          prevText.length === 0
            ? (() => {
                clearInterval(intervalId);
                setCurrentIndex(prevIndex => (prevIndex + 1) % sequence.length);
                setIsTyping(true);
                return prevText;
              })()
            : currentText.substring(0, prevText.length - 1)
        );
      }, 50);
    }

    return () => clearInterval(intervalId);
  }, [currentIndex, isTyping, sequence]);

  return React.createElement(wrapper, null, text);
};

export default TypeAnimation;
