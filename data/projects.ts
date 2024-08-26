// data/projects.ts
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaLinkedin, FaSyncAlt } from 'react-icons/fa';
import { FaRobot } from 'react-icons/fa6';
import { SiTypescript, SiMongodb, SiTensorflow, SiPostgresql } from 'react-icons/si';

export interface Skill {
  name: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  technologies: string[];
  githubLink: string;
  skills: Skill[];
}

export const projects: Project[] = [
  {
    id: 1,
  title: "Next.js Portfolio Website",
  description: "A single-page application portfolio website built using Next.js, TailwindCSS, and shadcn/ui components.",
  icon: FaReact,
  technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "shadcn/ui"],
  githubLink: "https://github.com/Yashground/portfolio-website",
  skills: [
    {name: "Frontend Development"},
    { name: "UI/UX Design"},
    { name: "Responsive Web Design"},
    { name: "Performance Optimization"}
  ]
  },
  {
    id: 2,
  title: "German-Tutor-Pro",
  description: "A language teaching assistant that is capable of having conversations with user and teaches user in a scenario based approach ",
  icon: FaRobot,
  technologies: ["Next.js","Python", "Open AI API", "FAST API", "httpx", "asyncio"],
  githubLink: "https://github.com/yashground/german-tutor-pro",
  skills: [
    { name: "API Integration"},
    { name: "Asynchronous Programming"},
    { name: "Data Synchronization with KV redis Database"},
    { name: "Python Development"},
    { name: "ChatBot responsive"}
  ]
  },
  {
    id: 2,
  title: "LinkedIn Job Search Automation",
  description: "A comprehensive project that automates LinkedIn job searches, scrapes job details, analyzes job descriptions using GPT, and generates tailored resumes and cover letters.",
  icon: FaLinkedin,
  technologies: ["Python", "Selenium", "BeautifulSoup", "pandas", "GPT", "DocX"],
  githubLink: "https://github.com/Yashground/automatedjobapply",
  skills: [
    { name: "Web Scraping"},
    { name: "Data Analysis"},
    { name: "Automation"},
    { name: "Machine Learning"},
    { name: "Document Generation"}
  ]
  },
  
];
