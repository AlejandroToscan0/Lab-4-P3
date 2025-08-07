const test = require('node:test');
const sum = require('./sum');

test('suma 1 + 2 debe dar 3', () => {
    if (sum(1, 2) !== 3)
        expect(sum(1, 2)).toBe(3);
});