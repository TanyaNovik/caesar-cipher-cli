const alphabet =['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const encrypt = (message, shift) => {
  let result = '';
  let key = shift % alphabet.length;
  key = key < 0 ? alphabet.length + key : key;
  for (let i = 0; i < message.length; i++) {
    if (alphabet.includes(message[i].toUpperCase())) {
      const newLetter = alphabet[(alphabet.indexOf(message[i].toUpperCase()) + key) % alphabet.length];
      result += message[i].match(/[A-Z]/) ? newLetter : newLetter.toLowerCase();
    } else {
      result += message[i];
    }
  }
  return result;
}

const decrypt = (message, shift) => {
  let result = '';
  let key = shift % alphabet.length;
  key = key < 0 ? alphabet.length + key : key;
  for (let i = 0; i < message.length; i++) {
    if (alphabet.includes(message[i].toUpperCase())) {
      const needIndex = alphabet.indexOf(message[i].toUpperCase()) - key;
      const newLetter = alphabet.slice(needIndex)[0];
      result += message[i].match(/[A-Z]/) ? newLetter : newLetter.toLowerCase();
    } else {
      result += message[i];
    }
  }
  return result;
}
module.exports = {encrypt, decrypt};