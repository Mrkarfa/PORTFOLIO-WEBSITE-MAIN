"use client";

import { useState, useEffect } from "react";

// A single digit in a column
const Digit = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-[1em] items-center justify-center">{children}</div>
);

// A column of digits that scrolls to a specific value
const DigitColumn = ({
  value,
  digits,
}: {
  value: number;
  digits: string[];
}) => {
  return (
    <div
      style={{ transform: `translateY(-${value}em)` }}
      className="transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
    >
      {digits.map((digit, i) => (
        <Digit key={i}>{digit}</Digit>
      ))}
    </div>
  );
};

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    // Animate in 10% increments over ~3 seconds (300ms per step)
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
          }, 800);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, [isMounted]);

  const hundreds = Math.floor(progress / 100);
  const tens = Math.floor((progress % 100) / 10);
  const ones = progress % 10;

  const allDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <div
      className={`fixed inset-0 z-[101] flex items-center justify-center bg-[#1a1a1a] text-[#c8ff00] transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center">
        {/* Percentage Counter */}
        <div className="flex font-display font-black leading-none tracking-tighter text-[min(22vw,351.391px)]">
          <div className="h-[1em] overflow-hidden">
            <DigitColumn value={hundreds} digits={["0", "1"]} />
          </div>
          <div className="h-[1em] overflow-hidden">
            <DigitColumn value={tens} digits={allDigits} />
          </div>
          <div className="h-[1em] overflow-hidden">
            <DigitColumn value={ones} digits={allDigits} />
          </div>
          <div className="h-[1em] flex items-center justify-center">%</div>
        </div>

        {/* Welcome Text */}
        <div
          className={`mt-8 font-body text-lg text-[#c8ff00]/70 transition-opacity duration-700 ${
            progress > 10 ? "opacity-100" : "opacity-0"
          }`}
        >
          welcome to my portfolio !
        </div>
      </div>
    </div>
  );
}
