"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all fields before sending.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      // Fallback: If network fails, prompt direct email link
      setStatus("error");
      setErrorMessage("Something went wrong. You can also email me directly at ahireharshada495@gmail.com.");
    }
  };

  return (
    <section id="contact" className="bg-[#E6F7F5] dark:bg-[#111A19] transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl font-poppins font-bold text-primary-teal mb-4">
                Let's Work Together
              </h2>
              <p className="text-[16px] text-[#666666] dark:text-[#A0A0A0] leading-relaxed font-inter max-w-md">
                I'm open to new opportunities, data consulting, and exciting analytics projects. Let's connect and turn your data into actionable insights!
              </p>
            </div>

            <div className="space-y-4 font-inter">
              <a
                href="mailto:ahireharshada495@gmail.com"
                className="flex items-center gap-4 text-[#333333] dark:text-[#EAEAEA] hover:text-primary-teal dark:hover:text-primary-teal transition-colors group"
              >
                <div className="bg-primary-teal/10 p-3 rounded-full group-hover:bg-primary-teal/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary-teal" />
                </div>
                <span className="text-[14px]">ahireharshada495@gmail.com</span>
              </a>

              <div className="flex items-center gap-4 text-[#333333] dark:text-[#EAEAEA]">
                <div className="bg-primary-teal/10 p-3 rounded-full">
                  <Phone className="w-5 h-5 text-primary-teal" />
                </div>
                <span className="text-[14px]">+91 9595059653</span>
              </div>

              <div className="flex items-center gap-4 text-[#333333] dark:text-[#EAEAEA]">
                <div className="bg-primary-teal/10 p-3 rounded-full">
                  <MapPin className="w-5 h-5 text-primary-teal" />
                </div>
                <span className="text-[14px]">Pune, Maharashtra, India</span>
              </div>

              <a
                href="https://www.linkedin.com/in/harshada-ahire/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[#333333] dark:text-[#EAEAEA] hover:text-primary-teal dark:hover:text-primary-teal transition-colors group"
              >
                <div className="bg-primary-teal/10 p-3 rounded-full group-hover:bg-primary-teal/20 transition-colors">
                  <FaLinkedinIn className="w-5 h-5 text-primary-teal" />
                </div>
                <span className="text-[14px]">linkedin.com/in/harshada-ahire</span>
              </a>
            </div>
          </div>

          {/* Right Content - Interactive Form */}
          <div className="w-full md:w-1/2">
            <div className="bg-white dark:bg-[#0D181A] border border-[#E0E0E0] dark:border-[#1F2A2B] rounded-2xl p-6 sm:p-8 shadow-sm">
              {status === "success" ? (
                <div className="text-center py-8 space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 bg-primary-teal/10 text-primary-teal rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-primary-teal" />
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-[#333333] dark:text-[#EAEAEA]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-[14px] text-[#666666] dark:text-[#A0A0A0] font-inter max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out! I have received your message and will get back to you as soon as possible.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-4 inline-flex items-center gap-2 bg-primary-teal hover:bg-deep-teal text-white font-medium text-[14px] px-6 py-2.5 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Send Another Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === "error" && (
                    <div className="flex items-start gap-2.5 p-3.5 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 rounded-lg text-red-700 dark:text-red-300 text-[13px] font-inter animate-fadeIn">
                      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-[#555555] dark:text-[#A0A0A0] uppercase tracking-wider mb-1.5 font-inter">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Harshada Ahire"
                      disabled={status === "loading"}
                      className="w-full bg-[#FBFBFB] dark:bg-[#111A19] border border-[#E0E0E0] dark:border-[#1F2A2B] rounded-lg px-4 py-3 text-[14px] text-[#333333] dark:text-[#EAEAEA] placeholder:text-[#999999] focus:outline-none focus:border-primary-teal dark:focus:border-primary-teal transition-colors font-inter disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-[#555555] dark:text-[#A0A0A0] uppercase tracking-wider mb-1.5 font-inter">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. harsahada@example.com"
                      disabled={status === "loading"}
                      className="w-full bg-[#FBFBFB] dark:bg-[#111A19] border border-[#E0E0E0] dark:border-[#1F2A2B] rounded-lg px-4 py-3 text-[14px] text-[#333333] dark:text-[#EAEAEA] placeholder:text-[#999999] focus:outline-none focus:border-primary-teal dark:focus:border-primary-teal transition-colors font-inter disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-[#555555] dark:text-[#A0A0A0] uppercase tracking-wider mb-1.5 font-inter">
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      rows={4}
                      disabled={status === "loading"}
                      className="w-full bg-[#FBFBFB] dark:bg-[#111A19] border border-[#E0E0E0] dark:border-[#1F2A2B] rounded-lg px-4 py-3 text-[14px] text-[#333333] dark:text-[#EAEAEA] placeholder:text-[#999999] focus:outline-none focus:border-primary-teal dark:focus:border-primary-teal transition-colors resize-none font-inter disabled:opacity-50"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-primary-teal hover:bg-deep-teal disabled:opacity-70 text-white font-medium text-[14px] px-6 py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md hover:shadow-primary-teal/20"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
