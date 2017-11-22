# jimnalysis #

Jimnalysis is a simple, dependency free, bag-of-words text analysis package with common sense heuristics.

### Installation ###

`npm install jimnalysis`.

### Usage ###

`const jimnalysis = require('jimnalysis');`

Jimnalysis currently has two functions: cleanup and analyse. 

`jimnalysis.cleanup(string); // removes punctuation, extra whitespace and newline characters`

`jimnalysis.analyse(string) // performs cleanup automatically and analyses the result`

This returns an object with two keys: `score` and `comp`.

`score` is a whole number value which can be negative or positive. `comp` is simply the score divided by the number of words (whitespace delimited) in the input string. This is usually a more useful measure of the sentiment of the input.