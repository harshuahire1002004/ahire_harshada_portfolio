import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="max-w-6xl mx-auto px-6 py-20 min-h-[80vh] flex items-center border-b border-[#E0E0E0] dark:border-[#1F2A2B] scroll-mt-20">
      <div className="flex flex-col md:flex-row items-center gap-12 w-full">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-primary-teal font-poppins font-semibold text-xl tracking-wide">Hello, I'm</h2>
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-poppins font-bold tracking-tight text-[#333333] dark:text-[#EAEAEA]">
              Harshada Ahire
            </h1>
            <h3 className="text-3xl md:text-4xl font-poppins font-semibold text-primary-teal">
              Data Analyst
            </h3>
          </div>

          <p className="text-[16px] text-[#666666] dark:text-[#A0A0A0] max-w-lg leading-relaxed font-inter">
            Data is more than numbers — it’s a story, a signal, and an opportunity.
            I uncover meaningful patterns, build intuitive analytics solutions, and turn complex data into insights that drive better decisions.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="bg-primary-teal hover:bg-deep-teal text-white font-medium text-[14px] px-8 py-3 rounded-md transition-colors"
            >
              View My Work
            </a>
            <a
              href="/Harshada _Ahire_Resume.pdf"
              download="Harshada_Ahire_Resume.pdf"
              className="flex items-center gap-2 border border-primary-teal text-primary-teal hover:bg-primary-teal/10 font-medium text-[14px] px-8 py-3 rounded-md transition-colors"
            >
              Download Resume
              <Download className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-4 pt-6">
            <a href="https://www.linkedin.com/in/harshada-ahire/" target="_blank" rel="noopener noreferrer" className="bg-primary-teal text-white p-2.5 rounded-full hover:bg-deep-teal transition-colors">
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a href="https://github.com/harshuahire1002004" target="_blank" rel="noopener noreferrer" className="bg-primary-teal text-white p-2.5 rounded-full hover:bg-deep-teal transition-colors">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="mailto:ahireharshada495@gmail.com" className="bg-primary-teal text-white p-2.5 rounded-full hover:bg-deep-teal transition-colors">
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Content - Illustration */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 bg-[#E6F7F5] dark:bg-[#0D181A] rounded-full filter blur-3xl opacity-50"></div>
            {/* Light Mode Image */}
            <Image
              src="/hero-illustration-light.png"
              alt="Data Analyst Illustration Light"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain relative z-10 dark:hidden"
              priority
            />
            {/* Dark Mode Image */}
            <Image
              src="/hero-illustration-dark.png"
              alt="Data Analyst Illustration Dark"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain relative z-10 hidden dark:block"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
