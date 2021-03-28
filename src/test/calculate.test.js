import Calculate from '../logic/calculate';

it('should return an object ', () => {
  expect(Calculate('78', '2', '+')).toBeInstanceOf(Object);
});

it('should return the sum of data provided', () => {
  const data = { total: '78', next: '23', operation: '+' };
  const result = Calculate(data, '+');
  expect(result).toStrictEqual({ next: null, operation: '+', total: '101' });
});

it('should return the division of data provided', () => {
  const data = { total: '12', next: '2', operation: '÷' };
  const result = Calculate(data, '÷');
  expect(result).toStrictEqual({ next: null, operation: '÷', total: '6.000' });
});

it('should return the subtraction of data provided', () => {
  const data = { total: '600', next: '300', operation: '-' };
  const result = Calculate(data, '-');
  expect(result).toStrictEqual({ next: null, operation: '-', total: '300' });
});

it('should clear the display on tap of AC', () => {
  const data = { total: '600', next: '300', operation: 'AC' };
  const result = Calculate(data, 'AC');
  expect(result).toStrictEqual({ next: null, operation: null, total: null });
});

it('should turned the positive number to negative', () => {
  const data = { total: '600', next: null, operation: '+/-' };
  const result = Calculate(data, '+/-');
  expect(result).toStrictEqual({ next: null, operation: '+/-', total: -600 });
});

it('should turned the negative number to positive', () => {
  const data = { total: '-600', next: null, operation: '+/-' };
  const result = Calculate(data, '+/-');
  expect(result).toStrictEqual({ next: null, operation: '+/-', total: 600 });
});

it('should return the product of 3 numbers', () => {
  const data = { total: '2', next: '2', operation: 'x' };
  const result = Calculate(data, 'x');
  const newData = Calculate({ total: result.total, next: '2', operation: result.operation }, 'x');

  expect(newData).toStrictEqual({ next: null, operation: 'x', total: '8' });
});

describe('if user presses % key, calculate', () => {
  it('should divide the last digit by 100', () => {
    expect(Calculate({
      total: 9, next: null, operation: null,
    }, '%')).toEqual({
      total: 0.09, next: null, operation: null,
    });
  });
  it('should divide the last digit by 100', () => {
    expect(Calculate({
      total: 9, next: 6, operation: '+',
    }, '%')).toEqual({
      total: 9, next: 0.06, operation: '+',
    });
  });
});
