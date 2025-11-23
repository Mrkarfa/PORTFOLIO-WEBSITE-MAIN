"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "../components/Magnetic";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "HOME", number: "01", href: "/" },
    { name: "ABOUT ME", number: "02", href: "/about/details" },
    { name: "PROJECTS", number: "03", href: "/projects" },
    { name: "CONTACTS", number: "04", href: "/contact" },
  ];

  const socialLinks = [
    { name: "Instagram", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Linkedin", href: "#" },
    { name: "GitHub", href: "#" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white text-2xl font-bold tracking-wider"
          >
            SOUVIKK.
          </motion.div>

          {/* Hamburger Menu (2 lines) - Hidden when menu is open */}
          {!isMenuOpen && (
            <Magnetic>
              <motion.button
                onClick={() => setIsMenuOpen(true)}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-2 w-10 h-10 items-end justify-center group cursor-pointer"
                aria-label="Toggle menu"
                type="button"
              >
                <motion.span className="w-full h-[2px] bg-white transition-all duration-300 group-hover:w-8" />
                <motion.span className="w-8 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
              </motion.button>
            </Magnetic>
          )}
        </div>
      </nav>

      {/* Full-Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          // BACKDROP: clicking the backdrop will close the menu
          <motion.div
            key="menu-overlay"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "tween",
              duration: 0.5,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="fixed inset-0 bg-[#1a1a1a] z-50 overflow-hidden"
            onClick={() => setIsMenuOpen(false)} // close when clicking outside content
          >
            <div
              className="h-full flex flex-col"
              // Prevent clicks inside the menu from closing it
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Section */}
              <div className="px-8 py-6 flex items-center justify-between border-b border-white/10">
                {/* Logo */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-white text-2xl font-light tracking-wider"
                >
                  SOUVIKK.
                </motion.div>

                {/* Let's Talk Button */}
                <Magnetic>
                  <motion.button
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="px-10 py-3 border border-white/30 rounded-full text-white text-sm hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Let&apos;s Talk
                  </motion.button>
                </Magnetic>
                {/* Close Button (X) */}
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="relative z-50 text-white w-10 h-10 flex items-center justify-center group cursor-pointer hover:bg-white/10 rounded-full transition-all duration-200"
                  aria-label="Close menu"
                  type="button"
                >
                  <div className="relative w-6 h-6">
                    <span className="absolute top-1/2 left-0 w-full h-[2px] bg-white rotate-45 transform -translate-y-1/2 group-hover:rotate-90 transition-transform duration-300" />
                    <span className="absolute top-1/2 left-0 w-full h-[2px] bg-white -rotate-45 transform -translate-y-1/2 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 flex items-center justify-center px-8">
                <div className="w-full max-w-4xl">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.2 + index * 0.1,
                        duration: 0.6,
                        ease: [0.76, 0, 0.24, 1],
                      }}
                      className="border-b border-white/10"
                    >
                      <a
                        href={item.href}
                        className="group flex items-center justify-between py-6 hover:px-4 transition-all duration-300"
                      >
                        <div className="flex items-baseline gap-4">
                          <span className="text-white text-5xl md:text-7xl font-light tracking-tight group-hover:translate-x-4 transition-transform duration-300">
                            {item.name}
                          </span>
                          <span className="text-white/40 text-xl font-light">
                            ({item.number})
                          </span>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: -45 }}
                          className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white transition-colors duration-300"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="transform -rotate-45"
                          >
                            <path
                              d="M4 10H16M16 10L10 4M16 10L10 16"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </motion.div>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="px-8 py-8 border-t border-white/10"
              >
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Follow Me Section */}
                  <div>
                    <h3 className="text-white/60 text-lg mb-6 font-light">
                      Follow Me.
                    </h3>
                    <div className="flex flex-wrap gap-6">
                      {socialLinks.map((link, index) => (
                        <motion.a
                          key={link.name}
                          href={link.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + index * 0.05 }}
                          className="text-white text-base flex items-center gap-2 hover:gap-3 transition-all duration-300 group"
                        >
                          {link.name}
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            className="transform -rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          >
                            <path
                              d="M3 8H13M13 8L8 3M13 8L8 13"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  {/* Stay Connected Section */}
                  <div>
                    <h3 className="text-white/60 text-lg mb-6 font-light">
                      Stay Connected with Me.
                    </h3>
                    <div className="flex gap-3">
                      <input
                        type="email"
                        placeholder="Type your Email here*"
                        className="flex-1 bg-transparent border-b border-white/30 pb-2 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors duration-300"
                      />
                      <button
                        className="text-white hover:scale-110 transition-transform duration-300"
                        aria-label="Submit email"
                        type="button"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          className="transform -rotate-45"
                        >
                          <path
                            d="M4 10H16M16 10L10 4M16 10L10 16"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
