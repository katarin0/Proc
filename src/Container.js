import { readLine, fileEmpty } from './Reader.js';
import { Writer, writeLine } from './Writer.js';
import { inText, outText } from '../src/core/FinText.js';
import { compare } from './utils/compare.js';
import { validateLine } from './utils/validate.js';
export const containerConst = () => {
  let container = [];
  return container;
};
export const containerClear = (container) => {
  container.splice(0, container.length);
};
export const containerIn = (container, reader) => {
  while (!fileEmpty(reader)) {
    let tmp = readLine(reader);
    if (validateLine(tmp)) inText(tmp, container);
    else {
      console.log('Ошибка в файле ввода');
    }
  }
};
export const containerOut = (container, writer) => {
  let c = container.length;
  writeLine(writer, `Container contains: ${c}, elements!`);

  if (c > 0)
    for (let i = 0; i < c; i++) {
      outText(container, i, writer);
    }
};
export const containerSort = (container) => {
  container.sort((a, b) => {
    if (compare(a.text, b.text)) {
      return 1;
    } else {
      return -1;
    }
  });
};
export const containerOutAll = (container, writer, element) => {
  let tmpArray = container.filter((item) => {
    if (element.toLowerCase() in item) {
      return true;
    }
  });
  console.log(tmpArray);
  let c = tmpArray.length;
  writeLine(writer, `Container contains: ${c}, ${element} elements!`);
  if (c > 0)
    for (let i = 0; i < c; i++) {
      outText(tmpArray, i, writer);
    }
};
export const multiMethod = (container, writer) => {
  let c = container.length;
  writeLine(writer, `Multimethod`);
  for (let i = 0; i < c - 1; i++) {
    for (let j = i + 1; j < c; j++) {
      switch (Object.keys(container[i])[1]) {
        case 'shift':
          switch (Object.keys(container[j])[1]) {
            case 'shift':
              writeLine(writer, `Element ${i} and ${j} are Shift and Shift`);
              break;
            case 'replacement':
              writeLine(writer, `Element ${i} and ${j} are Shift and Replacement`);
              break;
            case 'replaceNumber':
              writeLine(writer, `Element ${i} and ${j} are Shift and replaceNumber`);
              break;
            default:
              writeLine(writer, `Element ${i} and ${j} are Unknown type`);
          }
          break;

        case 'replacement':
          switch (Object.keys(container[j])[1]) {
            case 'shift':
              writeLine(writer, `Element ${i} and ${j} are Replacement and Shift`);
              break;
            case 'replacement':
              writeLine(writer, `Element ${i} and ${j} are Replacement and Replacement`);
              break;
            case 'replaceNumber':
              writeLine(writer, `Element ${i} and ${j} are Replacement and replaceNumber`);
              break;
            default:
              writeLine(writer, `Element ${i} and ${j} are Unknown type`);
          }
          break;
        case 'replaceNumber':
          switch (Object.keys(container[j])[1]) {
            case 'shift':
              writeLine(writer, `Element ${i} and ${j} are replaceNumber and Shift`);
              break;
            case 'replacement':
              writeLine(writer, `Element ${i} and ${j} are replaceNumber and Replacement`);
              break;
            case 'replaceNumber':
              writeLine(writer, `Element ${i} and ${j} are replaceNumber and replaceNumber`);
              break;
            default:
              writeLine(writer, `Element ${i} and ${j} are Unknown type`);
          }
          break;
        default:
          writeLine(writer, `Element ${i} and ${j} are Unknown type`);
      }
    }
  }
};
