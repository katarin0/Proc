import Replacement from './Replacement.js';
import Shift from './Shift.js';
import ReplaceNumber from './ReplaceNumber.js';
import { shiftIn, replacementIn, replaceNumberIn } from './InText.js';
import { replacementOut, shiftOut, replaceNumberOut } from './OutText.js';
export const inText = (tmp, container) => {
  switch (tmp[0]) {
    case '1':
      let replacement = new Replacement();
      replacementIn(tmp.toString().split(' '), replacement, tmp.split(' ')[1].replace(/\r/g, ''));
      container.push(replacement);
      break;
    case '2':
      let shift = new Shift();
      shiftIn(tmp.toString().split(' '), shift, tmp.split(' ')[1]);
      container.push(shift);
      break;
    case '3':
      let replaceNumber = new ReplaceNumber();
      replaceNumberIn(
        tmp.toString().split(' '),
        replaceNumber,
        tmp.split(' ')[1].replace(/\r/g, ''),
      );

      container.push(replaceNumber);
      break;
    default:
      return 0;
  }
};
export const outText = (container, i, writer) => {
  console.log(container[i]);
  if ('replacement' in container[i]) {
    replacementOut(container, i, writer);
  } else if ('shift' in container[i]) {
    shiftOut(container, i, writer);
  } else if ('replaceNumber' in container[i]) {
    replaceNumberOut(container, i, writer);
  }
};
