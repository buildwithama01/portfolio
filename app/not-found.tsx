"use client";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <main className="bg-[#111111] min-h-screen flex flex-col">

      <section className="flex-grow flex items-center justify-center relative overflow-hidden pt-20">
        <div className="max-w-[1200px] mx-auto px-6 w-full text-center z-10 relative">

          <h1 className="text-white font-bold tracking-tight mb-4 flex items-baseline justify-center" style={{ fontSize: "clamp(4rem, 15vw, 10rem)", lineHeight: 1 }}>
            404<span className="text-[#F13D52] inline-block w-[0.2em] h-[0.2em] ml-2 bg-[#F13D52]"></span>
          </h1>

          <p className="text-gray-300 font-light text-lg md:text-xl mb-10 max-w-lg mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <a
            href="/"
            className="inline-flex items-center gap-2 bg-[#F13D52] hover:bg-[#F13D52]/90 text-white font-medium px-8 py-3 transition-colors rounded-sm"
          >
            Return Home
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>

        </div>
      </section>
    </main>
  );
}
