import React, { useState, useEffect } from 'react';
import './dynamic-text.css';

const DynamicText = () => {
  const phrases = [
    "Yo, it's Lance Kaluhi.",
    "Injecting badassery into digital creations.",
    "Coding cool sh*t that makes you go 'wow'.",
    "Designing like a rebel with a cause.",
    "Pushing boundaries with pixel power.",
    "Crafting kick-ass user experiences.",
    "Creating digital awesomeness from scratch.",
    "Sculpting code with style and swagger.",
    "Unleashing creativity, one line at a time.",
    "Making the web sexy, one design at a time.",
    "Bringing a touch of wild to the digital world.",
    "Redefining cool through pixels and code.",
    "Designing like there's no tomorrow.",
    "Infusing personality into pixels.",
    "Crafting magic in the digital realm."
  ];

  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout;

    const typeInterval = setInterval(() => {
      if (!isDeleting && charIndex <= currentPhrase.length) {
        setText(currentPhrase.slice(0, charIndex));
        setCharIndex(prevIndex => prevIndex + 1);
      } else if (isDeleting && charIndex >= 0) {
        setText(currentPhrase.slice(0, charIndex));
        setCharIndex(prevIndex => prevIndex - 1);
      } else {
        if (!isDeleting) {
          timeout = setTimeout(() => setIsDeleting(true), 1000); // Delay before starting deletion
        } else {
          setIsDeleting(false);
          setCharIndex(0);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100); // Faster deletion speed (milliseconds)

    return () => {
      clearTimeout(timeout);
      clearInterval(typeInterval);
    };
  }, [phraseIndex, charIndex, isDeleting, phrases]);

  // Calculate minimum height based on longest phrase length
  const longestPhraseLength = Math.max(...phrases.map(phrase => phrase.length));
  const minHeight = (longestPhraseLength * 0.6) + 50; // Adjust multiplier and offset as needed

  return (
    <div className="DynamicTextContainer" style={{ minHeight: `${minHeight}px` }}>
      <h1 className="DynamicText">{text}</h1>
    </div>
  );
};

export default DynamicText;
