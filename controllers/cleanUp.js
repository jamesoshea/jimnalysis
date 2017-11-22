module.exports = function cleanUp(input) {
  const cleanedInput = input.replace(/[.,/#!$%^&*?;:{}=\-_`~()]/g, ' ');
  const noQuotes = cleanedInput.replace(/["']/g, ' ');
  const trimWhitespace = noQuotes.replace(/\s{2,}/g, ' ');
  return trimWhitespace;
};
