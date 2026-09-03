import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary-teal dark:bg-[#0D181A] border-t-0 dark:border-t dark:border-[#1F2A2B] text-white dark:text-[#EAEAEA]">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              {/* Light Mode Logo */}
              <Image src="/logo-light.png" alt="Harshada Logo Light" fill sizes="(max-width: 768px) 40px, 48px" className="object-contain dark:hidden" />
              {/* Dark Mode Logo */}
              <Image src="/logo-dark.png" alt="Harshada Logo Dark" fill sizes="(max-width: 768px) 40px, 48px" className="object-contain hidden dark:block" />
            </div>
            <div>
              <h2 className="font-poppins font-bold text-[18px] leading-tight">Harshada Ahire</h2>
              <p className="font-inter text-[14px] text-white/80 dark:text-[#A0A0A0]">Data Analyst</p>
            </div>
          </div>
          <p className="font-inter text-[12px] text-white/70 dark:text-[#A0A0A0] mt-4">
            &copy; 2026 Harshada Ahire. All rights reserved.
          </p>
        </div>

        <div className="flex gap-16">
          <div className="flex flex-col gap-3">
            <h3 className="font-poppins font-semibold text-[16px] mb-2">Quick Links</h3>
            <div className="flex gap-12">
              <div className="flex flex-col gap-2">
                <Link href="#home" className="text-[14px] text-white/80 dark:text-[#A0A0A0] hover:text-white dark:hover:text-primary-teal transition-colors">Home</Link>
                <Link href="#about" className="text-[14px] text-white/80 dark:text-[#A0A0A0] hover:text-white dark:hover:text-primary-teal transition-colors">About</Link>
                <Link href="#skills" className="text-[14px] text-white/80 dark:text-[#A0A0A0] hover:text-white dark:hover:text-primary-teal transition-colors">Skills</Link>
              </div>
              <div className="flex flex-col gap-2">
                <Link href="#projects" className="text-[14px] text-white/80 dark:text-[#A0A0A0] hover:text-white dark:hover:text-primary-teal transition-colors">Projects</Link>
                <Link href="#experience" className="text-[14px] text-white/80 dark:text-[#A0A0A0] hover:text-white dark:hover:text-primary-teal transition-colors">Experience</Link>
                <Link href="#contact" className="text-[14px] text-white/80 dark:text-[#A0A0A0] hover:text-white dark:hover:text-primary-teal transition-colors">Contact</Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-poppins font-semibold text-[16px] mb-2">Follow Me</h3>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/harshada-ahire/" target="_blank" rel="noopener noreferrer" className="bg-white/10 dark:bg-[#1F2A2B] p-2 rounded-full hover:bg-white/20 dark:hover:bg-primary-teal/20 transition-colors">
                <FaLinkedinIn className="w-4 h-4 text-white dark:text-primary-teal" />
              </a>
              <a href="https://github.com/harshuahire1002004" target="_blank" rel="noopener noreferrer" className="bg-white/10 dark:bg-[#1F2A2B] p-2 rounded-full hover:bg-white/20 dark:hover:bg-primary-teal/20 transition-colors">
                <FaGithub className="w-4 h-4 text-white dark:text-primary-teal" />
              </a>
              <a href="mailto:ahireharshada495@gmail.com" className="bg-white/10 dark:bg-[#1F2A2B] p-2 rounded-full hover:bg-white/20 dark:hover:bg-primary-teal/20 transition-colors">
                <FaEnvelope className="w-4 h-4 text-white dark:text-primary-teal" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
