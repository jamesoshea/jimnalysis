const afinn = require('./../data/afinn.json')
const negators = require('./../data/negators.json')
const intensifiers = require('./../data/intensifiers.json')

module.exports = function(input) {
	var score = 0;
	var comp = 0;
	// get individual words
	var words = input.split(' ');
	for (let j = 0; j < words.length; j++) {
		words[j] = words[j].toLowerCase();
		if(afinn.hasOwnProperty(words[j])){
			//allow for negated words
			if (negators.hasOwnProperty(words[j - 1])) {
				//allow for intensifiers
				if(intensifiers.hasOwnProperty(words[j - 2])) {
					score -= (afinn[words[j]] * intensifiers[words[j - 1]]);
				} else {
					score -= afinn[words[j]];
				}
			} else {
				if(intensifiers.hasOwnProperty(words[j - 1])) {
					score += (afinn[words[j]] * intensifiers[words[j - 1]]);
				} else {
					score += afinn[words[j]];
				}
			}
		}
	}
	var comp = (score / words.length).toFixed(2);
	if (comp === -0) {
		comp = 0;
	}
	return {score: score, comp: comp};
}