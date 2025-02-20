// server/controllers/pageController.js
exports.renderPage = (req, res, template, query, originalUrl) => {
    res.render(template, { query, originalUrl });
};
