module.exports = function cleanUp(input) {
  const cleanedInput = input.replace(/[.,/#!$%^&*?;:{}=\-_`~()]/g, ' ');
  const noQuotes = cleanedInput.replace(/["']/g, ' ');
  const noNewLines = noQuotes.replace(/\n/g, ' ');
  const trimWhitespace = noNewLines.replace(/\s{2,}/g, ' ');
  return trimWhitespace;
};
