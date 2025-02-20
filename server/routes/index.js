const express = require("express");
const router = express.Router();
const config = require("../config/config");
const { handleSubmit } = require("../controllers/formController");

// Dynamisk generering af ruter baseret på config.js
Object.entries({...config.pages, ...config.forms}).forEach(([route, { controller, template }]) => {
    const ctrl = require(`../controllers/${controller}`);

    router.get(`/${route === "index" ? "" : route}`, (req, res) => {
        ctrl.renderPage(req, res, template, req.query);
    });
});

// Formular-indsendelse
router.post("/submit", handleSubmit);

module.exports = router;
