const {writeFile} = require("./fileWorker");
const {readFile} = require("./fileWorker");
const {encrypt, decrypt} = require("./caesar");
const caesarTaskWorker = (options) => {
  let fileContent = readFile(options.input);
  console.log(options)
  console.log(fileContent)
  if(options.action === 'encode'){
    fileContent = encrypt(fileContent, options.shift);
    console.log('encode', fileContent)
  }
  if(options.action === 'decode'){
    fileContent = decrypt(fileContent, options.shift);
    console.log('decode', fileContent)
  }
  console.log(fileContent)
  writeFile(options.output, fileContent);

}
module.exports = {caesarTaskWorker};