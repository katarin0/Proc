import { replaceFunc, shiftFunc } from '../utils/encryption.js';
export const shiftIn = (tmp, shift, text, name) => {
  shift.text = text;
  const { shiftTmp, strEncoded } = shiftFunc(tmp);

  shift.shift = shiftTmp;
  shift.decodedText = strEncoded;
  shift.name = name;
};
export const replacementIn = (tmp, replacement, text, name) => {
  replacement.text = text;
  const { replacementTmp, txt1 } = replaceFunc(tmp);
  replacement.replacement = replacementTmp.join('-');
  replacement.decodedText = txt1.join('');
  replacement.name = name;
};
