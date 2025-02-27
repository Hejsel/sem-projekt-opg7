const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/index');

app.set('view engine', 'ejs'); // Angiver EJS som template-motor
app.set('views', path.join(__dirname, 'views', 'pages')); // Sti til views/pages

// Middleware til parsing af POST data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Brug ruterne fra routes-mappen
app.use('/', routes); 

const port = 3000, IP = 'localhost';
app.listen(port, IP, () => {
    console.log(`Serveren kører på http://${IP}:${port}`);
});
