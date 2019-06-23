SUBSTITUTIONS = {
	'FOR': '4',
	'TO': '2',
	'O': '0',
	'A': '4',
	'I': '1',
	'E': '3'
};

function encode(inpText) {
	outText = inpText.toUpperCase();
	for(var key in SUBSTITUTIONS) {
		value = SUBSTITUTIONS[key]
	 	outText = outText.replaceAll(key, value);
	}
	return outText;
};

function decode(inpText) {
	outText = inpText.toUpperCase();
	for(var key in SUBSTITUTIONS) {
		value = SUBSTITUTIONS[key]
	 	outText = outText.replaceAll(value, key);
	}
	return outText;
};
