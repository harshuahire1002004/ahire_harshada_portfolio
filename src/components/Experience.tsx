export default function Experience() {
  const experiences = [
    {
      role: "Data Analyst",
      company: "Assimilate Technologies Pvt Ltd.",
      date: "2026 - Present",
      description: [
        "Created business intelligence solutions using Power BI, DAX, and SQL to monitor KPIs and improve operational performance.",
        "Spearheaded the development of multiple interactive Power BI dashboards, reducing manual reporting hours by 20%.",
        "Engineered robust ETL pipelines using SQL and Power Query to process and clean large datasets.",
        "Automated reporting processes and optimized dashboard performance through efficient data modeling and transformation techniques.",
        "Collaborated with cross-functional teams to translate business requirements into technical data models.",
        "Performed ETL processes including data extraction, transformation, validation, and loading using SQL and Python to prepare high-quality datasets for reporting."
      ],
    },
    {
      role: "Data Analytics Intern",
      company: "Assimilate Technologies Pvt Ltd.",
      date: "Feb 2026 - Jun 2026",
      description: [
        "Assisted in data cleaning and validation for enterprise data warehouses.",
        "Created baseline visualizations and reports for weekly team syncs.",
        "Built interactive Power BI dashboards to visualize business insights and KPIs.",
        "Created reusable SQL scripts and documented ETL workflows to improve maintainability and collaboration.",
        "Documented data processes and maintained CI/CD pipelines for deployment.",
      ],
    },
  ];

  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-20 border-b border-[#E0E0E0] dark:border-[#1F2A2B]">
      <h2 className="text-3xl font-poppins font-bold text-primary-teal mb-10">
        Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="bg-white dark:bg-[#0D181A] border border-[#E0E0E0] dark:border-[#1F2A2B] rounded-xl p-8 hover:border-primary-teal dark:hover:border-primary-teal transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <div>
                <h3 className="text-xl font-poppins font-bold text-[#333333] dark:text-[#EAEAEA]">
                  {exp.role}
                </h3>
                <h4 className="text-[16px] font-inter font-medium text-primary-teal">
                  {exp.company}
                </h4>
              </div>
              <div className="inline-block bg-[#F1F3F2] dark:bg-[#111A19] text-[#666666] dark:text-[#A0A0A0] text-sm px-4 py-1.5 rounded-full font-inter font-medium border border-[#E0E0E0] dark:border-[#1F2A2B]">
                {exp.date}
              </div>
            </div>

            <ul className="space-y-3 mt-6">
              {exp.description.map((desc, j) => (
                <li key={j} className="text-[#666666] dark:text-[#A0A0A0] flex items-start gap-3 text-[14px] font-inter">
                  <span className="text-primary-teal mt-1 flex-shrink-0 text-[10px]">●</span>
                  <span className="leading-relaxed">{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
