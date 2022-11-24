import { Writer, writeLine } from '../Writer.js';
export const replacementOut = (container, i, writer) => {
  writeLine(
    writer,
    `Text: ${container[i].text} Replacement: ${container[i].replacement}, DecodedText: ${container[i].decodedText}, Owner: ${container[i].name}`,
  );
};
export const shiftOut = (container, i, writer) => {
  writeLine(
    writer,
    `Text: ${container[i].text} Shift: ${container[i].shift}, DecodedText: ${container[i].decodedText}, Owner: ${container[i].name}`,
  );
};
