const arr_ru = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
const arr_RU = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
const arr_en = 'abcdefghijklmnopqrstuvwxyz';
const arr_EN = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const replaceFunc = (tmp) => {
  let text = tmp[1].split('');
  let replacementTmp = [];
  let txt1 = tmp[2].split('');

  for (let i = 0; i < text.length; i++) {
    let el = `[${text[i]}->${txt1[i]}]`;
    replacementTmp.push(el);
  }

  return {
    replacementTmp,
    txt1,
  };
};

export const shiftFunc = (tmp) => {
  const text = tmp[1].split('');
  let strEncoded = '';
  const shiftTmp = +tmp[2];

  for (let i = 0; i < text.length; i++) {
    if (arr_ru.indexOf(text[i]) !== -1) {
      let index = arr_ru.indexOf(text[i]) + shiftTmp;
      let len = arr_ru.length;

      if (index < 0) {
        strEncoded += arr_ru[len + index];
      } else {
        strEncoded += arr_ru[index % len];
      }
    } else if (arr_en.indexOf(text[i]) !== -1) {
      let index = arr_en.indexOf(text[i]) + shiftTmp;
      let len = arr_en.length;

      if (index < 0) {
        strEncoded += arr_en[len + index];
      } else {
        strEncoded += arr_en[index % len];
      }
    } else if (arr_RU.indexOf(text[i]) !== -1) {
      let index = arr_RU.indexOf(text[i]) + shiftTmp;
      let len = arr_RU.length;

      if (index < 0) {
        strEncoded += arr_RU[len + index];
      } else {
        strEncoded += arr_RU[index % len];
      }
    } else if (arr_EN.indexOf(text[i]) !== -1) {
      let index = arr_EN.indexOf(text[i]) + shiftTmp;
      let len = arr_EN.length;

      if (index < 0) {
        strEncoded += arr_EN[len + index];
      } else {
        strEncoded += arr_EN[index % len];
      }
    }
  }

  return {
    shiftTmp,
    strEncoded,
  };
};
export const replaceNumberFunc = (tmp) => {
  let text = tmp[1].split('');
  let replaceText = tmp[2].split('').join('');
  let replaceTmp = [];

  for (let i = 0; i < text.length; i++) {
    let el = '[' + text[i] + '->' + replaceText[i] + ']';
    replaceTmp.push(el);
  }

  return {
    replaceTmp,
    replaceText,
  };
};
