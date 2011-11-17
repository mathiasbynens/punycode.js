# Punycode.js API documentation

<!-- div -->


<!-- div -->

## `punycode`
* [`punycode`](#punycode)
* [`punycode.version`](#punycode.version)
* [`punycode.decode`](#punycode.decode)
* [`punycode.encode`](#punycode.encode)
* [`punycode.toASCII`](#punycode.toASCII)
* [`punycode.toUnicode`](#punycode.toUnicode)

<!-- /div -->


<!-- div -->

## `punycode.utf16`
* [`punycode.utf16`](#punycode.utf16)
* [`punycode.utf16.decode`](#punycode.utf16.decode)
* [`punycode.utf16.encode`](#punycode.utf16.encode)

<!-- /div -->


<!-- /div -->


<!-- div -->


<!-- div -->

## `punycode`

<!-- div -->

### <a id="punycode" href="https://github.com/bestiejs/punycode.js/blob/master/punycode.js#L14" title="View in source">`punycode`</a>
*(Object)*: The `punycode` object.
[&#9650;][1]

<!-- /div -->


<!-- div -->

### <a id="punycode.version" href="https://github.com/bestiejs/punycode.js/blob/master/punycode.js#L476" title="View in source">`punycode.version`</a>
*(String)*: A string representing the current Punycode.js version number.
[&#9650;][1]

<!-- /div -->


<!-- div -->

### <a id="punycode.decode" href="https://github.com/bestiejs/punycode.js/blob/master/punycode.js#L224" title="View in source">`punycode.decode(input)`</a>
Converts a Punycode string of ASCII code points to a string of Unicode code points.
[&#9650;][1]

#### Arguments
1. `input` *(String)*: The Punycode string of ASCII code points.

#### Returns
*(String)*: The resulting string of Unicode code points.

<!-- /div -->


<!-- div -->

### <a id="punycode.encode" href="https://github.com/bestiejs/punycode.js/blob/master/punycode.js#L326" title="View in source">`punycode.encode(input)`</a>
Converts a string of Unicode code points to a Punycode string of ASCII code points.
[&#9650;][1]

#### Arguments
1. `input` *(String)*: The string of Unicode code points.

#### Returns
*(String)*: The resulting Punycode string of ASCII code points.

<!-- /div -->


<!-- div -->

### <a id="punycode.toASCII" href="https://github.com/bestiejs/punycode.js/blob/master/punycode.js#L459" title="View in source">`punycode.toASCII(domain)`</a>
Converts a Unicode string representing a domain name to Punycode. Only the non-ASCII parts of the domain name will be converted, i.e. it doesn't matter if you call it with a domain that's already in ASCII.
[&#9650;][1]

#### Arguments
1. `domain` *(String)*: The domain name to convert, as a Unicode string.

#### Returns
*(String)*: The Punycode representation of the given domain name.

<!-- /div -->


<!-- div -->

### <a id="punycode.toUnicode" href="https://github.com/bestiejs/punycode.js/blob/master/punycode.js#L443" title="View in source">`punycode.toUnicode(domain)`</a>
Converts a Punycode string representing a domain name to Unicode. Only the Punycoded parts of the domain name will be converted, i.e. it doesn't matter if you call it on a string that has already been converted to Unicode.
[&#9650;][1]

#### Arguments
1. `domain` *(String)*: The Punycode domain name to convert to Unicode.

#### Returns
*(String)*: The Unicode representation of the given Punycode string.

<!-- /div -->


<!-- /div -->


<!-- div -->

## `punycode.utf16`

<!-- div -->

### <a id="punycode.utf16" href="https://github.com/bestiejs/punycode.js/blob/master/punycode.js#L483" title="View in source">`punycode.utf16`</a>
*(Object)*: An object of methods to convert from JavaScript's internal character representation to Unicode and back.
[&#9650;][1]

<!-- /div -->


<!-- div -->

### <a id="punycode.utf16.decode" href="https://github.com/bestiejs/punycode.js/blob/master/punycode.js#L108" title="View in source">`punycode.utf16.decode(string)`</a>
Creates an array containing the decimal code points of each character in the string.
[&#9650;][1]

#### Arguments
1. `string` *(String)*: The Unicode input string.

#### Returns
*(Array)*: The new array.

<!-- /div -->


<!-- div -->

### <a id="punycode.utf16.encode" href="https://github.com/bestiejs/punycode.js/blob/master/punycode.js#L136" title="View in source">`punycode.utf16.encode(codePoints)`</a>
Creates a string based on an array of decimal code points.
[&#9650;][1]

#### Arguments
1. `codePoints` *(Array)*: The array of decimal code points.

#### Returns
*(String)*: The new string.

<!-- /div -->


<!-- /div -->


<!-- /div -->


  [1]: #readme "Jump back to the TOC."