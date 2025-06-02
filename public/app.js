document.addEventListener("DOMContentLoaded", () => {
  fetch("/api/cv")
    .then((res) => res.json())
    .then((cv) => {
      document.getElementById("name").textContent = cv.basics.name;
      document.getElementById("title").textContent = cv.basics.title;
      document.getElementById("summary").textContent = cv.basics.summary;

      const expList = document.querySelector("#experience ul");
      cv.experience.forEach((job) => {
        const li = document.createElement("li");
        li.textContent = `${job.position} en ${job.company} (${job.startDate} - ${job.endDate})`;
        expList.appendChild(li);
      });

      const skillsList = document.querySelector("#skills ul");
      cv.skills.forEach((skill) => {
        const li = document.createElement("li");
        li.textContent = `${skill.name}: ${skill.keywords.join(", ")}`;
        skillsList.appendChild(li);
      });

      const projectsList = document.querySelector("#projects ul");
      cv.projects.forEach((project) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${project.name}:</strong> ${project.description} (<a href="${project.url}" target="_blank">Ver proyecto</a>)`;
        projectsList.appendChild(li);
      });
    })
    .catch((err) => console.error("Error al cargar el CV:", err));
});