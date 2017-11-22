const afinn = require('./../data/afinn.json');
const negators = require('./../data/negators.json');
const intensifiers = require('./../data/intensifiers.json');

module.exports = function analyse(input) {
  let score = 0;
  const words = input.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].toLowerCase();
    if (afinn.hasOwnProperty(words[i])) {
      // allow for negated words
      if (negators.hasOwnProperty(words[i - 1])) {
        // allow for intensifiers
        if (intensifiers.hasOwnProperty(words[i - 2])) {
          score -= (afinn[words[i]] * intensifiers[words[i - 1]]);
        } else {
          score -= afinn[words[i]];
        }
      } else if (intensifiers.hasOwnProperty(words[i - 1])) {
        score += (afinn[words[i]] * intensifiers[words[i - 1]]);
      } else {
        score += afinn[words[i]];
      }
    }
  }
  let comp = Number((score / words.length).toFixed(2));
  // maybe it's a negative number divided by itself
  if (Object.is(comp, -0)) {
    comp = 0;
  }
  return { score, comp };
};
