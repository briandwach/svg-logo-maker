const inquirer = require('inquirer');
const shapesArray = require('./lib/shapes.js');
// const fs = require('fs');
// const generateMarkdownAsync = require('./utils/generateMarkdown.js');

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
};

// Inquirer function for collecting user input: iterates through array to render questions
function promptForUserInput(currentPrompt) {
    return inquirer.prompt(currentPrompt);
};

// Calls function from generateMarkdown.js to generate markdown
// async function sendToMarkdownFile(readmeContent, licenseData) {
//    if (readmeContent.license !== 'None') {
//        var licenseKey = getLicenseKey(readmeContent.license, licenseData);
//    } else {
//        var licenseKey = 'None';
//    }
//   let markdownContent = await generateMarkdownAsync(readmeContent, licenseKey);
//    writeToFile(markdownContent);
//}

// Writes final README file to the generated directory
// function writeToFile(markdownContent) {
//     fs.writeFile('./generated/README.md', markdownContent, (err) =>
//        err ? console.error(err) : console.log('README successfully written to /generated directory!'))
//};

// Calls the function to initiate Inquirer and prompt for user input
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