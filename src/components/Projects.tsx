"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  ArrowRight, 
  Maximize2, 
  X, 
  ExternalLink, 
  Info, 
  Target, 
  Lightbulb, 
  TrendingUp, 
  CheckCircle2, 
  BarChart3,
  Layers
} from "lucide-react";

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  image: string;
  shortDescription: string;
  problem: string;
  solution: string;
  impact: string;
  keyMetrics: string[];
  tags: string[];
  link: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [modalTab, setModalTab] = useState<"details" | "preview">("details");
  const [showAll, setShowAll] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const projects: ProjectItem[] = [
    {
      id: 1,
      title: "Sales Performance Dashboard",
      category: "Sales Analytics & Profitability",
      image: "/Sales Dashbaord.png",
      shortDescription: "Centralized sales analytics dashboard tracking revenue trends, profit margins, brand performance, and regional opportunities.",
      problem: "The business needed a centralized solution to monitor sales and profitability across markets, brands, categories, and regions. Without a consolidated view, identifying revenue trends, high-performing brands, profitable categories, and regional opportunities required manual analysis and made it difficult to get a quick view of overall performance.",
      solution: "Developed an interactive Power BI Sales Analytics Dashboard that consolidates key business KPIs and provides market, brand, category, regional, and time-based analysis. Interactive filters enable stakeholders to compare India and International markets and analyze performance by year, while KPI cards and visual analytics provide a quick view of revenue, profit, orders, quantity, and average order value.",
      impact: "The dashboard transforms complex sales data into an easy-to-understand decision-support tool, enabling stakeholders to quickly identify performance trends, top-performing brands, profitable categories, and regional opportunities for more informed business decisions.",
      keyMetrics: ["Revenue & Profit Margin %", "Order Volume & Quantity", "Average Order Value (AOV)", "Regional Market Share", "Brand Performance Matrix"],
      tags: ["Power BI", "DAX", "Sales Analytics", "Data Modeling", "ETL", "Power Query", "Data Validation", "Data Transformation", "KPI Analysis", "Filtering", "Data Connectivity"],
      link: "#projects"
    },
    {
      id: 2,
      title: "Customer Analytics Dashboard",
      category: "Customer & Sales Intelligence",
      image: "/Customer Dashbaord.png",
      shortDescription: "Interactive customer intelligence dashboard tracking high-value clients, salesperson performance, branch activity, and outstanding payments.",
      problem: "The business was handling hundreds of clients, thousands of orders, and a large number of invoices. With information spread across different areas, it was difficult to quickly answer simple but important questions: Who are our most valuable clients? How are orders performing? Which salespersons and branches are managing the most clients? And how much payment is still pending?",
      solution: "I created a single interactive dashboard that brings all of this information together in an easy-to-understand format. Instead of going through multiple reports, users can see the overall business situation at a glance and then explore specific clients, salespersons, branches, orders, or time periods whenever more detail is needed.",
      impact: "The dashboard helps the business understand its clients better, recognize important sales trends, identify high-value customers, and keep track of outstanding payments. It also makes it easier for management to see where the business is performing well and where follow-up or attention may be needed.",
      keyMetrics: ["High-Value Clients", "Order Performance & Status", "Salesperson & Branch Activity", "Outstanding Payments & Invoices", "Client Trend Analysis"],
      tags: ["Power BI", "Amazon Athena", "DAX Functions", "Power Query", "Data Transformation", "Data Validation", "UI/UX", "Excel", "Data Connectivity"],
      link: "#projects"
    },
    {
      id: 3,
      title: "Tahweel Marketplace Dashboard",
      category: "Marketplace & B2B Trading Analytics",
      image: "/Tahweel Dashbaord.png",
      shortDescription: "Executive marketplace summary tracking trading progress, active buyers and sellers, regional Emirates performance, and material contributions.",
      problem: "With a large number of trades, buyers, sellers, bids, and participating companies across different locations, management needed a simple way to understand overall marketplace activity and identify areas requiring attention. It was difficult to track trade progress, compare regional activity, identify active participants, and understand which material categories were contributing the most.",
      solution: "Built an interactive Tahweel Executive Summary Dashboard in Power BI that brings all key marketplace information into one clear view. The dashboard enables management to monitor overall trading activity, track trade progress, identify active buyers and sellers, analyze material categories, and compare performance across different Emirates and company types.",
      impact: "The dashboard provides management with a clearer picture of marketplace performance, helping them monitor ongoing activity, identify opportunities, and make faster, more informed business decisions with less manual effort.",
      keyMetrics: ["Trade Progress & Bid Volume", "Active Buyers & Sellers", "Emirates Regional Activity", "Material Category Breakdown", "Company Type Performance"],
      tags: ["Power BI", "DAX", "Marketplace Analytics", "B2B Trading", "PostgreSQL", "Executive Reporting", "Business Understanding", "Requirement Gathering"],
      link: "#projects"
    },
    {
      id: 4,
      title: "Student Analytics Dashboard",
      category: "Academic & Campus Intelligence",
      image: "/Student Dashbaord.png",
      shortDescription: "Higher education analytics dashboard tracking student enrollment, registered vs. booked students, campus variations, and program offerings.",
      problem: "Student records were spread across multiple campuses, programs, modules, and academic sessions, making it difficult to get a quick understanding of overall student participation and academic offerings. There was a need to easily identify enrollment levels, popular modules, campus-wise variations, and changes in programs over the years.",
      solution: "An interactive Student Analytics Dashboard brings key academic information into a structured and easy-to-navigate view. It highlights important figures such as student enrollment, registered and booked students, campuses, programs, and modules, while allowing comparisons across campuses, modules, categories, and academic years.",
      impact: "The dashboard provides a clear picture of student participation and academic patterns. It helps management recognize high-demand modules, differences between campuses, yearly changes in program offerings, and areas requiring additional academic planning, supporting more effective resource allocation and decision-making.",
      keyMetrics: ["Student Enrollment & Bookings", "Registered vs Booked Students", "Campus-wise Variation", "Module & Program Demand", "Year-over-Year Academic Trends"],
      tags: ["Power BI", "DAX", "SQL Server", "Power Query", "Academic Analytics", "Data Modeling"],
      link: "#projects"
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  const openModal = (project: ProjectItem, tab: "details" | "preview" = "details") => {
    setSelectedProject(project);
    setModalTab(tab);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-b border-[#E0E0E0] dark:border-[#1F2A2B]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-poppins font-bold text-primary-teal">
            Featured Projects
          </h2>
          <p className="text-[14px] text-[#666666] dark:text-[#A0A0A0] mt-1 font-inter">
            Interactive Business Intelligence & Analytics Dashboards
          </p>
        </div>

        {/* View All Projects Header Toggle */}
        <button 
          type="button"
          onClick={() => setShowAll(!showAll)}
          className="text-primary-teal font-medium text-[14px] flex items-center gap-1.5 hover:text-deep-teal transition-colors group w-fit cursor-pointer"
        >
          <span>{showAll ? "Show Less" : "View All Projects"}</span>
          <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${showAll ? "-rotate-90" : "group-hover:translate-x-1"}`} />
        </button>
      </div>

      {/* Project Cards Grid (3 projects per row on desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((project) => (
          <div 
            key={project.id} 
            className="bg-white dark:bg-[#0D181A] rounded-2xl border border-[#E0E0E0] dark:border-[#1F2A2B] overflow-hidden group hover:-translate-y-1.5 transition-all duration-300 hover:shadow-xl dark:hover:shadow-primary-teal/5 dark:hover:border-primary-teal/40 flex flex-col justify-between animate-fadeIn"
          >
            <div>
              {/* Thumbnail Container */}
              <div 
                onClick={() => openModal(project, "preview")}
                className="relative h-52 bg-[#F1F3F2] dark:bg-[#111A19] overflow-hidden cursor-pointer border-b border-[#E0E0E0] dark:border-[#1F2A2B] group/img"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                />
                
                {/* Overlay Category Badge */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10.5px] font-medium font-inter px-2.5 py-1 rounded-full border border-white/10">
                  {project.category}
                </div>

                {/* Hover overlay with preview prompt */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white text-sm font-medium backdrop-blur-[2px]">
                  <Maximize2 className="w-4 h-4 text-primary-teal" />
                  <span>Preview Dashboard</span>
                </div>
              </div>
              
              {/* Project Card Content */}
              <div className="p-6">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag}
                      className="text-[11px] font-medium font-inter px-2.5 py-0.5 rounded-full bg-[#E6F7F5] dark:bg-[#111A19] text-primary-teal border border-primary-teal/20"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[11px] font-medium font-inter px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 
                  onClick={() => openModal(project, "details")}
                  className="text-lg font-poppins font-bold text-[#333333] dark:text-[#EAEAEA] mb-2 group-hover:text-primary-teal transition-colors cursor-pointer"
                >
                  {project.title}
                </h3>
                
                {/* Short Clean Summary */}
                <p className="text-[13.5px] text-[#666666] dark:text-[#A0A0A0] leading-relaxed font-inter line-clamp-3">
                  {project.shortDescription}
                </p>
              </div>
            </div>
            
            {/* Card Footer Actions */}
            <div className="px-6 pb-6 pt-2 border-t border-[#F0F0F0] dark:border-[#162325] flex items-center justify-between gap-3">
              <button 
                type="button"
                onClick={() => openModal(project, "details")}
                className="flex-1 inline-flex items-center justify-center gap-1.5 bg-primary-teal/10 hover:bg-primary-teal text-primary-teal hover:text-white font-medium text-[13px] py-2 px-3 rounded-lg transition-all duration-200"
              >
                <Info className="w-3.5 h-3.5" />
                <span>Project Info</span>
              </button>

              <button 
                type="button"
                onClick={() => openModal(project, "preview")}
                className="inline-flex items-center justify-center p-2 rounded-lg border border-[#E0E0E0] dark:border-[#1F2A2B] text-[#666666] dark:text-[#A0A0A0] hover:text-primary-teal dark:hover:text-primary-teal hover:border-primary-teal dark:hover:border-primary-teal transition-colors"
                title="View Full Dashboard"
                aria-label="View Full Dashboard"
              >
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>



      {/* In-Depth Project Case Study & Preview Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-8 animate-fadeIn"
          onClick={closeModal}
        >
          <div 
            className="relative bg-white dark:bg-[#0D181A] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-[#E0E0E0] dark:border-[#1F2A2B] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E0E0E0] dark:border-[#1F2A2B] bg-[#FAFAFA] dark:bg-[#0A1315]">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-primary-teal font-inter bg-primary-teal/10 px-2.5 py-0.5 rounded-md">
                    {selectedProject.category}
                  </span>
                </div>
                <h3 className="text-xl font-poppins font-bold text-[#333333] dark:text-[#EAEAEA]">
                  {selectedProject.title}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                {/* Tab Switcher */}
                <div className="flex items-center bg-[#F1F3F2] dark:bg-[#111A19] p-1 rounded-xl border border-[#E0E0E0] dark:border-[#1F2A2B]">
                  <button
                    type="button"
                    onClick={() => setModalTab("details")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium font-inter transition-all ${
                      modalTab === "details"
                        ? "bg-white dark:bg-[#0D181A] text-primary-teal shadow-sm"
                        : "text-[#666666] dark:text-[#A0A0A0] hover:text-[#333333] dark:hover:text-white"
                    }`}
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Case Study</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalTab("preview")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium font-inter transition-all ${
                      modalTab === "preview"
                        ? "bg-white dark:bg-[#0D181A] text-primary-teal shadow-sm"
                        : "text-[#666666] dark:text-[#A0A0A0] hover:text-[#333333] dark:hover:text-white"
                    }`}
                  >
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span>Dashboard View</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={closeModal}
                  className="p-2 rounded-lg text-[#666666] dark:text-[#A0A0A0] hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary-teal transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body - Tab: Details */}
            {modalTab === "details" && (
              <div className="p-6 md:p-8 overflow-y-auto space-y-6 max-h-[calc(90vh-140px)]">
                {/* Snapshot Banner */}
                <div 
                  onClick={() => setModalTab("preview")}
                  className="relative h-44 rounded-xl overflow-hidden cursor-pointer border border-[#E0E0E0] dark:border-[#1F2A2B] group/snap bg-[#111A19]"
                >
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover object-top opacity-80 group-hover/snap:opacity-100 group-hover/snap:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4">
                    <div className="flex items-center justify-between w-full">
                      <div className="text-white text-xs font-medium flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-primary-teal" />
                        <span>Interactive Dashboard Preview</span>
                      </div>
                      <span className="text-[11px] bg-primary-teal text-white px-2.5 py-1 rounded-md font-medium flex items-center gap-1 group-hover/snap:bg-deep-teal transition-colors">
                        Expand Full View <Maximize2 className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Structured Case Study Blocks */}
                <div className="space-y-4 font-inter">
                  {/* Business Problem Card */}
                  <div className="bg-[#FFF8F7] dark:bg-[#1A1213] border border-[#FFDCD8] dark:border-[#3D1E20] rounded-xl p-5">
                    <div className="flex items-center gap-2.5 mb-2.5 text-[#D32F2F] dark:text-[#FF8A80]">
                      <div className="p-1.5 rounded-lg bg-[#FFEBEE] dark:bg-[#2C1517]">
                        <Target className="w-4 h-4" />
                      </div>
                      <h4 className="font-poppins font-bold text-[15px]">
                        The Challenge
                      </h4>
                    </div>
                    <p className="text-[14px] text-[#555555] dark:text-[#D1A5A8] leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>

                  {/* Solution & Implementation Card */}
                  <div className="bg-[#F0FAF8] dark:bg-[#0B1A18] border border-[#BDE8E1] dark:border-[#133A35] rounded-xl p-5">
                    <div className="flex items-center gap-2.5 mb-2.5 text-primary-teal">
                      <div className="p-1.5 rounded-lg bg-primary-teal/10">
                        <Lightbulb className="w-4 h-4" />
                      </div>
                      <h4 className="font-poppins font-bold text-[15px]">
                        The Approach
                      </h4>
                    </div>
                    <p className="text-[14px] text-[#444444] dark:text-[#9FD6CE] leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>

                  {/* Business Impact Card */}
                  <div className="bg-[#F4F9FF] dark:bg-[#0C1520] border border-[#CFE4FE] dark:border-[#152E4B] rounded-xl p-5">
                    <div className="flex items-center gap-2.5 mb-2.5 text-[#1E88E5] dark:text-[#64B5F6]">
                      <div className="p-1.5 rounded-lg bg-[#E3F2FD] dark:bg-[#132338]">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <h4 className="font-poppins font-bold text-[15px]">
                        The Outcome & Impact
                      </h4>
                    </div>
                    <p className="text-[14px] text-[#444444] dark:text-[#A0C4EE] leading-relaxed">
                      {selectedProject.impact}
                    </p>
                  </div>
                </div>

                {/* Key Metrics Tracked */}
                <div className="bg-white dark:bg-[#0D181A] border border-[#E0E0E0] dark:border-[#1F2A2B] rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3 text-[#333333] dark:text-[#EAEAEA]">
                    <Layers className="w-4 h-4 text-primary-teal" />
                    <h4 className="font-poppins font-bold text-[14px]">
                      Key Performance Indicators (KPIs) & Metrics
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.keyMetrics.map((metric, i) => (
                      <span 
                        key={i}
                        className="inline-flex items-center gap-1.5 text-[12px] font-medium font-inter px-3 py-1 rounded-lg bg-[#F1F3F2] dark:bg-[#111A19] text-[#333333] dark:text-[#D0D0D0] border border-[#E0E0E0] dark:border-[#1F2A2B]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary-teal" />
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-2">
                  <span className="text-xs font-semibold text-[#888888] dark:text-[#777777] uppercase tracking-wider block mb-2 font-inter">
                    Technologies & Tools Used:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-[12px] font-medium font-inter px-3 py-1 rounded-full bg-primary-teal/10 text-primary-teal border border-primary-teal/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Modal Body - Tab: Preview */}
            {modalTab === "preview" && (
              <div className="p-4 sm:p-6 bg-[#F1F3F2] dark:bg-[#070D0E] overflow-auto flex flex-col items-center justify-center max-h-[calc(90vh-140px)] min-h-[50vh]">
                <div className="relative w-full h-[65vh] min-h-[350px]">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            )}

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-[#E0E0E0] dark:border-[#1F2A2B] bg-[#FAFAFA] dark:bg-[#0A1315] flex items-center justify-between">
              <div className="text-xs text-[#888888] dark:text-[#777777] font-inter">
                {modalTab === "details" ? "Click 'Dashboard View' to see visual analytics" : "Click 'Case Study' for problem & impact breakdown"}
              </div>
              <div className="flex items-center gap-3">
                {modalTab === "details" ? (
                  <button
                    type="button"
                    onClick={() => setModalTab("preview")}
                    className="inline-flex items-center gap-1.5 bg-primary-teal hover:bg-deep-teal text-white font-medium text-xs px-4 py-2 rounded-lg transition-colors"
                  >
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span>View Dashboard</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setModalTab("details")}
                    className="inline-flex items-center gap-1.5 bg-primary-teal hover:bg-deep-teal text-white font-medium text-xs px-4 py-2 rounded-lg transition-colors"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>View Case Study</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 rounded-lg border border-[#E0E0E0] dark:border-[#1F2A2B] text-xs font-medium text-[#666666] dark:text-[#A0A0A0] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
