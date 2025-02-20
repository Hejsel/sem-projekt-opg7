// Saniterer input for at beskytte mod XSS og SQL Injection
exports.sanitizeInput = (input) => {
    if (typeof input !== "string") return input;

    return input
        .replace(/[<>'"]/g, (match) => {
            switch (match) {
                case "<": return "&lt;";
                case ">": return "&gt;";
                case "'": return "&#39;";
                case '"': return "&quot;";
            }
        })
        .trim(); // Fjerner unødvendige mellemrum
};
