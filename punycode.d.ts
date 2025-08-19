/**
 * TypeScript declarations for punycode.js
 * A robust Punycode converter that fully complies to RFC 3492 and RFC 5891
 */

declare namespace punycode {
	/**
	 * An object of methods to convert from JavaScript's internal character
	 * representation (UCS-2) to Unicode code points, and back.
	 */
	interface UCS2 {
		/**
		 * Creates an array containing the numeric code points of each Unicode
		 * character in the string. While JavaScript uses UCS-2 internally,
		 * this function will convert a pair of surrogate halves (each of which
		 * UCS-2 exposes as separate characters) into a single code point,
		 * matching UTF-16.
		 * @param string The Unicode input string (UCS-2).
		 * @returns The new array of code points.
		 */
		decode(string: string): number[];

		/**
		 * Creates a string based on an array of numeric code points.
		 * @param codePoints The array of numeric code points.
		 * @returns The new Unicode string (UCS-2).
		 */
		encode(codePoints: number[]): string;
	}
}

interface Punycode {
	/**
	 * A string representing the current Punycode.js version number.
	 */
	readonly version: string;

	/**
	 * An object of methods to convert from JavaScript's internal character
	 * representation (UCS-2) to Unicode code points, and back.
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 */
	readonly ucs2: punycode.UCS2;

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @param input The Punycode string of ASCII-only symbols.
	 * @returns The resulting string of Unicode symbols.
	 * @throws {RangeError} Throws when the input is invalid.
	 */
	decode(input: string): string;

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @param input The string of Unicode symbols.
	 * @returns The resulting Punycode string of ASCII-only symbols.
	 * @throws {RangeError} Throws when the input causes overflow.
	 */
	encode(input: string): string;

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @param input The Punycoded domain name or email address to convert to Unicode.
	 * @returns The Unicode representation of the given Punycode string.
	 */
	toUnicode(input: string): string;

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @param input The domain name or email address to convert, as a Unicode string.
	 * @returns The Punycode representation of the given domain name or email address.
	 */
	toASCII(input: string): string;
}

declare const punycode: Punycode;

export = punycode;
