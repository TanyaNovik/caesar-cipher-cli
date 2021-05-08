const {writeFile} = require("./fileHelper");
const {readFile} = require("./fileHelper");
const {encrypt, decrypt} = require("./caesar");
const {consoleHelper} = require("./consoleHelper")

const caesarTaskWorker = async (options) => {
  let fileContent = '';
  if(options.input) {
    const input = await readFile(options.input);
    fileContent = doDecodeEncode(options.action, input, options.shift);
    doConsoleFileOutput(fileContent, options.output)
  } else {
    const rl = consoleHelper();
    rl.on('line', (input) => {
      fileContent = doDecodeEncode(options.action, input, options.shift);
      doConsoleFileOutput(fileContent, options.output)
    });
  }
}
const doDecodeEncode = (action , fileContent, shift) => {
  let result = '';
  if(action === 'encode'){
    result = encrypt(fileContent, shift);
  }
  if(action === 'decode'){
    result = decrypt(fileContent, shift);
  }
  return result;
}
const doConsoleFileOutput = (fileContent, output) => {
  if(output){
    writeFile(output, fileContent);
  } else {
    console.log(fileContent);
  }
}
module.exports = {caesarTaskWorker};