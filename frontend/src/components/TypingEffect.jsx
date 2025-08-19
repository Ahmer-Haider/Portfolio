import React, { useState, useEffect } from 'react';

const TypingEffect = ({ 
  strings, 
  typeSpeed = 75, 
  pauseBeforeNext = 500,
  pauseBeforeRepeat = 1000 
}) => {
  const [completedLines, setCompletedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (strings.length === 0) return;

    const currentString = strings[currentLineIndex];

    if (displayedText.length === currentString.length) {
      if (currentLineIndex === strings.length - 1) {
        const repeatTimeout = setTimeout(() => {
          setCompletedLines([]);
          setCurrentLineIndex(0);
          setDisplayedText('');
        }, pauseBeforeRepeat);
        return () => clearTimeout(repeatTimeout);
      }
      
      const nextLineTimeout = setTimeout(() => {
        setCompletedLines(prev => [...prev, currentString]);
        setCurrentLineIndex(prev => prev + 1);
        setDisplayedText('');
      }, pauseBeforeNext);
      return () => clearTimeout(nextLineTimeout);
    }

    const typingTimeout = setTimeout(() => {
      setDisplayedText(currentString.substring(0, displayedText.length + 1));
    }, typeSpeed);

    return () => clearTimeout(typingTimeout);
  }, [displayedText, currentLineIndex, strings, typeSpeed, pauseBeforeNext, pauseBeforeRepeat]);

  return (
    <div>
      {completedLines.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
      <div className="blinking-cursor">{displayedText}</div>
    </div>
  );
};

export default TypingEffect;