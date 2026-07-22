"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);
  return (
    <section id="home" ref={containerRef} className="relative min-h-screen lg:min-h-0 flex items-center justify-center bg-[#111111] overflow-hidden pt-20 lg:pt-12 lg:pb-16">
      <div className="max-w-[1440px] mx-auto px-6 w-full relative z-10 flex flex-col lg:flex-row items-center justify-start lg:justify-between pb-12 lg:pb-12 pt-8 lg:pt-0">

        {/* Left Content */}
        <div className="w-full lg:flex-1 text-left z-20 flex flex-col justify-start lg:justify-center mt-1 lg:mt-0 mb-0 pb-0 order-1 lg:order-none">
          <h1 className="text-white font-bold tracking-tight" style={{ fontSize: "clamp(3rem, 10vw, 6.5rem)", lineHeight: 1.1 }}>
            Hi there<br />
            I am Peter<span className="text-[#F13D52] inline-block w-[0.2em] h-[0.2em] ml-2 bg-[#F13D52]"></span>
          </h1>
        </div>

        {/* Center Image */}
        <div className="w-full lg:flex-[1.5] h-auto lg:h-[80vh] relative z-10 pointer-events-none flex items-end justify-center order-2 lg:order-none mt-4 lg:mt-0 z-0">
          <div className="relative h-auto lg:h-full inline-block max-w-[95%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-none">
            <img
              src="/home-img.png"
              onError={(e) => { e.currentTarget.src = "/home-img.png"; }}
              alt="Peter"
              className="h-auto w-full lg:h-full lg:w-auto object-contain object-bottom pointer-events-auto"
            />
            {/* Arrow */}
            <div className="absolute top-[30%] lg:top-[25%] right-[5%] flex items-center pointer-events-auto">
              <img
                src="/arrow.png"
                alt="Arrow pointing to Peter"
                className="w-16 md:w-20 lg:w-24 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:flex-1 text-right z-20 flex flex-col justify-center items-end order-3 lg:order-none mt-6 lg:mt-0">
          <h2 className="text-white font-bold tracking-tight" style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", lineHeight: 1.2 }}>
            Fullstack Engineer<br />
            [Web + App]<br />
            <span className="text-[#F13D52]">+</span> AI Automation<br />
            Engineer
          </h2>
        </div>

        {/* Bottom Left text - Aligned with HI and Portfolio */}
        <div className="w-full lg:w-auto text-left lg:absolute lg:bottom-8 lg:left-6 z-20 order-4 lg:order-none mt-6 lg:mt-0">
          <p className="text-gray-400 text-[14px] lg:text-[15px] leading-relaxed font-medium">
            Co-founder<br />
            Kadix Technologies<span className="text-[#F13D52]">.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
