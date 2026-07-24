import React from 'react';
import { notFound } from 'next/navigation';
import { projectsData } from '../../data/projects';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiSupabase, SiVercel, SiReact, SiClerk, SiRedis, SiPostgresql, SiFramer } from "react-icons/si";
import { FaRobot, FaCreditCard } from "react-icons/fa";

const getToolIcon = (tool: string) => {
    switch (tool.toLowerCase()) {
        case "next.js":
        case "next":
            return <SiNextdotjs color="#ffffff" className="w-8 h-8" title={tool} />;
        case "typescript":
            return <SiTypescript color="#3178C6" className="w-8 h-8" title={tool} />;
        case "tailwind":
        case "tailwind css":
            return <SiTailwindcss color="#06B6D4" className="w-8 h-8" title={tool} />;
        case "supabase":
            return <SiSupabase color="#3FCF8E" className="w-8 h-8" title={tool} />;
        case "vercel":
            return <SiVercel color="#ffffff" className="w-8 h-8" title={tool} />;
        case "react":
        case "react native":
            return <SiReact color="#61DAFB" className="w-8 h-8" title={tool} />;
        case "clerk":
            return <SiClerk color="#6C47FF" className="w-8 h-8" title={tool} />;
        case "redis":
            return <SiRedis color="#DC382D" className="w-8 h-8" title={tool} />;
        case "postgres":
            return <SiPostgresql color="#4169E1" className="w-8 h-8" title={tool} />;
        case "framer motion":
            return <SiFramer color="#0055FF" className="w-8 h-8" title={tool} />;
        case "chatgpt":
        case "chatbot":
            return <FaRobot color="#10A37F" className="w-8 h-8" title={tool} />;
        case "paystack":
            return <FaCreditCard color="#09A5DB" className="w-8 h-8" title={tool} />;
        default:
            return null;
    }
};

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projectsData.find(p => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="bg-[#111111] min-h-screen text-white pt-24">
            <Nav />
            <div className="max-w-[1200px] mx-auto px-6 py-24">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24 mt-8">
                    <div className="w-full md:w-1/3">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-baseline tracking-tight">
                            {project.title}
                            <span className="text-[#F13D52] inline-block w-[0.2em] h-[0.2em] ml-2 bg-[#F13D52]"></span>
                        </h1>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tags.map((tag, idx) => (
                                <span key={idx} className="bg-[#F13D52] text-white text-[11px] font-semibold px-2.5 py-1.5 rounded-sm uppercase tracking-wider">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <a href={project.liveSiteUrl} className="text-white hover:text-[#F13D52] transition-colors inline-flex items-center gap-1 border-b border-white pb-0.5 text-sm font-medium">
                            Live Site <span className="text-xs">↗</span>
                        </a>
                    </div>
                    <div className="w-full md:w-1/2">
                        <p className="text-gray-300 text-[15px] lg:text-[18px] font-light leading-relaxed">
                            {project.longDescription}
                        </p>
                    </div>
                </div>

                {/* Problem Statement Section */}
                <div className="mb-24">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-baseline tracking-tight">
                        Problem Statement
                        <span className="text-[#F13D52] inline-block w-[0.2em] h-[0.2em] ml-2 bg-[#F13D52]"></span>
                    </h2>
                    <p className="text-gray-300 text-[15px] lg:text-[18px] font-light leading-relaxed whitespace-pre-wrap max-w-4xl">
                        {project.problemStatement}
                    </p>
                </div>

                {/* Possible Solution Section */}
                <div className="mb-24">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-baseline tracking-tight">
                        Possible Solution
                        <span className="text-[#F13D52] inline-block w-[0.2em] h-[0.2em] ml-2 bg-[#F13D52]"></span>
                    </h2>
                    <p className="text-gray-300 text-[15px] lg:text-[18px] font-light leading-relaxed whitespace-pre-wrap max-w-4xl">
                        {project.solution}
                    </p>
                </div>

                {/* Footer Info Section */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-t border-white/10 pt-16">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-baseline tracking-tight">
                            Project Duration
                            <span className="text-[#F13D52] inline-block w-[0.2em] h-[0.2em] ml-2 bg-[#F13D52]"></span>
                        </h2>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl md:text-[50px] font-light">{project.duration}</span>
                            <span className="text-gray-400 text-lg font-light tracking-wide">Week(s)</span>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-baseline tracking-tight">
                            Tools Used
                            <span className="text-[#F13D52] inline-block w-[0.2em] h-[0.2em] ml-2 bg-[#F13D52]"></span>
                        </h2>
                        <div className="flex flex-wrap gap-4 mt-4">
                            {project.toolsUsed && project.toolsUsed.map((tool, idx) => {
                                const icon = getToolIcon(tool);
                                return icon ? (
                                    <div key={idx} className="flex flex-col items-center justify-center gap-2">
                                        <div className="w-16 h-16 border border-white/10 bg-[#161616] rounded-sm flex items-center justify-center hover:border-white/20 transition-colors">
                                            {icon}
                                        </div>
                                    </div>
                                ) : null;
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
