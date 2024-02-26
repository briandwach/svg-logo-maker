const inquirer = require('inquirer');
const Text = require('./lib/text.js');
const shapesArray = require('./lib/shapes.js');
const Circle = require('./lib/shapes.js');
const Triangle = require('./lib/shapes.js');
const Square = require('./lib/shapes.js');
const generateLogo = require('./lib/write.js');

// Each prompt is an array fed into Inquirer to be prompt object members.
// Index 0: type, Index 1: name, Index 2: message, 
// Index 3: choices, Index 4: loop, Index 5: default
const prompts = [
    ['input', 'text', 'Enter logo text (maximum of 3 characters):'],
    ['input', 'textColor', 'Enter color for text (ex. purple, or enter a hexadecimal number):'],
    ['list', 'shape', 'Choose a shape:', shapesArray, false],
    ['input', 'shapeColor', 'Enter color for shape (ex. red, or enter a hexadecimal number):'],
];

async function startPromptsAsync(promptsArray) {
    var responses = {};

    for (var p = 0; p < promptsArray.length; p++) {
        const response = await promptForUserInput(promptsArray[p]);
        responses[Object.keys(response)[0]] = Object.values(response)[0];
    }
    console.log(responses);

    //compileRender(responses);
};

// Inquirer function for collecting user input: iterates through array to render questions
function promptForUserInput(currentPrompt) {
    return inquirer.prompt(currentPrompt);
};


function compileRender(responses) {
    console.log('We got here');
    //const shape = new responses.shape(responses.shapeColor);
    //switch (responses.shape) {
    //    case 'Circle':
    //        
    //        break;
    //;
    //case 'Square': 
    //const shape = new Square(response.shapeColor);
    //break;
    //case 'Triangle':
    //    const shape = new response.shapeColor
    //}
    
    const text = new Text(responses.text, responses.textColor);

    generateLogo(shape.render(), text.render());
}


function init() {
    const promptsArray = [];
    for (prompt of prompts) {
        const [type, name, message, choices, loop] = prompt;
        promptsArray.push({ type: type, name: name, message: message, choices: choices, loop: loop });
    };
    startPromptsAsync(promptsArray);
};

// Calls initiliazation of application
init();