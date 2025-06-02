# Fullstack CV - Fernando Martinez Marco

A fullstack project built with Node.js (Express) to serve:  
- A RESTful API exposing CV data.  
- A minimalist, modern frontend using HTML5 and pure CSS3.

## Deployment on Railway
1. Push this project to GitHub.  
2. Connect your GitHub repository on Railway and select "Deploy from GitHub".  
3. Railway will automatically detect `index.js` and deploy the application.

## Local Setup
```
npm install
npm start
```
Visit http://localhost:3000 to view the frontend.

## API Endpoints
- `/api/cv` – Complete CV data  
- `/api/cv/experience` – Experience section  
- `/api/cv/skills` – Skills section  
- `/api/cv/projects` – Projects section