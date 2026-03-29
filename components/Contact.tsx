"use client";

import { useState } from "react";
import SectionWrapper from "./SectionWrapper";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-12">
        <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
          Contact
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Get In Touch
        </h2>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          Have a project idea, a question, or just want to say hi? My inbox is
          always open.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Let&apos;s connect
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I&apos;m currently open to internships, project collaborations,
              and data science opportunities. Feel free to reach out!
            </p>
          </div>

          <div className="space-y-4">
            {/* Email */}
            <a
              href="mailto:22f3002229@ds.study.iitm.ac.in"
              className="flex items-center gap-4 p-4 bg-gray-800/50 border border-gray-700/60 rounded-xl hover:border-cyan-500/50 transition-colors group"
            >
              <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Email</p>
                <p className="text-gray-200 text-sm group-hover:text-cyan-400 transition-colors">
                  22f3002229@ds.study.iitm.ac.in
                </p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/22f3002229"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-800/50 border border-gray-700/60 rounded-xl hover:border-cyan-500/50 transition-colors group"
            >
              <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-cyan-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">GitHub</p>
                <p className="text-gray-200 text-sm group-hover:text-cyan-400 transition-colors">
                  github.com/22f3002229
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/lokesh-ds"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-800/50 border border-gray-700/60 rounded-xl hover:border-cyan-500/50 transition-colors group"
            >
              <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-cyan-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">LinkedIn</p>
                <p className="text-gray-200 text-sm group-hover:text-cyan-400 transition-colors">
                  linkedin.com/in/lokesh-ds
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800/50 border border-gray-700/60 rounded-2xl p-6 space-y-4"
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
              <div className="w-14 h-14 bg-cyan-500/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h4 className="text-white font-semibold text-lg">Message sent!</h4>
              <p className="text-gray-400 text-sm">
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-2 text-cyan-400 hover:text-cyan-300 text-sm underline transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1.5"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-gray-900/60 border border-gray-700/60 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/20 transition-colors text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-gray-900/60 border border-gray-700/60 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/20 transition-colors text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hi..."
                  className="w-full px-4 py-3 bg-gray-900/60 border border-gray-700/60 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/20 transition-colors text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 text-sm"
              >
                Send Message
              </button>
            </>
          )}
        </form>
      </div>
    </SectionWrapper>
  );
}
