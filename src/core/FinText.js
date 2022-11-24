import Replacement from './Replacement.js';
import Shift from './Shift.js';
import { shiftIn, replacementIn } from './InText.js';
import { replacementOut, shiftOut } from './OutText.js';
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
    default:
      return 0;
  }
};
export const outText = (container, i, writer) => {
  if ('replacement' in container[i]) {
    replacementOut(container, i, writer);
  } else if ('shift' in container[i]) {
    shiftOut(container, i, writer);
  }
};
