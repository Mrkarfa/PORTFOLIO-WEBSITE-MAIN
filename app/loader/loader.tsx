"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

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
    <motion.div
      animate={{ y: `-${value}em` }}
      transition={{
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1], // Custom bezier for "rolling" bounce effect
      }}
      className="flex flex-col"
    >
      {digits.map((digit, i) => (
        <Digit key={i}>{digit}</Digit>
      ))}
    </motion.div>
  );
};

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
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
  }, []);

  const hundreds = Math.floor(progress / 100);
  const tens = Math.floor((progress % 100) / 10);
  const ones = progress % 10;

  const allDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[101] flex items-center justify-center bg-[#1a1a1a] text-[#c8ff00]"
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: progress > 10 ? 1 : 0,
                y: progress > 10 ? 0 : 20,
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mt-8 font-body text-lg text-[#c8ff00]/70"
            >
              welcome to my portfolio !
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
