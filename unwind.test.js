import unwind from './unwind';

describe('unwind.js', () => {
  it('should undwind an array', () => {
    const test = [{
      a: 1,
      b: [1, 2, 3]
    }];

    const result = unwind(test, 'b');

    expect(result).toEqual([{a: 1, b: 1},{a: 1, b: 2},{a: 1, b: 3}]);
  });
});
