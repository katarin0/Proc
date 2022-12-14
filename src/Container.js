import { readLine, fileEmpty } from './Reader.js';
import { Writer, writeLine } from './Writer.js';
import { inText, outText } from '../src/core/FinText.js';
export const containerConst = () => {
  let container = [];
  return container;
};
export const containerClear = (container) => {
  container.splice(0, container.length);
};
export const containerIn = (container, reader) => {
  console.log(reader);
  while (!fileEmpty(reader)) {
    let tmp = readLine(reader);
    inText(tmp, container);
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
