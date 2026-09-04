import { Database, FileSpreadsheet, Server, LineChart, Code2, Layers, Network, PieChart } from "lucide-react";

export default function Skills() {
  const skills = [
    { name: "SQL", icon: <Database className="w-8 h-8 text-primary-teal" /> },
    { name: "Python", icon: <Code2 className="w-8 h-8 text-primary-teal" /> },
    { name: "Power BI", icon: <PieChart className="w-8 h-8 text-primary-teal" /> },
    { name: "Microsoft Fabric", icon: <Server className="w-8 h-8 text-primary-teal" /> },
    { name: "Excel", icon: <FileSpreadsheet className="w-8 h-8 text-primary-teal" /> },
    { name: "Data Modeling", icon: <Layers className="w-8 h-8 text-primary-teal" /> },
    { name: "ETL", icon: <Network className="w-8 h-8 text-primary-teal" /> },
    { name: "Data Visualization", icon: <LineChart className="w-8 h-8 text-primary-teal" /> },
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20 border-b border-[#E0E0E0] dark:border-[#1F2A2B] scroll-mt-20">
      <h2 className="text-3xl font-poppins font-bold text-primary-teal mb-10">
        Skills & Tools
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {skills.map((skill) => (
          <div 
            key={skill.name} 
            className="bg-white dark:bg-[#0D181A] border border-[#E0E0E0] dark:border-[#1F2A2B] rounded-lg p-6 flex flex-col items-center justify-center gap-4 hover:border-primary-teal dark:hover:border-primary-teal transition-colors group cursor-default"
          >
            <div className="group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>
            <span className="text-[14px] font-medium text-[#333333] dark:text-[#EAEAEA] text-center font-inter">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
