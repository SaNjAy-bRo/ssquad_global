"use client";

import { useState, useEffect } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/\\";

export default function HackingText({ words, duration = 3000 }: { words: string[], duration?: number }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState(words[0]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const startScramble = (nextWord: string) => {
      let iter = 0;
      const totalFrames = 30; // how many frames of scrambling
      const len = Math.max(displayText.length, nextWord.length);

      const scrambleInterval = setInterval(() => {
        if (iter >= totalFrames) {
          clearInterval(scrambleInterval);
          setDisplayText(nextWord);
          
          // Schedule the next word scramble
          timeout = setTimeout(() => {
            const nextIndex = (currentWordIndex + 1) % words.length;
            setCurrentWordIndex(nextIndex);
            // Will trigger next useEffect due to currentWordIndex change, 
            // but actually let's just use a simple interval or recursive timeout
          }, duration);
          
          return;
        }

        const scrambled = Array(len)
          .fill(0)
          .map((_, i) => {
            // Gradually resolve letters from the beginning
            if (i < (iter / totalFrames) * len && i < nextWord.length) {
              return nextWord[i];
            }
            if (i < nextWord.length || iter < totalFrames / 2) {
               return CHARS[Math.floor(Math.random() * CHARS.length)];
            }
            return ""; // shrink length if necessary
          })
          .join("");

        setDisplayText(scrambled);
        iter++;
      }, 40);
    };

    // When the component mounts or word changes, we'll start the scramble
    // Wait for the duration first before scrambling to next word
    timeout = setTimeout(() => {
      const nextIndex = (currentWordIndex + 1) % words.length;
      setCurrentWordIndex(nextIndex);
      startScramble(words[nextIndex]);
    }, duration);

    return () => clearInterval(timeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentWordIndex, words, duration]); // Intentionally leaving out displayText

  useEffect(() => {
    // Initial display text setup
    setDisplayText(words[0]);
  }, [words]);

  return <span className="font-mono text-ssg-red uppercase font-bold tracking-widest">{displayText}</span>;
}
