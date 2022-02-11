import express from "express";

const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile("/Users/kevin/Workspace/my-first-website/src/accueil.html"); //sendFile : chemin complet <<absolu!!!>
});

app.get("/experiences", (request, response) => {
  response.sendFile("/Users/kevin/Workspace/my-first-website/src/experiences.html");
});

app.get("/competences", (request, response) => {
  response.sendFile("/Users/kevin/Workspace/my-first-website/src/competences.html");
});

app.get("/series", (request, response) => {
  response.send("My Trips");
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
