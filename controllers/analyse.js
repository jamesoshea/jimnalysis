const cleanUp = require('./cleanUp');
const afinn = require('./../data/afinn.json');
const negators = require('./../data/negators.json');
const intensifiers = require('./../data/intensifiers.json');

module.exports = function analyse(input) {
  const cleanedInput = cleanUp(input);
  let totalScore = 0;
  const words = cleanedInput.split(' ');
  for (let i = 0; i < words.length; i++) {
    let tempScore = 0;
    words[i] = words[i].toLowerCase();
    if (afinn.hasOwnProperty(words[i])) {
      if (negators.hasOwnProperty(words[i - 1])) {
        tempScore -= afinn[words[i]];
      } else {
        tempScore += afinn[words[i]];
      }
      if (intensifiers.hasOwnProperty(words[i - 1])) {
        tempScore *= intensifiers[words[i - 1]];
        if (negators.hasOwnProperty(words[i - 2])) {
          tempScore *= -1;
        }
      }
    }
    totalScore += tempScore;
  }
  let comp = Number((totalScore / words.length).toFixed(2));
  // maybe it's a negative number divided by itself
  if (Object.is(comp, -0)) {
    comp = 0;
  }
  return { score: totalScore, comp };
};
