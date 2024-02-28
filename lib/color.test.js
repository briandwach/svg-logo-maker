// validateColor function is imported
const validateColor = require('./color.js');

describe('Color', () => {
    describe('Validate Color Keyword', () => {
        it('Creates a test that confirms that a correctly inputted color keyword is validated', () => {
            const colorKeyword = 'lightcyan';
            expect(validateColor(colorKeyword)).toEqual(true);
        });
    });
});

describe('Color', () => {
    describe('Validate Hexadecimal Color', () => {
        it('Creates a test that confirms that a correctly inputted hexadecimal color is validated', () => {
            const colorKeyword = '#FFC0CB';
            expect(validateColor(colorKeyword)).toEqual(true);
        });
    });
});

describe('Color', () => {
    describe('Invalid Color', () => {
        it('Creates a test that confirms that a incorrectly inputted color is flagged with an error', () => {
            const colorKeyword = 'yello';
            expect(validateColor(colorKeyword)).toEqual('Not a valid color, please try again');
        });
    });
});