const {stringCompression, stringDecompression} = require('./code');

describe('stringCompression function', () => {
    it('should compress the string properly', () => {
        expect(
            stringCompression('AAACCCBBD'))
                .toBe('A3C3B2D');
    });

    it('should decompress the string properly', () => {
        expect(
            stringDecompression('A3C3B2D'))
            .toBe('AAACCCBBD');
    });
});
