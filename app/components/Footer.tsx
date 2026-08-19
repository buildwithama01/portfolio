"use client";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";
import { LuInstagram } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useForm } from "@formspree/react";

export default function Footer() {
  const [state, handleSubmit] = useForm("mzzekegk");

  return (
    <footer id="contact" className="bg-[#111111] border-t border-white/5 py-24">
      <div className="max-w-[1200px] mx-auto px-6 w-full flex flex-col lg:flex-row justify-between gap-16 lg:gap-24">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-5/12 flex flex-col"
        >
          <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight mb-2 flex items-baseline">
            Peter Ama
            <span className="text-[#F13D52] inline-block w-[0.2em] h-[0.2em] ml-1.5 bg-[#F13D52]"></span>
          </h3>
          <p className="text-gray-400 text-[15px] mb-8">
            Let's Build Something
          </p>

          <div className="flex items-center gap-4 mb-10 text-white/80">
            <a
              href="mailto:amapeter21@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email Peter Ama"
              className="hover:text-[#F13D52] transition-colors"
            >
              <HiOutlineEnvelope className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ama-peter-obinna/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Peter Ama on LinkedIn"
              className="hover:text-[#F13D52] transition-colors"
            >
              <BiLogoLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/buildwithama01"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Peter Ama on GitHub"
              className="hover:text-[#F13D52] transition-colors"
            >
              <BiLogoGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/buildwithama/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Peter Ama on Instagram"
              className="hover:text-[#F13D52] transition-colors"
            >
              <LuInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/thats_ama"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Peter Ama on X"
              className="hover:text-[#F13D52] transition-colors"
            >
              <FaXTwitter className="w-4 h-4" />
            </a>
          </div>

          <p className="text-gray-400 font-light leading-relaxed text-[14px] md:text-[15px]">
            Ama Peter works with founders, businesses, and creatives who need
            things built properly, not just quickly. If you have something worth
            building, send a message and let's talk about it.
          </p>
        </motion.div>

        {/* Right Column (Form) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-6/12"
        >
          <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-10 flex items-baseline">
            Get in Touch
            <span className="text-[#F13D52] inline-block w-[0.2em] h-[0.2em] ml-2 bg-[#F13D52]"></span>
          </h2>

          {state.succeeded ? (
            <div
              className="contact-form-success"
              style={{ textAlign: "center", padding: "2rem" }}
            >
              <div
                className="success-icon"
                style={{
                  marginBottom: "1rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <FaPaperPlane size={24} color="#F13D52" />
              </div>
              <h3
                className="text-white text-xl font-bold"
                style={{ marginBottom: "0.5rem" }}
              >
                Message Sent!
              </h3>
              <p className="text-gray-400">
                Thanks for reaching out. I'll get back to you as soon as
                possible.
              </p>
            </div>
          ) : (
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-gray-300 text-[15px]">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Peter Ama"
                  className="bg-transparent border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:border-[#F13D52]/50 placeholder:text-gray-600 transition-colors"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-gray-300 text-[15px]">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  className="bg-transparent border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:border-[#F13D52]/50 placeholder:text-gray-600 transition-colors"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="project" className="text-gray-300 text-[15px]">
                  Project Type
                </label>
                <input
                  type="text"
                  id="project"
                  name="project"
                  placeholder="Web Application"
                  className="bg-transparent border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:border-[#F13D52]/50 placeholder:text-gray-600 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-gray-300 text-[15px]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="bg-transparent border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:border-[#F13D52]/50 placeholder:text-gray-600 transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <div className="mt-2">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="bg-[#F13D52] hover:bg-[#F13D52]/90 text-white px-8 py-3 text-[15px] transition-colors disabled:opacity-50"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </footer>
  );
}
