// homeController.js
"use strict";

/**
 * Listing 12.5 (p. 178)
 * 홈 컨트롤러로의 라우팅
 */
exports.showindex = (req, res) => {
    res.render("index");
};
exports.showtransportation = (req, res) => {
    res.render("transportation");
}
exports.showSignUp = (req, res) => {
    res.render("contact");
};
exports.postedContactForm = (req, res) => {
    res.render("thanks");
};


