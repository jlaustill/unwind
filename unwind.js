import flatten from 'lodash/flatten';
import isArray from 'lodash/isArray';

export const unwind = (array, field) => {
  if (isArray(array)) {
    return flatten(array.map((input) => {
      if (isArray(input[field])) {
        return input[field].map((i) => {
          const output = { ...input };
          output[field] = i;

          return output;
        });
      }
      return input;
    }));
  }
  return array;
};

export default unwind;
