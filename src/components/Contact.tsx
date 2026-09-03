import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#E6F7F5] dark:bg-[#111A19]">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl font-poppins font-bold text-primary-teal mb-4">
                Let's Work Together
              </h2>
              <p className="text-[16px] text-[#666666] dark:text-[#A0A0A0] leading-relaxed font-inter max-w-md">
                I'm open to new opportunities and exciting projects. Let's connect and build something amazing!
              </p>
            </div>

            <div className="space-y-4">
              <a href="mailto:ahireharshada495@gmail.com" className="flex items-center gap-4 text-[#333333] dark:text-[#EAEAEA] hover:text-primary-teal dark:hover:text-primary-teal transition-colors group">
                <div className="bg-primary-teal/10 p-3 rounded-full group-hover:bg-primary-teal/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary-teal" />
                </div>
                <span className="font-inter text-[14px]">ahireharshada495@gmail.com</span>
              </a>

              <div className="flex items-center gap-4 text-[#333333] dark:text-[#EAEAEA]">
                <div className="bg-primary-teal/10 p-3 rounded-full">
                  <Phone className="w-5 h-5 text-primary-teal" />
                </div>
                <span className="font-inter text-[14px]">+91 9595059653</span>
              </div>

              <div className="flex items-center gap-4 text-[#333333] dark:text-[#EAEAEA]">
                <div className="bg-primary-teal/10 p-3 rounded-full">
                  <MapPin className="w-5 h-5 text-primary-teal" />
                </div>
                <span className="font-inter text-[14px]">Pune, Maharashtra, India</span>
              </div>

              <a href="https://www.linkedin.com/in/harshada-ahire/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[#333333] dark:text-[#EAEAEA] hover:text-primary-teal dark:hover:text-primary-teal transition-colors group">
                <div className="bg-primary-teal/10 p-3 rounded-full group-hover:bg-primary-teal/20 transition-colors">
                  <FaLinkedinIn className="w-5 h-5 text-primary-teal" />
                </div>
                <span className="font-inter text-[14px]">linkedin.com/in/harshada-ahire</span>
              </a>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="w-full md:w-1/2">
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white dark:bg-[#0D181A] border border-[#E0E0E0] dark:border-[#1F2A2B] rounded-md px-4 py-3 text-[14px] text-[#333333] dark:text-[#EAEAEA] focus:outline-none focus:border-primary-teal dark:focus:border-primary-teal transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white dark:bg-[#0D181A] border border-[#E0E0E0] dark:border-[#1F2A2B] rounded-md px-4 py-3 text-[14px] text-[#333333] dark:text-[#EAEAEA] focus:outline-none focus:border-primary-teal dark:focus:border-primary-teal transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full bg-white dark:bg-[#0D181A] border border-[#E0E0E0] dark:border-[#1F2A2B] rounded-md px-4 py-3 text-[14px] text-[#333333] dark:text-[#EAEAEA] focus:outline-none focus:border-primary-teal dark:focus:border-primary-teal transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full bg-primary-teal hover:bg-deep-teal text-white font-medium text-[14px] px-6 py-3 rounded-md transition-colors flex items-center justify-between"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
