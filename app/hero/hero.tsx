"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-screen h-screen bg-[#1a1a1a] overflow-hidden flex items-center justify-center px-6 md:px-16 lg:px-20 xl:pt-40">
            {/* Section Number */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute top-28 left-6 md:left-16 lg:left-20 text-white/60 text-sm md:text-base font-light"
            >
                01/
            </motion.div>

            {/* Main Content */}
            <div className="max-w-7xl w-full mt-16 md:mt-24 lg:mt-28">
                {/* Large Headline */}
                <div className="mb-8 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap items-center gap-3 md:gap-4 lg:gap-6 mb-3 md:mb-4"
                    >
                        {/* "Hello" */}
                        <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-none">
                            Hello
                        </span>

                        {/* Profile Picture Pill */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="relative inline-flex items-center justify-center bg-[#c8ff00] rounded-full overflow-hidden h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64"
                        >
                            <Image
                                src="/profile_picture_hero_1763550784798.png"
                                alt="Souvik"
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-wrap items-center gap-3 md:gap-4 lg:gap-6"
                    >
                        {/* "I'm Souvik" */}
                        <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-none">
                            I'm Souvik
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-wrap items-center gap-3 md:gap-4 lg:gap-6 mt-3 md:mt-4"
                    >
                        {/* "I Design stuff &" */}
                        <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-none">
                            I Design stuff &
                        </span>

                        {/* CODE Badge */}
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="inline-flex items-center justify-center bg-white rounded-full px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-3 sm:py-4 md:py-5 lg:py-6 xl:py-7"
                        >
                            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#c8ff00] leading-none">
                                CODE
                            </span>
                        </motion.span>
                    </motion.div>
                </div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-white/60 text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-5xl"
                >
                    I'm passionate about my work because I believe that good design can make a real
                    difference in the world — It can help businesses attract new customers, build
                    stronger relationships, and create a more positive brand image. I love the challenge
                    of taking someone's vision and turning it into a reality.
                </motion.p>
            </div>

            {/* Background Gradient */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0"></div>
            </div>
        </section>
    );
}