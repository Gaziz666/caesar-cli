const abc = "abcdefghijklmnopqrstuvwxyz";
const abcUpper = abc.toUpperCase();

exports.ceasar = (text, shift) => {
  const map = Array.prototype.map;
  return map.call(text, char => {
    if (abc.includes(char)) {
      let position = (abc.indexOf(char) + shift) % abc.length;
      position = position < 0 ? abc.length - position : position
      return abc[position];
    }
    if (abcUpper.includes(char)) {
      let position = (abcUpper.indexOf(char) + shift) % abcUpper.length;
      position = position < 0 ? abcUpper.length - position : position
      return abcUpper[position];
    }
    return char;
  }).join('');
}
