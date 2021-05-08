const fs = require("fs");

const readFile = (fileName) => {
  if(fs.existsSync(fileName)){
    let fileContent = fs.readFileSync(fileName, "utf8");
    return fileContent;
  } else {
    throw new Error('File is not exist!')
  }
};
const writeFile = (fileName, content) => {
  if(fs.existsSync(fileName)) {
    fs.writeFileSync(fileName, content);
  } else {
    throw new Error('File is not exist!')
  }
}
module.exports =  {readFile, writeFile};