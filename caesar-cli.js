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
  // throw new Error('Action or shift are not required!');
  process.on('exit', function(code) {
    return console.log(`About to exit with code ${code}`);
  });
} else{
  caesarTaskWorker(options);
}


