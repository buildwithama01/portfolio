"use client";
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "Development Team Representative & Automation Engineer",
    bullets: [
      "Designed and tested mainnet deployment workflows, documenting critical system defects to refine platform execution before live release.",
      "Performed blockchain environment configuration MetaMask wallet setup, Sepolia testnet integration, mock token minting via Remix IDE.",
      "Executed crypto wallet operations and transaction management on Base network for token-related platform features.",
      "Coordinated weekly development reports across the team and supported onboarding of new engineering interns.",
    ],
    link: "stocks.rwaops.com",
    company: "RWA Stocks",
    date: "2026 - Currently",
    icon: "/RWA.png",
    align: "left"
  },
  {
    id: 2,
    title: "Automation Engineer & QA Specialist",
    bullets: [
      "Ran end-to-end QA testing and behavioral bug reporting on the GC-Claim gift card redemption platform, across pre-deployment and live mainnet stages.",
      "Validated payment integration pipelines through Stripe sandbox testing within the Claims Portal.",
      "Maintained and managed product listings across cryptocurrency aggregator platforms as technical driver for go-to-market strategy.",
    ],
    link: "claim.rwaops.com",
    company: "RWA Claims",
    date: "2026 - Currently",
    icon: "/RWA.png",
    align: "right"
  },
  {
    id: 3,
    title: "Co-Founder & COO",
    bullets: [
      "Built a multilingual AI call center (Retell AI, Twilio, Zoho CRM/Desk, ElevenLabs) automating client scheduling and lead capture end-to-end.",
      "Designed an autonomous PR/media outreach system for a fintech client (n8n, Airtable, Claude API, ZeroBounce, Google Alerts RSS) replacing manual outreach entirely.",
      "Built a staff onboarding and check-in system (n8n, Google Drive, Sheets, Slack) resolving edge cases in binary-data handling and workflow loops.",
      "Own technical strategy and architecture across all studio client automation projects.",
    ],
    link: "kadix.org",
    company: "Kadix Technologies",
    date: "2026 - Currently",
    icon: "/Kadix.png",
    align: "left"
  },
  {
    id: 4,
    title: "Developer",
    bullets: [
      "Building an e-commerce platform giving sellers free personalized store links with built-in WhatsApp order notifications.",
      "Researched social commerce positioning and evaluated accelerator programs (Techstars Lagos, Google for Startups Africa, YC) for growth strategy.",
    ],
    link: "kozura.ng",
    company: "Kozura",
    date: "2026 - Currently",
    icon: "/Kozura.png",
    align: "right"
  },
  {
    id: 5,
    title: "Fullstack & AI Automation Engineer",
    bullets: [
      "Built the Ada Fashion WhatsApp AI Sales Assistant (n8n workflow integrating Claude API, Paystack, and WhatsApp Cloud API) for live conversational sales and payments.",
      "Designed an AI Financial Co-pilot for traders (n8n + WhatsApp) for a Hackathon.",
      "Automated lead management, transaction handling, and marketing pipelines for retail and service-based clients using n8n, third-party APIs, and webhooks.",
    ],
    link: "",
    company: "Freelance",
    date: "2024 - Currently",
    icon: "/Freelance.png",
    align: "left"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative bg-[#111111] overflow-hidden py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 w-full">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-white text-3xl md:text-[2.5rem] font-bold tracking-tight mb-20 flex items-baseline"
        >
          Experience<span className="text-[#F13D52] inline-block w-[0.2em] h-[0.2em] ml-2 bg-[#F13D52]"></span>
        </motion.h2>

        {/* Timeline Container */}
        <div className="relative w-full">
          {/* Central Line for md+ */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/20"></div>
          {/* Left Line for mobile */}
          <div className="block md:hidden absolute left-5 top-0 bottom-0 w-px bg-white/20"></div>

          <div className="flex flex-col gap-12 md:gap-0">
            {experiences.map((exp, index) => {
              const isLeft = exp.align === "left";
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex flex-col md:flex-row items-center w-full min-h-[150px] md:my-4"
                >

                  {/* Card Section */}
                  <div className={`w-full md:w-1/2 flex pl-16 md:pl-0 ${isLeft ? "md:justify-end md:pr-16" : "md:order-3 md:justify-start md:pl-16"} mb-4 md:mb-0`}>
                    <div className="bg-[#161616] border border-white/5 p-6 md:p-8 w-full max-w-[500px]">
                      <h4 className="text-white font-semibold text-lg md:text-xl mb-4">{exp.title}</h4>
                      <ul className="list-disc pl-5 text-gray-400 text-sm md:text-[15px] space-y-3 mb-6 leading-relaxed">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </ul>
                      {exp.link && (
                        <a href={`https://${exp.link}`} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#F13D52] transition-colors text-sm flex items-center gap-2">
                          {exp.link}
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Icon Section */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10 w-10 h-10 bg-white">
                    <img src={exp.icon} alt={exp.company} className="w-full h-full object-cover" />
                  </div>

                  {/* Company Info Section */}
                  <div className={`w-full md:w-1/2 flex pl-16 md:pl-0 ${isLeft ? "md:order-3 md:justify-start md:pl-16" : "md:justify-end md:pr-16"}`}>
                    <div className={`text-left ${isLeft ? "md:text-left" : "md:text-right"}`}>
                      <h3 className="text-white font-semibold text-lg">{exp.company}</h3>
                      <p className="text-gray-500 text-sm font-mono tracking-wider mt-1">{exp.date}</p>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
