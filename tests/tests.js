(function(root) {

	/** Use a single `load` function */
	var load = typeof require == 'function' ? require : root.load,

	/** The unit testing framework */
	QUnit =
		root.QUnit ||
		(root.QUnit = load('../vendor/qunit/qunit/qunit.js') || root.QUnit) &&
		(load('../vendor/qunit-clib/qunit-clib.js'), root.QUnit),

	/** The `punycode` object to test */
	punycode = root.punycode || load('../punycode.js') || root.punycode,

	/** Data that will be used in the tests */
	testData = {
		'strings': [
			{
				'description': 'a single basic code point',
				'decoded': 'Bach',
				'encoded': 'Bach-'
			},
			{
				'description': 'a single non-ASCII character',
				'decoded': '\xfc', // 'ü'
				'encoded': 'tda'
			},
			{
				'description': 'multiple non-ASCII characters',
				'decoded': '\xfc\xeb\xe4\xf6\u2665', // üëäö♥
				'encoded': '4can8av2009b'
			},
			{
				'description': 'mix of ASCII and non-ASCII characters',
				'decoded': 'b\xfccher', // 'bücher'
				'encoded': 'bcher-kva'
			},
			{
				'description': 'long string with both ASCII and non-ASCII characters',
				'decoded': 'Willst du die Bl\xfcthe des fr\xfchen, die Fr\xfcchte des sp\xe4teren Jahres',
				'encoded': 'Willst du die Blthe des frhen, die Frchte des spteren Jahres-x9e96lkal'
			},
			// http://tools.ietf.org/html/rfc3492#section-7.1
			{
				'description': 'Arabic (Egyptian)',
				'decoded': '\u0644\u064a\u0647\u0645\u0627\u0628\u062a\u0643\u0644\u0645\u0648\u0634\u0639\u0631\u0628\u064a\u061f',
				'encoded': 'egbpdaj6bu4bxfgehfvwxn'
			},
			{
				'description': 'Chinese (simplified)',
				'decoded': '\u4ed6\u4eec\u4e3a\u4ec0\u4e48\u4e0d\u8bf4\u4e2d\u6587',
				'encoded': 'ihqwcrb4cv8a8dqg056pqjye'
			},
			{
				'description': 'Chinese (traditional)',
				'decoded': '\u4ed6\u5011\u7232\u4ec0\u9ebd\u4e0d\u8aaa\u4e2d\u6587',
				'encoded': 'ihqwctvzc91f659drss3x8bo0yb'
			},
			{
				'description': 'Czech',
				'decoded': 'Pro\u010dprost\u011bnemluv\xed\u010desky',
				'encoded': 'Proprostnemluvesky-uyb24dma41a'
			},
			{
				'description': 'Hebrew',
				'decoded': '\u05dc\u05de\u05d4\u05d4\u05dd\u05e4\u05e9\u05d5\u05d8\u05dc\u05d0\u05de\u05d3\u05d1\u05e8\u05d9\u05dd\u05e2\u05d1\u05e8\u05d9\u05ea',
				'encoded': '4dbcagdahymbxekheh6e0a7fei0b'
			},
			{
				'description': 'Hindi (Devanagari)',
				'decoded': '\u092f\u0939\u0932\u094b\u0917\u0939\u093f\u0928\u094d\u0926\u0940\u0915\u094d\u092f\u094b\u0902\u0928\u0939\u0940\u0902\u092c\u094b\u0932\u0938\u0915\u0924\u0947\u0939\u0948\u0902',
				'encoded': 'i1baa7eci9glrd9b2ae1bj0hfcgg6iyaf8o0a1dig0cd'
			},
			{
				'description': 'Japanese (kanji and hiragana)',
				'decoded': '\u306a\u305c\u307f\u3093\u306a\u65e5\u672c\u8a9e\u3092\u8a71\u3057\u3066\u304f\u308c\u306a\u3044\u306e\u304b',
				'encoded': 'n8jok5ay5dzabd5bym9f0cm5685rrjetr6pdxa'
			},
			{
				'description': 'Korean (Hangul syllables)',
				'decoded': '\uc138\uacc4\uc758\ubaa8\ub4e0\uc0ac\ub78c\ub4e4\uc774\ud55c\uad6d\uc5b4\ub97c\uc774\ud574\ud55c\ub2e4\uba74\uc5bc\ub9c8\ub098\uc88b\uc744\uae4c',
				'encoded': '989aomsvi5e83db1d2a355cv1e0vak1dwrv93d5xbh15a0dt30a5jpsd879ccm6fea98c'
			},
			/**
			 * As there’s no way to do it in JavaScript, Punycode.js doesn’t support
			 * mixed-case annotation (which is entirely optional as per the RFC).
			 * So, while the RFC sample string encodes to:
			 * `b1abfaaepdrnnbgefbaDotcwatmq2g4l`
			 * Without mixed-case annotation it has to encode to:
			 * `b1abfaaepdrnnbgefbadotcwatmq2g4l`
			 * https://github.com/bestiejs/punycode.js/issues/3
			 */
			{
				'description': 'Russian (Cyrillic)',
				'decoded': '\u043f\u043e\u0447\u0435\u043c\u0443\u0436\u0435\u043e\u043d\u0438\u043d\u0435\u0433\u043e\u0432\u043e\u0440\u044f\u0442\u043f\u043e\u0440\u0443\u0441\u0441\u043a\u0438',
				'encoded': 'b1abfaaepdrnnbgefbadotcwatmq2g4l'
			},
			{
				'description': 'Spanish',
				'decoded': 'Porqu\xe9nopuedensimplementehablarenEspa\xf1ol',
				'encoded': 'PorqunopuedensimplementehablarenEspaol-fmd56a'
			},
			{
				'description': 'Vietnamese',
				'decoded': 'T\u1ea1isaoh\u1ecdkh\xf4ngth\u1ec3ch\u1ec9n\xf3iti\u1ebfngVi\u1ec7t',
				'encoded': 'TisaohkhngthchnitingVit-kjcr8268qyxafd2f1b9g'
			},
			{
				'decoded': '3\u5e74B\u7d44\u91d1\u516b\u5148\u751f',
				'encoded': '3B-ww4c5e180e575a65lsy2b'
			},
			{
				'decoded': '\u5b89\u5ba4\u5948\u7f8e\u6075-with-SUPER-MONKEYS',
				'encoded': '-with-SUPER-MONKEYS-pc58ag80a8qai00g7n9n'
			},
			{
				'decoded': 'Hello-Another-Way-\u305d\u308c\u305e\u308c\u306e\u5834\u6240',
				'encoded': 'Hello-Another-Way--fc4qua05auwb3674vfr0b'
			},
			{
				'decoded': '\u3072\u3068\u3064\u5c4b\u6839\u306e\u4e0b2',
				'encoded': '2-u9tlzr9756bt3uc0v'
			},
			{
				'decoded': 'Maji\u3067Koi\u3059\u308b5\u79d2\u524d',
				'encoded': 'MajiKoi5-783gue6qz075azm5e'
			},
			{
				'decoded': '\u30d1\u30d5\u30a3\u30fcde\u30eb\u30f3\u30d0',
				'encoded': 'de-jg4avhby1noc0d'
			},
			{
				'decoded': '\u305d\u306e\u30b9\u30d4\u30fc\u30c9\u3067',
				'encoded': 'd9juau41awczczp'
			},
			/**
			 * This example is an ASCII string that breaks the existing rules for host
			 * name labels. (It’s not a realistic example for IDNA, because IDNA never
			 * encodes pure ASCII labels.)
			 */
			{
				'description': 'ASCII string that breaks the existing rules for host-name labels',
				'decoded': '-> $1.00 <-',
				'encoded': '-> $1.00 <--'
			}
		],
		'ucs2': [
			{
				'description': 'printable ASCII characters',
				'decoded': [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126],
				'encoded': ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'
			},
			{
				'description': 'Apple logo (private range)',
				'decoded': [63743],
				'encoded': '\uf8ff' // ''
			},
			{
				'decoded': [102, 3232, 246, 32, 98, 97, 114, 32, 98, 229, 122, 32, 113, 252, 120],
				'encoded': 'f\u0ca0\xf6 bar b\xe5\x7a q\xfcx' // 'fಠö bar båz qüx'
			}
		],
		'domains': [
			{
				'decoded': 'ma\xf1ana.com', // 'mañana.com'
				'encoded': 'xn--maana-pta.com'
			},
			{
				'decoded': 'b\xfccher.com', // 'bücher.com'
				'encoded': 'xn--bcher-kva.com'
			},
			{
				'decoded': 'caf\xe9.com', // 'café.com'
				'encoded': 'xn--caf-dma.com'
			},
			{
				'decoded': '\u2603-\u2318.com', // '☃-⌘.com'
				'encoded': 'xn----dqo34k.com'
			},
			{
				'decoded': '\ud400\u2603-\u2318.com', // '퐀☃-⌘.com'
				'encoded': 'xn----dqo34kn65z.com'
			},
			{
				'description': 'Emoji',
				'decoded': '\ud83d\udca9.la', // '������.la'
				'encoded': 'xn--ls8h.la'
			}
		]
	};

	/*--------------------------------------------------------------------------*/

	// simple `Array#forEach`-like helper function
	function each(array, fn) {
		var length = array.length;
		while (length--) {
			fn(array[length]);
		}
	}

	/*--------------------------------------------------------------------------*/

	test('punycode.ucs2.decode', function() {
		each(testData.ucs2, function(object) {
			deepEqual(punycode.ucs2.decode(object.encoded), object.decoded, object.description);
		});
	});

	test('punycode.ucs2.encode', function() {
		each(testData.ucs2, function(object) {
			equal(punycode.ucs2.encode(object.decoded), object.encoded, object.description);
		});
	});

	test('punycode.decode', function() {
		each(testData.strings, function(object) {
			equal(punycode.decode(object.encoded), object.decoded, object.description);
		});
	});

	test('punycode.encode', function() {
		each(testData.strings, function(object) {
			equal(punycode.encode(object.decoded), object.encoded, object.description);
		});
	});

	test('punycode.toUnicode', function() {
		each(testData.domains, function(object) {
			equal(punycode.toUnicode(object.encoded), object.decoded, object.description);
		});
		/**
		 * Domain names (or other strings) that don’t start with `xn--` may not be
		 * converted.
		 */
		each(testData.strings, function(object) {
			var message = 'Domain names (or other strings) that don’t start with `xn--` may not be converted';
			equal(punycode.toUnicode(object.encoded), object.encoded, message);
			equal(punycode.toUnicode(object.decoded), object.decoded, message);
		});
	});

	test('punycode.toASCII', function() {
		each(testData.domains, function(object) {
			equal(punycode.toASCII(object.decoded), object.encoded, object.description);
		});
		/**
		 * Domain names (or other strings) that are already in ASCII may not be
		 * converted.
		 */
		each(testData.strings, function(object) {
			equal(punycode.toASCII(object.encoded), object.encoded, 'Domain names (or other strings) that are already in ASCII may not be converted');
		});
	});

	if (root.document && root.require) {
		test('require(\'punycode\')', function() {
			equal((punycode2 || {}).version, punycode.version, 'require(\'punycode\')');
		});
	}

	/*--------------------------------------------------------------------------*/

	// explicitly call `QUnit.start()` in a CLI environment
	if (!root.document) {
		QUnit.start();
	}

}(typeof global == 'object' && global || this));