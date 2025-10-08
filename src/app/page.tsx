"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, GraduationCap, Code2, Briefcase, Languages as LanguagesIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import my_image_for_portfolio from '../../public/my_image_for_portfolio.jpg';

const Section = ({ id, title, icon: Icon, children }: { id: string; title: string; icon: any; children: React.ReactNode }) => (
  <section id={id} className="max-w-5xl mx-auto px-4 md:px-6 lg:px-0 py-10">
    <motion.h2
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-2 text-2xl md:text-3xl font-semibold mb-6"
    >
      <Icon className="w-6 h-6" /> {title}
    </motion.h2>
    {children}
  </section>
);

const projects = [
  {
    title: "Full Stack TODO Website",
    subtitle: "Personal Project (2025)",
    bullets: [
      "Designed and developed a full-stack task management web application to create, update, and organize daily tasks efficiently.",
      "Built the frontend using React.js and Next.js with a clean, responsive UI.",
      "Implemented the backend with MongoDB for persistence and API routes for seamless CRUD operations.",
      "Integrated TypeScript for improved code reliability and maintainability.",
      "Focused on performance optimization and clean architecture for scalability.",
    ],
  },
  {
    title: "eCommerce Website",
    subtitle: "Personal Project (2025)",
    bullets: [
      "Developed a responsive eCommerce website using React.js with product browsing, cart management, and simulated checkout.",
      "Designed a modern UI with reusable components and efficient state management.",
      "Integrated local storage for cart persistence and dynamic product updates.",
      "Applied HTML, CSS, and JavaScript for layout, styling, and interactivity.",
      "Focused on performance, scalability, and maintainable architecture.",
    ],
  },
];

const technicalSkills = {
  "Front-End": ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js"],
  Database: ["MongoDB"],
  "Version Control": ["Git", "GitHub"],
  "Other Tools & Concepts": ["RESTful APIs", "Responsive Design", "UI/UX Principles", "JSON", "VS Code"],
};

const softSkills = [
  "Problem Solving & Analytical Thinking",
  "Team Collaboration & Communication",
  "Continuous Learning & Adaptability",
  "Attention to Detail",
  "Time Management",
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-0 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Image
              src={my_image_for_portfolio}
              alt="Ezzaldeen Al‑Shaibani"
              className="w-32 h-32 rounded-full object-cover border-4 border-slate-200 shadow-sm"
            />
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-center md:text-left">Ezzaldeen Al‑Shaibani</h1>
              <p className="text-base text-slate-600 text-center md:text-left">Software Engineer • Istanbul, Türkiye</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3">
            <a href="mailto:ezzaldeen.alshaibani@gmail.com" className="inline-flex items-center gap-2 text-sm hover:underline"><Mail className="w-4 h-4"/> ezzaldeen.alshaibani@gmail.com</a>
            <span className="inline-flex items-center gap-2 text-sm"><Phone className="w-4 h-4"/> +90 501 357 5567</span>
            <span className="inline-flex items-center gap-2 text-sm"><MapPin className="w-4 h-4"/> Istanbul</span>
            <a href="https://github.com/Splendor-3zz" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm hover:underline"><Github className="w-4 h-4"/> GitHub</a>
            <a href="https://www.linkedin.com/in/ezzaldeen-al-shaibani-560640372" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm hover:underline"><Linkedin className="w-4 h-4"/> LinkedIn</a>
          </div>
        </div>
      </header>

      <Section id="summary" title="Professional Summary" icon={Briefcase}>
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
          <Card className="shadow-sm rounded-2xl">
            <CardContent className="p-6 text-base leading-relaxed text-slate-700">
              Motivated and detail-oriented Software Engineer with a strong foundation in web development technologies including <strong>HTML, CSS, JavaScript, TypeScript, React.js, Next.js, and MongoDB</strong>. Recently graduated and eager to contribute to real-world projects, delivering responsive, efficient, and scalable web applications. Passionate about continuous learning, clean code, and building meaningful user experiences.
            </CardContent>
          </Card>
        </motion.div>
      </Section>

      <Section id="projects" title="Projects" icon={Code2}>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: idx * 0.05 }}>
              <Card className="h-full hover:shadow-md transition-shadow rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="text-sm text-slate-500 mb-4">{p.subtitle}</p>
                  <ul className="space-y-2 list-disc pl-5 text-slate-700">
                    {p.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills" icon={Code2}>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3">Technical Skills</h3>
              <div className="space-y-4">
                {Object.entries(technicalSkills).map(([group, skills]) => (
                  <div key={group}>
                    <p className="text-sm font-medium text-slate-600 mb-1">{group}</p>
                    <div className="flex flex-wrap gap-2">
                      {(skills as string[]).map((s) => (
                        <span key={s} className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm border">{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm border">{s}</span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="education" title="Education" icon={GraduationCap}>
        <Card className="rounded-2xl">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold">Bachelor’s Degree in Software Engineering</h3>
                <p className="text-slate-600">Uskudar University — Istanbul, Türkiye</p>
              </div>
              <div className="text-sm text-slate-600">Graduated: 2025 • GPA: <span className="font-semibold">3.46 / 4.00</span></div>
            </div>
          </CardContent>
        </Card>
      </Section>

      <Section id="languages" title="Languages" icon={LanguagesIcon}>
        <Card className="rounded-2xl">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm border">Arabic — Native</span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm border">English — Professional</span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm border">Turkish — Professional</span>
            </div>
          </CardContent>
        </Card>
      </Section>

      <footer className="py-10 border-t">
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-0 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Ezzaldeen Al‑Shaibani. All rights reserved.</p>
          <div className="flex gap-2">
            <Button onClick={() => window.print()} className="rounded-2xl">Print / Save as PDF</Button>
            <a href="mailto:ezzaldeen.alshaibani@gmail.com">
              <Button variant="secondary" className="rounded-2xl">Contact Me</Button>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
