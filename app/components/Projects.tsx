"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { projectsData, aiAutomationData } from "../data/projects";

export default function Projects() {
    const [activeTab, setActiveTab] = useState("Full stack");

    return (
        <section id="projects" className="bg-[#111111] overflow-hidden py-24">
            <div className="max-w-[1200px] mx-auto px-6 w-full">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 border-b border-white/10 pb-8"
                >
                    <h2 className="text-white text-3xl md:text-[2.5rem] font-bold tracking-tight mb-4 flex items-baseline">
                        Some Projects<span className="text-[#F13D52] inline-block w-[0.2em] h-[0.2em] ml-2 bg-[#F13D52]"></span>
                    </h2>
                    <p className="text-gray-400 font-light text-[15px] max-w-2xl leading-relaxed mb-10">
                        A selection of projects built with precision and intent. Focused on clean interfaces, robust systems, and seamless user experiences.
                    </p>

                    {/* Tabs */}
                    <div className="flex items-center gap-8">
                        <button
                            onClick={() => setActiveTab("Full stack")}
                            className={`text-[15px] transition-colors ${activeTab === "Full stack" ? "text-white font-medium" : "text-gray-500 hover:text-[#F13D52]"}`}
                        >
                            Full stack
                        </button>
                        <button
                            onClick={() => setActiveTab("AI Automation")}
                            className={`text-[15px] transition-colors ${activeTab === "AI Automation" ? "text-white font-medium" : "text-gray-500 hover:text-[#F13D52]"}`}
                        >
                            AI Automation
                        </button>
                    </div>
                </motion.div>

                {/* Projects Grid */}
                {activeTab === "Full stack" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projectsData.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="border border-white/10 bg-[#161616] flex flex-col group hover:border-white/20 transition-colors"
                            >
                                <Link href={`/projects/${project.slug}`} className="p-4 flex flex-col h-full cursor-pointer">

                                {/* Image Container */}
                                <div className="w-full h-[250px] md:h-[320px] bg-transparent relative overflow-hidden mb-6 flex items-center justify-center rounded-sm">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Info */}
                                <div className="flex flex-col flex-grow px-2">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-white font-bold text-lg md:text-xl tracking-tight">{project.title}</h3>
                                        <div aria-label="View Project" className="text-white group-hover:text-[#F13D52] transition-colors">
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                                <polyline points="7 7 17 7 17 17"></polyline>
                                            </svg>
                                        </div>
                                    </div>

                                    <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed mb-6 font-light">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-[#F13D52] text-white text-[11px] font-semibold px-2.5 py-1 rounded-sm uppercase tracking-wider"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                </Link>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {aiAutomationData.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-[#181818] border border-white/10 p-6 md:p-8 flex flex-col justify-between hover:border-white/20 transition-colors"
                            >
                                <div>
                                    <h3 className="text-white text-2xl md:text-3xl font-normal mb-5 tracking-tight">
                                        {item.title}
                                    </h3>

                                    <div className="space-y-4 text-gray-300 font-light text-sm md:text-[15px] leading-relaxed mb-8">
                                        <p>
                                            <span className="font-semibold text-white">Problem:</span> {item.problem}
                                        </p>
                                        <p>
                                            <span className="font-semibold text-white">Solution:</span> {item.solution}
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-[#111111] border border-white/10 p-4 rounded-sm flex items-start gap-4">
                                    <span className="text-[#F13D52] font-mono font-semibold text-xs md:text-sm shrink-0 pt-0.5">
                                        AI:
                                    </span>
                                    <p className="font-mono text-xs md:text-sm text-gray-300 leading-relaxed">
                                        {item.aiPrompt}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}
