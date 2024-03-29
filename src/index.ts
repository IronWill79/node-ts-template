export const add = (numbers: string): number => {
  const integers = numbers.split(',').map((x) => {
    return parseInt(x);
  });
  const negatives = integers.filter((x) => x < 0);

  if (negatives.length > 0) throw new RangeError('Negatives are not allowed: ' + negatives.join(', '));

  return integers.filter((x) => x <= 1000).reduce((a, b) => a + b, 0);
};

const result = add('1, 2, 4, 5');
console.log(result);
