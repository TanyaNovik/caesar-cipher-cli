const { program } = require('commander');
// const { writeFile, readFile } = require('./fileWorker');
const { caesarTaskWorker } = require('./logic');
program
  .option('-s, --shift <sh>', 'a shift')
  .option('-i, --input <inputFile>', 'an input file')
  .option('-o, --output <outputFile>', 'an output file')
  .option('-a, --action <act>', 'an action encode/decode')
program.parse(process.argv);

const options = program.opts();
if(!options.shift || !options.action) {
  console.error('Action or shift are not entered!')
  process.exit(1);
} else{
  caesarTaskWorker(options);
}


