// Text class is imported
const Text = require('./text.js');

describe('Text', () => {
    describe('Text Render', () => {
        it('The Text class should take the input of 3 characters and a color and output the proper svg code to render it for the logo', () => {
            const text = new Text;
            text.userText = 'SFD';
            text.setColor = 'black'
            expect(text.render()).toEqual("<text x='150' y='125' font-size='60' text-anchor='middle' fill='black'>SFD</text>");
        });
    });
});