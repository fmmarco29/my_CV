import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Datos del CV
const cv = {
  basics: {
    name: "Juan Pérez",
    title: "Ingeniero Informático",
    summary: "Ingeniero informático con experiencia en desarrollo full-stack, apasionado por la innovación y la eficiencia tecnológica.",
    location: { city: "Madrid", country: "España" },
    contact: {
      email: "juan.perez@email.com",
      phone: "+34 600 123 456",
      website: "https://juanperez.dev",
      linkedin: "https://www.linkedin.com/in/juanperez",
      github: "https://github.com/juanperez"
    }
  },
  skills: [
    { name: "Lenguajes de programación", keywords: ["JavaScript", "Python", "Java"] },
    { name: "Frameworks", keywords: ["React", "Node.js", "Express"] }
  ],
  experience: [
    {
      company: "Tech Solutions",
      position: "Desarrollador Full-Stack",
      startDate: "2021-01",
      endDate: "2024-06",
      summary: "Desarrollo de aplicaciones web escalables con tecnologías modernas.",
      highlights: [
        "Migración de sistemas monolíticos a microservicios.",
        "Optimización del rendimiento y escalabilidad de aplicaciones."
      ]
    }
  ],
  education: [
    {
      institution: "Universidad de Tecnología",
      degree: "Grado en Ingeniería Informática",
      startDate: "2015-09",
      endDate: "2019-06"
    }
  ],
  projects: [
    {
      name: "Mi Portafolio",
      description: "Página web personal con portafolio interactivo.",
      url: "https://juanperez.dev",
      technologies: ["HTML", "CSS", "JavaScript"]
    }
  ],
  languages: [
    { language: "Español", fluency: "Nativo" },
    { language: "Inglés", fluency: "Avanzado" }
  ]
};

// Rutas API
app.get("/api/cv", (req, res) => res.json(cv));
app.get("/api/cv/experience", (req, res) => res.json(cv.experience));
app.get("/api/cv/skills", (req, res) => res.json(cv.skills));
app.get("/api/cv/projects", (req, res) => res.json(cv.projects));

// Servir Frontend
app.use(express.static(path.join(__dirname, "public")));

// Arranque del servidor
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));