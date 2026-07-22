import React from 'react';
import { notFound } from 'next/navigation';
import { projectsData } from '../../data/projects';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

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
                        <div className="flex flex-wrap gap-3">
                            {project.toolsUsed.map((tool, idx) => (
                                <div key={idx} className="w-14 h-14 border border-white/10 bg-transparent rounded-sm flex items-center justify-center text-gray-500 text-xs">
                                    {tool}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
