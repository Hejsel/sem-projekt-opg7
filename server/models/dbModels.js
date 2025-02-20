// server/models/dbModels.js
const Database = require('better-sqlite3');
const db = new Database('./database.db');

// Opretter feedback-tabellen (hvis den ikke allerede findes)
db.prepare(`CREATE TABLE IF NOT EXISTS feedback (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    feedback TEXT
)`).run();

// Gemmer feedback i databasen
exports.saveFeedback = (feedback) => {
    try {
        db.prepare(`INSERT INTO feedback (feedback) VALUES (?)`).run(feedback);
        console.log("Feedback gemt:", feedback);
    } catch (error) {
        console.error("Fejl ved gemning af feedback:", error);
    }
};

// Når du bruger ❓ i Prepared Statements, fungerer det som en placeholder for data, der bliver indsat sikkert i SQL-sætningen.
// Det betyder, at du adskiller data fra SQL-koden, hvilket forhindrer SQL Injection.