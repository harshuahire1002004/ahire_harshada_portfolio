import Link from "next/link";
import { ArrowRight, BarChart2, PieChart, LineChart } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Sales Performance Dashboard",
      icon: <BarChart2 className="w-8 h-8 text-white" />,
      description: "Interactive dashboard to track sales KPIs, revenue trends and regional performance.",
      link: "#"
    },
    {
      id: 2,
      title: "Customer Analytics Dashboard",
      icon: <PieChart className="w-8 h-8 text-white" />,
      description: "Analyzed customer behavior and segmented customers to improve retention and targeting.",
      link: "#"
    },
    {
      id: 3,
      title: "HR Analytics Dashboard",
      icon: <LineChart className="w-8 h-8 text-white" />,
      description: "Workforce analysis dashboard to monitor attrition, performance and employee satisfaction.",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-b border-[#E0E0E0] dark:border-[#1F2A2B]">
      <div className="flex justify-between items-end mb-10">
        <h2 className="text-3xl font-poppins font-bold text-primary-teal">
          Featured Projects
        </h2>
        <Link href="#projects" className="text-primary-teal font-medium text-[14px] flex items-center gap-1 hover:text-deep-teal transition-colors">
          View All Projects <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-white dark:bg-[#0D181A] rounded-xl border border-[#E0E0E0] dark:border-[#1F2A2B] overflow-hidden group hover:-translate-y-1 transition-transform duration-300 hover:shadow-lg dark:hover:shadow-none dark:hover:border-primary-teal/50"
          >
            {/* Project Image Placeholder */}
            <div className="h-48 bg-[#F1F3F2] dark:bg-[#111A19] flex items-center justify-center p-6 border-b border-[#E0E0E0] dark:border-[#1F2A2B]">
              <div className="w-16 h-16 rounded-full bg-primary-teal flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                {project.icon}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-poppins font-bold text-[#333333] dark:text-[#EAEAEA] mb-2 group-hover:text-primary-teal transition-colors">
                {project.title}
              </h3>
              <p className="text-[14px] text-[#666666] dark:text-[#A0A0A0] leading-relaxed font-inter mb-6 min-h-[60px]">
                {project.description}
              </p>
              
              <Link 
                href={project.link}
                className="inline-flex items-center gap-1 text-primary-teal font-medium text-[14px] hover:text-deep-teal transition-colors group/link"
              >
                View Project <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
