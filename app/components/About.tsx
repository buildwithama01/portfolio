"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex items-center justify-center bg-[#111111] overflow-hidden py-24 lg:pt-32 lg:pb-20"
    >
      <div className="max-w-[1200px] mx-auto px-6 w-full flex flex-col lg:flex-row items-stretch lg:items-stretch gap-12 lg:gap-20">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[45%] flex justify-start"
        >
          <div className="border border-white/10 relative w-full h-full flex flex-col justify-end pt-10">
            <img
              src="/about-img.png"
              alt="About Peter Ama"
              className="w-full h-auto object-contain mt-auto"
            />
          </div>
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-[55%] flex flex-col justify-center text-left py-4"
        >
          <div className="mb-14">
            <h2 className="text-white text-[28px] font-bold tracking-tight mb-6 flex items-baseline">
              Rooted in Purpose
              <span className="text-[#F13D52] inline-block w-[0.2em] h-[0.2em] ml-2 bg-[#F13D52]"></span>
            </h2>
            <div className="text-gray-300 font-light leading-[1.8] space-y-6 text-[18px] text-justify">
              <p>
                Ama Peter believes the most powerful digital products are the
                ones that feel effortless to use, not because they were easy to
                build, but because someone cared enough to get every detail
                right. That's the standard he holds himself to on every project,
                including the ventures he's building at{" "}
                <strong className="font-semibold text-white">
                  Kadix Technologies
                </strong>
                .
              </p>
              <p>
                His journey didn't start with a computer science degree, it
                started with curiosity. Over six years ago he began teaching
                himself how to build for the internet, and he hasn't stopped
                since. Every project has been a lesson, every client has pushed
                him to grow.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-white text-[28px] font-bold tracking-tight mb-6 flex items-baseline">
              The Ama Peter Approach
              <span className="text-[#F13D52] inline-block w-[0.2em] h-[0.2em] ml-2 bg-[#F13D52]"></span>
            </h2>
            <div className="text-gray-300 font-light leading-[1.8] text-[18px] text-justify">
              <p>
                Great software should feel simple, even when it isn't. He
                rejects overcomplicated solutions and bloated code in favor of
                clean, reliable systems that do exactly what they're supposed
                to, nothing more, nothing less. It's a standard built from real
                products under real constraints, and it's the same standard
                every client gets.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
