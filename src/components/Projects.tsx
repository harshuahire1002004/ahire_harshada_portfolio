"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Maximize2, X, ExternalLink } from "lucide-react";

interface ProjectItem {
  id: number;
  title: string;
  image: string;
  description: string;
  tags: string[];
  link: string;
}

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  const projects: ProjectItem[] = [
    {
      id: 1,
      title: "Sales Performance Dashboard",
      image: "/Sales Dashbaord.png",
      description: "Interactive Power BI dashboard tracking sales KPIs, revenue trends, product category breakdowns, and regional performance.",
      tags: ["Power BI", "DAX", "Sales Analytics", "Data Modeling"],
      link: "#projects"
    },
    {
      id: 2,
      title: "Customer Analytics Dashboard",
      image: "/Customer Dashbaord.png",
      description: "Comprehensive customer intelligence dashboard analyzing behavior patterns, segment distribution, and key retention metrics.",
      tags: ["Power BI", "Customer Segmentation", "SQL", "KPI Analysis"],
      link: "#projects"
    },
    {
      id: 3,
      title: "Tahweel Analytics Dashboard",
      image: "/Tahweel Dashbaord.png",
      description: "Operational and financial transaction dashboard monitoring remittance volume, currency flows, and channel metrics.",
      tags: ["Power BI", "Financial Analytics", "ETL", "Reporting"],
      link: "#projects"
    }
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-b border-[#E0E0E0] dark:border-[#1F2A2B]">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-poppins font-bold text-primary-teal">
            Featured Projects
          </h2>
          <p className="text-[14px] text-[#666666] dark:text-[#A0A0A0] mt-1 font-inter">
            Interactive Business Intelligence & Analytics Dashboards
          </p>
        </div>
        <Link href="#projects" className="text-primary-teal font-medium text-[14px] flex items-center gap-1 hover:text-deep-teal transition-colors">
          View All Projects <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-white dark:bg-[#0D181A] rounded-xl border border-[#E0E0E0] dark:border-[#1F2A2B] overflow-hidden group hover:-translate-y-1.5 transition-all duration-300 hover:shadow-xl dark:hover:shadow-primary-teal/5 dark:hover:border-primary-teal/50 flex flex-col"
          >
            {/* Project Image Container */}
            <div 
              onClick={() => setSelectedImage({ src: project.image, title: project.title })}
              className="relative h-52 bg-[#F1F3F2] dark:bg-[#111A19] overflow-hidden cursor-pointer border-b border-[#E0E0E0] dark:border-[#1F2A2B] group/img"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
              />
              
              {/* Hover overlay with zoom hint */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white text-sm font-medium backdrop-blur-[2px]">
                <Maximize2 className="w-5 h-5 text-primary-teal" />
                <span>Click to expand</span>
              </div>
            </div>
            
            {/* Project Details */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-[11px] font-medium font-inter px-2.5 py-0.5 rounded-full bg-[#E6F7F5] dark:bg-[#111A19] text-primary-teal border border-primary-teal/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-poppins font-bold text-[#333333] dark:text-[#EAEAEA] mb-2 group-hover:text-primary-teal transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-[14px] text-[#666666] dark:text-[#A0A0A0] leading-relaxed font-inter mb-6">
                  {project.description}
                </p>
              </div>
              
              <button 
                type="button"
                onClick={() => setSelectedImage({ src: project.image, title: project.title })}
                className="inline-flex items-center gap-1.5 text-primary-teal font-medium text-[14px] hover:text-deep-teal transition-colors group/link w-fit"
              >
                <span>View Dashboard</span>
                <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal for high-res dashboard preview */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative bg-white dark:bg-[#0D181A] rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-[#E0E0E0] dark:border-[#1F2A2B] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E0E0E0] dark:border-[#1F2A2B]">
              <h3 className="text-lg font-poppins font-bold text-[#333333] dark:text-[#EAEAEA]">
                {selectedImage.title}
              </h3>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="p-1.5 rounded-lg text-[#666666] dark:text-[#A0A0A0] hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary-teal transition-colors"
                aria-label="Close preview"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="relative w-full h-[65vh] bg-[#F1F3F2] dark:bg-[#070D0E] p-2 overflow-auto flex items-center justify-center">
              <div className="relative w-full h-full min-h-[300px]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

