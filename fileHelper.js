const fs = require("fs");
const { Readable } = require('stream');

const readFileStream = async (fileName) => {
  if(fs.existsSync(fileName)){
    const readStream = await fs.createReadStream(fileName, {encoding: 'utf8'});
  return readStream;
  } else {
    console.error('File is not exist!')
    process.exit(1);
  }
};
const writeFileStream = (fileName, content) => {
  if(fs.existsSync(fileName)) {
    let writeableStream = fs.createWriteStream(fileName, {flags: 'a'});
    return writeableStream;
  } else {
    console.error('File is not exist!')
    process.exit(1);
  }
}
module.exports =  {readFileStream, writeFileStream};