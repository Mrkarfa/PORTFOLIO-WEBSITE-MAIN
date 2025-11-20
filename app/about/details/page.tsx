"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Navbar from "@/app/universal/navbar";
import Contact from "@/app/contact/contact";
import Footer from "@/app/universal/footer";

export default function AboutDetails() {
    return (
        <>
            <Navbar />
            
            <main className="bg-[#1a1a1a] text-white">
                {/* Hero Section with Profile Image */}
                <section className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full h-full"
                    >
                        <Image
                            src="/profile_picture_hero_1763550784798.png"
                            alt="Souvik Karfa"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/40"></div>
                        
                        {/* SOUVIK Text Overlay */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight">
                                SOUVIK
                            </h1>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
                    {/* About Me Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-20 md:mb-28"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium">About Me</h2>
                            <svg 
                                width="40" 
                                height="40" 
                                viewBox="0 0 40 40" 
                                fill="none"
                                className="flex-shrink-0"
                            >
                                <path 
                                    d="M8 20H32M32 20L24 12M32 20L24 28" 
                                    stroke="white" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </motion.div>
                        
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 text-white/90"
                        >
                            Hello! I&apos;m Souvik Karfa.
                        </motion.h3>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-6 text-base md:text-lg text-white/70 leading-relaxed max-w-4xl"
                        >
                            <p>
                                I speak two languages fluently: JavaScript and English. I&apos;m currently working hard on a third one: Japanese (JLPT N5 certified ✅).
                            </p>
                            <p>
                                By day, I am a Full Stack Developer turning coffee into code and complex problems into elegant solutions. I love the thrill of creating something from nothing.
                            </p>
                            <p>
                                By night, I switch gears. I&apos;m a massive fan of storytelling, whether that&apos;s through classic novels or immersive Japanese Manga. I&apos;m also a self-proclaimed foodie with a serious weakness for Chinese cuisine.
                            </p>
                            <p>
                                If you have a project idea—or a good dumpling recommendation—let&apos;s connect!
                            </p>
                        </motion.div>
                    </motion.section>

                    {/* Education Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-20 md:mb-28"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-3 mb-12"
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium">Education</h2>
                            <svg 
                                width="40" 
                                height="40" 
                                viewBox="0 0 40 40" 
                                fill="none"
                                className="shrink-0"
                            >
                                <path 
                                    d="M8 20H32M32 20L24 12M32 20L24 28" 
                                    stroke="white" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </motion.div>

                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                            {/* Download Resume Button */}
                            <motion.a
                                href="#"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center justify-center w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 shrink-0 bg-[#c8ff00] rounded-full text-black font-medium text-sm md:text-base hover:bg-[#b3e600] transition-colors"
                            >
                                <div className="text-center leading-tight">
                                    <div className="mb-2">DOWNLOAD</div>
                                    <div className="mb-2">FULL</div>
                                    <div className="mb-3">RESUME</div>
                                    <svg 
                                        width="24" 
                                        height="24" 
                                        viewBox="0 0 24 24" 
                                        fill="none"
                                        className="mx-auto"
                                    >
                                        <path 
                                            d="M5 12H19M19 12L12 5M19 12L12 19" 
                                            stroke="currentColor" 
                                            strokeWidth="2" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </motion.a>

                            {/* Education Entries */}
                            <div className="flex-1 space-y-10 md:space-y-12">
                                {/* B.Tech */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-2">
                                        B.Tech <span className="text-[#c8ff00]">[8.5 CGPA]</span>
                                    </h3>
                                    <p className="text-lg md:text-xl text-white/60">Biju Pattanaik University of Technology</p>
                                </motion.div>

                                {/* Higher Secondary */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                >
                                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-2">
                                        Higher - Secondary <span className="text-[#c8ff00]">[75%]</span>
                                    </h3>
                                    <p className="text-lg md:text-xl text-white/60">Parul Ramkrishna Sarada High school</p>
                                </motion.div>

                                {/* Secondary */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-2">
                                        Secondary <span className="text-[#c8ff00]">[80%]</span>
                                    </h3>
                                    <p className="text-lg md:text-xl text-white/60">Moloypur High School [H.S.]</p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Experience Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-20 md:mb-28"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-3 mb-12"
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium">Experience</h2>
                            <svg 
                                width="40" 
                                height="40" 
                                viewBox="0 0 40 40" 
                                fill="none"
                                className="shrink-0"
                            >
                                <path 
                                    d="M8 20H32M32 20L24 12M32 20L24 28" 
                                    stroke="white" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </motion.div>

                        <div className="space-y-10 md:space-y-12 max-w-4xl">
                            {/* Tech Mahindra */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-2">Tech Mahindra</h3>
                                <p className="text-lg md:text-xl text-white/60">
                                    Assistant Team Leader - <span className="text-[#c8ff00]">2022 to 2024</span>
                                </p>
                            </motion.div>

                            {/* Startek */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-2">Startek</h3>
                                <p className="text-lg md:text-xl text-white/60">
                                    Quality Assistance - <span className="text-[#c8ff00]">2024 to 2025</span>
                                </p>
                            </motion.div>

                            {/* Freelancer */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-2">Freelancer</h3>
                                <p className="text-lg md:text-xl text-white/60">
                                    Developer - <span className="text-[#c8ff00]">2025 to present</span>
                                </p>
                            </motion.div>
                        </div>
                    </motion.section>

                    {/* Skills Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-20 md:mb-28"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-3 mb-12"
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium">Skills</h2>
                            <svg 
                                width="40" 
                                height="40" 
                                viewBox="0 0 40 40" 
                                fill="none"
                                className="shrink-0"
                            >
                                <path 
                                    d="M8 20H32M32 20L24 12M32 20L24 28" 
                                    stroke="white" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="max-w-4xl"
                        >
                            <div className="space-y-4 text-xl md:text-2xl lg:text-3xl mb-12">
                                <motion.p
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="text-white/70"
                                >
                                    Tech Stack: Full Stack <span className="text-[#c8ff00]">Development</span>
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="text-white/70"
                                >
                                    Current Learning: <span className="text-[#c8ff00]">Japanese</span> (JLPT N5)
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="text-white/70"
                                >
                                    Fuel: <span className="text-[#c8ff00]">Chinese Food</span> 🍜
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="text-white/70"
                                >
                                    Inspiration: Storybooks & <span className="text-[#c8ff00]">Manga</span> 📚
                                </motion.p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-center"
                            >
                                <p className="text-sm md:text-base lg:text-lg text-white/50 leading-relaxed">
                                    HTML / CSS / JavaScript / TypeScript / ReactJS / NextJS / NodeJS / MongoDB / GitHub / Redux / Figma / CanvaPro / TailwindCSS / GSAP / Framer Motion / Bootstrap / SQL / MySQL / PHP
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.section>

                    {/* Certificate Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-20 md:mb-28"
                    >
                        <div className="flex items-center gap-4 mb-12">
                            <h2 className="text-xl md:text-2xl font-light">Certificate</h2>
                            <div className="flex-1 h-[1px] bg-white/20"></div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {[1, 2, 3].map((i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="relative aspect-[3/4] bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:border-[#c8ff00]/50 transition-colors"
                                >
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center p-6">
                                            <div className="text-6xl mb-4">🏆</div>
                                            <p className="text-white/50 text-sm">Certificate {i}</p>
                                            <p className="text-white/30 text-xs mt-2">Replace with your certificate image</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.section>
                </div>
            </main>

            <Contact />
            <Footer />
        </>
    );
}
