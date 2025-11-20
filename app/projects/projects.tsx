"use client";

import { motion } from "motion/react";

export default function Projects() {
    const projects = [
        {
            name: "Rejouice",
            description: "A venture Agency",
            tech: "HTML | CSS | JavaScript | GSAP",
        },
        {
            name: "Olaolu",
            description: "A Modern Portfolio Website",
            tech: "NextJS | TailwindCSS | TypeScript",
        },
        {
            name: "Netflix",
            description: "Clone of Netflix Website",
            tech: "NextJS | TailwindCSS | TypeScript",
        },
        {
            name: "Exvia",
            description: "A Clone Website of Exvia Website",
            tech: "NextJS | TailwindCSS | TypeScript",
        },
        {
            name: "Sakura",
            description: "A Japanese Cafe Website",
            tech: "NextJS | TailwindCSS | TypeScript",
        },
        {
            name: "Edugard",
            description: "A Online learning Platform",
            tech: "HTML | CSS | JavaScript",
        },
        {
            name: "Portfolio",
            description: "My Portfolio Website",
            tech: "NextJS | TailwindCSS | TypeScript | Motion",
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
                        03/
                    </motion.div>

                    {/* Project Label */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-white/80 text-sm md:text-base font-light tracking-wider"
                    >
                        PROJECT
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
                {/* Intro Section */}
                <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 mb-16 md:mb-20 lg:mb-24">
                    {/* View All Button */}
                    <motion.a
                        href="#"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="flex items-center justify-center w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 bg-[#c8ff00] rounded-full text-black font-medium text-sm md:text-base shrink-0 border-2 border-transparent hover:bg-transparent hover:border-[#c8ff00] hover:text-white transition-colors duration-300"
                    >
                        <div className="text-center leading-tight">
                            <div className="mb-1">VIEW ALL</div>
                            <div>PROJECTS</div>
                            <motion.div
                                className="mt-2 flex justify-center"
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

                    {/* Headline */}
                    <motion.h2
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight"
                    >
                        Here are some select projects that showcase my passion for creating memorable web
                        experiences, products and design in life.
                    </motion.h2>
                </div>

                {/* Projects List */}
                <div className="space-y-0">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
                            className="group border-b border-white/20 py-6 md:py-8 transition-colors duration-300"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center">
                                {/* Project Name */}
                                <motion.div
                                    whileHover={{ x: 10 }}
                                    transition={{ duration: 0.3 }}
                                    className="md:col-span-3"
                                >
                                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white group-hover:text-[#c8ff00] transition-colors duration-300">
                                        {project.name}
                                    </h3>
                                </motion.div>

                                {/* Project Description */}
                                <div className="md:col-span-5 text-center">
                                    <p className="text-base md:text-lg lg:text-xl text-white/70 font-light">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tech Stack */}
                                <div className="md:col-span-4 text-left md:text-right">
                                    <p className="text-sm md:text-base lg:text-lg text-white/60 font-light">
                                        {project.tech}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}