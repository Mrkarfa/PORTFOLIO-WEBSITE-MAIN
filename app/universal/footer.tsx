"use client";

import { motion } from "motion/react";
import { useState, useRef } from "react";

export default function Footer() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const buttonRef = useRef<HTMLButtonElement>(null);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate distance from center with a magnetic strength factor
        const deltaX = (e.clientX - centerX) * 0.3;
        const deltaY = (e.clientY - centerY) * 0.3;

        setMousePosition({ x: deltaX, y: deltaY });
    };

    const handleMouseLeave = () => {
        setMousePosition({ x: 0, y: 0 });
    };

    const socialLinks = [
        { name: "INSTAGRAM", href: "#" },
        { name: "TWITTER", href: "#" },
        { name: "LINKEDIN", href: "#" },
        { name: "BEHANCE", href: "#" },
        { name: "DRIBBLE", href: "#" },
        { name: "YOUTUBE", href: "#" },
    ];

    const navLinks = [
        { name: "HOME", href: "/" },
        { name: "ABOUT", href: "/about" },
        { name: "PROJECT", href: "/projects" },
        { name: "CAPABILITIES", href: "/skills" },
        { name: "CONTACTS", href: "/contact" },
    ];

    return (
        <footer className="relative bg-[#1a1a1a] text-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
                {/* Top Section - 3 Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-24 relative z-10">
                    {/* Left Section - Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <p className="text-base md:text-lg font-light leading-relaxed">
                            I'm a Self Taught, Independent
                            <br />
                            Full Stack Developer only.
                        </p>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "120px" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex items-center gap-2"
                        >
                            <div className="h-[1px] bg-white w-24"></div>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                className="flex-shrink-0"
                            >
                                <path
                                    d="M4 10H16M16 10L10 4M16 10L10 16"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </motion.div>
                    </motion.div>

                    {/* Middle Section - Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h3 className="text-base md:text-lg font-light mb-6">
                            You can Follow me on
                        </h3>
                        <ul className="space-y-2">
                            {socialLinks.map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                                >
                                    <a
                                        href={link.href}
                                        className="text-sm md:text-base text-white/70 hover:text-white transition-colors duration-300 inline-block hover:translate-x-2 transition-transform"
                                    >
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right Section - Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col items-start md:items-end space-y-6"
                    >
                        {/* Navigation Links */}
                        <ul className="space-y-2 text-left md:text-right">
                            {navLinks.map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                                >
                                    <a
                                        href={link.href}
                                        className="text-base md:text-lg font-light text-white/90 hover:text-white transition-colors duration-300 inline-block hover:translate-x-2 md:hover:-translate-x-2 transition-transform"
                                    >
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Large SOUVIK Text with Back to Top Button */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="relative"
                >
                    <h2 className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[22rem] font-bold text-white tracking-tight leading-none mt-2">
                        SOUVIK
                    </h2>

                    {/* Back to Top Button - Positioned over the "I" with Magnetic Effect */}
                    <motion.button
                        ref={buttonRef}
                        onClick={scrollToTop}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        animate={{
                            x: mousePosition.x,
                            y: mousePosition.y,
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            type: "spring",
                            stiffness: 150,
                            damping: 15,
                            mass: 0.1,
                        }}
                        className="absolute top-0 left-[69%] sm:left-[69%] md:left-[81%] lg:left-[88%] xl:left-[75%] transform -translate-x-1/2 -translate-y-1/2 px-6 py-9 bg-[#c8ff00] text-black text-sm font-medium rounded-full hover:bg-[#b3e600] transition-colors duration-300 z-10 leading-tight mb-2"
                    >
                        Back to
                        <br />
                        Top
                    </motion.button>
                </motion.div>
            </div>

            {/* Subtle Background Pattern (Optional) */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
        </footer>
    );
}