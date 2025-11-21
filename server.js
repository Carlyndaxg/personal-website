import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = import.meta.dirname;
const __filename = fileURLToPath(import.meta.url);

// serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/projects', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'projects.html'));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
})

// change page urls (broken)
app.get("/index.html", (req, res) => res.redirect("/"));
app.get("/projects.html", (req, res) => res.redirect("/projects"));
app.get("/about.html", (req, res) => res.redirect("/about"));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});