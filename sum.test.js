const { sum, factorial, fibonacci } = require('./math');

test('suma 1 + 2 debe dar 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('factorial de 5 debe ser 120', () => {
    expect(factorial(5)).toBe(120);
});

test('fibonacci de 6 debe ser 8', () => {
    expect(fibonacci(6)).toBe(8);
});

test('factorial de 0 debe ser 1', () => {
    expect(factorial(0)).toBe(1);
});
