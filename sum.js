function sum(a, b) {
    return a + b;
}

function factorial(n) {
    if (n < 0) {
        throw new Error('Factorial no está definido para números negativos');
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

function fibonacci(n) {
    if (n < 0) {
        throw new Error('Fibonacci no está definido para números negativos');
    }
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = {
    sum,
    factorial,
    fibonacci
};