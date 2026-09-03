import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#FAFAFA] dark:bg-[#0D181A] border-b border-[#E0E0E0] dark:border-[#1F2A2B]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8 md:w-10 md:h-10">
            {/* Light Mode Logo */}
            <Image src="/logo-light.png" alt="Harshada Logo Light" fill sizes="(max-width: 768px) 32px, 40px" className="object-contain dark:hidden" />
            {/* Dark Mode Logo */}
            <Image src="/logo-dark.png" alt="Harshada Logo Dark" fill sizes="(max-width: 768px) 32px, 40px" className="object-contain hidden dark:block" />
          </div>
          <div className="hidden sm:block">
            <h1 className="font-poppins font-bold text-[16px] leading-tight text-[#333333] dark:text-[#EAEAEA]">Harshada Ahire</h1>
            <p className="font-inter text-[12px] text-[#666666] dark:text-[#A0A0A0]">Data Analyst</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-[14px] font-medium text-[#333333] dark:text-[#EAEAEA]">
          <Link href="#home" className="hover:text-primary-teal transition-colors border-b-2 border-primary-teal">Home</Link>
          <Link href="#about" className="hover:text-primary-teal transition-colors border-b-2 border-transparent hover:border-primary-teal">About</Link>
          <Link href="#skills" className="hover:text-primary-teal transition-colors border-b-2 border-transparent hover:border-primary-teal">Skills</Link>
          <Link href="#projects" className="hover:text-primary-teal transition-colors border-b-2 border-transparent hover:border-primary-teal">Projects</Link>
          <Link href="#experience" className="hover:text-primary-teal transition-colors border-b-2 border-transparent hover:border-primary-teal">Experience</Link>
          <Link href="#contact" className="hover:text-primary-teal transition-colors border-b-2 border-transparent hover:border-primary-teal">Contact</Link>
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="#contact" className="hidden sm:block bg-primary-teal hover:bg-deep-teal text-white font-medium text-[14px] px-6 py-2 rounded-md transition-colors">
            Hire Me
          </Link>
        </div>
      </div>
    </nav>
  );
}
