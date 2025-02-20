module.exports = {
  pages: {
    index: { controller: "pageController", template: "index" },
    about: { controller: "pageController", template: "about" },
    test: { controller: "pageController", template: "test" }
  },
  forms: {
    feedback: { controller: "formController", template: "feedbackForm" }
  }
};
