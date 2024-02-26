const fs = require('fs');

function generateLogo(shape, text) {
    const svgContent = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
${shape}

${text}

</svg>`;

    writeLogo(svgContent);
};

function writeLogo(svgContent) {
    fs.writeFile('./generated/logo.svg', svgContent, (err) =>
        err ? console.error(err) : console.log('Generated logo.svg'));
};

module.exports = generateLogo;