// Validering af feedback input
exports.validateFeedback = (feedback) => {
    const trimmedFeedback = feedback.trim();
    return trimmedFeedback.length >= 5 ? true : "Feedback skal være mindst 5 tegn.";
};
