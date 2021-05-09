const {writeFileStream} = require("./fileHelper");
const {readFileStream} = require("./fileHelper");
const {encrypt, decrypt} = require("./caesarCipher");
const {Transform} = require('stream');

const caesarTaskWorker = async (options) => {
  const dataTransformation = new Transform({
    transform(chunk, _, cb) {
      cb(null, options.action === 'encode' ? encrypt(chunk.toString(), options.shift) : decrypt(chunk.toString(), options.shift));
    }
  });
  let fileContent = '';
  if (options.input) {
    const readStream = await readFileStream(options.input);
    const writeStream = options.output && await writeFileStream(options.output);
      readStream
        .pipe(dataTransformation)
        .pipe(options.output ? writeStream : process.stdout)
  } else {
    const writeStream = options.output && await writeFileStream(options.output);
    process.stdin
      .pipe(dataTransformation)
      .pipe(options.output ? writeStream : process.stdout)
  }
}
module.exports = {caesarTaskWorker};