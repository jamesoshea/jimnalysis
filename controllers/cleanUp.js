module.exports =  function(input) {
	input = input.replace(/[.,\/#!$%\^&\*?;:{}=\-_`~()]/g," ");
	input = input.replace(/["']/g, "");
	var output = input.replace(/\s{2,}/g," ");
	return output;
}