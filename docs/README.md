# Punycode.js API documentation

<!-- div -->


<!-- div -->

## `Punycode`
* [`Punycode`](#Punycode)
* [`Punycode.decode`](#Punycode.decode)
* [`Punycode.encode`](#Punycode.encode)
* [`Punycode.toASCII`](#Punycode.toASCII)
* [`Punycode.toUnicode`](#Punycode.toUnicode)

<!-- /div -->


<!-- div -->

## `Punycode.utf16`
* [`Punycode.utf16`](#Punycode.utf16)
* [`Punycode.utf16.decode`](#Punycode.utf16.decode)
* [`Punycode.utf16.encode`](#Punycode.utf16.encode)

<!-- /div -->


<!-- /div -->


<!-- div -->


<!-- div -->

## `Punycode`

<!-- div -->

### <a id="Punycode" href="https://github.com/bestiejs/punycode.js/blob/master/punycode.js#L14" title="View in source">`Punycode`</a>
*(Object)*: The `Punycode` object.
[&#9650;][1]

<!-- /div -->


<!-- div -->

### <a id="Punycode.decode" href="https://github.com/bestiejs/punycode.js/blob/master/punycode.js#L222" title="View in source">`Punycode.decode(input)`</a>
Converts a Punycode string of ASCII code points to a string of Unicode code points.
[&#9650;][1]

#### Arguments
1. `input` *(String)*: The Punycode string of ASCII code points.

#### Returns
*(String)*: The resulting string of Unicode code points.

<!-- /div -->


<!-- div -->

### <a id="Punycode.encode" href="https://github.com/bestiejs/punycode.js/blob/master/punycode.js#L324" title="View in source">`Punycode.encode(input)`</a>
Converts a string of Unicode code points to a Punycode string of ASCII code points.
[&#9650;][1]

#### Arguments
1. `input` *(String)*: The string of Unicode code points.

#### Returns
*(String)*: The resulting Punycode string of ASCII code points.

<!-- /div -->


<!-- div -->

### <a id="Punycode.toASCII" href="https://github.com/bestiejs/punycode.js/blob/master/punycode.js#L457" title="View in source">`Punycode.toASCII(domain)`</a>
Converts a Unicode string representing a domain name to Punycode. Only the non-ASCII parts of the domain name will be converted, i.e. it doesn't matter if you call it with a domain that's already in ASCII.
[&#9650;][1]

#### Arguments
1. `domain` *(String)*: The domain name to convert, as a Unicode string.

#### Returns
*(String)*: The Punycode representation of the given domain name.

<!-- /div -->


<!-- div -->

### <a id="Punycode.toUnicode" href="https://github.com/bestiejs/punycode.js/blob/master/punycode.js#L441" title="View in source">`Punycode.toUnicode(domain)`</a>
Converts a Punycode string representing a domain name to Unicode. Only the Punycoded parts of the domain name will be converted, i.e. it doesn't matter if you call it on a string that has already been converted to Unicode.
[&#9650;][1]

#### Arguments
1. `domain` *(String)*: The Punycode domain name to convert to Unicode.

#### Returns
*(String)*: The Unicode representation of the given Punycode string.

<!-- /div -->


<!-- /div -->


<!-- div -->

## `utf16`

<!-- div -->

### <a id="Punycode.utf16" href="https://github.com/bestiejs/punycode.js/blob/master/punycode.js#L476" title="View in source">`utf16`</a>
*(Object)*: An object of methods to convert from JavaScript's internal character representation to Unicode and back.
[&#9650;][1]

<!-- /div -->


<!-- div -->

### <a id="Punycode.utf16.decode" href="https://github.com/bestiejs/punycode.js/blob/master/punycode.js#L106" title="View in source">`Punycode.utf16.decode(string)`</a>
Creates an array containing the decimal code points of each character in the string.
[&#9650;][1]

#### Arguments
1. `string` *(String)*: The Unicode input string.

#### Returns
*(Array)*: The new array.

<!-- /div -->


<!-- div -->

### <a id="Punycode.utf16.encode" href="https://github.com/bestiejs/punycode.js/blob/master/punycode.js#L134" title="View in source">`Punycode.utf16.encode(codePoints)`</a>
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