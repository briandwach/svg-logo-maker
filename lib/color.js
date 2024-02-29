const validateHTMLColorName = require("validate-color").validateHTMLColorName;
const validateHTMLColorHex = require("validate-color").validateHTMLColorHex;

// Conditional to validate color input as either a keyword or hexidecimal value
function validateColor(color) {
    return validateHTMLColorName(color) || validateHTMLColorHex(color) ? true : 'Not a valid color, please try again';
}

module.exports = validateColor;