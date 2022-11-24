import { Writer, writeLine } from '../Writer.js';
import { funcLengthText } from './lengthText.js';
export const replacementOut = (container, i, writer) => {
  let length = funcLengthText(container[i].text);
  writeLine(
    writer,
    `Text: ${container[i].text}, Length: ${length}, Replacement: ${container[i].replacement}, DecodedText: ${container[i].decodedText}`,
  );
};
export const shiftOut = (container, i, writer) => {
  let length = funcLengthText(container[i].text);
  writeLine(
    writer,
    `Text: ${container[i].text}, Length: ${length}, Shift: ${container[i].shift}, DecodedText: ${container[i].decodedText}`,
  );
};
export const replaceNumberOut = (container, i, writer) => {
  writeLine(
    writer,
    `Text: ${container[i].text}, ReplaceNumber: ${container[i].replaceNumber}, DecodedText: ${container[i].decodedText}`,
  );
};
