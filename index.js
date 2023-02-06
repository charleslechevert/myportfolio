const express = require('express');
const app = express();

// Setup le view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Sert statiquement le dossier public
app.use(express.static("public"));

app.get('/projects', (req, res) => {
    res.sendFile(__dirname + '/public/projects.html');
});

app.get('/', (req, res) => {
    res.render(__dirname + '/public/index.html');
});

app.listen(3009, () => {
  console.log('Server started on port 3009');
});