"use client";

import { motion } from "motion/react";

export default function Skills() {
    const capabilities = [
        {
            number: "01",
            title: "Website Design",
            description:
                "We create a functional design in the style of appearance of your brand. We make sure that your website becomes a marketing response tool which is easy to use and useful for all types of queries.",
            align: "left", // Button on left
        },
        {
            number: "02",
            title: "Web Develop",
            description:
                "We create a functional design in the style of appearance of your brand. We make sure that your website becomes a marketing response tool which is easy to use and useful for all types of queries.",
            align: "right", // Button on right
        },
        {
            number: "03",
            title: "Brand Design",
            description:
                "We create your company story and value proposition, developing a powerful competitive branding for us to maintain a superior market share and the correct representation of the company.",
            align: "left", // Button on left
        },
        {
            number: "04",
            title: "Mobile Design",
            description:
                "We create applications of any complexity for iOS, Android and Windows Phone, supporting all screen sizes. Our applications are pleasant and easy to use while discharging many functions.",
            align: "right", // Button on right
        },
    ];

    return (
        <section className="relative min-h-screen bg-[#1a1a1a] text-white py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-16">
            {/* Top Bar */}
            <div className="max-w-7xl mx-auto mb-12 md:mb-16">
                <div className="flex items-center justify-between border-t-2 border-white/60 pt-4">
                    {/* Section Number */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-white/60 text-sm md:text-base font-light"
                    >
                        04/
                    </motion.div>

                    {/* Capabilities Label */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-white/80 text-sm md:text-base font-light tracking-wider"
                    >
                        CAPABILITIES
                    </motion.div>

                    {/* Page Number */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white/60 text-sm md:text-base font-light"
                    >
                        /04
                    </motion.div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto">
                {/* Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mb-16 md:mb-20 lg:mb-24"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight max-w-4xl">
                        I believe that we can live in a where{" "}
                        <span className="text-white/50">every product</span> or service has an easy to use
                        experience on all platforms, and my mission is to make it happen.
                    </h2>
                </motion.div>

                {/* Capabilities List */}
                <div className="space-y-0">
                    {capabilities.map((capability, index) => (
                        <motion.div
                            key={capability.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="border-b border-white/20 py-12 md:py-16 lg:py-20"
                        >
                            {capability.align === "left" ? (
                                // Button on Left Layout
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                                    {/* Button */}
                                    <div className="lg:col-span-2 flex justify-start">
                                        <motion.a
                                            href="#"
                                            whileHover={{ scale: 1.05, rotate: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                            className="flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-[#c8ff00] rounded-full text-black font-medium text-xs sm:text-sm flex-shrink-0 group"
                                        >
                                            <div className="text-xs mb-1">{capability.number}</div>
                                            <div className="text-xs leading-tight text-center">
                                                VIEW
                                                <br />
                                                PROJECTS
                                            </div>
                                            <motion.div
                                                className="mt-1"
                                                animate={{ x: [0, 3, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            >
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M3 8H13M13 8L8 3M13 8L8 13"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                            </motion.div>
                                        </motion.a>
                                    </div>

                                    {/* Title */}
                                    <motion.div
                                        whileHover={{ x: 10 }}
                                        transition={{ duration: 0.3 }}
                                        className="lg:col-span-5"
                                    >
                                        <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white">
                                            {capability.title}
                                        </h3>
                                    </motion.div>

                                    {/* Description */}
                                    <div className="lg:col-span-5">
                                        <p className="text-sm sm:text-base md:text-lg text-white/70 font-light leading-relaxed">
                                            {capability.description}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                // Button on Right Layout
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                                    {/* Description */}
                                    <div className="lg:col-span-5 order-2 lg:order-1">
                                        <p className="text-sm sm:text-base md:text-lg text-white/70 font-light leading-relaxed">
                                            {capability.description}
                                        </p>
                                    </div>

                                    {/* Title */}
                                    <motion.div
                                        whileHover={{ x: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="lg:col-span-5 order-1 lg:order-2 text-left lg:text-right"
                                    >
                                        <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white">
                                            {capability.title}
                                        </h3>
                                    </motion.div>

                                    {/* Button */}
                                    <div className="lg:col-span-2 flex justify-start lg:justify-end order-3">
                                        <motion.a
                                            href="#"
                                            whileHover={{ scale: 1.05, rotate: -5 }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                            className="flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-[#c8ff00] rounded-full text-black font-medium text-xs sm:text-sm flex-shrink-0 group"
                                        >
                                            <div className="text-xs mb-1">{capability.number}</div>
                                            <div className="text-xs leading-tight text-center">
                                                VIEW
                                                <br />
                                                PROJECTS
                                            </div>
                                            <motion.div
                                                className="mt-1"
                                                animate={{ x: [0, 3, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            >
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path
                                                        d="M3 8H13M13 8L8 3M13 8L8 13"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                            </motion.div>
                                        </motion.a>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}