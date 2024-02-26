const inquirer = require('inquirer');
const Text = require('./lib/text.js');
const shapes = require('./lib/shapes.js');
const generateLogo = require('./lib/write.js');

// Each prompt is an array fed into Inquirer to be prompt object members.
// Index 0: type, Index 1: name, Index 2: message, 
// Index 3: choices, Index 4: loop, Index 5: default
const prompts = [
    ['input', 'text', 'Enter logo text (maximum of 3 characters):'],
    ['input', 'textColor', 'Enter color for text (ex. purple, or enter a hexadecimal number):'],
    ['list', 'shape', 'Choose a shape:', shapes.shapesArray, false],
    ['input', 'shapeColor', 'Enter color for shape (ex. red, or enter a hexadecimal number):'],
];

// Begins asynchronous iterations of Inquirer prompts for the user
async function startPromptsAsync(promptsArray) {
    var responses = {};

    for (var p = 0; p < promptsArray.length; p++) {
        const response = await promptForUserInput(promptsArray[p]);
        responses[Object.keys(response)[0]] = Object.values(response)[0];
    }
    // Render user input object to the terminal
    console.log(responses);

    compileRender(responses);
};

// Inquirer function for collecting user input
function promptForUserInput(currentPrompt) {
    return inquirer.prompt(currentPrompt);
};

// Utilizes imported modules to compile strings and calls for logo generation
function compileRender(responses) {

    switch (responses.shape) {
        case 'Circle':
            var shape = new shapes.Circle(responses.shapeColor);
            break;
        case 'Triangle':
            var shape = new shapes.Triangle(responses.shapeColor);
            break;
        case 'Square':
            var shape = new shapes.Square(responses.shapeColor);
            break;
    }

    const text = new Text(responses.text, responses.textColor);

    generateLogo(shape.render(), text.render());
}

// Creates a final array of user prompt questions and calls for intitial prompt
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