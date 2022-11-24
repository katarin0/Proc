// let Container = require('./Container');
// let Reader = require('./Reader');
// let Writer = require('./Writer');
import { containerConst, containerClear, containerIn, containerOut } from './Container.js';
import { Reader, readerConst } from './Reader.js';
import { Writer, writerConst, writeLine, save } from './Writer.js';
function main() {
  console.log('Start');

  let writer = new Writer('out.txt', '');
  writerConst('out.txt', writer);
  writeLine(writer, 'Start!');

  let container = containerConst();
  let reader = new Reader('in.txt', '', 0);
  readerConst('in.txt', reader);
  containerIn(container, reader);
  containerOut(container, writer);
  containerClear(container);
  containerOut(container, writer);

  writeLine(writer, 'Stop!');

  console.log('Stop');

  save(writer);
}

main();
