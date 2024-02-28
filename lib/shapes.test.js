// Shape classes are imported.
const shapes = require('./shapes.js');

describe('Shapes', () => {
    describe('Circle', () => {
        it('The circle class should take the color green and when its render method is called, output the proper svg code to render a green circle', () => {
            const shape = new shapes.Circle;
            shape.setColor = 'green';
            expect(shape.render()).toEqual("<circle cx='150' cy='100' r='80' fill='green'/>");
        });
    });
});

describe('Shapes', () => {
    describe('Triangle', () => {
        it('The triangle class should take the color blue and when its render method is called, output the proper svg code to render a blue triangle', () => {
            const shape = new shapes.Triangle;
            shape.setColor = 'blue';
            expect(shape.render()).toEqual("<polygon points='150 20, 70 180, 230 180' fill='blue'/>");
        });
    });
});

describe('Shapes', () => {
    describe('Square', () => {
        it('The square class should take the color red and when its render method is called, output the proper svg code to render a red square', () => {
            const shape = new shapes.Square;
            shape.setColor = 'red';
            expect(shape.render()).toEqual("<rect x='70' y='20' width='160' height='160' fill='red'/>");
        });
    });
});