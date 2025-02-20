const express = require('express');
const app = express();
const path = require('path');
const indexRoutes = require('./routes/index');

app.set('view engine', 'ejs'); // Angiver EJS som template-motor
app.set('views', path.join(__dirname, 'views')); // Sti til views-mappen

app.use(express.static(path.join(__dirname, 'public'))); // Håndterer statiske filer

// Brug ruterne fra routes-mappen
app.use('/', indexRoutes); 

const port = 3000, IP = 'localhost';
app.listen(port, IP, () => {
    console.log(`Serveren kører på http://${IP}:${port}`);
});
