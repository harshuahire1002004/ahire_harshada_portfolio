"use client";

import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#FAFAFA]/95 dark:bg-[#0D181A]/95 backdrop-blur-md border-b border-[#E0E0E0] dark:border-[#1F2A2B] transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex justify-between items-center">
        {/* Logo & Branding */}
        <Link href="#home" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-8 h-8 sm:w-9 sm:h-9">
            {/* Light Mode Logo */}
            <Image 
              src="/logo-light.png" 
              alt="Harshada Logo Light" 
              fill 
              sizes="36px" 
              className="object-contain dark:hidden group-hover:scale-105 transition-transform" 
            />
            {/* Dark Mode Logo */}
            <Image 
              src="/logo-dark.png" 
              alt="Harshada Logo Dark" 
              fill 
              sizes="36px" 
              className="object-contain hidden dark:block group-hover:scale-105 transition-transform" 
            />
          </div>
          <div>
            <h1 className="font-poppins font-bold text-[14px] sm:text-[16px] leading-tight text-[#333333] dark:text-[#EAEAEA] group-hover:text-primary-teal transition-colors">
              Harshada Ahire
            </h1>
            <p className="font-inter text-[11px] sm:text-[12px] text-[#666666] dark:text-[#A0A0A0]">
              Data Analyst
            </p>
          </div>
        </Link>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-[14px] font-medium text-[#333333] dark:text-[#EAEAEA]">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="hover:text-primary-teal transition-colors py-1 relative group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-teal transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
        
        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          
          <Link 
            href="#contact" 
            className="hidden sm:inline-flex items-center justify-center bg-primary-teal hover:bg-deep-teal text-white font-medium text-[13.5px] px-5 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-primary-teal/20"
          >
            Hire Me
          </Link>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#555555] dark:text-[#A0A0A0] hover:text-primary-teal dark:hover:text-primary-teal hover:bg-black/5 dark:hover:bg-white/5 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-primary-teal" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#E0E0E0] dark:border-[#1F2A2B] bg-[#FAFAFA] dark:bg-[#0D181A] px-6 py-5 space-y-4 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="font-inter text-[15px] font-medium text-[#444444] dark:text-[#D0D0D0] hover:text-primary-teal dark:hover:text-primary-teal py-2 px-2 rounded-lg hover:bg-primary-teal/5 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 opacity-40" />
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-[#EAEAEA] dark:border-[#1F2A2B]">
            <Link
              href="#contact"
              onClick={handleLinkClick}
              className="w-full bg-primary-teal hover:bg-deep-teal text-white font-medium text-[14px] py-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <span>Hire Me</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
