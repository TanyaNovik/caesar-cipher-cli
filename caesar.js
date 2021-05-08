// const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
//   'a', 'b', 'c', 'd', 'E', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const alphabet =['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const encrypt = (message, shift) => {
  let result = '';
  const key = shift % alphabet.length;
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
  const key = shift % alphabet.length;
  for (let i = 0; i < message.length; i++) {
    if (alphabet.includes(message[i].toUpperCase())) {
      const needIndex = alphabet.indexOf(message[i].toUpperCase()) - key;
      const newLetter = alphabet.slice(needIndex, needIndex + 1)[0];
      result += message[i].match(/[A-Z]/) ? newLetter : newLetter.toLowerCase();
    } else {
      result += message[i];
    }
  }
  return result;
}
module.exports = {encrypt, decrypt};