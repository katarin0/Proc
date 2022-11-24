import { replaceFunc, shiftFunc, replaceNumberFunc } from '../utils/encryption.js';
export const shiftIn = (tmp, shift, text) => {
  shift.text = text;
  const { shiftTmp, strEncoded } = shiftFunc(tmp);

  shift.shift = shiftTmp;
  shift.decodedText = strEncoded;
};
export const replacementIn = (tmp, replacement, text) => {
  replacement.text = text;
  const { replacementTmp, txt1 } = replaceFunc(tmp);
  replacement.replacement = replacementTmp.join('-');
  replacement.decodedText = txt1.join('');
};
export const replaceNumberIn = (tmp, replaceNumber, text) => {
  replaceNumber.text = text;
  const { replaceTmp, replaceText } = replaceNumberFunc(tmp);

  replaceNumber.replaceNumber = replaceTmp.join('-');
  replaceNumber.decodedText = replaceText;
};
