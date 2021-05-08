const alphabet = ['A', 'B', 'C', 'D', 'I', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  'a', 'b', 'c', 'd', 'i', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const encrypt = (message, shift) => {
  let result = '';
  const key = shift % alphabet.length;
  console.log(key)
  for (let i = 0; i < message.length; i++) {
    if (alphabet.includes(message[i])) {
      console.log(alphabet.indexOf(message[i]) + key)
      result += alphabet[(alphabet.indexOf(message[i]) + key) % alphabet.length];
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
    if (alphabet.includes(message[i])) {
      const needIndex = alphabet.indexOf(message[i]) - key;
      console.log(alphabet.indexOf(message[i]) - key)

      result += alphabet.slice(needIndex, needIndex +1);
    } else {
      result += message[i];
    }
  }
  return result;
}
module.exports = {encrypt, decrypt};