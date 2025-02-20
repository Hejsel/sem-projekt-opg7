const { validateFeedback } = require("../security/validate");
const { sanitizeInput } = require("../security/sanitize");
const { hashInput } = require("../security/hash");
const { saveFeedback } = require("../models/dbModels");

module.exports.handleSubmit = async (req, res) => {
    const feedback = req.body.feedback;

    // 1️⃣ **Valider input**
    const validation = validateFeedback(feedback);
    if (validation !== true) {
        return res.status(400).json({ error: validation });
    }    

    // 2️⃣ **Sanitér og hash input**
    const hashetFeedback = await hashInput(sanitizeInput(feedback));

    // 3️⃣ **Gem i databasen**
    saveFeedback(hashetFeedback);

    res.redirect('/');
};
