const fs = require("fs");
const { Readable } = require('stream');

const readFile = async (fileName) => {
  if(fs.existsSync(fileName)){
   let fileContent = '';
    const readStream = await fs.createReadStream(fileName, {encoding: 'utf8'});
    for await (const chunk of readStream) {
      fileContent +=chunk;
    }
  return fileContent;
  } else {
    console.log('File is not exist!')
    process.exit();
    // throw new Error('File is not exist!')
  }
};
const writeFile = (fileName, content) => {
  if(fs.existsSync(fileName)) {
    let writeableStream = fs.createWriteStream(fileName, {flags: 'a'});
    writeableStream.write(content);
    writeableStream.end();
  } else {
    console.log('File is not exist!')
    process.exit();
    // throw new Error('File is not exist!')
  }
}
module.exports =  {readFile, writeFile};