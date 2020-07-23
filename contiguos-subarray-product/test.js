const maxProduct = require('./code');

describe('maxProduct function', () => {
    it('should return max product correctly', () => {
        expect(maxProduct([6,-3,-10,0,2])).toBe(180);
    })
});
