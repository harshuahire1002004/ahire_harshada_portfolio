import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20 border-b border-[#E0E0E0] dark:border-[#1F2A2B] scroll-mt-20">
      <div className="flex flex-col md:flex-row items-center gap-16 w-full">
        {/* Left Content - Image */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-[#1F2A2B] bg-[#E6F7F5] dark:bg-[#111A19]">
            <Image
              src="/harshada-photo.png"
              alt="Harshada Ahire Profile Photo"
              fill
              sizes="(max-width: 768px) 256px, 320px"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-2/3 space-y-6">
          <h2 className="text-3xl font-poppins font-bold text-primary-teal mb-4">
            About Me
          </h2>

          <div className="space-y-4 text-[16px] text-[#666666] dark:text-[#A0A0A0] leading-relaxed font-inter">
            <p>
              I'm a Data Analyst with 1 year of hands-on experience in analyzing data, developing interactive dashboards, building data transformation workflows, and generating actionable insights to support business decision-making.
            </p>
            <p>
              My work involves understanding business requirements, identifying trends and patterns in data, developing interactive Power BI dashboards, and automating reporting processes to make data more accessible and useful for business teams. I also have experience working with ETL pipelines, relational databases, batch processing, and cloud-based analytics environments.
              <br /><br />
              <b>My Approach to Data</b><br />
              Discover → Clean → Transform → Model → Analyze → Visualize → Improve
              <br /><br />
              I believe that the real value of data is not in the amount of information we collect, but in how effectively we turn that information into action.
            </p>
            <p>
              I enjoy solving problems, automating processes, and turning complex data into clear stories that help businesses grow. I am continuously expanding my knowledge in Microsoft Fabric, Azure data technologies, modern data engineering practices, and AI-assisted development.
            </p>
          </div>

          <div className="pt-4">
            <a
              href="#experience"
              className="inline-block border border-primary-teal text-primary-teal hover:bg-primary-teal/10 font-medium text-[14px] px-8 py-3 rounded-md transition-colors"
            >
              More About Me
            </a>
          </div>
        </div>
      </div>
    </section >
  );
}
