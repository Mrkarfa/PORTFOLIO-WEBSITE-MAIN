"use client";

import { motion } from "motion/react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    platform: "",
    services: [] as string[],
    budget: "",
    email: "",
    projectDetails: "",
    agreePrivacy: false,
  });

  const platforms = ["Dribble", "Behance", "Instagram", "Linkedin"];
  const services = [
    "Website Design",
    "Development",
    "Brand Design",
    "Mobile Design",
  ];
  const budgets = ["$5000 - 15000", "$15001 - 30000", "$30000 - 52000"];

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  return (
    <section className="relative min-h-screen bg-[#1a1a1a] text-white py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-16 md:mb-20 lg:mb-24 gap-8">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold text-white leading-tight">
              Let's just
              <br />
              Make it Together !
            </h1>
          </motion.div>

          {/* Client Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center lg:items-end gap-4"
          >
            <div className="flex items-center gap-2">
              {/* Client Avatars */}
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#1a1a1a] overflow-hidden bg-gray-700"
                  >
                    <img
                      src={`https://i.pravatar.cc/150?img=${i + 10}`}
                      alt={`Client ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Arrow Button */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="w-16 h-16 md:w-20 md:h-20 bg-[#c8ff00] rounded-full flex items-center justify-center flex-shrink-0"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.a>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-sm text-white/70"
            >
              See What's Client' Says
            </motion.p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6 md:space-y-8"
        >
          {/* Name and Company */}
          <div className="flex flex-wrap items-baseline gap-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light">
            <span>Hi! My Name is</span>
            <input
              type="text"
              placeholder="Type Your Name Here*"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="bg-transparent border-b border-white/30 px-2 py-1 focus:outline-none focus:border-white transition-colors min-w-[200px] flex-1 max-w-md placeholder:text-white/30 text-sm md:text-base"
            />
            <span>and I work in</span>
            <input
              type="text"
              placeholder="Type A Company Name Here*"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              className="bg-transparent border-b border-white/30 px-2 py-1 focus:outline-none focus:border-white transition-colors min-w-[200px] flex-1 max-w-md placeholder:text-white/30 text-sm md:text-base"
            />
          </div>

          {/* Platform Selection */}
          <div className="flex flex-wrap items-center gap-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light">
            <span>I found you using</span>
            <div className="flex flex-wrap gap-2">
              {platforms.map((platform) => (
                <motion.button
                  key={platform}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFormData({ ...formData, platform })}
                  className={`btn-small rounded-full border transition-colors ${
                    formData.platform === platform
                      ? "bg-white text-black border-white"
                      : "border-white/30 hover:border-white"
                  }`}
                >
                  {platform}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Services Selection */}
          <div className="flex flex-wrap items-center gap-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light">
            <span>I'm looking for help with :</span>
            <div className="flex flex-wrap gap-2">
              {services.map((service) => (
                <motion.button
                  key={service}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleServiceToggle(service)}
                  className={`btn-small rounded-full border transition-colors ${
                    formData.services.includes(service)
                      ? "bg-white text-black border-white"
                      : "border-white/30 hover:border-white"
                  }`}
                >
                  {service}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Budget Selection */}
          <div className="flex flex-wrap items-center gap-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light">
            <span>I am hopping to stay around of :</span>
            <div className="flex flex-wrap gap-2">
              {budgets.map((budget) => (
                <motion.button
                  key={budget}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFormData({ ...formData, budget })}
                  className={`btn-small rounded-full border transition-colors ${
                    formData.budget === budget
                      ? "bg-white text-black border-white"
                      : "border-white/30 hover:border-white"
                  }`}
                >
                  {budget}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Email and Project Details */}
          <div className="flex flex-wrap items-baseline gap-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light">
            <span>Feel free to reach me at</span>
            <input
              type="email"
              placeholder="Type your contact Email*"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="bg-transparent border-b border-white/30 px-2 py-1 focus:outline-none focus:border-white transition-colors min-w-[250px] flex-1 max-w-md placeholder:text-white/30 text-sm md:text-base"
            />
            <span>
              to begin the conversation. I would like to share more about my
              project :
            </span>
          </div>

          {/* Project Details */}
          <div>
            <input
              type="text"
              placeholder="Type Project Details here*"
              value={formData.projectDetails}
              onChange={(e) =>
                setFormData({ ...formData, projectDetails: e.target.value })
              }
              className="w-full bg-transparent border-b border-white/30 px-2 py-3 text-lg md:text-xl focus:outline-none focus:border-white transition-colors placeholder:text-white/30"
            />
          </div>

          {/* Privacy and Submit */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8">
            {/* Privacy Checkbox */}
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={formData.agreePrivacy}
                onChange={(e) =>
                  setFormData({ ...formData, agreePrivacy: e.target.checked })
                }
                className="w-5 h-5 bg-transparent border-2 border-white/30 rounded cursor-pointer accent-[#c8ff00]"
              />
              <span className="text-sm md:text-base text-white/70 group-hover:text-white transition-colors">
                I agree with the Privacy Policy.
              </span>
            </label>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="btn-large bg-[#c8ff00] text-black font-medium rounded-full flex items-center gap-3 hover:bg-[#b3e600] transition-colors"
            >
              Start A Journey
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M4 10H16M16 10L10 4M16 10L10 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
