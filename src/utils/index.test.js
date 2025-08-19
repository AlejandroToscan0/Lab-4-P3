const { toCelsius, toFahrenheit, movingAverage } = require('./index');

describe('toCelsius', () => {
    test('32°F → 0.0°C', () => expect(toCelsius(32)).toBe(0.0));
    test('-40°F → -40.0°C', () => expect(toCelsius(-40)).toBe(-40.0));
    test('TypeError si no es número', () => expect(() => toCelsius('a')).toThrow(TypeError));
});

describe('toFahrenheit', () => {
    test('0°C → 32.0°F', () => expect(toFahrenheit(0)).toBe(32.0));
    test('100°C → 212.0°F', () => expect(toFahrenheit(100)).toBe(212.0));
    test('-40°C → -40.0°F', () => expect(toFahrenheit(-40)).toBe(-40.0));
    test('TypeError si no es número', () => expect(() => toFahrenheit(null)).toThrow(TypeError));
});

describe('movingAverage', () => {
    test('[10,20,30,40], 2 → [15.00, 25.00, 35.00]', () => {
        expect(movingAverage([10, 20, 30, 40], 2)).toEqual([15.00, 25.00, 35.00]);
    });
    test('[1,2,3], 3 → [2.00]', () => {
        expect(movingAverage([1, 2, 3], 3)).toEqual([2.00]);
    });
    test('TypeError si no es array de números', () => {
        expect(() => movingAverage([1, 'a', 3], 2)).toThrow(TypeError);
    });
    test('RangeError si ventana fuera de rango', () => {
        expect(() => movingAverage([1, 2], 3)).toThrow(RangeError);
    });
});