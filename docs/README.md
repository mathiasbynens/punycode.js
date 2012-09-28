# Punycode.js API documentation

<!-- div -->


<!-- div -->

## <a id="punycode"></a>`punycode`
* [`punycode`](#punycode)
* [`punycode.version`](#punycodeversion)
* [`punycode.decode`](#punycodedecodeinput)
* [`punycode.encode`](#punycodeencodeinput)
* [`punycode.toASCII`](#punycodetoasciidomain)
* [`punycode.toUnicode`](#punycodetounicodedomain)

<!-- /div -->


<!-- div -->

## `punycode.ucs2`
* [`punycode.ucs2`](#punycodeucs2)
* [`punycode.ucs2.decode`](#punycodeucs2decodestring)
* [`punycode.ucs2.encode`](#punycodeucs2encodecodepoints)

<!-- /div -->


<!-- /div -->


<!-- div -->


<!-- div -->

## `punycode`

<!-- div -->

### <a id="punycode"></a>`punycode`
<a href="#punycode">#</a> [&#x24C8;](https://github.com/bestiejs/punycode.js/blob/master/punycode.js#L9 "View in source") [&#x24C9;][1]

*(Object)*: The `punycode` object.

* * *

<!-- /div -->


<!-- div -->

### <a id="punycodeversion"></a>`punycode.version`
<a href="#punycodeversion">#</a> [&#x24C8;](https://github.com/bestiejs/punycode.js/blob/master/punycode.js#L473 "View in source") [&#x24C9;][1]

*(String)*: A string representing the current Punycode.js version number.

* * *

<!-- /div -->


<!-- div -->

### <a id="punycodedecodeinput"></a>`punycode.decode(input)`
<a href="#punycodedecodeinput">#</a> [&#x24C8;](https://github.com/bestiejs/punycode.js/blob/master/punycode.js#L221 "View in source") [&#x24C9;][1]

Converts a Punycode string of ASCII code points to a string of Unicode code points.

#### Arguments
1. `input` *(String)*: The Punycode string of ASCII code points.

#### Returns
*(String)*: The resulting string of Unicode code points.

* * *

<!-- /div -->


<!-- div -->

### <a id="punycodeencodeinput"></a>`punycode.encode(input)`
<a href="#punycodeencodeinput">#</a> [&#x24C8;](https://github.com/bestiejs/punycode.js/blob/master/punycode.js#L323 "View in source") [&#x24C9;][1]

Converts a string of Unicode code points to a Punycode string of ASCII code points.

#### Arguments
1. `input` *(String)*: The string of Unicode code points.

#### Returns
*(String)*: The resulting Punycode string of ASCII code points.

* * *

<!-- /div -->


<!-- div -->

### <a id="punycodetoasciidomain"></a>`punycode.toASCII(domain)`
<a href="#punycodetoasciidomain">#</a> [&#x24C8;](https://github.com/bestiejs/punycode.js/blob/master/punycode.js#L456 "View in source") [&#x24C9;][1]

Converts a Unicode string representing a domain name to Punycode. Only the non-ASCII parts of the domain name will be converted, i.e. it doesn't matter if you call it with a domain that's already in ASCII.

#### Arguments
1. `domain` *(String)*: The domain name to convert, as a Unicode string.

#### Returns
*(String)*: The Punycode representation of the given domain name.

* * *

<!-- /div -->


<!-- div -->

### <a id="punycodetounicodedomain"></a>`punycode.toUnicode(domain)`
<a href="#punycodetounicodedomain">#</a> [&#x24C8;](https://github.com/bestiejs/punycode.js/blob/master/punycode.js#L440 "View in source") [&#x24C9;][1]

Converts a Punycode string representing a domain name to Unicode. Only the Punycoded parts of the domain name will be converted, i.e. it doesn't matter if you call it on a string that has already been converted to Unicode.

#### Arguments
1. `domain` *(String)*: The Punycode domain name to convert to Unicode.

#### Returns
*(String)*: The Unicode representation of the given Punycode string.

* * *

<!-- /div -->


<!-- /div -->


<!-- div -->

## `punycode.ucs2`

<!-- div -->

### <a id="punycodeucs2"></a>`punycode.ucs2`
<a href="#punycodeucs2">#</a> [&#x24C8;](https://github.com/bestiejs/punycode.js/blob/master/punycode.js#L481 "View in source") [&#x24C9;][1]

*(Object)*: An object of methods to convert from JavaScript's internal character representation *(UCS-2)* to decimal Unicode code points, and back.

* * *

<!-- /div -->


<!-- div -->

### <a id="punycodeucs2decodestring"></a>`punycode.ucs2.decode(string)`
<a href="#punycodeucs2decodestring">#</a> [&#x24C8;](https://github.com/bestiejs/punycode.js/blob/master/punycode.js#L105 "View in source") [&#x24C9;][1]

Creates an array containing the decimal code points of each Unicode character in the string. While JavaScript uses UCS-2 internally, this function will convert a pair of surrogate halves *(each of which UCS-2 exposes as separate characters)* into a single code point, matching UTF-16.

#### Arguments
1. `string` *(String)*: The Unicode input string *(UCS-2)*.

#### Returns
*(Array)*: The new array of code points.

* * *

<!-- /div -->


<!-- div -->

### <a id="punycodeucs2encodecodepoints"></a>`punycode.ucs2.encode(codePoints)`
<a href="#punycodeucs2encodecodepoints">#</a> [&#x24C8;](https://github.com/bestiejs/punycode.js/blob/master/punycode.js#L136 "View in source") [&#x24C9;][1]

Creates a string based on an array of decimal code points.

#### Arguments
1. `codePoints` *(Array)*: The array of decimal code points.

#### Returns
*(String)*: The new Unicode string *(UCS-2)*.

* * *

<!-- /div -->


<!-- /div -->


<!-- /div -->


  [1]: #punycode "Jump back to the TOC."