import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, this is Fernando Martinez Marco's CV API!");
});

app.get("/api/cv", (req, res) => {
  res.json({
    name: "Fernando Martinez Marco",
    profession: "Fullstack Developer",
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "API design"],
    experience: [
      { company: "Tech Company A", role: "Backend Engineer", duration: "2 years" },
      { company: "Tech Company B", role: "Frontend Developer", duration: "1 year" }
    ]
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
