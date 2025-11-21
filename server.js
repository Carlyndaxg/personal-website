import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = import.meta.dirname;
const __filename = fileURLToPath(import.meta.url);

// serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// change page urls

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/projects', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'projects.html'));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});