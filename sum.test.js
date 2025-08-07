const test = require('node:test');
const suma = require('./sum');

test('suma 1 + 2 debe dar 3', () => {
    if (suma(1, 2) !== 3)
        expect(sum(1, 2)).toBe(3);
});