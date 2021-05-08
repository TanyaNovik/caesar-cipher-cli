const readline = require('readline');
const consoleHelper = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return rl;
}
module.exports = {consoleHelper};