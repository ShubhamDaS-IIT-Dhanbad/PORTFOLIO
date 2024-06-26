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
      if (currentIndex >= sequence.length) {
        setCurrentIndex(0);
        setIsTyping(true);
      } else {
        const currentText = sequence[currentIndex];
        intervalId = setInterval(() => {
          setText(prevText =>
            prevText.length === 0
              ? (() => {
                  clearInterval(intervalId);
                  setCurrentIndex(prevIndex => prevIndex + 1);
                  setIsTyping(true);
                  return prevText;
                })()
              : currentText.substring(0, prevText.length - 1)
          );
        }, 50);
      }
    }

    return () => clearInterval(intervalId);
  }, [currentIndex, isTyping, sequence]);

  useEffect(() => {
    if (repeat && currentIndex === sequence.length && !isTyping) {
      const repeatInterval = setTimeout(() => {
        setCurrentIndex(0);
        setIsTyping(true);
      }, 3000);

      return () => clearTimeout(repeatInterval);
    }
  }, [currentIndex, isTyping, sequence, repeat]);

  return React.createElement(wrapper, null, text);
};

export default TypeAnimation;
