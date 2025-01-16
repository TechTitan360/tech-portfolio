import React, { useState, useEffect } from "react";

interface TypewriterProps {
  sentences: { static: string; dynamic: string[] }[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  cursorBlinkSpeed?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
  sentences,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
  cursorBlinkSpeed = 500,
}) => {
  const [displayText, setDisplayText] = useState(""); // Displayed text
  const [sentenceIndex, setSentenceIndex] = useState(0); // Current sentence
  const [dynamicIndex, setDynamicIndex] = useState(0); // Current dynamic string
  const [charIndex, setCharIndex] = useState(0); // Current character index
  const [isDeleting, setIsDeleting] = useState(false); // Typing or deleting state
  const [showCursor, setShowCursor] = useState(true); // Cursor blink

  // Handle typing and deleting effect
  useEffect(() => {
    const { static: staticText, dynamic } = sentences[sentenceIndex];
    const fullText = staticText + dynamic[dynamicIndex];

    if (isDeleting) {
      // Handle deleting characters
      if (charIndex > staticText.length) {
        setTimeout(() => setCharIndex((prev) => prev - 1), deletingSpeed);
      } else {
        // Finished deleting, move to next dynamic text
        setIsDeleting(false);
        setDynamicIndex((prev) => (prev + 1) % dynamic.length);
      }
    } else {
      // Handle typing characters
      if (charIndex < fullText.length) {
        setTimeout(() => setCharIndex((prev) => prev + 1), typingSpeed);
      } else {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
      }
    }

    setDisplayText(fullText.substring(0, charIndex));
  }, [charIndex, isDeleting, sentenceIndex, dynamicIndex, sentences, typingSpeed, deletingSpeed, pauseTime]);

  // Handle cursor blink (fixed to sync with typing)
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      if (charIndex < displayText.length) {
        setShowCursor((prev) => !prev);
      }
    }, cursorBlinkSpeed);

    return () => clearInterval(cursorInterval);
  }, [cursorBlinkSpeed, charIndex, displayText.length]);

  return (
    <span className="font-mono text-lg">
      {displayText}
      {showCursor && <span className="cursor"></span>} {/* Block cursor */}
    </span>
  );
};

export default Typewriter;
