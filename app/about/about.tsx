"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function About() {
    const socialLinks = [
        { name: "IN", href: "#", label: "Instagram" },
        { name: "TW", href: "#", label: "Twitter" },
        { name: "GI", href: "#", label: "GitHub" },
        { name: "LI", href: "#", label: "LinkedIn" },
    ];

    return (
        <section className="relative min-h-screen bg-[#1a1a1a] text-white py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-16">
            {/* Top Bar */}
            <div className="max-w-7xl mx-auto mb-12 md:mb-16">
                <div className="flex items-center justify-between border-t-2 border-white/60">
                    {/* Section Number */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-white/60 text-sm md:text-base font-light"
                    >
                        02/
                    </motion.div>

                    {/* About Label */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-white/80 text-sm md:text-base font-light tracking-wider"
                    >
                        ABOUT
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex items-center gap-2 text-sm md:text-base font-light"
                    >
                        {socialLinks.map((link, index) => (
                            <span key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-white/60 hover:text-white transition-colors duration-300"
                                    aria-label={link.label}
                                >
                                    {link.name}
                                </a>
                                {index < socialLinks.length - 1 && (
                                    <span className="text-white/40 mx-1">/</span>
                                )}
                            </span>
                        ))}
                        <span className="text-white/40 mx-1">/</span>
                        <span className="text-white/60">04</span>
                    </motion.div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-20 lg:mb-24">
                    {/* Left Column - Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex justify-center lg:justify-start"
                    >
                        <div className="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden border-2 border-white/10">
                            <Image
                                src="/profile_picture_hero_1763550784798.png"
                                alt="Souvik Karfa"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Right Column - Bio Text with Scroll Reveal */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex items-center"
                    >
                        <motion.p 
                            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light leading-relaxed text-white"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            {`I'm a Self Taught Full stack Developer Based on Kolkata, west Bengal Specializing in Designing & Developing, Creative Direction, and Iconography. I have completed my Education from Biju Pattanaik University of Technology, Bhubaneswer, Odisha. We Design Experiences to Connect in Authentic & Unexpected ways. In the Free-time enjoy to Explore the world & enjoy to eat Chinese Stuff.`
                                .split(" ")
                                .map((word, index) => {
                                    const isEducation = word === "Education";
                                    return (
                                        <motion.span
                                            key={index}
                                            variants={{
                                                hidden: { opacity: 0, y: 20 },
                                                visible: { opacity: 1, y: 0 }
                                            }}
                                            transition={{
                                                duration: 0.3,
                                                delay: index * 0.03,
                                                ease: "easeOut"
                                            }}
                                            className={isEducation ? "underline underline-offset-4" : ""}
                                        >
                                            {word}{" "}
                                        </motion.span>
                                    );
                                })}
                        </motion.p>
                    </motion.div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
                    {/* Large Name */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-none mb-4"
                        >
                            Souvik Karfa
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-white/60 text-sm md:text-base lg:text-lg font-light"
                        >
                            A Self Taught Full Stack Developer by Passion,
                            <br />
                            based in Kolkata, West Bengal.
                        </motion.p>
                    </div>

                    {/* Learn More Button */}
                    <motion.a
                        href="/about/details"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="flex items-center justify-center w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 bg-[#c8ff00] rounded-full text-black font-medium text-sm md:text-base shrink-0 group border-2 border-transparent hover:bg-transparent hover:border-[#c8ff00] hover:text-white transition-colors duration-300"
                    >
                        <div className="text-center">
                            <div className="mb-1">LEARN</div>
                            <div>MORE</div>
                            <motion.div
                                className="mt-1 flex justify-center"
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="transform"
                                >
                                    <path
                                        d="M5 12H19M19 12L12 5M19 12L12 19"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </motion.div>
                        </div>
                    </motion.a>
                </div>
            </div>
        </section>
    );
}