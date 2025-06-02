import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// CV Data
const cv = {
  basics: {
    name: "Fernando Martinez Marco",
    title: "Software Engineer",
    summary: "Software engineer with full-stack expertise, passionate about modern technologies and delivering high-quality, scalable solutions.",
    location: { city: "New York", country: "USA" },
    contact: {
      email: "fernando.martinez@email.com",
      phone: "+1 555 123 4567",
      website: "https://fernandomartinez.dev",
      linkedin: "https://www.linkedin.com/in/fernandomartinezmarco",
      github: "https://github.com/fernandomartinezmarco"
    }
  },
  skills: [
    { name: "Programming Languages", keywords: ["JavaScript", "Python", "Java"] },
    { name: "Frameworks", keywords: ["React", "Node.js", "Express"] }
  ],
  experience: [
    {
      company: "Innovative Solutions Ltd.",
      position: "Full-Stack Developer",
      startDate: "2021-01",
      endDate: "2024-06",
      summary: "Developed modern, scalable web applications and migrated legacy systems to microservices.",
      highlights: [
        "Improved application performance and scalability.",
        "Led a team of developers for a major client project."
      ]
    }
  ],
  education: [
    {
      institution: "Technical University",
      degree: "Bachelor's in Computer Science",
      startDate: "2015-09",
      endDate: "2019-06"
    }
  ],
  projects: [
    {
      name: "Personal Portfolio",
      description: "A personal portfolio website showcasing my work and skills.",
      url: "https://fernandomartinez.dev",
      technologies: ["HTML", "CSS", "JavaScript"]
    }
  ],
  languages: [
    { language: "English", fluency: "Fluent" },
    { language: "Spanish", fluency: "Native" }
  ]
};

// API Routes
app.get("/api/cv", (req, res) => res.json(cv));
app.get("/api/cv/experience", (req, res) => res.json(cv.experience));
app.get("/api/cv/skills", (req, res) => res.json(cv.skills));
app.get("/api/cv/projects", (req, res) => res.json(cv.projects));

// Serve Frontend
app.use(express.static(path.join(__dirname, "public")));

// Start Server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));