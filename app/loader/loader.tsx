"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { opacity, slideUp } from "./anim";

const words = [
  "Hello",
  "Bonjour",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "Guten tag",
  "Hallo",
];

export default function Loader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index == words.length - 1) {
      // Wait a bit after the last word, then hide the loader
      setTimeout(() => {
        setIsVisible(false);
      }, 1000);
      return;
    }
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const },
    },
    exit: {
      d: targetPath,
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1] as const,
        delay: 0.3,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          variants={slideUp}
          initial="initial"
          exit="exit"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1a1a1a] h-screen w-screen"
        >
          {dimension.width > 0 && (
            <>
              <motion.p
                variants={opacity}
                initial="initial"
                animate="enter"
                className="flex items-center text-[#C8FF00] text-[42px] absolute z-[1]"
              >
                <span className="block w-[10px] h-[10px] bg-[#C8FF00] rounded-full mr-[10px]"></span>
                {words[index]}
              </motion.p>
              <svg className="absolute top-0 w-full h-[calc(100%+300px)]">
                <motion.path
                  variants={curve}
                  initial="initial"
                  exit="exit"
                  fill="#1a1a1a"
                ></motion.path>
              </svg>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
