import { funcLengthText } from '../core/lengthText.js';

export const compare = (a, b) => {
  return funcLengthText(a) < funcLengthText(b);
};
