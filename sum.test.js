const test = require('test');
const suma = require('./sum');

// sum.test.js

test('suma 1 + 2 debe dar 3', () => {
    expect(suma(1, 2)).toBe(3);
});