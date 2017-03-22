'use strict';

const fs = require('fs');
const path = require('path');

const regex = /module\.exports = punycode;/;
const output = 'export { ucs2decode, ucs2encode, decode, encode, toASCII, toUnicode };\nexport default punycode;';

const sourceContents = fs.readFileSync(path.resolve(__dirname, '../punycode.js'), 'utf-8');

if (!regex.test(sourceContents)) {
	throw new Error('The underlying library has changed. Please update the prepublish script.');
}

const outputContents = sourceContents.replace(regex, output);

fs.writeFileSync(path.resolve(__dirname, '../punycode.es6.js'), outputContents);
