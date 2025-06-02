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
    name: "John Doe",
    title: "Software Engineer",
    summary: "Software engineer with full-stack experience, passionate about modern technology and high-performance solutions.",
    location: { city: "New York", country: "USA" },
    contact: {
      email: "john.doe@email.com",
      phone: "+1 555 123 4567",
      website: "https://johndoe.dev",
      linkedin: "https://www.linkedin.com/in/johndoe",
      github: "https://github.com/johndoe"
    }
  },
  skills: [
    { name: "Programming Languages", keywords: ["JavaScript", "Python", "Java"] },
    { name: "Frameworks", keywords: ["React", "Node.js", "Express"] }
  ],
  experience: [
    {
      company: "Tech Solutions Inc.",
      position: "Full-Stack Developer",
      startDate: "2021-01",
      endDate: "2024-06",
      summary: "Developed scalable web applications with modern technologies.",
      highlights: [
        "Migrated monolithic systems to microservices architecture.",
        "Enhanced application performance and scalability."
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
      description: "Interactive personal portfolio website.",
      url: "https://johndoe.dev",
      technologies: ["HTML", "CSS", "JavaScript"]
    }
  ],
  languages: [
    { language: "English", fluency: "Native" },
    { language: "Spanish", fluency: "Advanced" }
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