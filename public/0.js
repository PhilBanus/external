(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/chart.js/dist/Chart.js":
/*!*********************************************!*\
  !*** ./node_modules/chart.js/dist/Chart.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chart.js v2.9.3
 * https://www.chartjs.org
 * (c) 2019 Chart.js Contributors
 * Released under the MIT License
 */
(function (global, factory) {
 true ? module.exports = factory(function() { try { return __webpack_require__(/*! moment */ "./node_modules/moment/moment.js"); } catch(e) { } }()) :
undefined;
}(this, (function (moment) { 'use strict';

moment = moment && moment.hasOwnProperty('default') ? moment['default'] : moment;

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace (n) {
	return n && n['default'] || n;
}

var colorName = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

var conversions = createCommonjsModule(function (module) {
/* MIT license */


// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in colorName) {
	if (colorName.hasOwnProperty(key)) {
		reverseKeywords[colorName[key]] = key;
	}
}

var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

// hide .channels and .labels properties
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}

convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	var rdif;
	var gdif;
	var bdif;
	var h;
	var s;

	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var v = Math.max(r, g, b);
	var diff = v - Math.min(r, g, b);
	var diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}
		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100
	];
};

convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}

convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	var currentClosestDistance = Infinity;
	var currentClosestKeyword;

	for (var keyword in colorName) {
		if (colorName.hasOwnProperty(keyword)) {
			var value = colorName[keyword];

			// Compute comparative distance
			var distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return colorName[keyword];
};

convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	t1 = 2 * l - t2;

	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;

	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;

	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;

	// wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	n = wh + f * (v - wh); // linear interpolation

	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;

	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// assume sRGB
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;

	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];

	// we use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	var color = args % 10;

	// handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// handle greyscale
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	var colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}

	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;

	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}

	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;

	var c = s * v;
	var f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;

	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var v = c + g * (1.0 - c);
	var f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};
});
var conversions_1 = conversions.rgb;
var conversions_2 = conversions.hsl;
var conversions_3 = conversions.hsv;
var conversions_4 = conversions.hwb;
var conversions_5 = conversions.cmyk;
var conversions_6 = conversions.xyz;
var conversions_7 = conversions.lab;
var conversions_8 = conversions.lch;
var conversions_9 = conversions.hex;
var conversions_10 = conversions.keyword;
var conversions_11 = conversions.ansi16;
var conversions_12 = conversions.ansi256;
var conversions_13 = conversions.hcg;
var conversions_14 = conversions.apple;
var conversions_15 = conversions.gray;

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	var graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	var models = Object.keys(conversions);

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

var route = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

var colorConvert = convert;

var colorName$1 = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

/* MIT license */


var colorString = {
   getRgba: getRgba,
   getHsla: getHsla,
   getRgb: getRgb,
   getHsl: getHsl,
   getHwb: getHwb,
   getAlpha: getAlpha,

   hexString: hexString,
   rgbString: rgbString,
   rgbaString: rgbaString,
   percentString: percentString,
   percentaString: percentaString,
   hslString: hslString,
   hslaString: hslaString,
   hwbString: hwbString,
   keyword: keyword
};

function getRgba(string) {
   if (!string) {
      return;
   }
   var abbr =  /^#([a-fA-F0-9]{3,4})$/i,
       hex =  /^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i,
       rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
       per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
       keyword = /(\w+)/;

   var rgb = [0, 0, 0],
       a = 1,
       match = string.match(abbr),
       hexAlpha = "";
   if (match) {
      match = match[1];
      hexAlpha = match[3];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i] + match[i], 16);
      }
      if (hexAlpha) {
         a = Math.round((parseInt(hexAlpha + hexAlpha, 16) / 255) * 100) / 100;
      }
   }
   else if (match = string.match(hex)) {
      hexAlpha = match[2];
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
      }
      if (hexAlpha) {
         a = Math.round((parseInt(hexAlpha, 16) / 255) * 100) / 100;
      }
   }
   else if (match = string.match(rgba)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i + 1]);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(per)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(keyword)) {
      if (match[1] == "transparent") {
         return [0, 0, 0, 0];
      }
      rgb = colorName$1[match[1]];
      if (!rgb) {
         return;
      }
   }

   for (var i = 0; i < rgb.length; i++) {
      rgb[i] = scale(rgb[i], 0, 255);
   }
   if (!a && a != 0) {
      a = 1;
   }
   else {
      a = scale(a, 0, 1);
   }
   rgb[3] = a;
   return rgb;
}

function getHsla(string) {
   if (!string) {
      return;
   }
   var hsl = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hsl);
   if (match) {
      var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          s = scale(parseFloat(match[2]), 0, 100),
          l = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, s, l, a];
   }
}

function getHwb(string) {
   if (!string) {
      return;
   }
   var hwb = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hwb);
   if (match) {
    var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          w = scale(parseFloat(match[2]), 0, 100),
          b = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, w, b, a];
   }
}

function getRgb(string) {
   var rgba = getRgba(string);
   return rgba && rgba.slice(0, 3);
}

function getHsl(string) {
  var hsla = getHsla(string);
  return hsla && hsla.slice(0, 3);
}

function getAlpha(string) {
   var vals = getRgba(string);
   if (vals) {
      return vals[3];
   }
   else if (vals = getHsla(string)) {
      return vals[3];
   }
   else if (vals = getHwb(string)) {
      return vals[3];
   }
}

// generators
function hexString(rgba, a) {
   var a = (a !== undefined && rgba.length === 3) ? a : rgba[3];
   return "#" + hexDouble(rgba[0]) 
              + hexDouble(rgba[1])
              + hexDouble(rgba[2])
              + (
                 (a >= 0 && a < 1)
                 ? hexDouble(Math.round(a * 255))
                 : ""
              );
}

function rgbString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return rgbaString(rgba, alpha);
   }
   return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
}

function rgbaString(rgba, alpha) {
   if (alpha === undefined) {
      alpha = (rgba[3] !== undefined ? rgba[3] : 1);
   }
   return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2]
           + ", " + alpha + ")";
}

function percentString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return percentaString(rgba, alpha);
   }
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);

   return "rgb(" + r + "%, " + g + "%, " + b + "%)";
}

function percentaString(rgba, alpha) {
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);
   return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alpha || rgba[3] || 1) + ")";
}

function hslString(hsla, alpha) {
   if (alpha < 1 || (hsla[3] && hsla[3] < 1)) {
      return hslaString(hsla, alpha);
   }
   return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";
}

function hslaString(hsla, alpha) {
   if (alpha === undefined) {
      alpha = (hsla[3] !== undefined ? hsla[3] : 1);
   }
   return "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, "
           + alpha + ")";
}

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
function hwbString(hwb, alpha) {
   if (alpha === undefined) {
      alpha = (hwb[3] !== undefined ? hwb[3] : 1);
   }
   return "hwb(" + hwb[0] + ", " + hwb[1] + "%, " + hwb[2] + "%"
           + (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") + ")";
}

function keyword(rgb) {
  return reverseNames[rgb.slice(0, 3)];
}

// helpers
function scale(num, min, max) {
   return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
  var str = num.toString(16).toUpperCase();
  return (str.length < 2) ? "0" + str : str;
}


//create a list of reverse color names
var reverseNames = {};
for (var name in colorName$1) {
   reverseNames[colorName$1[name]] = name;
}

/* MIT license */



var Color = function (obj) {
	if (obj instanceof Color) {
		return obj;
	}
	if (!(this instanceof Color)) {
		return new Color(obj);
	}

	this.valid = false;
	this.values = {
		rgb: [0, 0, 0],
		hsl: [0, 0, 0],
		hsv: [0, 0, 0],
		hwb: [0, 0, 0],
		cmyk: [0, 0, 0, 0],
		alpha: 1
	};

	// parse Color() argument
	var vals;
	if (typeof obj === 'string') {
		vals = colorString.getRgba(obj);
		if (vals) {
			this.setValues('rgb', vals);
		} else if (vals = colorString.getHsla(obj)) {
			this.setValues('hsl', vals);
		} else if (vals = colorString.getHwb(obj)) {
			this.setValues('hwb', vals);
		}
	} else if (typeof obj === 'object') {
		vals = obj;
		if (vals.r !== undefined || vals.red !== undefined) {
			this.setValues('rgb', vals);
		} else if (vals.l !== undefined || vals.lightness !== undefined) {
			this.setValues('hsl', vals);
		} else if (vals.v !== undefined || vals.value !== undefined) {
			this.setValues('hsv', vals);
		} else if (vals.w !== undefined || vals.whiteness !== undefined) {
			this.setValues('hwb', vals);
		} else if (vals.c !== undefined || vals.cyan !== undefined) {
			this.setValues('cmyk', vals);
		}
	}
};

Color.prototype = {
	isValid: function () {
		return this.valid;
	},
	rgb: function () {
		return this.setSpace('rgb', arguments);
	},
	hsl: function () {
		return this.setSpace('hsl', arguments);
	},
	hsv: function () {
		return this.setSpace('hsv', arguments);
	},
	hwb: function () {
		return this.setSpace('hwb', arguments);
	},
	cmyk: function () {
		return this.setSpace('cmyk', arguments);
	},

	rgbArray: function () {
		return this.values.rgb;
	},
	hslArray: function () {
		return this.values.hsl;
	},
	hsvArray: function () {
		return this.values.hsv;
	},
	hwbArray: function () {
		var values = this.values;
		if (values.alpha !== 1) {
			return values.hwb.concat([values.alpha]);
		}
		return values.hwb;
	},
	cmykArray: function () {
		return this.values.cmyk;
	},
	rgbaArray: function () {
		var values = this.values;
		return values.rgb.concat([values.alpha]);
	},
	hslaArray: function () {
		var values = this.values;
		return values.hsl.concat([values.alpha]);
	},
	alpha: function (val) {
		if (val === undefined) {
			return this.values.alpha;
		}
		this.setValues('alpha', val);
		return this;
	},

	red: function (val) {
		return this.setChannel('rgb', 0, val);
	},
	green: function (val) {
		return this.setChannel('rgb', 1, val);
	},
	blue: function (val) {
		return this.setChannel('rgb', 2, val);
	},
	hue: function (val) {
		if (val) {
			val %= 360;
			val = val < 0 ? 360 + val : val;
		}
		return this.setChannel('hsl', 0, val);
	},
	saturation: function (val) {
		return this.setChannel('hsl', 1, val);
	},
	lightness: function (val) {
		return this.setChannel('hsl', 2, val);
	},
	saturationv: function (val) {
		return this.setChannel('hsv', 1, val);
	},
	whiteness: function (val) {
		return this.setChannel('hwb', 1, val);
	},
	blackness: function (val) {
		return this.setChannel('hwb', 2, val);
	},
	value: function (val) {
		return this.setChannel('hsv', 2, val);
	},
	cyan: function (val) {
		return this.setChannel('cmyk', 0, val);
	},
	magenta: function (val) {
		return this.setChannel('cmyk', 1, val);
	},
	yellow: function (val) {
		return this.setChannel('cmyk', 2, val);
	},
	black: function (val) {
		return this.setChannel('cmyk', 3, val);
	},

	hexString: function () {
		return colorString.hexString(this.values.rgb);
	},
	rgbString: function () {
		return colorString.rgbString(this.values.rgb, this.values.alpha);
	},
	rgbaString: function () {
		return colorString.rgbaString(this.values.rgb, this.values.alpha);
	},
	percentString: function () {
		return colorString.percentString(this.values.rgb, this.values.alpha);
	},
	hslString: function () {
		return colorString.hslString(this.values.hsl, this.values.alpha);
	},
	hslaString: function () {
		return colorString.hslaString(this.values.hsl, this.values.alpha);
	},
	hwbString: function () {
		return colorString.hwbString(this.values.hwb, this.values.alpha);
	},
	keyword: function () {
		return colorString.keyword(this.values.rgb, this.values.alpha);
	},

	rgbNumber: function () {
		var rgb = this.values.rgb;
		return (rgb[0] << 16) | (rgb[1] << 8) | rgb[2];
	},

	luminosity: function () {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		var rgb = this.values.rgb;
		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}
		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function (color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();
		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}
		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	dark: function () {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		var rgb = this.values.rgb;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	light: function () {
		return !this.dark();
	},

	negate: function () {
		var rgb = [];
		for (var i = 0; i < 3; i++) {
			rgb[i] = 255 - this.values.rgb[i];
		}
		this.setValues('rgb', rgb);
		return this;
	},

	lighten: function (ratio) {
		var hsl = this.values.hsl;
		hsl[2] += hsl[2] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	darken: function (ratio) {
		var hsl = this.values.hsl;
		hsl[2] -= hsl[2] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	saturate: function (ratio) {
		var hsl = this.values.hsl;
		hsl[1] += hsl[1] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	desaturate: function (ratio) {
		var hsl = this.values.hsl;
		hsl[1] -= hsl[1] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	whiten: function (ratio) {
		var hwb = this.values.hwb;
		hwb[1] += hwb[1] * ratio;
		this.setValues('hwb', hwb);
		return this;
	},

	blacken: function (ratio) {
		var hwb = this.values.hwb;
		hwb[2] += hwb[2] * ratio;
		this.setValues('hwb', hwb);
		return this;
	},

	greyscale: function () {
		var rgb = this.values.rgb;
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		this.setValues('rgb', [val, val, val]);
		return this;
	},

	clearer: function (ratio) {
		var alpha = this.values.alpha;
		this.setValues('alpha', alpha - (alpha * ratio));
		return this;
	},

	opaquer: function (ratio) {
		var alpha = this.values.alpha;
		this.setValues('alpha', alpha + (alpha * ratio));
		return this;
	},

	rotate: function (degrees) {
		var hsl = this.values.hsl;
		var hue = (hsl[0] + degrees) % 360;
		hsl[0] = hue < 0 ? 360 + hue : hue;
		this.setValues('hsl', hsl);
		return this;
	},

	/**
	 * Ported from sass implementation in C
	 * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
	 */
	mix: function (mixinColor, weight) {
		var color1 = this;
		var color2 = mixinColor;
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return this
			.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue()
			)
			.alpha(color1.alpha() * p + color2.alpha() * (1 - p));
	},

	toJSON: function () {
		return this.rgb();
	},

	clone: function () {
		// NOTE(SB): using node-clone creates a dependency to Buffer when using browserify,
		// making the final build way to big to embed in Chart.js. So let's do it manually,
		// assuming that values to clone are 1 dimension arrays containing only numbers,
		// except 'alpha' which is a number.
		var result = new Color();
		var source = this.values;
		var target = result.values;
		var value, type;

		for (var prop in source) {
			if (source.hasOwnProperty(prop)) {
				value = source[prop];
				type = ({}).toString.call(value);
				if (type === '[object Array]') {
					target[prop] = value.slice(0);
				} else if (type === '[object Number]') {
					target[prop] = value;
				} else {
					console.error('unexpected color value:', value);
				}
			}
		}

		return result;
	}
};

Color.prototype.spaces = {
	rgb: ['red', 'green', 'blue'],
	hsl: ['hue', 'saturation', 'lightness'],
	hsv: ['hue', 'saturation', 'value'],
	hwb: ['hue', 'whiteness', 'blackness'],
	cmyk: ['cyan', 'magenta', 'yellow', 'black']
};

Color.prototype.maxes = {
	rgb: [255, 255, 255],
	hsl: [360, 100, 100],
	hsv: [360, 100, 100],
	hwb: [360, 100, 100],
	cmyk: [100, 100, 100, 100]
};

Color.prototype.getValues = function (space) {
	var values = this.values;
	var vals = {};

	for (var i = 0; i < space.length; i++) {
		vals[space.charAt(i)] = values[space][i];
	}

	if (values.alpha !== 1) {
		vals.a = values.alpha;
	}

	// {r: 255, g: 255, b: 255, a: 0.4}
	return vals;
};

Color.prototype.setValues = function (space, vals) {
	var values = this.values;
	var spaces = this.spaces;
	var maxes = this.maxes;
	var alpha = 1;
	var i;

	this.valid = true;

	if (space === 'alpha') {
		alpha = vals;
	} else if (vals.length) {
		// [10, 10, 10]
		values[space] = vals.slice(0, space.length);
		alpha = vals[space.length];
	} else if (vals[space.charAt(0)] !== undefined) {
		// {r: 10, g: 10, b: 10}
		for (i = 0; i < space.length; i++) {
			values[space][i] = vals[space.charAt(i)];
		}

		alpha = vals.a;
	} else if (vals[spaces[space][0]] !== undefined) {
		// {red: 10, green: 10, blue: 10}
		var chans = spaces[space];

		for (i = 0; i < space.length; i++) {
			values[space][i] = vals[chans[i]];
		}

		alpha = vals.alpha;
	}

	values.alpha = Math.max(0, Math.min(1, (alpha === undefined ? values.alpha : alpha)));

	if (space === 'alpha') {
		return false;
	}

	var capped;

	// cap values of the space prior converting all values
	for (i = 0; i < space.length; i++) {
		capped = Math.max(0, Math.min(maxes[space][i], values[space][i]));
		values[space][i] = Math.round(capped);
	}

	// convert to all the other color spaces
	for (var sname in spaces) {
		if (sname !== space) {
			values[sname] = colorConvert[space][sname](values[space]);
		}
	}

	return true;
};

Color.prototype.setSpace = function (space, args) {
	var vals = args[0];

	if (vals === undefined) {
		// color.rgb()
		return this.getValues(space);
	}

	// color.rgb(10, 10, 10)
	if (typeof vals === 'number') {
		vals = Array.prototype.slice.call(args);
	}

	this.setValues(space, vals);
	return this;
};

Color.prototype.setChannel = function (space, index, val) {
	var svalues = this.values[space];
	if (val === undefined) {
		// color.red()
		return svalues[index];
	} else if (val === svalues[index]) {
		// color.red(color.red())
		return this;
	}

	// color.red(100)
	svalues[index] = val;
	this.setValues(space, svalues);

	return this;
};

if (typeof window !== 'undefined') {
	window.Color = Color;
}

var chartjsColor = Color;

/**
 * @namespace Chart.helpers
 */
var helpers = {
	/**
	 * An empty function that can be used, for example, for optional callback.
	 */
	noop: function() {},

	/**
	 * Returns a unique id, sequentially generated from a global variable.
	 * @returns {number}
	 * @function
	 */
	uid: (function() {
		var id = 0;
		return function() {
			return id++;
		};
	}()),

	/**
	 * Returns true if `value` is neither null nor undefined, else returns false.
	 * @param {*} value - The value to test.
	 * @returns {boolean}
	 * @since 2.7.0
	 */
	isNullOrUndef: function(value) {
		return value === null || typeof value === 'undefined';
	},

	/**
	 * Returns true if `value` is an array (including typed arrays), else returns false.
	 * @param {*} value - The value to test.
	 * @returns {boolean}
	 * @function
	 */
	isArray: function(value) {
		if (Array.isArray && Array.isArray(value)) {
			return true;
		}
		var type = Object.prototype.toString.call(value);
		if (type.substr(0, 7) === '[object' && type.substr(-6) === 'Array]') {
			return true;
		}
		return false;
	},

	/**
	 * Returns true if `value` is an object (excluding null), else returns false.
	 * @param {*} value - The value to test.
	 * @returns {boolean}
	 * @since 2.7.0
	 */
	isObject: function(value) {
		return value !== null && Object.prototype.toString.call(value) === '[object Object]';
	},

	/**
	 * Returns true if `value` is a finite number, else returns false
	 * @param {*} value  - The value to test.
	 * @returns {boolean}
	 */
	isFinite: function(value) {
		return (typeof value === 'number' || value instanceof Number) && isFinite(value);
	},

	/**
	 * Returns `value` if defined, else returns `defaultValue`.
	 * @param {*} value - The value to return if defined.
	 * @param {*} defaultValue - The value to return if `value` is undefined.
	 * @returns {*}
	 */
	valueOrDefault: function(value, defaultValue) {
		return typeof value === 'undefined' ? defaultValue : value;
	},

	/**
	 * Returns value at the given `index` in array if defined, else returns `defaultValue`.
	 * @param {Array} value - The array to lookup for value at `index`.
	 * @param {number} index - The index in `value` to lookup for value.
	 * @param {*} defaultValue - The value to return if `value[index]` is undefined.
	 * @returns {*}
	 */
	valueAtIndexOrDefault: function(value, index, defaultValue) {
		return helpers.valueOrDefault(helpers.isArray(value) ? value[index] : value, defaultValue);
	},

	/**
	 * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
	 * value returned by `fn`. If `fn` is not a function, this method returns undefined.
	 * @param {function} fn - The function to call.
	 * @param {Array|undefined|null} args - The arguments with which `fn` should be called.
	 * @param {object} [thisArg] - The value of `this` provided for the call to `fn`.
	 * @returns {*}
	 */
	callback: function(fn, args, thisArg) {
		if (fn && typeof fn.call === 'function') {
			return fn.apply(thisArg, args);
		}
	},

	/**
	 * Note(SB) for performance sake, this method should only be used when loopable type
	 * is unknown or in none intensive code (not called often and small loopable). Else
	 * it's preferable to use a regular for() loop and save extra function calls.
	 * @param {object|Array} loopable - The object or array to be iterated.
	 * @param {function} fn - The function to call for each item.
	 * @param {object} [thisArg] - The value of `this` provided for the call to `fn`.
	 * @param {boolean} [reverse] - If true, iterates backward on the loopable.
	 */
	each: function(loopable, fn, thisArg, reverse) {
		var i, len, keys;
		if (helpers.isArray(loopable)) {
			len = loopable.length;
			if (reverse) {
				for (i = len - 1; i >= 0; i--) {
					fn.call(thisArg, loopable[i], i);
				}
			} else {
				for (i = 0; i < len; i++) {
					fn.call(thisArg, loopable[i], i);
				}
			}
		} else if (helpers.isObject(loopable)) {
			keys = Object.keys(loopable);
			len = keys.length;
			for (i = 0; i < len; i++) {
				fn.call(thisArg, loopable[keys[i]], keys[i]);
			}
		}
	},

	/**
	 * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
	 * @see https://stackoverflow.com/a/14853974
	 * @param {Array} a0 - The array to compare
	 * @param {Array} a1 - The array to compare
	 * @returns {boolean}
	 */
	arrayEquals: function(a0, a1) {
		var i, ilen, v0, v1;

		if (!a0 || !a1 || a0.length !== a1.length) {
			return false;
		}

		for (i = 0, ilen = a0.length; i < ilen; ++i) {
			v0 = a0[i];
			v1 = a1[i];

			if (v0 instanceof Array && v1 instanceof Array) {
				if (!helpers.arrayEquals(v0, v1)) {
					return false;
				}
			} else if (v0 !== v1) {
				// NOTE: two different object instances will never be equal: {x:20} != {x:20}
				return false;
			}
		}

		return true;
	},

	/**
	 * Returns a deep copy of `source` without keeping references on objects and arrays.
	 * @param {*} source - The value to clone.
	 * @returns {*}
	 */
	clone: function(source) {
		if (helpers.isArray(source)) {
			return source.map(helpers.clone);
		}

		if (helpers.isObject(source)) {
			var target = {};
			var keys = Object.keys(source);
			var klen = keys.length;
			var k = 0;

			for (; k < klen; ++k) {
				target[keys[k]] = helpers.clone(source[keys[k]]);
			}

			return target;
		}

		return source;
	},

	/**
	 * The default merger when Chart.helpers.merge is called without merger option.
	 * Note(SB): also used by mergeConfig and mergeScaleConfig as fallback.
	 * @private
	 */
	_merger: function(key, target, source, options) {
		var tval = target[key];
		var sval = source[key];

		if (helpers.isObject(tval) && helpers.isObject(sval)) {
			helpers.merge(tval, sval, options);
		} else {
			target[key] = helpers.clone(sval);
		}
	},

	/**
	 * Merges source[key] in target[key] only if target[key] is undefined.
	 * @private
	 */
	_mergerIf: function(key, target, source) {
		var tval = target[key];
		var sval = source[key];

		if (helpers.isObject(tval) && helpers.isObject(sval)) {
			helpers.mergeIf(tval, sval);
		} else if (!target.hasOwnProperty(key)) {
			target[key] = helpers.clone(sval);
		}
	},

	/**
	 * Recursively deep copies `source` properties into `target` with the given `options`.
	 * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
	 * @param {object} target - The target object in which all sources are merged into.
	 * @param {object|object[]} source - Object(s) to merge into `target`.
	 * @param {object} [options] - Merging options:
	 * @param {function} [options.merger] - The merge method (key, target, source, options)
	 * @returns {object} The `target` object.
	 */
	merge: function(target, source, options) {
		var sources = helpers.isArray(source) ? source : [source];
		var ilen = sources.length;
		var merge, i, keys, klen, k;

		if (!helpers.isObject(target)) {
			return target;
		}

		options = options || {};
		merge = options.merger || helpers._merger;

		for (i = 0; i < ilen; ++i) {
			source = sources[i];
			if (!helpers.isObject(source)) {
				continue;
			}

			keys = Object.keys(source);
			for (k = 0, klen = keys.length; k < klen; ++k) {
				merge(keys[k], target, source, options);
			}
		}

		return target;
	},

	/**
	 * Recursively deep copies `source` properties into `target` *only* if not defined in target.
	 * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
	 * @param {object} target - The target object in which all sources are merged into.
	 * @param {object|object[]} source - Object(s) to merge into `target`.
	 * @returns {object} The `target` object.
	 */
	mergeIf: function(target, source) {
		return helpers.merge(target, source, {merger: helpers._mergerIf});
	},

	/**
	 * Applies the contents of two or more objects together into the first object.
	 * @param {object} target - The target object in which all objects are merged into.
	 * @param {object} arg1 - Object containing additional properties to merge in target.
	 * @param {object} argN - Additional objects containing properties to merge in target.
	 * @returns {object} The `target` object.
	 */
	extend: Object.assign || function(target) {
		return helpers.merge(target, [].slice.call(arguments, 1), {
			merger: function(key, dst, src) {
				dst[key] = src[key];
			}
		});
	},

	/**
	 * Basic javascript inheritance based on the model created in Backbone.js
	 */
	inherits: function(extensions) {
		var me = this;
		var ChartElement = (extensions && extensions.hasOwnProperty('constructor')) ? extensions.constructor : function() {
			return me.apply(this, arguments);
		};

		var Surrogate = function() {
			this.constructor = ChartElement;
		};

		Surrogate.prototype = me.prototype;
		ChartElement.prototype = new Surrogate();
		ChartElement.extend = helpers.inherits;

		if (extensions) {
			helpers.extend(ChartElement.prototype, extensions);
		}

		ChartElement.__super__ = me.prototype;
		return ChartElement;
	},

	_deprecated: function(scope, value, previous, current) {
		if (value !== undefined) {
			console.warn(scope + ': "' + previous +
				'" is deprecated. Please use "' + current + '" instead');
		}
	}
};

var helpers_core = helpers;

// DEPRECATIONS

/**
 * Provided for backward compatibility, use Chart.helpers.callback instead.
 * @function Chart.helpers.callCallback
 * @deprecated since version 2.6.0
 * @todo remove at version 3
 * @private
 */
helpers.callCallback = helpers.callback;

/**
 * Provided for backward compatibility, use Array.prototype.indexOf instead.
 * Array.prototype.indexOf compatibility: Chrome, Opera, Safari, FF1.5+, IE9+
 * @function Chart.helpers.indexOf
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers.indexOf = function(array, item, fromIndex) {
	return Array.prototype.indexOf.call(array, item, fromIndex);
};

/**
 * Provided for backward compatibility, use Chart.helpers.valueOrDefault instead.
 * @function Chart.helpers.getValueOrDefault
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers.getValueOrDefault = helpers.valueOrDefault;

/**
 * Provided for backward compatibility, use Chart.helpers.valueAtIndexOrDefault instead.
 * @function Chart.helpers.getValueAtIndexOrDefault
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers.getValueAtIndexOrDefault = helpers.valueAtIndexOrDefault;

/**
 * Easing functions adapted from Robert Penner's easing equations.
 * @namespace Chart.helpers.easingEffects
 * @see http://www.robertpenner.com/easing/
 */
var effects = {
	linear: function(t) {
		return t;
	},

	easeInQuad: function(t) {
		return t * t;
	},

	easeOutQuad: function(t) {
		return -t * (t - 2);
	},

	easeInOutQuad: function(t) {
		if ((t /= 0.5) < 1) {
			return 0.5 * t * t;
		}
		return -0.5 * ((--t) * (t - 2) - 1);
	},

	easeInCubic: function(t) {
		return t * t * t;
	},

	easeOutCubic: function(t) {
		return (t = t - 1) * t * t + 1;
	},

	easeInOutCubic: function(t) {
		if ((t /= 0.5) < 1) {
			return 0.5 * t * t * t;
		}
		return 0.5 * ((t -= 2) * t * t + 2);
	},

	easeInQuart: function(t) {
		return t * t * t * t;
	},

	easeOutQuart: function(t) {
		return -((t = t - 1) * t * t * t - 1);
	},

	easeInOutQuart: function(t) {
		if ((t /= 0.5) < 1) {
			return 0.5 * t * t * t * t;
		}
		return -0.5 * ((t -= 2) * t * t * t - 2);
	},

	easeInQuint: function(t) {
		return t * t * t * t * t;
	},

	easeOutQuint: function(t) {
		return (t = t - 1) * t * t * t * t + 1;
	},

	easeInOutQuint: function(t) {
		if ((t /= 0.5) < 1) {
			return 0.5 * t * t * t * t * t;
		}
		return 0.5 * ((t -= 2) * t * t * t * t + 2);
	},

	easeInSine: function(t) {
		return -Math.cos(t * (Math.PI / 2)) + 1;
	},

	easeOutSine: function(t) {
		return Math.sin(t * (Math.PI / 2));
	},

	easeInOutSine: function(t) {
		return -0.5 * (Math.cos(Math.PI * t) - 1);
	},

	easeInExpo: function(t) {
		return (t === 0) ? 0 : Math.pow(2, 10 * (t - 1));
	},

	easeOutExpo: function(t) {
		return (t === 1) ? 1 : -Math.pow(2, -10 * t) + 1;
	},

	easeInOutExpo: function(t) {
		if (t === 0) {
			return 0;
		}
		if (t === 1) {
			return 1;
		}
		if ((t /= 0.5) < 1) {
			return 0.5 * Math.pow(2, 10 * (t - 1));
		}
		return 0.5 * (-Math.pow(2, -10 * --t) + 2);
	},

	easeInCirc: function(t) {
		if (t >= 1) {
			return t;
		}
		return -(Math.sqrt(1 - t * t) - 1);
	},

	easeOutCirc: function(t) {
		return Math.sqrt(1 - (t = t - 1) * t);
	},

	easeInOutCirc: function(t) {
		if ((t /= 0.5) < 1) {
			return -0.5 * (Math.sqrt(1 - t * t) - 1);
		}
		return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
	},

	easeInElastic: function(t) {
		var s = 1.70158;
		var p = 0;
		var a = 1;
		if (t === 0) {
			return 0;
		}
		if (t === 1) {
			return 1;
		}
		if (!p) {
			p = 0.3;
		}
		if (a < 1) {
			a = 1;
			s = p / 4;
		} else {
			s = p / (2 * Math.PI) * Math.asin(1 / a);
		}
		return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
	},

	easeOutElastic: function(t) {
		var s = 1.70158;
		var p = 0;
		var a = 1;
		if (t === 0) {
			return 0;
		}
		if (t === 1) {
			return 1;
		}
		if (!p) {
			p = 0.3;
		}
		if (a < 1) {
			a = 1;
			s = p / 4;
		} else {
			s = p / (2 * Math.PI) * Math.asin(1 / a);
		}
		return a * Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1;
	},

	easeInOutElastic: function(t) {
		var s = 1.70158;
		var p = 0;
		var a = 1;
		if (t === 0) {
			return 0;
		}
		if ((t /= 0.5) === 2) {
			return 1;
		}
		if (!p) {
			p = 0.45;
		}
		if (a < 1) {
			a = 1;
			s = p / 4;
		} else {
			s = p / (2 * Math.PI) * Math.asin(1 / a);
		}
		if (t < 1) {
			return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
		}
		return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p) * 0.5 + 1;
	},
	easeInBack: function(t) {
		var s = 1.70158;
		return t * t * ((s + 1) * t - s);
	},

	easeOutBack: function(t) {
		var s = 1.70158;
		return (t = t - 1) * t * ((s + 1) * t + s) + 1;
	},

	easeInOutBack: function(t) {
		var s = 1.70158;
		if ((t /= 0.5) < 1) {
			return 0.5 * (t * t * (((s *= (1.525)) + 1) * t - s));
		}
		return 0.5 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
	},

	easeInBounce: function(t) {
		return 1 - effects.easeOutBounce(1 - t);
	},

	easeOutBounce: function(t) {
		if (t < (1 / 2.75)) {
			return 7.5625 * t * t;
		}
		if (t < (2 / 2.75)) {
			return 7.5625 * (t -= (1.5 / 2.75)) * t + 0.75;
		}
		if (t < (2.5 / 2.75)) {
			return 7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375;
		}
		return 7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375;
	},

	easeInOutBounce: function(t) {
		if (t < 0.5) {
			return effects.easeInBounce(t * 2) * 0.5;
		}
		return effects.easeOutBounce(t * 2 - 1) * 0.5 + 0.5;
	}
};

var helpers_easing = {
	effects: effects
};

// DEPRECATIONS

/**
 * Provided for backward compatibility, use Chart.helpers.easing.effects instead.
 * @function Chart.helpers.easingEffects
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers_core.easingEffects = effects;

var PI = Math.PI;
var RAD_PER_DEG = PI / 180;
var DOUBLE_PI = PI * 2;
var HALF_PI = PI / 2;
var QUARTER_PI = PI / 4;
var TWO_THIRDS_PI = PI * 2 / 3;

/**
 * @namespace Chart.helpers.canvas
 */
var exports$1 = {
	/**
	 * Clears the entire canvas associated to the given `chart`.
	 * @param {Chart} chart - The chart for which to clear the canvas.
	 */
	clear: function(chart) {
		chart.ctx.clearRect(0, 0, chart.width, chart.height);
	},

	/**
	 * Creates a "path" for a rectangle with rounded corners at position (x, y) with a
	 * given size (width, height) and the same `radius` for all corners.
	 * @param {CanvasRenderingContext2D} ctx - The canvas 2D Context.
	 * @param {number} x - The x axis of the coordinate for the rectangle starting point.
	 * @param {number} y - The y axis of the coordinate for the rectangle starting point.
	 * @param {number} width - The rectangle's width.
	 * @param {number} height - The rectangle's height.
	 * @param {number} radius - The rounded amount (in pixels) for the four corners.
	 * @todo handle `radius` as top-left, top-right, bottom-right, bottom-left array/object?
	 */
	roundedRect: function(ctx, x, y, width, height, radius) {
		if (radius) {
			var r = Math.min(radius, height / 2, width / 2);
			var left = x + r;
			var top = y + r;
			var right = x + width - r;
			var bottom = y + height - r;

			ctx.moveTo(x, top);
			if (left < right && top < bottom) {
				ctx.arc(left, top, r, -PI, -HALF_PI);
				ctx.arc(right, top, r, -HALF_PI, 0);
				ctx.arc(right, bottom, r, 0, HALF_PI);
				ctx.arc(left, bottom, r, HALF_PI, PI);
			} else if (left < right) {
				ctx.moveTo(left, y);
				ctx.arc(right, top, r, -HALF_PI, HALF_PI);
				ctx.arc(left, top, r, HALF_PI, PI + HALF_PI);
			} else if (top < bottom) {
				ctx.arc(left, top, r, -PI, 0);
				ctx.arc(left, bottom, r, 0, PI);
			} else {
				ctx.arc(left, top, r, -PI, PI);
			}
			ctx.closePath();
			ctx.moveTo(x, y);
		} else {
			ctx.rect(x, y, width, height);
		}
	},

	drawPoint: function(ctx, style, radius, x, y, rotation) {
		var type, xOffset, yOffset, size, cornerRadius;
		var rad = (rotation || 0) * RAD_PER_DEG;

		if (style && typeof style === 'object') {
			type = style.toString();
			if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
				ctx.save();
				ctx.translate(x, y);
				ctx.rotate(rad);
				ctx.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height);
				ctx.restore();
				return;
			}
		}

		if (isNaN(radius) || radius <= 0) {
			return;
		}

		ctx.beginPath();

		switch (style) {
		// Default includes circle
		default:
			ctx.arc(x, y, radius, 0, DOUBLE_PI);
			ctx.closePath();
			break;
		case 'triangle':
			ctx.moveTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
			rad += TWO_THIRDS_PI;
			ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
			rad += TWO_THIRDS_PI;
			ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
			ctx.closePath();
			break;
		case 'rectRounded':
			// NOTE: the rounded rect implementation changed to use `arc` instead of
			// `quadraticCurveTo` since it generates better results when rect is
			// almost a circle. 0.516 (instead of 0.5) produces results with visually
			// closer proportion to the previous impl and it is inscribed in the
			// circle with `radius`. For more details, see the following PRs:
			// https://github.com/chartjs/Chart.js/issues/5597
			// https://github.com/chartjs/Chart.js/issues/5858
			cornerRadius = radius * 0.516;
			size = radius - cornerRadius;
			xOffset = Math.cos(rad + QUARTER_PI) * size;
			yOffset = Math.sin(rad + QUARTER_PI) * size;
			ctx.arc(x - xOffset, y - yOffset, cornerRadius, rad - PI, rad - HALF_PI);
			ctx.arc(x + yOffset, y - xOffset, cornerRadius, rad - HALF_PI, rad);
			ctx.arc(x + xOffset, y + yOffset, cornerRadius, rad, rad + HALF_PI);
			ctx.arc(x - yOffset, y + xOffset, cornerRadius, rad + HALF_PI, rad + PI);
			ctx.closePath();
			break;
		case 'rect':
			if (!rotation) {
				size = Math.SQRT1_2 * radius;
				ctx.rect(x - size, y - size, 2 * size, 2 * size);
				break;
			}
			rad += QUARTER_PI;
			/* falls through */
		case 'rectRot':
			xOffset = Math.cos(rad) * radius;
			yOffset = Math.sin(rad) * radius;
			ctx.moveTo(x - xOffset, y - yOffset);
			ctx.lineTo(x + yOffset, y - xOffset);
			ctx.lineTo(x + xOffset, y + yOffset);
			ctx.lineTo(x - yOffset, y + xOffset);
			ctx.closePath();
			break;
		case 'crossRot':
			rad += QUARTER_PI;
			/* falls through */
		case 'cross':
			xOffset = Math.cos(rad) * radius;
			yOffset = Math.sin(rad) * radius;
			ctx.moveTo(x - xOffset, y - yOffset);
			ctx.lineTo(x + xOffset, y + yOffset);
			ctx.moveTo(x + yOffset, y - xOffset);
			ctx.lineTo(x - yOffset, y + xOffset);
			break;
		case 'star':
			xOffset = Math.cos(rad) * radius;
			yOffset = Math.sin(rad) * radius;
			ctx.moveTo(x - xOffset, y - yOffset);
			ctx.lineTo(x + xOffset, y + yOffset);
			ctx.moveTo(x + yOffset, y - xOffset);
			ctx.lineTo(x - yOffset, y + xOffset);
			rad += QUARTER_PI;
			xOffset = Math.cos(rad) * radius;
			yOffset = Math.sin(rad) * radius;
			ctx.moveTo(x - xOffset, y - yOffset);
			ctx.lineTo(x + xOffset, y + yOffset);
			ctx.moveTo(x + yOffset, y - xOffset);
			ctx.lineTo(x - yOffset, y + xOffset);
			break;
		case 'line':
			xOffset = Math.cos(rad) * radius;
			yOffset = Math.sin(rad) * radius;
			ctx.moveTo(x - xOffset, y - yOffset);
			ctx.lineTo(x + xOffset, y + yOffset);
			break;
		case 'dash':
			ctx.moveTo(x, y);
			ctx.lineTo(x + Math.cos(rad) * radius, y + Math.sin(rad) * radius);
			break;
		}

		ctx.fill();
		ctx.stroke();
	},

	/**
	 * Returns true if the point is inside the rectangle
	 * @param {object} point - The point to test
	 * @param {object} area - The rectangle
	 * @returns {boolean}
	 * @private
	 */
	_isPointInArea: function(point, area) {
		var epsilon = 1e-6; // 1e-6 is margin in pixels for accumulated error.

		return point.x > area.left - epsilon && point.x < area.right + epsilon &&
			point.y > area.top - epsilon && point.y < area.bottom + epsilon;
	},

	clipArea: function(ctx, area) {
		ctx.save();
		ctx.beginPath();
		ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
		ctx.clip();
	},

	unclipArea: function(ctx) {
		ctx.restore();
	},

	lineTo: function(ctx, previous, target, flip) {
		var stepped = target.steppedLine;
		if (stepped) {
			if (stepped === 'middle') {
				var midpoint = (previous.x + target.x) / 2.0;
				ctx.lineTo(midpoint, flip ? target.y : previous.y);
				ctx.lineTo(midpoint, flip ? previous.y : target.y);
			} else if ((stepped === 'after' && !flip) || (stepped !== 'after' && flip)) {
				ctx.lineTo(previous.x, target.y);
			} else {
				ctx.lineTo(target.x, previous.y);
			}
			ctx.lineTo(target.x, target.y);
			return;
		}

		if (!target.tension) {
			ctx.lineTo(target.x, target.y);
			return;
		}

		ctx.bezierCurveTo(
			flip ? previous.controlPointPreviousX : previous.controlPointNextX,
			flip ? previous.controlPointPreviousY : previous.controlPointNextY,
			flip ? target.controlPointNextX : target.controlPointPreviousX,
			flip ? target.controlPointNextY : target.controlPointPreviousY,
			target.x,
			target.y);
	}
};

var helpers_canvas = exports$1;

// DEPRECATIONS

/**
 * Provided for backward compatibility, use Chart.helpers.canvas.clear instead.
 * @namespace Chart.helpers.clear
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers_core.clear = exports$1.clear;

/**
 * Provided for backward compatibility, use Chart.helpers.canvas.roundedRect instead.
 * @namespace Chart.helpers.drawRoundedRectangle
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers_core.drawRoundedRectangle = function(ctx) {
	ctx.beginPath();
	exports$1.roundedRect.apply(exports$1, arguments);
};

var defaults = {
	/**
	 * @private
	 */
	_set: function(scope, values) {
		return helpers_core.merge(this[scope] || (this[scope] = {}), values);
	}
};

// TODO(v3): remove 'global' from namespace.  all default are global and
// there's inconsistency around which options are under 'global'
defaults._set('global', {
	defaultColor: 'rgba(0,0,0,0.1)',
	defaultFontColor: '#666',
	defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
	defaultFontSize: 12,
	defaultFontStyle: 'normal',
	defaultLineHeight: 1.2,
	showLines: true
});

var core_defaults = defaults;

var valueOrDefault = helpers_core.valueOrDefault;

/**
 * Converts the given font object into a CSS font string.
 * @param {object} font - A font object.
 * @return {string} The CSS font string. See https://developer.mozilla.org/en-US/docs/Web/CSS/font
 * @private
 */
function toFontString(font) {
	if (!font || helpers_core.isNullOrUndef(font.size) || helpers_core.isNullOrUndef(font.family)) {
		return null;
	}

	return (font.style ? font.style + ' ' : '')
		+ (font.weight ? font.weight + ' ' : '')
		+ font.size + 'px '
		+ font.family;
}

/**
 * @alias Chart.helpers.options
 * @namespace
 */
var helpers_options = {
	/**
	 * Converts the given line height `value` in pixels for a specific font `size`.
	 * @param {number|string} value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
	 * @param {number} size - The font size (in pixels) used to resolve relative `value`.
	 * @returns {number} The effective line height in pixels (size * 1.2 if value is invalid).
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
	 * @since 2.7.0
	 */
	toLineHeight: function(value, size) {
		var matches = ('' + value).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
		if (!matches || matches[1] === 'normal') {
			return size * 1.2;
		}

		value = +matches[2];

		switch (matches[3]) {
		case 'px':
			return value;
		case '%':
			value /= 100;
			break;
		}

		return size * value;
	},

	/**
	 * Converts the given value into a padding object with pre-computed width/height.
	 * @param {number|object} value - If a number, set the value to all TRBL component,
	 *  else, if and object, use defined properties and sets undefined ones to 0.
	 * @returns {object} The padding values (top, right, bottom, left, width, height)
	 * @since 2.7.0
	 */
	toPadding: function(value) {
		var t, r, b, l;

		if (helpers_core.isObject(value)) {
			t = +value.top || 0;
			r = +value.right || 0;
			b = +value.bottom || 0;
			l = +value.left || 0;
		} else {
			t = r = b = l = +value || 0;
		}

		return {
			top: t,
			right: r,
			bottom: b,
			left: l,
			height: t + b,
			width: l + r
		};
	},

	/**
	 * Parses font options and returns the font object.
	 * @param {object} options - A object that contains font options to be parsed.
	 * @return {object} The font object.
	 * @todo Support font.* options and renamed to toFont().
	 * @private
	 */
	_parseFont: function(options) {
		var globalDefaults = core_defaults.global;
		var size = valueOrDefault(options.fontSize, globalDefaults.defaultFontSize);
		var font = {
			family: valueOrDefault(options.fontFamily, globalDefaults.defaultFontFamily),
			lineHeight: helpers_core.options.toLineHeight(valueOrDefault(options.lineHeight, globalDefaults.defaultLineHeight), size),
			size: size,
			style: valueOrDefault(options.fontStyle, globalDefaults.defaultFontStyle),
			weight: null,
			string: ''
		};

		font.string = toFontString(font);
		return font;
	},

	/**
	 * Evaluates the given `inputs` sequentially and returns the first defined value.
	 * @param {Array} inputs - An array of values, falling back to the last value.
	 * @param {object} [context] - If defined and the current value is a function, the value
	 * is called with `context` as first argument and the result becomes the new input.
	 * @param {number} [index] - If defined and the current value is an array, the value
	 * at `index` become the new input.
	 * @param {object} [info] - object to return information about resolution in
	 * @param {boolean} [info.cacheable] - Will be set to `false` if option is not cacheable.
	 * @since 2.7.0
	 */
	resolve: function(inputs, context, index, info) {
		var cacheable = true;
		var i, ilen, value;

		for (i = 0, ilen = inputs.length; i < ilen; ++i) {
			value = inputs[i];
			if (value === undefined) {
				continue;
			}
			if (context !== undefined && typeof value === 'function') {
				value = value(context);
				cacheable = false;
			}
			if (index !== undefined && helpers_core.isArray(value)) {
				value = value[index];
				cacheable = false;
			}
			if (value !== undefined) {
				if (info && !cacheable) {
					info.cacheable = false;
				}
				return value;
			}
		}
	}
};

/**
 * @alias Chart.helpers.math
 * @namespace
 */
var exports$2 = {
	/**
	 * Returns an array of factors sorted from 1 to sqrt(value)
	 * @private
	 */
	_factorize: function(value) {
		var result = [];
		var sqrt = Math.sqrt(value);
		var i;

		for (i = 1; i < sqrt; i++) {
			if (value % i === 0) {
				result.push(i);
				result.push(value / i);
			}
		}
		if (sqrt === (sqrt | 0)) { // if value is a square number
			result.push(sqrt);
		}

		result.sort(function(a, b) {
			return a - b;
		}).pop();
		return result;
	},

	log10: Math.log10 || function(x) {
		var exponent = Math.log(x) * Math.LOG10E; // Math.LOG10E = 1 / Math.LN10.
		// Check for whole powers of 10,
		// which due to floating point rounding error should be corrected.
		var powerOf10 = Math.round(exponent);
		var isPowerOf10 = x === Math.pow(10, powerOf10);

		return isPowerOf10 ? powerOf10 : exponent;
	}
};

var helpers_math = exports$2;

// DEPRECATIONS

/**
 * Provided for backward compatibility, use Chart.helpers.math.log10 instead.
 * @namespace Chart.helpers.log10
 * @deprecated since version 2.9.0
 * @todo remove at version 3
 * @private
 */
helpers_core.log10 = exports$2.log10;

var getRtlAdapter = function(rectX, width) {
	return {
		x: function(x) {
			return rectX + rectX + width - x;
		},
		setWidth: function(w) {
			width = w;
		},
		textAlign: function(align) {
			if (align === 'center') {
				return align;
			}
			return align === 'right' ? 'left' : 'right';
		},
		xPlus: function(x, value) {
			return x - value;
		},
		leftForLtr: function(x, itemWidth) {
			return x - itemWidth;
		},
	};
};

var getLtrAdapter = function() {
	return {
		x: function(x) {
			return x;
		},
		setWidth: function(w) { // eslint-disable-line no-unused-vars
		},
		textAlign: function(align) {
			return align;
		},
		xPlus: function(x, value) {
			return x + value;
		},
		leftForLtr: function(x, _itemWidth) { // eslint-disable-line no-unused-vars
			return x;
		},
	};
};

var getAdapter = function(rtl, rectX, width) {
	return rtl ? getRtlAdapter(rectX, width) : getLtrAdapter();
};

var overrideTextDirection = function(ctx, direction) {
	var style, original;
	if (direction === 'ltr' || direction === 'rtl') {
		style = ctx.canvas.style;
		original = [
			style.getPropertyValue('direction'),
			style.getPropertyPriority('direction'),
		];

		style.setProperty('direction', direction, 'important');
		ctx.prevTextDirection = original;
	}
};

var restoreTextDirection = function(ctx) {
	var original = ctx.prevTextDirection;
	if (original !== undefined) {
		delete ctx.prevTextDirection;
		ctx.canvas.style.setProperty('direction', original[0], original[1]);
	}
};

var helpers_rtl = {
	getRtlAdapter: getAdapter,
	overrideTextDirection: overrideTextDirection,
	restoreTextDirection: restoreTextDirection,
};

var helpers$1 = helpers_core;
var easing = helpers_easing;
var canvas = helpers_canvas;
var options = helpers_options;
var math = helpers_math;
var rtl = helpers_rtl;
helpers$1.easing = easing;
helpers$1.canvas = canvas;
helpers$1.options = options;
helpers$1.math = math;
helpers$1.rtl = rtl;

function interpolate(start, view, model, ease) {
	var keys = Object.keys(model);
	var i, ilen, key, actual, origin, target, type, c0, c1;

	for (i = 0, ilen = keys.length; i < ilen; ++i) {
		key = keys[i];

		target = model[key];

		// if a value is added to the model after pivot() has been called, the view
		// doesn't contain it, so let's initialize the view to the target value.
		if (!view.hasOwnProperty(key)) {
			view[key] = target;
		}

		actual = view[key];

		if (actual === target || key[0] === '_') {
			continue;
		}

		if (!start.hasOwnProperty(key)) {
			start[key] = actual;
		}

		origin = start[key];

		type = typeof target;

		if (type === typeof origin) {
			if (type === 'string') {
				c0 = chartjsColor(origin);
				if (c0.valid) {
					c1 = chartjsColor(target);
					if (c1.valid) {
						view[key] = c1.mix(c0, ease).rgbString();
						continue;
					}
				}
			} else if (helpers$1.isFinite(origin) && helpers$1.isFinite(target)) {
				view[key] = origin + (target - origin) * ease;
				continue;
			}
		}

		view[key] = target;
	}
}

var Element = function(configuration) {
	helpers$1.extend(this, configuration);
	this.initialize.apply(this, arguments);
};

helpers$1.extend(Element.prototype, {
	_type: undefined,

	initialize: function() {
		this.hidden = false;
	},

	pivot: function() {
		var me = this;
		if (!me._view) {
			me._view = helpers$1.extend({}, me._model);
		}
		me._start = {};
		return me;
	},

	transition: function(ease) {
		var me = this;
		var model = me._model;
		var start = me._start;
		var view = me._view;

		// No animation -> No Transition
		if (!model || ease === 1) {
			me._view = helpers$1.extend({}, model);
			me._start = null;
			return me;
		}

		if (!view) {
			view = me._view = {};
		}

		if (!start) {
			start = me._start = {};
		}

		interpolate(start, view, model, ease);

		return me;
	},

	tooltipPosition: function() {
		return {
			x: this._model.x,
			y: this._model.y
		};
	},

	hasValue: function() {
		return helpers$1.isNumber(this._model.x) && helpers$1.isNumber(this._model.y);
	}
});

Element.extend = helpers$1.inherits;

var core_element = Element;

var exports$3 = core_element.extend({
	chart: null, // the animation associated chart instance
	currentStep: 0, // the current animation step
	numSteps: 60, // default number of steps
	easing: '', // the easing to use for this animation
	render: null, // render function used by the animation service

	onAnimationProgress: null, // user specified callback to fire on each step of the animation
	onAnimationComplete: null, // user specified callback to fire when the animation finishes
});

var core_animation = exports$3;

// DEPRECATIONS

/**
 * Provided for backward compatibility, use Chart.Animation instead
 * @prop Chart.Animation#animationObject
 * @deprecated since version 2.6.0
 * @todo remove at version 3
 */
Object.defineProperty(exports$3.prototype, 'animationObject', {
	get: function() {
		return this;
	}
});

/**
 * Provided for backward compatibility, use Chart.Animation#chart instead
 * @prop Chart.Animation#chartInstance
 * @deprecated since version 2.6.0
 * @todo remove at version 3
 */
Object.defineProperty(exports$3.prototype, 'chartInstance', {
	get: function() {
		return this.chart;
	},
	set: function(value) {
		this.chart = value;
	}
});

core_defaults._set('global', {
	animation: {
		duration: 1000,
		easing: 'easeOutQuart',
		onProgress: helpers$1.noop,
		onComplete: helpers$1.noop
	}
});

var core_animations = {
	animations: [],
	request: null,

	/**
	 * @param {Chart} chart - The chart to animate.
	 * @param {Chart.Animation} animation - The animation that we will animate.
	 * @param {number} duration - The animation duration in ms.
	 * @param {boolean} lazy - if true, the chart is not marked as animating to enable more responsive interactions
	 */
	addAnimation: function(chart, animation, duration, lazy) {
		var animations = this.animations;
		var i, ilen;

		animation.chart = chart;
		animation.startTime = Date.now();
		animation.duration = duration;

		if (!lazy) {
			chart.animating = true;
		}

		for (i = 0, ilen = animations.length; i < ilen; ++i) {
			if (animations[i].chart === chart) {
				animations[i] = animation;
				return;
			}
		}

		animations.push(animation);

		// If there are no animations queued, manually kickstart a digest, for lack of a better word
		if (animations.length === 1) {
			this.requestAnimationFrame();
		}
	},

	cancelAnimation: function(chart) {
		var index = helpers$1.findIndex(this.animations, function(animation) {
			return animation.chart === chart;
		});

		if (index !== -1) {
			this.animations.splice(index, 1);
			chart.animating = false;
		}
	},

	requestAnimationFrame: function() {
		var me = this;
		if (me.request === null) {
			// Skip animation frame requests until the active one is executed.
			// This can happen when processing mouse events, e.g. 'mousemove'
			// and 'mouseout' events will trigger multiple renders.
			me.request = helpers$1.requestAnimFrame.call(window, function() {
				me.request = null;
				me.startDigest();
			});
		}
	},

	/**
	 * @private
	 */
	startDigest: function() {
		var me = this;

		me.advance();

		// Do we have more stuff to animate?
		if (me.animations.length > 0) {
			me.requestAnimationFrame();
		}
	},

	/**
	 * @private
	 */
	advance: function() {
		var animations = this.animations;
		var animation, chart, numSteps, nextStep;
		var i = 0;

		// 1 animation per chart, so we are looping charts here
		while (i < animations.length) {
			animation = animations[i];
			chart = animation.chart;
			numSteps = animation.numSteps;

			// Make sure that currentStep starts at 1
			// https://github.com/chartjs/Chart.js/issues/6104
			nextStep = Math.floor((Date.now() - animation.startTime) / animation.duration * numSteps) + 1;
			animation.currentStep = Math.min(nextStep, numSteps);

			helpers$1.callback(animation.render, [chart, animation], chart);
			helpers$1.callback(animation.onAnimationProgress, [animation], chart);

			if (animation.currentStep >= numSteps) {
				helpers$1.callback(animation.onAnimationComplete, [animation], chart);
				chart.animating = false;
				animations.splice(i, 1);
			} else {
				++i;
			}
		}
	}
};

var resolve = helpers$1.options.resolve;

var arrayEvents = ['push', 'pop', 'shift', 'splice', 'unshift'];

/**
 * Hooks the array methods that add or remove values ('push', pop', 'shift', 'splice',
 * 'unshift') and notify the listener AFTER the array has been altered. Listeners are
 * called on the 'onData*' callbacks (e.g. onDataPush, etc.) with same arguments.
 */
function listenArrayEvents(array, listener) {
	if (array._chartjs) {
		array._chartjs.listeners.push(listener);
		return;
	}

	Object.defineProperty(array, '_chartjs', {
		configurable: true,
		enumerable: false,
		value: {
			listeners: [listener]
		}
	});

	arrayEvents.forEach(function(key) {
		var method = 'onData' + key.charAt(0).toUpperCase() + key.slice(1);
		var base = array[key];

		Object.defineProperty(array, key, {
			configurable: true,
			enumerable: false,
			value: function() {
				var args = Array.prototype.slice.call(arguments);
				var res = base.apply(this, args);

				helpers$1.each(array._chartjs.listeners, function(object) {
					if (typeof object[method] === 'function') {
						object[method].apply(object, args);
					}
				});

				return res;
			}
		});
	});
}

/**
 * Removes the given array event listener and cleanup extra attached properties (such as
 * the _chartjs stub and overridden methods) if array doesn't have any more listeners.
 */
function unlistenArrayEvents(array, listener) {
	var stub = array._chartjs;
	if (!stub) {
		return;
	}

	var listeners = stub.listeners;
	var index = listeners.indexOf(listener);
	if (index !== -1) {
		listeners.splice(index, 1);
	}

	if (listeners.length > 0) {
		return;
	}

	arrayEvents.forEach(function(key) {
		delete array[key];
	});

	delete array._chartjs;
}

// Base class for all dataset controllers (line, bar, etc)
var DatasetController = function(chart, datasetIndex) {
	this.initialize(chart, datasetIndex);
};

helpers$1.extend(DatasetController.prototype, {

	/**
	 * Element type used to generate a meta dataset (e.g. Chart.element.Line).
	 * @type {Chart.core.element}
	 */
	datasetElementType: null,

	/**
	 * Element type used to generate a meta data (e.g. Chart.element.Point).
	 * @type {Chart.core.element}
	 */
	dataElementType: null,

	/**
	 * Dataset element option keys to be resolved in _resolveDatasetElementOptions.
	 * A derived controller may override this to resolve controller-specific options.
	 * The keys defined here are for backward compatibility for legend styles.
	 * @private
	 */
	_datasetElementOptions: [
		'backgroundColor',
		'borderCapStyle',
		'borderColor',
		'borderDash',
		'borderDashOffset',
		'borderJoinStyle',
		'borderWidth'
	],

	/**
	 * Data element option keys to be resolved in _resolveDataElementOptions.
	 * A derived controller may override this to resolve controller-specific options.
	 * The keys defined here are for backward compatibility for legend styles.
	 * @private
	 */
	_dataElementOptions: [
		'backgroundColor',
		'borderColor',
		'borderWidth',
		'pointStyle'
	],

	initialize: function(chart, datasetIndex) {
		var me = this;
		me.chart = chart;
		me.index = datasetIndex;
		me.linkScales();
		me.addElements();
		me._type = me.getMeta().type;
	},

	updateIndex: function(datasetIndex) {
		this.index = datasetIndex;
	},

	linkScales: function() {
		var me = this;
		var meta = me.getMeta();
		var chart = me.chart;
		var scales = chart.scales;
		var dataset = me.getDataset();
		var scalesOpts = chart.options.scales;

		if (meta.xAxisID === null || !(meta.xAxisID in scales) || dataset.xAxisID) {
			meta.xAxisID = dataset.xAxisID || scalesOpts.xAxes[0].id;
		}
		if (meta.yAxisID === null || !(meta.yAxisID in scales) || dataset.yAxisID) {
			meta.yAxisID = dataset.yAxisID || scalesOpts.yAxes[0].id;
		}
	},

	getDataset: function() {
		return this.chart.data.datasets[this.index];
	},

	getMeta: function() {
		return this.chart.getDatasetMeta(this.index);
	},

	getScaleForId: function(scaleID) {
		return this.chart.scales[scaleID];
	},

	/**
	 * @private
	 */
	_getValueScaleId: function() {
		return this.getMeta().yAxisID;
	},

	/**
	 * @private
	 */
	_getIndexScaleId: function() {
		return this.getMeta().xAxisID;
	},

	/**
	 * @private
	 */
	_getValueScale: function() {
		return this.getScaleForId(this._getValueScaleId());
	},

	/**
	 * @private
	 */
	_getIndexScale: function() {
		return this.getScaleForId(this._getIndexScaleId());
	},

	reset: function() {
		this._update(true);
	},

	/**
	 * @private
	 */
	destroy: function() {
		if (this._data) {
			unlistenArrayEvents(this._data, this);
		}
	},

	createMetaDataset: function() {
		var me = this;
		var type = me.datasetElementType;
		return type && new type({
			_chart: me.chart,
			_datasetIndex: me.index
		});
	},

	createMetaData: function(index) {
		var me = this;
		var type = me.dataElementType;
		return type && new type({
			_chart: me.chart,
			_datasetIndex: me.index,
			_index: index
		});
	},

	addElements: function() {
		var me = this;
		var meta = me.getMeta();
		var data = me.getDataset().data || [];
		var metaData = meta.data;
		var i, ilen;

		for (i = 0, ilen = data.length; i < ilen; ++i) {
			metaData[i] = metaData[i] || me.createMetaData(i);
		}

		meta.dataset = meta.dataset || me.createMetaDataset();
	},

	addElementAndReset: function(index) {
		var element = this.createMetaData(index);
		this.getMeta().data.splice(index, 0, element);
		this.updateElement(element, index, true);
	},

	buildOrUpdateElements: function() {
		var me = this;
		var dataset = me.getDataset();
		var data = dataset.data || (dataset.data = []);

		// In order to correctly handle data addition/deletion animation (an thus simulate
		// real-time charts), we need to monitor these data modifications and synchronize
		// the internal meta data accordingly.
		if (me._data !== data) {
			if (me._data) {
				// This case happens when the user replaced the data array instance.
				unlistenArrayEvents(me._data, me);
			}

			if (data && Object.isExtensible(data)) {
				listenArrayEvents(data, me);
			}
			me._data = data;
		}

		// Re-sync meta data in case the user replaced the data array or if we missed
		// any updates and so make sure that we handle number of datapoints changing.
		me.resyncElements();
	},

	/**
	 * Returns the merged user-supplied and default dataset-level options
	 * @private
	 */
	_configure: function() {
		var me = this;
		me._config = helpers$1.merge({}, [
			me.chart.options.datasets[me._type],
			me.getDataset(),
		], {
			merger: function(key, target, source) {
				if (key !== '_meta' && key !== 'data') {
					helpers$1._merger(key, target, source);
				}
			}
		});
	},

	_update: function(reset) {
		var me = this;
		me._configure();
		me._cachedDataOpts = null;
		me.update(reset);
	},

	update: helpers$1.noop,

	transition: function(easingValue) {
		var meta = this.getMeta();
		var elements = meta.data || [];
		var ilen = elements.length;
		var i = 0;

		for (; i < ilen; ++i) {
			elements[i].transition(easingValue);
		}

		if (meta.dataset) {
			meta.dataset.transition(easingValue);
		}
	},

	draw: function() {
		var meta = this.getMeta();
		var elements = meta.data || [];
		var ilen = elements.length;
		var i = 0;

		if (meta.dataset) {
			meta.dataset.draw();
		}

		for (; i < ilen; ++i) {
			elements[i].draw();
		}
	},

	/**
	 * Returns a set of predefined style properties that should be used to represent the dataset
	 * or the data if the index is specified
	 * @param {number} index - data index
	 * @return {IStyleInterface} style object
	 */
	getStyle: function(index) {
		var me = this;
		var meta = me.getMeta();
		var dataset = meta.dataset;
		var style;

		me._configure();
		if (dataset && index === undefined) {
			style = me._resolveDatasetElementOptions(dataset || {});
		} else {
			index = index || 0;
			style = me._resolveDataElementOptions(meta.data[index] || {}, index);
		}

		if (style.fill === false || style.fill === null) {
			style.backgroundColor = style.borderColor;
		}

		return style;
	},

	/**
	 * @private
	 */
	_resolveDatasetElementOptions: function(element, hover) {
		var me = this;
		var chart = me.chart;
		var datasetOpts = me._config;
		var custom = element.custom || {};
		var options = chart.options.elements[me.datasetElementType.prototype._type] || {};
		var elementOptions = me._datasetElementOptions;
		var values = {};
		var i, ilen, key, readKey;

		// Scriptable options
		var context = {
			chart: chart,
			dataset: me.getDataset(),
			datasetIndex: me.index,
			hover: hover
		};

		for (i = 0, ilen = elementOptions.length; i < ilen; ++i) {
			key = elementOptions[i];
			readKey = hover ? 'hover' + key.charAt(0).toUpperCase() + key.slice(1) : key;
			values[key] = resolve([
				custom[readKey],
				datasetOpts[readKey],
				options[readKey]
			], context);
		}

		return values;
	},

	/**
	 * @private
	 */
	_resolveDataElementOptions: function(element, index) {
		var me = this;
		var custom = element && element.custom;
		var cached = me._cachedDataOpts;
		if (cached && !custom) {
			return cached;
		}
		var chart = me.chart;
		var datasetOpts = me._config;
		var options = chart.options.elements[me.dataElementType.prototype._type] || {};
		var elementOptions = me._dataElementOptions;
		var values = {};

		// Scriptable options
		var context = {
			chart: chart,
			dataIndex: index,
			dataset: me.getDataset(),
			datasetIndex: me.index
		};

		// `resolve` sets cacheable to `false` if any option is indexed or scripted
		var info = {cacheable: !custom};

		var keys, i, ilen, key;

		custom = custom || {};

		if (helpers$1.isArray(elementOptions)) {
			for (i = 0, ilen = elementOptions.length; i < ilen; ++i) {
				key = elementOptions[i];
				values[key] = resolve([
					custom[key],
					datasetOpts[key],
					options[key]
				], context, index, info);
			}
		} else {
			keys = Object.keys(elementOptions);
			for (i = 0, ilen = keys.length; i < ilen; ++i) {
				key = keys[i];
				values[key] = resolve([
					custom[key],
					datasetOpts[elementOptions[key]],
					datasetOpts[key],
					options[key]
				], context, index, info);
			}
		}

		if (info.cacheable) {
			me._cachedDataOpts = Object.freeze(values);
		}

		return values;
	},

	removeHoverStyle: function(element) {
		helpers$1.merge(element._model, element.$previousStyle || {});
		delete element.$previousStyle;
	},

	setHoverStyle: function(element) {
		var dataset = this.chart.data.datasets[element._datasetIndex];
		var index = element._index;
		var custom = element.custom || {};
		var model = element._model;
		var getHoverColor = helpers$1.getHoverColor;

		element.$previousStyle = {
			backgroundColor: model.backgroundColor,
			borderColor: model.borderColor,
			borderWidth: model.borderWidth
		};

		model.backgroundColor = resolve([custom.hoverBackgroundColor, dataset.hoverBackgroundColor, getHoverColor(model.backgroundColor)], undefined, index);
		model.borderColor = resolve([custom.hoverBorderColor, dataset.hoverBorderColor, getHoverColor(model.borderColor)], undefined, index);
		model.borderWidth = resolve([custom.hoverBorderWidth, dataset.hoverBorderWidth, model.borderWidth], undefined, index);
	},

	/**
	 * @private
	 */
	_removeDatasetHoverStyle: function() {
		var element = this.getMeta().dataset;

		if (element) {
			this.removeHoverStyle(element);
		}
	},

	/**
	 * @private
	 */
	_setDatasetHoverStyle: function() {
		var element = this.getMeta().dataset;
		var prev = {};
		var i, ilen, key, keys, hoverOptions, model;

		if (!element) {
			return;
		}

		model = element._model;
		hoverOptions = this._resolveDatasetElementOptions(element, true);

		keys = Object.keys(hoverOptions);
		for (i = 0, ilen = keys.length; i < ilen; ++i) {
			key = keys[i];
			prev[key] = model[key];
			model[key] = hoverOptions[key];
		}

		element.$previousStyle = prev;
	},

	/**
	 * @private
	 */
	resyncElements: function() {
		var me = this;
		var meta = me.getMeta();
		var data = me.getDataset().data;
		var numMeta = meta.data.length;
		var numData = data.length;

		if (numData < numMeta) {
			meta.data.splice(numData, numMeta - numData);
		} else if (numData > numMeta) {
			me.insertElements(numMeta, numData - numMeta);
		}
	},

	/**
	 * @private
	 */
	insertElements: function(start, count) {
		for (var i = 0; i < count; ++i) {
			this.addElementAndReset(start + i);
		}
	},

	/**
	 * @private
	 */
	onDataPush: function() {
		var count = arguments.length;
		this.insertElements(this.getDataset().data.length - count, count);
	},

	/**
	 * @private
	 */
	onDataPop: function() {
		this.getMeta().data.pop();
	},

	/**
	 * @private
	 */
	onDataShift: function() {
		this.getMeta().data.shift();
	},

	/**
	 * @private
	 */
	onDataSplice: function(start, count) {
		this.getMeta().data.splice(start, count);
		this.insertElements(start, arguments.length - 2);
	},

	/**
	 * @private
	 */
	onDataUnshift: function() {
		this.insertElements(0, arguments.length);
	}
});

DatasetController.extend = helpers$1.inherits;

var core_datasetController = DatasetController;

var TAU = Math.PI * 2;

core_defaults._set('global', {
	elements: {
		arc: {
			backgroundColor: core_defaults.global.defaultColor,
			borderColor: '#fff',
			borderWidth: 2,
			borderAlign: 'center'
		}
	}
});

function clipArc(ctx, arc) {
	var startAngle = arc.startAngle;
	var endAngle = arc.endAngle;
	var pixelMargin = arc.pixelMargin;
	var angleMargin = pixelMargin / arc.outerRadius;
	var x = arc.x;
	var y = arc.y;

	// Draw an inner border by cliping the arc and drawing a double-width border
	// Enlarge the clipping arc by 0.33 pixels to eliminate glitches between borders
	ctx.beginPath();
	ctx.arc(x, y, arc.outerRadius, startAngle - angleMargin, endAngle + angleMargin);
	if (arc.innerRadius > pixelMargin) {
		angleMargin = pixelMargin / arc.innerRadius;
		ctx.arc(x, y, arc.innerRadius - pixelMargin, endAngle + angleMargin, startAngle - angleMargin, true);
	} else {
		ctx.arc(x, y, pixelMargin, endAngle + Math.PI / 2, startAngle - Math.PI / 2);
	}
	ctx.closePath();
	ctx.clip();
}

function drawFullCircleBorders(ctx, vm, arc, inner) {
	var endAngle = arc.endAngle;
	var i;

	if (inner) {
		arc.endAngle = arc.startAngle + TAU;
		clipArc(ctx, arc);
		arc.endAngle = endAngle;
		if (arc.endAngle === arc.startAngle && arc.fullCircles) {
			arc.endAngle += TAU;
			arc.fullCircles--;
		}
	}

	ctx.beginPath();
	ctx.arc(arc.x, arc.y, arc.innerRadius, arc.startAngle + TAU, arc.startAngle, true);
	for (i = 0; i < arc.fullCircles; ++i) {
		ctx.stroke();
	}

	ctx.beginPath();
	ctx.arc(arc.x, arc.y, vm.outerRadius, arc.startAngle, arc.startAngle + TAU);
	for (i = 0; i < arc.fullCircles; ++i) {
		ctx.stroke();
	}
}

function drawBorder(ctx, vm, arc) {
	var inner = vm.borderAlign === 'inner';

	if (inner) {
		ctx.lineWidth = vm.borderWidth * 2;
		ctx.lineJoin = 'round';
	} else {
		ctx.lineWidth = vm.borderWidth;
		ctx.lineJoin = 'bevel';
	}

	if (arc.fullCircles) {
		drawFullCircleBorders(ctx, vm, arc, inner);
	}

	if (inner) {
		clipArc(ctx, arc);
	}

	ctx.beginPath();
	ctx.arc(arc.x, arc.y, vm.outerRadius, arc.startAngle, arc.endAngle);
	ctx.arc(arc.x, arc.y, arc.innerRadius, arc.endAngle, arc.startAngle, true);
	ctx.closePath();
	ctx.stroke();
}

var element_arc = core_element.extend({
	_type: 'arc',

	inLabelRange: function(mouseX) {
		var vm = this._view;

		if (vm) {
			return (Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hoverRadius, 2));
		}
		return false;
	},

	inRange: function(chartX, chartY) {
		var vm = this._view;

		if (vm) {
			var pointRelativePosition = helpers$1.getAngleFromPoint(vm, {x: chartX, y: chartY});
			var angle = pointRelativePosition.angle;
			var distance = pointRelativePosition.distance;

			// Sanitise angle range
			var startAngle = vm.startAngle;
			var endAngle = vm.endAngle;
			while (endAngle < startAngle) {
				endAngle += TAU;
			}
			while (angle > endAngle) {
				angle -= TAU;
			}
			while (angle < startAngle) {
				angle += TAU;
			}

			// Check if within the range of the open/close angle
			var betweenAngles = (angle >= startAngle && angle <= endAngle);
			var withinRadius = (distance >= vm.innerRadius && distance <= vm.outerRadius);

			return (betweenAngles && withinRadius);
		}
		return false;
	},

	getCenterPoint: function() {
		var vm = this._view;
		var halfAngle = (vm.startAngle + vm.endAngle) / 2;
		var halfRadius = (vm.innerRadius + vm.outerRadius) / 2;
		return {
			x: vm.x + Math.cos(halfAngle) * halfRadius,
			y: vm.y + Math.sin(halfAngle) * halfRadius
		};
	},

	getArea: function() {
		var vm = this._view;
		return Math.PI * ((vm.endAngle - vm.startAngle) / (2 * Math.PI)) * (Math.pow(vm.outerRadius, 2) - Math.pow(vm.innerRadius, 2));
	},

	tooltipPosition: function() {
		var vm = this._view;
		var centreAngle = vm.startAngle + ((vm.endAngle - vm.startAngle) / 2);
		var rangeFromCentre = (vm.outerRadius - vm.innerRadius) / 2 + vm.innerRadius;

		return {
			x: vm.x + (Math.cos(centreAngle) * rangeFromCentre),
			y: vm.y + (Math.sin(centreAngle) * rangeFromCentre)
		};
	},

	draw: function() {
		var ctx = this._chart.ctx;
		var vm = this._view;
		var pixelMargin = (vm.borderAlign === 'inner') ? 0.33 : 0;
		var arc = {
			x: vm.x,
			y: vm.y,
			innerRadius: vm.innerRadius,
			outerRadius: Math.max(vm.outerRadius - pixelMargin, 0),
			pixelMargin: pixelMargin,
			startAngle: vm.startAngle,
			endAngle: vm.endAngle,
			fullCircles: Math.floor(vm.circumference / TAU)
		};
		var i;

		ctx.save();

		ctx.fillStyle = vm.backgroundColor;
		ctx.strokeStyle = vm.borderColor;

		if (arc.fullCircles) {
			arc.endAngle = arc.startAngle + TAU;
			ctx.beginPath();
			ctx.arc(arc.x, arc.y, arc.outerRadius, arc.startAngle, arc.endAngle);
			ctx.arc(arc.x, arc.y, arc.innerRadius, arc.endAngle, arc.startAngle, true);
			ctx.closePath();
			for (i = 0; i < arc.fullCircles; ++i) {
				ctx.fill();
			}
			arc.endAngle = arc.startAngle + vm.circumference % TAU;
		}

		ctx.beginPath();
		ctx.arc(arc.x, arc.y, arc.outerRadius, arc.startAngle, arc.endAngle);
		ctx.arc(arc.x, arc.y, arc.innerRadius, arc.endAngle, arc.startAngle, true);
		ctx.closePath();
		ctx.fill();

		if (vm.borderWidth) {
			drawBorder(ctx, vm, arc);
		}

		ctx.restore();
	}
});

var valueOrDefault$1 = helpers$1.valueOrDefault;

var defaultColor = core_defaults.global.defaultColor;

core_defaults._set('global', {
	elements: {
		line: {
			tension: 0.4,
			backgroundColor: defaultColor,
			borderWidth: 3,
			borderColor: defaultColor,
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			capBezierPoints: true,
			fill: true, // do we fill in the area between the line and its base axis
		}
	}
});

var element_line = core_element.extend({
	_type: 'line',

	draw: function() {
		var me = this;
		var vm = me._view;
		var ctx = me._chart.ctx;
		var spanGaps = vm.spanGaps;
		var points = me._children.slice(); // clone array
		var globalDefaults = core_defaults.global;
		var globalOptionLineElements = globalDefaults.elements.line;
		var lastDrawnIndex = -1;
		var closePath = me._loop;
		var index, previous, currentVM;

		if (!points.length) {
			return;
		}

		if (me._loop) {
			for (index = 0; index < points.length; ++index) {
				previous = helpers$1.previousItem(points, index);
				// If the line has an open path, shift the point array
				if (!points[index]._view.skip && previous._view.skip) {
					points = points.slice(index).concat(points.slice(0, index));
					closePath = spanGaps;
					break;
				}
			}
			// If the line has a close path, add the first point again
			if (closePath) {
				points.push(points[0]);
			}
		}

		ctx.save();

		// Stroke Line Options
		ctx.lineCap = vm.borderCapStyle || globalOptionLineElements.borderCapStyle;

		// IE 9 and 10 do not support line dash
		if (ctx.setLineDash) {
			ctx.setLineDash(vm.borderDash || globalOptionLineElements.borderDash);
		}

		ctx.lineDashOffset = valueOrDefault$1(vm.borderDashOffset, globalOptionLineElements.borderDashOffset);
		ctx.lineJoin = vm.borderJoinStyle || globalOptionLineElements.borderJoinStyle;
		ctx.lineWidth = valueOrDefault$1(vm.borderWidth, globalOptionLineElements.borderWidth);
		ctx.strokeStyle = vm.borderColor || globalDefaults.defaultColor;

		// Stroke Line
		ctx.beginPath();

		// First point moves to it's starting position no matter what
		currentVM = points[0]._view;
		if (!currentVM.skip) {
			ctx.moveTo(currentVM.x, currentVM.y);
			lastDrawnIndex = 0;
		}

		for (index = 1; index < points.length; ++index) {
			currentVM = points[index]._view;
			previous = lastDrawnIndex === -1 ? helpers$1.previousItem(points, index) : points[lastDrawnIndex];

			if (!currentVM.skip) {
				if ((lastDrawnIndex !== (index - 1) && !spanGaps) || lastDrawnIndex === -1) {
					// There was a gap and this is the first point after the gap
					ctx.moveTo(currentVM.x, currentVM.y);
				} else {
					// Line to next point
					helpers$1.canvas.lineTo(ctx, previous._view, currentVM);
				}
				lastDrawnIndex = index;
			}
		}

		if (closePath) {
			ctx.closePath();
		}

		ctx.stroke();
		ctx.restore();
	}
});

var valueOrDefault$2 = helpers$1.valueOrDefault;

var defaultColor$1 = core_defaults.global.defaultColor;

core_defaults._set('global', {
	elements: {
		point: {
			radius: 3,
			pointStyle: 'circle',
			backgroundColor: defaultColor$1,
			borderColor: defaultColor$1,
			borderWidth: 1,
			// Hover
			hitRadius: 1,
			hoverRadius: 4,
			hoverBorderWidth: 1
		}
	}
});

function xRange(mouseX) {
	var vm = this._view;
	return vm ? (Math.abs(mouseX - vm.x) < vm.radius + vm.hitRadius) : false;
}

function yRange(mouseY) {
	var vm = this._view;
	return vm ? (Math.abs(mouseY - vm.y) < vm.radius + vm.hitRadius) : false;
}

var element_point = core_element.extend({
	_type: 'point',

	inRange: function(mouseX, mouseY) {
		var vm = this._view;
		return vm ? ((Math.pow(mouseX - vm.x, 2) + Math.pow(mouseY - vm.y, 2)) < Math.pow(vm.hitRadius + vm.radius, 2)) : false;
	},

	inLabelRange: xRange,
	inXRange: xRange,
	inYRange: yRange,

	getCenterPoint: function() {
		var vm = this._view;
		return {
			x: vm.x,
			y: vm.y
		};
	},

	getArea: function() {
		return Math.PI * Math.pow(this._view.radius, 2);
	},

	tooltipPosition: function() {
		var vm = this._view;
		return {
			x: vm.x,
			y: vm.y,
			padding: vm.radius + vm.borderWidth
		};
	},

	draw: function(chartArea) {
		var vm = this._view;
		var ctx = this._chart.ctx;
		var pointStyle = vm.pointStyle;
		var rotation = vm.rotation;
		var radius = vm.radius;
		var x = vm.x;
		var y = vm.y;
		var globalDefaults = core_defaults.global;
		var defaultColor = globalDefaults.defaultColor; // eslint-disable-line no-shadow

		if (vm.skip) {
			return;
		}

		// Clipping for Points.
		if (chartArea === undefined || helpers$1.canvas._isPointInArea(vm, chartArea)) {
			ctx.strokeStyle = vm.borderColor || defaultColor;
			ctx.lineWidth = valueOrDefault$2(vm.borderWidth, globalDefaults.elements.point.borderWidth);
			ctx.fillStyle = vm.backgroundColor || defaultColor;
			helpers$1.canvas.drawPoint(ctx, pointStyle, radius, x, y, rotation);
		}
	}
});

var defaultColor$2 = core_defaults.global.defaultColor;

core_defaults._set('global', {
	elements: {
		rectangle: {
			backgroundColor: defaultColor$2,
			borderColor: defaultColor$2,
			borderSkipped: 'bottom',
			borderWidth: 0
		}
	}
});

function isVertical(vm) {
	return vm && vm.width !== undefined;
}

/**
 * Helper function to get the bounds of the bar regardless of the orientation
 * @param bar {Chart.Element.Rectangle} the bar
 * @return {Bounds} bounds of the bar
 * @private
 */
function getBarBounds(vm) {
	var x1, x2, y1, y2, half;

	if (isVertical(vm)) {
		half = vm.width / 2;
		x1 = vm.x - half;
		x2 = vm.x + half;
		y1 = Math.min(vm.y, vm.base);
		y2 = Math.max(vm.y, vm.base);
	} else {
		half = vm.height / 2;
		x1 = Math.min(vm.x, vm.base);
		x2 = Math.max(vm.x, vm.base);
		y1 = vm.y - half;
		y2 = vm.y + half;
	}

	return {
		left: x1,
		top: y1,
		right: x2,
		bottom: y2
	};
}

function swap(orig, v1, v2) {
	return orig === v1 ? v2 : orig === v2 ? v1 : orig;
}

function parseBorderSkipped(vm) {
	var edge = vm.borderSkipped;
	var res = {};

	if (!edge) {
		return res;
	}

	if (vm.horizontal) {
		if (vm.base > vm.x) {
			edge = swap(edge, 'left', 'right');
		}
	} else if (vm.base < vm.y) {
		edge = swap(edge, 'bottom', 'top');
	}

	res[edge] = true;
	return res;
}

function parseBorderWidth(vm, maxW, maxH) {
	var value = vm.borderWidth;
	var skip = parseBorderSkipped(vm);
	var t, r, b, l;

	if (helpers$1.isObject(value)) {
		t = +value.top || 0;
		r = +value.right || 0;
		b = +value.bottom || 0;
		l = +value.left || 0;
	} else {
		t = r = b = l = +value || 0;
	}

	return {
		t: skip.top || (t < 0) ? 0 : t > maxH ? maxH : t,
		r: skip.right || (r < 0) ? 0 : r > maxW ? maxW : r,
		b: skip.bottom || (b < 0) ? 0 : b > maxH ? maxH : b,
		l: skip.left || (l < 0) ? 0 : l > maxW ? maxW : l
	};
}

function boundingRects(vm) {
	var bounds = getBarBounds(vm);
	var width = bounds.right - bounds.left;
	var height = bounds.bottom - bounds.top;
	var border = parseBorderWidth(vm, width / 2, height / 2);

	return {
		outer: {
			x: bounds.left,
			y: bounds.top,
			w: width,
			h: height
		},
		inner: {
			x: bounds.left + border.l,
			y: bounds.top + border.t,
			w: width - border.l - border.r,
			h: height - border.t - border.b
		}
	};
}

function inRange(vm, x, y) {
	var skipX = x === null;
	var skipY = y === null;
	var bounds = !vm || (skipX && skipY) ? false : getBarBounds(vm);

	return bounds
		&& (skipX || x >= bounds.left && x <= bounds.right)
		&& (skipY || y >= bounds.top && y <= bounds.bottom);
}

var element_rectangle = core_element.extend({
	_type: 'rectangle',

	draw: function() {
		var ctx = this._chart.ctx;
		var vm = this._view;
		var rects = boundingRects(vm);
		var outer = rects.outer;
		var inner = rects.inner;

		ctx.fillStyle = vm.backgroundColor;
		ctx.fillRect(outer.x, outer.y, outer.w, outer.h);

		if (outer.w === inner.w && outer.h === inner.h) {
			return;
		}

		ctx.save();
		ctx.beginPath();
		ctx.rect(outer.x, outer.y, outer.w, outer.h);
		ctx.clip();
		ctx.fillStyle = vm.borderColor;
		ctx.rect(inner.x, inner.y, inner.w, inner.h);
		ctx.fill('evenodd');
		ctx.restore();
	},

	height: function() {
		var vm = this._view;
		return vm.base - vm.y;
	},

	inRange: function(mouseX, mouseY) {
		return inRange(this._view, mouseX, mouseY);
	},

	inLabelRange: function(mouseX, mouseY) {
		var vm = this._view;
		return isVertical(vm)
			? inRange(vm, mouseX, null)
			: inRange(vm, null, mouseY);
	},

	inXRange: function(mouseX) {
		return inRange(this._view, mouseX, null);
	},

	inYRange: function(mouseY) {
		return inRange(this._view, null, mouseY);
	},

	getCenterPoint: function() {
		var vm = this._view;
		var x, y;
		if (isVertical(vm)) {
			x = vm.x;
			y = (vm.y + vm.base) / 2;
		} else {
			x = (vm.x + vm.base) / 2;
			y = vm.y;
		}

		return {x: x, y: y};
	},

	getArea: function() {
		var vm = this._view;

		return isVertical(vm)
			? vm.width * Math.abs(vm.y - vm.base)
			: vm.height * Math.abs(vm.x - vm.base);
	},

	tooltipPosition: function() {
		var vm = this._view;
		return {
			x: vm.x,
			y: vm.y
		};
	}
});

var elements = {};
var Arc = element_arc;
var Line = element_line;
var Point = element_point;
var Rectangle = element_rectangle;
elements.Arc = Arc;
elements.Line = Line;
elements.Point = Point;
elements.Rectangle = Rectangle;

var deprecated = helpers$1._deprecated;
var valueOrDefault$3 = helpers$1.valueOrDefault;

core_defaults._set('bar', {
	hover: {
		mode: 'label'
	},

	scales: {
		xAxes: [{
			type: 'category',
			offset: true,
			gridLines: {
				offsetGridLines: true
			}
		}],

		yAxes: [{
			type: 'linear'
		}]
	}
});

core_defaults._set('global', {
	datasets: {
		bar: {
			categoryPercentage: 0.8,
			barPercentage: 0.9
		}
	}
});

/**
 * Computes the "optimal" sample size to maintain bars equally sized while preventing overlap.
 * @private
 */
function computeMinSampleSize(scale, pixels) {
	var min = scale._length;
	var prev, curr, i, ilen;

	for (i = 1, ilen = pixels.length; i < ilen; ++i) {
		min = Math.min(min, Math.abs(pixels[i] - pixels[i - 1]));
	}

	for (i = 0, ilen = scale.getTicks().length; i < ilen; ++i) {
		curr = scale.getPixelForTick(i);
		min = i > 0 ? Math.min(min, Math.abs(curr - prev)) : min;
		prev = curr;
	}

	return min;
}

/**
 * Computes an "ideal" category based on the absolute bar thickness or, if undefined or null,
 * uses the smallest interval (see computeMinSampleSize) that prevents bar overlapping. This
 * mode currently always generates bars equally sized (until we introduce scriptable options?).
 * @private
 */
function computeFitCategoryTraits(index, ruler, options) {
	var thickness = options.barThickness;
	var count = ruler.stackCount;
	var curr = ruler.pixels[index];
	var min = helpers$1.isNullOrUndef(thickness)
		? computeMinSampleSize(ruler.scale, ruler.pixels)
		: -1;
	var size, ratio;

	if (helpers$1.isNullOrUndef(thickness)) {
		size = min * options.categoryPercentage;
		ratio = options.barPercentage;
	} else {
		// When bar thickness is enforced, category and bar percentages are ignored.
		// Note(SB): we could add support for relative bar thickness (e.g. barThickness: '50%')
		// and deprecate barPercentage since this value is ignored when thickness is absolute.
		size = thickness * count;
		ratio = 1;
	}

	return {
		chunk: size / count,
		ratio: ratio,
		start: curr - (size / 2)
	};
}

/**
 * Computes an "optimal" category that globally arranges bars side by side (no gap when
 * percentage options are 1), based on the previous and following categories. This mode
 * generates bars with different widths when data are not evenly spaced.
 * @private
 */
function computeFlexCategoryTraits(index, ruler, options) {
	var pixels = ruler.pixels;
	var curr = pixels[index];
	var prev = index > 0 ? pixels[index - 1] : null;
	var next = index < pixels.length - 1 ? pixels[index + 1] : null;
	var percent = options.categoryPercentage;
	var start, size;

	if (prev === null) {
		// first data: its size is double based on the next point or,
		// if it's also the last data, we use the scale size.
		prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
	}

	if (next === null) {
		// last data: its size is also double based on the previous point.
		next = curr + curr - prev;
	}

	start = curr - (curr - Math.min(prev, next)) / 2 * percent;
	size = Math.abs(next - prev) / 2 * percent;

	return {
		chunk: size / ruler.stackCount,
		ratio: options.barPercentage,
		start: start
	};
}

var controller_bar = core_datasetController.extend({

	dataElementType: elements.Rectangle,

	/**
	 * @private
	 */
	_dataElementOptions: [
		'backgroundColor',
		'borderColor',
		'borderSkipped',
		'borderWidth',
		'barPercentage',
		'barThickness',
		'categoryPercentage',
		'maxBarThickness',
		'minBarLength'
	],

	initialize: function() {
		var me = this;
		var meta, scaleOpts;

		core_datasetController.prototype.initialize.apply(me, arguments);

		meta = me.getMeta();
		meta.stack = me.getDataset().stack;
		meta.bar = true;

		scaleOpts = me._getIndexScale().options;
		deprecated('bar chart', scaleOpts.barPercentage, 'scales.[x/y]Axes.barPercentage', 'dataset.barPercentage');
		deprecated('bar chart', scaleOpts.barThickness, 'scales.[x/y]Axes.barThickness', 'dataset.barThickness');
		deprecated('bar chart', scaleOpts.categoryPercentage, 'scales.[x/y]Axes.categoryPercentage', 'dataset.categoryPercentage');
		deprecated('bar chart', me._getValueScale().options.minBarLength, 'scales.[x/y]Axes.minBarLength', 'dataset.minBarLength');
		deprecated('bar chart', scaleOpts.maxBarThickness, 'scales.[x/y]Axes.maxBarThickness', 'dataset.maxBarThickness');
	},

	update: function(reset) {
		var me = this;
		var rects = me.getMeta().data;
		var i, ilen;

		me._ruler = me.getRuler();

		for (i = 0, ilen = rects.length; i < ilen; ++i) {
			me.updateElement(rects[i], i, reset);
		}
	},

	updateElement: function(rectangle, index, reset) {
		var me = this;
		var meta = me.getMeta();
		var dataset = me.getDataset();
		var options = me._resolveDataElementOptions(rectangle, index);

		rectangle._xScale = me.getScaleForId(meta.xAxisID);
		rectangle._yScale = me.getScaleForId(meta.yAxisID);
		rectangle._datasetIndex = me.index;
		rectangle._index = index;
		rectangle._model = {
			backgroundColor: options.backgroundColor,
			borderColor: options.borderColor,
			borderSkipped: options.borderSkipped,
			borderWidth: options.borderWidth,
			datasetLabel: dataset.label,
			label: me.chart.data.labels[index]
		};

		if (helpers$1.isArray(dataset.data[index])) {
			rectangle._model.borderSkipped = null;
		}

		me._updateElementGeometry(rectangle, index, reset, options);

		rectangle.pivot();
	},

	/**
	 * @private
	 */
	_updateElementGeometry: function(rectangle, index, reset, options) {
		var me = this;
		var model = rectangle._model;
		var vscale = me._getValueScale();
		var base = vscale.getBasePixel();
		var horizontal = vscale.isHorizontal();
		var ruler = me._ruler || me.getRuler();
		var vpixels = me.calculateBarValuePixels(me.index, index, options);
		var ipixels = me.calculateBarIndexPixels(me.index, index, ruler, options);

		model.horizontal = horizontal;
		model.base = reset ? base : vpixels.base;
		model.x = horizontal ? reset ? base : vpixels.head : ipixels.center;
		model.y = horizontal ? ipixels.center : reset ? base : vpixels.head;
		model.height = horizontal ? ipixels.size : undefined;
		model.width = horizontal ? undefined : ipixels.size;
	},

	/**
	 * Returns the stacks based on groups and bar visibility.
	 * @param {number} [last] - The dataset index
	 * @returns {string[]} The list of stack IDs
	 * @private
	 */
	_getStacks: function(last) {
		var me = this;
		var scale = me._getIndexScale();
		var metasets = scale._getMatchingVisibleMetas(me._type);
		var stacked = scale.options.stacked;
		var ilen = metasets.length;
		var stacks = [];
		var i, meta;

		for (i = 0; i < ilen; ++i) {
			meta = metasets[i];
			// stacked   | meta.stack
			//           | found | not found | undefined
			// false     |   x   |     x     |     x
			// true      |       |     x     |
			// undefined |       |     x     |     x
			if (stacked === false || stacks.indexOf(meta.stack) === -1 ||
				(stacked === undefined && meta.stack === undefined)) {
				stacks.push(meta.stack);
			}
			if (meta.index === last) {
				break;
			}
		}

		return stacks;
	},

	/**
	 * Returns the effective number of stacks based on groups and bar visibility.
	 * @private
	 */
	getStackCount: function() {
		return this._getStacks().length;
	},

	/**
	 * Returns the stack index for the given dataset based on groups and bar visibility.
	 * @param {number} [datasetIndex] - The dataset index
	 * @param {string} [name] - The stack name to find
	 * @returns {number} The stack index
	 * @private
	 */
	getStackIndex: function(datasetIndex, name) {
		var stacks = this._getStacks(datasetIndex);
		var index = (name !== undefined)
			? stacks.indexOf(name)
			: -1; // indexOf returns -1 if element is not present

		return (index === -1)
			? stacks.length - 1
			: index;
	},

	/**
	 * @private
	 */
	getRuler: function() {
		var me = this;
		var scale = me._getIndexScale();
		var pixels = [];
		var i, ilen;

		for (i = 0, ilen = me.getMeta().data.length; i < ilen; ++i) {
			pixels.push(scale.getPixelForValue(null, i, me.index));
		}

		return {
			pixels: pixels,
			start: scale._startPixel,
			end: scale._endPixel,
			stackCount: me.getStackCount(),
			scale: scale
		};
	},

	/**
	 * Note: pixel values are not clamped to the scale area.
	 * @private
	 */
	calculateBarValuePixels: function(datasetIndex, index, options) {
		var me = this;
		var chart = me.chart;
		var scale = me._getValueScale();
		var isHorizontal = scale.isHorizontal();
		var datasets = chart.data.datasets;
		var metasets = scale._getMatchingVisibleMetas(me._type);
		var value = scale._parseValue(datasets[datasetIndex].data[index]);
		var minBarLength = options.minBarLength;
		var stacked = scale.options.stacked;
		var stack = me.getMeta().stack;
		var start = value.start === undefined ? 0 : value.max >= 0 && value.min >= 0 ? value.min : value.max;
		var length = value.start === undefined ? value.end : value.max >= 0 && value.min >= 0 ? value.max - value.min : value.min - value.max;
		var ilen = metasets.length;
		var i, imeta, ivalue, base, head, size, stackLength;

		if (stacked || (stacked === undefined && stack !== undefined)) {
			for (i = 0; i < ilen; ++i) {
				imeta = metasets[i];

				if (imeta.index === datasetIndex) {
					break;
				}

				if (imeta.stack === stack) {
					stackLength = scale._parseValue(datasets[imeta.index].data[index]);
					ivalue = stackLength.start === undefined ? stackLength.end : stackLength.min >= 0 && stackLength.max >= 0 ? stackLength.max : stackLength.min;

					if ((value.min < 0 && ivalue < 0) || (value.max >= 0 && ivalue > 0)) {
						start += ivalue;
					}
				}
			}
		}

		base = scale.getPixelForValue(start);
		head = scale.getPixelForValue(start + length);
		size = head - base;

		if (minBarLength !== undefined && Math.abs(size) < minBarLength) {
			size = minBarLength;
			if (length >= 0 && !isHorizontal || length < 0 && isHorizontal) {
				head = base - minBarLength;
			} else {
				head = base + minBarLength;
			}
		}

		return {
			size: size,
			base: base,
			head: head,
			center: head + size / 2
		};
	},

	/**
	 * @private
	 */
	calculateBarIndexPixels: function(datasetIndex, index, ruler, options) {
		var me = this;
		var range = options.barThickness === 'flex'
			? computeFlexCategoryTraits(index, ruler, options)
			: computeFitCategoryTraits(index, ruler, options);

		var stackIndex = me.getStackIndex(datasetIndex, me.getMeta().stack);
		var center = range.start + (range.chunk * stackIndex) + (range.chunk / 2);
		var size = Math.min(
			valueOrDefault$3(options.maxBarThickness, Infinity),
			range.chunk * range.ratio);

		return {
			base: center - size / 2,
			head: center + size / 2,
			center: center,
			size: size
		};
	},

	draw: function() {
		var me = this;
		var chart = me.chart;
		var scale = me._getValueScale();
		var rects = me.getMeta().data;
		var dataset = me.getDataset();
		var ilen = rects.length;
		var i = 0;

		helpers$1.canvas.clipArea(chart.ctx, chart.chartArea);

		for (; i < ilen; ++i) {
			var val = scale._parseValue(dataset.data[i]);
			if (!isNaN(val.min) && !isNaN(val.max)) {
				rects[i].draw();
			}
		}

		helpers$1.canvas.unclipArea(chart.ctx);
	},

	/**
	 * @private
	 */
	_resolveDataElementOptions: function() {
		var me = this;
		var values = helpers$1.extend({}, core_datasetController.prototype._resolveDataElementOptions.apply(me, arguments));
		var indexOpts = me._getIndexScale().options;
		var valueOpts = me._getValueScale().options;

		values.barPercentage = valueOrDefault$3(indexOpts.barPercentage, values.barPercentage);
		values.barThickness = valueOrDefault$3(indexOpts.barThickness, values.barThickness);
		values.categoryPercentage = valueOrDefault$3(indexOpts.categoryPercentage, values.categoryPercentage);
		values.maxBarThickness = valueOrDefault$3(indexOpts.maxBarThickness, values.maxBarThickness);
		values.minBarLength = valueOrDefault$3(valueOpts.minBarLength, values.minBarLength);

		return values;
	}

});

var valueOrDefault$4 = helpers$1.valueOrDefault;
var resolve$1 = helpers$1.options.resolve;

core_defaults._set('bubble', {
	hover: {
		mode: 'single'
	},

	scales: {
		xAxes: [{
			type: 'linear', // bubble should probably use a linear scale by default
			position: 'bottom',
			id: 'x-axis-0' // need an ID so datasets can reference the scale
		}],
		yAxes: [{
			type: 'linear',
			position: 'left',
			id: 'y-axis-0'
		}]
	},

	tooltips: {
		callbacks: {
			title: function() {
				// Title doesn't make sense for scatter since we format the data as a point
				return '';
			},
			label: function(item, data) {
				var datasetLabel = data.datasets[item.datasetIndex].label || '';
				var dataPoint = data.datasets[item.datasetIndex].data[item.index];
				return datasetLabel + ': (' + item.xLabel + ', ' + item.yLabel + ', ' + dataPoint.r + ')';
			}
		}
	}
});

var controller_bubble = core_datasetController.extend({
	/**
	 * @protected
	 */
	dataElementType: elements.Point,

	/**
	 * @private
	 */
	_dataElementOptions: [
		'backgroundColor',
		'borderColor',
		'borderWidth',
		'hoverBackgroundColor',
		'hoverBorderColor',
		'hoverBorderWidth',
		'hoverRadius',
		'hitRadius',
		'pointStyle',
		'rotation'
	],

	/**
	 * @protected
	 */
	update: function(reset) {
		var me = this;
		var meta = me.getMeta();
		var points = meta.data;

		// Update Points
		helpers$1.each(points, function(point, index) {
			me.updateElement(point, index, reset);
		});
	},

	/**
	 * @protected
	 */
	updateElement: function(point, index, reset) {
		var me = this;
		var meta = me.getMeta();
		var custom = point.custom || {};
		var xScale = me.getScaleForId(meta.xAxisID);
		var yScale = me.getScaleForId(meta.yAxisID);
		var options = me._resolveDataElementOptions(point, index);
		var data = me.getDataset().data[index];
		var dsIndex = me.index;

		var x = reset ? xScale.getPixelForDecimal(0.5) : xScale.getPixelForValue(typeof data === 'object' ? data : NaN, index, dsIndex);
		var y = reset ? yScale.getBasePixel() : yScale.getPixelForValue(data, index, dsIndex);

		point._xScale = xScale;
		point._yScale = yScale;
		point._options = options;
		point._datasetIndex = dsIndex;
		point._index = index;
		point._model = {
			backgroundColor: options.backgroundColor,
			borderColor: options.borderColor,
			borderWidth: options.borderWidth,
			hitRadius: options.hitRadius,
			pointStyle: options.pointStyle,
			rotation: options.rotation,
			radius: reset ? 0 : options.radius,
			skip: custom.skip || isNaN(x) || isNaN(y),
			x: x,
			y: y,
		};

		point.pivot();
	},

	/**
	 * @protected
	 */
	setHoverStyle: function(point) {
		var model = point._model;
		var options = point._options;
		var getHoverColor = helpers$1.getHoverColor;

		point.$previousStyle = {
			backgroundColor: model.backgroundColor,
			borderColor: model.borderColor,
			borderWidth: model.borderWidth,
			radius: model.radius
		};

		model.backgroundColor = valueOrDefault$4(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
		model.borderColor = valueOrDefault$4(options.hoverBorderColor, getHoverColor(options.borderColor));
		model.borderWidth = valueOrDefault$4(options.hoverBorderWidth, options.borderWidth);
		model.radius = options.radius + options.hoverRadius;
	},

	/**
	 * @private
	 */
	_resolveDataElementOptions: function(point, index) {
		var me = this;
		var chart = me.chart;
		var dataset = me.getDataset();
		var custom = point.custom || {};
		var data = dataset.data[index] || {};
		var values = core_datasetController.prototype._resolveDataElementOptions.apply(me, arguments);

		// Scriptable options
		var context = {
			chart: chart,
			dataIndex: index,
			dataset: dataset,
			datasetIndex: me.index
		};

		// In case values were cached (and thus frozen), we need to clone the values
		if (me._cachedDataOpts === values) {
			values = helpers$1.extend({}, values);
		}

		// Custom radius resolution
		values.radius = resolve$1([
			custom.radius,
			data.r,
			me._config.radius,
			chart.options.elements.point.radius
		], context, index);

		return values;
	}
});

var valueOrDefault$5 = helpers$1.valueOrDefault;

var PI$1 = Math.PI;
var DOUBLE_PI$1 = PI$1 * 2;
var HALF_PI$1 = PI$1 / 2;

core_defaults._set('doughnut', {
	animation: {
		// Boolean - Whether we animate the rotation of the Doughnut
		animateRotate: true,
		// Boolean - Whether we animate scaling the Doughnut from the centre
		animateScale: false
	},
	hover: {
		mode: 'single'
	},
	legendCallback: function(chart) {
		var list = document.createElement('ul');
		var data = chart.data;
		var datasets = data.datasets;
		var labels = data.labels;
		var i, ilen, listItem, listItemSpan;

		list.setAttribute('class', chart.id + '-legend');
		if (datasets.length) {
			for (i = 0, ilen = datasets[0].data.length; i < ilen; ++i) {
				listItem = list.appendChild(document.createElement('li'));
				listItemSpan = listItem.appendChild(document.createElement('span'));
				listItemSpan.style.backgroundColor = datasets[0].backgroundColor[i];
				if (labels[i]) {
					listItem.appendChild(document.createTextNode(labels[i]));
				}
			}
		}

		return list.outerHTML;
	},
	legend: {
		labels: {
			generateLabels: function(chart) {
				var data = chart.data;
				if (data.labels.length && data.datasets.length) {
					return data.labels.map(function(label, i) {
						var meta = chart.getDatasetMeta(0);
						var style = meta.controller.getStyle(i);

						return {
							text: label,
							fillStyle: style.backgroundColor,
							strokeStyle: style.borderColor,
							lineWidth: style.borderWidth,
							hidden: isNaN(data.datasets[0].data[i]) || meta.data[i].hidden,

							// Extra data used for toggling the correct item
							index: i
						};
					});
				}
				return [];
			}
		},

		onClick: function(e, legendItem) {
			var index = legendItem.index;
			var chart = this.chart;
			var i, ilen, meta;

			for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
				meta = chart.getDatasetMeta(i);
				// toggle visibility of index if exists
				if (meta.data[index]) {
					meta.data[index].hidden = !meta.data[index].hidden;
				}
			}

			chart.update();
		}
	},

	// The percentage of the chart that we cut out of the middle.
	cutoutPercentage: 50,

	// The rotation of the chart, where the first data arc begins.
	rotation: -HALF_PI$1,

	// The total circumference of the chart.
	circumference: DOUBLE_PI$1,

	// Need to override these to give a nice default
	tooltips: {
		callbacks: {
			title: function() {
				return '';
			},
			label: function(tooltipItem, data) {
				var dataLabel = data.labels[tooltipItem.index];
				var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];

				if (helpers$1.isArray(dataLabel)) {
					// show value on first line of multiline label
					// need to clone because we are changing the value
					dataLabel = dataLabel.slice();
					dataLabel[0] += value;
				} else {
					dataLabel += value;
				}

				return dataLabel;
			}
		}
	}
});

var controller_doughnut = core_datasetController.extend({

	dataElementType: elements.Arc,

	linkScales: helpers$1.noop,

	/**
	 * @private
	 */
	_dataElementOptions: [
		'backgroundColor',
		'borderColor',
		'borderWidth',
		'borderAlign',
		'hoverBackgroundColor',
		'hoverBorderColor',
		'hoverBorderWidth',
	],

	// Get index of the dataset in relation to the visible datasets. This allows determining the inner and outer radius correctly
	getRingIndex: function(datasetIndex) {
		var ringIndex = 0;

		for (var j = 0; j < datasetIndex; ++j) {
			if (this.chart.isDatasetVisible(j)) {
				++ringIndex;
			}
		}

		return ringIndex;
	},

	update: function(reset) {
		var me = this;
		var chart = me.chart;
		var chartArea = chart.chartArea;
		var opts = chart.options;
		var ratioX = 1;
		var ratioY = 1;
		var offsetX = 0;
		var offsetY = 0;
		var meta = me.getMeta();
		var arcs = meta.data;
		var cutout = opts.cutoutPercentage / 100 || 0;
		var circumference = opts.circumference;
		var chartWeight = me._getRingWeight(me.index);
		var maxWidth, maxHeight, i, ilen;

		// If the chart's circumference isn't a full circle, calculate size as a ratio of the width/height of the arc
		if (circumference < DOUBLE_PI$1) {
			var startAngle = opts.rotation % DOUBLE_PI$1;
			startAngle += startAngle >= PI$1 ? -DOUBLE_PI$1 : startAngle < -PI$1 ? DOUBLE_PI$1 : 0;
			var endAngle = startAngle + circumference;
			var startX = Math.cos(startAngle);
			var startY = Math.sin(startAngle);
			var endX = Math.cos(endAngle);
			var endY = Math.sin(endAngle);
			var contains0 = (startAngle <= 0 && endAngle >= 0) || endAngle >= DOUBLE_PI$1;
			var contains90 = (startAngle <= HALF_PI$1 && endAngle >= HALF_PI$1) || endAngle >= DOUBLE_PI$1 + HALF_PI$1;
			var contains180 = startAngle === -PI$1 || endAngle >= PI$1;
			var contains270 = (startAngle <= -HALF_PI$1 && endAngle >= -HALF_PI$1) || endAngle >= PI$1 + HALF_PI$1;
			var minX = contains180 ? -1 : Math.min(startX, startX * cutout, endX, endX * cutout);
			var minY = contains270 ? -1 : Math.min(startY, startY * cutout, endY, endY * cutout);
			var maxX = contains0 ? 1 : Math.max(startX, startX * cutout, endX, endX * cutout);
			var maxY = contains90 ? 1 : Math.max(startY, startY * cutout, endY, endY * cutout);
			ratioX = (maxX - minX) / 2;
			ratioY = (maxY - minY) / 2;
			offsetX = -(maxX + minX) / 2;
			offsetY = -(maxY + minY) / 2;
		}

		for (i = 0, ilen = arcs.length; i < ilen; ++i) {
			arcs[i]._options = me._resolveDataElementOptions(arcs[i], i);
		}

		chart.borderWidth = me.getMaxBorderWidth();
		maxWidth = (chartArea.right - chartArea.left - chart.borderWidth) / ratioX;
		maxHeight = (chartArea.bottom - chartArea.top - chart.borderWidth) / ratioY;
		chart.outerRadius = Math.max(Math.min(maxWidth, maxHeight) / 2, 0);
		chart.innerRadius = Math.max(chart.outerRadius * cutout, 0);
		chart.radiusLength = (chart.outerRadius - chart.innerRadius) / (me._getVisibleDatasetWeightTotal() || 1);
		chart.offsetX = offsetX * chart.outerRadius;
		chart.offsetY = offsetY * chart.outerRadius;

		meta.total = me.calculateTotal();

		me.outerRadius = chart.outerRadius - chart.radiusLength * me._getRingWeightOffset(me.index);
		me.innerRadius = Math.max(me.outerRadius - chart.radiusLength * chartWeight, 0);

		for (i = 0, ilen = arcs.length; i < ilen; ++i) {
			me.updateElement(arcs[i], i, reset);
		}
	},

	updateElement: function(arc, index, reset) {
		var me = this;
		var chart = me.chart;
		var chartArea = chart.chartArea;
		var opts = chart.options;
		var animationOpts = opts.animation;
		var centerX = (chartArea.left + chartArea.right) / 2;
		var centerY = (chartArea.top + chartArea.bottom) / 2;
		var startAngle = opts.rotation; // non reset case handled later
		var endAngle = opts.rotation; // non reset case handled later
		var dataset = me.getDataset();
		var circumference = reset && animationOpts.animateRotate ? 0 : arc.hidden ? 0 : me.calculateCircumference(dataset.data[index]) * (opts.circumference / DOUBLE_PI$1);
		var innerRadius = reset && animationOpts.animateScale ? 0 : me.innerRadius;
		var outerRadius = reset && animationOpts.animateScale ? 0 : me.outerRadius;
		var options = arc._options || {};

		helpers$1.extend(arc, {
			// Utility
			_datasetIndex: me.index,
			_index: index,

			// Desired view properties
			_model: {
				backgroundColor: options.backgroundColor,
				borderColor: options.borderColor,
				borderWidth: options.borderWidth,
				borderAlign: options.borderAlign,
				x: centerX + chart.offsetX,
				y: centerY + chart.offsetY,
				startAngle: startAngle,
				endAngle: endAngle,
				circumference: circumference,
				outerRadius: outerRadius,
				innerRadius: innerRadius,
				label: helpers$1.valueAtIndexOrDefault(dataset.label, index, chart.data.labels[index])
			}
		});

		var model = arc._model;

		// Set correct angles if not resetting
		if (!reset || !animationOpts.animateRotate) {
			if (index === 0) {
				model.startAngle = opts.rotation;
			} else {
				model.startAngle = me.getMeta().data[index - 1]._model.endAngle;
			}

			model.endAngle = model.startAngle + model.circumference;
		}

		arc.pivot();
	},

	calculateTotal: function() {
		var dataset = this.getDataset();
		var meta = this.getMeta();
		var total = 0;
		var value;

		helpers$1.each(meta.data, function(element, index) {
			value = dataset.data[index];
			if (!isNaN(value) && !element.hidden) {
				total += Math.abs(value);
			}
		});

		/* if (total === 0) {
			total = NaN;
		}*/

		return total;
	},

	calculateCircumference: function(value) {
		var total = this.getMeta().total;
		if (total > 0 && !isNaN(value)) {
			return DOUBLE_PI$1 * (Math.abs(value) / total);
		}
		return 0;
	},

	// gets the max border or hover width to properly scale pie charts
	getMaxBorderWidth: function(arcs) {
		var me = this;
		var max = 0;
		var chart = me.chart;
		var i, ilen, meta, arc, controller, options, borderWidth, hoverWidth;

		if (!arcs) {
			// Find the outmost visible dataset
			for (i = 0, ilen = chart.data.datasets.length; i < ilen; ++i) {
				if (chart.isDatasetVisible(i)) {
					meta = chart.getDatasetMeta(i);
					arcs = meta.data;
					if (i !== me.index) {
						controller = meta.controller;
					}
					break;
				}
			}
		}

		if (!arcs) {
			return 0;
		}

		for (i = 0, ilen = arcs.length; i < ilen; ++i) {
			arc = arcs[i];
			if (controller) {
				controller._configure();
				options = controller._resolveDataElementOptions(arc, i);
			} else {
				options = arc._options;
			}
			if (options.borderAlign !== 'inner') {
				borderWidth = options.borderWidth;
				hoverWidth = options.hoverBorderWidth;

				max = borderWidth > max ? borderWidth : max;
				max = hoverWidth > max ? hoverWidth : max;
			}
		}
		return max;
	},

	/**
	 * @protected
	 */
	setHoverStyle: function(arc) {
		var model = arc._model;
		var options = arc._options;
		var getHoverColor = helpers$1.getHoverColor;

		arc.$previousStyle = {
			backgroundColor: model.backgroundColor,
			borderColor: model.borderColor,
			borderWidth: model.borderWidth,
		};

		model.backgroundColor = valueOrDefault$5(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
		model.borderColor = valueOrDefault$5(options.hoverBorderColor, getHoverColor(options.borderColor));
		model.borderWidth = valueOrDefault$5(options.hoverBorderWidth, options.borderWidth);
	},

	/**
	 * Get radius length offset of the dataset in relation to the visible datasets weights. This allows determining the inner and outer radius correctly
	 * @private
	 */
	_getRingWeightOffset: function(datasetIndex) {
		var ringWeightOffset = 0;

		for (var i = 0; i < datasetIndex; ++i) {
			if (this.chart.isDatasetVisible(i)) {
				ringWeightOffset += this._getRingWeight(i);
			}
		}

		return ringWeightOffset;
	},

	/**
	 * @private
	 */
	_getRingWeight: function(dataSetIndex) {
		return Math.max(valueOrDefault$5(this.chart.data.datasets[dataSetIndex].weight, 1), 0);
	},

	/**
	 * Returns the sum of all visibile data set weights.  This value can be 0.
	 * @private
	 */
	_getVisibleDatasetWeightTotal: function() {
		return this._getRingWeightOffset(this.chart.data.datasets.length);
	}
});

core_defaults._set('horizontalBar', {
	hover: {
		mode: 'index',
		axis: 'y'
	},

	scales: {
		xAxes: [{
			type: 'linear',
			position: 'bottom'
		}],

		yAxes: [{
			type: 'category',
			position: 'left',
			offset: true,
			gridLines: {
				offsetGridLines: true
			}
		}]
	},

	elements: {
		rectangle: {
			borderSkipped: 'left'
		}
	},

	tooltips: {
		mode: 'index',
		axis: 'y'
	}
});

core_defaults._set('global', {
	datasets: {
		horizontalBar: {
			categoryPercentage: 0.8,
			barPercentage: 0.9
		}
	}
});

var controller_horizontalBar = controller_bar.extend({
	/**
	 * @private
	 */
	_getValueScaleId: function() {
		return this.getMeta().xAxisID;
	},

	/**
	 * @private
	 */
	_getIndexScaleId: function() {
		return this.getMeta().yAxisID;
	}
});

var valueOrDefault$6 = helpers$1.valueOrDefault;
var resolve$2 = helpers$1.options.resolve;
var isPointInArea = helpers$1.canvas._isPointInArea;

core_defaults._set('line', {
	showLines: true,
	spanGaps: false,

	hover: {
		mode: 'label'
	},

	scales: {
		xAxes: [{
			type: 'category',
			id: 'x-axis-0'
		}],
		yAxes: [{
			type: 'linear',
			id: 'y-axis-0'
		}]
	}
});

function scaleClip(scale, halfBorderWidth) {
	var tickOpts = scale && scale.options.ticks || {};
	var reverse = tickOpts.reverse;
	var min = tickOpts.min === undefined ? halfBorderWidth : 0;
	var max = tickOpts.max === undefined ? halfBorderWidth : 0;
	return {
		start: reverse ? max : min,
		end: reverse ? min : max
	};
}

function defaultClip(xScale, yScale, borderWidth) {
	var halfBorderWidth = borderWidth / 2;
	var x = scaleClip(xScale, halfBorderWidth);
	var y = scaleClip(yScale, halfBorderWidth);

	return {
		top: y.end,
		right: x.end,
		bottom: y.start,
		left: x.start
	};
}

function toClip(value) {
	var t, r, b, l;

	if (helpers$1.isObject(value)) {
		t = value.top;
		r = value.right;
		b = value.bottom;
		l = value.left;
	} else {
		t = r = b = l = value;
	}

	return {
		top: t,
		right: r,
		bottom: b,
		left: l
	};
}


var controller_line = core_datasetController.extend({

	datasetElementType: elements.Line,

	dataElementType: elements.Point,

	/**
	 * @private
	 */
	_datasetElementOptions: [
		'backgroundColor',
		'borderCapStyle',
		'borderColor',
		'borderDash',
		'borderDashOffset',
		'borderJoinStyle',
		'borderWidth',
		'cubicInterpolationMode',
		'fill'
	],

	/**
	 * @private
	 */
	_dataElementOptions: {
		backgroundColor: 'pointBackgroundColor',
		borderColor: 'pointBorderColor',
		borderWidth: 'pointBorderWidth',
		hitRadius: 'pointHitRadius',
		hoverBackgroundColor: 'pointHoverBackgroundColor',
		hoverBorderColor: 'pointHoverBorderColor',
		hoverBorderWidth: 'pointHoverBorderWidth',
		hoverRadius: 'pointHoverRadius',
		pointStyle: 'pointStyle',
		radius: 'pointRadius',
		rotation: 'pointRotation'
	},

	update: function(reset) {
		var me = this;
		var meta = me.getMeta();
		var line = meta.dataset;
		var points = meta.data || [];
		var options = me.chart.options;
		var config = me._config;
		var showLine = me._showLine = valueOrDefault$6(config.showLine, options.showLines);
		var i, ilen;

		me._xScale = me.getScaleForId(meta.xAxisID);
		me._yScale = me.getScaleForId(meta.yAxisID);

		// Update Line
		if (showLine) {
			// Compatibility: If the properties are defined with only the old name, use those values
			if (config.tension !== undefined && config.lineTension === undefined) {
				config.lineTension = config.tension;
			}

			// Utility
			line._scale = me._yScale;
			line._datasetIndex = me.index;
			// Data
			line._children = points;
			// Model
			line._model = me._resolveDatasetElementOptions(line);

			line.pivot();
		}

		// Update Points
		for (i = 0, ilen = points.length; i < ilen; ++i) {
			me.updateElement(points[i], i, reset);
		}

		if (showLine && line._model.tension !== 0) {
			me.updateBezierControlPoints();
		}

		// Now pivot the point for animation
		for (i = 0, ilen = points.length; i < ilen; ++i) {
			points[i].pivot();
		}
	},

	updateElement: function(point, index, reset) {
		var me = this;
		var meta = me.getMeta();
		var custom = point.custom || {};
		var dataset = me.getDataset();
		var datasetIndex = me.index;
		var value = dataset.data[index];
		var xScale = me._xScale;
		var yScale = me._yScale;
		var lineModel = meta.dataset._model;
		var x, y;

		var options = me._resolveDataElementOptions(point, index);

		x = xScale.getPixelForValue(typeof value === 'object' ? value : NaN, index, datasetIndex);
		y = reset ? yScale.getBasePixel() : me.calculatePointY(value, index, datasetIndex);

		// Utility
		point._xScale = xScale;
		point._yScale = yScale;
		point._options = options;
		point._datasetIndex = datasetIndex;
		point._index = index;

		// Desired view properties
		point._model = {
			x: x,
			y: y,
			skip: custom.skip || isNaN(x) || isNaN(y),
			// Appearance
			radius: options.radius,
			pointStyle: options.pointStyle,
			rotation: options.rotation,
			backgroundColor: options.backgroundColor,
			borderColor: options.borderColor,
			borderWidth: options.borderWidth,
			tension: valueOrDefault$6(custom.tension, lineModel ? lineModel.tension : 0),
			steppedLine: lineModel ? lineModel.steppedLine : false,
			// Tooltip
			hitRadius: options.hitRadius
		};
	},

	/**
	 * @private
	 */
	_resolveDatasetElementOptions: function(element) {
		var me = this;
		var config = me._config;
		var custom = element.custom || {};
		var options = me.chart.options;
		var lineOptions = options.elements.line;
		var values = core_datasetController.prototype._resolveDatasetElementOptions.apply(me, arguments);

		// The default behavior of lines is to break at null values, according
		// to https://github.com/chartjs/Chart.js/issues/2435#issuecomment-216718158
		// This option gives lines the ability to span gaps
		values.spanGaps = valueOrDefault$6(config.spanGaps, options.spanGaps);
		values.tension = valueOrDefault$6(config.lineTension, lineOptions.tension);
		values.steppedLine = resolve$2([custom.steppedLine, config.steppedLine, lineOptions.stepped]);
		values.clip = toClip(valueOrDefault$6(config.clip, defaultClip(me._xScale, me._yScale, values.borderWidth)));

		return values;
	},

	calculatePointY: function(value, index, datasetIndex) {
		var me = this;
		var chart = me.chart;
		var yScale = me._yScale;
		var sumPos = 0;
		var sumNeg = 0;
		var i, ds, dsMeta, stackedRightValue, rightValue, metasets, ilen;

		if (yScale.options.stacked) {
			rightValue = +yScale.getRightValue(value);
			metasets = chart._getSortedVisibleDatasetMetas();
			ilen = metasets.length;

			for (i = 0; i < ilen; ++i) {
				dsMeta = metasets[i];
				if (dsMeta.index === datasetIndex) {
					break;
				}

				ds = chart.data.datasets[dsMeta.index];
				if (dsMeta.type === 'line' && dsMeta.yAxisID === yScale.id) {
					stackedRightValue = +yScale.getRightValue(ds.data[index]);
					if (stackedRightValue < 0) {
						sumNeg += stackedRightValue || 0;
					} else {
						sumPos += stackedRightValue || 0;
					}
				}
			}

			if (rightValue < 0) {
				return yScale.getPixelForValue(sumNeg + rightValue);
			}
			return yScale.getPixelForValue(sumPos + rightValue);
		}
		return yScale.getPixelForValue(value);
	},

	updateBezierControlPoints: function() {
		var me = this;
		var chart = me.chart;
		var meta = me.getMeta();
		var lineModel = meta.dataset._model;
		var area = chart.chartArea;
		var points = meta.data || [];
		var i, ilen, model, controlPoints;

		// Only consider points that are drawn in case the spanGaps option is used
		if (lineModel.spanGaps) {
			points = points.filter(function(pt) {
				return !pt._model.skip;
			});
		}

		function capControlPoint(pt, min, max) {
			return Math.max(Math.min(pt, max), min);
		}

		if (lineModel.cubicInterpolationMode === 'monotone') {
			helpers$1.splineCurveMonotone(points);
		} else {
			for (i = 0, ilen = points.length; i < ilen; ++i) {
				model = points[i]._model;
				controlPoints = helpers$1.splineCurve(
					helpers$1.previousItem(points, i)._model,
					model,
					helpers$1.nextItem(points, i)._model,
					lineModel.tension
				);
				model.controlPointPreviousX = controlPoints.previous.x;
				model.controlPointPreviousY = controlPoints.previous.y;
				model.controlPointNextX = controlPoints.next.x;
				model.controlPointNextY = controlPoints.next.y;
			}
		}

		if (chart.options.elements.line.capBezierPoints) {
			for (i = 0, ilen = points.length; i < ilen; ++i) {
				model = points[i]._model;
				if (isPointInArea(model, area)) {
					if (i > 0 && isPointInArea(points[i - 1]._model, area)) {
						model.controlPointPreviousX = capControlPoint(model.controlPointPreviousX, area.left, area.right);
						model.controlPointPreviousY = capControlPoint(model.controlPointPreviousY, area.top, area.bottom);
					}
					if (i < points.length - 1 && isPointInArea(points[i + 1]._model, area)) {
						model.controlPointNextX = capControlPoint(model.controlPointNextX, area.left, area.right);
						model.controlPointNextY = capControlPoint(model.controlPointNextY, area.top, area.bottom);
					}
				}
			}
		}
	},

	draw: function() {
		var me = this;
		var chart = me.chart;
		var meta = me.getMeta();
		var points = meta.data || [];
		var area = chart.chartArea;
		var canvas = chart.canvas;
		var i = 0;
		var ilen = points.length;
		var clip;

		if (me._showLine) {
			clip = meta.dataset._model.clip;

			helpers$1.canvas.clipArea(chart.ctx, {
				left: clip.left === false ? 0 : area.left - clip.left,
				right: clip.right === false ? canvas.width : area.right + clip.right,
				top: clip.top === false ? 0 : area.top - clip.top,
				bottom: clip.bottom === false ? canvas.height : area.bottom + clip.bottom
			});

			meta.dataset.draw();

			helpers$1.canvas.unclipArea(chart.ctx);
		}

		// Draw the points
		for (; i < ilen; ++i) {
			points[i].draw(area);
		}
	},

	/**
	 * @protected
	 */
	setHoverStyle: function(point) {
		var model = point._model;
		var options = point._options;
		var getHoverColor = helpers$1.getHoverColor;

		point.$previousStyle = {
			backgroundColor: model.backgroundColor,
			borderColor: model.borderColor,
			borderWidth: model.borderWidth,
			radius: model.radius
		};

		model.backgroundColor = valueOrDefault$6(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
		model.borderColor = valueOrDefault$6(options.hoverBorderColor, getHoverColor(options.borderColor));
		model.borderWidth = valueOrDefault$6(options.hoverBorderWidth, options.borderWidth);
		model.radius = valueOrDefault$6(options.hoverRadius, options.radius);
	},
});

var resolve$3 = helpers$1.options.resolve;

core_defaults._set('polarArea', {
	scale: {
		type: 'radialLinear',
		angleLines: {
			display: false
		},
		gridLines: {
			circular: true
		},
		pointLabels: {
			display: false
		},
		ticks: {
			beginAtZero: true
		}
	},

	// Boolean - Whether to animate the rotation of the chart
	animation: {
		animateRotate: true,
		animateScale: true
	},

	startAngle: -0.5 * Math.PI,
	legendCallback: function(chart) {
		var list = document.createElement('ul');
		var data = chart.data;
		var datasets = data.datasets;
		var labels = data.labels;
		var i, ilen, listItem, listItemSpan;

		list.setAttribute('class', chart.id + '-legend');
		if (datasets.length) {
			for (i = 0, ilen = datasets[0].data.length; i < ilen; ++i) {
				listItem = list.appendChild(document.createElement('li'));
				listItemSpan = listItem.appendChild(document.createElement('span'));
				listItemSpan.style.backgroundColor = datasets[0].backgroundColor[i];
				if (labels[i]) {
					listItem.appendChild(document.createTextNode(labels[i]));
				}
			}
		}

		return list.outerHTML;
	},
	legend: {
		labels: {
			generateLabels: function(chart) {
				var data = chart.data;
				if (data.labels.length && data.datasets.length) {
					return data.labels.map(function(label, i) {
						var meta = chart.getDatasetMeta(0);
						var style = meta.controller.getStyle(i);

						return {
							text: label,
							fillStyle: style.backgroundColor,
							strokeStyle: style.borderColor,
							lineWidth: style.borderWidth,
							hidden: isNaN(data.datasets[0].data[i]) || meta.data[i].hidden,

							// Extra data used for toggling the correct item
							index: i
						};
					});
				}
				return [];
			}
		},

		onClick: function(e, legendItem) {
			var index = legendItem.index;
			var chart = this.chart;
			var i, ilen, meta;

			for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
				meta = chart.getDatasetMeta(i);
				meta.data[index].hidden = !meta.data[index].hidden;
			}

			chart.update();
		}
	},

	// Need to override these to give a nice default
	tooltips: {
		callbacks: {
			title: function() {
				return '';
			},
			label: function(item, data) {
				return data.labels[item.index] + ': ' + item.yLabel;
			}
		}
	}
});

var controller_polarArea = core_datasetController.extend({

	dataElementType: elements.Arc,

	linkScales: helpers$1.noop,

	/**
	 * @private
	 */
	_dataElementOptions: [
		'backgroundColor',
		'borderColor',
		'borderWidth',
		'borderAlign',
		'hoverBackgroundColor',
		'hoverBorderColor',
		'hoverBorderWidth',
	],

	/**
	 * @private
	 */
	_getIndexScaleId: function() {
		return this.chart.scale.id;
	},

	/**
	 * @private
	 */
	_getValueScaleId: function() {
		return this.chart.scale.id;
	},

	update: function(reset) {
		var me = this;
		var dataset = me.getDataset();
		var meta = me.getMeta();
		var start = me.chart.options.startAngle || 0;
		var starts = me._starts = [];
		var angles = me._angles = [];
		var arcs = meta.data;
		var i, ilen, angle;

		me._updateRadius();

		meta.count = me.countVisibleElements();

		for (i = 0, ilen = dataset.data.length; i < ilen; i++) {
			starts[i] = start;
			angle = me._computeAngle(i);
			angles[i] = angle;
			start += angle;
		}

		for (i = 0, ilen = arcs.length; i < ilen; ++i) {
			arcs[i]._options = me._resolveDataElementOptions(arcs[i], i);
			me.updateElement(arcs[i], i, reset);
		}
	},

	/**
	 * @private
	 */
	_updateRadius: function() {
		var me = this;
		var chart = me.chart;
		var chartArea = chart.chartArea;
		var opts = chart.options;
		var minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);

		chart.outerRadius = Math.max(minSize / 2, 0);
		chart.innerRadius = Math.max(opts.cutoutPercentage ? (chart.outerRadius / 100) * (opts.cutoutPercentage) : 1, 0);
		chart.radiusLength = (chart.outerRadius - chart.innerRadius) / chart.getVisibleDatasetCount();

		me.outerRadius = chart.outerRadius - (chart.radiusLength * me.index);
		me.innerRadius = me.outerRadius - chart.radiusLength;
	},

	updateElement: function(arc, index, reset) {
		var me = this;
		var chart = me.chart;
		var dataset = me.getDataset();
		var opts = chart.options;
		var animationOpts = opts.animation;
		var scale = chart.scale;
		var labels = chart.data.labels;

		var centerX = scale.xCenter;
		var centerY = scale.yCenter;

		// var negHalfPI = -0.5 * Math.PI;
		var datasetStartAngle = opts.startAngle;
		var distance = arc.hidden ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);
		var startAngle = me._starts[index];
		var endAngle = startAngle + (arc.hidden ? 0 : me._angles[index]);

		var resetRadius = animationOpts.animateScale ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);
		var options = arc._options || {};

		helpers$1.extend(arc, {
			// Utility
			_datasetIndex: me.index,
			_index: index,
			_scale: scale,

			// Desired view properties
			_model: {
				backgroundColor: options.backgroundColor,
				borderColor: options.borderColor,
				borderWidth: options.borderWidth,
				borderAlign: options.borderAlign,
				x: centerX,
				y: centerY,
				innerRadius: 0,
				outerRadius: reset ? resetRadius : distance,
				startAngle: reset && animationOpts.animateRotate ? datasetStartAngle : startAngle,
				endAngle: reset && animationOpts.animateRotate ? datasetStartAngle : endAngle,
				label: helpers$1.valueAtIndexOrDefault(labels, index, labels[index])
			}
		});

		arc.pivot();
	},

	countVisibleElements: function() {
		var dataset = this.getDataset();
		var meta = this.getMeta();
		var count = 0;

		helpers$1.each(meta.data, function(element, index) {
			if (!isNaN(dataset.data[index]) && !element.hidden) {
				count++;
			}
		});

		return count;
	},

	/**
	 * @protected
	 */
	setHoverStyle: function(arc) {
		var model = arc._model;
		var options = arc._options;
		var getHoverColor = helpers$1.getHoverColor;
		var valueOrDefault = helpers$1.valueOrDefault;

		arc.$previousStyle = {
			backgroundColor: model.backgroundColor,
			borderColor: model.borderColor,
			borderWidth: model.borderWidth,
		};

		model.backgroundColor = valueOrDefault(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
		model.borderColor = valueOrDefault(options.hoverBorderColor, getHoverColor(options.borderColor));
		model.borderWidth = valueOrDefault(options.hoverBorderWidth, options.borderWidth);
	},

	/**
	 * @private
	 */
	_computeAngle: function(index) {
		var me = this;
		var count = this.getMeta().count;
		var dataset = me.getDataset();
		var meta = me.getMeta();

		if (isNaN(dataset.data[index]) || meta.data[index].hidden) {
			return 0;
		}

		// Scriptable options
		var context = {
			chart: me.chart,
			dataIndex: index,
			dataset: dataset,
			datasetIndex: me.index
		};

		return resolve$3([
			me.chart.options.elements.arc.angle,
			(2 * Math.PI) / count
		], context, index);
	}
});

core_defaults._set('pie', helpers$1.clone(core_defaults.doughnut));
core_defaults._set('pie', {
	cutoutPercentage: 0
});

// Pie charts are Doughnut chart with different defaults
var controller_pie = controller_doughnut;

var valueOrDefault$7 = helpers$1.valueOrDefault;

core_defaults._set('radar', {
	spanGaps: false,
	scale: {
		type: 'radialLinear'
	},
	elements: {
		line: {
			fill: 'start',
			tension: 0 // no bezier in radar
		}
	}
});

var controller_radar = core_datasetController.extend({
	datasetElementType: elements.Line,

	dataElementType: elements.Point,

	linkScales: helpers$1.noop,

	/**
	 * @private
	 */
	_datasetElementOptions: [
		'backgroundColor',
		'borderWidth',
		'borderColor',
		'borderCapStyle',
		'borderDash',
		'borderDashOffset',
		'borderJoinStyle',
		'fill'
	],

	/**
	 * @private
	 */
	_dataElementOptions: {
		backgroundColor: 'pointBackgroundColor',
		borderColor: 'pointBorderColor',
		borderWidth: 'pointBorderWidth',
		hitRadius: 'pointHitRadius',
		hoverBackgroundColor: 'pointHoverBackgroundColor',
		hoverBorderColor: 'pointHoverBorderColor',
		hoverBorderWidth: 'pointHoverBorderWidth',
		hoverRadius: 'pointHoverRadius',
		pointStyle: 'pointStyle',
		radius: 'pointRadius',
		rotation: 'pointRotation'
	},

	/**
	 * @private
	 */
	_getIndexScaleId: function() {
		return this.chart.scale.id;
	},

	/**
	 * @private
	 */
	_getValueScaleId: function() {
		return this.chart.scale.id;
	},

	update: function(reset) {
		var me = this;
		var meta = me.getMeta();
		var line = meta.dataset;
		var points = meta.data || [];
		var scale = me.chart.scale;
		var config = me._config;
		var i, ilen;

		// Compatibility: If the properties are defined with only the old name, use those values
		if (config.tension !== undefined && config.lineTension === undefined) {
			config.lineTension = config.tension;
		}

		// Utility
		line._scale = scale;
		line._datasetIndex = me.index;
		// Data
		line._children = points;
		line._loop = true;
		// Model
		line._model = me._resolveDatasetElementOptions(line);

		line.pivot();

		// Update Points
		for (i = 0, ilen = points.length; i < ilen; ++i) {
			me.updateElement(points[i], i, reset);
		}

		// Update bezier control points
		me.updateBezierControlPoints();

		// Now pivot the point for animation
		for (i = 0, ilen = points.length; i < ilen; ++i) {
			points[i].pivot();
		}
	},

	updateElement: function(point, index, reset) {
		var me = this;
		var custom = point.custom || {};
		var dataset = me.getDataset();
		var scale = me.chart.scale;
		var pointPosition = scale.getPointPositionForValue(index, dataset.data[index]);
		var options = me._resolveDataElementOptions(point, index);
		var lineModel = me.getMeta().dataset._model;
		var x = reset ? scale.xCenter : pointPosition.x;
		var y = reset ? scale.yCenter : pointPosition.y;

		// Utility
		point._scale = scale;
		point._options = options;
		point._datasetIndex = me.index;
		point._index = index;

		// Desired view properties
		point._model = {
			x: x, // value not used in dataset scale, but we want a consistent API between scales
			y: y,
			skip: custom.skip || isNaN(x) || isNaN(y),
			// Appearance
			radius: options.radius,
			pointStyle: options.pointStyle,
			rotation: options.rotation,
			backgroundColor: options.backgroundColor,
			borderColor: options.borderColor,
			borderWidth: options.borderWidth,
			tension: valueOrDefault$7(custom.tension, lineModel ? lineModel.tension : 0),

			// Tooltip
			hitRadius: options.hitRadius
		};
	},

	/**
	 * @private
	 */
	_resolveDatasetElementOptions: function() {
		var me = this;
		var config = me._config;
		var options = me.chart.options;
		var values = core_datasetController.prototype._resolveDatasetElementOptions.apply(me, arguments);

		values.spanGaps = valueOrDefault$7(config.spanGaps, options.spanGaps);
		values.tension = valueOrDefault$7(config.lineTension, options.elements.line.tension);

		return values;
	},

	updateBezierControlPoints: function() {
		var me = this;
		var meta = me.getMeta();
		var area = me.chart.chartArea;
		var points = meta.data || [];
		var i, ilen, model, controlPoints;

		// Only consider points that are drawn in case the spanGaps option is used
		if (meta.dataset._model.spanGaps) {
			points = points.filter(function(pt) {
				return !pt._model.skip;
			});
		}

		function capControlPoint(pt, min, max) {
			return Math.max(Math.min(pt, max), min);
		}

		for (i = 0, ilen = points.length; i < ilen; ++i) {
			model = points[i]._model;
			controlPoints = helpers$1.splineCurve(
				helpers$1.previousItem(points, i, true)._model,
				model,
				helpers$1.nextItem(points, i, true)._model,
				model.tension
			);

			// Prevent the bezier going outside of the bounds of the graph
			model.controlPointPreviousX = capControlPoint(controlPoints.previous.x, area.left, area.right);
			model.controlPointPreviousY = capControlPoint(controlPoints.previous.y, area.top, area.bottom);
			model.controlPointNextX = capControlPoint(controlPoints.next.x, area.left, area.right);
			model.controlPointNextY = capControlPoint(controlPoints.next.y, area.top, area.bottom);
		}
	},

	setHoverStyle: function(point) {
		var model = point._model;
		var options = point._options;
		var getHoverColor = helpers$1.getHoverColor;

		point.$previousStyle = {
			backgroundColor: model.backgroundColor,
			borderColor: model.borderColor,
			borderWidth: model.borderWidth,
			radius: model.radius
		};

		model.backgroundColor = valueOrDefault$7(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
		model.borderColor = valueOrDefault$7(options.hoverBorderColor, getHoverColor(options.borderColor));
		model.borderWidth = valueOrDefault$7(options.hoverBorderWidth, options.borderWidth);
		model.radius = valueOrDefault$7(options.hoverRadius, options.radius);
	}
});

core_defaults._set('scatter', {
	hover: {
		mode: 'single'
	},

	scales: {
		xAxes: [{
			id: 'x-axis-1',    // need an ID so datasets can reference the scale
			type: 'linear',    // scatter should not use a category axis
			position: 'bottom'
		}],
		yAxes: [{
			id: 'y-axis-1',
			type: 'linear',
			position: 'left'
		}]
	},

	tooltips: {
		callbacks: {
			title: function() {
				return '';     // doesn't make sense for scatter since data are formatted as a point
			},
			label: function(item) {
				return '(' + item.xLabel + ', ' + item.yLabel + ')';
			}
		}
	}
});

core_defaults._set('global', {
	datasets: {
		scatter: {
			showLine: false
		}
	}
});

// Scatter charts use line controllers
var controller_scatter = controller_line;

// NOTE export a map in which the key represents the controller type, not
// the class, and so must be CamelCase in order to be correctly retrieved
// by the controller in core.controller.js (`controllers[meta.type]`).

var controllers = {
	bar: controller_bar,
	bubble: controller_bubble,
	doughnut: controller_doughnut,
	horizontalBar: controller_horizontalBar,
	line: controller_line,
	polarArea: controller_polarArea,
	pie: controller_pie,
	radar: controller_radar,
	scatter: controller_scatter
};

/**
 * Helper function to get relative position for an event
 * @param {Event|IEvent} event - The event to get the position for
 * @param {Chart} chart - The chart
 * @returns {object} the event position
 */
function getRelativePosition(e, chart) {
	if (e.native) {
		return {
			x: e.x,
			y: e.y
		};
	}

	return helpers$1.getRelativePosition(e, chart);
}

/**
 * Helper function to traverse all of the visible elements in the chart
 * @param {Chart} chart - the chart
 * @param {function} handler - the callback to execute for each visible item
 */
function parseVisibleItems(chart, handler) {
	var metasets = chart._getSortedVisibleDatasetMetas();
	var metadata, i, j, ilen, jlen, element;

	for (i = 0, ilen = metasets.length; i < ilen; ++i) {
		metadata = metasets[i].data;
		for (j = 0, jlen = metadata.length; j < jlen; ++j) {
			element = metadata[j];
			if (!element._view.skip) {
				handler(element);
			}
		}
	}
}

/**
 * Helper function to get the items that intersect the event position
 * @param {ChartElement[]} items - elements to filter
 * @param {object} position - the point to be nearest to
 * @return {ChartElement[]} the nearest items
 */
function getIntersectItems(chart, position) {
	var elements = [];

	parseVisibleItems(chart, function(element) {
		if (element.inRange(position.x, position.y)) {
			elements.push(element);
		}
	});

	return elements;
}

/**
 * Helper function to get the items nearest to the event position considering all visible items in teh chart
 * @param {Chart} chart - the chart to look at elements from
 * @param {object} position - the point to be nearest to
 * @param {boolean} intersect - if true, only consider items that intersect the position
 * @param {function} distanceMetric - function to provide the distance between points
 * @return {ChartElement[]} the nearest items
 */
function getNearestItems(chart, position, intersect, distanceMetric) {
	var minDistance = Number.POSITIVE_INFINITY;
	var nearestItems = [];

	parseVisibleItems(chart, function(element) {
		if (intersect && !element.inRange(position.x, position.y)) {
			return;
		}

		var center = element.getCenterPoint();
		var distance = distanceMetric(position, center);
		if (distance < minDistance) {
			nearestItems = [element];
			minDistance = distance;
		} else if (distance === minDistance) {
			// Can have multiple items at the same distance in which case we sort by size
			nearestItems.push(element);
		}
	});

	return nearestItems;
}

/**
 * Get a distance metric function for two points based on the
 * axis mode setting
 * @param {string} axis - the axis mode. x|y|xy
 */
function getDistanceMetricForAxis(axis) {
	var useX = axis.indexOf('x') !== -1;
	var useY = axis.indexOf('y') !== -1;

	return function(pt1, pt2) {
		var deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
		var deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
		return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
	};
}

function indexMode(chart, e, options) {
	var position = getRelativePosition(e, chart);
	// Default axis for index mode is 'x' to match old behaviour
	options.axis = options.axis || 'x';
	var distanceMetric = getDistanceMetricForAxis(options.axis);
	var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false, distanceMetric);
	var elements = [];

	if (!items.length) {
		return [];
	}

	chart._getSortedVisibleDatasetMetas().forEach(function(meta) {
		var element = meta.data[items[0]._index];

		// don't count items that are skipped (null data)
		if (element && !element._view.skip) {
			elements.push(element);
		}
	});

	return elements;
}

/**
 * @interface IInteractionOptions
 */
/**
 * If true, only consider items that intersect the point
 * @name IInterfaceOptions#boolean
 * @type Boolean
 */

/**
 * Contains interaction related functions
 * @namespace Chart.Interaction
 */
var core_interaction = {
	// Helper function for different modes
	modes: {
		single: function(chart, e) {
			var position = getRelativePosition(e, chart);
			var elements = [];

			parseVisibleItems(chart, function(element) {
				if (element.inRange(position.x, position.y)) {
					elements.push(element);
					return elements;
				}
			});

			return elements.slice(0, 1);
		},

		/**
		 * @function Chart.Interaction.modes.label
		 * @deprecated since version 2.4.0
		 * @todo remove at version 3
		 * @private
		 */
		label: indexMode,

		/**
		 * Returns items at the same index. If the options.intersect parameter is true, we only return items if we intersect something
		 * If the options.intersect mode is false, we find the nearest item and return the items at the same index as that item
		 * @function Chart.Interaction.modes.index
		 * @since v2.4.0
		 * @param {Chart} chart - the chart we are returning items from
		 * @param {Event} e - the event we are find things at
		 * @param {IInteractionOptions} options - options to use during interaction
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		index: indexMode,

		/**
		 * Returns items in the same dataset. If the options.intersect parameter is true, we only return items if we intersect something
		 * If the options.intersect is false, we find the nearest item and return the items in that dataset
		 * @function Chart.Interaction.modes.dataset
		 * @param {Chart} chart - the chart we are returning items from
		 * @param {Event} e - the event we are find things at
		 * @param {IInteractionOptions} options - options to use during interaction
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		dataset: function(chart, e, options) {
			var position = getRelativePosition(e, chart);
			options.axis = options.axis || 'xy';
			var distanceMetric = getDistanceMetricForAxis(options.axis);
			var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false, distanceMetric);

			if (items.length > 0) {
				items = chart.getDatasetMeta(items[0]._datasetIndex).data;
			}

			return items;
		},

		/**
		 * @function Chart.Interaction.modes.x-axis
		 * @deprecated since version 2.4.0. Use index mode and intersect == true
		 * @todo remove at version 3
		 * @private
		 */
		'x-axis': function(chart, e) {
			return indexMode(chart, e, {intersect: false});
		},

		/**
		 * Point mode returns all elements that hit test based on the event position
		 * of the event
		 * @function Chart.Interaction.modes.intersect
		 * @param {Chart} chart - the chart we are returning items from
		 * @param {Event} e - the event we are find things at
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		point: function(chart, e) {
			var position = getRelativePosition(e, chart);
			return getIntersectItems(chart, position);
		},

		/**
		 * nearest mode returns the element closest to the point
		 * @function Chart.Interaction.modes.intersect
		 * @param {Chart} chart - the chart we are returning items from
		 * @param {Event} e - the event we are find things at
		 * @param {IInteractionOptions} options - options to use
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		nearest: function(chart, e, options) {
			var position = getRelativePosition(e, chart);
			options.axis = options.axis || 'xy';
			var distanceMetric = getDistanceMetricForAxis(options.axis);
			return getNearestItems(chart, position, options.intersect, distanceMetric);
		},

		/**
		 * x mode returns the elements that hit-test at the current x coordinate
		 * @function Chart.Interaction.modes.x
		 * @param {Chart} chart - the chart we are returning items from
		 * @param {Event} e - the event we are find things at
		 * @param {IInteractionOptions} options - options to use
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		x: function(chart, e, options) {
			var position = getRelativePosition(e, chart);
			var items = [];
			var intersectsItem = false;

			parseVisibleItems(chart, function(element) {
				if (element.inXRange(position.x)) {
					items.push(element);
				}

				if (element.inRange(position.x, position.y)) {
					intersectsItem = true;
				}
			});

			// If we want to trigger on an intersect and we don't have any items
			// that intersect the position, return nothing
			if (options.intersect && !intersectsItem) {
				items = [];
			}
			return items;
		},

		/**
		 * y mode returns the elements that hit-test at the current y coordinate
		 * @function Chart.Interaction.modes.y
		 * @param {Chart} chart - the chart we are returning items from
		 * @param {Event} e - the event we are find things at
		 * @param {IInteractionOptions} options - options to use
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		y: function(chart, e, options) {
			var position = getRelativePosition(e, chart);
			var items = [];
			var intersectsItem = false;

			parseVisibleItems(chart, function(element) {
				if (element.inYRange(position.y)) {
					items.push(element);
				}

				if (element.inRange(position.x, position.y)) {
					intersectsItem = true;
				}
			});

			// If we want to trigger on an intersect and we don't have any items
			// that intersect the position, return nothing
			if (options.intersect && !intersectsItem) {
				items = [];
			}
			return items;
		}
	}
};

var extend = helpers$1.extend;

function filterByPosition(array, position) {
	return helpers$1.where(array, function(v) {
		return v.pos === position;
	});
}

function sortByWeight(array, reverse) {
	return array.sort(function(a, b) {
		var v0 = reverse ? b : a;
		var v1 = reverse ? a : b;
		return v0.weight === v1.weight ?
			v0.index - v1.index :
			v0.weight - v1.weight;
	});
}

function wrapBoxes(boxes) {
	var layoutBoxes = [];
	var i, ilen, box;

	for (i = 0, ilen = (boxes || []).length; i < ilen; ++i) {
		box = boxes[i];
		layoutBoxes.push({
			index: i,
			box: box,
			pos: box.position,
			horizontal: box.isHorizontal(),
			weight: box.weight
		});
	}
	return layoutBoxes;
}

function setLayoutDims(layouts, params) {
	var i, ilen, layout;
	for (i = 0, ilen = layouts.length; i < ilen; ++i) {
		layout = layouts[i];
		// store width used instead of chartArea.w in fitBoxes
		layout.width = layout.horizontal
			? layout.box.fullWidth && params.availableWidth
			: params.vBoxMaxWidth;
		// store height used instead of chartArea.h in fitBoxes
		layout.height = layout.horizontal && params.hBoxMaxHeight;
	}
}

function buildLayoutBoxes(boxes) {
	var layoutBoxes = wrapBoxes(boxes);
	var left = sortByWeight(filterByPosition(layoutBoxes, 'left'), true);
	var right = sortByWeight(filterByPosition(layoutBoxes, 'right'));
	var top = sortByWeight(filterByPosition(layoutBoxes, 'top'), true);
	var bottom = sortByWeight(filterByPosition(layoutBoxes, 'bottom'));

	return {
		leftAndTop: left.concat(top),
		rightAndBottom: right.concat(bottom),
		chartArea: filterByPosition(layoutBoxes, 'chartArea'),
		vertical: left.concat(right),
		horizontal: top.concat(bottom)
	};
}

function getCombinedMax(maxPadding, chartArea, a, b) {
	return Math.max(maxPadding[a], chartArea[a]) + Math.max(maxPadding[b], chartArea[b]);
}

function updateDims(chartArea, params, layout) {
	var box = layout.box;
	var maxPadding = chartArea.maxPadding;
	var newWidth, newHeight;

	if (layout.size) {
		// this layout was already counted for, lets first reduce old size
		chartArea[layout.pos] -= layout.size;
	}
	layout.size = layout.horizontal ? box.height : box.width;
	chartArea[layout.pos] += layout.size;

	if (box.getPadding) {
		var boxPadding = box.getPadding();
		maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
		maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
		maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
		maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
	}

	newWidth = params.outerWidth - getCombinedMax(maxPadding, chartArea, 'left', 'right');
	newHeight = params.outerHeight - getCombinedMax(maxPadding, chartArea, 'top', 'bottom');

	if (newWidth !== chartArea.w || newHeight !== chartArea.h) {
		chartArea.w = newWidth;
		chartArea.h = newHeight;

		// return true if chart area changed in layout's direction
		return layout.horizontal ? newWidth !== chartArea.w : newHeight !== chartArea.h;
	}
}

function handleMaxPadding(chartArea) {
	var maxPadding = chartArea.maxPadding;

	function updatePos(pos) {
		var change = Math.max(maxPadding[pos] - chartArea[pos], 0);
		chartArea[pos] += change;
		return change;
	}
	chartArea.y += updatePos('top');
	chartArea.x += updatePos('left');
	updatePos('right');
	updatePos('bottom');
}

function getMargins(horizontal, chartArea) {
	var maxPadding = chartArea.maxPadding;

	function marginForPositions(positions) {
		var margin = {left: 0, top: 0, right: 0, bottom: 0};
		positions.forEach(function(pos) {
			margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
		});
		return margin;
	}

	return horizontal
		? marginForPositions(['left', 'right'])
		: marginForPositions(['top', 'bottom']);
}

function fitBoxes(boxes, chartArea, params) {
	var refitBoxes = [];
	var i, ilen, layout, box, refit, changed;

	for (i = 0, ilen = boxes.length; i < ilen; ++i) {
		layout = boxes[i];
		box = layout.box;

		box.update(
			layout.width || chartArea.w,
			layout.height || chartArea.h,
			getMargins(layout.horizontal, chartArea)
		);
		if (updateDims(chartArea, params, layout)) {
			changed = true;
			if (refitBoxes.length) {
				// Dimensions changed and there were non full width boxes before this
				// -> we have to refit those
				refit = true;
			}
		}
		if (!box.fullWidth) { // fullWidth boxes don't need to be re-fitted in any case
			refitBoxes.push(layout);
		}
	}

	return refit ? fitBoxes(refitBoxes, chartArea, params) || changed : changed;
}

function placeBoxes(boxes, chartArea, params) {
	var userPadding = params.padding;
	var x = chartArea.x;
	var y = chartArea.y;
	var i, ilen, layout, box;

	for (i = 0, ilen = boxes.length; i < ilen; ++i) {
		layout = boxes[i];
		box = layout.box;
		if (layout.horizontal) {
			box.left = box.fullWidth ? userPadding.left : chartArea.left;
			box.right = box.fullWidth ? params.outerWidth - userPadding.right : chartArea.left + chartArea.w;
			box.top = y;
			box.bottom = y + box.height;
			box.width = box.right - box.left;
			y = box.bottom;
		} else {
			box.left = x;
			box.right = x + box.width;
			box.top = chartArea.top;
			box.bottom = chartArea.top + chartArea.h;
			box.height = box.bottom - box.top;
			x = box.right;
		}
	}

	chartArea.x = x;
	chartArea.y = y;
}

core_defaults._set('global', {
	layout: {
		padding: {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		}
	}
});

/**
 * @interface ILayoutItem
 * @prop {string} position - The position of the item in the chart layout. Possible values are
 * 'left', 'top', 'right', 'bottom', and 'chartArea'
 * @prop {number} weight - The weight used to sort the item. Higher weights are further away from the chart area
 * @prop {boolean} fullWidth - if true, and the item is horizontal, then push vertical boxes down
 * @prop {function} isHorizontal - returns true if the layout item is horizontal (ie. top or bottom)
 * @prop {function} update - Takes two parameters: width and height. Returns size of item
 * @prop {function} getPadding -  Returns an object with padding on the edges
 * @prop {number} width - Width of item. Must be valid after update()
 * @prop {number} height - Height of item. Must be valid after update()
 * @prop {number} left - Left edge of the item. Set by layout system and cannot be used in update
 * @prop {number} top - Top edge of the item. Set by layout system and cannot be used in update
 * @prop {number} right - Right edge of the item. Set by layout system and cannot be used in update
 * @prop {number} bottom - Bottom edge of the item. Set by layout system and cannot be used in update
 */

// The layout service is very self explanatory.  It's responsible for the layout within a chart.
// Scales, Legends and Plugins all rely on the layout service and can easily register to be placed anywhere they need
// It is this service's responsibility of carrying out that layout.
var core_layouts = {
	defaults: {},

	/**
	 * Register a box to a chart.
	 * A box is simply a reference to an object that requires layout. eg. Scales, Legend, Title.
	 * @param {Chart} chart - the chart to use
	 * @param {ILayoutItem} item - the item to add to be layed out
	 */
	addBox: function(chart, item) {
		if (!chart.boxes) {
			chart.boxes = [];
		}

		// initialize item with default values
		item.fullWidth = item.fullWidth || false;
		item.position = item.position || 'top';
		item.weight = item.weight || 0;
		item._layers = item._layers || function() {
			return [{
				z: 0,
				draw: function() {
					item.draw.apply(item, arguments);
				}
			}];
		};

		chart.boxes.push(item);
	},

	/**
	 * Remove a layoutItem from a chart
	 * @param {Chart} chart - the chart to remove the box from
	 * @param {ILayoutItem} layoutItem - the item to remove from the layout
	 */
	removeBox: function(chart, layoutItem) {
		var index = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;
		if (index !== -1) {
			chart.boxes.splice(index, 1);
		}
	},

	/**
	 * Sets (or updates) options on the given `item`.
	 * @param {Chart} chart - the chart in which the item lives (or will be added to)
	 * @param {ILayoutItem} item - the item to configure with the given options
	 * @param {object} options - the new item options.
	 */
	configure: function(chart, item, options) {
		var props = ['fullWidth', 'position', 'weight'];
		var ilen = props.length;
		var i = 0;
		var prop;

		for (; i < ilen; ++i) {
			prop = props[i];
			if (options.hasOwnProperty(prop)) {
				item[prop] = options[prop];
			}
		}
	},

	/**
	 * Fits boxes of the given chart into the given size by having each box measure itself
	 * then running a fitting algorithm
	 * @param {Chart} chart - the chart
	 * @param {number} width - the width to fit into
	 * @param {number} height - the height to fit into
	 */
	update: function(chart, width, height) {
		if (!chart) {
			return;
		}

		var layoutOptions = chart.options.layout || {};
		var padding = helpers$1.options.toPadding(layoutOptions.padding);

		var availableWidth = width - padding.width;
		var availableHeight = height - padding.height;
		var boxes = buildLayoutBoxes(chart.boxes);
		var verticalBoxes = boxes.vertical;
		var horizontalBoxes = boxes.horizontal;

		// Essentially we now have any number of boxes on each of the 4 sides.
		// Our canvas looks like the following.
		// The areas L1 and L2 are the left axes. R1 is the right axis, T1 is the top axis and
		// B1 is the bottom axis
		// There are also 4 quadrant-like locations (left to right instead of clockwise) reserved for chart overlays
		// These locations are single-box locations only, when trying to register a chartArea location that is already taken,
		// an error will be thrown.
		//
		// |----------------------------------------------------|
		// |                  T1 (Full Width)                   |
		// |----------------------------------------------------|
		// |    |    |                 T2                  |    |
		// |    |----|-------------------------------------|----|
		// |    |    | C1 |                           | C2 |    |
		// |    |    |----|                           |----|    |
		// |    |    |                                     |    |
		// | L1 | L2 |           ChartArea (C0)            | R1 |
		// |    |    |                                     |    |
		// |    |    |----|                           |----|    |
		// |    |    | C3 |                           | C4 |    |
		// |    |----|-------------------------------------|----|
		// |    |    |                 B1                  |    |
		// |----------------------------------------------------|
		// |                  B2 (Full Width)                   |
		// |----------------------------------------------------|
		//

		var params = Object.freeze({
			outerWidth: width,
			outerHeight: height,
			padding: padding,
			availableWidth: availableWidth,
			vBoxMaxWidth: availableWidth / 2 / verticalBoxes.length,
			hBoxMaxHeight: availableHeight / 2
		});
		var chartArea = extend({
			maxPadding: extend({}, padding),
			w: availableWidth,
			h: availableHeight,
			x: padding.left,
			y: padding.top
		}, padding);

		setLayoutDims(verticalBoxes.concat(horizontalBoxes), params);

		// First fit vertical boxes
		fitBoxes(verticalBoxes, chartArea, params);

		// Then fit horizontal boxes
		if (fitBoxes(horizontalBoxes, chartArea, params)) {
			// if the area changed, re-fit vertical boxes
			fitBoxes(verticalBoxes, chartArea, params);
		}

		handleMaxPadding(chartArea);

		// Finally place the boxes to correct coordinates
		placeBoxes(boxes.leftAndTop, chartArea, params);

		// Move to opposite side of chart
		chartArea.x += chartArea.w;
		chartArea.y += chartArea.h;

		placeBoxes(boxes.rightAndBottom, chartArea, params);

		chart.chartArea = {
			left: chartArea.left,
			top: chartArea.top,
			right: chartArea.left + chartArea.w,
			bottom: chartArea.top + chartArea.h
		};

		// Finally update boxes in chartArea (radial scale for example)
		helpers$1.each(boxes.chartArea, function(layout) {
			var box = layout.box;
			extend(box, chart.chartArea);
			box.update(chartArea.w, chartArea.h);
		});
	}
};

/**
 * Platform fallback implementation (minimal).
 * @see https://github.com/chartjs/Chart.js/pull/4591#issuecomment-319575939
 */

var platform_basic = {
	acquireContext: function(item) {
		if (item && item.canvas) {
			// Support for any object associated to a canvas (including a context2d)
			item = item.canvas;
		}

		return item && item.getContext('2d') || null;
	}
};

var platform_dom = "/*\n * DOM element rendering detection\n * https://davidwalsh.name/detect-node-insertion\n */\n@keyframes chartjs-render-animation {\n\tfrom { opacity: 0.99; }\n\tto { opacity: 1; }\n}\n\n.chartjs-render-monitor {\n\tanimation: chartjs-render-animation 0.001s;\n}\n\n/*\n * DOM element resizing detection\n * https://github.com/marcj/css-element-queries\n */\n.chartjs-size-monitor,\n.chartjs-size-monitor-expand,\n.chartjs-size-monitor-shrink {\n\tposition: absolute;\n\tdirection: ltr;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\tvisibility: hidden;\n\tz-index: -1;\n}\n\n.chartjs-size-monitor-expand > div {\n\tposition: absolute;\n\twidth: 1000000px;\n\theight: 1000000px;\n\tleft: 0;\n\ttop: 0;\n}\n\n.chartjs-size-monitor-shrink > div {\n\tposition: absolute;\n\twidth: 200%;\n\theight: 200%;\n\tleft: 0;\n\ttop: 0;\n}\n";

var platform_dom$1 = /*#__PURE__*/Object.freeze({
__proto__: null,
'default': platform_dom
});

var stylesheet = getCjsExportFromNamespace(platform_dom$1);

var EXPANDO_KEY = '$chartjs';
var CSS_PREFIX = 'chartjs-';
var CSS_SIZE_MONITOR = CSS_PREFIX + 'size-monitor';
var CSS_RENDER_MONITOR = CSS_PREFIX + 'render-monitor';
var CSS_RENDER_ANIMATION = CSS_PREFIX + 'render-animation';
var ANIMATION_START_EVENTS = ['animationstart', 'webkitAnimationStart'];

/**
 * DOM event types -> Chart.js event types.
 * Note: only events with different types are mapped.
 * @see https://developer.mozilla.org/en-US/docs/Web/Events
 */
var EVENT_TYPES = {
	touchstart: 'mousedown',
	touchmove: 'mousemove',
	touchend: 'mouseup',
	pointerenter: 'mouseenter',
	pointerdown: 'mousedown',
	pointermove: 'mousemove',
	pointerup: 'mouseup',
	pointerleave: 'mouseout',
	pointerout: 'mouseout'
};

/**
 * The "used" size is the final value of a dimension property after all calculations have
 * been performed. This method uses the computed style of `element` but returns undefined
 * if the computed style is not expressed in pixels. That can happen in some cases where
 * `element` has a size relative to its parent and this last one is not yet displayed,
 * for example because of `display: none` on a parent node.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
 * @returns {number} Size in pixels or undefined if unknown.
 */
function readUsedSize(element, property) {
	var value = helpers$1.getStyle(element, property);
	var matches = value && value.match(/^(\d+)(\.\d+)?px$/);
	return matches ? Number(matches[1]) : undefined;
}

/**
 * Initializes the canvas style and render size without modifying the canvas display size,
 * since responsiveness is handled by the controller.resize() method. The config is used
 * to determine the aspect ratio to apply in case no explicit height has been specified.
 */
function initCanvas(canvas, config) {
	var style = canvas.style;

	// NOTE(SB) canvas.getAttribute('width') !== canvas.width: in the first case it
	// returns null or '' if no explicit value has been set to the canvas attribute.
	var renderHeight = canvas.getAttribute('height');
	var renderWidth = canvas.getAttribute('width');

	// Chart.js modifies some canvas values that we want to restore on destroy
	canvas[EXPANDO_KEY] = {
		initial: {
			height: renderHeight,
			width: renderWidth,
			style: {
				display: style.display,
				height: style.height,
				width: style.width
			}
		}
	};

	// Force canvas to display as block to avoid extra space caused by inline
	// elements, which would interfere with the responsive resize process.
	// https://github.com/chartjs/Chart.js/issues/2538
	style.display = style.display || 'block';

	if (renderWidth === null || renderWidth === '') {
		var displayWidth = readUsedSize(canvas, 'width');
		if (displayWidth !== undefined) {
			canvas.width = displayWidth;
		}
	}

	if (renderHeight === null || renderHeight === '') {
		if (canvas.style.height === '') {
			// If no explicit render height and style height, let's apply the aspect ratio,
			// which one can be specified by the user but also by charts as default option
			// (i.e. options.aspectRatio). If not specified, use canvas aspect ratio of 2.
			canvas.height = canvas.width / (config.options.aspectRatio || 2);
		} else {
			var displayHeight = readUsedSize(canvas, 'height');
			if (displayWidth !== undefined) {
				canvas.height = displayHeight;
			}
		}
	}

	return canvas;
}

/**
 * Detects support for options object argument in addEventListener.
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
 * @private
 */
var supportsEventListenerOptions = (function() {
	var supports = false;
	try {
		var options = Object.defineProperty({}, 'passive', {
			// eslint-disable-next-line getter-return
			get: function() {
				supports = true;
			}
		});
		window.addEventListener('e', null, options);
	} catch (e) {
		// continue regardless of error
	}
	return supports;
}());

// Default passive to true as expected by Chrome for 'touchstart' and 'touchend' events.
// https://github.com/chartjs/Chart.js/issues/4287
var eventListenerOptions = supportsEventListenerOptions ? {passive: true} : false;

function addListener(node, type, listener) {
	node.addEventListener(type, listener, eventListenerOptions);
}

function removeListener(node, type, listener) {
	node.removeEventListener(type, listener, eventListenerOptions);
}

function createEvent(type, chart, x, y, nativeEvent) {
	return {
		type: type,
		chart: chart,
		native: nativeEvent || null,
		x: x !== undefined ? x : null,
		y: y !== undefined ? y : null,
	};
}

function fromNativeEvent(event, chart) {
	var type = EVENT_TYPES[event.type] || event.type;
	var pos = helpers$1.getRelativePosition(event, chart);
	return createEvent(type, chart, pos.x, pos.y, event);
}

function throttled(fn, thisArg) {
	var ticking = false;
	var args = [];

	return function() {
		args = Array.prototype.slice.call(arguments);
		thisArg = thisArg || this;

		if (!ticking) {
			ticking = true;
			helpers$1.requestAnimFrame.call(window, function() {
				ticking = false;
				fn.apply(thisArg, args);
			});
		}
	};
}

function createDiv(cls) {
	var el = document.createElement('div');
	el.className = cls || '';
	return el;
}

// Implementation based on https://github.com/marcj/css-element-queries
function createResizer(handler) {
	var maxSize = 1000000;

	// NOTE(SB) Don't use innerHTML because it could be considered unsafe.
	// https://github.com/chartjs/Chart.js/issues/5902
	var resizer = createDiv(CSS_SIZE_MONITOR);
	var expand = createDiv(CSS_SIZE_MONITOR + '-expand');
	var shrink = createDiv(CSS_SIZE_MONITOR + '-shrink');

	expand.appendChild(createDiv());
	shrink.appendChild(createDiv());

	resizer.appendChild(expand);
	resizer.appendChild(shrink);
	resizer._reset = function() {
		expand.scrollLeft = maxSize;
		expand.scrollTop = maxSize;
		shrink.scrollLeft = maxSize;
		shrink.scrollTop = maxSize;
	};

	var onScroll = function() {
		resizer._reset();
		handler();
	};

	addListener(expand, 'scroll', onScroll.bind(expand, 'expand'));
	addListener(shrink, 'scroll', onScroll.bind(shrink, 'shrink'));

	return resizer;
}

// https://davidwalsh.name/detect-node-insertion
function watchForRender(node, handler) {
	var expando = node[EXPANDO_KEY] || (node[EXPANDO_KEY] = {});
	var proxy = expando.renderProxy = function(e) {
		if (e.animationName === CSS_RENDER_ANIMATION) {
			handler();
		}
	};

	helpers$1.each(ANIMATION_START_EVENTS, function(type) {
		addListener(node, type, proxy);
	});

	// #4737: Chrome might skip the CSS animation when the CSS_RENDER_MONITOR class
	// is removed then added back immediately (same animation frame?). Accessing the
	// `offsetParent` property will force a reflow and re-evaluate the CSS animation.
	// https://gist.github.com/paulirish/5d52fb081b3570c81e3a#box-metrics
	// https://github.com/chartjs/Chart.js/issues/4737
	expando.reflow = !!node.offsetParent;

	node.classList.add(CSS_RENDER_MONITOR);
}

function unwatchForRender(node) {
	var expando = node[EXPANDO_KEY] || {};
	var proxy = expando.renderProxy;

	if (proxy) {
		helpers$1.each(ANIMATION_START_EVENTS, function(type) {
			removeListener(node, type, proxy);
		});

		delete expando.renderProxy;
	}

	node.classList.remove(CSS_RENDER_MONITOR);
}

function addResizeListener(node, listener, chart) {
	var expando = node[EXPANDO_KEY] || (node[EXPANDO_KEY] = {});

	// Let's keep track of this added resizer and thus avoid DOM query when removing it.
	var resizer = expando.resizer = createResizer(throttled(function() {
		if (expando.resizer) {
			var container = chart.options.maintainAspectRatio && node.parentNode;
			var w = container ? container.clientWidth : 0;
			listener(createEvent('resize', chart));
			if (container && container.clientWidth < w && chart.canvas) {
				// If the container size shrank during chart resize, let's assume
				// scrollbar appeared. So we resize again with the scrollbar visible -
				// effectively making chart smaller and the scrollbar hidden again.
				// Because we are inside `throttled`, and currently `ticking`, scroll
				// events are ignored during this whole 2 resize process.
				// If we assumed wrong and something else happened, we are resizing
				// twice in a frame (potential performance issue)
				listener(createEvent('resize', chart));
			}
		}
	}));

	// The resizer needs to be attached to the node parent, so we first need to be
	// sure that `node` is attached to the DOM before injecting the resizer element.
	watchForRender(node, function() {
		if (expando.resizer) {
			var container = node.parentNode;
			if (container && container !== resizer.parentNode) {
				container.insertBefore(resizer, container.firstChild);
			}

			// The container size might have changed, let's reset the resizer state.
			resizer._reset();
		}
	});
}

function removeResizeListener(node) {
	var expando = node[EXPANDO_KEY] || {};
	var resizer = expando.resizer;

	delete expando.resizer;
	unwatchForRender(node);

	if (resizer && resizer.parentNode) {
		resizer.parentNode.removeChild(resizer);
	}
}

/**
 * Injects CSS styles inline if the styles are not already present.
 * @param {HTMLDocument|ShadowRoot} rootNode - the node to contain the <style>.
 * @param {string} css - the CSS to be injected.
 */
function injectCSS(rootNode, css) {
	// https://stackoverflow.com/q/3922139
	var expando = rootNode[EXPANDO_KEY] || (rootNode[EXPANDO_KEY] = {});
	if (!expando.containsStyles) {
		expando.containsStyles = true;
		css = '/* Chart.js */\n' + css;
		var style = document.createElement('style');
		style.setAttribute('type', 'text/css');
		style.appendChild(document.createTextNode(css));
		rootNode.appendChild(style);
	}
}

var platform_dom$2 = {
	/**
	 * When `true`, prevents the automatic injection of the stylesheet required to
	 * correctly detect when the chart is added to the DOM and then resized. This
	 * switch has been added to allow external stylesheet (`dist/Chart(.min)?.js`)
	 * to be manually imported to make this library compatible with any CSP.
	 * See https://github.com/chartjs/Chart.js/issues/5208
	 */
	disableCSSInjection: false,

	/**
	 * This property holds whether this platform is enabled for the current environment.
	 * Currently used by platform.js to select the proper implementation.
	 * @private
	 */
	_enabled: typeof window !== 'undefined' && typeof document !== 'undefined',

	/**
	 * Initializes resources that depend on platform options.
	 * @param {HTMLCanvasElement} canvas - The Canvas element.
	 * @private
	 */
	_ensureLoaded: function(canvas) {
		if (!this.disableCSSInjection) {
			// If the canvas is in a shadow DOM, then the styles must also be inserted
			// into the same shadow DOM.
			// https://github.com/chartjs/Chart.js/issues/5763
			var root = canvas.getRootNode ? canvas.getRootNode() : document;
			var targetNode = root.host ? root : document.head;
			injectCSS(targetNode, stylesheet);
		}
	},

	acquireContext: function(item, config) {
		if (typeof item === 'string') {
			item = document.getElementById(item);
		} else if (item.length) {
			// Support for array based queries (such as jQuery)
			item = item[0];
		}

		if (item && item.canvas) {
			// Support for any object associated to a canvas (including a context2d)
			item = item.canvas;
		}

		// To prevent canvas fingerprinting, some add-ons undefine the getContext
		// method, for example: https://github.com/kkapsner/CanvasBlocker
		// https://github.com/chartjs/Chart.js/issues/2807
		var context = item && item.getContext && item.getContext('2d');

		// `instanceof HTMLCanvasElement/CanvasRenderingContext2D` fails when the item is
		// inside an iframe or when running in a protected environment. We could guess the
		// types from their toString() value but let's keep things flexible and assume it's
		// a sufficient condition if the item has a context2D which has item as `canvas`.
		// https://github.com/chartjs/Chart.js/issues/3887
		// https://github.com/chartjs/Chart.js/issues/4102
		// https://github.com/chartjs/Chart.js/issues/4152
		if (context && context.canvas === item) {
			// Load platform resources on first chart creation, to make it possible to
			// import the library before setting platform options.
			this._ensureLoaded(item);
			initCanvas(item, config);
			return context;
		}

		return null;
	},

	releaseContext: function(context) {
		var canvas = context.canvas;
		if (!canvas[EXPANDO_KEY]) {
			return;
		}

		var initial = canvas[EXPANDO_KEY].initial;
		['height', 'width'].forEach(function(prop) {
			var value = initial[prop];
			if (helpers$1.isNullOrUndef(value)) {
				canvas.removeAttribute(prop);
			} else {
				canvas.setAttribute(prop, value);
			}
		});

		helpers$1.each(initial.style || {}, function(value, key) {
			canvas.style[key] = value;
		});

		// The canvas render size might have been changed (and thus the state stack discarded),
		// we can't use save() and restore() to restore the initial state. So make sure that at
		// least the canvas context is reset to the default state by setting the canvas width.
		// https://www.w3.org/TR/2011/WD-html5-20110525/the-canvas-element.html
		// eslint-disable-next-line no-self-assign
		canvas.width = canvas.width;

		delete canvas[EXPANDO_KEY];
	},

	addEventListener: function(chart, type, listener) {
		var canvas = chart.canvas;
		if (type === 'resize') {
			// Note: the resize event is not supported on all browsers.
			addResizeListener(canvas, listener, chart);
			return;
		}

		var expando = listener[EXPANDO_KEY] || (listener[EXPANDO_KEY] = {});
		var proxies = expando.proxies || (expando.proxies = {});
		var proxy = proxies[chart.id + '_' + type] = function(event) {
			listener(fromNativeEvent(event, chart));
		};

		addListener(canvas, type, proxy);
	},

	removeEventListener: function(chart, type, listener) {
		var canvas = chart.canvas;
		if (type === 'resize') {
			// Note: the resize event is not supported on all browsers.
			removeResizeListener(canvas);
			return;
		}

		var expando = listener[EXPANDO_KEY] || {};
		var proxies = expando.proxies || {};
		var proxy = proxies[chart.id + '_' + type];
		if (!proxy) {
			return;
		}

		removeListener(canvas, type, proxy);
	}
};

// DEPRECATIONS

/**
 * Provided for backward compatibility, use EventTarget.addEventListener instead.
 * EventTarget.addEventListener compatibility: Chrome, Opera 7, Safari, FF1.5+, IE9+
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 * @function Chart.helpers.addEvent
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers$1.addEvent = addListener;

/**
 * Provided for backward compatibility, use EventTarget.removeEventListener instead.
 * EventTarget.removeEventListener compatibility: Chrome, Opera 7, Safari, FF1.5+, IE9+
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
 * @function Chart.helpers.removeEvent
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers$1.removeEvent = removeListener;

// @TODO Make possible to select another platform at build time.
var implementation = platform_dom$2._enabled ? platform_dom$2 : platform_basic;

/**
 * @namespace Chart.platform
 * @see https://chartjs.gitbooks.io/proposals/content/Platform.html
 * @since 2.4.0
 */
var platform = helpers$1.extend({
	/**
	 * @since 2.7.0
	 */
	initialize: function() {},

	/**
	 * Called at chart construction time, returns a context2d instance implementing
	 * the [W3C Canvas 2D Context API standard]{@link https://www.w3.org/TR/2dcontext/}.
	 * @param {*} item - The native item from which to acquire context (platform specific)
	 * @param {object} options - The chart options
	 * @returns {CanvasRenderingContext2D} context2d instance
	 */
	acquireContext: function() {},

	/**
	 * Called at chart destruction time, releases any resources associated to the context
	 * previously returned by the acquireContext() method.
	 * @param {CanvasRenderingContext2D} context - The context2d instance
	 * @returns {boolean} true if the method succeeded, else false
	 */
	releaseContext: function() {},

	/**
	 * Registers the specified listener on the given chart.
	 * @param {Chart} chart - Chart from which to listen for event
	 * @param {string} type - The ({@link IEvent}) type to listen for
	 * @param {function} listener - Receives a notification (an object that implements
	 * the {@link IEvent} interface) when an event of the specified type occurs.
	 */
	addEventListener: function() {},

	/**
	 * Removes the specified listener previously registered with addEventListener.
	 * @param {Chart} chart - Chart from which to remove the listener
	 * @param {string} type - The ({@link IEvent}) type to remove
	 * @param {function} listener - The listener function to remove from the event target.
	 */
	removeEventListener: function() {}

}, implementation);

core_defaults._set('global', {
	plugins: {}
});

/**
 * The plugin service singleton
 * @namespace Chart.plugins
 * @since 2.1.0
 */
var core_plugins = {
	/**
	 * Globally registered plugins.
	 * @private
	 */
	_plugins: [],

	/**
	 * This identifier is used to invalidate the descriptors cache attached to each chart
	 * when a global plugin is registered or unregistered. In this case, the cache ID is
	 * incremented and descriptors are regenerated during following API calls.
	 * @private
	 */
	_cacheId: 0,

	/**
	 * Registers the given plugin(s) if not already registered.
	 * @param {IPlugin[]|IPlugin} plugins plugin instance(s).
	 */
	register: function(plugins) {
		var p = this._plugins;
		([]).concat(plugins).forEach(function(plugin) {
			if (p.indexOf(plugin) === -1) {
				p.push(plugin);
			}
		});

		this._cacheId++;
	},

	/**
	 * Unregisters the given plugin(s) only if registered.
	 * @param {IPlugin[]|IPlugin} plugins plugin instance(s).
	 */
	unregister: function(plugins) {
		var p = this._plugins;
		([]).concat(plugins).forEach(function(plugin) {
			var idx = p.indexOf(plugin);
			if (idx !== -1) {
				p.splice(idx, 1);
			}
		});

		this._cacheId++;
	},

	/**
	 * Remove all registered plugins.
	 * @since 2.1.5
	 */
	clear: function() {
		this._plugins = [];
		this._cacheId++;
	},

	/**
	 * Returns the number of registered plugins?
	 * @returns {number}
	 * @since 2.1.5
	 */
	count: function() {
		return this._plugins.length;
	},

	/**
	 * Returns all registered plugin instances.
	 * @returns {IPlugin[]} array of plugin objects.
	 * @since 2.1.5
	 */
	getAll: function() {
		return this._plugins;
	},

	/**
	 * Calls enabled plugins for `chart` on the specified hook and with the given args.
	 * This method immediately returns as soon as a plugin explicitly returns false. The
	 * returned value can be used, for instance, to interrupt the current action.
	 * @param {Chart} chart - The chart instance for which plugins should be called.
	 * @param {string} hook - The name of the plugin method to call (e.g. 'beforeUpdate').
	 * @param {Array} [args] - Extra arguments to apply to the hook call.
	 * @returns {boolean} false if any of the plugins return false, else returns true.
	 */
	notify: function(chart, hook, args) {
		var descriptors = this.descriptors(chart);
		var ilen = descriptors.length;
		var i, descriptor, plugin, params, method;

		for (i = 0; i < ilen; ++i) {
			descriptor = descriptors[i];
			plugin = descriptor.plugin;
			method = plugin[hook];
			if (typeof method === 'function') {
				params = [chart].concat(args || []);
				params.push(descriptor.options);
				if (method.apply(plugin, params) === false) {
					return false;
				}
			}
		}

		return true;
	},

	/**
	 * Returns descriptors of enabled plugins for the given chart.
	 * @returns {object[]} [{ plugin, options }]
	 * @private
	 */
	descriptors: function(chart) {
		var cache = chart.$plugins || (chart.$plugins = {});
		if (cache.id === this._cacheId) {
			return cache.descriptors;
		}

		var plugins = [];
		var descriptors = [];
		var config = (chart && chart.config) || {};
		var options = (config.options && config.options.plugins) || {};

		this._plugins.concat(config.plugins || []).forEach(function(plugin) {
			var idx = plugins.indexOf(plugin);
			if (idx !== -1) {
				return;
			}

			var id = plugin.id;
			var opts = options[id];
			if (opts === false) {
				return;
			}

			if (opts === true) {
				opts = helpers$1.clone(core_defaults.global.plugins[id]);
			}

			plugins.push(plugin);
			descriptors.push({
				plugin: plugin,
				options: opts || {}
			});
		});

		cache.descriptors = descriptors;
		cache.id = this._cacheId;
		return descriptors;
	},

	/**
	 * Invalidates cache for the given chart: descriptors hold a reference on plugin option,
	 * but in some cases, this reference can be changed by the user when updating options.
	 * https://github.com/chartjs/Chart.js/issues/5111#issuecomment-355934167
	 * @private
	 */
	_invalidate: function(chart) {
		delete chart.$plugins;
	}
};

var core_scaleService = {
	// Scale registration object. Extensions can register new scale types (such as log or DB scales) and then
	// use the new chart options to grab the correct scale
	constructors: {},
	// Use a registration function so that we can move to an ES6 map when we no longer need to support
	// old browsers

	// Scale config defaults
	defaults: {},
	registerScaleType: function(type, scaleConstructor, scaleDefaults) {
		this.constructors[type] = scaleConstructor;
		this.defaults[type] = helpers$1.clone(scaleDefaults);
	},
	getScaleConstructor: function(type) {
		return this.constructors.hasOwnProperty(type) ? this.constructors[type] : undefined;
	},
	getScaleDefaults: function(type) {
		// Return the scale defaults merged with the global settings so that we always use the latest ones
		return this.defaults.hasOwnProperty(type) ? helpers$1.merge({}, [core_defaults.scale, this.defaults[type]]) : {};
	},
	updateScaleDefaults: function(type, additions) {
		var me = this;
		if (me.defaults.hasOwnProperty(type)) {
			me.defaults[type] = helpers$1.extend(me.defaults[type], additions);
		}
	},
	addScalesToLayout: function(chart) {
		// Adds each scale to the chart.boxes array to be sized accordingly
		helpers$1.each(chart.scales, function(scale) {
			// Set ILayoutItem parameters for backwards compatibility
			scale.fullWidth = scale.options.fullWidth;
			scale.position = scale.options.position;
			scale.weight = scale.options.weight;
			core_layouts.addBox(chart, scale);
		});
	}
};

var valueOrDefault$8 = helpers$1.valueOrDefault;
var getRtlHelper = helpers$1.rtl.getRtlAdapter;

core_defaults._set('global', {
	tooltips: {
		enabled: true,
		custom: null,
		mode: 'nearest',
		position: 'average',
		intersect: true,
		backgroundColor: 'rgba(0,0,0,0.8)',
		titleFontStyle: 'bold',
		titleSpacing: 2,
		titleMarginBottom: 6,
		titleFontColor: '#fff',
		titleAlign: 'left',
		bodySpacing: 2,
		bodyFontColor: '#fff',
		bodyAlign: 'left',
		footerFontStyle: 'bold',
		footerSpacing: 2,
		footerMarginTop: 6,
		footerFontColor: '#fff',
		footerAlign: 'left',
		yPadding: 6,
		xPadding: 6,
		caretPadding: 2,
		caretSize: 5,
		cornerRadius: 6,
		multiKeyBackground: '#fff',
		displayColors: true,
		borderColor: 'rgba(0,0,0,0)',
		borderWidth: 0,
		callbacks: {
			// Args are: (tooltipItems, data)
			beforeTitle: helpers$1.noop,
			title: function(tooltipItems, data) {
				var title = '';
				var labels = data.labels;
				var labelCount = labels ? labels.length : 0;

				if (tooltipItems.length > 0) {
					var item = tooltipItems[0];
					if (item.label) {
						title = item.label;
					} else if (item.xLabel) {
						title = item.xLabel;
					} else if (labelCount > 0 && item.index < labelCount) {
						title = labels[item.index];
					}
				}

				return title;
			},
			afterTitle: helpers$1.noop,

			// Args are: (tooltipItems, data)
			beforeBody: helpers$1.noop,

			// Args are: (tooltipItem, data)
			beforeLabel: helpers$1.noop,
			label: function(tooltipItem, data) {
				var label = data.datasets[tooltipItem.datasetIndex].label || '';

				if (label) {
					label += ': ';
				}
				if (!helpers$1.isNullOrUndef(tooltipItem.value)) {
					label += tooltipItem.value;
				} else {
					label += tooltipItem.yLabel;
				}
				return label;
			},
			labelColor: function(tooltipItem, chart) {
				var meta = chart.getDatasetMeta(tooltipItem.datasetIndex);
				var activeElement = meta.data[tooltipItem.index];
				var view = activeElement._view;
				return {
					borderColor: view.borderColor,
					backgroundColor: view.backgroundColor
				};
			},
			labelTextColor: function() {
				return this._options.bodyFontColor;
			},
			afterLabel: helpers$1.noop,

			// Args are: (tooltipItems, data)
			afterBody: helpers$1.noop,

			// Args are: (tooltipItems, data)
			beforeFooter: helpers$1.noop,
			footer: helpers$1.noop,
			afterFooter: helpers$1.noop
		}
	}
});

var positioners = {
	/**
	 * Average mode places the tooltip at the average position of the elements shown
	 * @function Chart.Tooltip.positioners.average
	 * @param elements {ChartElement[]} the elements being displayed in the tooltip
	 * @returns {object} tooltip position
	 */
	average: function(elements) {
		if (!elements.length) {
			return false;
		}

		var i, len;
		var x = 0;
		var y = 0;
		var count = 0;

		for (i = 0, len = elements.length; i < len; ++i) {
			var el = elements[i];
			if (el && el.hasValue()) {
				var pos = el.tooltipPosition();
				x += pos.x;
				y += pos.y;
				++count;
			}
		}

		return {
			x: x / count,
			y: y / count
		};
	},

	/**
	 * Gets the tooltip position nearest of the item nearest to the event position
	 * @function Chart.Tooltip.positioners.nearest
	 * @param elements {Chart.Element[]} the tooltip elements
	 * @param eventPosition {object} the position of the event in canvas coordinates
	 * @returns {object} the tooltip position
	 */
	nearest: function(elements, eventPosition) {
		var x = eventPosition.x;
		var y = eventPosition.y;
		var minDistance = Number.POSITIVE_INFINITY;
		var i, len, nearestElement;

		for (i = 0, len = elements.length; i < len; ++i) {
			var el = elements[i];
			if (el && el.hasValue()) {
				var center = el.getCenterPoint();
				var d = helpers$1.distanceBetweenPoints(eventPosition, center);

				if (d < minDistance) {
					minDistance = d;
					nearestElement = el;
				}
			}
		}

		if (nearestElement) {
			var tp = nearestElement.tooltipPosition();
			x = tp.x;
			y = tp.y;
		}

		return {
			x: x,
			y: y
		};
	}
};

// Helper to push or concat based on if the 2nd parameter is an array or not
function pushOrConcat(base, toPush) {
	if (toPush) {
		if (helpers$1.isArray(toPush)) {
			// base = base.concat(toPush);
			Array.prototype.push.apply(base, toPush);
		} else {
			base.push(toPush);
		}
	}

	return base;
}

/**
 * Returns array of strings split by newline
 * @param {string} value - The value to split by newline.
 * @returns {string[]} value if newline present - Returned from String split() method
 * @function
 */
function splitNewlines(str) {
	if ((typeof str === 'string' || str instanceof String) && str.indexOf('\n') > -1) {
		return str.split('\n');
	}
	return str;
}


/**
 * Private helper to create a tooltip item model
 * @param element - the chart element (point, arc, bar) to create the tooltip item for
 * @return new tooltip item
 */
function createTooltipItem(element) {
	var xScale = element._xScale;
	var yScale = element._yScale || element._scale; // handle radar || polarArea charts
	var index = element._index;
	var datasetIndex = element._datasetIndex;
	var controller = element._chart.getDatasetMeta(datasetIndex).controller;
	var indexScale = controller._getIndexScale();
	var valueScale = controller._getValueScale();

	return {
		xLabel: xScale ? xScale.getLabelForIndex(index, datasetIndex) : '',
		yLabel: yScale ? yScale.getLabelForIndex(index, datasetIndex) : '',
		label: indexScale ? '' + indexScale.getLabelForIndex(index, datasetIndex) : '',
		value: valueScale ? '' + valueScale.getLabelForIndex(index, datasetIndex) : '',
		index: index,
		datasetIndex: datasetIndex,
		x: element._model.x,
		y: element._model.y
	};
}

/**
 * Helper to get the reset model for the tooltip
 * @param tooltipOpts {object} the tooltip options
 */
function getBaseModel(tooltipOpts) {
	var globalDefaults = core_defaults.global;

	return {
		// Positioning
		xPadding: tooltipOpts.xPadding,
		yPadding: tooltipOpts.yPadding,
		xAlign: tooltipOpts.xAlign,
		yAlign: tooltipOpts.yAlign,

		// Drawing direction and text direction
		rtl: tooltipOpts.rtl,
		textDirection: tooltipOpts.textDirection,

		// Body
		bodyFontColor: tooltipOpts.bodyFontColor,
		_bodyFontFamily: valueOrDefault$8(tooltipOpts.bodyFontFamily, globalDefaults.defaultFontFamily),
		_bodyFontStyle: valueOrDefault$8(tooltipOpts.bodyFontStyle, globalDefaults.defaultFontStyle),
		_bodyAlign: tooltipOpts.bodyAlign,
		bodyFontSize: valueOrDefault$8(tooltipOpts.bodyFontSize, globalDefaults.defaultFontSize),
		bodySpacing: tooltipOpts.bodySpacing,

		// Title
		titleFontColor: tooltipOpts.titleFontColor,
		_titleFontFamily: valueOrDefault$8(tooltipOpts.titleFontFamily, globalDefaults.defaultFontFamily),
		_titleFontStyle: valueOrDefault$8(tooltipOpts.titleFontStyle, globalDefaults.defaultFontStyle),
		titleFontSize: valueOrDefault$8(tooltipOpts.titleFontSize, globalDefaults.defaultFontSize),
		_titleAlign: tooltipOpts.titleAlign,
		titleSpacing: tooltipOpts.titleSpacing,
		titleMarginBottom: tooltipOpts.titleMarginBottom,

		// Footer
		footerFontColor: tooltipOpts.footerFontColor,
		_footerFontFamily: valueOrDefault$8(tooltipOpts.footerFontFamily, globalDefaults.defaultFontFamily),
		_footerFontStyle: valueOrDefault$8(tooltipOpts.footerFontStyle, globalDefaults.defaultFontStyle),
		footerFontSize: valueOrDefault$8(tooltipOpts.footerFontSize, globalDefaults.defaultFontSize),
		_footerAlign: tooltipOpts.footerAlign,
		footerSpacing: tooltipOpts.footerSpacing,
		footerMarginTop: tooltipOpts.footerMarginTop,

		// Appearance
		caretSize: tooltipOpts.caretSize,
		cornerRadius: tooltipOpts.cornerRadius,
		backgroundColor: tooltipOpts.backgroundColor,
		opacity: 0,
		legendColorBackground: tooltipOpts.multiKeyBackground,
		displayColors: tooltipOpts.displayColors,
		borderColor: tooltipOpts.borderColor,
		borderWidth: tooltipOpts.borderWidth
	};
}

/**
 * Get the size of the tooltip
 */
function getTooltipSize(tooltip, model) {
	var ctx = tooltip._chart.ctx;

	var height = model.yPadding * 2; // Tooltip Padding
	var width = 0;

	// Count of all lines in the body
	var body = model.body;
	var combinedBodyLength = body.reduce(function(count, bodyItem) {
		return count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length;
	}, 0);
	combinedBodyLength += model.beforeBody.length + model.afterBody.length;

	var titleLineCount = model.title.length;
	var footerLineCount = model.footer.length;
	var titleFontSize = model.titleFontSize;
	var bodyFontSize = model.bodyFontSize;
	var footerFontSize = model.footerFontSize;

	height += titleLineCount * titleFontSize; // Title Lines
	height += titleLineCount ? (titleLineCount - 1) * model.titleSpacing : 0; // Title Line Spacing
	height += titleLineCount ? model.titleMarginBottom : 0; // Title's bottom Margin
	height += combinedBodyLength * bodyFontSize; // Body Lines
	height += combinedBodyLength ? (combinedBodyLength - 1) * model.bodySpacing : 0; // Body Line Spacing
	height += footerLineCount ? model.footerMarginTop : 0; // Footer Margin
	height += footerLineCount * (footerFontSize); // Footer Lines
	height += footerLineCount ? (footerLineCount - 1) * model.footerSpacing : 0; // Footer Line Spacing

	// Title width
	var widthPadding = 0;
	var maxLineWidth = function(line) {
		width = Math.max(width, ctx.measureText(line).width + widthPadding);
	};

	ctx.font = helpers$1.fontString(titleFontSize, model._titleFontStyle, model._titleFontFamily);
	helpers$1.each(model.title, maxLineWidth);

	// Body width
	ctx.font = helpers$1.fontString(bodyFontSize, model._bodyFontStyle, model._bodyFontFamily);
	helpers$1.each(model.beforeBody.concat(model.afterBody), maxLineWidth);

	// Body lines may include some extra width due to the color box
	widthPadding = model.displayColors ? (bodyFontSize + 2) : 0;
	helpers$1.each(body, function(bodyItem) {
		helpers$1.each(bodyItem.before, maxLineWidth);
		helpers$1.each(bodyItem.lines, maxLineWidth);
		helpers$1.each(bodyItem.after, maxLineWidth);
	});

	// Reset back to 0
	widthPadding = 0;

	// Footer width
	ctx.font = helpers$1.fontString(footerFontSize, model._footerFontStyle, model._footerFontFamily);
	helpers$1.each(model.footer, maxLineWidth);

	// Add padding
	width += 2 * model.xPadding;

	return {
		width: width,
		height: height
	};
}

/**
 * Helper to get the alignment of a tooltip given the size
 */
function determineAlignment(tooltip, size) {
	var model = tooltip._model;
	var chart = tooltip._chart;
	var chartArea = tooltip._chart.chartArea;
	var xAlign = 'center';
	var yAlign = 'center';

	if (model.y < size.height) {
		yAlign = 'top';
	} else if (model.y > (chart.height - size.height)) {
		yAlign = 'bottom';
	}

	var lf, rf; // functions to determine left, right alignment
	var olf, orf; // functions to determine if left/right alignment causes tooltip to go outside chart
	var yf; // function to get the y alignment if the tooltip goes outside of the left or right edges
	var midX = (chartArea.left + chartArea.right) / 2;
	var midY = (chartArea.top + chartArea.bottom) / 2;

	if (yAlign === 'center') {
		lf = function(x) {
			return x <= midX;
		};
		rf = function(x) {
			return x > midX;
		};
	} else {
		lf = function(x) {
			return x <= (size.width / 2);
		};
		rf = function(x) {
			return x >= (chart.width - (size.width / 2));
		};
	}

	olf = function(x) {
		return x + size.width + model.caretSize + model.caretPadding > chart.width;
	};
	orf = function(x) {
		return x - size.width - model.caretSize - model.caretPadding < 0;
	};
	yf = function(y) {
		return y <= midY ? 'top' : 'bottom';
	};

	if (lf(model.x)) {
		xAlign = 'left';

		// Is tooltip too wide and goes over the right side of the chart.?
		if (olf(model.x)) {
			xAlign = 'center';
			yAlign = yf(model.y);
		}
	} else if (rf(model.x)) {
		xAlign = 'right';

		// Is tooltip too wide and goes outside left edge of canvas?
		if (orf(model.x)) {
			xAlign = 'center';
			yAlign = yf(model.y);
		}
	}

	var opts = tooltip._options;
	return {
		xAlign: opts.xAlign ? opts.xAlign : xAlign,
		yAlign: opts.yAlign ? opts.yAlign : yAlign
	};
}

/**
 * Helper to get the location a tooltip needs to be placed at given the initial position (via the vm) and the size and alignment
 */
function getBackgroundPoint(vm, size, alignment, chart) {
	// Background Position
	var x = vm.x;
	var y = vm.y;

	var caretSize = vm.caretSize;
	var caretPadding = vm.caretPadding;
	var cornerRadius = vm.cornerRadius;
	var xAlign = alignment.xAlign;
	var yAlign = alignment.yAlign;
	var paddingAndSize = caretSize + caretPadding;
	var radiusAndPadding = cornerRadius + caretPadding;

	if (xAlign === 'right') {
		x -= size.width;
	} else if (xAlign === 'center') {
		x -= (size.width / 2);
		if (x + size.width > chart.width) {
			x = chart.width - size.width;
		}
		if (x < 0) {
			x = 0;
		}
	}

	if (yAlign === 'top') {
		y += paddingAndSize;
	} else if (yAlign === 'bottom') {
		y -= size.height + paddingAndSize;
	} else {
		y -= (size.height / 2);
	}

	if (yAlign === 'center') {
		if (xAlign === 'left') {
			x += paddingAndSize;
		} else if (xAlign === 'right') {
			x -= paddingAndSize;
		}
	} else if (xAlign === 'left') {
		x -= radiusAndPadding;
	} else if (xAlign === 'right') {
		x += radiusAndPadding;
	}

	return {
		x: x,
		y: y
	};
}

function getAlignedX(vm, align) {
	return align === 'center'
		? vm.x + vm.width / 2
		: align === 'right'
			? vm.x + vm.width - vm.xPadding
			: vm.x + vm.xPadding;
}

/**
 * Helper to build before and after body lines
 */
function getBeforeAfterBodyLines(callback) {
	return pushOrConcat([], splitNewlines(callback));
}

var exports$4 = core_element.extend({
	initialize: function() {
		this._model = getBaseModel(this._options);
		this._lastActive = [];
	},

	// Get the title
	// Args are: (tooltipItem, data)
	getTitle: function() {
		var me = this;
		var opts = me._options;
		var callbacks = opts.callbacks;

		var beforeTitle = callbacks.beforeTitle.apply(me, arguments);
		var title = callbacks.title.apply(me, arguments);
		var afterTitle = callbacks.afterTitle.apply(me, arguments);

		var lines = [];
		lines = pushOrConcat(lines, splitNewlines(beforeTitle));
		lines = pushOrConcat(lines, splitNewlines(title));
		lines = pushOrConcat(lines, splitNewlines(afterTitle));

		return lines;
	},

	// Args are: (tooltipItem, data)
	getBeforeBody: function() {
		return getBeforeAfterBodyLines(this._options.callbacks.beforeBody.apply(this, arguments));
	},

	// Args are: (tooltipItem, data)
	getBody: function(tooltipItems, data) {
		var me = this;
		var callbacks = me._options.callbacks;
		var bodyItems = [];

		helpers$1.each(tooltipItems, function(tooltipItem) {
			var bodyItem = {
				before: [],
				lines: [],
				after: []
			};
			pushOrConcat(bodyItem.before, splitNewlines(callbacks.beforeLabel.call(me, tooltipItem, data)));
			pushOrConcat(bodyItem.lines, callbacks.label.call(me, tooltipItem, data));
			pushOrConcat(bodyItem.after, splitNewlines(callbacks.afterLabel.call(me, tooltipItem, data)));

			bodyItems.push(bodyItem);
		});

		return bodyItems;
	},

	// Args are: (tooltipItem, data)
	getAfterBody: function() {
		return getBeforeAfterBodyLines(this._options.callbacks.afterBody.apply(this, arguments));
	},

	// Get the footer and beforeFooter and afterFooter lines
	// Args are: (tooltipItem, data)
	getFooter: function() {
		var me = this;
		var callbacks = me._options.callbacks;

		var beforeFooter = callbacks.beforeFooter.apply(me, arguments);
		var footer = callbacks.footer.apply(me, arguments);
		var afterFooter = callbacks.afterFooter.apply(me, arguments);

		var lines = [];
		lines = pushOrConcat(lines, splitNewlines(beforeFooter));
		lines = pushOrConcat(lines, splitNewlines(footer));
		lines = pushOrConcat(lines, splitNewlines(afterFooter));

		return lines;
	},

	update: function(changed) {
		var me = this;
		var opts = me._options;

		// Need to regenerate the model because its faster than using extend and it is necessary due to the optimization in Chart.Element.transition
		// that does _view = _model if ease === 1. This causes the 2nd tooltip update to set properties in both the view and model at the same time
		// which breaks any animations.
		var existingModel = me._model;
		var model = me._model = getBaseModel(opts);
		var active = me._active;

		var data = me._data;

		// In the case where active.length === 0 we need to keep these at existing values for good animations
		var alignment = {
			xAlign: existingModel.xAlign,
			yAlign: existingModel.yAlign
		};
		var backgroundPoint = {
			x: existingModel.x,
			y: existingModel.y
		};
		var tooltipSize = {
			width: existingModel.width,
			height: existingModel.height
		};
		var tooltipPosition = {
			x: existingModel.caretX,
			y: existingModel.caretY
		};

		var i, len;

		if (active.length) {
			model.opacity = 1;

			var labelColors = [];
			var labelTextColors = [];
			tooltipPosition = positioners[opts.position].call(me, active, me._eventPosition);

			var tooltipItems = [];
			for (i = 0, len = active.length; i < len; ++i) {
				tooltipItems.push(createTooltipItem(active[i]));
			}

			// If the user provided a filter function, use it to modify the tooltip items
			if (opts.filter) {
				tooltipItems = tooltipItems.filter(function(a) {
					return opts.filter(a, data);
				});
			}

			// If the user provided a sorting function, use it to modify the tooltip items
			if (opts.itemSort) {
				tooltipItems = tooltipItems.sort(function(a, b) {
					return opts.itemSort(a, b, data);
				});
			}

			// Determine colors for boxes
			helpers$1.each(tooltipItems, function(tooltipItem) {
				labelColors.push(opts.callbacks.labelColor.call(me, tooltipItem, me._chart));
				labelTextColors.push(opts.callbacks.labelTextColor.call(me, tooltipItem, me._chart));
			});


			// Build the Text Lines
			model.title = me.getTitle(tooltipItems, data);
			model.beforeBody = me.getBeforeBody(tooltipItems, data);
			model.body = me.getBody(tooltipItems, data);
			model.afterBody = me.getAfterBody(tooltipItems, data);
			model.footer = me.getFooter(tooltipItems, data);

			// Initial positioning and colors
			model.x = tooltipPosition.x;
			model.y = tooltipPosition.y;
			model.caretPadding = opts.caretPadding;
			model.labelColors = labelColors;
			model.labelTextColors = labelTextColors;

			// data points
			model.dataPoints = tooltipItems;

			// We need to determine alignment of the tooltip
			tooltipSize = getTooltipSize(this, model);
			alignment = determineAlignment(this, tooltipSize);
			// Final Size and Position
			backgroundPoint = getBackgroundPoint(model, tooltipSize, alignment, me._chart);
		} else {
			model.opacity = 0;
		}

		model.xAlign = alignment.xAlign;
		model.yAlign = alignment.yAlign;
		model.x = backgroundPoint.x;
		model.y = backgroundPoint.y;
		model.width = tooltipSize.width;
		model.height = tooltipSize.height;

		// Point where the caret on the tooltip points to
		model.caretX = tooltipPosition.x;
		model.caretY = tooltipPosition.y;

		me._model = model;

		if (changed && opts.custom) {
			opts.custom.call(me, model);
		}

		return me;
	},

	drawCaret: function(tooltipPoint, size) {
		var ctx = this._chart.ctx;
		var vm = this._view;
		var caretPosition = this.getCaretPosition(tooltipPoint, size, vm);

		ctx.lineTo(caretPosition.x1, caretPosition.y1);
		ctx.lineTo(caretPosition.x2, caretPosition.y2);
		ctx.lineTo(caretPosition.x3, caretPosition.y3);
	},
	getCaretPosition: function(tooltipPoint, size, vm) {
		var x1, x2, x3, y1, y2, y3;
		var caretSize = vm.caretSize;
		var cornerRadius = vm.cornerRadius;
		var xAlign = vm.xAlign;
		var yAlign = vm.yAlign;
		var ptX = tooltipPoint.x;
		var ptY = tooltipPoint.y;
		var width = size.width;
		var height = size.height;

		if (yAlign === 'center') {
			y2 = ptY + (height / 2);

			if (xAlign === 'left') {
				x1 = ptX;
				x2 = x1 - caretSize;
				x3 = x1;

				y1 = y2 + caretSize;
				y3 = y2 - caretSize;
			} else {
				x1 = ptX + width;
				x2 = x1 + caretSize;
				x3 = x1;

				y1 = y2 - caretSize;
				y3 = y2 + caretSize;
			}
		} else {
			if (xAlign === 'left') {
				x2 = ptX + cornerRadius + (caretSize);
				x1 = x2 - caretSize;
				x3 = x2 + caretSize;
			} else if (xAlign === 'right') {
				x2 = ptX + width - cornerRadius - caretSize;
				x1 = x2 - caretSize;
				x3 = x2 + caretSize;
			} else {
				x2 = vm.caretX;
				x1 = x2 - caretSize;
				x3 = x2 + caretSize;
			}
			if (yAlign === 'top') {
				y1 = ptY;
				y2 = y1 - caretSize;
				y3 = y1;
			} else {
				y1 = ptY + height;
				y2 = y1 + caretSize;
				y3 = y1;
				// invert drawing order
				var tmp = x3;
				x3 = x1;
				x1 = tmp;
			}
		}
		return {x1: x1, x2: x2, x3: x3, y1: y1, y2: y2, y3: y3};
	},

	drawTitle: function(pt, vm, ctx) {
		var title = vm.title;
		var length = title.length;
		var titleFontSize, titleSpacing, i;

		if (length) {
			var rtlHelper = getRtlHelper(vm.rtl, vm.x, vm.width);

			pt.x = getAlignedX(vm, vm._titleAlign);

			ctx.textAlign = rtlHelper.textAlign(vm._titleAlign);
			ctx.textBaseline = 'middle';

			titleFontSize = vm.titleFontSize;
			titleSpacing = vm.titleSpacing;

			ctx.fillStyle = vm.titleFontColor;
			ctx.font = helpers$1.fontString(titleFontSize, vm._titleFontStyle, vm._titleFontFamily);

			for (i = 0; i < length; ++i) {
				ctx.fillText(title[i], rtlHelper.x(pt.x), pt.y + titleFontSize / 2);
				pt.y += titleFontSize + titleSpacing; // Line Height and spacing

				if (i + 1 === length) {
					pt.y += vm.titleMarginBottom - titleSpacing; // If Last, add margin, remove spacing
				}
			}
		}
	},

	drawBody: function(pt, vm, ctx) {
		var bodyFontSize = vm.bodyFontSize;
		var bodySpacing = vm.bodySpacing;
		var bodyAlign = vm._bodyAlign;
		var body = vm.body;
		var drawColorBoxes = vm.displayColors;
		var xLinePadding = 0;
		var colorX = drawColorBoxes ? getAlignedX(vm, 'left') : 0;

		var rtlHelper = getRtlHelper(vm.rtl, vm.x, vm.width);

		var fillLineOfText = function(line) {
			ctx.fillText(line, rtlHelper.x(pt.x + xLinePadding), pt.y + bodyFontSize / 2);
			pt.y += bodyFontSize + bodySpacing;
		};

		var bodyItem, textColor, labelColors, lines, i, j, ilen, jlen;
		var bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);

		ctx.textAlign = bodyAlign;
		ctx.textBaseline = 'middle';
		ctx.font = helpers$1.fontString(bodyFontSize, vm._bodyFontStyle, vm._bodyFontFamily);

		pt.x = getAlignedX(vm, bodyAlignForCalculation);

		// Before body lines
		ctx.fillStyle = vm.bodyFontColor;
		helpers$1.each(vm.beforeBody, fillLineOfText);

		xLinePadding = drawColorBoxes && bodyAlignForCalculation !== 'right'
			? bodyAlign === 'center' ? (bodyFontSize / 2 + 1) : (bodyFontSize + 2)
			: 0;

		// Draw body lines now
		for (i = 0, ilen = body.length; i < ilen; ++i) {
			bodyItem = body[i];
			textColor = vm.labelTextColors[i];
			labelColors = vm.labelColors[i];

			ctx.fillStyle = textColor;
			helpers$1.each(bodyItem.before, fillLineOfText);

			lines = bodyItem.lines;
			for (j = 0, jlen = lines.length; j < jlen; ++j) {
				// Draw Legend-like boxes if needed
				if (drawColorBoxes) {
					var rtlColorX = rtlHelper.x(colorX);

					// Fill a white rect so that colours merge nicely if the opacity is < 1
					ctx.fillStyle = vm.legendColorBackground;
					ctx.fillRect(rtlHelper.leftForLtr(rtlColorX, bodyFontSize), pt.y, bodyFontSize, bodyFontSize);

					// Border
					ctx.lineWidth = 1;
					ctx.strokeStyle = labelColors.borderColor;
					ctx.strokeRect(rtlHelper.leftForLtr(rtlColorX, bodyFontSize), pt.y, bodyFontSize, bodyFontSize);

					// Inner square
					ctx.fillStyle = labelColors.backgroundColor;
					ctx.fillRect(rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX, 1), bodyFontSize - 2), pt.y + 1, bodyFontSize - 2, bodyFontSize - 2);
					ctx.fillStyle = textColor;
				}

				fillLineOfText(lines[j]);
			}

			helpers$1.each(bodyItem.after, fillLineOfText);
		}

		// Reset back to 0 for after body
		xLinePadding = 0;

		// After body lines
		helpers$1.each(vm.afterBody, fillLineOfText);
		pt.y -= bodySpacing; // Remove last body spacing
	},

	drawFooter: function(pt, vm, ctx) {
		var footer = vm.footer;
		var length = footer.length;
		var footerFontSize, i;

		if (length) {
			var rtlHelper = getRtlHelper(vm.rtl, vm.x, vm.width);

			pt.x = getAlignedX(vm, vm._footerAlign);
			pt.y += vm.footerMarginTop;

			ctx.textAlign = rtlHelper.textAlign(vm._footerAlign);
			ctx.textBaseline = 'middle';

			footerFontSize = vm.footerFontSize;

			ctx.fillStyle = vm.footerFontColor;
			ctx.font = helpers$1.fontString(footerFontSize, vm._footerFontStyle, vm._footerFontFamily);

			for (i = 0; i < length; ++i) {
				ctx.fillText(footer[i], rtlHelper.x(pt.x), pt.y + footerFontSize / 2);
				pt.y += footerFontSize + vm.footerSpacing;
			}
		}
	},

	drawBackground: function(pt, vm, ctx, tooltipSize) {
		ctx.fillStyle = vm.backgroundColor;
		ctx.strokeStyle = vm.borderColor;
		ctx.lineWidth = vm.borderWidth;
		var xAlign = vm.xAlign;
		var yAlign = vm.yAlign;
		var x = pt.x;
		var y = pt.y;
		var width = tooltipSize.width;
		var height = tooltipSize.height;
		var radius = vm.cornerRadius;

		ctx.beginPath();
		ctx.moveTo(x + radius, y);
		if (yAlign === 'top') {
			this.drawCaret(pt, tooltipSize);
		}
		ctx.lineTo(x + width - radius, y);
		ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
		if (yAlign === 'center' && xAlign === 'right') {
			this.drawCaret(pt, tooltipSize);
		}
		ctx.lineTo(x + width, y + height - radius);
		ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
		if (yAlign === 'bottom') {
			this.drawCaret(pt, tooltipSize);
		}
		ctx.lineTo(x + radius, y + height);
		ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
		if (yAlign === 'center' && xAlign === 'left') {
			this.drawCaret(pt, tooltipSize);
		}
		ctx.lineTo(x, y + radius);
		ctx.quadraticCurveTo(x, y, x + radius, y);
		ctx.closePath();

		ctx.fill();

		if (vm.borderWidth > 0) {
			ctx.stroke();
		}
	},

	draw: function() {
		var ctx = this._chart.ctx;
		var vm = this._view;

		if (vm.opacity === 0) {
			return;
		}

		var tooltipSize = {
			width: vm.width,
			height: vm.height
		};
		var pt = {
			x: vm.x,
			y: vm.y
		};

		// IE11/Edge does not like very small opacities, so snap to 0
		var opacity = Math.abs(vm.opacity < 1e-3) ? 0 : vm.opacity;

		// Truthy/falsey value for empty tooltip
		var hasTooltipContent = vm.title.length || vm.beforeBody.length || vm.body.length || vm.afterBody.length || vm.footer.length;

		if (this._options.enabled && hasTooltipContent) {
			ctx.save();
			ctx.globalAlpha = opacity;

			// Draw Background
			this.drawBackground(pt, vm, ctx, tooltipSize);

			// Draw Title, Body, and Footer
			pt.y += vm.yPadding;

			helpers$1.rtl.overrideTextDirection(ctx, vm.textDirection);

			// Titles
			this.drawTitle(pt, vm, ctx);

			// Body
			this.drawBody(pt, vm, ctx);

			// Footer
			this.drawFooter(pt, vm, ctx);

			helpers$1.rtl.restoreTextDirection(ctx, vm.textDirection);

			ctx.restore();
		}
	},

	/**
	 * Handle an event
	 * @private
	 * @param {IEvent} event - The event to handle
	 * @returns {boolean} true if the tooltip changed
	 */
	handleEvent: function(e) {
		var me = this;
		var options = me._options;
		var changed = false;

		me._lastActive = me._lastActive || [];

		// Find Active Elements for tooltips
		if (e.type === 'mouseout') {
			me._active = [];
		} else {
			me._active = me._chart.getElementsAtEventForMode(e, options.mode, options);
			if (options.reverse) {
				me._active.reverse();
			}
		}

		// Remember Last Actives
		changed = !helpers$1.arrayEquals(me._active, me._lastActive);

		// Only handle target event on tooltip change
		if (changed) {
			me._lastActive = me._active;

			if (options.enabled || options.custom) {
				me._eventPosition = {
					x: e.x,
					y: e.y
				};

				me.update(true);
				me.pivot();
			}
		}

		return changed;
	}
});

/**
 * @namespace Chart.Tooltip.positioners
 */
var positioners_1 = positioners;

var core_tooltip = exports$4;
core_tooltip.positioners = positioners_1;

var valueOrDefault$9 = helpers$1.valueOrDefault;

core_defaults._set('global', {
	elements: {},
	events: [
		'mousemove',
		'mouseout',
		'click',
		'touchstart',
		'touchmove'
	],
	hover: {
		onHover: null,
		mode: 'nearest',
		intersect: true,
		animationDuration: 400
	},
	onClick: null,
	maintainAspectRatio: true,
	responsive: true,
	responsiveAnimationDuration: 0
});

/**
 * Recursively merge the given config objects representing the `scales` option
 * by incorporating scale defaults in `xAxes` and `yAxes` array items, then
 * returns a deep copy of the result, thus doesn't alter inputs.
 */
function mergeScaleConfig(/* config objects ... */) {
	return helpers$1.merge({}, [].slice.call(arguments), {
		merger: function(key, target, source, options) {
			if (key === 'xAxes' || key === 'yAxes') {
				var slen = source[key].length;
				var i, type, scale;

				if (!target[key]) {
					target[key] = [];
				}

				for (i = 0; i < slen; ++i) {
					scale = source[key][i];
					type = valueOrDefault$9(scale.type, key === 'xAxes' ? 'category' : 'linear');

					if (i >= target[key].length) {
						target[key].push({});
					}

					if (!target[key][i].type || (scale.type && scale.type !== target[key][i].type)) {
						// new/untyped scale or type changed: let's apply the new defaults
						// then merge source scale to correctly overwrite the defaults.
						helpers$1.merge(target[key][i], [core_scaleService.getScaleDefaults(type), scale]);
					} else {
						// scales type are the same
						helpers$1.merge(target[key][i], scale);
					}
				}
			} else {
				helpers$1._merger(key, target, source, options);
			}
		}
	});
}

/**
 * Recursively merge the given config objects as the root options by handling
 * default scale options for the `scales` and `scale` properties, then returns
 * a deep copy of the result, thus doesn't alter inputs.
 */
function mergeConfig(/* config objects ... */) {
	return helpers$1.merge({}, [].slice.call(arguments), {
		merger: function(key, target, source, options) {
			var tval = target[key] || {};
			var sval = source[key];

			if (key === 'scales') {
				// scale config merging is complex. Add our own function here for that
				target[key] = mergeScaleConfig(tval, sval);
			} else if (key === 'scale') {
				// used in polar area & radar charts since there is only one scale
				target[key] = helpers$1.merge(tval, [core_scaleService.getScaleDefaults(sval.type), sval]);
			} else {
				helpers$1._merger(key, target, source, options);
			}
		}
	});
}

function initConfig(config) {
	config = config || {};

	// Do NOT use mergeConfig for the data object because this method merges arrays
	// and so would change references to labels and datasets, preventing data updates.
	var data = config.data = config.data || {};
	data.datasets = data.datasets || [];
	data.labels = data.labels || [];

	config.options = mergeConfig(
		core_defaults.global,
		core_defaults[config.type],
		config.options || {});

	return config;
}

function updateConfig(chart) {
	var newOptions = chart.options;

	helpers$1.each(chart.scales, function(scale) {
		core_layouts.removeBox(chart, scale);
	});

	newOptions = mergeConfig(
		core_defaults.global,
		core_defaults[chart.config.type],
		newOptions);

	chart.options = chart.config.options = newOptions;
	chart.ensureScalesHaveIDs();
	chart.buildOrUpdateScales();

	// Tooltip
	chart.tooltip._options = newOptions.tooltips;
	chart.tooltip.initialize();
}

function nextAvailableScaleId(axesOpts, prefix, index) {
	var id;
	var hasId = function(obj) {
		return obj.id === id;
	};

	do {
		id = prefix + index++;
	} while (helpers$1.findIndex(axesOpts, hasId) >= 0);

	return id;
}

function positionIsHorizontal(position) {
	return position === 'top' || position === 'bottom';
}

function compare2Level(l1, l2) {
	return function(a, b) {
		return a[l1] === b[l1]
			? a[l2] - b[l2]
			: a[l1] - b[l1];
	};
}

var Chart = function(item, config) {
	this.construct(item, config);
	return this;
};

helpers$1.extend(Chart.prototype, /** @lends Chart */ {
	/**
	 * @private
	 */
	construct: function(item, config) {
		var me = this;

		config = initConfig(config);

		var context = platform.acquireContext(item, config);
		var canvas = context && context.canvas;
		var height = canvas && canvas.height;
		var width = canvas && canvas.width;

		me.id = helpers$1.uid();
		me.ctx = context;
		me.canvas = canvas;
		me.config = config;
		me.width = width;
		me.height = height;
		me.aspectRatio = height ? width / height : null;
		me.options = config.options;
		me._bufferedRender = false;
		me._layers = [];

		/**
		 * Provided for backward compatibility, Chart and Chart.Controller have been merged,
		 * the "instance" still need to be defined since it might be called from plugins.
		 * @prop Chart#chart
		 * @deprecated since version 2.6.0
		 * @todo remove at version 3
		 * @private
		 */
		me.chart = me;
		me.controller = me; // chart.chart.controller #inception

		// Add the chart instance to the global namespace
		Chart.instances[me.id] = me;

		// Define alias to the config data: `chart.data === chart.config.data`
		Object.defineProperty(me, 'data', {
			get: function() {
				return me.config.data;
			},
			set: function(value) {
				me.config.data = value;
			}
		});

		if (!context || !canvas) {
			// The given item is not a compatible context2d element, let's return before finalizing
			// the chart initialization but after setting basic chart / controller properties that
			// can help to figure out that the chart is not valid (e.g chart.canvas !== null);
			// https://github.com/chartjs/Chart.js/issues/2807
			console.error("Failed to create chart: can't acquire context from the given item");
			return;
		}

		me.initialize();
		me.update();
	},

	/**
	 * @private
	 */
	initialize: function() {
		var me = this;

		// Before init plugin notification
		core_plugins.notify(me, 'beforeInit');

		helpers$1.retinaScale(me, me.options.devicePixelRatio);

		me.bindEvents();

		if (me.options.responsive) {
			// Initial resize before chart draws (must be silent to preserve initial animations).
			me.resize(true);
		}

		me.initToolTip();

		// After init plugin notification
		core_plugins.notify(me, 'afterInit');

		return me;
	},

	clear: function() {
		helpers$1.canvas.clear(this);
		return this;
	},

	stop: function() {
		// Stops any current animation loop occurring
		core_animations.cancelAnimation(this);
		return this;
	},

	resize: function(silent) {
		var me = this;
		var options = me.options;
		var canvas = me.canvas;
		var aspectRatio = (options.maintainAspectRatio && me.aspectRatio) || null;

		// the canvas render width and height will be casted to integers so make sure that
		// the canvas display style uses the same integer values to avoid blurring effect.

		// Set to 0 instead of canvas.size because the size defaults to 300x150 if the element is collapsed
		var newWidth = Math.max(0, Math.floor(helpers$1.getMaximumWidth(canvas)));
		var newHeight = Math.max(0, Math.floor(aspectRatio ? newWidth / aspectRatio : helpers$1.getMaximumHeight(canvas)));

		if (me.width === newWidth && me.height === newHeight) {
			return;
		}

		canvas.width = me.width = newWidth;
		canvas.height = me.height = newHeight;
		canvas.style.width = newWidth + 'px';
		canvas.style.height = newHeight + 'px';

		helpers$1.retinaScale(me, options.devicePixelRatio);

		if (!silent) {
			// Notify any plugins about the resize
			var newSize = {width: newWidth, height: newHeight};
			core_plugins.notify(me, 'resize', [newSize]);

			// Notify of resize
			if (options.onResize) {
				options.onResize(me, newSize);
			}

			me.stop();
			me.update({
				duration: options.responsiveAnimationDuration
			});
		}
	},

	ensureScalesHaveIDs: function() {
		var options = this.options;
		var scalesOptions = options.scales || {};
		var scaleOptions = options.scale;

		helpers$1.each(scalesOptions.xAxes, function(xAxisOptions, index) {
			if (!xAxisOptions.id) {
				xAxisOptions.id = nextAvailableScaleId(scalesOptions.xAxes, 'x-axis-', index);
			}
		});

		helpers$1.each(scalesOptions.yAxes, function(yAxisOptions, index) {
			if (!yAxisOptions.id) {
				yAxisOptions.id = nextAvailableScaleId(scalesOptions.yAxes, 'y-axis-', index);
			}
		});

		if (scaleOptions) {
			scaleOptions.id = scaleOptions.id || 'scale';
		}
	},

	/**
	 * Builds a map of scale ID to scale object for future lookup.
	 */
	buildOrUpdateScales: function() {
		var me = this;
		var options = me.options;
		var scales = me.scales || {};
		var items = [];
		var updated = Object.keys(scales).reduce(function(obj, id) {
			obj[id] = false;
			return obj;
		}, {});

		if (options.scales) {
			items = items.concat(
				(options.scales.xAxes || []).map(function(xAxisOptions) {
					return {options: xAxisOptions, dtype: 'category', dposition: 'bottom'};
				}),
				(options.scales.yAxes || []).map(function(yAxisOptions) {
					return {options: yAxisOptions, dtype: 'linear', dposition: 'left'};
				})
			);
		}

		if (options.scale) {
			items.push({
				options: options.scale,
				dtype: 'radialLinear',
				isDefault: true,
				dposition: 'chartArea'
			});
		}

		helpers$1.each(items, function(item) {
			var scaleOptions = item.options;
			var id = scaleOptions.id;
			var scaleType = valueOrDefault$9(scaleOptions.type, item.dtype);

			if (positionIsHorizontal(scaleOptions.position) !== positionIsHorizontal(item.dposition)) {
				scaleOptions.position = item.dposition;
			}

			updated[id] = true;
			var scale = null;
			if (id in scales && scales[id].type === scaleType) {
				scale = scales[id];
				scale.options = scaleOptions;
				scale.ctx = me.ctx;
				scale.chart = me;
			} else {
				var scaleClass = core_scaleService.getScaleConstructor(scaleType);
				if (!scaleClass) {
					return;
				}
				scale = new scaleClass({
					id: id,
					type: scaleType,
					options: scaleOptions,
					ctx: me.ctx,
					chart: me
				});
				scales[scale.id] = scale;
			}

			scale.mergeTicksOptions();

			// TODO(SB): I think we should be able to remove this custom case (options.scale)
			// and consider it as a regular scale part of the "scales"" map only! This would
			// make the logic easier and remove some useless? custom code.
			if (item.isDefault) {
				me.scale = scale;
			}
		});
		// clear up discarded scales
		helpers$1.each(updated, function(hasUpdated, id) {
			if (!hasUpdated) {
				delete scales[id];
			}
		});

		me.scales = scales;

		core_scaleService.addScalesToLayout(this);
	},

	buildOrUpdateControllers: function() {
		var me = this;
		var newControllers = [];
		var datasets = me.data.datasets;
		var i, ilen;

		for (i = 0, ilen = datasets.length; i < ilen; i++) {
			var dataset = datasets[i];
			var meta = me.getDatasetMeta(i);
			var type = dataset.type || me.config.type;

			if (meta.type && meta.type !== type) {
				me.destroyDatasetMeta(i);
				meta = me.getDatasetMeta(i);
			}
			meta.type = type;
			meta.order = dataset.order || 0;
			meta.index = i;

			if (meta.controller) {
				meta.controller.updateIndex(i);
				meta.controller.linkScales();
			} else {
				var ControllerClass = controllers[meta.type];
				if (ControllerClass === undefined) {
					throw new Error('"' + meta.type + '" is not a chart type.');
				}

				meta.controller = new ControllerClass(me, i);
				newControllers.push(meta.controller);
			}
		}

		return newControllers;
	},

	/**
	 * Reset the elements of all datasets
	 * @private
	 */
	resetElements: function() {
		var me = this;
		helpers$1.each(me.data.datasets, function(dataset, datasetIndex) {
			me.getDatasetMeta(datasetIndex).controller.reset();
		}, me);
	},

	/**
	* Resets the chart back to it's state before the initial animation
	*/
	reset: function() {
		this.resetElements();
		this.tooltip.initialize();
	},

	update: function(config) {
		var me = this;
		var i, ilen;

		if (!config || typeof config !== 'object') {
			// backwards compatibility
			config = {
				duration: config,
				lazy: arguments[1]
			};
		}

		updateConfig(me);

		// plugins options references might have change, let's invalidate the cache
		// https://github.com/chartjs/Chart.js/issues/5111#issuecomment-355934167
		core_plugins._invalidate(me);

		if (core_plugins.notify(me, 'beforeUpdate') === false) {
			return;
		}

		// In case the entire data object changed
		me.tooltip._data = me.data;

		// Make sure dataset controllers are updated and new controllers are reset
		var newControllers = me.buildOrUpdateControllers();

		// Make sure all dataset controllers have correct meta data counts
		for (i = 0, ilen = me.data.datasets.length; i < ilen; i++) {
			me.getDatasetMeta(i).controller.buildOrUpdateElements();
		}

		me.updateLayout();

		// Can only reset the new controllers after the scales have been updated
		if (me.options.animation && me.options.animation.duration) {
			helpers$1.each(newControllers, function(controller) {
				controller.reset();
			});
		}

		me.updateDatasets();

		// Need to reset tooltip in case it is displayed with elements that are removed
		// after update.
		me.tooltip.initialize();

		// Last active contains items that were previously in the tooltip.
		// When we reset the tooltip, we need to clear it
		me.lastActive = [];

		// Do this before render so that any plugins that need final scale updates can use it
		core_plugins.notify(me, 'afterUpdate');

		me._layers.sort(compare2Level('z', '_idx'));

		if (me._bufferedRender) {
			me._bufferedRequest = {
				duration: config.duration,
				easing: config.easing,
				lazy: config.lazy
			};
		} else {
			me.render(config);
		}
	},

	/**
	 * Updates the chart layout unless a plugin returns `false` to the `beforeLayout`
	 * hook, in which case, plugins will not be called on `afterLayout`.
	 * @private
	 */
	updateLayout: function() {
		var me = this;

		if (core_plugins.notify(me, 'beforeLayout') === false) {
			return;
		}

		core_layouts.update(this, this.width, this.height);

		me._layers = [];
		helpers$1.each(me.boxes, function(box) {
			// _configure is called twice, once in core.scale.update and once here.
			// Here the boxes are fully updated and at their final positions.
			if (box._configure) {
				box._configure();
			}
			me._layers.push.apply(me._layers, box._layers());
		}, me);

		me._layers.forEach(function(item, index) {
			item._idx = index;
		});

		/**
		 * Provided for backward compatibility, use `afterLayout` instead.
		 * @method IPlugin#afterScaleUpdate
		 * @deprecated since version 2.5.0
		 * @todo remove at version 3
		 * @private
		 */
		core_plugins.notify(me, 'afterScaleUpdate');
		core_plugins.notify(me, 'afterLayout');
	},

	/**
	 * Updates all datasets unless a plugin returns `false` to the `beforeDatasetsUpdate`
	 * hook, in which case, plugins will not be called on `afterDatasetsUpdate`.
	 * @private
	 */
	updateDatasets: function() {
		var me = this;

		if (core_plugins.notify(me, 'beforeDatasetsUpdate') === false) {
			return;
		}

		for (var i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
			me.updateDataset(i);
		}

		core_plugins.notify(me, 'afterDatasetsUpdate');
	},

	/**
	 * Updates dataset at index unless a plugin returns `false` to the `beforeDatasetUpdate`
	 * hook, in which case, plugins will not be called on `afterDatasetUpdate`.
	 * @private
	 */
	updateDataset: function(index) {
		var me = this;
		var meta = me.getDatasetMeta(index);
		var args = {
			meta: meta,
			index: index
		};

		if (core_plugins.notify(me, 'beforeDatasetUpdate', [args]) === false) {
			return;
		}

		meta.controller._update();

		core_plugins.notify(me, 'afterDatasetUpdate', [args]);
	},

	render: function(config) {
		var me = this;

		if (!config || typeof config !== 'object') {
			// backwards compatibility
			config = {
				duration: config,
				lazy: arguments[1]
			};
		}

		var animationOptions = me.options.animation;
		var duration = valueOrDefault$9(config.duration, animationOptions && animationOptions.duration);
		var lazy = config.lazy;

		if (core_plugins.notify(me, 'beforeRender') === false) {
			return;
		}

		var onComplete = function(animation) {
			core_plugins.notify(me, 'afterRender');
			helpers$1.callback(animationOptions && animationOptions.onComplete, [animation], me);
		};

		if (animationOptions && duration) {
			var animation = new core_animation({
				numSteps: duration / 16.66, // 60 fps
				easing: config.easing || animationOptions.easing,

				render: function(chart, animationObject) {
					var easingFunction = helpers$1.easing.effects[animationObject.easing];
					var currentStep = animationObject.currentStep;
					var stepDecimal = currentStep / animationObject.numSteps;

					chart.draw(easingFunction(stepDecimal), stepDecimal, currentStep);
				},

				onAnimationProgress: animationOptions.onProgress,
				onAnimationComplete: onComplete
			});

			core_animations.addAnimation(me, animation, duration, lazy);
		} else {
			me.draw();

			// See https://github.com/chartjs/Chart.js/issues/3781
			onComplete(new core_animation({numSteps: 0, chart: me}));
		}

		return me;
	},

	draw: function(easingValue) {
		var me = this;
		var i, layers;

		me.clear();

		if (helpers$1.isNullOrUndef(easingValue)) {
			easingValue = 1;
		}

		me.transition(easingValue);

		if (me.width <= 0 || me.height <= 0) {
			return;
		}

		if (core_plugins.notify(me, 'beforeDraw', [easingValue]) === false) {
			return;
		}

		// Because of plugin hooks (before/afterDatasetsDraw), datasets can't
		// currently be part of layers. Instead, we draw
		// layers <= 0 before(default, backward compat), and the rest after
		layers = me._layers;
		for (i = 0; i < layers.length && layers[i].z <= 0; ++i) {
			layers[i].draw(me.chartArea);
		}

		me.drawDatasets(easingValue);

		// Rest of layers
		for (; i < layers.length; ++i) {
			layers[i].draw(me.chartArea);
		}

		me._drawTooltip(easingValue);

		core_plugins.notify(me, 'afterDraw', [easingValue]);
	},

	/**
	 * @private
	 */
	transition: function(easingValue) {
		var me = this;

		for (var i = 0, ilen = (me.data.datasets || []).length; i < ilen; ++i) {
			if (me.isDatasetVisible(i)) {
				me.getDatasetMeta(i).controller.transition(easingValue);
			}
		}

		me.tooltip.transition(easingValue);
	},

	/**
	 * @private
	 */
	_getSortedDatasetMetas: function(filterVisible) {
		var me = this;
		var datasets = me.data.datasets || [];
		var result = [];
		var i, ilen;

		for (i = 0, ilen = datasets.length; i < ilen; ++i) {
			if (!filterVisible || me.isDatasetVisible(i)) {
				result.push(me.getDatasetMeta(i));
			}
		}

		result.sort(compare2Level('order', 'index'));

		return result;
	},

	/**
	 * @private
	 */
	_getSortedVisibleDatasetMetas: function() {
		return this._getSortedDatasetMetas(true);
	},

	/**
	 * Draws all datasets unless a plugin returns `false` to the `beforeDatasetsDraw`
	 * hook, in which case, plugins will not be called on `afterDatasetsDraw`.
	 * @private
	 */
	drawDatasets: function(easingValue) {
		var me = this;
		var metasets, i;

		if (core_plugins.notify(me, 'beforeDatasetsDraw', [easingValue]) === false) {
			return;
		}

		metasets = me._getSortedVisibleDatasetMetas();
		for (i = metasets.length - 1; i >= 0; --i) {
			me.drawDataset(metasets[i], easingValue);
		}

		core_plugins.notify(me, 'afterDatasetsDraw', [easingValue]);
	},

	/**
	 * Draws dataset at index unless a plugin returns `false` to the `beforeDatasetDraw`
	 * hook, in which case, plugins will not be called on `afterDatasetDraw`.
	 * @private
	 */
	drawDataset: function(meta, easingValue) {
		var me = this;
		var args = {
			meta: meta,
			index: meta.index,
			easingValue: easingValue
		};

		if (core_plugins.notify(me, 'beforeDatasetDraw', [args]) === false) {
			return;
		}

		meta.controller.draw(easingValue);

		core_plugins.notify(me, 'afterDatasetDraw', [args]);
	},

	/**
	 * Draws tooltip unless a plugin returns `false` to the `beforeTooltipDraw`
	 * hook, in which case, plugins will not be called on `afterTooltipDraw`.
	 * @private
	 */
	_drawTooltip: function(easingValue) {
		var me = this;
		var tooltip = me.tooltip;
		var args = {
			tooltip: tooltip,
			easingValue: easingValue
		};

		if (core_plugins.notify(me, 'beforeTooltipDraw', [args]) === false) {
			return;
		}

		tooltip.draw();

		core_plugins.notify(me, 'afterTooltipDraw', [args]);
	},

	/**
	 * Get the single element that was clicked on
	 * @return An object containing the dataset index and element index of the matching element. Also contains the rectangle that was draw
	 */
	getElementAtEvent: function(e) {
		return core_interaction.modes.single(this, e);
	},

	getElementsAtEvent: function(e) {
		return core_interaction.modes.label(this, e, {intersect: true});
	},

	getElementsAtXAxis: function(e) {
		return core_interaction.modes['x-axis'](this, e, {intersect: true});
	},

	getElementsAtEventForMode: function(e, mode, options) {
		var method = core_interaction.modes[mode];
		if (typeof method === 'function') {
			return method(this, e, options);
		}

		return [];
	},

	getDatasetAtEvent: function(e) {
		return core_interaction.modes.dataset(this, e, {intersect: true});
	},

	getDatasetMeta: function(datasetIndex) {
		var me = this;
		var dataset = me.data.datasets[datasetIndex];
		if (!dataset._meta) {
			dataset._meta = {};
		}

		var meta = dataset._meta[me.id];
		if (!meta) {
			meta = dataset._meta[me.id] = {
				type: null,
				data: [],
				dataset: null,
				controller: null,
				hidden: null,			// See isDatasetVisible() comment
				xAxisID: null,
				yAxisID: null,
				order: dataset.order || 0,
				index: datasetIndex
			};
		}

		return meta;
	},

	getVisibleDatasetCount: function() {
		var count = 0;
		for (var i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
			if (this.isDatasetVisible(i)) {
				count++;
			}
		}
		return count;
	},

	isDatasetVisible: function(datasetIndex) {
		var meta = this.getDatasetMeta(datasetIndex);

		// meta.hidden is a per chart dataset hidden flag override with 3 states: if true or false,
		// the dataset.hidden value is ignored, else if null, the dataset hidden state is returned.
		return typeof meta.hidden === 'boolean' ? !meta.hidden : !this.data.datasets[datasetIndex].hidden;
	},

	generateLegend: function() {
		return this.options.legendCallback(this);
	},

	/**
	 * @private
	 */
	destroyDatasetMeta: function(datasetIndex) {
		var id = this.id;
		var dataset = this.data.datasets[datasetIndex];
		var meta = dataset._meta && dataset._meta[id];

		if (meta) {
			meta.controller.destroy();
			delete dataset._meta[id];
		}
	},

	destroy: function() {
		var me = this;
		var canvas = me.canvas;
		var i, ilen;

		me.stop();

		// dataset controllers need to cleanup associated data
		for (i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
			me.destroyDatasetMeta(i);
		}

		if (canvas) {
			me.unbindEvents();
			helpers$1.canvas.clear(me);
			platform.releaseContext(me.ctx);
			me.canvas = null;
			me.ctx = null;
		}

		core_plugins.notify(me, 'destroy');

		delete Chart.instances[me.id];
	},

	toBase64Image: function() {
		return this.canvas.toDataURL.apply(this.canvas, arguments);
	},

	initToolTip: function() {
		var me = this;
		me.tooltip = new core_tooltip({
			_chart: me,
			_chartInstance: me, // deprecated, backward compatibility
			_data: me.data,
			_options: me.options.tooltips
		}, me);
	},

	/**
	 * @private
	 */
	bindEvents: function() {
		var me = this;
		var listeners = me._listeners = {};
		var listener = function() {
			me.eventHandler.apply(me, arguments);
		};

		helpers$1.each(me.options.events, function(type) {
			platform.addEventListener(me, type, listener);
			listeners[type] = listener;
		});

		// Elements used to detect size change should not be injected for non responsive charts.
		// See https://github.com/chartjs/Chart.js/issues/2210
		if (me.options.responsive) {
			listener = function() {
				me.resize();
			};

			platform.addEventListener(me, 'resize', listener);
			listeners.resize = listener;
		}
	},

	/**
	 * @private
	 */
	unbindEvents: function() {
		var me = this;
		var listeners = me._listeners;
		if (!listeners) {
			return;
		}

		delete me._listeners;
		helpers$1.each(listeners, function(listener, type) {
			platform.removeEventListener(me, type, listener);
		});
	},

	updateHoverStyle: function(elements, mode, enabled) {
		var prefix = enabled ? 'set' : 'remove';
		var element, i, ilen;

		for (i = 0, ilen = elements.length; i < ilen; ++i) {
			element = elements[i];
			if (element) {
				this.getDatasetMeta(element._datasetIndex).controller[prefix + 'HoverStyle'](element);
			}
		}

		if (mode === 'dataset') {
			this.getDatasetMeta(elements[0]._datasetIndex).controller['_' + prefix + 'DatasetHoverStyle']();
		}
	},

	/**
	 * @private
	 */
	eventHandler: function(e) {
		var me = this;
		var tooltip = me.tooltip;

		if (core_plugins.notify(me, 'beforeEvent', [e]) === false) {
			return;
		}

		// Buffer any update calls so that renders do not occur
		me._bufferedRender = true;
		me._bufferedRequest = null;

		var changed = me.handleEvent(e);
		// for smooth tooltip animations issue #4989
		// the tooltip should be the source of change
		// Animation check workaround:
		// tooltip._start will be null when tooltip isn't animating
		if (tooltip) {
			changed = tooltip._start
				? tooltip.handleEvent(e)
				: changed | tooltip.handleEvent(e);
		}

		core_plugins.notify(me, 'afterEvent', [e]);

		var bufferedRequest = me._bufferedRequest;
		if (bufferedRequest) {
			// If we have an update that was triggered, we need to do a normal render
			me.render(bufferedRequest);
		} else if (changed && !me.animating) {
			// If entering, leaving, or changing elements, animate the change via pivot
			me.stop();

			// We only need to render at this point. Updating will cause scales to be
			// recomputed generating flicker & using more memory than necessary.
			me.render({
				duration: me.options.hover.animationDuration,
				lazy: true
			});
		}

		me._bufferedRender = false;
		me._bufferedRequest = null;

		return me;
	},

	/**
	 * Handle an event
	 * @private
	 * @param {IEvent} event the event to handle
	 * @return {boolean} true if the chart needs to re-render
	 */
	handleEvent: function(e) {
		var me = this;
		var options = me.options || {};
		var hoverOptions = options.hover;
		var changed = false;

		me.lastActive = me.lastActive || [];

		// Find Active Elements for hover and tooltips
		if (e.type === 'mouseout') {
			me.active = [];
		} else {
			me.active = me.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions);
		}

		// Invoke onHover hook
		// Need to call with native event here to not break backwards compatibility
		helpers$1.callback(options.onHover || options.hover.onHover, [e.native, me.active], me);

		if (e.type === 'mouseup' || e.type === 'click') {
			if (options.onClick) {
				// Use e.native here for backwards compatibility
				options.onClick.call(me, e.native, me.active);
			}
		}

		// Remove styling for last active (even if it may still be active)
		if (me.lastActive.length) {
			me.updateHoverStyle(me.lastActive, hoverOptions.mode, false);
		}

		// Built in hover styling
		if (me.active.length && hoverOptions.mode) {
			me.updateHoverStyle(me.active, hoverOptions.mode, true);
		}

		changed = !helpers$1.arrayEquals(me.active, me.lastActive);

		// Remember Last Actives
		me.lastActive = me.active;

		return changed;
	}
});

/**
 * NOTE(SB) We actually don't use this container anymore but we need to keep it
 * for backward compatibility. Though, it can still be useful for plugins that
 * would need to work on multiple charts?!
 */
Chart.instances = {};

var core_controller = Chart;

// DEPRECATIONS

/**
 * Provided for backward compatibility, use Chart instead.
 * @class Chart.Controller
 * @deprecated since version 2.6
 * @todo remove at version 3
 * @private
 */
Chart.Controller = Chart;

/**
 * Provided for backward compatibility, not available anymore.
 * @namespace Chart
 * @deprecated since version 2.8
 * @todo remove at version 3
 * @private
 */
Chart.types = {};

/**
 * Provided for backward compatibility, not available anymore.
 * @namespace Chart.helpers.configMerge
 * @deprecated since version 2.8.0
 * @todo remove at version 3
 * @private
 */
helpers$1.configMerge = mergeConfig;

/**
 * Provided for backward compatibility, not available anymore.
 * @namespace Chart.helpers.scaleMerge
 * @deprecated since version 2.8.0
 * @todo remove at version 3
 * @private
 */
helpers$1.scaleMerge = mergeScaleConfig;

var core_helpers = function() {

	// -- Basic js utility methods

	helpers$1.where = function(collection, filterCallback) {
		if (helpers$1.isArray(collection) && Array.prototype.filter) {
			return collection.filter(filterCallback);
		}
		var filtered = [];

		helpers$1.each(collection, function(item) {
			if (filterCallback(item)) {
				filtered.push(item);
			}
		});

		return filtered;
	};
	helpers$1.findIndex = Array.prototype.findIndex ?
		function(array, callback, scope) {
			return array.findIndex(callback, scope);
		} :
		function(array, callback, scope) {
			scope = scope === undefined ? array : scope;
			for (var i = 0, ilen = array.length; i < ilen; ++i) {
				if (callback.call(scope, array[i], i, array)) {
					return i;
				}
			}
			return -1;
		};
	helpers$1.findNextWhere = function(arrayToSearch, filterCallback, startIndex) {
		// Default to start of the array
		if (helpers$1.isNullOrUndef(startIndex)) {
			startIndex = -1;
		}
		for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
			var currentItem = arrayToSearch[i];
			if (filterCallback(currentItem)) {
				return currentItem;
			}
		}
	};
	helpers$1.findPreviousWhere = function(arrayToSearch, filterCallback, startIndex) {
		// Default to end of the array
		if (helpers$1.isNullOrUndef(startIndex)) {
			startIndex = arrayToSearch.length;
		}
		for (var i = startIndex - 1; i >= 0; i--) {
			var currentItem = arrayToSearch[i];
			if (filterCallback(currentItem)) {
				return currentItem;
			}
		}
	};

	// -- Math methods
	helpers$1.isNumber = function(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	};
	helpers$1.almostEquals = function(x, y, epsilon) {
		return Math.abs(x - y) < epsilon;
	};
	helpers$1.almostWhole = function(x, epsilon) {
		var rounded = Math.round(x);
		return ((rounded - epsilon) <= x) && ((rounded + epsilon) >= x);
	};
	helpers$1.max = function(array) {
		return array.reduce(function(max, value) {
			if (!isNaN(value)) {
				return Math.max(max, value);
			}
			return max;
		}, Number.NEGATIVE_INFINITY);
	};
	helpers$1.min = function(array) {
		return array.reduce(function(min, value) {
			if (!isNaN(value)) {
				return Math.min(min, value);
			}
			return min;
		}, Number.POSITIVE_INFINITY);
	};
	helpers$1.sign = Math.sign ?
		function(x) {
			return Math.sign(x);
		} :
		function(x) {
			x = +x; // convert to a number
			if (x === 0 || isNaN(x)) {
				return x;
			}
			return x > 0 ? 1 : -1;
		};
	helpers$1.toRadians = function(degrees) {
		return degrees * (Math.PI / 180);
	};
	helpers$1.toDegrees = function(radians) {
		return radians * (180 / Math.PI);
	};

	/**
	 * Returns the number of decimal places
	 * i.e. the number of digits after the decimal point, of the value of this Number.
	 * @param {number} x - A number.
	 * @returns {number} The number of decimal places.
	 * @private
	 */
	helpers$1._decimalPlaces = function(x) {
		if (!helpers$1.isFinite(x)) {
			return;
		}
		var e = 1;
		var p = 0;
		while (Math.round(x * e) / e !== x) {
			e *= 10;
			p++;
		}
		return p;
	};

	// Gets the angle from vertical upright to the point about a centre.
	helpers$1.getAngleFromPoint = function(centrePoint, anglePoint) {
		var distanceFromXCenter = anglePoint.x - centrePoint.x;
		var distanceFromYCenter = anglePoint.y - centrePoint.y;
		var radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);

		var angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);

		if (angle < (-0.5 * Math.PI)) {
			angle += 2.0 * Math.PI; // make sure the returned angle is in the range of (-PI/2, 3PI/2]
		}

		return {
			angle: angle,
			distance: radialDistanceFromCenter
		};
	};
	helpers$1.distanceBetweenPoints = function(pt1, pt2) {
		return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
	};

	/**
	 * Provided for backward compatibility, not available anymore
	 * @function Chart.helpers.aliasPixel
	 * @deprecated since version 2.8.0
	 * @todo remove at version 3
	 */
	helpers$1.aliasPixel = function(pixelWidth) {
		return (pixelWidth % 2 === 0) ? 0 : 0.5;
	};

	/**
	 * Returns the aligned pixel value to avoid anti-aliasing blur
	 * @param {Chart} chart - The chart instance.
	 * @param {number} pixel - A pixel value.
	 * @param {number} width - The width of the element.
	 * @returns {number} The aligned pixel value.
	 * @private
	 */
	helpers$1._alignPixel = function(chart, pixel, width) {
		var devicePixelRatio = chart.currentDevicePixelRatio;
		var halfWidth = width / 2;
		return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
	};

	helpers$1.splineCurve = function(firstPoint, middlePoint, afterPoint, t) {
		// Props to Rob Spencer at scaled innovation for his post on splining between points
		// http://scaledinnovation.com/analytics/splines/aboutSplines.html

		// This function must also respect "skipped" points

		var previous = firstPoint.skip ? middlePoint : firstPoint;
		var current = middlePoint;
		var next = afterPoint.skip ? middlePoint : afterPoint;

		var d01 = Math.sqrt(Math.pow(current.x - previous.x, 2) + Math.pow(current.y - previous.y, 2));
		var d12 = Math.sqrt(Math.pow(next.x - current.x, 2) + Math.pow(next.y - current.y, 2));

		var s01 = d01 / (d01 + d12);
		var s12 = d12 / (d01 + d12);

		// If all points are the same, s01 & s02 will be inf
		s01 = isNaN(s01) ? 0 : s01;
		s12 = isNaN(s12) ? 0 : s12;

		var fa = t * s01; // scaling factor for triangle Ta
		var fb = t * s12;

		return {
			previous: {
				x: current.x - fa * (next.x - previous.x),
				y: current.y - fa * (next.y - previous.y)
			},
			next: {
				x: current.x + fb * (next.x - previous.x),
				y: current.y + fb * (next.y - previous.y)
			}
		};
	};
	helpers$1.EPSILON = Number.EPSILON || 1e-14;
	helpers$1.splineCurveMonotone = function(points) {
		// This function calculates Bézier control points in a similar way than |splineCurve|,
		// but preserves monotonicity of the provided data and ensures no local extremums are added
		// between the dataset discrete points due to the interpolation.
		// See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation

		var pointsWithTangents = (points || []).map(function(point) {
			return {
				model: point._model,
				deltaK: 0,
				mK: 0
			};
		});

		// Calculate slopes (deltaK) and initialize tangents (mK)
		var pointsLen = pointsWithTangents.length;
		var i, pointBefore, pointCurrent, pointAfter;
		for (i = 0; i < pointsLen; ++i) {
			pointCurrent = pointsWithTangents[i];
			if (pointCurrent.model.skip) {
				continue;
			}

			pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
			pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;
			if (pointAfter && !pointAfter.model.skip) {
				var slopeDeltaX = (pointAfter.model.x - pointCurrent.model.x);

				// In the case of two points that appear at the same x pixel, slopeDeltaX is 0
				pointCurrent.deltaK = slopeDeltaX !== 0 ? (pointAfter.model.y - pointCurrent.model.y) / slopeDeltaX : 0;
			}

			if (!pointBefore || pointBefore.model.skip) {
				pointCurrent.mK = pointCurrent.deltaK;
			} else if (!pointAfter || pointAfter.model.skip) {
				pointCurrent.mK = pointBefore.deltaK;
			} else if (this.sign(pointBefore.deltaK) !== this.sign(pointCurrent.deltaK)) {
				pointCurrent.mK = 0;
			} else {
				pointCurrent.mK = (pointBefore.deltaK + pointCurrent.deltaK) / 2;
			}
		}

		// Adjust tangents to ensure monotonic properties
		var alphaK, betaK, tauK, squaredMagnitude;
		for (i = 0; i < pointsLen - 1; ++i) {
			pointCurrent = pointsWithTangents[i];
			pointAfter = pointsWithTangents[i + 1];
			if (pointCurrent.model.skip || pointAfter.model.skip) {
				continue;
			}

			if (helpers$1.almostEquals(pointCurrent.deltaK, 0, this.EPSILON)) {
				pointCurrent.mK = pointAfter.mK = 0;
				continue;
			}

			alphaK = pointCurrent.mK / pointCurrent.deltaK;
			betaK = pointAfter.mK / pointCurrent.deltaK;
			squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
			if (squaredMagnitude <= 9) {
				continue;
			}

			tauK = 3 / Math.sqrt(squaredMagnitude);
			pointCurrent.mK = alphaK * tauK * pointCurrent.deltaK;
			pointAfter.mK = betaK * tauK * pointCurrent.deltaK;
		}

		// Compute control points
		var deltaX;
		for (i = 0; i < pointsLen; ++i) {
			pointCurrent = pointsWithTangents[i];
			if (pointCurrent.model.skip) {
				continue;
			}

			pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
			pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;
			if (pointBefore && !pointBefore.model.skip) {
				deltaX = (pointCurrent.model.x - pointBefore.model.x) / 3;
				pointCurrent.model.controlPointPreviousX = pointCurrent.model.x - deltaX;
				pointCurrent.model.controlPointPreviousY = pointCurrent.model.y - deltaX * pointCurrent.mK;
			}
			if (pointAfter && !pointAfter.model.skip) {
				deltaX = (pointAfter.model.x - pointCurrent.model.x) / 3;
				pointCurrent.model.controlPointNextX = pointCurrent.model.x + deltaX;
				pointCurrent.model.controlPointNextY = pointCurrent.model.y + deltaX * pointCurrent.mK;
			}
		}
	};
	helpers$1.nextItem = function(collection, index, loop) {
		if (loop) {
			return index >= collection.length - 1 ? collection[0] : collection[index + 1];
		}
		return index >= collection.length - 1 ? collection[collection.length - 1] : collection[index + 1];
	};
	helpers$1.previousItem = function(collection, index, loop) {
		if (loop) {
			return index <= 0 ? collection[collection.length - 1] : collection[index - 1];
		}
		return index <= 0 ? collection[0] : collection[index - 1];
	};
	// Implementation of the nice number algorithm used in determining where axis labels will go
	helpers$1.niceNum = function(range, round) {
		var exponent = Math.floor(helpers$1.log10(range));
		var fraction = range / Math.pow(10, exponent);
		var niceFraction;

		if (round) {
			if (fraction < 1.5) {
				niceFraction = 1;
			} else if (fraction < 3) {
				niceFraction = 2;
			} else if (fraction < 7) {
				niceFraction = 5;
			} else {
				niceFraction = 10;
			}
		} else if (fraction <= 1.0) {
			niceFraction = 1;
		} else if (fraction <= 2) {
			niceFraction = 2;
		} else if (fraction <= 5) {
			niceFraction = 5;
		} else {
			niceFraction = 10;
		}

		return niceFraction * Math.pow(10, exponent);
	};
	// Request animation polyfill - https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
	helpers$1.requestAnimFrame = (function() {
		if (typeof window === 'undefined') {
			return function(callback) {
				callback();
			};
		}
		return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(callback) {
				return window.setTimeout(callback, 1000 / 60);
			};
	}());
	// -- DOM methods
	helpers$1.getRelativePosition = function(evt, chart) {
		var mouseX, mouseY;
		var e = evt.originalEvent || evt;
		var canvas = evt.target || evt.srcElement;
		var boundingRect = canvas.getBoundingClientRect();

		var touches = e.touches;
		if (touches && touches.length > 0) {
			mouseX = touches[0].clientX;
			mouseY = touches[0].clientY;

		} else {
			mouseX = e.clientX;
			mouseY = e.clientY;
		}

		// Scale mouse coordinates into canvas coordinates
		// by following the pattern laid out by 'jerryj' in the comments of
		// https://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
		var paddingLeft = parseFloat(helpers$1.getStyle(canvas, 'padding-left'));
		var paddingTop = parseFloat(helpers$1.getStyle(canvas, 'padding-top'));
		var paddingRight = parseFloat(helpers$1.getStyle(canvas, 'padding-right'));
		var paddingBottom = parseFloat(helpers$1.getStyle(canvas, 'padding-bottom'));
		var width = boundingRect.right - boundingRect.left - paddingLeft - paddingRight;
		var height = boundingRect.bottom - boundingRect.top - paddingTop - paddingBottom;

		// We divide by the current device pixel ratio, because the canvas is scaled up by that amount in each direction. However
		// the backend model is in unscaled coordinates. Since we are going to deal with our model coordinates, we go back here
		mouseX = Math.round((mouseX - boundingRect.left - paddingLeft) / (width) * canvas.width / chart.currentDevicePixelRatio);
		mouseY = Math.round((mouseY - boundingRect.top - paddingTop) / (height) * canvas.height / chart.currentDevicePixelRatio);

		return {
			x: mouseX,
			y: mouseY
		};

	};

	// Private helper function to convert max-width/max-height values that may be percentages into a number
	function parseMaxStyle(styleValue, node, parentProperty) {
		var valueInPixels;
		if (typeof styleValue === 'string') {
			valueInPixels = parseInt(styleValue, 10);

			if (styleValue.indexOf('%') !== -1) {
				// percentage * size in dimension
				valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
			}
		} else {
			valueInPixels = styleValue;
		}

		return valueInPixels;
	}

	/**
	 * Returns if the given value contains an effective constraint.
	 * @private
	 */
	function isConstrainedValue(value) {
		return value !== undefined && value !== null && value !== 'none';
	}

	/**
	 * Returns the max width or height of the given DOM node in a cross-browser compatible fashion
	 * @param {HTMLElement} domNode - the node to check the constraint on
	 * @param {string} maxStyle - the style that defines the maximum for the direction we are using ('max-width' / 'max-height')
	 * @param {string} percentageProperty - property of parent to use when calculating width as a percentage
	 * @see {@link https://www.nathanaeljones.com/blog/2013/reading-max-width-cross-browser}
	 */
	function getConstraintDimension(domNode, maxStyle, percentageProperty) {
		var view = document.defaultView;
		var parentNode = helpers$1._getParentNode(domNode);
		var constrainedNode = view.getComputedStyle(domNode)[maxStyle];
		var constrainedContainer = view.getComputedStyle(parentNode)[maxStyle];
		var hasCNode = isConstrainedValue(constrainedNode);
		var hasCContainer = isConstrainedValue(constrainedContainer);
		var infinity = Number.POSITIVE_INFINITY;

		if (hasCNode || hasCContainer) {
			return Math.min(
				hasCNode ? parseMaxStyle(constrainedNode, domNode, percentageProperty) : infinity,
				hasCContainer ? parseMaxStyle(constrainedContainer, parentNode, percentageProperty) : infinity);
		}

		return 'none';
	}
	// returns Number or undefined if no constraint
	helpers$1.getConstraintWidth = function(domNode) {
		return getConstraintDimension(domNode, 'max-width', 'clientWidth');
	};
	// returns Number or undefined if no constraint
	helpers$1.getConstraintHeight = function(domNode) {
		return getConstraintDimension(domNode, 'max-height', 'clientHeight');
	};
	/**
	 * @private
 	 */
	helpers$1._calculatePadding = function(container, padding, parentDimension) {
		padding = helpers$1.getStyle(container, padding);

		return padding.indexOf('%') > -1 ? parentDimension * parseInt(padding, 10) / 100 : parseInt(padding, 10);
	};
	/**
	 * @private
	 */
	helpers$1._getParentNode = function(domNode) {
		var parent = domNode.parentNode;
		if (parent && parent.toString() === '[object ShadowRoot]') {
			parent = parent.host;
		}
		return parent;
	};
	helpers$1.getMaximumWidth = function(domNode) {
		var container = helpers$1._getParentNode(domNode);
		if (!container) {
			return domNode.clientWidth;
		}

		var clientWidth = container.clientWidth;
		var paddingLeft = helpers$1._calculatePadding(container, 'padding-left', clientWidth);
		var paddingRight = helpers$1._calculatePadding(container, 'padding-right', clientWidth);

		var w = clientWidth - paddingLeft - paddingRight;
		var cw = helpers$1.getConstraintWidth(domNode);
		return isNaN(cw) ? w : Math.min(w, cw);
	};
	helpers$1.getMaximumHeight = function(domNode) {
		var container = helpers$1._getParentNode(domNode);
		if (!container) {
			return domNode.clientHeight;
		}

		var clientHeight = container.clientHeight;
		var paddingTop = helpers$1._calculatePadding(container, 'padding-top', clientHeight);
		var paddingBottom = helpers$1._calculatePadding(container, 'padding-bottom', clientHeight);

		var h = clientHeight - paddingTop - paddingBottom;
		var ch = helpers$1.getConstraintHeight(domNode);
		return isNaN(ch) ? h : Math.min(h, ch);
	};
	helpers$1.getStyle = function(el, property) {
		return el.currentStyle ?
			el.currentStyle[property] :
			document.defaultView.getComputedStyle(el, null).getPropertyValue(property);
	};
	helpers$1.retinaScale = function(chart, forceRatio) {
		var pixelRatio = chart.currentDevicePixelRatio = forceRatio || (typeof window !== 'undefined' && window.devicePixelRatio) || 1;
		if (pixelRatio === 1) {
			return;
		}

		var canvas = chart.canvas;
		var height = chart.height;
		var width = chart.width;

		canvas.height = height * pixelRatio;
		canvas.width = width * pixelRatio;
		chart.ctx.scale(pixelRatio, pixelRatio);

		// If no style has been set on the canvas, the render size is used as display size,
		// making the chart visually bigger, so let's enforce it to the "correct" values.
		// See https://github.com/chartjs/Chart.js/issues/3575
		if (!canvas.style.height && !canvas.style.width) {
			canvas.style.height = height + 'px';
			canvas.style.width = width + 'px';
		}
	};
	// -- Canvas methods
	helpers$1.fontString = function(pixelSize, fontStyle, fontFamily) {
		return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
	};
	helpers$1.longestText = function(ctx, font, arrayOfThings, cache) {
		cache = cache || {};
		var data = cache.data = cache.data || {};
		var gc = cache.garbageCollect = cache.garbageCollect || [];

		if (cache.font !== font) {
			data = cache.data = {};
			gc = cache.garbageCollect = [];
			cache.font = font;
		}

		ctx.font = font;
		var longest = 0;
		var ilen = arrayOfThings.length;
		var i, j, jlen, thing, nestedThing;
		for (i = 0; i < ilen; i++) {
			thing = arrayOfThings[i];

			// Undefined strings and arrays should not be measured
			if (thing !== undefined && thing !== null && helpers$1.isArray(thing) !== true) {
				longest = helpers$1.measureText(ctx, data, gc, longest, thing);
			} else if (helpers$1.isArray(thing)) {
				// if it is an array lets measure each element
				// to do maybe simplify this function a bit so we can do this more recursively?
				for (j = 0, jlen = thing.length; j < jlen; j++) {
					nestedThing = thing[j];
					// Undefined strings and arrays should not be measured
					if (nestedThing !== undefined && nestedThing !== null && !helpers$1.isArray(nestedThing)) {
						longest = helpers$1.measureText(ctx, data, gc, longest, nestedThing);
					}
				}
			}
		}

		var gcLen = gc.length / 2;
		if (gcLen > arrayOfThings.length) {
			for (i = 0; i < gcLen; i++) {
				delete data[gc[i]];
			}
			gc.splice(0, gcLen);
		}
		return longest;
	};
	helpers$1.measureText = function(ctx, data, gc, longest, string) {
		var textWidth = data[string];
		if (!textWidth) {
			textWidth = data[string] = ctx.measureText(string).width;
			gc.push(string);
		}
		if (textWidth > longest) {
			longest = textWidth;
		}
		return longest;
	};

	/**
	 * @deprecated
	 */
	helpers$1.numberOfLabelLines = function(arrayOfThings) {
		var numberOfLines = 1;
		helpers$1.each(arrayOfThings, function(thing) {
			if (helpers$1.isArray(thing)) {
				if (thing.length > numberOfLines) {
					numberOfLines = thing.length;
				}
			}
		});
		return numberOfLines;
	};

	helpers$1.color = !chartjsColor ?
		function(value) {
			console.error('Color.js not found!');
			return value;
		} :
		function(value) {
			/* global CanvasGradient */
			if (value instanceof CanvasGradient) {
				value = core_defaults.global.defaultColor;
			}

			return chartjsColor(value);
		};

	helpers$1.getHoverColor = function(colorValue) {
		/* global CanvasPattern */
		return (colorValue instanceof CanvasPattern || colorValue instanceof CanvasGradient) ?
			colorValue :
			helpers$1.color(colorValue).saturate(0.5).darken(0.1).rgbString();
	};
};

function abstract() {
	throw new Error(
		'This method is not implemented: either no adapter can ' +
		'be found or an incomplete integration was provided.'
	);
}

/**
 * Date adapter (current used by the time scale)
 * @namespace Chart._adapters._date
 * @memberof Chart._adapters
 * @private
 */

/**
 * Currently supported unit string values.
 * @typedef {('millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year')}
 * @memberof Chart._adapters._date
 * @name Unit
 */

/**
 * @class
 */
function DateAdapter(options) {
	this.options = options || {};
}

helpers$1.extend(DateAdapter.prototype, /** @lends DateAdapter */ {
	/**
	 * Returns a map of time formats for the supported formatting units defined
	 * in Unit as well as 'datetime' representing a detailed date/time string.
	 * @returns {{string: string}}
	 */
	formats: abstract,

	/**
	 * Parses the given `value` and return the associated timestamp.
	 * @param {any} value - the value to parse (usually comes from the data)
	 * @param {string} [format] - the expected data format
	 * @returns {(number|null)}
	 * @function
	 */
	parse: abstract,

	/**
	 * Returns the formatted date in the specified `format` for a given `timestamp`.
	 * @param {number} timestamp - the timestamp to format
	 * @param {string} format - the date/time token
	 * @return {string}
	 * @function
	 */
	format: abstract,

	/**
	 * Adds the specified `amount` of `unit` to the given `timestamp`.
	 * @param {number} timestamp - the input timestamp
	 * @param {number} amount - the amount to add
	 * @param {Unit} unit - the unit as string
	 * @return {number}
	 * @function
	 */
	add: abstract,

	/**
	 * Returns the number of `unit` between the given timestamps.
	 * @param {number} max - the input timestamp (reference)
	 * @param {number} min - the timestamp to substract
	 * @param {Unit} unit - the unit as string
	 * @return {number}
	 * @function
	 */
	diff: abstract,

	/**
	 * Returns start of `unit` for the given `timestamp`.
	 * @param {number} timestamp - the input timestamp
	 * @param {Unit} unit - the unit as string
	 * @param {number} [weekday] - the ISO day of the week with 1 being Monday
	 * and 7 being Sunday (only needed if param *unit* is `isoWeek`).
	 * @function
	 */
	startOf: abstract,

	/**
	 * Returns end of `unit` for the given `timestamp`.
	 * @param {number} timestamp - the input timestamp
	 * @param {Unit} unit - the unit as string
	 * @function
	 */
	endOf: abstract,

	// DEPRECATIONS

	/**
	 * Provided for backward compatibility for scale.getValueForPixel(),
	 * this method should be overridden only by the moment adapter.
	 * @deprecated since version 2.8.0
	 * @todo remove at version 3
	 * @private
	 */
	_create: function(value) {
		return value;
	}
});

DateAdapter.override = function(members) {
	helpers$1.extend(DateAdapter.prototype, members);
};

var _date = DateAdapter;

var core_adapters = {
	_date: _date
};

/**
 * Namespace to hold static tick generation functions
 * @namespace Chart.Ticks
 */
var core_ticks = {
	/**
	 * Namespace to hold formatters for different types of ticks
	 * @namespace Chart.Ticks.formatters
	 */
	formatters: {
		/**
		 * Formatter for value labels
		 * @method Chart.Ticks.formatters.values
		 * @param value the value to display
		 * @return {string|string[]} the label to display
		 */
		values: function(value) {
			return helpers$1.isArray(value) ? value : '' + value;
		},

		/**
		 * Formatter for linear numeric ticks
		 * @method Chart.Ticks.formatters.linear
		 * @param tickValue {number} the value to be formatted
		 * @param index {number} the position of the tickValue parameter in the ticks array
		 * @param ticks {number[]} the list of ticks being converted
		 * @return {string} string representation of the tickValue parameter
		 */
		linear: function(tickValue, index, ticks) {
			// If we have lots of ticks, don't use the ones
			var delta = ticks.length > 3 ? ticks[2] - ticks[1] : ticks[1] - ticks[0];

			// If we have a number like 2.5 as the delta, figure out how many decimal places we need
			if (Math.abs(delta) > 1) {
				if (tickValue !== Math.floor(tickValue)) {
					// not an integer
					delta = tickValue - Math.floor(tickValue);
				}
			}

			var logDelta = helpers$1.log10(Math.abs(delta));
			var tickString = '';

			if (tickValue !== 0) {
				var maxTick = Math.max(Math.abs(ticks[0]), Math.abs(ticks[ticks.length - 1]));
				if (maxTick < 1e-4) { // all ticks are small numbers; use scientific notation
					var logTick = helpers$1.log10(Math.abs(tickValue));
					var numExponential = Math.floor(logTick) - Math.floor(logDelta);
					numExponential = Math.max(Math.min(numExponential, 20), 0);
					tickString = tickValue.toExponential(numExponential);
				} else {
					var numDecimal = -1 * Math.floor(logDelta);
					numDecimal = Math.max(Math.min(numDecimal, 20), 0); // toFixed has a max of 20 decimal places
					tickString = tickValue.toFixed(numDecimal);
				}
			} else {
				tickString = '0'; // never show decimal places for 0
			}

			return tickString;
		},

		logarithmic: function(tickValue, index, ticks) {
			var remain = tickValue / (Math.pow(10, Math.floor(helpers$1.log10(tickValue))));

			if (tickValue === 0) {
				return '0';
			} else if (remain === 1 || remain === 2 || remain === 5 || index === 0 || index === ticks.length - 1) {
				return tickValue.toExponential();
			}
			return '';
		}
	}
};

var isArray = helpers$1.isArray;
var isNullOrUndef = helpers$1.isNullOrUndef;
var valueOrDefault$a = helpers$1.valueOrDefault;
var valueAtIndexOrDefault = helpers$1.valueAtIndexOrDefault;

core_defaults._set('scale', {
	display: true,
	position: 'left',
	offset: false,

	// grid line settings
	gridLines: {
		display: true,
		color: 'rgba(0,0,0,0.1)',
		lineWidth: 1,
		drawBorder: true,
		drawOnChartArea: true,
		drawTicks: true,
		tickMarkLength: 10,
		zeroLineWidth: 1,
		zeroLineColor: 'rgba(0,0,0,0.25)',
		zeroLineBorderDash: [],
		zeroLineBorderDashOffset: 0.0,
		offsetGridLines: false,
		borderDash: [],
		borderDashOffset: 0.0
	},

	// scale label
	scaleLabel: {
		// display property
		display: false,

		// actual label
		labelString: '',

		// top/bottom padding
		padding: {
			top: 4,
			bottom: 4
		}
	},

	// label settings
	ticks: {
		beginAtZero: false,
		minRotation: 0,
		maxRotation: 50,
		mirror: false,
		padding: 0,
		reverse: false,
		display: true,
		autoSkip: true,
		autoSkipPadding: 0,
		labelOffset: 0,
		// We pass through arrays to be rendered as multiline labels, we convert Others to strings here.
		callback: core_ticks.formatters.values,
		minor: {},
		major: {}
	}
});

/** Returns a new array containing numItems from arr */
function sample(arr, numItems) {
	var result = [];
	var increment = arr.length / numItems;
	var i = 0;
	var len = arr.length;

	for (; i < len; i += increment) {
		result.push(arr[Math.floor(i)]);
	}
	return result;
}

function getPixelForGridLine(scale, index, offsetGridLines) {
	var length = scale.getTicks().length;
	var validIndex = Math.min(index, length - 1);
	var lineValue = scale.getPixelForTick(validIndex);
	var start = scale._startPixel;
	var end = scale._endPixel;
	var epsilon = 1e-6; // 1e-6 is margin in pixels for accumulated error.
	var offset;

	if (offsetGridLines) {
		if (length === 1) {
			offset = Math.max(lineValue - start, end - lineValue);
		} else if (index === 0) {
			offset = (scale.getPixelForTick(1) - lineValue) / 2;
		} else {
			offset = (lineValue - scale.getPixelForTick(validIndex - 1)) / 2;
		}
		lineValue += validIndex < index ? offset : -offset;

		// Return undefined if the pixel is out of the range
		if (lineValue < start - epsilon || lineValue > end + epsilon) {
			return;
		}
	}
	return lineValue;
}

function garbageCollect(caches, length) {
	helpers$1.each(caches, function(cache) {
		var gc = cache.gc;
		var gcLen = gc.length / 2;
		var i;
		if (gcLen > length) {
			for (i = 0; i < gcLen; ++i) {
				delete cache.data[gc[i]];
			}
			gc.splice(0, gcLen);
		}
	});
}

/**
 * Returns {width, height, offset} objects for the first, last, widest, highest tick
 * labels where offset indicates the anchor point offset from the top in pixels.
 */
function computeLabelSizes(ctx, tickFonts, ticks, caches) {
	var length = ticks.length;
	var widths = [];
	var heights = [];
	var offsets = [];
	var i, j, jlen, label, tickFont, fontString, cache, lineHeight, width, height, nestedLabel, widest, highest;

	for (i = 0; i < length; ++i) {
		label = ticks[i].label;
		tickFont = ticks[i].major ? tickFonts.major : tickFonts.minor;
		ctx.font = fontString = tickFont.string;
		cache = caches[fontString] = caches[fontString] || {data: {}, gc: []};
		lineHeight = tickFont.lineHeight;
		width = height = 0;
		// Undefined labels and arrays should not be measured
		if (!isNullOrUndef(label) && !isArray(label)) {
			width = helpers$1.measureText(ctx, cache.data, cache.gc, width, label);
			height = lineHeight;
		} else if (isArray(label)) {
			// if it is an array let's measure each element
			for (j = 0, jlen = label.length; j < jlen; ++j) {
				nestedLabel = label[j];
				// Undefined labels and arrays should not be measured
				if (!isNullOrUndef(nestedLabel) && !isArray(nestedLabel)) {
					width = helpers$1.measureText(ctx, cache.data, cache.gc, width, nestedLabel);
					height += lineHeight;
				}
			}
		}
		widths.push(width);
		heights.push(height);
		offsets.push(lineHeight / 2);
	}
	garbageCollect(caches, length);

	widest = widths.indexOf(Math.max.apply(null, widths));
	highest = heights.indexOf(Math.max.apply(null, heights));

	function valueAt(idx) {
		return {
			width: widths[idx] || 0,
			height: heights[idx] || 0,
			offset: offsets[idx] || 0
		};
	}

	return {
		first: valueAt(0),
		last: valueAt(length - 1),
		widest: valueAt(widest),
		highest: valueAt(highest)
	};
}

function getTickMarkLength(options) {
	return options.drawTicks ? options.tickMarkLength : 0;
}

function getScaleLabelHeight(options) {
	var font, padding;

	if (!options.display) {
		return 0;
	}

	font = helpers$1.options._parseFont(options);
	padding = helpers$1.options.toPadding(options.padding);

	return font.lineHeight + padding.height;
}

function parseFontOptions(options, nestedOpts) {
	return helpers$1.extend(helpers$1.options._parseFont({
		fontFamily: valueOrDefault$a(nestedOpts.fontFamily, options.fontFamily),
		fontSize: valueOrDefault$a(nestedOpts.fontSize, options.fontSize),
		fontStyle: valueOrDefault$a(nestedOpts.fontStyle, options.fontStyle),
		lineHeight: valueOrDefault$a(nestedOpts.lineHeight, options.lineHeight)
	}), {
		color: helpers$1.options.resolve([nestedOpts.fontColor, options.fontColor, core_defaults.global.defaultFontColor])
	});
}

function parseTickFontOptions(options) {
	var minor = parseFontOptions(options, options.minor);
	var major = options.major.enabled ? parseFontOptions(options, options.major) : minor;

	return {minor: minor, major: major};
}

function nonSkipped(ticksToFilter) {
	var filtered = [];
	var item, index, len;
	for (index = 0, len = ticksToFilter.length; index < len; ++index) {
		item = ticksToFilter[index];
		if (typeof item._index !== 'undefined') {
			filtered.push(item);
		}
	}
	return filtered;
}

function getEvenSpacing(arr) {
	var len = arr.length;
	var i, diff;

	if (len < 2) {
		return false;
	}

	for (diff = arr[0], i = 1; i < len; ++i) {
		if (arr[i] - arr[i - 1] !== diff) {
			return false;
		}
	}
	return diff;
}

function calculateSpacing(majorIndices, ticks, axisLength, ticksLimit) {
	var evenMajorSpacing = getEvenSpacing(majorIndices);
	var spacing = (ticks.length - 1) / ticksLimit;
	var factors, factor, i, ilen;

	// If the major ticks are evenly spaced apart, place the minor ticks
	// so that they divide the major ticks into even chunks
	if (!evenMajorSpacing) {
		return Math.max(spacing, 1);
	}

	factors = helpers$1.math._factorize(evenMajorSpacing);
	for (i = 0, ilen = factors.length - 1; i < ilen; i++) {
		factor = factors[i];
		if (factor > spacing) {
			return factor;
		}
	}
	return Math.max(spacing, 1);
}

function getMajorIndices(ticks) {
	var result = [];
	var i, ilen;
	for (i = 0, ilen = ticks.length; i < ilen; i++) {
		if (ticks[i].major) {
			result.push(i);
		}
	}
	return result;
}

function skipMajors(ticks, majorIndices, spacing) {
	var count = 0;
	var next = majorIndices[0];
	var i, tick;

	spacing = Math.ceil(spacing);
	for (i = 0; i < ticks.length; i++) {
		tick = ticks[i];
		if (i === next) {
			tick._index = i;
			count++;
			next = majorIndices[count * spacing];
		} else {
			delete tick.label;
		}
	}
}

function skip(ticks, spacing, majorStart, majorEnd) {
	var start = valueOrDefault$a(majorStart, 0);
	var end = Math.min(valueOrDefault$a(majorEnd, ticks.length), ticks.length);
	var count = 0;
	var length, i, tick, next;

	spacing = Math.ceil(spacing);
	if (majorEnd) {
		length = majorEnd - majorStart;
		spacing = length / Math.floor(length / spacing);
	}

	next = start;

	while (next < 0) {
		count++;
		next = Math.round(start + count * spacing);
	}

	for (i = Math.max(start, 0); i < end; i++) {
		tick = ticks[i];
		if (i === next) {
			tick._index = i;
			count++;
			next = Math.round(start + count * spacing);
		} else {
			delete tick.label;
		}
	}
}

var Scale = core_element.extend({

	zeroLineIndex: 0,

	/**
	 * Get the padding needed for the scale
	 * @method getPadding
	 * @private
	 * @returns {Padding} the necessary padding
	 */
	getPadding: function() {
		var me = this;
		return {
			left: me.paddingLeft || 0,
			top: me.paddingTop || 0,
			right: me.paddingRight || 0,
			bottom: me.paddingBottom || 0
		};
	},

	/**
	 * Returns the scale tick objects ({label, major})
	 * @since 2.7
	 */
	getTicks: function() {
		return this._ticks;
	},

	/**
	* @private
	*/
	_getLabels: function() {
		var data = this.chart.data;
		return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels || [];
	},

	// These methods are ordered by lifecyle. Utilities then follow.
	// Any function defined here is inherited by all scale types.
	// Any function can be extended by the scale type

	/**
	 * Provided for backward compatibility, not available anymore
	 * @function Chart.Scale.mergeTicksOptions
	 * @deprecated since version 2.8.0
	 * @todo remove at version 3
	 */
	mergeTicksOptions: function() {
		// noop
	},

	beforeUpdate: function() {
		helpers$1.callback(this.options.beforeUpdate, [this]);
	},

	/**
	 * @param {number} maxWidth - the max width in pixels
	 * @param {number} maxHeight - the max height in pixels
	 * @param {object} margins - the space between the edge of the other scales and edge of the chart
	 *   This space comes from two sources:
	 *     - padding - space that's required to show the labels at the edges of the scale
	 *     - thickness of scales or legends in another orientation
	 */
	update: function(maxWidth, maxHeight, margins) {
		var me = this;
		var tickOpts = me.options.ticks;
		var sampleSize = tickOpts.sampleSize;
		var i, ilen, labels, ticks, samplingEnabled;

		// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
		me.beforeUpdate();

		// Absorb the master measurements
		me.maxWidth = maxWidth;
		me.maxHeight = maxHeight;
		me.margins = helpers$1.extend({
			left: 0,
			right: 0,
			top: 0,
			bottom: 0
		}, margins);

		me._ticks = null;
		me.ticks = null;
		me._labelSizes = null;
		me._maxLabelLines = 0;
		me.longestLabelWidth = 0;
		me.longestTextCache = me.longestTextCache || {};
		me._gridLineItems = null;
		me._labelItems = null;

		// Dimensions
		me.beforeSetDimensions();
		me.setDimensions();
		me.afterSetDimensions();

		// Data min/max
		me.beforeDataLimits();
		me.determineDataLimits();
		me.afterDataLimits();

		// Ticks - `this.ticks` is now DEPRECATED!
		// Internal ticks are now stored as objects in the PRIVATE `this._ticks` member
		// and must not be accessed directly from outside this class. `this.ticks` being
		// around for long time and not marked as private, we can't change its structure
		// without unexpected breaking changes. If you need to access the scale ticks,
		// use scale.getTicks() instead.

		me.beforeBuildTicks();

		// New implementations should return an array of objects but for BACKWARD COMPAT,
		// we still support no return (`this.ticks` internally set by calling this method).
		ticks = me.buildTicks() || [];

		// Allow modification of ticks in callback.
		ticks = me.afterBuildTicks(ticks) || ticks;

		// Ensure ticks contains ticks in new tick format
		if ((!ticks || !ticks.length) && me.ticks) {
			ticks = [];
			for (i = 0, ilen = me.ticks.length; i < ilen; ++i) {
				ticks.push({
					value: me.ticks[i],
					major: false
				});
			}
		}

		me._ticks = ticks;

		// Compute tick rotation and fit using a sampled subset of labels
		// We generally don't need to compute the size of every single label for determining scale size
		samplingEnabled = sampleSize < ticks.length;
		labels = me._convertTicksToLabels(samplingEnabled ? sample(ticks, sampleSize) : ticks);

		// _configure is called twice, once here, once from core.controller.updateLayout.
		// Here we haven't been positioned yet, but dimensions are correct.
		// Variables set in _configure are needed for calculateTickRotation, and
		// it's ok that coordinates are not correct there, only dimensions matter.
		me._configure();

		// Tick Rotation
		me.beforeCalculateTickRotation();
		me.calculateTickRotation();
		me.afterCalculateTickRotation();

		me.beforeFit();
		me.fit();
		me.afterFit();

		// Auto-skip
		me._ticksToDraw = tickOpts.display && (tickOpts.autoSkip || tickOpts.source === 'auto') ? me._autoSkip(ticks) : ticks;

		if (samplingEnabled) {
			// Generate labels using all non-skipped ticks
			labels = me._convertTicksToLabels(me._ticksToDraw);
		}

		me.ticks = labels;   // BACKWARD COMPATIBILITY

		// IMPORTANT: after this point, we consider that `this.ticks` will NEVER change!

		me.afterUpdate();

		// TODO(v3): remove minSize as a public property and return value from all layout boxes. It is unused
		// make maxWidth and maxHeight private
		return me.minSize;
	},

	/**
	 * @private
	 */
	_configure: function() {
		var me = this;
		var reversePixels = me.options.ticks.reverse;
		var startPixel, endPixel;

		if (me.isHorizontal()) {
			startPixel = me.left;
			endPixel = me.right;
		} else {
			startPixel = me.top;
			endPixel = me.bottom;
			// by default vertical scales are from bottom to top, so pixels are reversed
			reversePixels = !reversePixels;
		}
		me._startPixel = startPixel;
		me._endPixel = endPixel;
		me._reversePixels = reversePixels;
		me._length = endPixel - startPixel;
	},

	afterUpdate: function() {
		helpers$1.callback(this.options.afterUpdate, [this]);
	},

	//

	beforeSetDimensions: function() {
		helpers$1.callback(this.options.beforeSetDimensions, [this]);
	},
	setDimensions: function() {
		var me = this;
		// Set the unconstrained dimension before label rotation
		if (me.isHorizontal()) {
			// Reset position before calculating rotation
			me.width = me.maxWidth;
			me.left = 0;
			me.right = me.width;
		} else {
			me.height = me.maxHeight;

			// Reset position before calculating rotation
			me.top = 0;
			me.bottom = me.height;
		}

		// Reset padding
		me.paddingLeft = 0;
		me.paddingTop = 0;
		me.paddingRight = 0;
		me.paddingBottom = 0;
	},
	afterSetDimensions: function() {
		helpers$1.callback(this.options.afterSetDimensions, [this]);
	},

	// Data limits
	beforeDataLimits: function() {
		helpers$1.callback(this.options.beforeDataLimits, [this]);
	},
	determineDataLimits: helpers$1.noop,
	afterDataLimits: function() {
		helpers$1.callback(this.options.afterDataLimits, [this]);
	},

	//
	beforeBuildTicks: function() {
		helpers$1.callback(this.options.beforeBuildTicks, [this]);
	},
	buildTicks: helpers$1.noop,
	afterBuildTicks: function(ticks) {
		var me = this;
		// ticks is empty for old axis implementations here
		if (isArray(ticks) && ticks.length) {
			return helpers$1.callback(me.options.afterBuildTicks, [me, ticks]);
		}
		// Support old implementations (that modified `this.ticks` directly in buildTicks)
		me.ticks = helpers$1.callback(me.options.afterBuildTicks, [me, me.ticks]) || me.ticks;
		return ticks;
	},

	beforeTickToLabelConversion: function() {
		helpers$1.callback(this.options.beforeTickToLabelConversion, [this]);
	},
	convertTicksToLabels: function() {
		var me = this;
		// Convert ticks to strings
		var tickOpts = me.options.ticks;
		me.ticks = me.ticks.map(tickOpts.userCallback || tickOpts.callback, this);
	},
	afterTickToLabelConversion: function() {
		helpers$1.callback(this.options.afterTickToLabelConversion, [this]);
	},

	//

	beforeCalculateTickRotation: function() {
		helpers$1.callback(this.options.beforeCalculateTickRotation, [this]);
	},
	calculateTickRotation: function() {
		var me = this;
		var options = me.options;
		var tickOpts = options.ticks;
		var numTicks = me.getTicks().length;
		var minRotation = tickOpts.minRotation || 0;
		var maxRotation = tickOpts.maxRotation;
		var labelRotation = minRotation;
		var labelSizes, maxLabelWidth, maxLabelHeight, maxWidth, tickWidth, maxHeight, maxLabelDiagonal;

		if (!me._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !me.isHorizontal()) {
			me.labelRotation = minRotation;
			return;
		}

		labelSizes = me._getLabelSizes();
		maxLabelWidth = labelSizes.widest.width;
		maxLabelHeight = labelSizes.highest.height - labelSizes.highest.offset;

		// Estimate the width of each grid based on the canvas width, the maximum
		// label width and the number of tick intervals
		maxWidth = Math.min(me.maxWidth, me.chart.width - maxLabelWidth);
		tickWidth = options.offset ? me.maxWidth / numTicks : maxWidth / (numTicks - 1);

		// Allow 3 pixels x2 padding either side for label readability
		if (maxLabelWidth + 6 > tickWidth) {
			tickWidth = maxWidth / (numTicks - (options.offset ? 0.5 : 1));
			maxHeight = me.maxHeight - getTickMarkLength(options.gridLines)
				- tickOpts.padding - getScaleLabelHeight(options.scaleLabel);
			maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);
			labelRotation = helpers$1.toDegrees(Math.min(
				Math.asin(Math.min((labelSizes.highest.height + 6) / tickWidth, 1)),
				Math.asin(Math.min(maxHeight / maxLabelDiagonal, 1)) - Math.asin(maxLabelHeight / maxLabelDiagonal)
			));
			labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));
		}

		me.labelRotation = labelRotation;
	},
	afterCalculateTickRotation: function() {
		helpers$1.callback(this.options.afterCalculateTickRotation, [this]);
	},

	//

	beforeFit: function() {
		helpers$1.callback(this.options.beforeFit, [this]);
	},
	fit: function() {
		var me = this;
		// Reset
		var minSize = me.minSize = {
			width: 0,
			height: 0
		};

		var chart = me.chart;
		var opts = me.options;
		var tickOpts = opts.ticks;
		var scaleLabelOpts = opts.scaleLabel;
		var gridLineOpts = opts.gridLines;
		var display = me._isVisible();
		var isBottom = opts.position === 'bottom';
		var isHorizontal = me.isHorizontal();

		// Width
		if (isHorizontal) {
			minSize.width = me.maxWidth;
		} else if (display) {
			minSize.width = getTickMarkLength(gridLineOpts) + getScaleLabelHeight(scaleLabelOpts);
		}

		// height
		if (!isHorizontal) {
			minSize.height = me.maxHeight; // fill all the height
		} else if (display) {
			minSize.height = getTickMarkLength(gridLineOpts) + getScaleLabelHeight(scaleLabelOpts);
		}

		// Don't bother fitting the ticks if we are not showing the labels
		if (tickOpts.display && display) {
			var tickFonts = parseTickFontOptions(tickOpts);
			var labelSizes = me._getLabelSizes();
			var firstLabelSize = labelSizes.first;
			var lastLabelSize = labelSizes.last;
			var widestLabelSize = labelSizes.widest;
			var highestLabelSize = labelSizes.highest;
			var lineSpace = tickFonts.minor.lineHeight * 0.4;
			var tickPadding = tickOpts.padding;

			if (isHorizontal) {
				// A horizontal axis is more constrained by the height.
				var isRotated = me.labelRotation !== 0;
				var angleRadians = helpers$1.toRadians(me.labelRotation);
				var cosRotation = Math.cos(angleRadians);
				var sinRotation = Math.sin(angleRadians);

				var labelHeight = sinRotation * widestLabelSize.width
					+ cosRotation * (highestLabelSize.height - (isRotated ? highestLabelSize.offset : 0))
					+ (isRotated ? 0 : lineSpace); // padding

				minSize.height = Math.min(me.maxHeight, minSize.height + labelHeight + tickPadding);

				var offsetLeft = me.getPixelForTick(0) - me.left;
				var offsetRight = me.right - me.getPixelForTick(me.getTicks().length - 1);
				var paddingLeft, paddingRight;

				// Ensure that our ticks are always inside the canvas. When rotated, ticks are right aligned
				// which means that the right padding is dominated by the font height
				if (isRotated) {
					paddingLeft = isBottom ?
						cosRotation * firstLabelSize.width + sinRotation * firstLabelSize.offset :
						sinRotation * (firstLabelSize.height - firstLabelSize.offset);
					paddingRight = isBottom ?
						sinRotation * (lastLabelSize.height - lastLabelSize.offset) :
						cosRotation * lastLabelSize.width + sinRotation * lastLabelSize.offset;
				} else {
					paddingLeft = firstLabelSize.width / 2;
					paddingRight = lastLabelSize.width / 2;
				}

				// Adjust padding taking into account changes in offsets
				// and add 3 px to move away from canvas edges
				me.paddingLeft = Math.max((paddingLeft - offsetLeft) * me.width / (me.width - offsetLeft), 0) + 3;
				me.paddingRight = Math.max((paddingRight - offsetRight) * me.width / (me.width - offsetRight), 0) + 3;
			} else {
				// A vertical axis is more constrained by the width. Labels are the
				// dominant factor here, so get that length first and account for padding
				var labelWidth = tickOpts.mirror ? 0 :
					// use lineSpace for consistency with horizontal axis
					// tickPadding is not implemented for horizontal
					widestLabelSize.width + tickPadding + lineSpace;

				minSize.width = Math.min(me.maxWidth, minSize.width + labelWidth);

				me.paddingTop = firstLabelSize.height / 2;
				me.paddingBottom = lastLabelSize.height / 2;
			}
		}

		me.handleMargins();

		if (isHorizontal) {
			me.width = me._length = chart.width - me.margins.left - me.margins.right;
			me.height = minSize.height;
		} else {
			me.width = minSize.width;
			me.height = me._length = chart.height - me.margins.top - me.margins.bottom;
		}
	},

	/**
	 * Handle margins and padding interactions
	 * @private
	 */
	handleMargins: function() {
		var me = this;
		if (me.margins) {
			me.margins.left = Math.max(me.paddingLeft, me.margins.left);
			me.margins.top = Math.max(me.paddingTop, me.margins.top);
			me.margins.right = Math.max(me.paddingRight, me.margins.right);
			me.margins.bottom = Math.max(me.paddingBottom, me.margins.bottom);
		}
	},

	afterFit: function() {
		helpers$1.callback(this.options.afterFit, [this]);
	},

	// Shared Methods
	isHorizontal: function() {
		var pos = this.options.position;
		return pos === 'top' || pos === 'bottom';
	},
	isFullWidth: function() {
		return this.options.fullWidth;
	},

	// Get the correct value. NaN bad inputs, If the value type is object get the x or y based on whether we are horizontal or not
	getRightValue: function(rawValue) {
		// Null and undefined values first
		if (isNullOrUndef(rawValue)) {
			return NaN;
		}
		// isNaN(object) returns true, so make sure NaN is checking for a number; Discard Infinite values
		if ((typeof rawValue === 'number' || rawValue instanceof Number) && !isFinite(rawValue)) {
			return NaN;
		}

		// If it is in fact an object, dive in one more level
		if (rawValue) {
			if (this.isHorizontal()) {
				if (rawValue.x !== undefined) {
					return this.getRightValue(rawValue.x);
				}
			} else if (rawValue.y !== undefined) {
				return this.getRightValue(rawValue.y);
			}
		}

		// Value is good, return it
		return rawValue;
	},

	_convertTicksToLabels: function(ticks) {
		var me = this;
		var labels, i, ilen;

		me.ticks = ticks.map(function(tick) {
			return tick.value;
		});

		me.beforeTickToLabelConversion();

		// New implementations should return the formatted tick labels but for BACKWARD
		// COMPAT, we still support no return (`this.ticks` internally changed by calling
		// this method and supposed to contain only string values).
		labels = me.convertTicksToLabels(ticks) || me.ticks;

		me.afterTickToLabelConversion();

		// BACKWARD COMPAT: synchronize `_ticks` with labels (so potentially `this.ticks`)
		for (i = 0, ilen = ticks.length; i < ilen; ++i) {
			ticks[i].label = labels[i];
		}

		return labels;
	},

	/**
	 * @private
	 */
	_getLabelSizes: function() {
		var me = this;
		var labelSizes = me._labelSizes;

		if (!labelSizes) {
			me._labelSizes = labelSizes = computeLabelSizes(me.ctx, parseTickFontOptions(me.options.ticks), me.getTicks(), me.longestTextCache);
			me.longestLabelWidth = labelSizes.widest.width;
		}

		return labelSizes;
	},

	/**
	 * @private
	 */
	_parseValue: function(value) {
		var start, end, min, max;

		if (isArray(value)) {
			start = +this.getRightValue(value[0]);
			end = +this.getRightValue(value[1]);
			min = Math.min(start, end);
			max = Math.max(start, end);
		} else {
			value = +this.getRightValue(value);
			start = undefined;
			end = value;
			min = value;
			max = value;
		}

		return {
			min: min,
			max: max,
			start: start,
			end: end
		};
	},

	/**
	* @private
	*/
	_getScaleLabel: function(rawValue) {
		var v = this._parseValue(rawValue);
		if (v.start !== undefined) {
			return '[' + v.start + ', ' + v.end + ']';
		}

		return +this.getRightValue(rawValue);
	},

	/**
	 * Used to get the value to display in the tooltip for the data at the given index
	 * @param index
	 * @param datasetIndex
	 */
	getLabelForIndex: helpers$1.noop,

	/**
	 * Returns the location of the given data point. Value can either be an index or a numerical value
	 * The coordinate (0, 0) is at the upper-left corner of the canvas
	 * @param value
	 * @param index
	 * @param datasetIndex
	 */
	getPixelForValue: helpers$1.noop,

	/**
	 * Used to get the data value from a given pixel. This is the inverse of getPixelForValue
	 * The coordinate (0, 0) is at the upper-left corner of the canvas
	 * @param pixel
	 */
	getValueForPixel: helpers$1.noop,

	/**
	 * Returns the location of the tick at the given index
	 * The coordinate (0, 0) is at the upper-left corner of the canvas
	 */
	getPixelForTick: function(index) {
		var me = this;
		var offset = me.options.offset;
		var numTicks = me._ticks.length;
		var tickWidth = 1 / Math.max(numTicks - (offset ? 0 : 1), 1);

		return index < 0 || index > numTicks - 1
			? null
			: me.getPixelForDecimal(index * tickWidth + (offset ? tickWidth / 2 : 0));
	},

	/**
	 * Utility for getting the pixel location of a percentage of scale
	 * The coordinate (0, 0) is at the upper-left corner of the canvas
	 */
	getPixelForDecimal: function(decimal) {
		var me = this;

		if (me._reversePixels) {
			decimal = 1 - decimal;
		}

		return me._startPixel + decimal * me._length;
	},

	getDecimalForPixel: function(pixel) {
		var decimal = (pixel - this._startPixel) / this._length;
		return this._reversePixels ? 1 - decimal : decimal;
	},

	/**
	 * Returns the pixel for the minimum chart value
	 * The coordinate (0, 0) is at the upper-left corner of the canvas
	 */
	getBasePixel: function() {
		return this.getPixelForValue(this.getBaseValue());
	},

	getBaseValue: function() {
		var me = this;
		var min = me.min;
		var max = me.max;

		return me.beginAtZero ? 0 :
			min < 0 && max < 0 ? max :
			min > 0 && max > 0 ? min :
			0;
	},

	/**
	 * Returns a subset of ticks to be plotted to avoid overlapping labels.
	 * @private
	 */
	_autoSkip: function(ticks) {
		var me = this;
		var tickOpts = me.options.ticks;
		var axisLength = me._length;
		var ticksLimit = tickOpts.maxTicksLimit || axisLength / me._tickSize() + 1;
		var majorIndices = tickOpts.major.enabled ? getMajorIndices(ticks) : [];
		var numMajorIndices = majorIndices.length;
		var first = majorIndices[0];
		var last = majorIndices[numMajorIndices - 1];
		var i, ilen, spacing, avgMajorSpacing;

		// If there are too many major ticks to display them all
		if (numMajorIndices > ticksLimit) {
			skipMajors(ticks, majorIndices, numMajorIndices / ticksLimit);
			return nonSkipped(ticks);
		}

		spacing = calculateSpacing(majorIndices, ticks, axisLength, ticksLimit);

		if (numMajorIndices > 0) {
			for (i = 0, ilen = numMajorIndices - 1; i < ilen; i++) {
				skip(ticks, spacing, majorIndices[i], majorIndices[i + 1]);
			}
			avgMajorSpacing = numMajorIndices > 1 ? (last - first) / (numMajorIndices - 1) : null;
			skip(ticks, spacing, helpers$1.isNullOrUndef(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);
			skip(ticks, spacing, last, helpers$1.isNullOrUndef(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);
			return nonSkipped(ticks);
		}
		skip(ticks, spacing);
		return nonSkipped(ticks);
	},

	/**
	 * @private
	 */
	_tickSize: function() {
		var me = this;
		var optionTicks = me.options.ticks;

		// Calculate space needed by label in axis direction.
		var rot = helpers$1.toRadians(me.labelRotation);
		var cos = Math.abs(Math.cos(rot));
		var sin = Math.abs(Math.sin(rot));

		var labelSizes = me._getLabelSizes();
		var padding = optionTicks.autoSkipPadding || 0;
		var w = labelSizes ? labelSizes.widest.width + padding : 0;
		var h = labelSizes ? labelSizes.highest.height + padding : 0;

		// Calculate space needed for 1 tick in axis direction.
		return me.isHorizontal()
			? h * cos > w * sin ? w / cos : h / sin
			: h * sin < w * cos ? h / cos : w / sin;
	},

	/**
	 * @private
	 */
	_isVisible: function() {
		var me = this;
		var chart = me.chart;
		var display = me.options.display;
		var i, ilen, meta;

		if (display !== 'auto') {
			return !!display;
		}

		// When 'auto', the scale is visible if at least one associated dataset is visible.
		for (i = 0, ilen = chart.data.datasets.length; i < ilen; ++i) {
			if (chart.isDatasetVisible(i)) {
				meta = chart.getDatasetMeta(i);
				if (meta.xAxisID === me.id || meta.yAxisID === me.id) {
					return true;
				}
			}
		}

		return false;
	},

	/**
	 * @private
	 */
	_computeGridLineItems: function(chartArea) {
		var me = this;
		var chart = me.chart;
		var options = me.options;
		var gridLines = options.gridLines;
		var position = options.position;
		var offsetGridLines = gridLines.offsetGridLines;
		var isHorizontal = me.isHorizontal();
		var ticks = me._ticksToDraw;
		var ticksLength = ticks.length + (offsetGridLines ? 1 : 0);

		var tl = getTickMarkLength(gridLines);
		var items = [];
		var axisWidth = gridLines.drawBorder ? valueAtIndexOrDefault(gridLines.lineWidth, 0, 0) : 0;
		var axisHalfWidth = axisWidth / 2;
		var alignPixel = helpers$1._alignPixel;
		var alignBorderValue = function(pixel) {
			return alignPixel(chart, pixel, axisWidth);
		};
		var borderValue, i, tick, lineValue, alignedLineValue;
		var tx1, ty1, tx2, ty2, x1, y1, x2, y2, lineWidth, lineColor, borderDash, borderDashOffset;

		if (position === 'top') {
			borderValue = alignBorderValue(me.bottom);
			ty1 = me.bottom - tl;
			ty2 = borderValue - axisHalfWidth;
			y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
			y2 = chartArea.bottom;
		} else if (position === 'bottom') {
			borderValue = alignBorderValue(me.top);
			y1 = chartArea.top;
			y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
			ty1 = borderValue + axisHalfWidth;
			ty2 = me.top + tl;
		} else if (position === 'left') {
			borderValue = alignBorderValue(me.right);
			tx1 = me.right - tl;
			tx2 = borderValue - axisHalfWidth;
			x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
			x2 = chartArea.right;
		} else {
			borderValue = alignBorderValue(me.left);
			x1 = chartArea.left;
			x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
			tx1 = borderValue + axisHalfWidth;
			tx2 = me.left + tl;
		}

		for (i = 0; i < ticksLength; ++i) {
			tick = ticks[i] || {};

			// autoskipper skipped this tick (#4635)
			if (isNullOrUndef(tick.label) && i < ticks.length) {
				continue;
			}

			if (i === me.zeroLineIndex && options.offset === offsetGridLines) {
				// Draw the first index specially
				lineWidth = gridLines.zeroLineWidth;
				lineColor = gridLines.zeroLineColor;
				borderDash = gridLines.zeroLineBorderDash || [];
				borderDashOffset = gridLines.zeroLineBorderDashOffset || 0.0;
			} else {
				lineWidth = valueAtIndexOrDefault(gridLines.lineWidth, i, 1);
				lineColor = valueAtIndexOrDefault(gridLines.color, i, 'rgba(0,0,0,0.1)');
				borderDash = gridLines.borderDash || [];
				borderDashOffset = gridLines.borderDashOffset || 0.0;
			}

			lineValue = getPixelForGridLine(me, tick._index || i, offsetGridLines);

			// Skip if the pixel is out of the range
			if (lineValue === undefined) {
				continue;
			}

			alignedLineValue = alignPixel(chart, lineValue, lineWidth);

			if (isHorizontal) {
				tx1 = tx2 = x1 = x2 = alignedLineValue;
			} else {
				ty1 = ty2 = y1 = y2 = alignedLineValue;
			}

			items.push({
				tx1: tx1,
				ty1: ty1,
				tx2: tx2,
				ty2: ty2,
				x1: x1,
				y1: y1,
				x2: x2,
				y2: y2,
				width: lineWidth,
				color: lineColor,
				borderDash: borderDash,
				borderDashOffset: borderDashOffset,
			});
		}

		items.ticksLength = ticksLength;
		items.borderValue = borderValue;

		return items;
	},

	/**
	 * @private
	 */
	_computeLabelItems: function() {
		var me = this;
		var options = me.options;
		var optionTicks = options.ticks;
		var position = options.position;
		var isMirrored = optionTicks.mirror;
		var isHorizontal = me.isHorizontal();
		var ticks = me._ticksToDraw;
		var fonts = parseTickFontOptions(optionTicks);
		var tickPadding = optionTicks.padding;
		var tl = getTickMarkLength(options.gridLines);
		var rotation = -helpers$1.toRadians(me.labelRotation);
		var items = [];
		var i, ilen, tick, label, x, y, textAlign, pixel, font, lineHeight, lineCount, textOffset;

		if (position === 'top') {
			y = me.bottom - tl - tickPadding;
			textAlign = !rotation ? 'center' : 'left';
		} else if (position === 'bottom') {
			y = me.top + tl + tickPadding;
			textAlign = !rotation ? 'center' : 'right';
		} else if (position === 'left') {
			x = me.right - (isMirrored ? 0 : tl) - tickPadding;
			textAlign = isMirrored ? 'left' : 'right';
		} else {
			x = me.left + (isMirrored ? 0 : tl) + tickPadding;
			textAlign = isMirrored ? 'right' : 'left';
		}

		for (i = 0, ilen = ticks.length; i < ilen; ++i) {
			tick = ticks[i];
			label = tick.label;

			// autoskipper skipped this tick (#4635)
			if (isNullOrUndef(label)) {
				continue;
			}

			pixel = me.getPixelForTick(tick._index || i) + optionTicks.labelOffset;
			font = tick.major ? fonts.major : fonts.minor;
			lineHeight = font.lineHeight;
			lineCount = isArray(label) ? label.length : 1;

			if (isHorizontal) {
				x = pixel;
				textOffset = position === 'top'
					? ((!rotation ? 0.5 : 1) - lineCount) * lineHeight
					: (!rotation ? 0.5 : 0) * lineHeight;
			} else {
				y = pixel;
				textOffset = (1 - lineCount) * lineHeight / 2;
			}

			items.push({
				x: x,
				y: y,
				rotation: rotation,
				label: label,
				font: font,
				textOffset: textOffset,
				textAlign: textAlign
			});
		}

		return items;
	},

	/**
	 * @private
	 */
	_drawGrid: function(chartArea) {
		var me = this;
		var gridLines = me.options.gridLines;

		if (!gridLines.display) {
			return;
		}

		var ctx = me.ctx;
		var chart = me.chart;
		var alignPixel = helpers$1._alignPixel;
		var axisWidth = gridLines.drawBorder ? valueAtIndexOrDefault(gridLines.lineWidth, 0, 0) : 0;
		var items = me._gridLineItems || (me._gridLineItems = me._computeGridLineItems(chartArea));
		var width, color, i, ilen, item;

		for (i = 0, ilen = items.length; i < ilen; ++i) {
			item = items[i];
			width = item.width;
			color = item.color;

			if (width && color) {
				ctx.save();
				ctx.lineWidth = width;
				ctx.strokeStyle = color;
				if (ctx.setLineDash) {
					ctx.setLineDash(item.borderDash);
					ctx.lineDashOffset = item.borderDashOffset;
				}

				ctx.beginPath();

				if (gridLines.drawTicks) {
					ctx.moveTo(item.tx1, item.ty1);
					ctx.lineTo(item.tx2, item.ty2);
				}

				if (gridLines.drawOnChartArea) {
					ctx.moveTo(item.x1, item.y1);
					ctx.lineTo(item.x2, item.y2);
				}

				ctx.stroke();
				ctx.restore();
			}
		}

		if (axisWidth) {
			// Draw the line at the edge of the axis
			var firstLineWidth = axisWidth;
			var lastLineWidth = valueAtIndexOrDefault(gridLines.lineWidth, items.ticksLength - 1, 1);
			var borderValue = items.borderValue;
			var x1, x2, y1, y2;

			if (me.isHorizontal()) {
				x1 = alignPixel(chart, me.left, firstLineWidth) - firstLineWidth / 2;
				x2 = alignPixel(chart, me.right, lastLineWidth) + lastLineWidth / 2;
				y1 = y2 = borderValue;
			} else {
				y1 = alignPixel(chart, me.top, firstLineWidth) - firstLineWidth / 2;
				y2 = alignPixel(chart, me.bottom, lastLineWidth) + lastLineWidth / 2;
				x1 = x2 = borderValue;
			}

			ctx.lineWidth = axisWidth;
			ctx.strokeStyle = valueAtIndexOrDefault(gridLines.color, 0);
			ctx.beginPath();
			ctx.moveTo(x1, y1);
			ctx.lineTo(x2, y2);
			ctx.stroke();
		}
	},

	/**
	 * @private
	 */
	_drawLabels: function() {
		var me = this;
		var optionTicks = me.options.ticks;

		if (!optionTicks.display) {
			return;
		}

		var ctx = me.ctx;
		var items = me._labelItems || (me._labelItems = me._computeLabelItems());
		var i, j, ilen, jlen, item, tickFont, label, y;

		for (i = 0, ilen = items.length; i < ilen; ++i) {
			item = items[i];
			tickFont = item.font;

			// Make sure we draw text in the correct color and font
			ctx.save();
			ctx.translate(item.x, item.y);
			ctx.rotate(item.rotation);
			ctx.font = tickFont.string;
			ctx.fillStyle = tickFont.color;
			ctx.textBaseline = 'middle';
			ctx.textAlign = item.textAlign;

			label = item.label;
			y = item.textOffset;
			if (isArray(label)) {
				for (j = 0, jlen = label.length; j < jlen; ++j) {
					// We just make sure the multiline element is a string here..
					ctx.fillText('' + label[j], 0, y);
					y += tickFont.lineHeight;
				}
			} else {
				ctx.fillText(label, 0, y);
			}
			ctx.restore();
		}
	},

	/**
	 * @private
	 */
	_drawTitle: function() {
		var me = this;
		var ctx = me.ctx;
		var options = me.options;
		var scaleLabel = options.scaleLabel;

		if (!scaleLabel.display) {
			return;
		}

		var scaleLabelFontColor = valueOrDefault$a(scaleLabel.fontColor, core_defaults.global.defaultFontColor);
		var scaleLabelFont = helpers$1.options._parseFont(scaleLabel);
		var scaleLabelPadding = helpers$1.options.toPadding(scaleLabel.padding);
		var halfLineHeight = scaleLabelFont.lineHeight / 2;
		var position = options.position;
		var rotation = 0;
		var scaleLabelX, scaleLabelY;

		if (me.isHorizontal()) {
			scaleLabelX = me.left + me.width / 2; // midpoint of the width
			scaleLabelY = position === 'bottom'
				? me.bottom - halfLineHeight - scaleLabelPadding.bottom
				: me.top + halfLineHeight + scaleLabelPadding.top;
		} else {
			var isLeft = position === 'left';
			scaleLabelX = isLeft
				? me.left + halfLineHeight + scaleLabelPadding.top
				: me.right - halfLineHeight - scaleLabelPadding.top;
			scaleLabelY = me.top + me.height / 2;
			rotation = isLeft ? -0.5 * Math.PI : 0.5 * Math.PI;
		}

		ctx.save();
		ctx.translate(scaleLabelX, scaleLabelY);
		ctx.rotate(rotation);
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.fillStyle = scaleLabelFontColor; // render in correct colour
		ctx.font = scaleLabelFont.string;
		ctx.fillText(scaleLabel.labelString, 0, 0);
		ctx.restore();
	},

	draw: function(chartArea) {
		var me = this;

		if (!me._isVisible()) {
			return;
		}

		me._drawGrid(chartArea);
		me._drawTitle();
		me._drawLabels();
	},

	/**
	 * @private
	 */
	_layers: function() {
		var me = this;
		var opts = me.options;
		var tz = opts.ticks && opts.ticks.z || 0;
		var gz = opts.gridLines && opts.gridLines.z || 0;

		if (!me._isVisible() || tz === gz || me.draw !== me._draw) {
			// backward compatibility: draw has been overridden by custom scale
			return [{
				z: tz,
				draw: function() {
					me.draw.apply(me, arguments);
				}
			}];
		}

		return [{
			z: gz,
			draw: function() {
				me._drawGrid.apply(me, arguments);
				me._drawTitle.apply(me, arguments);
			}
		}, {
			z: tz,
			draw: function() {
				me._drawLabels.apply(me, arguments);
			}
		}];
	},

	/**
	 * @private
	 */
	_getMatchingVisibleMetas: function(type) {
		var me = this;
		var isHorizontal = me.isHorizontal();
		return me.chart._getSortedVisibleDatasetMetas()
			.filter(function(meta) {
				return (!type || meta.type === type)
					&& (isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id);
			});
	}
});

Scale.prototype._draw = Scale.prototype.draw;

var core_scale = Scale;

var isNullOrUndef$1 = helpers$1.isNullOrUndef;

var defaultConfig = {
	position: 'bottom'
};

var scale_category = core_scale.extend({
	determineDataLimits: function() {
		var me = this;
		var labels = me._getLabels();
		var ticksOpts = me.options.ticks;
		var min = ticksOpts.min;
		var max = ticksOpts.max;
		var minIndex = 0;
		var maxIndex = labels.length - 1;
		var findIndex;

		if (min !== undefined) {
			// user specified min value
			findIndex = labels.indexOf(min);
			if (findIndex >= 0) {
				minIndex = findIndex;
			}
		}

		if (max !== undefined) {
			// user specified max value
			findIndex = labels.indexOf(max);
			if (findIndex >= 0) {
				maxIndex = findIndex;
			}
		}

		me.minIndex = minIndex;
		me.maxIndex = maxIndex;
		me.min = labels[minIndex];
		me.max = labels[maxIndex];
	},

	buildTicks: function() {
		var me = this;
		var labels = me._getLabels();
		var minIndex = me.minIndex;
		var maxIndex = me.maxIndex;

		// If we are viewing some subset of labels, slice the original array
		me.ticks = (minIndex === 0 && maxIndex === labels.length - 1) ? labels : labels.slice(minIndex, maxIndex + 1);
	},

	getLabelForIndex: function(index, datasetIndex) {
		var me = this;
		var chart = me.chart;

		if (chart.getDatasetMeta(datasetIndex).controller._getValueScaleId() === me.id) {
			return me.getRightValue(chart.data.datasets[datasetIndex].data[index]);
		}

		return me._getLabels()[index];
	},

	_configure: function() {
		var me = this;
		var offset = me.options.offset;
		var ticks = me.ticks;

		core_scale.prototype._configure.call(me);

		if (!me.isHorizontal()) {
			// For backward compatibility, vertical category scale reverse is inverted.
			me._reversePixels = !me._reversePixels;
		}

		if (!ticks) {
			return;
		}

		me._startValue = me.minIndex - (offset ? 0.5 : 0);
		me._valueRange = Math.max(ticks.length - (offset ? 0 : 1), 1);
	},

	// Used to get data value locations.  Value can either be an index or a numerical value
	getPixelForValue: function(value, index, datasetIndex) {
		var me = this;
		var valueCategory, labels, idx;

		if (!isNullOrUndef$1(index) && !isNullOrUndef$1(datasetIndex)) {
			value = me.chart.data.datasets[datasetIndex].data[index];
		}

		// If value is a data object, then index is the index in the data array,
		// not the index of the scale. We need to change that.
		if (!isNullOrUndef$1(value)) {
			valueCategory = me.isHorizontal() ? value.x : value.y;
		}
		if (valueCategory !== undefined || (value !== undefined && isNaN(index))) {
			labels = me._getLabels();
			value = helpers$1.valueOrDefault(valueCategory, value);
			idx = labels.indexOf(value);
			index = idx !== -1 ? idx : index;
			if (isNaN(index)) {
				index = value;
			}
		}
		return me.getPixelForDecimal((index - me._startValue) / me._valueRange);
	},

	getPixelForTick: function(index) {
		var ticks = this.ticks;
		return index < 0 || index > ticks.length - 1
			? null
			: this.getPixelForValue(ticks[index], index + this.minIndex);
	},

	getValueForPixel: function(pixel) {
		var me = this;
		var value = Math.round(me._startValue + me.getDecimalForPixel(pixel) * me._valueRange);
		return Math.min(Math.max(value, 0), me.ticks.length - 1);
	},

	getBasePixel: function() {
		return this.bottom;
	}
});

// INTERNAL: static default options, registered in src/index.js
var _defaults = defaultConfig;
scale_category._defaults = _defaults;

var noop = helpers$1.noop;
var isNullOrUndef$2 = helpers$1.isNullOrUndef;

/**
 * Generate a set of linear ticks
 * @param generationOptions the options used to generate the ticks
 * @param dataRange the range of the data
 * @returns {number[]} array of tick values
 */
function generateTicks(generationOptions, dataRange) {
	var ticks = [];
	// To get a "nice" value for the tick spacing, we will use the appropriately named
	// "nice number" algorithm. See https://stackoverflow.com/questions/8506881/nice-label-algorithm-for-charts-with-minimum-ticks
	// for details.

	var MIN_SPACING = 1e-14;
	var stepSize = generationOptions.stepSize;
	var unit = stepSize || 1;
	var maxNumSpaces = generationOptions.maxTicks - 1;
	var min = generationOptions.min;
	var max = generationOptions.max;
	var precision = generationOptions.precision;
	var rmin = dataRange.min;
	var rmax = dataRange.max;
	var spacing = helpers$1.niceNum((rmax - rmin) / maxNumSpaces / unit) * unit;
	var factor, niceMin, niceMax, numSpaces;

	// Beyond MIN_SPACING floating point numbers being to lose precision
	// such that we can't do the math necessary to generate ticks
	if (spacing < MIN_SPACING && isNullOrUndef$2(min) && isNullOrUndef$2(max)) {
		return [rmin, rmax];
	}

	numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);
	if (numSpaces > maxNumSpaces) {
		// If the calculated num of spaces exceeds maxNumSpaces, recalculate it
		spacing = helpers$1.niceNum(numSpaces * spacing / maxNumSpaces / unit) * unit;
	}

	if (stepSize || isNullOrUndef$2(precision)) {
		// If a precision is not specified, calculate factor based on spacing
		factor = Math.pow(10, helpers$1._decimalPlaces(spacing));
	} else {
		// If the user specified a precision, round to that number of decimal places
		factor = Math.pow(10, precision);
		spacing = Math.ceil(spacing * factor) / factor;
	}

	niceMin = Math.floor(rmin / spacing) * spacing;
	niceMax = Math.ceil(rmax / spacing) * spacing;

	// If min, max and stepSize is set and they make an evenly spaced scale use it.
	if (stepSize) {
		// If very close to our whole number, use it.
		if (!isNullOrUndef$2(min) && helpers$1.almostWhole(min / spacing, spacing / 1000)) {
			niceMin = min;
		}
		if (!isNullOrUndef$2(max) && helpers$1.almostWhole(max / spacing, spacing / 1000)) {
			niceMax = max;
		}
	}

	numSpaces = (niceMax - niceMin) / spacing;
	// If very close to our rounded value, use it.
	if (helpers$1.almostEquals(numSpaces, Math.round(numSpaces), spacing / 1000)) {
		numSpaces = Math.round(numSpaces);
	} else {
		numSpaces = Math.ceil(numSpaces);
	}

	niceMin = Math.round(niceMin * factor) / factor;
	niceMax = Math.round(niceMax * factor) / factor;
	ticks.push(isNullOrUndef$2(min) ? niceMin : min);
	for (var j = 1; j < numSpaces; ++j) {
		ticks.push(Math.round((niceMin + j * spacing) * factor) / factor);
	}
	ticks.push(isNullOrUndef$2(max) ? niceMax : max);

	return ticks;
}

var scale_linearbase = core_scale.extend({
	getRightValue: function(value) {
		if (typeof value === 'string') {
			return +value;
		}
		return core_scale.prototype.getRightValue.call(this, value);
	},

	handleTickRangeOptions: function() {
		var me = this;
		var opts = me.options;
		var tickOpts = opts.ticks;

		// If we are forcing it to begin at 0, but 0 will already be rendered on the chart,
		// do nothing since that would make the chart weird. If the user really wants a weird chart
		// axis, they can manually override it
		if (tickOpts.beginAtZero) {
			var minSign = helpers$1.sign(me.min);
			var maxSign = helpers$1.sign(me.max);

			if (minSign < 0 && maxSign < 0) {
				// move the top up to 0
				me.max = 0;
			} else if (minSign > 0 && maxSign > 0) {
				// move the bottom down to 0
				me.min = 0;
			}
		}

		var setMin = tickOpts.min !== undefined || tickOpts.suggestedMin !== undefined;
		var setMax = tickOpts.max !== undefined || tickOpts.suggestedMax !== undefined;

		if (tickOpts.min !== undefined) {
			me.min = tickOpts.min;
		} else if (tickOpts.suggestedMin !== undefined) {
			if (me.min === null) {
				me.min = tickOpts.suggestedMin;
			} else {
				me.min = Math.min(me.min, tickOpts.suggestedMin);
			}
		}

		if (tickOpts.max !== undefined) {
			me.max = tickOpts.max;
		} else if (tickOpts.suggestedMax !== undefined) {
			if (me.max === null) {
				me.max = tickOpts.suggestedMax;
			} else {
				me.max = Math.max(me.max, tickOpts.suggestedMax);
			}
		}

		if (setMin !== setMax) {
			// We set the min or the max but not both.
			// So ensure that our range is good
			// Inverted or 0 length range can happen when
			// ticks.min is set, and no datasets are visible
			if (me.min >= me.max) {
				if (setMin) {
					me.max = me.min + 1;
				} else {
					me.min = me.max - 1;
				}
			}
		}

		if (me.min === me.max) {
			me.max++;

			if (!tickOpts.beginAtZero) {
				me.min--;
			}
		}
	},

	getTickLimit: function() {
		var me = this;
		var tickOpts = me.options.ticks;
		var stepSize = tickOpts.stepSize;
		var maxTicksLimit = tickOpts.maxTicksLimit;
		var maxTicks;

		if (stepSize) {
			maxTicks = Math.ceil(me.max / stepSize) - Math.floor(me.min / stepSize) + 1;
		} else {
			maxTicks = me._computeTickLimit();
			maxTicksLimit = maxTicksLimit || 11;
		}

		if (maxTicksLimit) {
			maxTicks = Math.min(maxTicksLimit, maxTicks);
		}

		return maxTicks;
	},

	_computeTickLimit: function() {
		return Number.POSITIVE_INFINITY;
	},

	handleDirectionalChanges: noop,

	buildTicks: function() {
		var me = this;
		var opts = me.options;
		var tickOpts = opts.ticks;

		// Figure out what the max number of ticks we can support it is based on the size of
		// the axis area. For now, we say that the minimum tick spacing in pixels must be 40
		// We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
		// the graph. Make sure we always have at least 2 ticks
		var maxTicks = me.getTickLimit();
		maxTicks = Math.max(2, maxTicks);

		var numericGeneratorOptions = {
			maxTicks: maxTicks,
			min: tickOpts.min,
			max: tickOpts.max,
			precision: tickOpts.precision,
			stepSize: helpers$1.valueOrDefault(tickOpts.fixedStepSize, tickOpts.stepSize)
		};
		var ticks = me.ticks = generateTicks(numericGeneratorOptions, me);

		me.handleDirectionalChanges();

		// At this point, we need to update our max and min given the tick values since we have expanded the
		// range of the scale
		me.max = helpers$1.max(ticks);
		me.min = helpers$1.min(ticks);

		if (tickOpts.reverse) {
			ticks.reverse();

			me.start = me.max;
			me.end = me.min;
		} else {
			me.start = me.min;
			me.end = me.max;
		}
	},

	convertTicksToLabels: function() {
		var me = this;
		me.ticksAsNumbers = me.ticks.slice();
		me.zeroLineIndex = me.ticks.indexOf(0);

		core_scale.prototype.convertTicksToLabels.call(me);
	},

	_configure: function() {
		var me = this;
		var ticks = me.getTicks();
		var start = me.min;
		var end = me.max;
		var offset;

		core_scale.prototype._configure.call(me);

		if (me.options.offset && ticks.length) {
			offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;
			start -= offset;
			end += offset;
		}
		me._startValue = start;
		me._endValue = end;
		me._valueRange = end - start;
	}
});

var defaultConfig$1 = {
	position: 'left',
	ticks: {
		callback: core_ticks.formatters.linear
	}
};

var DEFAULT_MIN = 0;
var DEFAULT_MAX = 1;

function getOrCreateStack(stacks, stacked, meta) {
	var key = [
		meta.type,
		// we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
		stacked === undefined && meta.stack === undefined ? meta.index : '',
		meta.stack
	].join('.');

	if (stacks[key] === undefined) {
		stacks[key] = {
			pos: [],
			neg: []
		};
	}

	return stacks[key];
}

function stackData(scale, stacks, meta, data) {
	var opts = scale.options;
	var stacked = opts.stacked;
	var stack = getOrCreateStack(stacks, stacked, meta);
	var pos = stack.pos;
	var neg = stack.neg;
	var ilen = data.length;
	var i, value;

	for (i = 0; i < ilen; ++i) {
		value = scale._parseValue(data[i]);
		if (isNaN(value.min) || isNaN(value.max) || meta.data[i].hidden) {
			continue;
		}

		pos[i] = pos[i] || 0;
		neg[i] = neg[i] || 0;

		if (opts.relativePoints) {
			pos[i] = 100;
		} else if (value.min < 0 || value.max < 0) {
			neg[i] += value.min;
		} else {
			pos[i] += value.max;
		}
	}
}

function updateMinMax(scale, meta, data) {
	var ilen = data.length;
	var i, value;

	for (i = 0; i < ilen; ++i) {
		value = scale._parseValue(data[i]);
		if (isNaN(value.min) || isNaN(value.max) || meta.data[i].hidden) {
			continue;
		}

		scale.min = Math.min(scale.min, value.min);
		scale.max = Math.max(scale.max, value.max);
	}
}

var scale_linear = scale_linearbase.extend({
	determineDataLimits: function() {
		var me = this;
		var opts = me.options;
		var chart = me.chart;
		var datasets = chart.data.datasets;
		var metasets = me._getMatchingVisibleMetas();
		var hasStacks = opts.stacked;
		var stacks = {};
		var ilen = metasets.length;
		var i, meta, data, values;

		me.min = Number.POSITIVE_INFINITY;
		me.max = Number.NEGATIVE_INFINITY;

		if (hasStacks === undefined) {
			for (i = 0; !hasStacks && i < ilen; ++i) {
				meta = metasets[i];
				hasStacks = meta.stack !== undefined;
			}
		}

		for (i = 0; i < ilen; ++i) {
			meta = metasets[i];
			data = datasets[meta.index].data;
			if (hasStacks) {
				stackData(me, stacks, meta, data);
			} else {
				updateMinMax(me, meta, data);
			}
		}

		helpers$1.each(stacks, function(stackValues) {
			values = stackValues.pos.concat(stackValues.neg);
			me.min = Math.min(me.min, helpers$1.min(values));
			me.max = Math.max(me.max, helpers$1.max(values));
		});

		me.min = helpers$1.isFinite(me.min) && !isNaN(me.min) ? me.min : DEFAULT_MIN;
		me.max = helpers$1.isFinite(me.max) && !isNaN(me.max) ? me.max : DEFAULT_MAX;

		// Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
		me.handleTickRangeOptions();
	},

	// Returns the maximum number of ticks based on the scale dimension
	_computeTickLimit: function() {
		var me = this;
		var tickFont;

		if (me.isHorizontal()) {
			return Math.ceil(me.width / 40);
		}
		tickFont = helpers$1.options._parseFont(me.options.ticks);
		return Math.ceil(me.height / tickFont.lineHeight);
	},

	// Called after the ticks are built. We need
	handleDirectionalChanges: function() {
		if (!this.isHorizontal()) {
			// We are in a vertical orientation. The top value is the highest. So reverse the array
			this.ticks.reverse();
		}
	},

	getLabelForIndex: function(index, datasetIndex) {
		return this._getScaleLabel(this.chart.data.datasets[datasetIndex].data[index]);
	},

	// Utils
	getPixelForValue: function(value) {
		var me = this;
		return me.getPixelForDecimal((+me.getRightValue(value) - me._startValue) / me._valueRange);
	},

	getValueForPixel: function(pixel) {
		return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
	},

	getPixelForTick: function(index) {
		var ticks = this.ticksAsNumbers;
		if (index < 0 || index > ticks.length - 1) {
			return null;
		}
		return this.getPixelForValue(ticks[index]);
	}
});

// INTERNAL: static default options, registered in src/index.js
var _defaults$1 = defaultConfig$1;
scale_linear._defaults = _defaults$1;

var valueOrDefault$b = helpers$1.valueOrDefault;
var log10 = helpers$1.math.log10;

/**
 * Generate a set of logarithmic ticks
 * @param generationOptions the options used to generate the ticks
 * @param dataRange the range of the data
 * @returns {number[]} array of tick values
 */
function generateTicks$1(generationOptions, dataRange) {
	var ticks = [];

	var tickVal = valueOrDefault$b(generationOptions.min, Math.pow(10, Math.floor(log10(dataRange.min))));

	var endExp = Math.floor(log10(dataRange.max));
	var endSignificand = Math.ceil(dataRange.max / Math.pow(10, endExp));
	var exp, significand;

	if (tickVal === 0) {
		exp = Math.floor(log10(dataRange.minNotZero));
		significand = Math.floor(dataRange.minNotZero / Math.pow(10, exp));

		ticks.push(tickVal);
		tickVal = significand * Math.pow(10, exp);
	} else {
		exp = Math.floor(log10(tickVal));
		significand = Math.floor(tickVal / Math.pow(10, exp));
	}
	var precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;

	do {
		ticks.push(tickVal);

		++significand;
		if (significand === 10) {
			significand = 1;
			++exp;
			precision = exp >= 0 ? 1 : precision;
		}

		tickVal = Math.round(significand * Math.pow(10, exp) * precision) / precision;
	} while (exp < endExp || (exp === endExp && significand < endSignificand));

	var lastTick = valueOrDefault$b(generationOptions.max, tickVal);
	ticks.push(lastTick);

	return ticks;
}

var defaultConfig$2 = {
	position: 'left',

	// label settings
	ticks: {
		callback: core_ticks.formatters.logarithmic
	}
};

// TODO(v3): change this to positiveOrDefault
function nonNegativeOrDefault(value, defaultValue) {
	return helpers$1.isFinite(value) && value >= 0 ? value : defaultValue;
}

var scale_logarithmic = core_scale.extend({
	determineDataLimits: function() {
		var me = this;
		var opts = me.options;
		var chart = me.chart;
		var datasets = chart.data.datasets;
		var isHorizontal = me.isHorizontal();
		function IDMatches(meta) {
			return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;
		}
		var datasetIndex, meta, value, data, i, ilen;

		// Calculate Range
		me.min = Number.POSITIVE_INFINITY;
		me.max = Number.NEGATIVE_INFINITY;
		me.minNotZero = Number.POSITIVE_INFINITY;

		var hasStacks = opts.stacked;
		if (hasStacks === undefined) {
			for (datasetIndex = 0; datasetIndex < datasets.length; datasetIndex++) {
				meta = chart.getDatasetMeta(datasetIndex);
				if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta) &&
					meta.stack !== undefined) {
					hasStacks = true;
					break;
				}
			}
		}

		if (opts.stacked || hasStacks) {
			var valuesPerStack = {};

			for (datasetIndex = 0; datasetIndex < datasets.length; datasetIndex++) {
				meta = chart.getDatasetMeta(datasetIndex);
				var key = [
					meta.type,
					// we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
					((opts.stacked === undefined && meta.stack === undefined) ? datasetIndex : ''),
					meta.stack
				].join('.');

				if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
					if (valuesPerStack[key] === undefined) {
						valuesPerStack[key] = [];
					}

					data = datasets[datasetIndex].data;
					for (i = 0, ilen = data.length; i < ilen; i++) {
						var values = valuesPerStack[key];
						value = me._parseValue(data[i]);
						// invalid, hidden and negative values are ignored
						if (isNaN(value.min) || isNaN(value.max) || meta.data[i].hidden || value.min < 0 || value.max < 0) {
							continue;
						}
						values[i] = values[i] || 0;
						values[i] += value.max;
					}
				}
			}

			helpers$1.each(valuesPerStack, function(valuesForType) {
				if (valuesForType.length > 0) {
					var minVal = helpers$1.min(valuesForType);
					var maxVal = helpers$1.max(valuesForType);
					me.min = Math.min(me.min, minVal);
					me.max = Math.max(me.max, maxVal);
				}
			});

		} else {
			for (datasetIndex = 0; datasetIndex < datasets.length; datasetIndex++) {
				meta = chart.getDatasetMeta(datasetIndex);
				if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
					data = datasets[datasetIndex].data;
					for (i = 0, ilen = data.length; i < ilen; i++) {
						value = me._parseValue(data[i]);
						// invalid, hidden and negative values are ignored
						if (isNaN(value.min) || isNaN(value.max) || meta.data[i].hidden || value.min < 0 || value.max < 0) {
							continue;
						}

						me.min = Math.min(value.min, me.min);
						me.max = Math.max(value.max, me.max);

						if (value.min !== 0) {
							me.minNotZero = Math.min(value.min, me.minNotZero);
						}
					}
				}
			}
		}

		me.min = helpers$1.isFinite(me.min) ? me.min : null;
		me.max = helpers$1.isFinite(me.max) ? me.max : null;
		me.minNotZero = helpers$1.isFinite(me.minNotZero) ? me.minNotZero : null;

		// Common base implementation to handle ticks.min, ticks.max
		this.handleTickRangeOptions();
	},

	handleTickRangeOptions: function() {
		var me = this;
		var tickOpts = me.options.ticks;
		var DEFAULT_MIN = 1;
		var DEFAULT_MAX = 10;

		me.min = nonNegativeOrDefault(tickOpts.min, me.min);
		me.max = nonNegativeOrDefault(tickOpts.max, me.max);

		if (me.min === me.max) {
			if (me.min !== 0 && me.min !== null) {
				me.min = Math.pow(10, Math.floor(log10(me.min)) - 1);
				me.max = Math.pow(10, Math.floor(log10(me.max)) + 1);
			} else {
				me.min = DEFAULT_MIN;
				me.max = DEFAULT_MAX;
			}
		}
		if (me.min === null) {
			me.min = Math.pow(10, Math.floor(log10(me.max)) - 1);
		}
		if (me.max === null) {
			me.max = me.min !== 0
				? Math.pow(10, Math.floor(log10(me.min)) + 1)
				: DEFAULT_MAX;
		}
		if (me.minNotZero === null) {
			if (me.min > 0) {
				me.minNotZero = me.min;
			} else if (me.max < 1) {
				me.minNotZero = Math.pow(10, Math.floor(log10(me.max)));
			} else {
				me.minNotZero = DEFAULT_MIN;
			}
		}
	},

	buildTicks: function() {
		var me = this;
		var tickOpts = me.options.ticks;
		var reverse = !me.isHorizontal();

		var generationOptions = {
			min: nonNegativeOrDefault(tickOpts.min),
			max: nonNegativeOrDefault(tickOpts.max)
		};
		var ticks = me.ticks = generateTicks$1(generationOptions, me);

		// At this point, we need to update our max and min given the tick values since we have expanded the
		// range of the scale
		me.max = helpers$1.max(ticks);
		me.min = helpers$1.min(ticks);

		if (tickOpts.reverse) {
			reverse = !reverse;
			me.start = me.max;
			me.end = me.min;
		} else {
			me.start = me.min;
			me.end = me.max;
		}
		if (reverse) {
			ticks.reverse();
		}
	},

	convertTicksToLabels: function() {
		this.tickValues = this.ticks.slice();

		core_scale.prototype.convertTicksToLabels.call(this);
	},

	// Get the correct tooltip label
	getLabelForIndex: function(index, datasetIndex) {
		return this._getScaleLabel(this.chart.data.datasets[datasetIndex].data[index]);
	},

	getPixelForTick: function(index) {
		var ticks = this.tickValues;
		if (index < 0 || index > ticks.length - 1) {
			return null;
		}
		return this.getPixelForValue(ticks[index]);
	},

	/**
	 * Returns the value of the first tick.
	 * @param {number} value - The minimum not zero value.
	 * @return {number} The first tick value.
	 * @private
	 */
	_getFirstTickValue: function(value) {
		var exp = Math.floor(log10(value));
		var significand = Math.floor(value / Math.pow(10, exp));

		return significand * Math.pow(10, exp);
	},

	_configure: function() {
		var me = this;
		var start = me.min;
		var offset = 0;

		core_scale.prototype._configure.call(me);

		if (start === 0) {
			start = me._getFirstTickValue(me.minNotZero);
			offset = valueOrDefault$b(me.options.ticks.fontSize, core_defaults.global.defaultFontSize) / me._length;
		}

		me._startValue = log10(start);
		me._valueOffset = offset;
		me._valueRange = (log10(me.max) - log10(start)) / (1 - offset);
	},

	getPixelForValue: function(value) {
		var me = this;
		var decimal = 0;

		value = +me.getRightValue(value);

		if (value > me.min && value > 0) {
			decimal = (log10(value) - me._startValue) / me._valueRange + me._valueOffset;
		}
		return me.getPixelForDecimal(decimal);
	},

	getValueForPixel: function(pixel) {
		var me = this;
		var decimal = me.getDecimalForPixel(pixel);
		return decimal === 0 && me.min === 0
			? 0
			: Math.pow(10, me._startValue + (decimal - me._valueOffset) * me._valueRange);
	}
});

// INTERNAL: static default options, registered in src/index.js
var _defaults$2 = defaultConfig$2;
scale_logarithmic._defaults = _defaults$2;

var valueOrDefault$c = helpers$1.valueOrDefault;
var valueAtIndexOrDefault$1 = helpers$1.valueAtIndexOrDefault;
var resolve$4 = helpers$1.options.resolve;

var defaultConfig$3 = {
	display: true,

	// Boolean - Whether to animate scaling the chart from the centre
	animate: true,
	position: 'chartArea',

	angleLines: {
		display: true,
		color: 'rgba(0,0,0,0.1)',
		lineWidth: 1,
		borderDash: [],
		borderDashOffset: 0.0
	},

	gridLines: {
		circular: false
	},

	// label settings
	ticks: {
		// Boolean - Show a backdrop to the scale label
		showLabelBackdrop: true,

		// String - The colour of the label backdrop
		backdropColor: 'rgba(255,255,255,0.75)',

		// Number - The backdrop padding above & below the label in pixels
		backdropPaddingY: 2,

		// Number - The backdrop padding to the side of the label in pixels
		backdropPaddingX: 2,

		callback: core_ticks.formatters.linear
	},

	pointLabels: {
		// Boolean - if true, show point labels
		display: true,

		// Number - Point label font size in pixels
		fontSize: 10,

		// Function - Used to convert point labels
		callback: function(label) {
			return label;
		}
	}
};

function getTickBackdropHeight(opts) {
	var tickOpts = opts.ticks;

	if (tickOpts.display && opts.display) {
		return valueOrDefault$c(tickOpts.fontSize, core_defaults.global.defaultFontSize) + tickOpts.backdropPaddingY * 2;
	}
	return 0;
}

function measureLabelSize(ctx, lineHeight, label) {
	if (helpers$1.isArray(label)) {
		return {
			w: helpers$1.longestText(ctx, ctx.font, label),
			h: label.length * lineHeight
		};
	}

	return {
		w: ctx.measureText(label).width,
		h: lineHeight
	};
}

function determineLimits(angle, pos, size, min, max) {
	if (angle === min || angle === max) {
		return {
			start: pos - (size / 2),
			end: pos + (size / 2)
		};
	} else if (angle < min || angle > max) {
		return {
			start: pos - size,
			end: pos
		};
	}

	return {
		start: pos,
		end: pos + size
	};
}

/**
 * Helper function to fit a radial linear scale with point labels
 */
function fitWithPointLabels(scale) {

	// Right, this is really confusing and there is a lot of maths going on here
	// The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
	//
	// Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
	//
	// Solution:
	//
	// We assume the radius of the polygon is half the size of the canvas at first
	// at each index we check if the text overlaps.
	//
	// Where it does, we store that angle and that index.
	//
	// After finding the largest index and angle we calculate how much we need to remove
	// from the shape radius to move the point inwards by that x.
	//
	// We average the left and right distances to get the maximum shape radius that can fit in the box
	// along with labels.
	//
	// Once we have that, we can find the centre point for the chart, by taking the x text protrusion
	// on each side, removing that from the size, halving it and adding the left x protrusion width.
	//
	// This will mean we have a shape fitted to the canvas, as large as it can be with the labels
	// and position it in the most space efficient manner
	//
	// https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif

	var plFont = helpers$1.options._parseFont(scale.options.pointLabels);

	// Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
	// Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
	var furthestLimits = {
		l: 0,
		r: scale.width,
		t: 0,
		b: scale.height - scale.paddingTop
	};
	var furthestAngles = {};
	var i, textSize, pointPosition;

	scale.ctx.font = plFont.string;
	scale._pointLabelSizes = [];

	var valueCount = scale.chart.data.labels.length;
	for (i = 0; i < valueCount; i++) {
		pointPosition = scale.getPointPosition(i, scale.drawingArea + 5);
		textSize = measureLabelSize(scale.ctx, plFont.lineHeight, scale.pointLabels[i]);
		scale._pointLabelSizes[i] = textSize;

		// Add quarter circle to make degree 0 mean top of circle
		var angleRadians = scale.getIndexAngle(i);
		var angle = helpers$1.toDegrees(angleRadians) % 360;
		var hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
		var vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);

		if (hLimits.start < furthestLimits.l) {
			furthestLimits.l = hLimits.start;
			furthestAngles.l = angleRadians;
		}

		if (hLimits.end > furthestLimits.r) {
			furthestLimits.r = hLimits.end;
			furthestAngles.r = angleRadians;
		}

		if (vLimits.start < furthestLimits.t) {
			furthestLimits.t = vLimits.start;
			furthestAngles.t = angleRadians;
		}

		if (vLimits.end > furthestLimits.b) {
			furthestLimits.b = vLimits.end;
			furthestAngles.b = angleRadians;
		}
	}

	scale.setReductions(scale.drawingArea, furthestLimits, furthestAngles);
}

function getTextAlignForAngle(angle) {
	if (angle === 0 || angle === 180) {
		return 'center';
	} else if (angle < 180) {
		return 'left';
	}

	return 'right';
}

function fillText(ctx, text, position, lineHeight) {
	var y = position.y + lineHeight / 2;
	var i, ilen;

	if (helpers$1.isArray(text)) {
		for (i = 0, ilen = text.length; i < ilen; ++i) {
			ctx.fillText(text[i], position.x, y);
			y += lineHeight;
		}
	} else {
		ctx.fillText(text, position.x, y);
	}
}

function adjustPointPositionForLabelHeight(angle, textSize, position) {
	if (angle === 90 || angle === 270) {
		position.y -= (textSize.h / 2);
	} else if (angle > 270 || angle < 90) {
		position.y -= textSize.h;
	}
}

function drawPointLabels(scale) {
	var ctx = scale.ctx;
	var opts = scale.options;
	var pointLabelOpts = opts.pointLabels;
	var tickBackdropHeight = getTickBackdropHeight(opts);
	var outerDistance = scale.getDistanceFromCenterForValue(opts.ticks.reverse ? scale.min : scale.max);
	var plFont = helpers$1.options._parseFont(pointLabelOpts);

	ctx.save();

	ctx.font = plFont.string;
	ctx.textBaseline = 'middle';

	for (var i = scale.chart.data.labels.length - 1; i >= 0; i--) {
		// Extra pixels out for some label spacing
		var extra = (i === 0 ? tickBackdropHeight / 2 : 0);
		var pointLabelPosition = scale.getPointPosition(i, outerDistance + extra + 5);

		// Keep this in loop since we may support array properties here
		var pointLabelFontColor = valueAtIndexOrDefault$1(pointLabelOpts.fontColor, i, core_defaults.global.defaultFontColor);
		ctx.fillStyle = pointLabelFontColor;

		var angleRadians = scale.getIndexAngle(i);
		var angle = helpers$1.toDegrees(angleRadians);
		ctx.textAlign = getTextAlignForAngle(angle);
		adjustPointPositionForLabelHeight(angle, scale._pointLabelSizes[i], pointLabelPosition);
		fillText(ctx, scale.pointLabels[i], pointLabelPosition, plFont.lineHeight);
	}
	ctx.restore();
}

function drawRadiusLine(scale, gridLineOpts, radius, index) {
	var ctx = scale.ctx;
	var circular = gridLineOpts.circular;
	var valueCount = scale.chart.data.labels.length;
	var lineColor = valueAtIndexOrDefault$1(gridLineOpts.color, index - 1);
	var lineWidth = valueAtIndexOrDefault$1(gridLineOpts.lineWidth, index - 1);
	var pointPosition;

	if ((!circular && !valueCount) || !lineColor || !lineWidth) {
		return;
	}

	ctx.save();
	ctx.strokeStyle = lineColor;
	ctx.lineWidth = lineWidth;
	if (ctx.setLineDash) {
		ctx.setLineDash(gridLineOpts.borderDash || []);
		ctx.lineDashOffset = gridLineOpts.borderDashOffset || 0.0;
	}

	ctx.beginPath();
	if (circular) {
		// Draw circular arcs between the points
		ctx.arc(scale.xCenter, scale.yCenter, radius, 0, Math.PI * 2);
	} else {
		// Draw straight lines connecting each index
		pointPosition = scale.getPointPosition(0, radius);
		ctx.moveTo(pointPosition.x, pointPosition.y);

		for (var i = 1; i < valueCount; i++) {
			pointPosition = scale.getPointPosition(i, radius);
			ctx.lineTo(pointPosition.x, pointPosition.y);
		}
	}
	ctx.closePath();
	ctx.stroke();
	ctx.restore();
}

function numberOrZero(param) {
	return helpers$1.isNumber(param) ? param : 0;
}

var scale_radialLinear = scale_linearbase.extend({
	setDimensions: function() {
		var me = this;

		// Set the unconstrained dimension before label rotation
		me.width = me.maxWidth;
		me.height = me.maxHeight;
		me.paddingTop = getTickBackdropHeight(me.options) / 2;
		me.xCenter = Math.floor(me.width / 2);
		me.yCenter = Math.floor((me.height - me.paddingTop) / 2);
		me.drawingArea = Math.min(me.height - me.paddingTop, me.width) / 2;
	},

	determineDataLimits: function() {
		var me = this;
		var chart = me.chart;
		var min = Number.POSITIVE_INFINITY;
		var max = Number.NEGATIVE_INFINITY;

		helpers$1.each(chart.data.datasets, function(dataset, datasetIndex) {
			if (chart.isDatasetVisible(datasetIndex)) {
				var meta = chart.getDatasetMeta(datasetIndex);

				helpers$1.each(dataset.data, function(rawValue, index) {
					var value = +me.getRightValue(rawValue);
					if (isNaN(value) || meta.data[index].hidden) {
						return;
					}

					min = Math.min(value, min);
					max = Math.max(value, max);
				});
			}
		});

		me.min = (min === Number.POSITIVE_INFINITY ? 0 : min);
		me.max = (max === Number.NEGATIVE_INFINITY ? 0 : max);

		// Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
		me.handleTickRangeOptions();
	},

	// Returns the maximum number of ticks based on the scale dimension
	_computeTickLimit: function() {
		return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
	},

	convertTicksToLabels: function() {
		var me = this;

		scale_linearbase.prototype.convertTicksToLabels.call(me);

		// Point labels
		me.pointLabels = me.chart.data.labels.map(function() {
			var label = helpers$1.callback(me.options.pointLabels.callback, arguments, me);
			return label || label === 0 ? label : '';
		});
	},

	getLabelForIndex: function(index, datasetIndex) {
		return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
	},

	fit: function() {
		var me = this;
		var opts = me.options;

		if (opts.display && opts.pointLabels.display) {
			fitWithPointLabels(me);
		} else {
			me.setCenterPoint(0, 0, 0, 0);
		}
	},

	/**
	 * Set radius reductions and determine new radius and center point
	 * @private
	 */
	setReductions: function(largestPossibleRadius, furthestLimits, furthestAngles) {
		var me = this;
		var radiusReductionLeft = furthestLimits.l / Math.sin(furthestAngles.l);
		var radiusReductionRight = Math.max(furthestLimits.r - me.width, 0) / Math.sin(furthestAngles.r);
		var radiusReductionTop = -furthestLimits.t / Math.cos(furthestAngles.t);
		var radiusReductionBottom = -Math.max(furthestLimits.b - (me.height - me.paddingTop), 0) / Math.cos(furthestAngles.b);

		radiusReductionLeft = numberOrZero(radiusReductionLeft);
		radiusReductionRight = numberOrZero(radiusReductionRight);
		radiusReductionTop = numberOrZero(radiusReductionTop);
		radiusReductionBottom = numberOrZero(radiusReductionBottom);

		me.drawingArea = Math.min(
			Math.floor(largestPossibleRadius - (radiusReductionLeft + radiusReductionRight) / 2),
			Math.floor(largestPossibleRadius - (radiusReductionTop + radiusReductionBottom) / 2));
		me.setCenterPoint(radiusReductionLeft, radiusReductionRight, radiusReductionTop, radiusReductionBottom);
	},

	setCenterPoint: function(leftMovement, rightMovement, topMovement, bottomMovement) {
		var me = this;
		var maxRight = me.width - rightMovement - me.drawingArea;
		var maxLeft = leftMovement + me.drawingArea;
		var maxTop = topMovement + me.drawingArea;
		var maxBottom = (me.height - me.paddingTop) - bottomMovement - me.drawingArea;

		me.xCenter = Math.floor(((maxLeft + maxRight) / 2) + me.left);
		me.yCenter = Math.floor(((maxTop + maxBottom) / 2) + me.top + me.paddingTop);
	},

	getIndexAngle: function(index) {
		var chart = this.chart;
		var angleMultiplier = 360 / chart.data.labels.length;
		var options = chart.options || {};
		var startAngle = options.startAngle || 0;

		// Start from the top instead of right, so remove a quarter of the circle
		var angle = (index * angleMultiplier + startAngle) % 360;

		return (angle < 0 ? angle + 360 : angle) * Math.PI * 2 / 360;
	},

	getDistanceFromCenterForValue: function(value) {
		var me = this;

		if (helpers$1.isNullOrUndef(value)) {
			return NaN;
		}

		// Take into account half font size + the yPadding of the top value
		var scalingFactor = me.drawingArea / (me.max - me.min);
		if (me.options.ticks.reverse) {
			return (me.max - value) * scalingFactor;
		}
		return (value - me.min) * scalingFactor;
	},

	getPointPosition: function(index, distanceFromCenter) {
		var me = this;
		var thisAngle = me.getIndexAngle(index) - (Math.PI / 2);
		return {
			x: Math.cos(thisAngle) * distanceFromCenter + me.xCenter,
			y: Math.sin(thisAngle) * distanceFromCenter + me.yCenter
		};
	},

	getPointPositionForValue: function(index, value) {
		return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
	},

	getBasePosition: function(index) {
		var me = this;
		var min = me.min;
		var max = me.max;

		return me.getPointPositionForValue(index || 0,
			me.beginAtZero ? 0 :
			min < 0 && max < 0 ? max :
			min > 0 && max > 0 ? min :
			0);
	},

	/**
	 * @private
	 */
	_drawGrid: function() {
		var me = this;
		var ctx = me.ctx;
		var opts = me.options;
		var gridLineOpts = opts.gridLines;
		var angleLineOpts = opts.angleLines;
		var lineWidth = valueOrDefault$c(angleLineOpts.lineWidth, gridLineOpts.lineWidth);
		var lineColor = valueOrDefault$c(angleLineOpts.color, gridLineOpts.color);
		var i, offset, position;

		if (opts.pointLabels.display) {
			drawPointLabels(me);
		}

		if (gridLineOpts.display) {
			helpers$1.each(me.ticks, function(label, index) {
				if (index !== 0) {
					offset = me.getDistanceFromCenterForValue(me.ticksAsNumbers[index]);
					drawRadiusLine(me, gridLineOpts, offset, index);
				}
			});
		}

		if (angleLineOpts.display && lineWidth && lineColor) {
			ctx.save();
			ctx.lineWidth = lineWidth;
			ctx.strokeStyle = lineColor;
			if (ctx.setLineDash) {
				ctx.setLineDash(resolve$4([angleLineOpts.borderDash, gridLineOpts.borderDash, []]));
				ctx.lineDashOffset = resolve$4([angleLineOpts.borderDashOffset, gridLineOpts.borderDashOffset, 0.0]);
			}

			for (i = me.chart.data.labels.length - 1; i >= 0; i--) {
				offset = me.getDistanceFromCenterForValue(opts.ticks.reverse ? me.min : me.max);
				position = me.getPointPosition(i, offset);
				ctx.beginPath();
				ctx.moveTo(me.xCenter, me.yCenter);
				ctx.lineTo(position.x, position.y);
				ctx.stroke();
			}

			ctx.restore();
		}
	},

	/**
	 * @private
	 */
	_drawLabels: function() {
		var me = this;
		var ctx = me.ctx;
		var opts = me.options;
		var tickOpts = opts.ticks;

		if (!tickOpts.display) {
			return;
		}

		var startAngle = me.getIndexAngle(0);
		var tickFont = helpers$1.options._parseFont(tickOpts);
		var tickFontColor = valueOrDefault$c(tickOpts.fontColor, core_defaults.global.defaultFontColor);
		var offset, width;

		ctx.save();
		ctx.font = tickFont.string;
		ctx.translate(me.xCenter, me.yCenter);
		ctx.rotate(startAngle);
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';

		helpers$1.each(me.ticks, function(label, index) {
			if (index === 0 && !tickOpts.reverse) {
				return;
			}

			offset = me.getDistanceFromCenterForValue(me.ticksAsNumbers[index]);

			if (tickOpts.showLabelBackdrop) {
				width = ctx.measureText(label).width;
				ctx.fillStyle = tickOpts.backdropColor;

				ctx.fillRect(
					-width / 2 - tickOpts.backdropPaddingX,
					-offset - tickFont.size / 2 - tickOpts.backdropPaddingY,
					width + tickOpts.backdropPaddingX * 2,
					tickFont.size + tickOpts.backdropPaddingY * 2
				);
			}

			ctx.fillStyle = tickFontColor;
			ctx.fillText(label, 0, -offset);
		});

		ctx.restore();
	},

	/**
	 * @private
	 */
	_drawTitle: helpers$1.noop
});

// INTERNAL: static default options, registered in src/index.js
var _defaults$3 = defaultConfig$3;
scale_radialLinear._defaults = _defaults$3;

var deprecated$1 = helpers$1._deprecated;
var resolve$5 = helpers$1.options.resolve;
var valueOrDefault$d = helpers$1.valueOrDefault;

// Integer constants are from the ES6 spec.
var MIN_INTEGER = Number.MIN_SAFE_INTEGER || -9007199254740991;
var MAX_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;

var INTERVALS = {
	millisecond: {
		common: true,
		size: 1,
		steps: 1000
	},
	second: {
		common: true,
		size: 1000,
		steps: 60
	},
	minute: {
		common: true,
		size: 60000,
		steps: 60
	},
	hour: {
		common: true,
		size: 3600000,
		steps: 24
	},
	day: {
		common: true,
		size: 86400000,
		steps: 30
	},
	week: {
		common: false,
		size: 604800000,
		steps: 4
	},
	month: {
		common: true,
		size: 2.628e9,
		steps: 12
	},
	quarter: {
		common: false,
		size: 7.884e9,
		steps: 4
	},
	year: {
		common: true,
		size: 3.154e10
	}
};

var UNITS = Object.keys(INTERVALS);

function sorter(a, b) {
	return a - b;
}

function arrayUnique(items) {
	var hash = {};
	var out = [];
	var i, ilen, item;

	for (i = 0, ilen = items.length; i < ilen; ++i) {
		item = items[i];
		if (!hash[item]) {
			hash[item] = true;
			out.push(item);
		}
	}

	return out;
}

function getMin(options) {
	return helpers$1.valueOrDefault(options.time.min, options.ticks.min);
}

function getMax(options) {
	return helpers$1.valueOrDefault(options.time.max, options.ticks.max);
}

/**
 * Returns an array of {time, pos} objects used to interpolate a specific `time` or position
 * (`pos`) on the scale, by searching entries before and after the requested value. `pos` is
 * a decimal between 0 and 1: 0 being the start of the scale (left or top) and 1 the other
 * extremity (left + width or top + height). Note that it would be more optimized to directly
 * store pre-computed pixels, but the scale dimensions are not guaranteed at the time we need
 * to create the lookup table. The table ALWAYS contains at least two items: min and max.
 *
 * @param {number[]} timestamps - timestamps sorted from lowest to highest.
 * @param {string} distribution - If 'linear', timestamps will be spread linearly along the min
 * and max range, so basically, the table will contains only two items: {min, 0} and {max, 1}.
 * If 'series', timestamps will be positioned at the same distance from each other. In this
 * case, only timestamps that break the time linearity are registered, meaning that in the
 * best case, all timestamps are linear, the table contains only min and max.
 */
function buildLookupTable(timestamps, min, max, distribution) {
	if (distribution === 'linear' || !timestamps.length) {
		return [
			{time: min, pos: 0},
			{time: max, pos: 1}
		];
	}

	var table = [];
	var items = [min];
	var i, ilen, prev, curr, next;

	for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
		curr = timestamps[i];
		if (curr > min && curr < max) {
			items.push(curr);
		}
	}

	items.push(max);

	for (i = 0, ilen = items.length; i < ilen; ++i) {
		next = items[i + 1];
		prev = items[i - 1];
		curr = items[i];

		// only add points that breaks the scale linearity
		if (prev === undefined || next === undefined || Math.round((next + prev) / 2) !== curr) {
			table.push({time: curr, pos: i / (ilen - 1)});
		}
	}

	return table;
}

// @see adapted from https://www.anujgakhar.com/2014/03/01/binary-search-in-javascript/
function lookup(table, key, value) {
	var lo = 0;
	var hi = table.length - 1;
	var mid, i0, i1;

	while (lo >= 0 && lo <= hi) {
		mid = (lo + hi) >> 1;
		i0 = table[mid - 1] || null;
		i1 = table[mid];

		if (!i0) {
			// given value is outside table (before first item)
			return {lo: null, hi: i1};
		} else if (i1[key] < value) {
			lo = mid + 1;
		} else if (i0[key] > value) {
			hi = mid - 1;
		} else {
			return {lo: i0, hi: i1};
		}
	}

	// given value is outside table (after last item)
	return {lo: i1, hi: null};
}

/**
 * Linearly interpolates the given source `value` using the table items `skey` values and
 * returns the associated `tkey` value. For example, interpolate(table, 'time', 42, 'pos')
 * returns the position for a timestamp equal to 42. If value is out of bounds, values at
 * index [0, 1] or [n - 1, n] are used for the interpolation.
 */
function interpolate$1(table, skey, sval, tkey) {
	var range = lookup(table, skey, sval);

	// Note: the lookup table ALWAYS contains at least 2 items (min and max)
	var prev = !range.lo ? table[0] : !range.hi ? table[table.length - 2] : range.lo;
	var next = !range.lo ? table[1] : !range.hi ? table[table.length - 1] : range.hi;

	var span = next[skey] - prev[skey];
	var ratio = span ? (sval - prev[skey]) / span : 0;
	var offset = (next[tkey] - prev[tkey]) * ratio;

	return prev[tkey] + offset;
}

function toTimestamp(scale, input) {
	var adapter = scale._adapter;
	var options = scale.options.time;
	var parser = options.parser;
	var format = parser || options.format;
	var value = input;

	if (typeof parser === 'function') {
		value = parser(value);
	}

	// Only parse if its not a timestamp already
	if (!helpers$1.isFinite(value)) {
		value = typeof format === 'string'
			? adapter.parse(value, format)
			: adapter.parse(value);
	}

	if (value !== null) {
		return +value;
	}

	// Labels are in an incompatible format and no `parser` has been provided.
	// The user might still use the deprecated `format` option for parsing.
	if (!parser && typeof format === 'function') {
		value = format(input);

		// `format` could return something else than a timestamp, if so, parse it
		if (!helpers$1.isFinite(value)) {
			value = adapter.parse(value);
		}
	}

	return value;
}

function parse(scale, input) {
	if (helpers$1.isNullOrUndef(input)) {
		return null;
	}

	var options = scale.options.time;
	var value = toTimestamp(scale, scale.getRightValue(input));
	if (value === null) {
		return value;
	}

	if (options.round) {
		value = +scale._adapter.startOf(value, options.round);
	}

	return value;
}

/**
 * Figures out what unit results in an appropriate number of auto-generated ticks
 */
function determineUnitForAutoTicks(minUnit, min, max, capacity) {
	var ilen = UNITS.length;
	var i, interval, factor;

	for (i = UNITS.indexOf(minUnit); i < ilen - 1; ++i) {
		interval = INTERVALS[UNITS[i]];
		factor = interval.steps ? interval.steps : MAX_INTEGER;

		if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) {
			return UNITS[i];
		}
	}

	return UNITS[ilen - 1];
}

/**
 * Figures out what unit to format a set of ticks with
 */
function determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
	var i, unit;

	for (i = UNITS.length - 1; i >= UNITS.indexOf(minUnit); i--) {
		unit = UNITS[i];
		if (INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) {
			return unit;
		}
	}

	return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
}

function determineMajorUnit(unit) {
	for (var i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i) {
		if (INTERVALS[UNITS[i]].common) {
			return UNITS[i];
		}
	}
}

/**
 * Generates a maximum of `capacity` timestamps between min and max, rounded to the
 * `minor` unit using the given scale time `options`.
 * Important: this method can return ticks outside the min and max range, it's the
 * responsibility of the calling code to clamp values if needed.
 */
function generate(scale, min, max, capacity) {
	var adapter = scale._adapter;
	var options = scale.options;
	var timeOpts = options.time;
	var minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, capacity);
	var stepSize = resolve$5([timeOpts.stepSize, timeOpts.unitStepSize, 1]);
	var weekday = minor === 'week' ? timeOpts.isoWeekday : false;
	var first = min;
	var ticks = [];
	var time;

	// For 'week' unit, handle the first day of week option
	if (weekday) {
		first = +adapter.startOf(first, 'isoWeek', weekday);
	}

	// Align first ticks on unit
	first = +adapter.startOf(first, weekday ? 'day' : minor);

	// Prevent browser from freezing in case user options request millions of milliseconds
	if (adapter.diff(max, min, minor) > 100000 * stepSize) {
		throw min + ' and ' + max + ' are too far apart with stepSize of ' + stepSize + ' ' + minor;
	}

	for (time = first; time < max; time = +adapter.add(time, stepSize, minor)) {
		ticks.push(time);
	}

	if (time === max || options.bounds === 'ticks') {
		ticks.push(time);
	}

	return ticks;
}

/**
 * Returns the start and end offsets from edges in the form of {start, end}
 * where each value is a relative width to the scale and ranges between 0 and 1.
 * They add extra margins on the both sides by scaling down the original scale.
 * Offsets are added when the `offset` option is true.
 */
function computeOffsets(table, ticks, min, max, options) {
	var start = 0;
	var end = 0;
	var first, last;

	if (options.offset && ticks.length) {
		first = interpolate$1(table, 'time', ticks[0], 'pos');
		if (ticks.length === 1) {
			start = 1 - first;
		} else {
			start = (interpolate$1(table, 'time', ticks[1], 'pos') - first) / 2;
		}
		last = interpolate$1(table, 'time', ticks[ticks.length - 1], 'pos');
		if (ticks.length === 1) {
			end = last;
		} else {
			end = (last - interpolate$1(table, 'time', ticks[ticks.length - 2], 'pos')) / 2;
		}
	}

	return {start: start, end: end, factor: 1 / (start + 1 + end)};
}

function setMajorTicks(scale, ticks, map, majorUnit) {
	var adapter = scale._adapter;
	var first = +adapter.startOf(ticks[0].value, majorUnit);
	var last = ticks[ticks.length - 1].value;
	var major, index;

	for (major = first; major <= last; major = +adapter.add(major, 1, majorUnit)) {
		index = map[major];
		if (index >= 0) {
			ticks[index].major = true;
		}
	}
	return ticks;
}

function ticksFromTimestamps(scale, values, majorUnit) {
	var ticks = [];
	var map = {};
	var ilen = values.length;
	var i, value;

	for (i = 0; i < ilen; ++i) {
		value = values[i];
		map[value] = i;

		ticks.push({
			value: value,
			major: false
		});
	}

	// We set the major ticks separately from the above loop because calling startOf for every tick
	// is expensive when there is a large number of ticks
	return (ilen === 0 || !majorUnit) ? ticks : setMajorTicks(scale, ticks, map, majorUnit);
}

var defaultConfig$4 = {
	position: 'bottom',

	/**
	 * Data distribution along the scale:
	 * - 'linear': data are spread according to their time (distances can vary),
	 * - 'series': data are spread at the same distance from each other.
	 * @see https://github.com/chartjs/Chart.js/pull/4507
	 * @since 2.7.0
	 */
	distribution: 'linear',

	/**
	 * Scale boundary strategy (bypassed by min/max time options)
	 * - `data`: make sure data are fully visible, ticks outside are removed
	 * - `ticks`: make sure ticks are fully visible, data outside are truncated
	 * @see https://github.com/chartjs/Chart.js/pull/4556
	 * @since 2.7.0
	 */
	bounds: 'data',

	adapters: {},
	time: {
		parser: false, // false == a pattern string from https://momentjs.com/docs/#/parsing/string-format/ or a custom callback that converts its argument to a moment
		unit: false, // false == automatic or override with week, month, year, etc.
		round: false, // none, or override with week, month, year, etc.
		displayFormat: false, // DEPRECATED
		isoWeekday: false, // override week start day - see https://momentjs.com/docs/#/get-set/iso-weekday/
		minUnit: 'millisecond',
		displayFormats: {}
	},
	ticks: {
		autoSkip: false,

		/**
		 * Ticks generation input values:
		 * - 'auto': generates "optimal" ticks based on scale size and time options.
		 * - 'data': generates ticks from data (including labels from data {t|x|y} objects).
		 * - 'labels': generates ticks from user given `data.labels` values ONLY.
		 * @see https://github.com/chartjs/Chart.js/pull/4507
		 * @since 2.7.0
		 */
		source: 'auto',

		major: {
			enabled: false
		}
	}
};

var scale_time = core_scale.extend({
	initialize: function() {
		this.mergeTicksOptions();
		core_scale.prototype.initialize.call(this);
	},

	update: function() {
		var me = this;
		var options = me.options;
		var time = options.time || (options.time = {});
		var adapter = me._adapter = new core_adapters._date(options.adapters.date);

		// DEPRECATIONS: output a message only one time per update
		deprecated$1('time scale', time.format, 'time.format', 'time.parser');
		deprecated$1('time scale', time.min, 'time.min', 'ticks.min');
		deprecated$1('time scale', time.max, 'time.max', 'ticks.max');

		// Backward compatibility: before introducing adapter, `displayFormats` was
		// supposed to contain *all* unit/string pairs but this can't be resolved
		// when loading the scale (adapters are loaded afterward), so let's populate
		// missing formats on update
		helpers$1.mergeIf(time.displayFormats, adapter.formats());

		return core_scale.prototype.update.apply(me, arguments);
	},

	/**
	 * Allows data to be referenced via 't' attribute
	 */
	getRightValue: function(rawValue) {
		if (rawValue && rawValue.t !== undefined) {
			rawValue = rawValue.t;
		}
		return core_scale.prototype.getRightValue.call(this, rawValue);
	},

	determineDataLimits: function() {
		var me = this;
		var chart = me.chart;
		var adapter = me._adapter;
		var options = me.options;
		var unit = options.time.unit || 'day';
		var min = MAX_INTEGER;
		var max = MIN_INTEGER;
		var timestamps = [];
		var datasets = [];
		var labels = [];
		var i, j, ilen, jlen, data, timestamp, labelsAdded;
		var dataLabels = me._getLabels();

		for (i = 0, ilen = dataLabels.length; i < ilen; ++i) {
			labels.push(parse(me, dataLabels[i]));
		}

		for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
			if (chart.isDatasetVisible(i)) {
				data = chart.data.datasets[i].data;

				// Let's consider that all data have the same format.
				if (helpers$1.isObject(data[0])) {
					datasets[i] = [];

					for (j = 0, jlen = data.length; j < jlen; ++j) {
						timestamp = parse(me, data[j]);
						timestamps.push(timestamp);
						datasets[i][j] = timestamp;
					}
				} else {
					datasets[i] = labels.slice(0);
					if (!labelsAdded) {
						timestamps = timestamps.concat(labels);
						labelsAdded = true;
					}
				}
			} else {
				datasets[i] = [];
			}
		}

		if (labels.length) {
			min = Math.min(min, labels[0]);
			max = Math.max(max, labels[labels.length - 1]);
		}

		if (timestamps.length) {
			timestamps = ilen > 1 ? arrayUnique(timestamps).sort(sorter) : timestamps.sort(sorter);
			min = Math.min(min, timestamps[0]);
			max = Math.max(max, timestamps[timestamps.length - 1]);
		}

		min = parse(me, getMin(options)) || min;
		max = parse(me, getMax(options)) || max;

		// In case there is no valid min/max, set limits based on unit time option
		min = min === MAX_INTEGER ? +adapter.startOf(Date.now(), unit) : min;
		max = max === MIN_INTEGER ? +adapter.endOf(Date.now(), unit) + 1 : max;

		// Make sure that max is strictly higher than min (required by the lookup table)
		me.min = Math.min(min, max);
		me.max = Math.max(min + 1, max);

		// PRIVATE
		me._table = [];
		me._timestamps = {
			data: timestamps,
			datasets: datasets,
			labels: labels
		};
	},

	buildTicks: function() {
		var me = this;
		var min = me.min;
		var max = me.max;
		var options = me.options;
		var tickOpts = options.ticks;
		var timeOpts = options.time;
		var timestamps = me._timestamps;
		var ticks = [];
		var capacity = me.getLabelCapacity(min);
		var source = tickOpts.source;
		var distribution = options.distribution;
		var i, ilen, timestamp;

		if (source === 'data' || (source === 'auto' && distribution === 'series')) {
			timestamps = timestamps.data;
		} else if (source === 'labels') {
			timestamps = timestamps.labels;
		} else {
			timestamps = generate(me, min, max, capacity);
		}

		if (options.bounds === 'ticks' && timestamps.length) {
			min = timestamps[0];
			max = timestamps[timestamps.length - 1];
		}

		// Enforce limits with user min/max options
		min = parse(me, getMin(options)) || min;
		max = parse(me, getMax(options)) || max;

		// Remove ticks outside the min/max range
		for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
			timestamp = timestamps[i];
			if (timestamp >= min && timestamp <= max) {
				ticks.push(timestamp);
			}
		}

		me.min = min;
		me.max = max;

		// PRIVATE
		// determineUnitForFormatting relies on the number of ticks so we don't use it when
		// autoSkip is enabled because we don't yet know what the final number of ticks will be
		me._unit = timeOpts.unit || (tickOpts.autoSkip
			? determineUnitForAutoTicks(timeOpts.minUnit, me.min, me.max, capacity)
			: determineUnitForFormatting(me, ticks.length, timeOpts.minUnit, me.min, me.max));
		me._majorUnit = !tickOpts.major.enabled || me._unit === 'year' ? undefined
			: determineMajorUnit(me._unit);
		me._table = buildLookupTable(me._timestamps.data, min, max, distribution);
		me._offsets = computeOffsets(me._table, ticks, min, max, options);

		if (tickOpts.reverse) {
			ticks.reverse();
		}

		return ticksFromTimestamps(me, ticks, me._majorUnit);
	},

	getLabelForIndex: function(index, datasetIndex) {
		var me = this;
		var adapter = me._adapter;
		var data = me.chart.data;
		var timeOpts = me.options.time;
		var label = data.labels && index < data.labels.length ? data.labels[index] : '';
		var value = data.datasets[datasetIndex].data[index];

		if (helpers$1.isObject(value)) {
			label = me.getRightValue(value);
		}
		if (timeOpts.tooltipFormat) {
			return adapter.format(toTimestamp(me, label), timeOpts.tooltipFormat);
		}
		if (typeof label === 'string') {
			return label;
		}
		return adapter.format(toTimestamp(me, label), timeOpts.displayFormats.datetime);
	},

	/**
	 * Function to format an individual tick mark
	 * @private
	 */
	tickFormatFunction: function(time, index, ticks, format) {
		var me = this;
		var adapter = me._adapter;
		var options = me.options;
		var formats = options.time.displayFormats;
		var minorFormat = formats[me._unit];
		var majorUnit = me._majorUnit;
		var majorFormat = formats[majorUnit];
		var tick = ticks[index];
		var tickOpts = options.ticks;
		var major = majorUnit && majorFormat && tick && tick.major;
		var label = adapter.format(time, format ? format : major ? majorFormat : minorFormat);
		var nestedTickOpts = major ? tickOpts.major : tickOpts.minor;
		var formatter = resolve$5([
			nestedTickOpts.callback,
			nestedTickOpts.userCallback,
			tickOpts.callback,
			tickOpts.userCallback
		]);

		return formatter ? formatter(label, index, ticks) : label;
	},

	convertTicksToLabels: function(ticks) {
		var labels = [];
		var i, ilen;

		for (i = 0, ilen = ticks.length; i < ilen; ++i) {
			labels.push(this.tickFormatFunction(ticks[i].value, i, ticks));
		}

		return labels;
	},

	/**
	 * @private
	 */
	getPixelForOffset: function(time) {
		var me = this;
		var offsets = me._offsets;
		var pos = interpolate$1(me._table, 'time', time, 'pos');
		return me.getPixelForDecimal((offsets.start + pos) * offsets.factor);
	},

	getPixelForValue: function(value, index, datasetIndex) {
		var me = this;
		var time = null;

		if (index !== undefined && datasetIndex !== undefined) {
			time = me._timestamps.datasets[datasetIndex][index];
		}

		if (time === null) {
			time = parse(me, value);
		}

		if (time !== null) {
			return me.getPixelForOffset(time);
		}
	},

	getPixelForTick: function(index) {
		var ticks = this.getTicks();
		return index >= 0 && index < ticks.length ?
			this.getPixelForOffset(ticks[index].value) :
			null;
	},

	getValueForPixel: function(pixel) {
		var me = this;
		var offsets = me._offsets;
		var pos = me.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
		var time = interpolate$1(me._table, 'pos', pos, 'time');

		// DEPRECATION, we should return time directly
		return me._adapter._create(time);
	},

	/**
	 * @private
	 */
	_getLabelSize: function(label) {
		var me = this;
		var ticksOpts = me.options.ticks;
		var tickLabelWidth = me.ctx.measureText(label).width;
		var angle = helpers$1.toRadians(me.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
		var cosRotation = Math.cos(angle);
		var sinRotation = Math.sin(angle);
		var tickFontSize = valueOrDefault$d(ticksOpts.fontSize, core_defaults.global.defaultFontSize);

		return {
			w: (tickLabelWidth * cosRotation) + (tickFontSize * sinRotation),
			h: (tickLabelWidth * sinRotation) + (tickFontSize * cosRotation)
		};
	},

	/**
	 * Crude approximation of what the label width might be
	 * @private
	 */
	getLabelWidth: function(label) {
		return this._getLabelSize(label).w;
	},

	/**
	 * @private
	 */
	getLabelCapacity: function(exampleTime) {
		var me = this;
		var timeOpts = me.options.time;
		var displayFormats = timeOpts.displayFormats;

		// pick the longest format (milliseconds) for guestimation
		var format = displayFormats[timeOpts.unit] || displayFormats.millisecond;
		var exampleLabel = me.tickFormatFunction(exampleTime, 0, ticksFromTimestamps(me, [exampleTime], me._majorUnit), format);
		var size = me._getLabelSize(exampleLabel);
		var capacity = Math.floor(me.isHorizontal() ? me.width / size.w : me.height / size.h);

		if (me.options.offset) {
			capacity--;
		}

		return capacity > 0 ? capacity : 1;
	}
});

// INTERNAL: static default options, registered in src/index.js
var _defaults$4 = defaultConfig$4;
scale_time._defaults = _defaults$4;

var scales = {
	category: scale_category,
	linear: scale_linear,
	logarithmic: scale_logarithmic,
	radialLinear: scale_radialLinear,
	time: scale_time
};

var FORMATS = {
	datetime: 'MMM D, YYYY, h:mm:ss a',
	millisecond: 'h:mm:ss.SSS a',
	second: 'h:mm:ss a',
	minute: 'h:mm a',
	hour: 'hA',
	day: 'MMM D',
	week: 'll',
	month: 'MMM YYYY',
	quarter: '[Q]Q - YYYY',
	year: 'YYYY'
};

core_adapters._date.override(typeof moment === 'function' ? {
	_id: 'moment', // DEBUG ONLY

	formats: function() {
		return FORMATS;
	},

	parse: function(value, format) {
		if (typeof value === 'string' && typeof format === 'string') {
			value = moment(value, format);
		} else if (!(value instanceof moment)) {
			value = moment(value);
		}
		return value.isValid() ? value.valueOf() : null;
	},

	format: function(time, format) {
		return moment(time).format(format);
	},

	add: function(time, amount, unit) {
		return moment(time).add(amount, unit).valueOf();
	},

	diff: function(max, min, unit) {
		return moment(max).diff(moment(min), unit);
	},

	startOf: function(time, unit, weekday) {
		time = moment(time);
		if (unit === 'isoWeek') {
			return time.isoWeekday(weekday).valueOf();
		}
		return time.startOf(unit).valueOf();
	},

	endOf: function(time, unit) {
		return moment(time).endOf(unit).valueOf();
	},

	// DEPRECATIONS

	/**
	 * Provided for backward compatibility with scale.getValueForPixel().
	 * @deprecated since version 2.8.0
	 * @todo remove at version 3
	 * @private
	 */
	_create: function(time) {
		return moment(time);
	},
} : {});

core_defaults._set('global', {
	plugins: {
		filler: {
			propagate: true
		}
	}
});

var mappers = {
	dataset: function(source) {
		var index = source.fill;
		var chart = source.chart;
		var meta = chart.getDatasetMeta(index);
		var visible = meta && chart.isDatasetVisible(index);
		var points = (visible && meta.dataset._children) || [];
		var length = points.length || 0;

		return !length ? null : function(point, i) {
			return (i < length && points[i]._view) || null;
		};
	},

	boundary: function(source) {
		var boundary = source.boundary;
		var x = boundary ? boundary.x : null;
		var y = boundary ? boundary.y : null;

		if (helpers$1.isArray(boundary)) {
			return function(point, i) {
				return boundary[i];
			};
		}

		return function(point) {
			return {
				x: x === null ? point.x : x,
				y: y === null ? point.y : y,
			};
		};
	}
};

// @todo if (fill[0] === '#')
function decodeFill(el, index, count) {
	var model = el._model || {};
	var fill = model.fill;
	var target;

	if (fill === undefined) {
		fill = !!model.backgroundColor;
	}

	if (fill === false || fill === null) {
		return false;
	}

	if (fill === true) {
		return 'origin';
	}

	target = parseFloat(fill, 10);
	if (isFinite(target) && Math.floor(target) === target) {
		if (fill[0] === '-' || fill[0] === '+') {
			target = index + target;
		}

		if (target === index || target < 0 || target >= count) {
			return false;
		}

		return target;
	}

	switch (fill) {
	// compatibility
	case 'bottom':
		return 'start';
	case 'top':
		return 'end';
	case 'zero':
		return 'origin';
	// supported boundaries
	case 'origin':
	case 'start':
	case 'end':
		return fill;
	// invalid fill values
	default:
		return false;
	}
}

function computeLinearBoundary(source) {
	var model = source.el._model || {};
	var scale = source.el._scale || {};
	var fill = source.fill;
	var target = null;
	var horizontal;

	if (isFinite(fill)) {
		return null;
	}

	// Backward compatibility: until v3, we still need to support boundary values set on
	// the model (scaleTop, scaleBottom and scaleZero) because some external plugins and
	// controllers might still use it (e.g. the Smith chart).

	if (fill === 'start') {
		target = model.scaleBottom === undefined ? scale.bottom : model.scaleBottom;
	} else if (fill === 'end') {
		target = model.scaleTop === undefined ? scale.top : model.scaleTop;
	} else if (model.scaleZero !== undefined) {
		target = model.scaleZero;
	} else if (scale.getBasePixel) {
		target = scale.getBasePixel();
	}

	if (target !== undefined && target !== null) {
		if (target.x !== undefined && target.y !== undefined) {
			return target;
		}

		if (helpers$1.isFinite(target)) {
			horizontal = scale.isHorizontal();
			return {
				x: horizontal ? target : null,
				y: horizontal ? null : target
			};
		}
	}

	return null;
}

function computeCircularBoundary(source) {
	var scale = source.el._scale;
	var options = scale.options;
	var length = scale.chart.data.labels.length;
	var fill = source.fill;
	var target = [];
	var start, end, center, i, point;

	if (!length) {
		return null;
	}

	start = options.ticks.reverse ? scale.max : scale.min;
	end = options.ticks.reverse ? scale.min : scale.max;
	center = scale.getPointPositionForValue(0, start);
	for (i = 0; i < length; ++i) {
		point = fill === 'start' || fill === 'end'
			? scale.getPointPositionForValue(i, fill === 'start' ? start : end)
			: scale.getBasePosition(i);
		if (options.gridLines.circular) {
			point.cx = center.x;
			point.cy = center.y;
			point.angle = scale.getIndexAngle(i) - Math.PI / 2;
		}
		target.push(point);
	}
	return target;
}

function computeBoundary(source) {
	var scale = source.el._scale || {};

	if (scale.getPointPositionForValue) {
		return computeCircularBoundary(source);
	}
	return computeLinearBoundary(source);
}

function resolveTarget(sources, index, propagate) {
	var source = sources[index];
	var fill = source.fill;
	var visited = [index];
	var target;

	if (!propagate) {
		return fill;
	}

	while (fill !== false && visited.indexOf(fill) === -1) {
		if (!isFinite(fill)) {
			return fill;
		}

		target = sources[fill];
		if (!target) {
			return false;
		}

		if (target.visible) {
			return fill;
		}

		visited.push(fill);
		fill = target.fill;
	}

	return false;
}

function createMapper(source) {
	var fill = source.fill;
	var type = 'dataset';

	if (fill === false) {
		return null;
	}

	if (!isFinite(fill)) {
		type = 'boundary';
	}

	return mappers[type](source);
}

function isDrawable(point) {
	return point && !point.skip;
}

function drawArea(ctx, curve0, curve1, len0, len1) {
	var i, cx, cy, r;

	if (!len0 || !len1) {
		return;
	}

	// building first area curve (normal)
	ctx.moveTo(curve0[0].x, curve0[0].y);
	for (i = 1; i < len0; ++i) {
		helpers$1.canvas.lineTo(ctx, curve0[i - 1], curve0[i]);
	}

	if (curve1[0].angle !== undefined) {
		cx = curve1[0].cx;
		cy = curve1[0].cy;
		r = Math.sqrt(Math.pow(curve1[0].x - cx, 2) + Math.pow(curve1[0].y - cy, 2));
		for (i = len1 - 1; i > 0; --i) {
			ctx.arc(cx, cy, r, curve1[i].angle, curve1[i - 1].angle, true);
		}
		return;
	}

	// joining the two area curves
	ctx.lineTo(curve1[len1 - 1].x, curve1[len1 - 1].y);

	// building opposite area curve (reverse)
	for (i = len1 - 1; i > 0; --i) {
		helpers$1.canvas.lineTo(ctx, curve1[i], curve1[i - 1], true);
	}
}

function doFill(ctx, points, mapper, view, color, loop) {
	var count = points.length;
	var span = view.spanGaps;
	var curve0 = [];
	var curve1 = [];
	var len0 = 0;
	var len1 = 0;
	var i, ilen, index, p0, p1, d0, d1, loopOffset;

	ctx.beginPath();

	for (i = 0, ilen = count; i < ilen; ++i) {
		index = i % count;
		p0 = points[index]._view;
		p1 = mapper(p0, index, view);
		d0 = isDrawable(p0);
		d1 = isDrawable(p1);

		if (loop && loopOffset === undefined && d0) {
			loopOffset = i + 1;
			ilen = count + loopOffset;
		}

		if (d0 && d1) {
			len0 = curve0.push(p0);
			len1 = curve1.push(p1);
		} else if (len0 && len1) {
			if (!span) {
				drawArea(ctx, curve0, curve1, len0, len1);
				len0 = len1 = 0;
				curve0 = [];
				curve1 = [];
			} else {
				if (d0) {
					curve0.push(p0);
				}
				if (d1) {
					curve1.push(p1);
				}
			}
		}
	}

	drawArea(ctx, curve0, curve1, len0, len1);

	ctx.closePath();
	ctx.fillStyle = color;
	ctx.fill();
}

var plugin_filler = {
	id: 'filler',

	afterDatasetsUpdate: function(chart, options) {
		var count = (chart.data.datasets || []).length;
		var propagate = options.propagate;
		var sources = [];
		var meta, i, el, source;

		for (i = 0; i < count; ++i) {
			meta = chart.getDatasetMeta(i);
			el = meta.dataset;
			source = null;

			if (el && el._model && el instanceof elements.Line) {
				source = {
					visible: chart.isDatasetVisible(i),
					fill: decodeFill(el, i, count),
					chart: chart,
					el: el
				};
			}

			meta.$filler = source;
			sources.push(source);
		}

		for (i = 0; i < count; ++i) {
			source = sources[i];
			if (!source) {
				continue;
			}

			source.fill = resolveTarget(sources, i, propagate);
			source.boundary = computeBoundary(source);
			source.mapper = createMapper(source);
		}
	},

	beforeDatasetsDraw: function(chart) {
		var metasets = chart._getSortedVisibleDatasetMetas();
		var ctx = chart.ctx;
		var meta, i, el, view, points, mapper, color;

		for (i = metasets.length - 1; i >= 0; --i) {
			meta = metasets[i].$filler;

			if (!meta || !meta.visible) {
				continue;
			}

			el = meta.el;
			view = el._view;
			points = el._children || [];
			mapper = meta.mapper;
			color = view.backgroundColor || core_defaults.global.defaultColor;

			if (mapper && color && points.length) {
				helpers$1.canvas.clipArea(ctx, chart.chartArea);
				doFill(ctx, points, mapper, view, color, el._loop);
				helpers$1.canvas.unclipArea(ctx);
			}
		}
	}
};

var getRtlHelper$1 = helpers$1.rtl.getRtlAdapter;
var noop$1 = helpers$1.noop;
var valueOrDefault$e = helpers$1.valueOrDefault;

core_defaults._set('global', {
	legend: {
		display: true,
		position: 'top',
		align: 'center',
		fullWidth: true,
		reverse: false,
		weight: 1000,

		// a callback that will handle
		onClick: function(e, legendItem) {
			var index = legendItem.datasetIndex;
			var ci = this.chart;
			var meta = ci.getDatasetMeta(index);

			// See controller.isDatasetVisible comment
			meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null;

			// We hid a dataset ... rerender the chart
			ci.update();
		},

		onHover: null,
		onLeave: null,

		labels: {
			boxWidth: 40,
			padding: 10,
			// Generates labels shown in the legend
			// Valid properties to return:
			// text : text to display
			// fillStyle : fill of coloured box
			// strokeStyle: stroke of coloured box
			// hidden : if this legend item refers to a hidden item
			// lineCap : cap style for line
			// lineDash
			// lineDashOffset :
			// lineJoin :
			// lineWidth :
			generateLabels: function(chart) {
				var datasets = chart.data.datasets;
				var options = chart.options.legend || {};
				var usePointStyle = options.labels && options.labels.usePointStyle;

				return chart._getSortedDatasetMetas().map(function(meta) {
					var style = meta.controller.getStyle(usePointStyle ? 0 : undefined);

					return {
						text: datasets[meta.index].label,
						fillStyle: style.backgroundColor,
						hidden: !chart.isDatasetVisible(meta.index),
						lineCap: style.borderCapStyle,
						lineDash: style.borderDash,
						lineDashOffset: style.borderDashOffset,
						lineJoin: style.borderJoinStyle,
						lineWidth: style.borderWidth,
						strokeStyle: style.borderColor,
						pointStyle: style.pointStyle,
						rotation: style.rotation,

						// Below is extra data used for toggling the datasets
						datasetIndex: meta.index
					};
				}, this);
			}
		}
	},

	legendCallback: function(chart) {
		var list = document.createElement('ul');
		var datasets = chart.data.datasets;
		var i, ilen, listItem, listItemSpan;

		list.setAttribute('class', chart.id + '-legend');

		for (i = 0, ilen = datasets.length; i < ilen; i++) {
			listItem = list.appendChild(document.createElement('li'));
			listItemSpan = listItem.appendChild(document.createElement('span'));
			listItemSpan.style.backgroundColor = datasets[i].backgroundColor;
			if (datasets[i].label) {
				listItem.appendChild(document.createTextNode(datasets[i].label));
			}
		}

		return list.outerHTML;
	}
});

/**
 * Helper function to get the box width based on the usePointStyle option
 * @param {object} labelopts - the label options on the legend
 * @param {number} fontSize - the label font size
 * @return {number} width of the color box area
 */
function getBoxWidth(labelOpts, fontSize) {
	return labelOpts.usePointStyle && labelOpts.boxWidth > fontSize ?
		fontSize :
		labelOpts.boxWidth;
}

/**
 * IMPORTANT: this class is exposed publicly as Chart.Legend, backward compatibility required!
 */
var Legend = core_element.extend({

	initialize: function(config) {
		var me = this;
		helpers$1.extend(me, config);

		// Contains hit boxes for each dataset (in dataset order)
		me.legendHitBoxes = [];

		/**
 		 * @private
 		 */
		me._hoveredItem = null;

		// Are we in doughnut mode which has a different data type
		me.doughnutMode = false;
	},

	// These methods are ordered by lifecycle. Utilities then follow.
	// Any function defined here is inherited by all legend types.
	// Any function can be extended by the legend type

	beforeUpdate: noop$1,
	update: function(maxWidth, maxHeight, margins) {
		var me = this;

		// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
		me.beforeUpdate();

		// Absorb the master measurements
		me.maxWidth = maxWidth;
		me.maxHeight = maxHeight;
		me.margins = margins;

		// Dimensions
		me.beforeSetDimensions();
		me.setDimensions();
		me.afterSetDimensions();
		// Labels
		me.beforeBuildLabels();
		me.buildLabels();
		me.afterBuildLabels();

		// Fit
		me.beforeFit();
		me.fit();
		me.afterFit();
		//
		me.afterUpdate();

		return me.minSize;
	},
	afterUpdate: noop$1,

	//

	beforeSetDimensions: noop$1,
	setDimensions: function() {
		var me = this;
		// Set the unconstrained dimension before label rotation
		if (me.isHorizontal()) {
			// Reset position before calculating rotation
			me.width = me.maxWidth;
			me.left = 0;
			me.right = me.width;
		} else {
			me.height = me.maxHeight;

			// Reset position before calculating rotation
			me.top = 0;
			me.bottom = me.height;
		}

		// Reset padding
		me.paddingLeft = 0;
		me.paddingTop = 0;
		me.paddingRight = 0;
		me.paddingBottom = 0;

		// Reset minSize
		me.minSize = {
			width: 0,
			height: 0
		};
	},
	afterSetDimensions: noop$1,

	//

	beforeBuildLabels: noop$1,
	buildLabels: function() {
		var me = this;
		var labelOpts = me.options.labels || {};
		var legendItems = helpers$1.callback(labelOpts.generateLabels, [me.chart], me) || [];

		if (labelOpts.filter) {
			legendItems = legendItems.filter(function(item) {
				return labelOpts.filter(item, me.chart.data);
			});
		}

		if (me.options.reverse) {
			legendItems.reverse();
		}

		me.legendItems = legendItems;
	},
	afterBuildLabels: noop$1,

	//

	beforeFit: noop$1,
	fit: function() {
		var me = this;
		var opts = me.options;
		var labelOpts = opts.labels;
		var display = opts.display;

		var ctx = me.ctx;

		var labelFont = helpers$1.options._parseFont(labelOpts);
		var fontSize = labelFont.size;

		// Reset hit boxes
		var hitboxes = me.legendHitBoxes = [];

		var minSize = me.minSize;
		var isHorizontal = me.isHorizontal();

		if (isHorizontal) {
			minSize.width = me.maxWidth; // fill all the width
			minSize.height = display ? 10 : 0;
		} else {
			minSize.width = display ? 10 : 0;
			minSize.height = me.maxHeight; // fill all the height
		}

		// Increase sizes here
		if (!display) {
			me.width = minSize.width = me.height = minSize.height = 0;
			return;
		}
		ctx.font = labelFont.string;

		if (isHorizontal) {
			// Labels

			// Width of each line of legend boxes. Labels wrap onto multiple lines when there are too many to fit on one
			var lineWidths = me.lineWidths = [0];
			var totalHeight = 0;

			ctx.textAlign = 'left';
			ctx.textBaseline = 'middle';

			helpers$1.each(me.legendItems, function(legendItem, i) {
				var boxWidth = getBoxWidth(labelOpts, fontSize);
				var width = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;

				if (i === 0 || lineWidths[lineWidths.length - 1] + width + 2 * labelOpts.padding > minSize.width) {
					totalHeight += fontSize + labelOpts.padding;
					lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
				}

				// Store the hitbox width and height here. Final position will be updated in `draw`
				hitboxes[i] = {
					left: 0,
					top: 0,
					width: width,
					height: fontSize
				};

				lineWidths[lineWidths.length - 1] += width + labelOpts.padding;
			});

			minSize.height += totalHeight;

		} else {
			var vPadding = labelOpts.padding;
			var columnWidths = me.columnWidths = [];
			var columnHeights = me.columnHeights = [];
			var totalWidth = labelOpts.padding;
			var currentColWidth = 0;
			var currentColHeight = 0;

			helpers$1.each(me.legendItems, function(legendItem, i) {
				var boxWidth = getBoxWidth(labelOpts, fontSize);
				var itemWidth = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;

				// If too tall, go to new column
				if (i > 0 && currentColHeight + fontSize + 2 * vPadding > minSize.height) {
					totalWidth += currentColWidth + labelOpts.padding;
					columnWidths.push(currentColWidth); // previous column width
					columnHeights.push(currentColHeight);
					currentColWidth = 0;
					currentColHeight = 0;
				}

				// Get max width
				currentColWidth = Math.max(currentColWidth, itemWidth);
				currentColHeight += fontSize + vPadding;

				// Store the hitbox width and height here. Final position will be updated in `draw`
				hitboxes[i] = {
					left: 0,
					top: 0,
					width: itemWidth,
					height: fontSize
				};
			});

			totalWidth += currentColWidth;
			columnWidths.push(currentColWidth);
			columnHeights.push(currentColHeight);
			minSize.width += totalWidth;
		}

		me.width = minSize.width;
		me.height = minSize.height;
	},
	afterFit: noop$1,

	// Shared Methods
	isHorizontal: function() {
		return this.options.position === 'top' || this.options.position === 'bottom';
	},

	// Actually draw the legend on the canvas
	draw: function() {
		var me = this;
		var opts = me.options;
		var labelOpts = opts.labels;
		var globalDefaults = core_defaults.global;
		var defaultColor = globalDefaults.defaultColor;
		var lineDefault = globalDefaults.elements.line;
		var legendHeight = me.height;
		var columnHeights = me.columnHeights;
		var legendWidth = me.width;
		var lineWidths = me.lineWidths;

		if (!opts.display) {
			return;
		}

		var rtlHelper = getRtlHelper$1(opts.rtl, me.left, me.minSize.width);
		var ctx = me.ctx;
		var fontColor = valueOrDefault$e(labelOpts.fontColor, globalDefaults.defaultFontColor);
		var labelFont = helpers$1.options._parseFont(labelOpts);
		var fontSize = labelFont.size;
		var cursor;

		// Canvas setup
		ctx.textAlign = rtlHelper.textAlign('left');
		ctx.textBaseline = 'middle';
		ctx.lineWidth = 0.5;
		ctx.strokeStyle = fontColor; // for strikethrough effect
		ctx.fillStyle = fontColor; // render in correct colour
		ctx.font = labelFont.string;

		var boxWidth = getBoxWidth(labelOpts, fontSize);
		var hitboxes = me.legendHitBoxes;

		// current position
		var drawLegendBox = function(x, y, legendItem) {
			if (isNaN(boxWidth) || boxWidth <= 0) {
				return;
			}

			// Set the ctx for the box
			ctx.save();

			var lineWidth = valueOrDefault$e(legendItem.lineWidth, lineDefault.borderWidth);
			ctx.fillStyle = valueOrDefault$e(legendItem.fillStyle, defaultColor);
			ctx.lineCap = valueOrDefault$e(legendItem.lineCap, lineDefault.borderCapStyle);
			ctx.lineDashOffset = valueOrDefault$e(legendItem.lineDashOffset, lineDefault.borderDashOffset);
			ctx.lineJoin = valueOrDefault$e(legendItem.lineJoin, lineDefault.borderJoinStyle);
			ctx.lineWidth = lineWidth;
			ctx.strokeStyle = valueOrDefault$e(legendItem.strokeStyle, defaultColor);

			if (ctx.setLineDash) {
				// IE 9 and 10 do not support line dash
				ctx.setLineDash(valueOrDefault$e(legendItem.lineDash, lineDefault.borderDash));
			}

			if (labelOpts && labelOpts.usePointStyle) {
				// Recalculate x and y for drawPoint() because its expecting
				// x and y to be center of figure (instead of top left)
				var radius = boxWidth * Math.SQRT2 / 2;
				var centerX = rtlHelper.xPlus(x, boxWidth / 2);
				var centerY = y + fontSize / 2;

				// Draw pointStyle as legend symbol
				helpers$1.canvas.drawPoint(ctx, legendItem.pointStyle, radius, centerX, centerY, legendItem.rotation);
			} else {
				// Draw box as legend symbol
				ctx.fillRect(rtlHelper.leftForLtr(x, boxWidth), y, boxWidth, fontSize);
				if (lineWidth !== 0) {
					ctx.strokeRect(rtlHelper.leftForLtr(x, boxWidth), y, boxWidth, fontSize);
				}
			}

			ctx.restore();
		};

		var fillText = function(x, y, legendItem, textWidth) {
			var halfFontSize = fontSize / 2;
			var xLeft = rtlHelper.xPlus(x, boxWidth + halfFontSize);
			var yMiddle = y + halfFontSize;

			ctx.fillText(legendItem.text, xLeft, yMiddle);

			if (legendItem.hidden) {
				// Strikethrough the text if hidden
				ctx.beginPath();
				ctx.lineWidth = 2;
				ctx.moveTo(xLeft, yMiddle);
				ctx.lineTo(rtlHelper.xPlus(xLeft, textWidth), yMiddle);
				ctx.stroke();
			}
		};

		var alignmentOffset = function(dimension, blockSize) {
			switch (opts.align) {
			case 'start':
				return labelOpts.padding;
			case 'end':
				return dimension - blockSize;
			default: // center
				return (dimension - blockSize + labelOpts.padding) / 2;
			}
		};

		// Horizontal
		var isHorizontal = me.isHorizontal();
		if (isHorizontal) {
			cursor = {
				x: me.left + alignmentOffset(legendWidth, lineWidths[0]),
				y: me.top + labelOpts.padding,
				line: 0
			};
		} else {
			cursor = {
				x: me.left + labelOpts.padding,
				y: me.top + alignmentOffset(legendHeight, columnHeights[0]),
				line: 0
			};
		}

		helpers$1.rtl.overrideTextDirection(me.ctx, opts.textDirection);

		var itemHeight = fontSize + labelOpts.padding;
		helpers$1.each(me.legendItems, function(legendItem, i) {
			var textWidth = ctx.measureText(legendItem.text).width;
			var width = boxWidth + (fontSize / 2) + textWidth;
			var x = cursor.x;
			var y = cursor.y;

			rtlHelper.setWidth(me.minSize.width);

			// Use (me.left + me.minSize.width) and (me.top + me.minSize.height)
			// instead of me.right and me.bottom because me.width and me.height
			// may have been changed since me.minSize was calculated
			if (isHorizontal) {
				if (i > 0 && x + width + labelOpts.padding > me.left + me.minSize.width) {
					y = cursor.y += itemHeight;
					cursor.line++;
					x = cursor.x = me.left + alignmentOffset(legendWidth, lineWidths[cursor.line]);
				}
			} else if (i > 0 && y + itemHeight > me.top + me.minSize.height) {
				x = cursor.x = x + me.columnWidths[cursor.line] + labelOpts.padding;
				cursor.line++;
				y = cursor.y = me.top + alignmentOffset(legendHeight, columnHeights[cursor.line]);
			}

			var realX = rtlHelper.x(x);

			drawLegendBox(realX, y, legendItem);

			hitboxes[i].left = rtlHelper.leftForLtr(realX, hitboxes[i].width);
			hitboxes[i].top = y;

			// Fill the actual label
			fillText(realX, y, legendItem, textWidth);

			if (isHorizontal) {
				cursor.x += width + labelOpts.padding;
			} else {
				cursor.y += itemHeight;
			}
		});

		helpers$1.rtl.restoreTextDirection(me.ctx, opts.textDirection);
	},

	/**
	 * @private
	 */
	_getLegendItemAt: function(x, y) {
		var me = this;
		var i, hitBox, lh;

		if (x >= me.left && x <= me.right && y >= me.top && y <= me.bottom) {
			// See if we are touching one of the dataset boxes
			lh = me.legendHitBoxes;
			for (i = 0; i < lh.length; ++i) {
				hitBox = lh[i];

				if (x >= hitBox.left && x <= hitBox.left + hitBox.width && y >= hitBox.top && y <= hitBox.top + hitBox.height) {
					// Touching an element
					return me.legendItems[i];
				}
			}
		}

		return null;
	},

	/**
	 * Handle an event
	 * @private
	 * @param {IEvent} event - The event to handle
	 */
	handleEvent: function(e) {
		var me = this;
		var opts = me.options;
		var type = e.type === 'mouseup' ? 'click' : e.type;
		var hoveredItem;

		if (type === 'mousemove') {
			if (!opts.onHover && !opts.onLeave) {
				return;
			}
		} else if (type === 'click') {
			if (!opts.onClick) {
				return;
			}
		} else {
			return;
		}

		// Chart event already has relative position in it
		hoveredItem = me._getLegendItemAt(e.x, e.y);

		if (type === 'click') {
			if (hoveredItem && opts.onClick) {
				// use e.native for backwards compatibility
				opts.onClick.call(me, e.native, hoveredItem);
			}
		} else {
			if (opts.onLeave && hoveredItem !== me._hoveredItem) {
				if (me._hoveredItem) {
					opts.onLeave.call(me, e.native, me._hoveredItem);
				}
				me._hoveredItem = hoveredItem;
			}

			if (opts.onHover && hoveredItem) {
				// use e.native for backwards compatibility
				opts.onHover.call(me, e.native, hoveredItem);
			}
		}
	}
});

function createNewLegendAndAttach(chart, legendOpts) {
	var legend = new Legend({
		ctx: chart.ctx,
		options: legendOpts,
		chart: chart
	});

	core_layouts.configure(chart, legend, legendOpts);
	core_layouts.addBox(chart, legend);
	chart.legend = legend;
}

var plugin_legend = {
	id: 'legend',

	/**
	 * Backward compatibility: since 2.1.5, the legend is registered as a plugin, making
	 * Chart.Legend obsolete. To avoid a breaking change, we export the Legend as part of
	 * the plugin, which one will be re-exposed in the chart.js file.
	 * https://github.com/chartjs/Chart.js/pull/2640
	 * @private
	 */
	_element: Legend,

	beforeInit: function(chart) {
		var legendOpts = chart.options.legend;

		if (legendOpts) {
			createNewLegendAndAttach(chart, legendOpts);
		}
	},

	beforeUpdate: function(chart) {
		var legendOpts = chart.options.legend;
		var legend = chart.legend;

		if (legendOpts) {
			helpers$1.mergeIf(legendOpts, core_defaults.global.legend);

			if (legend) {
				core_layouts.configure(chart, legend, legendOpts);
				legend.options = legendOpts;
			} else {
				createNewLegendAndAttach(chart, legendOpts);
			}
		} else if (legend) {
			core_layouts.removeBox(chart, legend);
			delete chart.legend;
		}
	},

	afterEvent: function(chart, e) {
		var legend = chart.legend;
		if (legend) {
			legend.handleEvent(e);
		}
	}
};

var noop$2 = helpers$1.noop;

core_defaults._set('global', {
	title: {
		display: false,
		fontStyle: 'bold',
		fullWidth: true,
		padding: 10,
		position: 'top',
		text: '',
		weight: 2000         // by default greater than legend (1000) to be above
	}
});

/**
 * IMPORTANT: this class is exposed publicly as Chart.Legend, backward compatibility required!
 */
var Title = core_element.extend({
	initialize: function(config) {
		var me = this;
		helpers$1.extend(me, config);

		// Contains hit boxes for each dataset (in dataset order)
		me.legendHitBoxes = [];
	},

	// These methods are ordered by lifecycle. Utilities then follow.

	beforeUpdate: noop$2,
	update: function(maxWidth, maxHeight, margins) {
		var me = this;

		// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
		me.beforeUpdate();

		// Absorb the master measurements
		me.maxWidth = maxWidth;
		me.maxHeight = maxHeight;
		me.margins = margins;

		// Dimensions
		me.beforeSetDimensions();
		me.setDimensions();
		me.afterSetDimensions();
		// Labels
		me.beforeBuildLabels();
		me.buildLabels();
		me.afterBuildLabels();

		// Fit
		me.beforeFit();
		me.fit();
		me.afterFit();
		//
		me.afterUpdate();

		return me.minSize;

	},
	afterUpdate: noop$2,

	//

	beforeSetDimensions: noop$2,
	setDimensions: function() {
		var me = this;
		// Set the unconstrained dimension before label rotation
		if (me.isHorizontal()) {
			// Reset position before calculating rotation
			me.width = me.maxWidth;
			me.left = 0;
			me.right = me.width;
		} else {
			me.height = me.maxHeight;

			// Reset position before calculating rotation
			me.top = 0;
			me.bottom = me.height;
		}

		// Reset padding
		me.paddingLeft = 0;
		me.paddingTop = 0;
		me.paddingRight = 0;
		me.paddingBottom = 0;

		// Reset minSize
		me.minSize = {
			width: 0,
			height: 0
		};
	},
	afterSetDimensions: noop$2,

	//

	beforeBuildLabels: noop$2,
	buildLabels: noop$2,
	afterBuildLabels: noop$2,

	//

	beforeFit: noop$2,
	fit: function() {
		var me = this;
		var opts = me.options;
		var minSize = me.minSize = {};
		var isHorizontal = me.isHorizontal();
		var lineCount, textSize;

		if (!opts.display) {
			me.width = minSize.width = me.height = minSize.height = 0;
			return;
		}

		lineCount = helpers$1.isArray(opts.text) ? opts.text.length : 1;
		textSize = lineCount * helpers$1.options._parseFont(opts).lineHeight + opts.padding * 2;

		me.width = minSize.width = isHorizontal ? me.maxWidth : textSize;
		me.height = minSize.height = isHorizontal ? textSize : me.maxHeight;
	},
	afterFit: noop$2,

	// Shared Methods
	isHorizontal: function() {
		var pos = this.options.position;
		return pos === 'top' || pos === 'bottom';
	},

	// Actually draw the title block on the canvas
	draw: function() {
		var me = this;
		var ctx = me.ctx;
		var opts = me.options;

		if (!opts.display) {
			return;
		}

		var fontOpts = helpers$1.options._parseFont(opts);
		var lineHeight = fontOpts.lineHeight;
		var offset = lineHeight / 2 + opts.padding;
		var rotation = 0;
		var top = me.top;
		var left = me.left;
		var bottom = me.bottom;
		var right = me.right;
		var maxWidth, titleX, titleY;

		ctx.fillStyle = helpers$1.valueOrDefault(opts.fontColor, core_defaults.global.defaultFontColor); // render in correct colour
		ctx.font = fontOpts.string;

		// Horizontal
		if (me.isHorizontal()) {
			titleX = left + ((right - left) / 2); // midpoint of the width
			titleY = top + offset;
			maxWidth = right - left;
		} else {
			titleX = opts.position === 'left' ? left + offset : right - offset;
			titleY = top + ((bottom - top) / 2);
			maxWidth = bottom - top;
			rotation = Math.PI * (opts.position === 'left' ? -0.5 : 0.5);
		}

		ctx.save();
		ctx.translate(titleX, titleY);
		ctx.rotate(rotation);
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';

		var text = opts.text;
		if (helpers$1.isArray(text)) {
			var y = 0;
			for (var i = 0; i < text.length; ++i) {
				ctx.fillText(text[i], 0, y, maxWidth);
				y += lineHeight;
			}
		} else {
			ctx.fillText(text, 0, 0, maxWidth);
		}

		ctx.restore();
	}
});

function createNewTitleBlockAndAttach(chart, titleOpts) {
	var title = new Title({
		ctx: chart.ctx,
		options: titleOpts,
		chart: chart
	});

	core_layouts.configure(chart, title, titleOpts);
	core_layouts.addBox(chart, title);
	chart.titleBlock = title;
}

var plugin_title = {
	id: 'title',

	/**
	 * Backward compatibility: since 2.1.5, the title is registered as a plugin, making
	 * Chart.Title obsolete. To avoid a breaking change, we export the Title as part of
	 * the plugin, which one will be re-exposed in the chart.js file.
	 * https://github.com/chartjs/Chart.js/pull/2640
	 * @private
	 */
	_element: Title,

	beforeInit: function(chart) {
		var titleOpts = chart.options.title;

		if (titleOpts) {
			createNewTitleBlockAndAttach(chart, titleOpts);
		}
	},

	beforeUpdate: function(chart) {
		var titleOpts = chart.options.title;
		var titleBlock = chart.titleBlock;

		if (titleOpts) {
			helpers$1.mergeIf(titleOpts, core_defaults.global.title);

			if (titleBlock) {
				core_layouts.configure(chart, titleBlock, titleOpts);
				titleBlock.options = titleOpts;
			} else {
				createNewTitleBlockAndAttach(chart, titleOpts);
			}
		} else if (titleBlock) {
			core_layouts.removeBox(chart, titleBlock);
			delete chart.titleBlock;
		}
	}
};

var plugins = {};
var filler = plugin_filler;
var legend = plugin_legend;
var title = plugin_title;
plugins.filler = filler;
plugins.legend = legend;
plugins.title = title;

/**
 * @namespace Chart
 */


core_controller.helpers = helpers$1;

// @todo dispatch these helpers into appropriated helpers/helpers.* file and write unit tests!
core_helpers();

core_controller._adapters = core_adapters;
core_controller.Animation = core_animation;
core_controller.animationService = core_animations;
core_controller.controllers = controllers;
core_controller.DatasetController = core_datasetController;
core_controller.defaults = core_defaults;
core_controller.Element = core_element;
core_controller.elements = elements;
core_controller.Interaction = core_interaction;
core_controller.layouts = core_layouts;
core_controller.platform = platform;
core_controller.plugins = core_plugins;
core_controller.Scale = core_scale;
core_controller.scaleService = core_scaleService;
core_controller.Ticks = core_ticks;
core_controller.Tooltip = core_tooltip;

// Register built-in scales

core_controller.helpers.each(scales, function(scale, type) {
	core_controller.scaleService.registerScaleType(type, scale, scale._defaults);
});

// Load to register built-in adapters (as side effects)


// Loading built-in plugins

for (var k in plugins) {
	if (plugins.hasOwnProperty(k)) {
		core_controller.plugins.register(plugins[k]);
	}
}

core_controller.platform.initialize();

var src = core_controller;
if (typeof window !== 'undefined') {
	window.Chart = core_controller;
}

// DEPRECATIONS

/**
 * Provided for backward compatibility, not available anymore
 * @namespace Chart.Chart
 * @deprecated since version 2.8.0
 * @todo remove at version 3
 * @private
 */
core_controller.Chart = core_controller;

/**
 * Provided for backward compatibility, not available anymore
 * @namespace Chart.Legend
 * @deprecated since version 2.1.5
 * @todo remove at version 3
 * @private
 */
core_controller.Legend = plugins.legend._element;

/**
 * Provided for backward compatibility, not available anymore
 * @namespace Chart.Title
 * @deprecated since version 2.1.5
 * @todo remove at version 3
 * @private
 */
core_controller.Title = plugins.title._element;

/**
 * Provided for backward compatibility, use Chart.plugins instead
 * @namespace Chart.pluginService
 * @deprecated since version 2.1.5
 * @todo remove at version 3
 * @private
 */
core_controller.pluginService = core_controller.plugins;

/**
 * Provided for backward compatibility, inheriting from Chart.PlugingBase has no
 * effect, instead simply create/register plugins via plain JavaScript objects.
 * @interface Chart.PluginBase
 * @deprecated since version 2.5.0
 * @todo remove at version 3
 * @private
 */
core_controller.PluginBase = core_controller.Element.extend({});

/**
 * Provided for backward compatibility, use Chart.helpers.canvas instead.
 * @namespace Chart.canvasHelpers
 * @deprecated since version 2.6.0
 * @todo remove at version 3
 * @private
 */
core_controller.canvasHelpers = core_controller.helpers.canvas;

/**
 * Provided for backward compatibility, use Chart.layouts instead.
 * @namespace Chart.layoutService
 * @deprecated since version 2.7.3
 * @todo remove at version 3
 * @private
 */
core_controller.layoutService = core_controller.layouts;

/**
 * Provided for backward compatibility, not available anymore.
 * @namespace Chart.LinearScaleBase
 * @deprecated since version 2.8
 * @todo remove at version 3
 * @private
 */
core_controller.LinearScaleBase = scale_linearbase;

/**
 * Provided for backward compatibility, instead we should create a new Chart
 * by setting the type in the config (`new Chart(id, {type: '{chart-type}'}`).
 * @deprecated since version 2.8.0
 * @todo remove at version 3
 */
core_controller.helpers.each(
	[
		'Bar',
		'Bubble',
		'Doughnut',
		'Line',
		'PolarArea',
		'Radar',
		'Scatter'
	],
	function(klass) {
		core_controller[klass] = function(ctx, cfg) {
			return new core_controller(ctx, core_controller.helpers.merge(cfg || {}, {
				type: klass.charAt(0).toLowerCase() + klass.slice(1)
			}));
		};
	}
);

return src;

})));


/***/ }),

/***/ "./node_modules/mdbootstrap/js/mdb.min.js":
/*!************************************************!*\
  !*** ./node_modules/mdbootstrap/js/mdb.min.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_0__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Material Design for Bootstrap 4
 *   Version: MDB PRO 4.14.0
 * 
 * 
 *   Copyright: Material Design for Bootstrap
 *   https://mdbootstrap.com/
 * 
 *   Read the license: https://mdbootstrap.com/general/license/
 * 
 * 
 *   Documentation: https://mdbootstrap.com/
 * 
 *   Getting started: https://mdbootstrap.com/docs/jquery/getting-started/download/
 * 
 *   Tutorials: https://mdbootstrap.com/education/bootstrap/
 * 
 *   Templates: https://mdbootstrap.com/templates/
 * 
 *   Support: https://mdbootstrap.com/support/
 * 
 *   Contact: office@mdbootstrap.com
 * 
 *   Attribution: Animate CSS, Twitter Bootstrap, Materialize CSS, Normalize CSS, Waves JS, WOW JS, Toastr, Chart.js, jquery.easing.js, velocity.js, chart.js, wow.js, scrolling-navbar.js, waves.js, forms-free.js, preloading.js, cards.js, character-counter.js, toastr.js, smooth-scroll.js, dropdown.js, buttons.js, sidenav.js, collapsible.js, range-input.js, file-input.js, material-select.js, picker.js, picker-date.js, picker-time.js, lightbox.js, jquery.sticky.js, scrollbar.js, chips.js, ofi.js, jarallax.js, jarallax-video.js, mdb-autocomplete.js, enhanced-modals.js, treeview.js
 */!function(t){var e={};function i(l){if(e[l])return e[l].exports;var n=e[l]={i:l,l:!1,exports:{}};return t[l].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,l){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:l})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var l=Object.create(null);if(i.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(l,n,function(e){return t[e]}.bind(null,n));return l},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=225)}([function(t,e,i){(function(e){var i=function(t){return t&&t.Math==Math&&t};t.exports=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof e&&e)||Function("return this")()}).call(this,i(54))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,i){var l=i(0),n=i(12),o=i(26),a=i(46),r=l.Symbol,s=n("wks");t.exports=function(t){return s[t]||(s[t]=a&&r[t]||(a?r:o)("Symbol."+t))}},function(t,e){var i={}.hasOwnProperty;t.exports=function(t,e){return i.call(t,e)}},function(t,e,i){var l=i(0),n=i(22).f,o=i(6),a=i(14),r=i(21),s=i(47),c=i(48);t.exports=function(t,e){var i,u,d,h,p,f=t.target,m=t.global,v=t.stat;if(i=m?l:v?l[f]||r(f,{}):(l[f]||{}).prototype)for(u in e){if(h=e[u],d=t.noTargetGet?(p=n(i,u))&&p.value:i[u],!c(m?u:f+(v?".":"#")+u,t.forced)&&void 0!==d){if(typeof h==typeof d)continue;s(h,d)}(t.sham||d&&d.sham)&&o(h,"sham",!0),a(i,u,h,t)}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,i){var l=i(7),n=i(9),o=i(18);t.exports=l?function(t,e,i){return n.f(t,e,o(1,i))}:function(t,e,i){return t[e]=i,t}},function(t,e,i){var l=i(1);t.exports=!l((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,i){var l=i(5);t.exports=function(t){if(!l(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,i){var l=i(7),n=i(33),o=i(8),a=i(20),r=Object.defineProperty;e.f=l?r:function(t,e,i){if(o(t),e=a(e,!0),o(i),n)try{return r(t,e,i)}catch(t){}if("get"in i||"set"in i)throw TypeError("Accessors not supported");return"value"in i&&(t[e]=i.value),t}},function(t,e,i){var l=i(27),n=i(13);t.exports=function(t){return l(n(t))}},function(t,e,i){var l=i(15),n=Math.min;t.exports=function(t){return t>0?n(l(t),9007199254740991):0}},function(t,e,i){var l=i(30),n=i(55);(t.exports=function(t,e){return n[t]||(n[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.3.2",mode:l?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,i){var l=i(0),n=i(12),o=i(6),a=i(3),r=i(21),s=i(34),c=i(28),u=c.get,d=c.enforce,h=String(s).split("toString");n("inspectSource",(function(t){return s.call(t)})),(t.exports=function(t,e,i,n){var s=!!n&&!!n.unsafe,c=!!n&&!!n.enumerable,u=!!n&&!!n.noTargetGet;"function"==typeof i&&("string"!=typeof e||a(i,"name")||o(i,"name",e),d(i).source=h.join("string"==typeof e?e:"")),t!==l?(s?!u&&t[e]&&(c=!0):delete t[e],c?t[e]=i:o(t,e,i)):c?t[e]=i:r(e,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||s.call(this)}))},function(t,e){var i=Math.ceil,l=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?l:i)(t)}},function(t,e,i){var l=i(13);t.exports=function(t){return Object(l(t))}},function(t,e){var i={}.toString;t.exports=function(t){return i.call(t).slice(8,-1)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports={}},function(t,e,i){var l=i(5);t.exports=function(t,e){if(!l(t))return t;var i,n;if(e&&"function"==typeof(i=t.toString)&&!l(n=i.call(t)))return n;if("function"==typeof(i=t.valueOf)&&!l(n=i.call(t)))return n;if(!e&&"function"==typeof(i=t.toString)&&!l(n=i.call(t)))return n;throw TypeError("Can't convert object to primitive value")}},function(t,e,i){var l=i(0),n=i(6);t.exports=function(t,e){try{n(l,t,e)}catch(i){l[t]=e}return e}},function(t,e,i){var l=i(7),n=i(40),o=i(18),a=i(10),r=i(20),s=i(3),c=i(33),u=Object.getOwnPropertyDescriptor;e.f=l?u:function(t,e){if(t=a(t),e=r(e,!0),c)try{return u(t,e)}catch(t){}if(s(t,e))return o(!n.f.call(t,e),t[e])}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,i){var l=i(57),n=i(27),o=i(16),a=i(11),r=i(42),s=[].push,c=function(t){var e=1==t,i=2==t,c=3==t,u=4==t,d=6==t,h=5==t||d;return function(p,f,m,v){for(var g,y,b=o(p),x=n(b),w=l(f,m,3),k=a(x.length),S=0,M=v||r,C=e?M(p,k):i?M(p,0):void 0;k>S;S++)if((h||S in x)&&(y=w(g=x[S],S,b),t))if(e)C[S]=y;else if(y)switch(t){case 3:return!0;case 5:return g;case 6:return S;case 2:s.call(C,g)}else if(u)return!1;return d?-1:c||u?u:C}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},function(t,e,i){var l=i(12),n=i(26),o=l("keys");t.exports=function(t){return o[t]||(o[t]=n(t))}},function(t,e){var i=0,l=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++i+l).toString(36)}},function(t,e,i){var l=i(1),n=i(17),o="".split;t.exports=l((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==n(t)?o.call(t,""):Object(t)}:Object},function(t,e,i){var l,n,o,a=i(56),r=i(0),s=i(5),c=i(6),u=i(3),d=i(25),h=i(19),p=r.WeakMap;if(a){var f=new p,m=f.get,v=f.has,g=f.set;l=function(t,e){return g.call(f,t,e),e},n=function(t){return m.call(f,t)||{}},o=function(t){return v.call(f,t)}}else{var y=d("state");h[y]=!0,l=function(t,e){return c(t,y,e),e},n=function(t){return u(t,y)?t[y]:{}},o=function(t){return u(t,y)}}t.exports={set:l,get:n,has:o,enforce:function(t){return o(t)?n(t):l(t,{})},getterFor:function(t){return function(e){var i;if(!s(e)||(i=n(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return i}}}},function(t,e,i){var l=i(37),n=i(23).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return l(t,n)}},function(t,e){t.exports=!1},function(t,e,i){var l=i(17);t.exports=Array.isArray||function(t){return"Array"==l(t)}},function(t,e,i){var l=i(45),n=i(0),o=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?o(l[t])||o(n[t]):l[t]&&l[t][e]||n[t]&&n[t][e]}},function(t,e,i){var l=i(7),n=i(1),o=i(36);t.exports=!l&&!n((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},function(t,e,i){var l=i(12);t.exports=l("native-function-to-string",Function.toString)},function(t,e,i){var l=i(8),n=i(63),o=i(23),a=i(19),r=i(64),s=i(36),c=i(25)("IE_PROTO"),u=function(){},d=function(){var t,e=s("iframe"),i=o.length;for(e.style.display="none",r.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),d=t.F;i--;)delete d.prototype[o[i]];return d()};t.exports=Object.create||function(t,e){var i;return null!==t?(u.prototype=l(t),i=new u,u.prototype=null,i[c]=t):i=d(),void 0===e?i:n(i,e)},a[c]=!0},function(t,e,i){var l=i(0),n=i(5),o=l.document,a=n(o)&&n(o.createElement);t.exports=function(t){return a?o.createElement(t):{}}},function(t,e,i){var l=i(3),n=i(10),o=i(39).indexOf,a=i(19);t.exports=function(t,e){var i,r=n(t),s=0,c=[];for(i in r)!l(a,i)&&l(r,i)&&c.push(i);for(;e.length>s;)l(r,i=e[s++])&&(~o(c,i)||c.push(i));return c}},function(t,e,i){var l=i(15),n=Math.max,o=Math.min;t.exports=function(t,e){var i=l(t);return i<0?n(i+e,0):o(i,e)}},function(t,e,i){var l=i(10),n=i(11),o=i(38),a=function(t){return function(e,i,a){var r,s=l(e),c=n(s.length),u=o(a,c);if(t&&i!=i){for(;c>u;)if((r=s[u++])!=r)return!0}else for(;c>u;u++)if((t||u in s)&&s[u]===i)return t||u||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},function(t,e,i){"use strict";var l={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!l.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:l},function(t,e,i){var l=i(37),n=i(23);t.exports=Object.keys||function(t){return l(t,n)}},function(t,e,i){var l=i(5),n=i(31),o=i(2)("species");t.exports=function(t,e){var i;return n(t)&&("function"!=typeof(i=t.constructor)||i!==Array&&!n(i.prototype)?l(i)&&null===(i=i[o])&&(i=void 0):i=void 0),new(void 0===i?Array:i)(0===e?0:e)}},function(t,e,i){"use strict";var l=i(4),n=i(24).find,o=i(51),a=!0;"find"in[]&&Array(1).find((function(){a=!1})),l({target:"Array",proto:!0,forced:a},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),o("find")},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,i){t.exports=i(0)},function(t,e,i){var l=i(1);t.exports=!!Object.getOwnPropertySymbols&&!l((function(){return!String(Symbol())}))},function(t,e,i){var l=i(3),n=i(53),o=i(22),a=i(9);t.exports=function(t,e){for(var i=n(e),r=a.f,s=o.f,c=0;c<i.length;c++){var u=i[c];l(t,u)||r(t,u,s(e,u))}}},function(t,e,i){var l=i(1),n=/#|\.prototype\./,o=function(t,e){var i=r[a(t)];return i==c||i!=s&&("function"==typeof e?l(e):!!e)},a=o.normalize=function(t){return String(t).replace(n,".").toLowerCase()},r=o.data={},s=o.NATIVE="N",c=o.POLYFILL="P";t.exports=o},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,i){var l=i(1),n=i(2)("species");t.exports=function(t){return!l((function(){var e=[];return(e.constructor={})[n]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e,i){var l=i(2),n=i(35),o=i(6),a=l("unscopables"),r=Array.prototype;null==r[a]&&o(r,a,n(null)),t.exports=function(t){r[a][t]=!0}},function(t,e,i){"use strict";var l=i(1);t.exports=function(t,e){var i=[][t];return!i||!l((function(){i.call(null,e||function(){throw 1},1)}))}},function(t,e,i){var l=i(32),n=i(29),o=i(44),a=i(8);t.exports=l("Reflect","ownKeys")||function(t){var e=n.f(a(t)),i=o.f;return i?e.concat(i(t)):e}},function(t,e){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(t){"object"==typeof window&&(i=window)}t.exports=i},function(t,e,i){var l=i(0),n=i(21),o=l["__core-js_shared__"]||n("__core-js_shared__",{});t.exports=o},function(t,e,i){var l=i(0),n=i(34),o=l.WeakMap;t.exports="function"==typeof o&&/native code/.test(n.call(o))},function(t,e,i){var l=i(49);t.exports=function(t,e,i){if(l(t),void 0===e)return t;switch(i){case 0:return function(){return t.call(e)};case 1:return function(i){return t.call(e,i)};case 2:return function(i,l){return t.call(e,i,l)};case 3:return function(i,l,n){return t.call(e,i,l,n)}}return function(){return t.apply(e,arguments)}}},function(t,e,i){"use strict";var l=i(10),n=i(51),o=i(61),a=i(28),r=i(87),s=a.set,c=a.getterFor("Array Iterator");t.exports=r(Array,"Array",(function(t,e){s(this,{type:"Array Iterator",target:l(t),index:0,kind:e})}),(function(){var t=c(this),e=t.target,i=t.kind,l=t.index++;return!e||l>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==i?{value:l,done:!1}:"values"==i?{value:e[l],done:!1}:{value:[l,e[l]],done:!1}}),"values"),o.Arguments=o.Array,n("keys"),n("values"),n("entries")},function(t,e,i){"use strict";var l,n=i(7),o=i(0),a=i(5),r=i(3),s=i(93),c=i(6),u=i(14),d=i(9).f,h=i(81),p=i(82),f=i(2),m=i(26),v=o.DataView,g=v&&v.prototype,y=o.Int8Array,b=y&&y.prototype,x=o.Uint8ClampedArray,w=x&&x.prototype,k=y&&h(y),S=b&&h(b),M=Object.prototype,C=M.isPrototypeOf,T=f("toStringTag"),A=m("TYPED_ARRAY_TAG"),O=!(!o.ArrayBuffer||!v),E=O&&!!p&&"Opera"!==s(o.opera),P=!1,I={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},_=function(t){return a(t)&&r(I,s(t))};for(l in I)o[l]||(E=!1);if((!E||"function"!=typeof k||k===Function.prototype)&&(k=function(){throw TypeError("Incorrect invocation")},E))for(l in I)o[l]&&p(o[l],k);if((!E||!S||S===M)&&(S=k.prototype,E))for(l in I)o[l]&&p(o[l].prototype,S);if(E&&h(w)!==S&&p(w,S),n&&!r(S,T))for(l in P=!0,d(S,T,{get:function(){return a(this)?this[A]:void 0}}),I)o[l]&&c(o[l],A,l);O&&p&&h(g)!==M&&p(g,M),t.exports={NATIVE_ARRAY_BUFFER:O,NATIVE_ARRAY_BUFFER_VIEWS:E,TYPED_ARRAY_TAG:P&&A,aTypedArray:function(t){if(_(t))return t;throw TypeError("Target is not a typed array")},aTypedArrayConstructor:function(t){if(p){if(C.call(k,t))return t}else for(var e in I)if(r(I,l)){var i=o[e];if(i&&(t===i||C.call(i,t)))return t}throw TypeError("Target is not a typed array constructor")},exportProto:function(t,e,i){if(n){if(i)for(var l in I){var a=o[l];a&&r(a.prototype,t)&&delete a.prototype[t]}S[t]&&!i||u(S,t,i?e:E&&b[t]||e)}},exportStatic:function(t,e,i){var l,a;if(n){if(p){if(i)for(l in I)(a=o[l])&&r(a,t)&&delete a[t];if(k[t]&&!i)return;try{return u(k,t,i?e:E&&y[t]||e)}catch(t){}}for(l in I)!(a=o[l])||a[t]&&!i||u(a,t,e)}},isView:function(t){var e=s(t);return"DataView"===e||r(I,e)},isTypedArray:_,TypedArray:k,TypedArrayPrototype:S}},function(t,e,i){var l=i(9).f,n=i(3),o=i(2)("toStringTag");t.exports=function(t,e,i){t&&!n(t=i?t:t.prototype,o)&&l(t,o,{configurable:!0,value:e})}},function(t,e){t.exports={}},function(t,e,i){"use strict";var l,n,o=i(83),a=RegExp.prototype.exec,r=String.prototype.replace,s=a,c=(l=/a/,n=/b*/g,a.call(l,"a"),a.call(n,"a"),0!==l.lastIndex||0!==n.lastIndex),u=void 0!==/()??/.exec("")[1];(c||u)&&(s=function(t){var e,i,l,n,s=this;return u&&(i=new RegExp("^"+s.source+"$(?!\\s)",o.call(s))),c&&(e=s.lastIndex),l=a.call(s,t),c&&l&&(s.lastIndex=s.global?l.index+l[0].length:e),u&&l&&l.length>1&&r.call(l[0],i,(function(){for(n=1;n<arguments.length-2;n++)void 0===arguments[n]&&(l[n]=void 0)})),l}),t.exports=s},function(t,e,i){var l=i(7),n=i(9),o=i(8),a=i(41);t.exports=l?Object.defineProperties:function(t,e){o(t);for(var i,l=a(e),r=l.length,s=0;r>s;)n.f(t,i=l[s++],e[i]);return t}},function(t,e,i){var l=i(32);t.exports=l("document","documentElement")},function(t,e,i){var l=i(14),n=i(101),o=Object.prototype;n!==o.toString&&l(o,"toString",n,{unsafe:!0})},function(t,e,i){"use strict";var l=i(4),n=i(39).indexOf,o=i(52),a=[].indexOf,r=!!a&&1/[1].indexOf(1,-0)<0,s=o("indexOf");l({target:"Array",proto:!0,forced:r||s},{indexOf:function(t){return r?a.apply(this,arguments)||0:n(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,i){"use strict";var l=i(20),n=i(9),o=i(18);t.exports=function(t,e,i){var a=l(e);a in t?n.f(t,a,o(0,i)):t[a]=i}},function(t,e,i){"use strict";var l=i(4),n=i(62);l({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},function(t,e,i){"use strict";var l=i(4),n=i(0),o=i(30),a=i(7),r=i(46),s=i(1),c=i(3),u=i(31),d=i(5),h=i(8),p=i(16),f=i(10),m=i(20),v=i(18),g=i(35),y=i(41),b=i(29),x=i(105),w=i(44),k=i(22),S=i(9),M=i(40),C=i(6),T=i(14),A=i(12),O=i(25),E=i(19),P=i(26),I=i(2),_=i(77),$=i(78),D=i(60),L=i(28),R=i(24).forEach,V=O("hidden"),F=I("toPrimitive"),W=L.set,j=L.getterFor("Symbol"),N=Object.prototype,z=n.Symbol,B=n.JSON,H=B&&B.stringify,Z=k.f,Y=S.f,X=x.f,U=M.f,G=A("symbols"),q=A("op-symbols"),K=A("string-to-symbol-registry"),Q=A("symbol-to-string-registry"),J=A("wks"),tt=n.QObject,et=!tt||!tt.prototype||!tt.prototype.findChild,it=a&&s((function(){return 7!=g(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(t,e,i){var l=Z(N,e);l&&delete N[e],Y(t,e,i),l&&t!==N&&Y(N,e,l)}:Y,lt=function(t,e){var i=G[t]=g(z.prototype);return W(i,{type:"Symbol",tag:t,description:e}),a||(i.description=e),i},nt=r&&"symbol"==typeof z.iterator?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof z},ot=function(t,e,i){t===N&&ot(q,e,i),h(t);var l=m(e,!0);return h(i),c(G,l)?(i.enumerable?(c(t,V)&&t[V][l]&&(t[V][l]=!1),i=g(i,{enumerable:v(0,!1)})):(c(t,V)||Y(t,V,v(1,{})),t[V][l]=!0),it(t,l,i)):Y(t,l,i)},at=function(t,e){h(t);var i=f(e),l=y(i).concat(ut(i));return R(l,(function(e){a&&!rt.call(i,e)||ot(t,e,i[e])})),t},rt=function(t){var e=m(t,!0),i=U.call(this,e);return!(this===N&&c(G,e)&&!c(q,e))&&(!(i||!c(this,e)||!c(G,e)||c(this,V)&&this[V][e])||i)},st=function(t,e){var i=f(t),l=m(e,!0);if(i!==N||!c(G,l)||c(q,l)){var n=Z(i,l);return!n||!c(G,l)||c(i,V)&&i[V][l]||(n.enumerable=!0),n}},ct=function(t){var e=X(f(t)),i=[];return R(e,(function(t){c(G,t)||c(E,t)||i.push(t)})),i},ut=function(t){var e=t===N,i=X(e?q:f(t)),l=[];return R(i,(function(t){!c(G,t)||e&&!c(N,t)||l.push(G[t])})),l};r||(T((z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=P(t),i=function(t){this===N&&i.call(q,t),c(this,V)&&c(this[V],e)&&(this[V][e]=!1),it(this,e,v(1,t))};return a&&et&&it(N,e,{configurable:!0,set:i}),lt(e,t)}).prototype,"toString",(function(){return j(this).tag})),M.f=rt,S.f=ot,k.f=st,b.f=x.f=ct,w.f=ut,a&&(Y(z.prototype,"description",{configurable:!0,get:function(){return j(this).description}}),o||T(N,"propertyIsEnumerable",rt,{unsafe:!0})),_.f=function(t){return lt(I(t),t)}),l({global:!0,wrap:!0,forced:!r,sham:!r},{Symbol:z}),R(y(J),(function(t){$(t)})),l({target:"Symbol",stat:!0,forced:!r},{for:function(t){var e=String(t);if(c(K,e))return K[e];var i=z(e);return K[e]=i,Q[i]=e,i},keyFor:function(t){if(!nt(t))throw TypeError(t+" is not a symbol");if(c(Q,t))return Q[t]},useSetter:function(){et=!0},useSimple:function(){et=!1}}),l({target:"Object",stat:!0,forced:!r,sham:!a},{create:function(t,e){return void 0===e?g(t):at(g(t),e)},defineProperty:ot,defineProperties:at,getOwnPropertyDescriptor:st}),l({target:"Object",stat:!0,forced:!r},{getOwnPropertyNames:ct,getOwnPropertySymbols:ut}),l({target:"Object",stat:!0,forced:s((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(p(t))}}),B&&l({target:"JSON",stat:!0,forced:!r||s((function(){var t=z();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}))},{stringify:function(t){for(var e,i,l=[t],n=1;arguments.length>n;)l.push(arguments[n++]);if(i=e=l[1],(d(e)||void 0!==t)&&!nt(t))return u(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!nt(e))return e}),l[1]=e,H.apply(B,l)}}),z.prototype[F]||C(z.prototype,F,z.prototype.valueOf),D(z,"Symbol"),E[V]=!0},function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(t,e,i){"use strict";var l=i(4),n=i(7),o=i(0),a=i(3),r=i(5),s=i(9).f,c=i(47),u=o.Symbol;if(n&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},h=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof h?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};c(h,u);var p=h.prototype=u.prototype;p.constructor=h;var f=p.toString,m="Symbol(test)"==String(u("test")),v=/^Symbol\((.*)\)[^)]+$/;s(p,"description",{configurable:!0,get:function(){var t=r(this)?this.valueOf():this,e=f.call(t);if(a(d,t))return"";var i=m?e.slice(7,-1):e.replace(v,"$1");return""===i?void 0:i}}),l({global:!0,forced:!0},{Symbol:h})}},function(t,e,i){i(78)("iterator")},function(t,e,i){"use strict";var l=i(79).charAt,n=i(28),o=i(87),a=n.set,r=n.getterFor("String Iterator");o(String,"String",(function(t){a(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,e=r(this),i=e.string,n=e.index;return n>=i.length?{value:void 0,done:!0}:(t=l(i,n),e.index+=t.length,{value:t,done:!1})}))},function(t,e,i){var l=i(0),n=i(91),o=i(58),a=i(6),r=i(2),s=r("iterator"),c=r("toStringTag"),u=o.values;for(var d in n){var h=l[d],p=h&&h.prototype;if(p){if(p[s]!==u)try{a(p,s,u)}catch(t){p[s]=u}if(p[c]||a(p,c,d),n[d])for(var f in o)if(p[f]!==o[f])try{a(p,f,o[f])}catch(t){p[f]=o[f]}}}},function(t,e,i){"use strict";var l=i(4),n=i(27),o=i(10),a=i(52),r=[].join,s=n!=Object,c=a("join",",");l({target:"Array",proto:!0,forced:s||c},{join:function(t){return r.call(o(this),void 0===t?",":t)}})},function(t,e,i){"use strict";var l=i(4),n=i(1),o=i(31),a=i(5),r=i(16),s=i(11),c=i(67),u=i(42),d=i(50),h=i(2)("isConcatSpreadable"),p=!n((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),f=d("concat"),m=function(t){if(!a(t))return!1;var e=t[h];return void 0!==e?!!e:o(t)};l({target:"Array",proto:!0,forced:!p||!f},{concat:function(t){var e,i,l,n,o,a=r(this),d=u(a,0),h=0;for(e=-1,l=arguments.length;e<l;e++)if(o=-1===e?a:arguments[e],m(o)){if(h+(n=s(o.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(i=0;i<n;i++,h++)i in o&&c(d,h,o[i])}else{if(h>=9007199254740991)throw TypeError("Maximum allowed index exceeded");c(d,h++,o)}return d.length=h,d}})},function(t,e,i){e.f=i(2)},function(t,e,i){var l=i(45),n=i(3),o=i(77),a=i(9).f;t.exports=function(t){var e=l.Symbol||(l.Symbol={});n(e,t)||a(e,t,{value:o.f(t)})}},function(t,e,i){var l=i(15),n=i(13),o=function(t){return function(e,i){var o,a,r=String(n(e)),s=l(i),c=r.length;return s<0||s>=c?t?"":void 0:(o=r.charCodeAt(s))<55296||o>56319||s+1===c||(a=r.charCodeAt(s+1))<56320||a>57343?t?r.charAt(s):o:t?r.slice(s,s+2):a-56320+(o-55296<<10)+65536}};t.exports={codeAt:o(!1),charAt:o(!0)}},function(t,e){(function(e){t.exports=e}).call(this,{})},function(t,e,i){var l=i(3),n=i(16),o=i(25),a=i(108),r=o("IE_PROTO"),s=Object.prototype;t.exports=a?Object.getPrototypeOf:function(t){return t=n(t),l(t,r)?t[r]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,i){var l=i(8),n=i(99);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,i={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(i,[]),e=i instanceof Array}catch(t){}return function(i,o){return l(i),n(o),e?t.call(i,o):i.__proto__=o,i}}():void 0)},function(t,e,i){"use strict";var l=i(8);t.exports=function(){var t=l(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,i){var l=i(14),n=Date.prototype,o=n.toString,a=n.getTime;new Date(NaN)+""!="Invalid Date"&&l(n,"toString",(function(){var t=a.call(this);return t==t?o.call(this):"Invalid Date"}))},function(t,e,i){var l=i(13),n="["+i(70)+"]",o=RegExp("^"+n+n+"*"),a=RegExp(n+n+"*$"),r=function(t){return function(e){var i=String(l(e));return 1&t&&(i=i.replace(o,"")),2&t&&(i=i.replace(a,"")),i}};t.exports={start:r(1),end:r(2),trim:r(3)}},function(t,e,i){"use strict";var l=i(89),n=i(8),o=i(16),a=i(11),r=i(15),s=i(13),c=i(94),u=i(90),d=Math.max,h=Math.min,p=Math.floor,f=/\$([$&'`]|\d\d?|<[^>]*>)/g,m=/\$([$&'`]|\d\d?)/g;l("replace",2,(function(t,e,i){return[function(i,l){var n=s(this),o=null==i?void 0:i[t];return void 0!==o?o.call(i,n,l):e.call(String(n),i,l)},function(t,o){var s=i(e,t,this,o);if(s.done)return s.value;var p=n(t),f=String(this),m="function"==typeof o;m||(o=String(o));var v=p.global;if(v){var g=p.unicode;p.lastIndex=0}for(var y=[];;){var b=u(p,f);if(null===b)break;if(y.push(b),!v)break;""===String(b[0])&&(p.lastIndex=c(f,a(p.lastIndex),g))}for(var x,w="",k=0,S=0;S<y.length;S++){b=y[S];for(var M=String(b[0]),C=d(h(r(b.index),f.length),0),T=[],A=1;A<b.length;A++)T.push(void 0===(x=b[A])?x:String(x));var O=b.groups;if(m){var E=[M].concat(T,C,f);void 0!==O&&E.push(O);var P=String(o.apply(void 0,E))}else P=l(M,f,C,T,O,o);C>=k&&(w+=f.slice(k,C)+P,k=C+M.length)}return w+f.slice(k)}];function l(t,i,l,n,a,r){var s=l+t.length,c=n.length,u=m;return void 0!==a&&(a=o(a),u=f),e.call(r,u,(function(e,o){var r;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return i.slice(0,l);case"'":return i.slice(s);case"<":r=a[o.slice(1,-1)];break;default:var u=+o;if(0===u)return e;if(u>c){var d=p(u/10);return 0===d?e:d<=c?void 0===n[d-1]?o.charAt(1):n[d-1]+o.charAt(1):e}r=n[u-1]}return void 0===r?"":r}))}}))},function(t,e,i){"use strict";var l=i(4),n=i(107),o=i(81),a=i(82),r=i(60),s=i(6),c=i(14),u=i(2),d=i(30),h=i(61),p=i(88),f=p.IteratorPrototype,m=p.BUGGY_SAFARI_ITERATORS,v=u("iterator"),g=function(){return this};t.exports=function(t,e,i,u,p,y,b){n(i,e,u);var x,w,k,S=function(t){if(t===p&&O)return O;if(!m&&t in T)return T[t];switch(t){case"keys":case"values":case"entries":return function(){return new i(this,t)}}return function(){return new i(this)}},M=e+" Iterator",C=!1,T=t.prototype,A=T[v]||T["@@iterator"]||p&&T[p],O=!m&&A||S(p),E="Array"==e&&T.entries||A;if(E&&(x=o(E.call(new t)),f!==Object.prototype&&x.next&&(d||o(x)===f||(a?a(x,f):"function"!=typeof x[v]&&s(x,v,g)),r(x,M,!0,!0),d&&(h[M]=g))),"values"==p&&A&&"values"!==A.name&&(C=!0,O=function(){return A.call(this)}),d&&!b||T[v]===O||s(T,v,O),h[e]=O,p)if(w={values:S("values"),keys:y?O:S("keys"),entries:S("entries")},b)for(k in w)!m&&!C&&k in T||c(T,k,w[k]);else l({target:e,proto:!0,forced:m||C},w);return w}},function(t,e,i){"use strict";var l,n,o,a=i(81),r=i(6),s=i(3),c=i(2),u=i(30),d=c("iterator"),h=!1;[].keys&&("next"in(o=[].keys())?(n=a(a(o)))!==Object.prototype&&(l=n):h=!0),null==l&&(l={}),u||s(l,d)||r(l,d,(function(){return this})),t.exports={IteratorPrototype:l,BUGGY_SAFARI_ITERATORS:h}},function(t,e,i){"use strict";var l=i(6),n=i(14),o=i(1),a=i(2),r=i(62),s=a("species"),c=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var i="ab".split(t);return 2!==i.length||"a"!==i[0]||"b"!==i[1]}));t.exports=function(t,e,i,d){var h=a(t),p=!o((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),f=p&&!o((function(){var e=!1,i=/a/;return i.exec=function(){return e=!0,null},"split"===t&&(i.constructor={},i.constructor[s]=function(){return i}),i[h](""),!e}));if(!p||!f||"replace"===t&&!c||"split"===t&&!u){var m=/./[h],v=i(h,""[t],(function(t,e,i,l,n){return e.exec===r?p&&!n?{done:!0,value:m.call(e,i,l)}:{done:!0,value:t.call(i,e,l)}:{done:!1}})),g=v[0],y=v[1];n(String.prototype,t,g),n(RegExp.prototype,h,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)}),d&&l(RegExp.prototype[h],"sham",!0)}}},function(t,e,i){var l=i(17),n=i(62);t.exports=function(t,e){var i=t.exec;if("function"==typeof i){var o=i.call(t,e);if("object"!=typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==l(t))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(t,e)}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,i){"use strict";var l=i(4),n=i(24).filter;l({target:"Array",proto:!0,forced:!i(50)("filter")},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,i){var l=i(17),n=i(2)("toStringTag"),o="Arguments"==l(function(){return arguments}());t.exports=function(t){var e,i,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),n))?i:o?l(e):"Object"==(a=l(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,i){"use strict";var l=i(79).charAt;t.exports=function(t,e,i){return e+(i?l(t,e).length:1)}},function(t,e,i){"use strict";var l=i(14),n=i(8),o=i(1),a=i(83),r=RegExp.prototype,s=r.toString,c=o((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),u="toString"!=s.name;(c||u)&&l(RegExp.prototype,"toString",(function(){var t=n(this),e=String(t.source),i=t.flags;return"/"+e+"/"+String(void 0===i&&t instanceof RegExp&&!("flags"in r)?a.call(t):i)}),{unsafe:!0})},function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(t,e,i){"use strict";var l=i(4),n=i(24).map;l({target:"Array",proto:!0,forced:!i(50)("map")},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,i){"use strict";var l=i(89),n=i(102),o=i(8),a=i(13),r=i(106),s=i(94),c=i(11),u=i(90),d=i(62),h=i(1),p=[].push,f=Math.min,m=!h((function(){return!RegExp(4294967295,"y")}));l("split",2,(function(t,e,i){var l;return l="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var l=String(a(this)),o=void 0===i?4294967295:i>>>0;if(0===o)return[];if(void 0===t)return[l];if(!n(t))return e.call(l,t,o);for(var r,s,c,u=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,m=new RegExp(t.source,h+"g");(r=d.call(m,l))&&!((s=m.lastIndex)>f&&(u.push(l.slice(f,r.index)),r.length>1&&r.index<l.length&&p.apply(u,r.slice(1)),c=r[0].length,f=s,u.length>=o));)m.lastIndex===r.index&&m.lastIndex++;return f===l.length?!c&&m.test("")||u.push(""):u.push(l.slice(f)),u.length>o?u.slice(0,o):u}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:e.call(this,t,i)}:e,[function(e,i){var n=a(this),o=null==e?void 0:e[t];return void 0!==o?o.call(e,n,i):l.call(String(n),e,i)},function(t,n){var a=i(l,t,this,n,l!==e);if(a.done)return a.value;var d=o(t),h=String(this),p=r(d,RegExp),v=d.unicode,g=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(m?"y":"g"),y=new p(m?d:"^(?:"+d.source+")",g),b=void 0===n?4294967295:n>>>0;if(0===b)return[];if(0===h.length)return null===u(y,h)?[h]:[];for(var x=0,w=0,k=[];w<h.length;){y.lastIndex=m?w:0;var S,M=u(y,m?h:h.slice(w));if(null===M||(S=f(c(y.lastIndex+(m?0:w)),h.length))===x)w=s(h,w,v);else{if(k.push(h.slice(x,w)),k.length===b)return k;for(var C=1;C<=M.length-1;C++)if(k.push(M[C]),k.length===b)return k;w=x=S}}return k.push(h.slice(x)),k}]}),!m)},function(t,e,i){var l=i(5);t.exports=function(t){if(!l(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,i){"use strict";var l=i(4),n=i(5),o=i(31),a=i(38),r=i(11),s=i(10),c=i(67),u=i(50),d=i(2)("species"),h=[].slice,p=Math.max;l({target:"Array",proto:!0,forced:!u("slice")},{slice:function(t,e){var i,l,u,f=s(this),m=r(f.length),v=a(t,m),g=a(void 0===e?m:e,m);if(o(f)&&("function"!=typeof(i=f.constructor)||i!==Array&&!o(i.prototype)?n(i)&&null===(i=i[d])&&(i=void 0):i=void 0,i===Array||void 0===i))return h.call(f,v,g);for(l=new(void 0===i?Array:i)(p(g-v,0)),u=0;v<g;v++,u++)v in f&&c(l,u,f[v]);return l.length=u,l}})},function(t,e,i){"use strict";var l=i(93),n={};n[i(2)("toStringTag")]="z",t.exports="[object z]"!==String(n)?function(){return"[object "+l(this)+"]"}:n.toString},function(t,e,i){var l=i(5),n=i(17),o=i(2)("match");t.exports=function(t){var e;return l(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==n(t))}},function(t,e,i){"use strict";var l=i(4),n=i(109);l({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},function(t,e,i){var l=i(0),n=i(91),o=i(109),a=i(6);for(var r in n){var s=l[r],c=s&&s.prototype;if(c&&c.forEach!==o)try{a(c,"forEach",o)}catch(t){c.forEach=o}}},function(t,e,i){var l=i(10),n=i(29).f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?function(t){try{return n(t)}catch(t){return a.slice()}}(t):n(l(t))}},function(t,e,i){var l=i(8),n=i(49),o=i(2)("species");t.exports=function(t,e){var i,a=l(t).constructor;return void 0===a||null==(i=l(a)[o])?e:n(i)}},function(t,e,i){"use strict";var l=i(88).IteratorPrototype,n=i(35),o=i(18),a=i(60),r=i(61),s=function(){return this};t.exports=function(t,e,i){var c=e+" Iterator";return t.prototype=n(l,{next:o(1,i)}),a(t,c,!1,!0),r[c]=s,t}},function(t,e,i){var l=i(1);t.exports=!l((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,e,i){"use strict";var l=i(24).forEach,n=i(52);t.exports=n("forEach")?function(t){return l(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},function(t,e,i){"use strict";var l=i(4),n=i(38),o=i(15),a=i(11),r=i(16),s=i(42),c=i(67),u=i(50),d=Math.max,h=Math.min;l({target:"Array",proto:!0,forced:!u("splice")},{splice:function(t,e){var i,l,u,p,f,m,v=r(this),g=a(v.length),y=n(t,g),b=arguments.length;if(0===b?i=l=0:1===b?(i=0,l=g-y):(i=b-2,l=h(d(o(e),0),g-y)),g+i-l>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(u=s(v,l),p=0;p<l;p++)(f=y+p)in v&&c(u,p,v[f]);if(u.length=l,i<l){for(p=y;p<g-l;p++)m=p+i,(f=p+l)in v?v[m]=v[f]:delete v[m];for(p=g;p>g-l+i;p--)delete v[p-1]}else if(i>l)for(p=g-l;p>y;p--)m=p+i-1,(f=p+l-1)in v?v[m]=v[f]:delete v[m];for(p=0;p<i;p++)v[p+y]=arguments[p+2];return v.length=g-l+i,u}})},function(t,e,i){"use strict";var l=i(7),n=i(0),o=i(48),a=i(14),r=i(3),s=i(17),c=i(114),u=i(20),d=i(1),h=i(35),p=i(29).f,f=i(22).f,m=i(9).f,v=i(85).trim,g=n.Number,y=g.prototype,b="Number"==s(h(y)),x=function(t){var e,i,l,n,o,a,r,s,c=u(t,!1);if("string"==typeof c&&c.length>2)if(43===(e=(c=v(c)).charCodeAt(0))||45===e){if(88===(i=c.charCodeAt(2))||120===i)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:l=2,n=49;break;case 79:case 111:l=8,n=55;break;default:return+c}for(a=(o=c.slice(2)).length,r=0;r<a;r++)if((s=o.charCodeAt(r))<48||s>n)return NaN;return parseInt(o,l)}return+c};if(o("Number",!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var w,k=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof k&&(b?d((function(){y.valueOf.call(i)})):"Number"!=s(i))?c(new g(x(e)),i,k):x(e)},S=l?p(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),M=0;S.length>M;M++)r(g,w=S[M])&&!r(k,w)&&m(k,w,f(g,w));k.prototype=y,y.constructor=k,a(n,"Number",k)}},function(t,e,i){var l=i(4),n=i(16),o=i(41);l({target:"Object",stat:!0,forced:i(1)((function(){o(1)}))},{keys:function(t){return o(n(t))}})},function(t,e,i){"use strict";var l=i(4),n=i(85).trim;l({target:"String",proto:!0,forced:i(122)("trim")},{trim:function(){return n(this)}})},function(t,e,i){var l=i(5),n=i(82);t.exports=function(t,e,i){var o,a;return n&&"function"==typeof(o=e.constructor)&&o!==i&&l(a=o.prototype)&&a!==i.prototype&&n(t,a),t}},function(t,e,i){var l=i(4),n=i(125);l({global:!0,forced:parseFloat!=n},{parseFloat:n})},function(t,e,i){"use strict";var l=i(89),n=i(8),o=i(11),a=i(13),r=i(94),s=i(90);l("match",1,(function(t,e,i){return[function(e){var i=a(this),l=null==e?void 0:e[t];return void 0!==l?l.call(e,i):new RegExp(e)[t](String(i))},function(t){var l=i(e,t,this);if(l.done)return l.value;var a=n(t),c=String(this);if(!a.global)return s(a,c);var u=a.unicode;a.lastIndex=0;for(var d,h=[],p=0;null!==(d=s(a,c));){var f=String(d[0]);h[p]=f,""===f&&(a.lastIndex=r(c,o(a.lastIndex),u)),p++}return 0===p?null:h}]}))},function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return n}));i(76),i(92),i(43),i(66),i(75),i(68),i(86),i(98),i(113);function l(t,e){for(var i=0;i<e.length;i++){var l=e[i];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}var n=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.view=e}var e,i,n;return e=t,(i=[{key:"destroy",value:function(){var t=this.view.$nativeSelect.data("select-id");this.view.$nativeSelect.data("select-id",null).removeClass("initialized"),this.view.$nativeSelect.parent().find("span.caret").remove(),this.view.$nativeSelect.parent().find("input").remove(),this.view.$nativeSelect.hasClass("select-wrapper")&&this.view.$nativeSelect.find("select").unwrap(),$("ul#select-options-".concat(t)).remove()}},{key:"render",value:function(){this.setWrapperClasses(),this.setMaterialSelectInitialValue(),this.view.$nativeSelect.data("select-id",this.view.properties.id),this.view.$nativeSelect.before(this.view.$selectWrapper),this.view.options.showResetButton&&this.appendResetButton(),this.appendDropdownIcon(),this.appendMaterialSelect(),this.appendMaterialOptionsList(),this.appendNativeSelect(),this.appendSelectLabel(),this.appendCustomTemplateParts(),this.shouldValidate&&this.appendValidationFeedbackElements(),this.isRequired&&this.enableValidation(),this.isDisabled||(this.setMaterialOptionsListMaxHeight(),this.view.dropdown=this.view.$materialSelect.dropdown({hover:!1,closeOnClick:!1,resetScroll:!1})),this.shouldInheritTabindex&&this.view.$materialSelect.attr("tabindex",this.view.$nativeSelect.attr("tabindex")),this.isDefaultMaterialInput&&this.view.$mainLabel.css("top","-7px"),this.isCustomSelect&&this.view.$materialSelect.css({display:"inline-block",width:"100%",height:"calc(1.5em + .75rem + 2px)",padding:".375rem 1.75rem .375rem .75rem",fontSize:"1rem",lineHeight:"1.5",backgroundColor:"#fff",border:"1px solid #ced4da"}),this.addAccessibilityAttributes(),this.markInitialized()}},{key:"setWrapperClasses",value:function(){this.isDefaultMaterialInput?this.view.$selectWrapper.addClass(this.view.$nativeSelect.attr("class").split(" ").filter((function(t){return"md-form"!==t})).join(" ")).css({marginTop:"1.5rem",marginBottom:"1.5rem"}):this.view.$selectWrapper.addClass(this.view.$nativeSelect.attr("class"))}},{key:"setMaterialSelectInitialValue",value:function(){if(this.view.options.placeholder)this.view.$materialSelect.attr("placeholder",this.view.options.placeholder),this.view.$nativeSelect.find('option[value=""][selected][disabled][data-mdb-placeholder]').length||this.view.$nativeSelect.prepend('<option value="" selected disabled data-mdb-placeholder></option>');else{var t=this.view.$materialSelectInitialOption.replace(/"/g,"&quot;").replace(/  +/g," ").trim();this.view.$materialSelect.val(t)}}},{key:"appendDropdownIcon",value:function(){this.isDisabled&&this.view.$dropdownIcon.addClass("disabled"),this.view.$selectWrapper.append(this.view.$dropdownIcon)}},{key:"appendResetButton",value:function(){this.isDisabled&&this.view.$btnReset.addClass("disabled"),-1===this.view.$nativeSelect.get(0).selectedIndex&&this.view.$btnReset.hide(),this.view.$selectWrapper.append(this.view.$btnReset)}},{key:"appendMaterialSelect",value:function(){this.view.$selectWrapper.append(this.view.$materialSelect)}},{key:"appendMaterialOptionsList",value:function(){this.isSearchable&&this.appendSearchInputOption(),this.isEditable&&this.isSearchable&&this.appendAddOptionBtn(),this.buildMaterialOptions(),this.isMultiple&&this.appendToggleAllCheckbox(),this.view.$selectWrapper.append(this.view.$materialOptionsList)}},{key:"appendNativeSelect",value:function(){this.view.$nativeSelect.appendTo(this.view.$selectWrapper)}},{key:"appendSelectLabel",value:function(){(this.view.$materialSelect.val()||this.view.options.placeholder)&&this.view.$mainLabel.addClass("active"),this.view.$mainLabel[this.isDisabled?"addClass":"removeClass"]("disabled"),this.view.$mainLabel.appendTo(this.view.$selectWrapper)}},{key:"appendCustomTemplateParts",value:function(){var t=this;this.view.$customTemplateParts.each((function(e,i){$(i).appendTo(t.view.$materialOptionsList).wrap("<li></li>")})),this.view.$btnSave.appendTo(this.view.$selectWrapper).clone().appendTo(this.view.$materialOptionsList)}},{key:"appendValidationFeedbackElements",value:function(){this.view.$validFeedback.insertAfter(this.view.$selectWrapper),this.view.$invalidFeedback.insertAfter(this.view.$selectWrapper)}},{key:"enableValidation",value:function(){this.view.$nativeSelect.css({position:"absolute",top:"1rem",left:"0",height:"0",width:"0",opacity:"0",padding:"0","pointer-events":"none"}),-1===this.view.$nativeSelect.attr("style").indexOf("inline!important")&&this.view.$nativeSelect.attr("style","".concat(this.view.$nativeSelect.attr("style")," display: inline!important;")),this.view.$nativeSelect.attr("tabindex",-1),this.view.$nativeSelect.data("inherit-tabindex",!1)}},{key:"setMaterialOptionsListMaxHeight",value:function(){var t=$("<div />").appendTo($("body"));t.css({position:"absolute !important",visibility:"hidden !important",display:"block !important"}),this.view.$materialOptionsList.show();var e=this.view.$materialOptionsList.clone().appendTo(t),i=this.view.options.visibleOptions,l=0,n=e.find("li").not(".disabled"),o=""===n.first().text().trim()?n.eq(1).height():n.first().height(),a=n.length;if(this.isSearchable&&(l+=this.view.$searchInput.height()),this.isMultiple&&(l+=this.view.$toggleAll.height()),this.view.$materialOptionsList.hide(),t.remove(),i>=0&&i<a){var r=o*i+l;this.view.$materialOptionsList.css("max-height",r),this.view.$materialSelect.data("maxheight",r)}}},{key:"addAccessibilityAttributes",value:function(){this.view.$materialSelect.attr({role:this.isSearchable?"combobox":"listbox","aria-multiselectable":this.isMultiple,"aria-disabled":this.isDisabled,"aria-required":this.isRequired,"aria-labelledby":this.view.$mainLabel.attr("id"),"aria-haspopup":!0,"aria-expanded":!1}),this.view.$searchInput&&this.view.$searchInput.attr("role","searchbox"),this.view.$materialOptionsList.find("li").each((function(){var t=$(this);t.attr({role:"option","aria-selected":t.hasClass("active"),"aria-disabled":t.hasClass("disabled")})}))}},{key:"markInitialized",value:function(){this.view.$nativeSelect.addClass("initialized")}},{key:"appendSearchInputOption",value:function(){var t=this.view.$nativeSelect.attr("searchable"),e=this.isDefaultMaterialInput?"":"md-form",i=this.isDefaultMaterialInput?"select-default mb-2":"";this.view.$searchInput=$('<span class="search-wrap ml-2"><div class="'.concat(e,' mt-0"><input type="text" class="search w-100 d-block ').concat(i,'" tabindex="-1" placeholder="').concat(t,'"></div></span>')),this.view.$materialOptionsList.append(this.view.$searchInput),this.view.$searchInput.on("click",(function(t){return t.stopPropagation()}))}},{key:"appendAddOptionBtn",value:function(){this.view.$searchInput.append(this.view.$addOptionBtn)}},{key:"buildMaterialOptions",value:function(){var t=this;this.view.$nativeSelectChildren.each((function(e,i){var l=$(i);if(l.is("option"))t.buildSingleOption(l,t.isMultiple?"multiple":"");else if(l.is("optgroup")){var n=$('<li class="optgroup"><span>'.concat(l.attr("label"),"</span></li>"));t.view.$materialOptionsList.append(n),l.children("option").each((function(e,i){t.buildSingleOption($(i),"optgroup-option")}))}}))}},{key:"appendToggleAllCheckbox",value:function(){var t=this.view.$materialOptionsList.find("li").first();t.hasClass("disabled")&&t.find("input").prop("disabled")?t.after(this.view.$toggleAll):this.view.$materialOptionsList.find("li").first().before(this.view.$toggleAll)}},{key:"addNewOption",value:function(){var t=this.view.$searchInput.find("input").val(),e=$('<option value="'.concat(t.toLowerCase(),'" selected>').concat(t,"</option>")).prop("selected",!0);this.isMultiple||this.view.$nativeSelectChildren.each((function(t,e){$(e).attr("selected",!1)})),this.view.$nativeSelect.append(e)}},{key:"buildSingleOption",value:function(t,e){var i=t.is(":disabled")?"disabled":"",l=t.is(":selected")?"active":"",n="optgroup-option"===e?"optgroup-option":"",o=t.data("icon"),a=t.data("fas")?'<i class="fa-pull-right m-2 fas fa-'.concat(t.data("fas")," ").concat(this.view.options.fasClasses,'"></i> '):"",r=t.data("far")?'<i class="fa-pull-right m-2 far fa-'.concat(t.data("far")," ").concat(this.view.options.farClasses,'"></i> '):"",s=t.data("fab")?'<i class="fa-pull-right m-2 fab fa-'.concat(t.data("fab")," ").concat(this.view.options.fabClasses,'"></i> '):"",c=t.attr("class"),u=o?'<img alt="" src="'.concat(o,'" class="').concat(c,'">'):"",d=this.isMultiple?'<input type="checkbox" class="form-check-input" '.concat(i,"/><label></label>"):"",h=t.data("secondary-text")?'<p class="text-muted pt-0 mb-0" disabled>'.concat(t.data("secondary-text"),"</p>"):"";this.view.$materialOptionsList.append($('<li class="'.concat(i," ").concat(l," ").concat(n,'">').concat(u,'<span class="filtrable ').concat(this.view.options.copyClassesOption?c:"",'">').concat(d," ").concat(t.html()," ").concat(a," ").concat(r," ").concat(s," ").concat(h,"</span></li>")))}},{key:"shouldValidate",get:function(){return this.view.options.validate}},{key:"shouldInheritTabindex",get:function(){return!1!==this.view.$nativeSelect.data("inherit-tabindex")}},{key:"isMultiple",get:function(){return this.view.isMultiple}},{key:"isSearchable",get:function(){return this.view.isSearchable}},{key:"isRequired",get:function(){return this.view.isRequired}},{key:"isEditable",get:function(){return this.view.isEditable}},{key:"isDisabled",get:function(){return this.view.isDisabled}},{key:"isDefaultMaterialInput",get:function(){return this.view.options.defaultMaterialInput}},{key:"isCustomSelect",get:function(){return this.view.$materialSelect.hasClass("custom-select")&&this.view.$materialSelect.hasClass("select-dropdown")}}])&&l(e.prototype,i),n&&l(e,n),t}()},function(t,e){t.exports=jQuery},function(t,e,i){"use strict";var l=i(4),n=i(39).includes,o=i(51);l({target:"Array",proto:!0},{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},function(t,e,i){"use strict";var l=i(4),n=i(126),o=i(13);l({target:"String",proto:!0,forced:!i(127)("includes")},{includes:function(t){return!!~String(o(this)).indexOf(n(t),arguments.length>1?arguments[1]:void 0)}})},function(t,e,i){var l=i(7),n=i(9).f,o=Function.prototype,a=o.toString,r=/^\s*function ([^ (]*)/;!l||"name"in o||n(o,"name",{configurable:!0,get:function(){try{return a.call(this).match(r)[1]}catch(t){return""}}})},function(t,e,i){var l=i(1),n=i(70);t.exports=function(t){return l((function(){return!!n[t]()||"​᠎"!="​᠎"[t]()||n[t].name!==t}))}},function(t,e,i){var l=i(4),n=i(140);l({global:!0,forced:parseInt!=n},{parseInt:n})},function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return o}));i(76),i(92),i(43),i(119),i(66),i(97),i(112),i(68),i(120),i(86),i(113);var l=i(117);function n(t,e){for(var i=0;i<e.length;i++){var l=e[i];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}var o=function(){function t(e,i){var n=i.options,o=i.properties.id;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.properties={id:o,isMultiple:Boolean(e.attr("multiple")),isSearchable:Boolean(e.attr("searchable")),isRequired:Boolean(e.attr("required")),isEditable:Boolean(e.attr("editable"))},this.options=this._copyOptions(n),this.$nativeSelect=e,this.$selectWrapper=$('<div class="select-wrapper"></div>'),this.$materialOptionsList=$('<ul id="select-options-'.concat(this.properties.id,'" class="dropdown-content select-dropdown w-100 ').concat(this.properties.isMultiple?"multiple-select-dropdown":"",'"></ul>')),this.$materialSelectInitialOption=e.find("option:selected").text()||e.find("option:first").text()||"",this.$nativeSelectChildren=this.$nativeSelect.children("option, optgroup"),this.$materialSelect=$('<input type="text" class="'.concat(this.options.defaultMaterialInput?"browser-default custom-select multi-bs-select select-dropdown form-control":"select-dropdown form-control",'" ').concat(!this.options.validate&&'readonly="true"',' required="').concat(this.options.validate?"true":"false",'" ').concat(this.$nativeSelect.is(" :disabled")?"disabled":"",' data-activates="select-options-').concat(this.properties.id,'" value=""/>')),this.$dropdownIcon=this.options.defaultMaterialInput?"":$('<span class="caret">&#9660;</span>'),this.$searchInput=null,this.$noSearchResultsInfo=$("<li><span><i>".concat(this.options.labels.noSearchResults,"</i></span></li>")),this.$toggleAll=$('<li class="select-toggle-all"><span><input type="checkbox" class="form-check-input"><label>'.concat(this.options.labels.selectAll,"</label></span></li>")),this.$addOptionBtn=$('<i class="select-add-option fas fa-plus"></i>'),this.$mainLabel=this._jQueryFallback(this.$nativeSelect.next("label.mdb-main-label"),$("label[for='".concat(this.properties.id,"']"))),this.$customTemplateParts=this._jQueryFallback(this.$nativeSelect.nextUntil("select",".mdb-select-template-part"),$("[data-mdb-select-template-part-for='".concat(this.properties.id,"']"))),this.$btnSave=this.$nativeSelect.nextUntil("select",".btn-save"),this.$btnReset=$('<span class="reset-select-btn">&times;</span>'),this.$validFeedback=$('<div class="valid-feedback">'.concat(this.options.labels.validFeedback,"</div>")),this.$invalidFeedback=$('<div class="invalid-feedback">'.concat(this.options.labels.invalidFeedback,"</div>")),this.keyCodes={tab:9,enter:13,shift:16,alt:18,esc:27,space:32,end:35,home:36,arrowUp:38,arrowDown:40},this.renderer=new l.default(this),this.dropdown=null}var e,i,o;return e=t,o=[{key:"isMobileDevice",get:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}}],(i=[{key:"destroy",value:function(){this.renderer.destroy()}},{key:"render",value:function(){this.renderer.render()}},{key:"selectPreselectedOptions",value:function(t){var e=this;if(this.isMultiple)this.$nativeSelect.find("option:selected:not(:disabled)").each((function(i,l){var n=l.index;t(n),e._isPlaceholderPresent()&&(n-=1),e.$materialOptionsList.find("li:not(.optgroup):not(.select-toggle-all)").eq(n).addClass("selected active").find(":checkbox").prop("checked",!0)}));else{var i=this.$nativeSelect.find("option:selected").first(),l=this.$nativeSelect.find("option").index(i.get(0));i.get(0)&&"disabled"!==i.attr("disabled")&&t(l)}}},{key:"bindResetButtonClick",value:function(t){var e=this;this.$btnReset.on("click",(function(i){i.preventDefault(),e.$nativeSelect.find('option[value=""][selected][disabled][data-mdb-novalue]').length||(e._toggleResetButton(!0),e.$materialSelect.val(e.isMultiple?[]:""),e.$materialSelect.trigger("close"),e.$mainLabel.removeClass("active"),e.$materialOptionsList.find("li.active, li.selected").removeClass("active").removeClass("selected"),e.$materialOptionsList.find('li[aria-selected="true"]').attr("aria-selected","false"),e.$materialOptionsList.find('input[type="checkbox"]').prop("checked",!1),t())}))}},{key:"bindAddNewOptionClick",value:function(){this.$addOptionBtn.on("click",this.renderer.addNewOption.bind(this.renderer))}},{key:"bindMaterialSelectFocus",value:function(){var t=this;this.$materialSelect.on("focus",(function(e){var i=$(e.target);if(i.parent().addClass("active"),$("ul.select-dropdown").not(t.$materialOptionsList.get(0)).is(":visible")&&$("input.select-dropdown").trigger("close"),t.$mainLabel.addClass("active"),!t.$materialOptionsList.is(":visible")){var l=i.val(),n=t.$materialOptionsList.find("li").filter((function(){return $(this).text().toLowerCase()===l.toLowerCase()})).get(0);t._selectSingleOption(n)}t.isMultiple||t.$mainLabel.addClass("active")}))}},{key:"bindMaterialSelectClick",value:function(){var t=this;this.$materialSelect.on("mousedown",(function(t){3===t.which&&t.preventDefault()})),this.$materialSelect.on("click",(function(e){e.stopPropagation(),t.$mainLabel.addClass("active"),t._updateDropdownScrollTop()}))}},{key:"bindMaterialSelectBlur",value:function(){var t=this;this.$materialSelect.on("blur",(function(e){var i=$(e.target);i.parent().removeClass("active"),t.isMultiple||t.isSearchable||i.trigger("close"),t.$materialOptionsList.find("li.selected").removeClass("selected")}))}},{key:"bindMaterialOptionsListTouchstart",value:function(){this.$materialOptionsList.on("touchstart",(function(t){return t.stopPropagation()}))}},{key:"bindMaterialSelectKeydown",value:function(){var t=this;this.$materialSelect.on("keydown",(function(e){var i=$(e.target),l=e.which===t.keyCodes.tab,n=e.which===t.keyCodes.arrowUp,o=e.which===t.keyCodes.arrowDown,a=e.which===t.keyCodes.enter,r=e.which===t.keyCodes.esc,s=o&&e.altKey,c=n&&e.altKey,u=e.which===t.keyCodes.home,d=e.which===t.keyCodes.end,h=e.which===t.keyCodes.space,p=t.$materialOptionsList.is(":visible");switch(!0){case l:return t._handleTabKey(i);case!p&&(a||s):case t.isMultiple&&!p&&(o||n):return i.trigger("open"),t._updateDropdownScrollTop();case p&&(r||c):return i.trigger("close");case!p&&(o||n):return t._handleClosedArrowUpDownKey(e.which);case p&&(o||n):return t._handleArrowUpDownKey(e.which);case p&&u:return t._handleHomeKey();case p&&d:return t._handleEndKey();case p&&(a||h):return t._handleEnterKey(i);default:return t._handleLetterKey(e)}}))}},{key:"bindMaterialSelectDropdownToggle",value:function(){var t=this;this.$materialSelect.on("open",(function(){return t.$materialSelect.attr("aria-expanded","true")})),this.$materialSelect.on("close",(function(){return t.$materialSelect.attr("aria-expanded","false")}))}},{key:"bindToggleAllClick",value:function(t){var e=this;this.$toggleAll.on("click",(function(i){var l=$(e.$toggleAll).find('input[type="checkbox"]').first(),n=Boolean($(l).prop("checked")),o=!n;$(l).prop("checked",!n),e.$materialOptionsList.find("li:not(.optgroup):not(.select-toggle-all)").each((function(i,l){var n=$(l),a=n.find('input[type="checkbox"]');n.attr("aria-selected",o),o&&a.is(":checked")||!o&&!a.is(":checked")||$(l).is(":hidden")||$(l).is(".disabled")||(a.prop("checked",o),e.$nativeSelect.find("option").eq(i).prop("selected",o),n.toggleClass("active"),e._selectOption(l),t(i))})),e.$nativeSelect.data("stop-refresh",!0),e._triggerChangeOnNativeSelect(),e.$nativeSelect.removeData("stop-refresh"),i.stopPropagation()}))}},{key:"bindMaterialOptionMousedown",value:function(){var t=this;this.$materialOptionsList.on("mousedown",(function(e){var i=e.target;$(".modal-content").find(t.$materialOptionsList).length&&i.scrollHeight>i.offsetHeight&&e.preventDefault()}))}},{key:"bindMaterialOptionClick",value:function(t){var e=this;this.$materialOptionsList.find("li:not(.optgroup)").not(this.$toggleAll).each((function(i,l){$(l).on("click",(function(n){n.stopPropagation(),e._toggleResetButton(!1);var o=$(l);if(!o.hasClass("disabled")&&!o.hasClass("optgroup")){var a=!0;if(e.isMultiple){o.find('input[type="checkbox"]').prop("checked",(function(t,e){return!e}));var r=Boolean(e.$nativeSelect.find("optgroup").length),s=e._isToggleAllPresent()&&!e._isPlaceholderPresent()?o.index()-1:o.index();switch(!0){case e.isSearchable&&r:a=t(s-o.prevAll(".optgroup").length-1);break;case e.isSearchable:a=t(s-1);break;case r:a=t(s-o.prevAll(".optgroup").length);break;default:a=t(s)}e._isToggleAllPresent()&&e._updateToggleAllOption(),e.$materialSelect.trigger("focus")}else{e.$materialOptionsList.find("li").removeClass("active").attr("aria-selected","false");var c=o.children().last()[0].childNodes[0];e.$materialSelect.val($(c).text().replace(/  +/g," ").trim()),e.$materialSelect.trigger("close")}o.toggleClass("active");var u=o.attr("aria-selected");o.attr("aria-selected","true"===u?"false":"true"),e._selectSingleOption(o),e.$nativeSelect.data("stop-refresh",!0);var d=e._isPlaceholderPresent()?i+1:i;e.$nativeSelect.find("option").eq(d).prop("selected",a),e.$nativeSelect.removeData("stop-refresh"),e._triggerChangeOnNativeSelect(),e.$materialSelect.val()&&e.$mainLabel.addClass("active"),o.hasClass("li-added")&&e.renderer.buildSingleOption(o,"")}}))}))}},{key:"bindSingleMaterialOptionClick",value:function(){var t=this;this.$materialOptionsList.find("li").on("click",(function(){t.$materialSelect.trigger("close")}))}},{key:"bindSearchInputKeyup",value:function(){var t=this;this.$searchInput.find(".search").on("keyup",(function(e){var i=$(e.target),l=e.which===t.keyCodes.tab,n=e.which===t.keyCodes.esc,o=e.which===t.keyCodes.enter,a=o&&e.shiftKey,r=e.which===t.keyCodes.arrowUp;if(e.which===t.keyCodes.arrowDown||l||n||r)return t.$materialSelect.focus(),void t._handleArrowUpDownKey(e.which);var s=i.closest("ul"),c=i.val(),u=s.find("li span.filtrable"),d=!1;if(u.each((function(){var t=$(this);if("string"==typeof this.outerHTML){var e=this.textContent.toLowerCase();e.includes(c.toLowerCase())?t.show().parent().show():t.hide().parent().hide(),e.trim()===c.toLowerCase()&&(d=!0)}})),o)return t.isEditable&&!d?void t.renderer.addNewOption():(a&&t._handleEnterWithShiftKey(i),void t.$materialSelect.trigger("open"));t.$addOptionBtn[c&&t.isEditable&&!d?"show":"hide"](),0!==u.filter((function(t,e){return $(e).is(":visible")&&!$(e).parent().hasClass("disabled")})).length?(t.$toggleAll.show(),t.$materialOptionsList.find(t.$noSearchResultsInfo).remove(),t._updateToggleAllOption()):(t.$toggleAll.hide(),t.$materialOptionsList.append(t.$noSearchResultsInfo)),t.dropdown.updatePosition(t.$materialSelect,t.$materialOptionsList)}))}},{key:"bindHtmlClick",value:function(){var t=this;$("html").on("click",(function(e){$(e.target).closest("#select-options-".concat(t.properties.id)).length||$(e.target).hasClass("mdb-select")||!$("#select-options-".concat(t.properties.id)).hasClass("active")||(t.$materialSelect.trigger("close"),t.$materialSelect.val()||t.options.placeholder||t.$mainLabel.removeClass("active")),t.isSearchable&&null!==t.$searchInput&&t.$materialOptionsList.hasClass("active")&&t.$materialOptionsList.find(".search-wrap input.search").focus()}))}},{key:"bindMobileDevicesMousedown",value:function(){$("select").siblings("input.select-dropdown","input.multi-bs-select").on("mousedown",(function(e){t.isMobileDevice&&(e.clientX>=e.target.clientWidth||e.clientY>=e.target.clientHeight)&&e.preventDefault()}))}},{key:"bindSaveBtnClick",value:function(){var t=this;this.$btnSave.on("click",(function(){t.$materialSelect.trigger("close")}))}},{key:"_toggleResetButton",value:function(t){var e=this.$nativeSelect.data("stop-refresh");this.$nativeSelect.attr("data-stop-refresh","true"),t?this.$nativeSelect.prepend('<option value="" selected disabled data-mdb-novalue></option>'):this.$nativeSelect.find("option[data-mdb-novalue]").remove(),this.$nativeSelect.attr("data-stop-refresh",e),this.$btnReset[t?"hide":"show"]()}},{key:"_isToggleAllPresent",value:function(){return this.$materialOptionsList.find(this.$toggleAll).length}},{key:"_isPlaceholderPresent",value:function(){return!(!this.$nativeSelect.attr("data-placeholder")&&!this.options.placeholder)}},{key:"_updateToggleAllOption",value:function(){var t=this.$materialOptionsList.find("li").not(".select-toggle-all, .disabled, :hidden").find("[type=checkbox]"),e=t.filter(":checked"),i=this.$toggleAll.find("[type=checkbox]").is(":checked");e.length!==t.length||i?e.length<t.length&&i&&this.$toggleAll.find("[type=checkbox]").prop("checked",!1):this.$toggleAll.find("[type=checkbox]").prop("checked",!0)}},{key:"_handleTabKey",value:function(t){this._handleEscKey(t)}},{key:"_handleEnterWithShiftKey",value:function(t){this.isMultiple?this.$toggleAll.trigger("click"):this._handleEnterKey(t)}},{key:"_handleEnterKey",value:function(t){this.$materialOptionsList.find("li.selected:not(.disabled)").trigger("click").addClass("active"),this._removeKeyboardActiveClass(),this.isMultiple||t.trigger("close")}},{key:"_handleArrowUpDownKey",value:function(t){var e=this._getArrowMatchedActiveOptions(t,!1),i=e.$matchedMaterialOption,l=e.$activeOption;this._selectSingleOption(i),this._removeKeyboardActiveClass(),i.find("input").is(":checked")||i.removeClass(this.options.keyboardActiveClass),l.hasClass("selected")||l.find("input").is(":checked")||!this.isMultiple||l.removeClass("active",this.options.keyboardActiveClass),i.addClass(this.options.keyboardActiveClass),i.position()&&this.$materialOptionsList.scrollTop(this.$materialOptionsList.scrollTop()+i.position().top)}},{key:"_handleClosedArrowUpDownKey",value:function(t){var e=this._getArrowMatchedActiveOptions(t,!0).$matchedMaterialOption;e.trigger("click").addClass("active"),this._updateDropdownScrollTop(),this._selectSingleOption(e)}},{key:"_getArrowMatchedActiveOptions",value:function(t,e){var i=this,l=e?"":":visible",n=this.$materialOptionsList.find("li".concat(l)).not(".disabled, .select-toggle-all"),o=n.first(),a=n.last(),r=this.$materialOptionsList.find("li.selected").length>0,s=null,c=null;if(t===this.keyCodes.arrowUp){var u=r?this.$materialOptionsList.find("li.selected").first():a,d=u.prev("li".concat(l,":not(.disabled, .select-toggle-all)"));c=d,n.each((function(t,e){$(e).hasClass(i.options.keyboardActiveClass)&&(d=n.eq(t-1),c=n.eq(t))})),s=u.is(o)||!r?u:d}else{var h=r?this.$materialOptionsList.find("li.selected").first():o,p=h.next("li".concat(l,":not(.disabled, .select-toggle-all)"));c=p,n.each((function(t,e){$(e).hasClass(i.options.keyboardActiveClass)&&(p=n.eq(t+1),c=n.eq(t))})),s=h.is(a)||!r?h:p}return{$matchedMaterialOption:s,$activeOption:c}}},{key:"_handleHomeKey",value:function(){this._selectBoundaryOption("first")}},{key:"_handleEndKey",value:function(){this._selectBoundaryOption("last")}},{key:"_selectBoundaryOption",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=this.$materialOptionsList.find("li:visible").not(".disabled, .select-toggle-all")[t]();this._selectSingleOption(e),this._removeKeyboardActiveClass(),e.find("input").is(":checked")||e.removeClass(this.options.keyboardActiveClass),e.addClass(this.options.keyboardActiveClass),e.position()&&this.$materialOptionsList.scrollTop(this.$materialOptionsList.scrollTop()+e.position().top)}},{key:"_handleEscKey",value:function(t){this._removeKeyboardActiveClass(),t.trigger("close")}},{key:"_handleLetterKey",value:function(t){var e=this;if(this._removeKeyboardActiveClass(),this.isSearchable){var i=t.which>46&&t.which<91,l=t.which>93&&t.which<106,n=8===t.which;(i||l)&&this.$searchInput.find("input").focus(),n&&this.$searchInput.find("input").val("").focus()}else{var o="",a=String.fromCharCode(t.which).toLowerCase(),r=Object.keys(this.keyCodes).map((function(t){return e.keyCodes[t]}));if(a&&-1===r.indexOf(t.which)){o+=a;var s=this.$materialOptionsList.find("li").filter((function(t,e){return $(e).text().toLowerCase().includes(o)})).first();this.isMultiple||this.$materialOptionsList.find("li").removeClass("active"),s.addClass("active"),this._selectSingleOption(s),this._updateDropdownScrollTop()}}}},{key:"_removeKeyboardActiveClass",value:function(){this.$materialOptionsList.find("li").removeClass(this.options.keyboardActiveClass)}},{key:"_triggerChangeOnNativeSelect",value:function(){var t=new KeyboardEvent("change",{bubbles:!0,cancelable:!0});this.$nativeSelect.get(0).dispatchEvent(t)}},{key:"_selectSingleOption",value:function(t){this.$materialOptionsList.find("li.selected").removeClass("selected"),this._selectOption(t)}},{key:"_updateDropdownScrollTop",value:function(){var t=this.$materialOptionsList.find("li.active").not(".disabled").first();t.length?this.$materialOptionsList.scrollTo(t):this.$materialOptionsList.scrollTop(0)}},{key:"_selectOption",value:function(t){$(t).addClass("selected")}},{key:"_copyOptions",value:function(t){return $.extend({},t)}},{key:"_jQueryFallback",value:function(){for(var t=null,e=0;e<arguments.length;e++)if((t=e<0||arguments.length<=e?void 0:arguments[e]).length)return t;return t}},{key:"isMultiple",get:function(){return this.properties.isMultiple}},{key:"isSearchable",get:function(){return this.properties.isSearchable}},{key:"isRequired",get:function(){return this.properties.isRequired}},{key:"isEditable",get:function(){return this.properties.isEditable}},{key:"isDisabled",get:function(){return this.$nativeSelect.is(":disabled")}}])&&n(e.prototype,i),o&&n(e,o),t}()},function(t,e,i){var l=i(0),n=i(85).trim,o=i(70),a=l.parseFloat,r=1/a(o+"-0")!=-1/0;t.exports=r?function(t){var e=n(String(t)),i=a(e);return 0===i&&"-"==e.charAt(0)?-0:i}:a},function(t,e,i){var l=i(102);t.exports=function(t){if(l(t))throw TypeError("The method doesn't accept regular expressions");return t}},function(t,e,i){var l=i(2)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(i){try{return e[l]=!1,"/./"[t](e)}catch(t){}}return!1}},function(t,e,i){var l=i(49),n=i(16),o=i(27),a=i(11),r=function(t){return function(e,i,r,s){l(i);var c=n(e),u=o(c),d=a(c.length),h=t?d-1:0,p=t?-1:1;if(r<2)for(;;){if(h in u){s=u[h],h+=p;break}if(h+=p,t?h<0:d<=h)throw TypeError("Reduce of empty array with no initial value")}for(;t?h>=0:d>h;h+=p)h in u&&(s=i(s,u[h],h,c));return s}};t.exports={left:r(!1),right:r(!0)}},function(t,e,i){var l=i(7),n=i(0),o=i(48),a=i(114),r=i(9).f,s=i(29).f,c=i(102),u=i(83),d=i(14),h=i(1),p=i(130),f=i(2)("match"),m=n.RegExp,v=m.prototype,g=/a/g,y=/a/g,b=new m(g)!==g;if(l&&o("RegExp",!b||h((function(){return y[f]=!1,m(g)!=g||m(y)==y||"/a/i"!=m(g,"i")})))){for(var x=function(t,e){var i=this instanceof x,l=c(t),n=void 0===e;return!i&&l&&t.constructor===x&&n?t:a(b?new m(l&&!n?t.source:t,e):m((l=t instanceof x)?t.source:t,l&&n?u.call(t):e),i?this:v,x)},w=function(t){t in x||r(x,t,{configurable:!0,get:function(){return m[t]},set:function(e){m[t]=e}})},k=s(m),S=0;k.length>S;)w(k[S++]);v.constructor=x,x.prototype=v,d(n,"RegExp",x)}p("RegExp")},function(t,e,i){"use strict";var l=i(32),n=i(9),o=i(2),a=i(7),r=o("species");t.exports=function(t){var e=l(t),i=n.f;a&&e&&!e[r]&&i(e,r,{configurable:!0,get:function(){return this}})}},function(t,e,i){"use strict";var l=i(4),n=i(49),o=i(16),a=i(1),r=i(52),s=[].sort,c=[1,2,3],u=a((function(){c.sort(void 0)})),d=a((function(){c.sort(null)})),h=r("sort");l({target:"Array",proto:!0,forced:u||!d||h},{sort:function(t){return void 0===t?s.call(o(this)):s.call(o(this),n(t))}})},function(t,e,i){"use strict";var l=i(10),n=i(15),o=i(11),a=i(52),r=Math.min,s=[].lastIndexOf,c=!!s&&1/[1].lastIndexOf(1,-0)<0,u=a("lastIndexOf");t.exports=c||u?function(t){if(c)return s.apply(this,arguments)||0;var e=l(this),i=o(e.length),a=i-1;for(arguments.length>1&&(a=r(a,n(arguments[1]))),a<0&&(a=i+a);a>=0;a--)if(a in e&&e[a]===t)return a||0;return-1}:s},function(t,e,i){var l=i(4),n=i(134).values;l({target:"Object",stat:!0},{values:function(t){return n(t)}})},function(t,e,i){var l=i(7),n=i(41),o=i(10),a=i(40).f,r=function(t){return function(e){for(var i,r=o(e),s=n(r),c=s.length,u=0,d=[];c>u;)i=s[u++],l&&!a.call(r,i)||d.push(t?[i,r[i]]:r[i]);return d}};t.exports={entries:r(!0),values:r(!1)}},function(t,e,i){"use strict";var l=i(16),n=i(38),o=i(11);t.exports=function(t){for(var e=l(this),i=o(e.length),a=arguments.length,r=n(a>1?arguments[1]:void 0,i),s=a>2?arguments[2]:void 0,c=void 0===s?i:n(s,i);c>r;)e[r++]=t;return e}},function(t,e,i){"use strict";var l=i(4),n=i(31),o=[].reverse,a=[1,2];l({target:"Array",proto:!0,forced:String(a)===String(a.reverse())},{reverse:function(){return n(this)&&(this.length=this.length),o.call(this)}})},function(t,e,i){"use strict";var l=i(4),n=i(15),o=i(138),a=i(139),r=i(1),s=1..toFixed,c=Math.floor,u=function(t,e,i){return 0===e?i:e%2==1?u(t,e-1,i*t):u(t*t,e/2,i)};l({target:"Number",proto:!0,forced:s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){s.call({})}))},{toFixed:function(t){var e,i,l,r,s=o(this),d=n(t),h=[0,0,0,0,0,0],p="",f="0",m=function(t,e){for(var i=-1,l=e;++i<6;)l+=t*h[i],h[i]=l%1e7,l=c(l/1e7)},v=function(t){for(var e=6,i=0;--e>=0;)i+=h[e],h[e]=c(i/t),i=i%t*1e7},g=function(){for(var t=6,e="";--t>=0;)if(""!==e||0===t||0!==h[t]){var i=String(h[t]);e=""===e?i:e+a.call("0",7-i.length)+i}return e};if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(p="-",s=-s),s>1e-21)if(i=(e=function(t){for(var e=0,i=t;i>=4096;)e+=12,i/=4096;for(;i>=2;)e+=1,i/=2;return e}(s*u(2,69,1))-69)<0?s*u(2,-e,1):s/u(2,e,1),i*=4503599627370496,(e=52-e)>0){for(m(0,i),l=d;l>=7;)m(1e7,0),l-=7;for(m(u(10,l,1),0),l=e-1;l>=23;)v(1<<23),l-=23;v(1<<l),m(1,1),v(2),f=g()}else m(0,i),m(1<<-e,0),f=g()+a.call("0",d);return f=d>0?p+((r=f.length)<=d?"0."+a.call("0",d-r)+f:f.slice(0,r-d)+"."+f.slice(r-d)):p+f}})},function(t,e,i){var l=i(17);t.exports=function(t){if("number"!=typeof t&&"Number"!=l(t))throw TypeError("Incorrect invocation");return+t}},function(t,e,i){"use strict";var l=i(15),n=i(13);t.exports="".repeat||function(t){var e=String(n(this)),i="",o=l(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(i+=e);return i}},function(t,e,i){var l=i(0),n=i(85).trim,o=i(70),a=l.parseInt,r=/^[+-]?0[Xx]/,s=8!==a(o+"08")||22!==a(o+"0x16");t.exports=s?function(t,e){var i=n(String(t));return a(i,e>>>0||(r.test(i)?16:10))}:a},function(t,e,i){"use strict";var l=i(0),n=i(7),o=i(59).NATIVE_ARRAY_BUFFER,a=i(6),r=i(174),s=i(1),c=i(142),u=i(15),d=i(11),h=i(143),p=i(29).f,f=i(9).f,m=i(135),v=i(60),g=i(28),y=g.get,b=g.set,x=l.ArrayBuffer,w=x,k=l.DataView,S=l.Math,M=l.RangeError,C=S.abs,T=S.pow,A=S.floor,O=S.log,E=S.LN2,P=function(t,e,i){var l,n,o,a=new Array(i),r=8*i-e-1,s=(1<<r)-1,c=s>>1,u=23===e?T(2,-24)-T(2,-77):0,d=t<0||0===t&&1/t<0?1:0,h=0;for((t=C(t))!=t||t===1/0?(n=t!=t?1:0,l=s):(l=A(O(t)/E),t*(o=T(2,-l))<1&&(l--,o*=2),(t+=l+c>=1?u/o:u*T(2,1-c))*o>=2&&(l++,o/=2),l+c>=s?(n=0,l=s):l+c>=1?(n=(t*o-1)*T(2,e),l+=c):(n=t*T(2,c-1)*T(2,e),l=0));e>=8;a[h++]=255&n,n/=256,e-=8);for(l=l<<e|n,r+=e;r>0;a[h++]=255&l,l/=256,r-=8);return a[--h]|=128*d,a},I=function(t,e){var i,l=t.length,n=8*l-e-1,o=(1<<n)-1,a=o>>1,r=n-7,s=l-1,c=t[s--],u=127&c;for(c>>=7;r>0;u=256*u+t[s],s--,r-=8);for(i=u&(1<<-r)-1,u>>=-r,r+=e;r>0;i=256*i+t[s],s--,r-=8);if(0===u)u=1-a;else{if(u===o)return i?NaN:c?-1/0:1/0;i+=T(2,e),u-=a}return(c?-1:1)*i*T(2,u-e)},_=function(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]},$=function(t){return[255&t]},D=function(t){return[255&t,t>>8&255]},L=function(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]},R=function(t){return P(t,23,4)},V=function(t){return P(t,52,8)},F=function(t,e){f(t.prototype,e,{get:function(){return y(this)[e]}})},W=function(t,e,i,l){var n=h(+i),o=y(t);if(n+e>o.byteLength)throw M("Wrong index");var a=y(o.buffer).bytes,r=n+o.byteOffset,s=a.slice(r,r+e);return l?s:s.reverse()},j=function(t,e,i,l,n,o){var a=h(+i),r=y(t);if(a+e>r.byteLength)throw M("Wrong index");for(var s=y(r.buffer).bytes,c=a+r.byteOffset,u=l(+n),d=0;d<e;d++)s[c+d]=u[o?d:e-d-1]};if(o){if(!s((function(){x(1)}))||!s((function(){new x(-1)}))||s((function(){return new x,new x(1.5),new x(NaN),"ArrayBuffer"!=x.name}))){for(var N,z=(w=function(t){return c(this,w),new x(h(t))}).prototype=x.prototype,B=p(x),H=0;B.length>H;)(N=B[H++])in w||a(w,N,x[N]);z.constructor=w}var Z=new k(new w(2)),Y=k.prototype.setInt8;Z.setInt8(0,2147483648),Z.setInt8(1,2147483649),!Z.getInt8(0)&&Z.getInt8(1)||r(k.prototype,{setInt8:function(t,e){Y.call(this,t,e<<24>>24)},setUint8:function(t,e){Y.call(this,t,e<<24>>24)}},{unsafe:!0})}else w=function(t){c(this,w,"ArrayBuffer");var e=h(t);b(this,{bytes:m.call(new Array(e),0),byteLength:e}),n||(this.byteLength=e)},k=function(t,e,i){c(this,k,"DataView"),c(t,w,"DataView");var l=y(t).byteLength,o=u(e);if(o<0||o>l)throw M("Wrong offset");if(o+(i=void 0===i?l-o:d(i))>l)throw M("Wrong length");b(this,{buffer:t,byteLength:i,byteOffset:o}),n||(this.buffer=t,this.byteLength=i,this.byteOffset=o)},n&&(F(w,"byteLength"),F(k,"buffer"),F(k,"byteLength"),F(k,"byteOffset")),r(k.prototype,{getInt8:function(t){return W(this,1,t)[0]<<24>>24},getUint8:function(t){return W(this,1,t)[0]},getInt16:function(t){var e=W(this,2,t,arguments.length>1?arguments[1]:void 0);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=W(this,2,t,arguments.length>1?arguments[1]:void 0);return e[1]<<8|e[0]},getInt32:function(t){return _(W(this,4,t,arguments.length>1?arguments[1]:void 0))},getUint32:function(t){return _(W(this,4,t,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(t){return I(W(this,4,t,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(t){return I(W(this,8,t,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(t,e){j(this,1,t,$,e)},setUint8:function(t,e){j(this,1,t,$,e)},setInt16:function(t,e){j(this,2,t,D,e,arguments.length>2?arguments[2]:void 0)},setUint16:function(t,e){j(this,2,t,D,e,arguments.length>2?arguments[2]:void 0)},setInt32:function(t,e){j(this,4,t,L,e,arguments.length>2?arguments[2]:void 0)},setUint32:function(t,e){j(this,4,t,L,e,arguments.length>2?arguments[2]:void 0)},setFloat32:function(t,e){j(this,4,t,R,e,arguments.length>2?arguments[2]:void 0)},setFloat64:function(t,e){j(this,8,t,V,e,arguments.length>2?arguments[2]:void 0)}});v(w,"ArrayBuffer"),v(k,"DataView"),t.exports={ArrayBuffer:w,DataView:k}},function(t,e){t.exports=function(t,e,i){if(!(t instanceof e))throw TypeError("Incorrect "+(i?i+" ":"")+"invocation");return t}},function(t,e,i){var l=i(15),n=i(11);t.exports=function(t){if(void 0===t)return 0;var e=l(t),i=n(e);if(e!==i)throw RangeError("Wrong length or index");return i}},function(t,e,i){var l=i(2)("iterator"),n=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){n=!0}};a[l]=function(){return this},Array.from(a,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!n)return!1;var i=!1;try{var o={};o[l]=function(){return{next:function(){return{done:i=!0}}}},t(o)}catch(t){}return i}},function(t,e,i){var l=i(178);t.exports=function(t,e){var i=l(t);if(i%e)throw RangeError("Wrong offset");return i}},function(t,e,i){var l=i(93),n=i(61),o=i(2)("iterator");t.exports=function(t){if(null!=t)return t[o]||t["@@iterator"]||n[l(t)]}},function(t,e,i){var l=i(2),n=i(61),o=l("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(n.Array===t||a[o]===t)}},function(t,e,i){"use strict";i.r(e);i(43),i(75),i(97),i(111),i(68),i(86);function l(t,e){for(var i=0;i<e.length;i++){var l=e[i];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}jQuery((function(t){(new(function(){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.inputSelector="".concat(["text","password","email","url","tel","number","search","search-md"].map((function(t){return"input[type=".concat(t,"]")})).join(", "),", textarea"),this.textAreaSelector=".materialize-textarea",this.$text=t(".md-textarea-auto"),this.$body=t("body"),this.$document=t(document)}var i,n,o;return i=e,(n=[{key:"init",value:function(){var e,i=this;this.toggleActiveClass(t("input[autofocus]"),"add"),this.$text.length&&(e=window.attachEvent?function(t,e,i){t.attachEvent("on".concat(e),i)}:function(t,e,i){t.addEventListener(e,i,!1)},this.$text.each((function(){var t=this;function i(){t.style.height="auto",t.style.height="".concat(t.scrollHeight,"px")}function l(){window.setTimeout(i,0)}e(t,"change",i),e(t,"cut",l),e(t,"paste",l),e(t,"drop",l),e(t,"keydown",l),i()}))),t(this.inputSelector).each((function(e,l){var n=t(l),o=l.validity.badInput;i.updateTextFields(n),o&&i.toggleActiveClass(n,"add")})),this.addOnFocusEvent(),this.addOnBlurEvent(),this.addOnChangeEvent(),this.addOnResetEvent(),this.appendHiddenDiv(),this.ChangeDateInputType(),t(this.textAreaSelector).each(this.textAreaAutoResize),this.$body.on("keyup keydown",this.textAreaSelector,this.textAreaAutoResize)}},{key:"toggleActiveClass",value:function(t,e){e="".concat(e,"Class"),t.siblings("label, i")[e]("active")}},{key:"addOnFocusEvent",value:function(){var e=this;this.$document.on("focus",this.inputSelector,(function(i){e.toggleActiveClass(t(i.target),"add")}))}},{key:"addOnBlurEvent",value:function(){var e=this;this.$document.on("blur",this.inputSelector,(function(i){var l=t(i.target),n=!l.val(),o=!i.target.validity.badInput,a=void 0===l.attr("placeholder");n&&o&&a&&e.toggleActiveClass(l,"remove"),e.validateField(l)}))}},{key:"addOnChangeEvent",value:function(){var e=this;this.$document.on("change",this.inputSelector,(function(i){var l=t(i.target);e.updateTextFields(l),e.validateField(l)}))}},{key:"addOnResetEvent",value:function(){var e=this;this.$document.on("reset",(function(i){var l=t(i.target);l.is("form")&&(l.find(e.inputSelector).removeClass("valid invalid").each((function(i,l){var n=t(l),o=!n.val(),a=!n.attr("placeholder");o&&a&&e.toggleActiveClass(n,"remove")})),l.find("select.initialized").each((function(e,i){var l=t(i),n=l.siblings("input.select-dropdown"),o=l.children("[selected]").val();l.val(o),n.val(o)})))}))}},{key:"appendHiddenDiv",value:function(){if(!t(".hiddendiv").first().length){var e=t('<div class="hiddendiv common"></div>');this.$body.append(e)}}},{key:"updateTextFields",value:function(t){var e=Boolean(t.val().length),i=Boolean(t.attr("placeholder")),l=e||i?"add":"remove";this.toggleActiveClass(t,l)}},{key:"validateField",value:function(t){if(t.hasClass("validate")){var e=t.val(),i=!e.length,l=!t[0].validity.badInput;if(i&&l)t.removeClass("valid").removeClass("invalid");else{var n=t.is(":valid"),o=Number(t.attr("length"))||0;n&&(!o||o>e.length)?t.removeClass("invalid").addClass("valid"):t.removeClass("valid").addClass("invalid")}}}},{key:"ChangeDateInputType",value:function(){var e=t('input[type="date"]');e.each((function(t,e){e.type="text"})),e.on("focus",(function(t){t.target.type="date"})),e.on("blur",(function(e){e.target.type="text",0===e.target.value.length&&t("label[for=".concat(e.target.id,"]")).removeClass("active")}))}},{key:"textAreaAutoResize",value:function(){var e=t(this);if(e.val().length){var i=t(".hiddendiv"),l=e.css("font-family"),n=e.css("font-size");n&&i.css("font-size",n),l&&i.css("font-family",l),"off"===e.attr("wrap")&&i.css("overflow-wrap","normal").css("white-space","pre"),i.text("".concat(e.val(),"\n"));var o=i.html().replace(/\n/g,"<br>");i.html(o),i.css("width",e.is(":visible")?e.width():t(window).width()/2),e.css("height",i.height())}}}])&&l(i.prototype,n),o&&l(i,o),e}())).init()}))},function(t,e){jQuery((function(t){t(window).on("scroll",(function(){var e=t(".navbar");e.length&&t(".scrolling-navbar")[e.offset().top>50?"addClass":"removeClass"]("top-nav-collapse")}))}))},function(t,e,i){"use strict";i.r(e);i(43);jQuery((function(t){t.fn.mdbTreeview=function(){var e=t(this);e.hasClass("treeview")&&function(e){e.find(".rotate").each((function(){var e=t(this);e.off("click"),e.on("click",(function(){var e=t(this);e.siblings(".nested").toggleClass("active"),e.toggleClass("down")}))}))}(e),e.hasClass("treeview-animated")&&function(e){var i=e.find(".treeview-animated-element"),l=e.find(".closed");e.find(".nested").hide(),l.off("click"),l.on("click",(function(){var e=t(this),i=e.siblings(".nested"),l=e.children(".fa-angle-right");e.toggleClass("open"),l.toggleClass("down"),i.hasClass("active")?i.removeClass("active").slideUp():i.addClass("active").slideDown()})),i.off("click"),i.on("click",(function(){var e=t(this);e.hasClass("opened")?e.removeClass("opened"):(i.removeClass("opened"),e.addClass("opened"))}))}(e),e.hasClass("treeview-colorful")&&function(e){var i=e.find(".treeview-colorful-element"),l=e.find(".treeview-colorful-items-header");e.find(".nested").hide(),l.off("click"),l.on("click",(function(){var e=t(this),i=e.siblings(".nested"),l=e.children(".fa-plus-circle"),n=e.children(".fa-minus-circle");e.toggleClass("open"),l.removeClass("fa-plus-circle"),l.addClass("fa-minus-circle"),n.removeClass("fa-minus-circle"),n.addClass("fa-plus-circle"),i.hasClass("active")?i.removeClass("active").slideUp():i.addClass("active").slideDown()})),i.off("click"),i.on("click",(function(){var e=t(this);e.hasClass("opened")?i.removeClass("opened"):(i.removeClass("opened"),e.addClass("opened"))}))}(e)}}))},function(t,e,i){"use strict";i.r(e);i(100),i(84),i(65),i(95);function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var i=0;i<e.length;i++){var l=e[i];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}function o(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}jQuery((function(t){var e=function(){function e(){l(this,e)}return o(e,[{key:"init",value:function(){t(".wow").wow()}}]),e}(),i=function(){function e(t,i){l(this,e),this.$wowElement=t,this.customization=i,this.animated=!0,this.options=this.assignElementCustomization()}return o(e,[{key:"init",value:function(){var e=this;t(window).scroll((function(){e.animated?e.hide():e.mdbWow()})),this.appear()}},{key:"assignElementCustomization",value:function(){return{animationName:this.$wowElement.css("animation-name"),offset:100,iteration:this.fallback().or(this.$wowElement.data("wow-iteration")).or(1).value(),duration:this.fallback().or(this.$wowElement.data("wow-duration")).or(1e3).value(),delay:this.fallback().or(this.$wowElement.data("wow-delay")).or(0).value()}}},{key:"mdbWow",value:function(){var t=this;"visible"!==this.$wowElement.css("visibility")&&this.shouldElementBeVisible(!0)&&(setTimeout((function(){return t.$wowElement.removeClass("animated")}),this.countRemoveTime()),this.appear())}},{key:"appear",value:function(){this.$wowElement.addClass("animated"),this.$wowElement.css({visibility:"visible","animation-name":this.options.animationName,"animation-iteration-count":this.options.iteration,"animation-duration":this.options.duration,"animation-delay":this.options.delay})}},{key:"hide",value:function(){var t=this;this.shouldElementBeVisible(!1)?(this.$wowElement.removeClass("animated"),this.$wowElement.css({"animation-name":"none",visibility:"hidden"})):setTimeout((function(){t.$wowElement.removeClass("animated")}),this.countRemoveTime()),this.mdbWow(),this.animated=!this.animated}},{key:"shouldElementBeVisible",value:function(e){var i=this.getOffset(this.$wowElement[0]),l=this.$wowElement.height(),n=t(document).height(),o=window.innerHeight,a=window.scrollY,r=o+a-this.options.offset>i,s=o+a-this.options.offset>i+l,c=a<i,u=a<i+l,d=o+a===n,h=i+this.options.offset>n,p=o+a-this.options.offset<i,f=a>i+this.options.offset,m=a<i+this.options.offset,v=i+l>n-this.options.offset;return e?r&&c||s&&u||d&&h:r&&f||p&&m||v}},{key:"countRemoveTime",value:function(){var t=1e3*this.$wowElement.css("animation-duration").slice(0,-1),e=0;return this.options.duration&&(e=t+this.checkOptionsStringFormat(this.options.duration)),this.options.delay&&(e+=this.checkOptionsStringFormat(this.options.delay)),e}},{key:"checkOptionsStringFormat",value:function(t){var e;if("s"===t.toString().slice(-1))e=t.toString().slice(0,-1);else{if(isNaN(t.toString().slice(-1)))return console.log("Not supported animation customization format.");e=t}return e}},{key:"getOffset",value:function(t){var e=t.getBoundingClientRect(),i=document.body,l=document.documentElement,n=window.pageYOffset||l.scrollTop||i.scrollTop,o=l.clientTop||i.clientTop||0,a=e.top+n-o;return Math.round(a)}},{key:"fallback",value:function(){return{_value:void 0,or:function(t){return void 0!==t&&void 0===this._value&&(this._value=t),this},value:function(){return this._value}}}}]),e}();t.fn.wow=function(e){this.each((function(){new i(t(this),e).init()}))},window.WOW=e}))},function(t,e,i){"use strict";i.r(e);i(103),i(104);jQuery((function(t){var e="ontouchstart"in document.documentElement,i=function(t,e){(e&&!t.hasClass("active")||!e&&t.hasClass("active"))&&(t[e?"addClass":"removeClass"]("active"),document.querySelectorAll("ul .btn-floating").forEach((function(t){return t.classList[e?"add":"remove"]("shown")})))},l=t(".fixed-action-btn:not(.smooth-scroll) > .btn-floating");l.on("mouseenter",(function(l){e||i(t(l.currentTarget).parent(),!0)})),l.parent().on("mouseleave",(function(e){return i(t(e.currentTarget),!1)})),l.on("click",(function(e){var l;e.preventDefault(),(l=t(e.currentTarget).parent()).hasClass("active")?i(l,!1):i(l,!0)})),t.fn.extend({openFAB:function(){i(t(this),!0)},closeFAB:function(){i(t(this),!1)}})}))},function(t,e,i){"use strict";i.r(e);i(43);jQuery((function(t){t(document).on("click.card",".card",(function(l){var n=t(this).find(".card-reveal");if(n.length){var o=t(l.target),a=o.is(".card-reveal .card-title"),r=o.is(".card-reveal .card-title i"),s=o.is(".card .activator"),c=o.is(".card .activator i");a||r?i(n):(s||c)&&e(n)}}));var e=function(t){t.css({display:"block"}).velocity({translateY:"-100%"},{duration:300,queue:!1,easing:"easeInOutQuad"})},i=function(t){t.velocity({translateY:0},{duration:225,queue:!1,easing:"easeInOutQuad",complete:function(){t.css({display:"none"})}})};t(".rotate-btn").on("click",(function(){t(this).closest(".card").toggleClass("flipped")})),t(window).on("load",(function(){t(".card-rotating").each((function(){var e=t(this),i=e.parent(),l=e.find(".front"),n=e.find(".back"),o=e.find(".front").outerHeight(),a=e.find(".back").outerHeight();o>a?t(i,n).height(o):o<a?t(i,l).height(a):t(i).height(a)}))})),t(".card-share > a").on("click",(function(e){e.preventDefault(),t(this).toggleClass("share-expanded").parent().find("div").toggleClass("social-reveal-active")})),t(".map-card").on("click",(function(){t(this).find(".card-body").toggleClass("closed")}))}))},function(t,e,i){"use strict";i.r(e);i(76),i(43),i(111);jQuery((function(t){function e(){var e=t(this),i=Number(e.attr("length")),l=Number(e.val().length),n=l<=i;e.parent().find('span[class="character-counter"]').html("".concat(l,"/").concat(i)),function(t,e){var i=e.hasClass("invalid");t&&i?e.removeClass("invalid"):t||i||(e.removeClass("valid"),e.addClass("invalid"))}(n,e)}function i(){t(this).parent().find('span[class="character-counter"]').html("")}t.fn.characterCounter=function(){return this.each((function(){var l,n,o=t(this);void 0!==o.attr("length")&&(o.on("input focus",e),o.on("blur",i),l=o,n=t("<span/>").addClass("character-counter").css("float","right").css("font-size","12px").css("height",1),l.parent().append(n))}))},t(document).ready((function(){t("input, textarea").characterCounter()}))}))},function(t,e,i){"use strict";i.r(e);i(92),i(43);jQuery((function(t){function e(e,l){var n=e.find("> li > .collapsible-header");i(l),n.not(l).removeClass("active").parent().removeClass("active").children(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}})}function i(e){e.hasClass("active")?e.parent().addClass("active"):e.parent().removeClass("active"),e.parent().hasClass("active")?e.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}}):e.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}})}function l(t){return n(t).length>0}function n(t){return t.closest("li > .collapsible-header")}t.fn.collapsible=function(o){var a={accordion:void 0};return o=t.extend(a,o),this.each((function(){var a=t(this),r=a.find("> li > .collapsible-header"),s=a.data("collapsible");a.off("click.collapse",".collapsible-header"),r.off("click.collapse"),o.accordion||"accordion"===s||void 0===s?(r.on("click.collapse",(function(i){var o=t(i.target);l(o)&&(o=n(o)),o.toggleClass("active"),e(a,o)})),e(a,r.filter(".active").first())):r.each((function(){t(this).on("click.collapse",(function(e){var o=t(e.target);l(o)&&(o=n(o)),o.toggleClass("active"),i(o)})),t(this).hasClass("active")&&i(t(this))}))}))},t(".collapsible").collapsible()}))},function(t,e,i){"use strict";i.r(e);i(43),i(75),i(97),i(121),i(133);jQuery((function(t){t(document).on("change",'.file-field input[type="file"]',(function(){var e=t(this),i=e.closest(".file-field").find("input.file-path"),l=e.get(0).files,n=[];n=Array.isArray(l)?l.map((function(t){return t.name})):Object.values(l).map((function(t){return t.name})),i.val(n.join(", ")),i.trigger("change")}))}))},function(t,e,i){"use strict";i.r(e);i(43),i(119),i(66),i(112),i(120);function l(t,e){for(var i=0;i<e.length;i++){var l=e[i];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}!function(t){var e=function(){function e(i,l){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.defaults={data:{},dataColor:"",closeColor:"#4285f4",closeBlurColor:"#ced4da",inputFocus:"1px solid #4285f4",inputBlur:"1px solid #ced4da",inputFocusShadow:"0 1px 0 0 #4285f4",inputBlurShadow:"",visibleOptions:5},this.enterCharCode=13,this.homeCharCode=36,this.endCharCode=35,this.arrowUpCharCode=38,this.arrowDownCharCode=40,this.count=-1,this.nextScrollHeight=-45,this.$input=i,this.options=this.assignOptions(l),this.$clearButton=this.$input.next(".mdb-autocomplete-clear"),this.$autocompleteWrap=t('<ul class="mdb-autocomplete-wrap"></ul>')}var i,n,o;return i=e,(n=[{key:"init",value:function(){this.handleEvents()}},{key:"handleEvents",value:function(){this.setData(),this.inputFocus(),this.inputBlur(),this.inputKeyupData(),this.inputLiClick(),this.clearAutocomplete(),this.setAutocompleteWrapHeight()}},{key:"assignOptions",value:function(e){return t.extend({},this.defaults,e)}},{key:"setAutocompleteWrapHeight",value:function(){this.$autocompleteWrap.css("max-height","".concat(45*this.options.visibleOptions,"px"))}},{key:"setData",value:function(){Object.keys(this.options.data).length&&this.$autocompleteWrap.insertAfter(this.$input)}},{key:"inputFocus",value:function(){var t=this;this.$input.on("focus",(function(){t.changeSVGcolors(),t.$input.css("border-bottom",t.options.inputFocus),t.$input.css("box-shadow",t.options.inputFocusShadow)}))}},{key:"inputBlur",value:function(){var t=this;this.$input.on("blur",(function(){t.$input.css("border-bottom",t.options.inputBlur),t.$input.css("box-shadow",t.options.inputBlurShadow)}))}},{key:"inputKeyupData",value:function(){var t=this;this.$input.on("keyup",(function(e){if(e.which===t.enterCharCode)return t.options.data.includes(t.$input.val())||t.options.data.push(t.$input.val()),t.$autocompleteWrap.find(".selected").trigger("click"),t.$autocompleteWrap.empty(),t.inputBlur(),t.count=-1,t.nextScrollHeight=-45,t.count;var i=t.$input.val();if(t.$autocompleteWrap.empty(),i.length){t.appendOptions(t.options.data,i);var l=t.$autocompleteWrap,n=t.$autocompleteWrap.find("li"),o=n.eq(t.count).outerHeight(),a=n.eq(t.count-1).outerHeight();e.which===t.homeCharCode&&t.homeHandler(l,n),e.which===t.endCharCode&&t.endHandler(l,n),e.which===t.arrowDownCharCode?t.arrowDownHandler(l,n,o):e.which===t.arrowUpCharCode&&t.arrowUpHandler(l,n,o,a),0===i.length?t.$clearButton.css("visibility","hidden"):t.$clearButton.css("visibility","visible"),t.$autocompleteWrap.children().css("color",t.options.dataColor)}else t.$clearButton.css("visibility","hidden")}))}},{key:"endHandler",value:function(t,e){this.count=e.length-1,this.nextScrollHeight=45*e.length-45,t.scrollTop(45*e.length),e.eq(-1).addClass("selected")}},{key:"homeHandler",value:function(t,e){this.count=0,this.nextScrollHeight=-45,t.scrollTop(0),e.eq(0).addClass("selected")}},{key:"arrowDownHandler",value:function(t,e,i){if(this.count>e.length-2)return this.count=-1,e.scrollTop(0),void(this.nextScrollHeight=-45);this.count++,this.nextScrollHeight+=i,t.scrollTop(this.nextScrollHeight),e.eq(this.count).addClass("selected")}},{key:"arrowUpHandler",value:function(t,e,i,l){this.count<1?(this.count=e.length,t.scrollTop(t.prop("scrollHeight")),this.nextScrollHeight=t.prop("scrollHeight")-i):this.count--,this.nextScrollHeight-=l,t.scrollTop(this.nextScrollHeight),e.eq(this.count).addClass("selected")}},{key:"appendOptions",value:function(e,i){for(var l in e)if(-1!==e[l].toLowerCase().indexOf(i.toLowerCase())){var n=t("<li>".concat(e[l],"</li>"));this.$autocompleteWrap.append(n)}}},{key:"inputLiClick",value:function(){var e=this;this.$autocompleteWrap.on("click","li",(function(i){i.preventDefault(),e.$input.val(t(i.target).text()),e.$autocompleteWrap.empty()}))}},{key:"clearAutocomplete",value:function(){var e=this;this.$clearButton.on("click",(function(i){i.preventDefault(),e.count=-1,e.nextScrollHeight=-45;var l=t(i.currentTarget);l.parent().find(".mdb-autocomplete").val(""),l.css("visibility","hidden"),e.$autocompleteWrap.empty(),l.parent().find("label").removeClass("active")}))}},{key:"changeSVGcolors",value:function(){var t=this;this.$input.hasClass("mdb-autocomplete")&&(this.$input.on("keyup",(function(e){t.fillSVG(e,t.options.closeColor)})),this.$input.on("blur",(function(e){t.fillSVG(e,t.options.closeBlurColor)})))}},{key:"fillSVG",value:function(e,i){e.preventDefault(),t(e.target).parent().find(".mdb-autocomplete-clear").find("svg").css("fill",i)}}])&&l(i.prototype,n),o&&l(i,o),e}();t.fn.mdbAutocomplete=function(i){return this.each((function(){new e(t(this),i).init()}))}}(jQuery)},function(t,e){var i=!1;function l(){$("#mdb-preloader").fadeOut("slow"),$("body").removeAttr("aria-busy")}$(window).on("load",(function(){i=!0})),jQuery((function(t){t("body").attr("aria-busy",!0),t("#preloader-markup").load("./dev/dist/mdb-addons/preloader.html",(function(){i?l():t(window).on("load",(function(){l()}))}))}))},function(t,e,i){"use strict";i.r(e);i(43);jQuery((function(t){var e="input[type=range]:not(.custom-range):not(.multi-range)",i='<span class="thumb" style="margin-left: 7px"><span class="value"></span></span>',l=!1;function n(t,e){var i=t.attr("min"),l=t.attr("max"),n=t.width()-13.5,o=n/(l-i),a=o*t.val()-o*i;a<0?a=0:a>n&&(a=n),e.addClass("active").css("left",a)}function o(t,e,i,l,n,o,a){t.velocity({height:e,width:i,top:l,marginLeft:n},{duration:o,easing:a||"swing"})}function a(t){o(t,"30px","30px","-27px","-7px",200,"easeOutExpo")}function r(t){o(t,"0","0","10px","7px",200)}t(document).on("change",e,(function(){var e=t(this);e.siblings(".thumb").find(".value").html(e.val())})),t(document).on("mousedown touchstart contextmenu",e,(function(o){var r=t(this),s=!r.siblings(".thumb").length,c="contextmenu"===o.type;s&&function(){var l=t(i);t(e).after(l)}();var u=r.siblings(".thumb");l=!c,r.addClass("active"),u.hasClass("active")||a(u),n(t(this),u),u.find(".value").html(r.val())})),t(document).on("mouseup touchend",".range-field",(function(){var e=t(this).children(".thumb");l=!1,e.hasClass("active")&&r(e),e.removeClass("active")})),t(document).on("input mousemove touchmove",".range-field",(function(){var i=t(this).children(".thumb");l&&(i.hasClass("active")||a(i),n(t(this).children(e),i),i.find(".value").html(i.siblings(e).val()))})),t(document).on("mouseout touchleave",".range-field",(function(){if(!l){var e=t(this).children(".thumb");e.hasClass("active")&&r(e),e.removeClass("active")}}))}))},function(t,e,i){"use strict";i.r(e);i(69),i(71),i(72),i(43),i(58),i(84),i(111),i(65),i(95),i(73),i(74);function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var i=[],l=!0,n=!1,o=void 0;try{for(var a,r=t[Symbol.iterator]();!(l=(a=r.next()).done)&&(i.push(a.value),!e||i.length!==e);l=!0);}catch(t){n=!0,o=t}finally{try{l||null==r.return||r.return()}finally{if(n)throw o}}return i}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function n(t,e){for(var i=0;i<e.length;i++){var l=e[i];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}jQuery((function(t){var e=function(){function e(i,l){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.settings={menuLeftMinBorder:.3,menuLeftMaxBorder:-.5,menuRightMinBorder:-.3,menuRightMaxBorder:.5,menuVelocityOffset:10},this.defaults={menuWidth:240,edge:"left",closeOnClick:!1,breakpoint:1440,timeDurationOpen:500,timeDurationClose:500,timeDurationOverlayOpen:50,timeDurationOverlayClose:200,easingOpen:"easeInOutQuad",easingClose:"easeInOutQuad",showOverlay:!0,showCloseButton:!1,slim:!1},this.$element=i,this.$elementCloned=i.clone().css({display:"inline-block",lineHeight:"24px"}),this.options=this.assignOptions(l),this.menuOut=!1,this.lastTouchVelocity={x:{startPosition:0,startTime:0,endPosition:0,endTime:0}},this.$body=t("body"),this.$menu=t("#".concat(this.$element.attr("data-activates"))),this.$sidenavOverlay=t("#sidenav-overlay"),this.$dragTarget=t('<div class="drag-target"></div>'),this.$body.append(this.$dragTarget)}var i,o,a;return i=e,(o=[{key:"assignOptions",value:function(e){return t.extend({},this.defaults,e)}},{key:"init",value:function(){this.setMenuWidth(),this.setMenuTranslation(),this.closeOnClick(),this.openOnClick(),this.bindTouchEvents(),this.showCloseButton(),this.inputOnClick(),!0===this.options.slim&&this.handleSlim()}},{key:"setMenuWidth",value:function(){var e=t("#".concat(this.$menu.attr("id"))).find("> .sidenav-bg");this.$menu.css("width",this.options.menuWidth),e.css("width",this.options.menuWidth)}},{key:"setMenuTranslation",value:function(){var e=this;"left"===this.options.edge?(this.$menu.css("transform","translateX(-100%)"),this.$dragTarget.css({left:0})):(this.$menu.addClass("right-aligned").css("transform","translateX(100%)"),this.$dragTarget.css({right:0})),this.$menu.hasClass("fixed")&&(window.innerWidth>this.options.breakpoint?(this.menuOut=!0,this.$menu.css("transform","translateX(0)")):this.menuOut=!1,this.$menu.find("input[type=text]").on("touchstart",(function(){e.$menu.addClass("transform-fix-input")})),t(window).on("resize",(function(){if(window.innerWidth>e.options.breakpoint)e.$sidenavOverlay.length?e.removeMenu(!0):(e.$menu.css("transform","translateX(0%)"),e.menuOut=!0);else if(!1===e.menuOut){var t="left"===e.options.edge?"-100":"100";e.$menu.css("transform","translateX(".concat(t,"%)"))}else e.menuOut=!1})))}},{key:"closeOnClick",value:function(){var t=this;!0===this.options.closeOnClick&&(this.$menu.on("click","a:not(.collapsible-header)",(function(){return t.removeMenu()})),"translateX(0)"===this.$menu.css("transform")&&this.$menu.on("click",(function(){return t.removeMenu()})))}},{key:"openOnClick",value:function(){var e=this;this.$element.on("click",(function(i){if(i.preventDefault(),!0===e.menuOut)return e.removeMenu();!0===e.options.showOverlay?t("#sidenav-overlay").length||(e.$sidenavOverlay=t('<div id="sidenav-overlay"></div>'),e.$body.append(e.$sidenavOverlay)):e.showCloseButton();var l=[];l="left"===e.options.edge?[0,-1*e.options.menuWidth]:[0,e.options.menuWidth],"matrix(1, 0, 0, 1, 0, 0)"!==e.$menu.css("transform")&&e.$menu.velocity({translateX:l},{duration:e.options.timeDurationOpen,queue:!1,easing:e.options.easingOpen}),e.$sidenavOverlay.on("click",(function(){return e.removeMenu()})),e.$sidenavOverlay.on("touchmove",e.touchmoveEventHandler.bind(e)),e.$menu.on("touchmove",(function(t){t.preventDefault(),e.$menu.find(".custom-scrollbar").css("padding-bottom","30px")})),!1===e.options.showOverlay&&(e.menuOut=!0)}))}},{key:"bindTouchEvents",value:function(){var t=this;this.$dragTarget.on("click",(function(){t.menuOut&&t.removeMenu()})),this.$dragTarget.on("touchstart",(function(e){t.lastTouchVelocity.x.startPosition=e.touches[0].clientX,t.lastTouchVelocity.x.startTime=Date.now()})),this.$dragTarget.on("touchmove",this.touchmoveEventHandler.bind(this)),this.$dragTarget.on("touchend",this.touchendEventHandler.bind(this))}},{key:"showCloseButton",value:function(){!0===this.options.showCloseButton&&(this.$menu.prepend(this.$elementCloned),this.$menu.find(".logo-wrapper").css({borderTop:"1px solid rgba(153,153,153,.3)"}))}},{key:"inputOnClick",value:function(){var t=this;this.$menu.find("input[type=text]").on("touchstart",(function(){return t.$menu.css("transform","translateX(0)")}))}},{key:"removeMenu",value:function(t){var e=this;this.$body.css({overflow:"",width:""}),this.$menu.velocity({translateX:"left"===this.options.edge?"-100%":"100%"},{duration:this.options.timeDurationClose,queue:!1,easing:this.options.easingClose,complete:function(){!0===t&&(e.$menu.removeAttr("style"),e.$menu.css("width",e.options.menuWidth))}}),this.$menu.removeClass("transform-fix-input"),this.hideSidenavOverlay(),this.menuOut=!1}},{key:"handleSlim",value:function(){var e=this;t("#toggle").on("click",(function(){e.$menu.hasClass("slim")?(e.$menu.removeClass("slim"),t(".sv-slim-icon").removeClass("fa-angle-double-right").addClass("fa-angle-double-left"),t(".fixed-sn .double-nav").css({transition:"all .3s ease-in-out","padding-left":"15.9rem"}),t(".fixed-sn main, .fixed-sn footer").css({transition:"all .3s ease-in-out","padding-left":"15rem"})):(e.$menu.addClass("slim"),t(".sv-slim-icon").removeClass("fa-angle-double-left").addClass("fa-angle-double-right"),t(".fixed-sn .double-nav").css("padding-left","4.6rem"),t(".fixed-sn main, .fixed-sn footer").css({"padding-left":"3.7rem"}))}))}},{key:"touchmoveEventHandler",value:function(t){if("touchmove"===t.type){var e=l(t.touches,1)[0],i=e.clientX;Date.now()-this.lastTouchVelocity.x.startTime>20&&(this.lastTouchVelocity.x.startPosition=e.clientX,this.lastTouchVelocity.x.startTime=Date.now()),this.disableScrolling(),0!==this.$sidenavOverlay.length||this.buildSidenavOverlay(),"left"===this.options.edge&&(i>this.options.menuWidth?i=this.options.menuWidth:i<0&&(i=0)),this.translateSidenavX(i),this.updateOverlayOpacity(i)}}},{key:"calculateTouchVelocityX",value:function(){return Math.abs(this.lastTouchVelocity.x.endPosition-this.lastTouchVelocity.x.startPosition)/Math.abs(this.lastTouchVelocity.x.endTime-this.lastTouchVelocity.x.startTime)}},{key:"touchendEventHandler",value:function(t){if("touchend"===t.type){var e=t.changedTouches[0];this.lastTouchVelocity.x.endTime=Date.now(),this.lastTouchVelocity.x.endPosition=e.clientX;var i=this.calculateTouchVelocityX(),l=e.clientX,n=l-this.options.menuWidth,o=l-this.options.menuWidth/2;n>0&&(n=0),o<0&&(o=0),"left"===this.options.edge?(this.menuOut||i<=this.settings.menuLeftMinBorder||i<this.options.menuLeftMaxBorder?(0!==n&&this.translateMenuX([0,n],"300"),this.showSidenavOverlay()):(!this.menuOut||i>this.settings.menuLeftMinBorder)&&(this.enableScrolling(),this.translateMenuX([-1*this.options.menuWidth-this.options.menuVelocityOffset,n],"200"),this.hideSidenavOverlay()),this.$dragTarget.css({width:"10px",right:"",left:0})):this.menuOut&&i>=this.settings.menuRightMinBorder||i>this.settings.menuRightMaxBorder?(this.translateMenuX([0,o],"300"),this.showSidenavOverlay(),this.$dragTarget.css({width:"50%",right:"",left:0})):(!this.menuOut||i<this.settings.menuRightMinBorder)&&(this.enableScrolling(),this.translateMenuX([this.options.menuWidth+this.options.menuVelocityOffset,o],"200"),this.hideSidenavOverlay(),this.$dragTarget.css({width:"10px",right:0,left:""}))}}},{key:"buildSidenavOverlay",value:function(){var e=this;!0===this.options.showOverlay&&(this.$sidenavOverlay=t('<div id="sidenav-overlay"></div>'),this.$sidenavOverlay.css("opacity",0).on("click",(function(){return e.removeMenu()})),this.$body.append(this.$sidenavOverlay))}},{key:"disableScrolling",value:function(){var t=this.$body.innerWidth();this.$body.css("overflow","hidden"),this.$body.width(t)}},{key:"enableScrolling",value:function(){this.$body.css({overflow:"",width:""})}},{key:"translateMenuX",value:function(t,e){this.$menu.velocity({translateX:t},{duration:"string"==typeof e?Number(e):e,queue:!1,easing:this.options.easingOpen})}},{key:"translateSidenavX",value:function(t){if("left"===this.options.edge){var e=t>=this.options.menuWidth/2;this.menuOut=e,this.$menu.css("transform","translateX(".concat(t-this.options.menuWidth,"px)"))}else{var i=t<window.innerWidth-this.options.menuWidth/2;this.menuOut=i;var l=t-this.options.menuWidth/2;l<0&&(l=0),this.$menu.css("transform","translateX(".concat(l,"px)"))}}},{key:"updateOverlayOpacity",value:function(t){var e;e="left"===this.options.edge?t/this.options.menuWidth:Math.abs((t-window.innerWidth)/this.options.menuWidth),this.$sidenavOverlay.velocity({opacity:e},{duration:10,queue:!1,easing:this.options.easingOpen})}},{key:"showSidenavOverlay",value:function(){!0!==this.options.showOverlay||t("#sidenav-overlay").length||this.buildSidenavOverlay(),this.$sidenavOverlay.velocity({opacity:1},{duration:this.options.timeDurationOverlayOpen,queue:!1,easing:this.options.easingOpen})}},{key:"hideSidenavOverlay",value:function(){this.$sidenavOverlay.velocity({opacity:0},{duration:this.options.timeDurationOverlayClose,queue:!1,easing:this.options.easingOpen,complete:function(){t(this).remove()}})}}])&&n(i.prototype,o),a&&n(i,a),e}();t.fn.sideNav=function(i){t(this).each((function(){new e(t(this),i).init()}))},t(".side-nav").on("touchmove",(function(t){t.stopPropagation()}),!1)}))},function(t,e,i){"use strict";i.r(e);i(69),i(71),i(72),i(66),i(58),i(65),i(73),i(74);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}jQuery((function(){$(".smooth-scroll").on("click","a",(function(t){t.preventDefault();var e=$(this),i=e.attr("href");if(void 0!==l(i)&&0===i.indexOf("#")){var n=$(this).attr("data-offset")||0;$("body,html").animate({scrollTop:$(i).offset().top-n},700);var o=e.parentsUntil(".smooth-scroll").last().parent().attr("data-allow-hashes");void 0!==l(o)&&!1!==o&&history.replaceState(null,null,i)}}))}))},function(t,e,i){"use strict";i.r(e);i(69),i(76),i(92),i(43),i(103),i(75),i(163),i(164),i(112),i(104);function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,l)}return i}function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function o(t,e){for(var i=0;i<e.length;i++){var l=e[i];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}jQuery((function(t){var e=function(){function e(i){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.$activator=i,this.$activates=t("#".concat(i.attr("data-activates"))),this.options={inDuration:this.fallback().or(i.data("induration")).or(i.attr("data-in-duration")).or(l.inDuration).or(300).value(),outDuration:this.fallback().or(i.data("outduration")).or(i.attr("data-out-duration")).or(l.outDuration).or(225).value(),easingEffectIn:this.fallback().or(i.data("easingeffectin")).or(i.attr("data-easing-effect-in")).or(l.easingEffectIn).or("easeOutCubic").value(),easingEffectOut:this.fallback().or(i.data("easingeffectout")).or(i.attr("data-easing-effect-out")).or(l.easingEffectOut).or("swing").value(),constrainWidth:this.fallback().or(i.data("constrainwidth")).or(i.attr("data-constrain-width")).or(l.constrainWidth).or(!0).value(),hover:this.fallback().or(i.data("hover")).or(i.attr("data-hover")).or(l.hover).or(!1).value(),gutter:this.fallback().or(i.data("gutter")).or(i.attr("data-gutter")).or(l.gutter).or(0).value(),belowOrigin:this.fallback().or(i.data("beloworigin")).or(i.attr("data-below-origin")).or(l.belowOrigin).or(!1).value(),alignment:this.fallback().or(i.data("alignment")).or(i.attr("data-alignment")).or(l.alignment).or("left").value(),maxHeight:this.fallback().or(i.data("maxheight")).or(i.attr("data-max-height")).or(l.maxHeight).or("").value(),resetScroll:this.fallback().or(i.data("resetscroll")).or(i.attr("data-reset-scroll")).or(l.resetScroll).or(!0).value()},this.isFocused=!1}var i,a,r;return i=e,r=[{key:"mdbDropdownAutoInit",value:function(){t(".dropdown-button").dropdown(),this.bindMultiLevelDropdownEvents(),this.bindBootstrapEvents()}},{key:"bindMultiLevelDropdownEvents",value:function(){t(".multi-level-dropdown .dropdown-submenu > a").on("mouseenter",(function(e){var i=t(this);t(".multi-level-dropdown .dropdown-submenu .dropdown-menu").removeClass("show"),i.next(".dropdown-menu").addClass("show"),e.stopPropagation()})),t(".multi-level-dropdown .dropdown").on("hidden.bs.dropdown",(function(){t(".multi-level-dropdown .dropdown-menu.show").removeClass("show")}))}},{key:"bindBootstrapEvents",value:function(){var e=this;t(".dropdown, .dropup").on({"show.bs.dropdown":function(i){var l=t(i.target),n=e._getDropdownEffects(l);e._dropdownEffectStart(l,n.effectIn)},"shown.bs.dropdown":function(i){var l=t(i.target),n=e._getDropdownEffects(l);n.effectIn&&n.effectOut&&e._dropdownEffectEnd(l,n)},"hide.bs.dropdown":function(i){var l=t(i.target),n=e._getDropdownEffects(l);n.effectOut&&(i.preventDefault(),e._dropdownEffectStart(l,n.effectOut),e._dropdownEffectEnd(l,n,(function(){l.removeClass("show"),l.find(".dropdown-menu").removeClass("show")})))}})}},{key:"_getDropdownEffects",value:function(t){var e="fadeIn",i="fadeOut",l=t.find(".dropdown-menu"),n=t.parents("ul.nav");return n.height>0&&(e=n.data("dropdown-in")||null,i=n.data("dropdown-out")||null),{effectIn:l.data("dropdown-in")||e,effectOut:l.data("dropdown-out")||i}}},{key:"_dropdownEffectStart",value:function(t,e){e&&(t.addClass("dropdown-animating"),t.find(".dropdown-menu").addClass(["animated",e].join(" ")))}},{key:"_dropdownEffectEnd",value:function(t,e,i){t.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",(function(){t.removeClass("dropdown-animating"),t.find(".dropdown-menu").removeClass(["animated",e.effectIn,e.effectOut].join(" ")),"function"==typeof i&&i()}))}}],(a=[{key:"returnPublicInterface",value:function(){return{$activator:this.$activator,$activates:this.$activates,updatePosition:this.updatePosition.bind(this)}}},{key:"init",value:function(){this.appendDropdownToActivator(),this.options.hover?this.handleHoverableDropdown():this.handleClickableDropdown(),this.bindEvents()}},{key:"appendDropdownToActivator",value:function(){this.$activator.after(this.$activates)}},{key:"handleHoverableDropdown",value:function(){var e=this,i=!1;this.$activator.unbind("click.".concat(this.$activator.attr("id"))),this.$activator.on("mouseenter",(function(){!1===i&&(e.placeDropdown(),i=!0)})),this.$activator.on("mouseleave",(function(l){var n=l.toElement||l.relatedTarget;t(n).closest(".dropdown-content").is(e.$activates)||(e.$activates.stop(!0,!0),e.hideDropdown(),i=!1)})),this.$activates.on("mouseleave",(function(l){var n=l.toElement||l.relatedTarget;t(n).closest(".dropdown-button").is(e.$activator)||(e.$activates.stop(!0,!0),e.hideDropdown(),i=!1)}))}},{key:"handleClickableDropdown",value:function(){var e=this;this.$activator.unbind("click.".concat(this.$activator.attr("id"))),this.$activator.bind("click.".concat(this.$activator.attr("id")),(function(i){if(!e.isFocused){var l=e.$activator.get(0)===i.currentTarget,n=e.$activator.hasClass("active"),o=0!==t(i.target).closest(".dropdown-content").length;!l||n||o?n&&(e.hideDropdown(),t(document).unbind("click.".concat(e.$activates.attr("id")," touchstart.").concat(e.$activates.attr("id")))):(i.preventDefault(),e.placeDropdown("click")),e.$activates.hasClass("active")&&t(document).bind("click.".concat(e.$activates.attr("id")," touchstart.").concat(e.$activates.attr("id")),(function(i){!e.$activates.is(i.target)&&!e.$activator.is(i.target)&&!e.$activator.find(i.target).length&&(e.hideDropdown(),t(document).unbind("click.".concat(e.$activates.attr("id")," touchstart.").concat(e.$activates.attr("id"))))}))}}))}},{key:"bindEvents",value:function(){var t=this;this.$activator.on("open",(function(e,i){t.placeDropdown(i)})),this.$activator.on("close",this.hideDropdown.bind(this))}},{key:"placeDropdown",value:function(t){"focus"===t&&(this.isFocused=!0),this.$activates.addClass("active"),this.$activator.addClass("active"),!0===this.options.constrainWidth?this.$activates.css("width",this.$activator.outerWidth()):this.$activates.css("white-space","nowrap"),this.updatePosition(),this.showDropdown()}},{key:"showDropdown",value:function(){this.$activates.stop(!0,!0).css("opacity",0).slideDown({queue:!1,duration:this.options.inDuration,easing:this.options.easingEffectIn,complete:function(){t(this).css("height","")}}).animate(function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(i,!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({opacity:1},this.options.resetScroll&&{scrollTop:0}),{queue:!1,duration:this.options.inDuration,easing:"easeOutSine"})}},{key:"hideDropdown",value:function(){var t=this;this.isFocused=!1,this.$activates.fadeOut({durations:this.options.outDuration,easing:this.options.easingEffectOut}),this.$activates.removeClass("active"),this.$activator.removeClass("active"),setTimeout((function(){t.$activates.css("max-height",t.options.maxHeight)}),this.options.outDuration)}},{key:"updatePosition",value:function(){var e=window.innerHeight,i=this.$activator.innerHeight(),l=this.$activator.offset().top-t(window).scrollTop(),n=this._getHorizontalAlignment(),o=0,a=0,r=this.$activator.parent(),s=this.options.belowOrigin?i:0,c=!r.is("body")&&r.get(0).scrollHeight>r.get(0).clientHeight?r.get(0).scrollTop:0,u=l+this.$activates.innerHeight()>e,d=l+i-this.$activates.innerHeight()<0;if(u&&d){var h=e-l-s;this.$activates.css("max-height",h)}else u&&(s||(s+=i),s-=this.$activates.innerHeight());"left"===n?(o=this.options.gutter,a=this.$activator.position().left+o):"right"===n&&(a=this.$activator.position().left+this.$activator.outerWidth()-this.$activates.outerWidth()+(o=-this.options.gutter)),this.$activates.css({position:"absolute",top:this.$activator.position().top+s+c,left:a})}},{key:"_getHorizontalAlignment",value:function(){var e=this.$activator.offset().left;return e+this.$activates.innerWidth()>t(window).width()?"right":e-this.$activates.innerWidth()+this.$activator.innerWidth()<0?"left":this.options.alignment}},{key:"fallback",value:function(){return{_value:void 0,or:function(t){return void 0!==t&&void 0===this._value&&(this._value=t),this},value:function(){return this._value}}}}])&&o(i.prototype,a),r&&o(i,r),e}();t.fn.scrollTo=function(e){return this.scrollTop(this.scrollTop()-this.offset().top+t(e).offset().top),this},t.fn.dropdown=function(t){if(this.length>1){var i=[];return this.each((function(){var l=new e(this,t);l.init(),i.push(l.returnPublicInterface())})),i}var l=new e(this,t);return l.init(),l.returnPublicInterface()},e.mdbDropdownAutoInit()}))},function(t,e,i){var l=i(4),n=i(1),o=i(10),a=i(22).f,r=i(7),s=n((function(){a(1)}));l({target:"Object",stat:!0,forced:!r||s,sham:!r},{getOwnPropertyDescriptor:function(t,e){return a(o(t),e)}})},function(t,e,i){var l=i(4),n=i(7),o=i(53),a=i(10),r=i(22),s=i(67);l({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){for(var e,i,l=a(t),n=r.f,c=o(l),u={},d=0;c.length>d;)void 0!==(i=n(l,e=c[d++]))&&s(u,e,i);return u}})},function(t,e,i){"use strict";i.r(e);i(43),i(66);function l(t,e){for(var i=0;i<e.length;i++){var l=e[i];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}jQuery((function(t){var e=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.$searchWrappers=t,this.options={color:this.fallback().or(i.color).or("#000").value(),backgroundColor:this.fallback().or(i.backgroundColor).or("").value(),fontSize:this.fallback().or(i.fontSize).or(".9rem").value(),fontWeight:this.fallback().or(i.fontWeight).or("400").value(),borderRadius:this.fallback().or(i.borderRadius).or("").value(),borderColor:this.fallback().or(i.borderColor).or("").value(),margin:this.fallback().or(i.margin).or("").value()}}var i,n,o;return i=e,(n=[{key:"init",value:function(){return this.bindSearchEvents(),this.$searchWrappers.css({color:this.options.color,backgroundColor:this.options.backgroundColor,fontSize:this.options.fontSize,fontWeight:this.options.fontWeight,borderRadius:this.options.borderRadius,borderColor:this.options.borderColor,margin:this.options.margin})}},{key:"bindSearchEvents",value:function(){this.$searchWrappers.each((function(){var e=t(this).find("input").first();e.on("keyup",(function(){e.closest("div[id]").find("a, li").each((function(){var i=t(this);i.html().toLowerCase().indexOf(e.val().toLowerCase())>-1?i.css({display:""}):i.css({display:"none"})}))}))}))}},{key:"fallback",value:function(){return{_value:void 0,or:function(t){return void 0!==t&&void 0===this._value&&(this._value=t),this},value:function(){return this._value}}}}])&&l(i.prototype,n),o&&l(i,o),e}();t.fn.mdbDropSearch=function(t){return new e(this,t).init()}}))},function(t,e,i){"use strict";i.r(e);i(76),i(43),i(103),i(66),i(110),i(84),i(65),i(68),i(95),i(86),i(113),i(104);var l=i(124);function n(t,e){for(var i=0;i<e.length;i++){var l=e[i];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}jQuery((function(t){var e,i=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={destroy:this.fallback().or(i.destroy).or(!1).value(),validate:this.fallback().or(t.attr("data-validate")).or(i.validate).or(!1).value(),selectId:this.fallback().or(t.attr("data-select-id")).or(i.selectId).or(null).value(),defaultMaterialInput:this.fallback().or(t.attr("data-default-material-input")).or(i.defaultMaterialInput).or(!1).value(),fasClasses:this.fallback().or(t.attr("data-fas-classes")).or(i.fasClasses).or("").value(),farClasses:this.fallback().or(t.attr("data-far-classes")).or(i.farClasses).or("").value(),fabClasses:this.fallback().or(t.attr("data-fab-classes")).or(i.fabClasses).or("").value(),copyClassesOption:this.fallback().or(t.attr("data-copy-classes-option")).or(i.copyClassesOption).or(!1).value(),labels:{selectAll:this.fallback().or(t.attr("data-label-select-all")).or((i.labels||{}).selectAll).or("Select all").value(),optionsSelected:this.fallback().or(t.attr("data-label-options-selected")).or((i.labels||{}).optionsSelected).or("options selected").value(),validFeedback:this.fallback().or(t.attr("data-label-valid-feedback")).or((i.labels||{}).validFeedback).or("Ok").value(),invalidFeedback:this.fallback().or(t.attr("data-label-invalid-feedback")).or((i.labels||{}).invalidFeedback).or("Incorrect value").value(),noSearchResults:this.fallback().or(t.attr("data-label-no-search-results")).or((i.labels||{}).noSearchResults).or("No results").value()},keyboardActiveClass:this.fallback().or(t.attr("data-keyboard-active-class")).or(i.keyboardActiveClass).or("heavy-rain-gradient").value(),placeholder:this.fallback().or(t.attr("data-placeholder")).or(i.placeholder).or(null).value(),visibleOptions:this.fallback().or(t.attr("data-visible-options")).or(i.visibleOptions).or(5).value(),maxSelectedOptions:this.fallback().or(t.attr("data-max-selected-options")).or(i.maxSelectedOptions).or(5).value(),showResetButton:this.fallback().or(t.attr("data-show-reset-button")).or(i.showResetButton).or(!1).value()},this.uuid=t.attr("id")||this.options.selectId||this._randomUUID(),this.view=new l.default(t,{options:this.options,properties:{id:this.uuid}}),this.selectedOptionsIndexes=[],e.mutationObservers=[]}var i,o,a;return i=e,a=[{key:"clearMutationObservers",value:function(){e.mutationObservers.forEach((function(t){t.disconnect(),t.customStatus="stopped"}))}},{key:"mdbSelectAutoInit",value:function(){t(".mdb-select.mdb-select-autoinit").materialSelect()}}],(o=[{key:"init",value:function(){var t=this;this.options.destroy?this.view.destroy():(this.isInitialized&&this.view.destroy(),this.view.render(),this.view.selectPreselectedOptions((function(e){return t._toggleSelectedValue(e)})),this.bindEvents())}},{key:"bindEvents",value:function(){var t=this;this.bindMutationObserverChange(),this.view.isEditable&&this.view.isSearchable&&this.view.bindResetButtonClick((function(){return t._resetSelection()})),this.view.bindAddNewOptionClick(),this.view.bindMaterialSelectFocus(),this.view.bindMaterialSelectClick(),this.view.bindMaterialSelectBlur(),this.view.bindMaterialOptionsListTouchstart(),this.view.bindMaterialSelectKeydown(),this.view.bindMaterialSelectDropdownToggle(),this.view.bindToggleAllClick((function(e){return t._toggleSelectedValue(e)})),this.view.bindMaterialOptionMousedown(),this.view.bindMaterialOptionClick((function(e){return t._toggleSelectedValue(e)})),!this.view.isMultiple&&this.view.isSearchable&&this.view.bindSingleMaterialOptionClick(),this.view.isSearchable&&this.view.bindSearchInputKeyup(),this.view.bindHtmlClick(),this.view.bindMobileDevicesMousedown(),this.view.bindSaveBtnClick()}},{key:"bindMutationObserverChange",value:function(){var t=new MutationObserver(this._onMutationObserverChange.bind(this));t.observe(this.view.$nativeSelect.get(0),{attributes:!0,childList:!0,characterData:!0,subtree:!0}),t.customId=this.uuid,t.customStatus="observing",e.clearMutationObservers(),e.mutationObservers.push(t)}},{key:"_onMutationObserverChange",value:function(i){i.forEach((function(i){var l=t(i.target).closest("select");!0!==l.data("stop-refresh")&&("childList"===i.type||"attributes"===i.type&&t(i.target).is("option"))&&(e.clearMutationObservers(),l.materialSelect({destroy:!0}),l.materialSelect())}))}},{key:"_resetSelection",value:function(){this.selectedOptionsIndexes=[],this.view.$nativeSelect.find("option").prop("selected",!1)}},{key:"_toggleSelectedValue",value:function(t){var e=this.selectedOptionsIndexes.indexOf(t),i=-1!==e;return i?this.selectedOptionsIndexes.splice(e,1):this.selectedOptionsIndexes.push(t),this.view.$nativeSelect.find("option").eq(t).prop("selected",!i),this._setValueToMaterialSelect(),!i}},{key:"_setValueToMaterialSelect",value:function(){var t=this,e="",i=this.selectedOptionsIndexes.length;this.selectedOptionsIndexes.forEach((function(i){return e+=", ".concat(t.view.$nativeSelect.find("option").eq(i).text().replace(/  +/g," ").trim())})),0===(e=this.options.maxSelectedOptions>=0&&i>this.options.maxSelectedOptions?"".concat(i," ").concat(this.options.labels.optionsSelected):e.substring(2)).length&&(e=this.view.$nativeSelect.find("option:disabled").eq(0).text()),this.view.$nativeSelect.siblings("".concat(this.options.defaultMaterialInput?"input.multi-bs-select":"input.select-dropdown")).val(e)}},{key:"_randomUUID",value:function(){var t=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var i=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"===e?i:3&i|8).toString(16)}))}},{key:"fallback",value:function(){return{_value:void 0,or:function(t){return void 0!==t&&void 0===this._value&&(this._value=t),this},value:function(){return this._value}}}},{key:"isInitialized",get:function(){return Boolean(this.view.$nativeSelect.data("select-id"))&&this.view.$nativeSelect.hasClass("initialized")}}])&&n(i.prototype,o),a&&n(i,a),e}();t.fn.materialSelect=function(e){t(this).not(".browser-default").not(".custom-select").each((function(){new i(t(this),e).init()}))},e=t.fn.val,t.fn.val=function(t){if(!arguments.length)return e.call(this);if(!0!==this.data("stop-refresh")&&this.hasClass("mdb-select")&&this.hasClass("initialized")){i.clearMutationObservers(),this.materialSelect({destroy:!0});var l=e.call(this,t);return this.materialSelect(),l}return e.call(this,t)},i.mdbSelectAutoInit()}))},function(t,e,i){"use strict";var l=i(4),n=i(128).left;l({target:"Array",proto:!0,forced:i(52)("reduce")},{reduce:function(t){return n(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},,function(t,e,i){var l=i(4),n=i(135),o=i(51);l({target:"Array",proto:!0},{fill:n}),o("fill")},function(t,e){!function(t){t("body").on("shown.bs.modal",".modal",(function(){t(".modal-backdrop").length||($modal_dialog=t(this).children(".modal-dialog"),$modal_dialog.hasClass("modal-side")&&(t(this).addClass("modal-scrolling"),t("body").addClass("scrollable")),$modal_dialog.hasClass("modal-frame")&&(t(this).addClass("modal-content-clickable"),t("body").addClass("scrollable")))})),t("body").on("hidden.bs.modal",".modal",(function(){t("body").removeClass("scrollable")}))}(jQuery)},function(t,e){jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,i,l,n){return jQuery.easing[jQuery.easing.def](t,e,i,l,n)},easeInQuad:function(t,e,i,l,n){return l*(e/=n)*e+i},easeOutQuad:function(t,e,i,l,n){return-l*(e/=n)*(e-2)+i},easeInOutQuad:function(t,e,i,l,n){return(e/=n/2)<1?l/2*e*e+i:-l/2*(--e*(e-2)-1)+i},easeInCubic:function(t,e,i,l,n){return l*(e/=n)*e*e+i},easeOutCubic:function(t,e,i,l,n){return l*((e=e/n-1)*e*e+1)+i},easeInOutCubic:function(t,e,i,l,n){return(e/=n/2)<1?l/2*e*e*e+i:l/2*((e-=2)*e*e+2)+i},easeInQuart:function(t,e,i,l,n){return l*(e/=n)*e*e*e+i},easeOutQuart:function(t,e,i,l,n){return-l*((e=e/n-1)*e*e*e-1)+i},easeInOutQuart:function(t,e,i,l,n){return(e/=n/2)<1?l/2*e*e*e*e+i:-l/2*((e-=2)*e*e*e-2)+i},easeInQuint:function(t,e,i,l,n){return l*(e/=n)*e*e*e*e+i},easeOutQuint:function(t,e,i,l,n){return l*((e=e/n-1)*e*e*e*e+1)+i},easeInOutQuint:function(t,e,i,l,n){return(e/=n/2)<1?l/2*e*e*e*e*e+i:l/2*((e-=2)*e*e*e*e+2)+i},easeInSine:function(t,e,i,l,n){return-l*Math.cos(e/n*(Math.PI/2))+l+i},easeOutSine:function(t,e,i,l,n){return l*Math.sin(e/n*(Math.PI/2))+i},easeInOutSine:function(t,e,i,l,n){return-l/2*(Math.cos(Math.PI*e/n)-1)+i},easeInExpo:function(t,e,i,l,n){return 0==e?i:l*Math.pow(2,10*(e/n-1))+i},easeOutExpo:function(t,e,i,l,n){return e==n?i+l:l*(1-Math.pow(2,-10*e/n))+i},easeInOutExpo:function(t,e,i,l,n){return 0==e?i:e==n?i+l:(e/=n/2)<1?l/2*Math.pow(2,10*(e-1))+i:l/2*(2-Math.pow(2,-10*--e))+i},easeInCirc:function(t,e,i,l,n){return-l*(Math.sqrt(1-(e/=n)*e)-1)+i},easeOutCirc:function(t,e,i,l,n){return l*Math.sqrt(1-(e=e/n-1)*e)+i},easeInOutCirc:function(t,e,i,l,n){return(e/=n/2)<1?-l/2*(Math.sqrt(1-e*e)-1)+i:l/2*(Math.sqrt(1-(e-=2)*e)+1)+i},easeInElastic:function(t,e,i,l,n){var o=1.70158,a=0,r=l;if(0==e)return i;if(1==(e/=n))return i+l;if(a||(a=.3*n),r<Math.abs(l)){r=l;o=a/4}else o=a/(2*Math.PI)*Math.asin(l/r);return-r*Math.pow(2,10*(e-=1))*Math.sin((e*n-o)*(2*Math.PI)/a)+i},easeOutElastic:function(t,e,i,l,n){var o=1.70158,a=0,r=l;if(0==e)return i;if(1==(e/=n))return i+l;if(a||(a=.3*n),r<Math.abs(l)){r=l;o=a/4}else o=a/(2*Math.PI)*Math.asin(l/r);return r*Math.pow(2,-10*e)*Math.sin((e*n-o)*(2*Math.PI)/a)+l+i},easeInOutElastic:function(t,e,i,l,n){var o=1.70158,a=0,r=l;if(0==e)return i;if(2==(e/=n/2))return i+l;if(a||(a=n*(.3*1.5)),r<Math.abs(l)){r=l;o=a/4}else o=a/(2*Math.PI)*Math.asin(l/r);return e<1?r*Math.pow(2,10*(e-=1))*Math.sin((e*n-o)*(2*Math.PI)/a)*-.5+i:r*Math.pow(2,-10*(e-=1))*Math.sin((e*n-o)*(2*Math.PI)/a)*.5+l+i},easeInBack:function(t,e,i,l,n,o){return null==o&&(o=1.70158),l*(e/=n)*e*((o+1)*e-o)+i},easeOutBack:function(t,e,i,l,n,o){return null==o&&(o=1.70158),l*((e=e/n-1)*e*((o+1)*e+o)+1)+i},easeInOutBack:function(t,e,i,l,n,o){return null==o&&(o=1.70158),(e/=n/2)<1?l/2*(e*e*((1+(o*=1.525))*e-o))+i:l/2*((e-=2)*e*((1+(o*=1.525))*e+o)+2)+i},easeInBounce:function(t,e,i,l,n){return l-jQuery.easing.easeOutBounce(t,n-e,0,l,n)+i},easeOutBounce:function(t,e,i,l,n){return(e/=n)<1/2.75?l*(7.5625*e*e)+i:e<2/2.75?l*(7.5625*(e-=1.5/2.75)*e+.75)+i:e<2.5/2.75?l*(7.5625*(e-=2.25/2.75)*e+.9375)+i:l*(7.5625*(e-=2.625/2.75)*e+.984375)+i},easeInOutBounce:function(t,e,i,l,n){return e<n/2?.5*jQuery.easing.easeInBounce(t,2*e,0,l,n)+i:.5*jQuery.easing.easeOutBounce(t,2*e-n,0,l,n)+.5*l+i}})},function(t,e,i){"use strict";(function(t){var e;i(69),i(71),i(72),i(76),i(58),i(75),i(136),i(100),i(173),i(84),i(65),i(115),i(123),i(129),i(68),i(95),i(73),i(116),i(86),i(98),i(175),i(180),i(182),i(183),i(184),i(185),i(186),i(187),i(188),i(189),i(190),i(191),i(192),i(193),i(194),i(195),i(196),i(197),i(198),i(199),i(200),i(201),i(202),i(203),i(74);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
/*! Note that this has been modified by Materialize to confirm that Velocity is not already being imported. */jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(function(t){function e(t){var e=t.length,l=i.type(t);return"function"!==l&&!i.isWindow(t)&&(!(1!==t.nodeType||!e)||("array"===l||0===e||"number"==typeof e&&e>0&&e-1 in t))}if(!t.jQuery){var i=function t(e,i){return new t.fn.init(e,i)};i.isWindow=function(t){return null!=t&&t==t.window},i.type=function(t){return null==t?t+"":"object"==l(t)||"function"==typeof t?o[r.call(t)]||"object":l(t)},i.isArray=Array.isArray||function(t){return"array"===i.type(t)},i.isPlainObject=function(t){var e;if(!t||"object"!==i.type(t)||t.nodeType||i.isWindow(t))return!1;try{if(t.constructor&&!a.call(t,"constructor")&&!a.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}for(e in t);return void 0===e||a.call(t,e)},i.each=function(t,i,l){var n=0,o=t.length,a=e(t);if(l){if(a)for(;o>n&&!1!==i.apply(t[n],l);n++);else for(n in t)if(!1===i.apply(t[n],l))break}else if(a)for(;o>n&&!1!==i.call(t[n],n,t[n]);n++);else for(n in t)if(!1===i.call(t[n],n,t[n]))break;return t},i.data=function(t,e,l){if(void 0===l){var o=(a=t[i.expando])&&n[a];if(void 0===e)return o;if(o&&e in o)return o[e]}else if(void 0!==e){var a=t[i.expando]||(t[i.expando]=++i.uuid);return n[a]=n[a]||{},n[a][e]=l,l}},i.removeData=function(t,e){var l=t[i.expando],o=l&&n[l];o&&i.each(e,(function(t,e){delete o[e]}))},i.extend=function(){var t,e,n,o,a,r,s=arguments[0]||{},c=1,u=arguments.length,d=!1;for("boolean"==typeof s&&(d=s,s=arguments[c]||{},c++),"object"!=l(s)&&"function"!==i.type(s)&&(s={}),c===u&&(s=this,c--);u>c;c++)if(null!=(a=arguments[c]))for(o in a)t=s[o],s!==(n=a[o])&&(d&&n&&(i.isPlainObject(n)||(e=i.isArray(n)))?(e?(e=!1,r=t&&i.isArray(t)?t:[]):r=t&&i.isPlainObject(t)?t:{},s[o]=i.extend(d,r,n)):void 0!==n&&(s[o]=n));return s},i.queue=function(t,l,n){if(t){l=(l||"fx")+"queue";var o=i.data(t,l);return n?(!o||i.isArray(n)?o=i.data(t,l,function(t,i){var l=i||[];return null!=t&&(e(Object(t))?function(t,e){for(var i=+e.length,l=0,n=t.length;i>l;)t[n++]=e[l++];if(i!=i)for(;void 0!==e[l];)t[n++]=e[l++];t.length=n}(l,"string"==typeof t?[t]:t):[].push.call(l,t)),l}(n)):o.push(n),o):o||[]}},i.dequeue=function(t,e){i.each(t.nodeType?[t]:t,(function(t,l){e=e||"fx";var n=i.queue(l,e),o=n.shift();"inprogress"===o&&(o=n.shift()),o&&("fx"===e&&n.unshift("inprogress"),o.call(l,(function(){i.dequeue(l,e)})))}))},i.fn=i.prototype={init:function(t){if(t.nodeType)return this[0]=t,this;throw new Error("Not a DOM node.")},offset:function(){var e=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:e.top+(t.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:e.left+(t.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function t(){for(var t=this.offsetParent||document;t&&"html"===!t.nodeType.toLowerCase&&"static"===t.style.position;)t=t.offsetParent;return t||document}var e=this[0],t=t.apply(e),l=this.offset(),n=/^(?:body|html)$/i.test(t.nodeName)?{top:0,left:0}:i(t).offset();return l.top-=parseFloat(e.style.marginTop)||0,l.left-=parseFloat(e.style.marginLeft)||0,t.style&&(n.top+=parseFloat(t.style.borderTopWidth)||0,n.left+=parseFloat(t.style.borderLeftWidth)||0),{top:l.top-n.top,left:l.left-n.left}}};var n={};i.expando="velocity"+(new Date).getTime(),i.uuid=0;for(var o={},a=o.hasOwnProperty,r=o.toString,s="Boolean Number String Function Array Date RegExp Object Error".split(" "),c=0;c<s.length;c++)o["[object "+s[c]+"]"]=s[c].toLowerCase();i.fn.init.prototype=i.fn,t.Velocity={Utilities:i}}}(window),e=function(){return function(t,e,i,n){function o(t){return m.isWrapped(t)?t=[].slice.call(t):m.isNode(t)&&(t=[t]),t}function a(t){var e=h.data(t,"velocity");return null===e?n:e}function r(t){return function(e){return Math.round(e*t)*(1/t)}}function s(t,i,l,n){function o(t,e){return 1-3*e+3*t}function a(t,e){return 3*e-6*t}function r(t){return 3*t}function s(t,e,i){return((o(e,i)*t+a(e,i))*t+r(e))*t}function c(t,e,i){return 3*o(e,i)*t*t+2*a(e,i)*t+r(e)}function u(e,i){for(var n=0;p>n;++n){var o=c(i,t,l);if(0===o)return i;i-=(s(i,t,l)-e)/o}return i}function d(e,i,n){var o,a,r=0;do{(o=s(a=i+(n-i)/2,t,l)-e)>0?n=a:i=a}while(Math.abs(o)>m&&++r<v);return a}function h(){k=!0,(t!=i||l!=n)&&function(){for(var e=0;g>e;++e)w[e]=s(e*y,t,l)}()}var p=4,f=.001,m=1e-7,v=10,g=11,y=1/(g-1),b="Float32Array"in e;if(4!==arguments.length)return!1;for(var x=0;4>x;++x)if("number"!=typeof arguments[x]||isNaN(arguments[x])||!isFinite(arguments[x]))return!1;t=Math.min(t,1),l=Math.min(l,1),t=Math.max(t,0),l=Math.max(l,0);var w=b?new Float32Array(g):new Array(g),k=!1,S=function(e){return k||h(),t===i&&l===n?e:0===e?0:1===e?1:s(function(e){for(var i=0,n=1,o=g-1;n!=o&&w[n]<=e;++n)i+=y;var a=i+(e-w[--n])/(w[n+1]-w[n])*y,r=c(a,t,l);return r>=f?u(e,a):0==r?a:d(e,i,i+y)}(e),i,n)};S.getControlPoints=function(){return[{x:t,y:i},{x:l,y:n}]};var M="generateBezier("+[t,i,l,n]+")";return S.toString=function(){return M},S}function c(t,e){var i=t;return m.isString(t)?b.Easings[t]||(i=!1):i=m.isArray(t)&&1===t.length?r.apply(null,t):m.isArray(t)&&2===t.length?x.apply(null,t.concat([e])):!(!m.isArray(t)||4!==t.length)&&s.apply(null,t),!1===i&&(i=b.Easings[b.defaults.easing]?b.defaults.easing:y),i}function u(t){if(t){var e=(new Date).getTime(),i=b.State.calls.length;i>1e4&&(b.State.calls=function(t){for(var e=-1,i=t?t.length:0,l=[];++e<i;){var n=t[e];n&&l.push(n)}return l}(b.State.calls));for(var l=0;i>l;l++)if(b.State.calls[l]){var o=b.State.calls[l],r=o[0],s=o[2],c=o[3],p=!!c,f=null;c||(c=b.State.calls[l][3]=e-16);for(var v=Math.min((e-c)/s.duration,1),g=0,y=r.length;y>g;g++){var x=r[g],k=x.element;if(a(k)){var M=!1;for(var C in s.display!==n&&null!==s.display&&"none"!==s.display&&("flex"===s.display&&h.each(["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"],(function(t,e){w.setPropertyValue(k,"display",e)})),w.setPropertyValue(k,"display",s.display)),s.visibility!==n&&"hidden"!==s.visibility&&w.setPropertyValue(k,"visibility",s.visibility),x)if("element"!==C){var T,A=x[C],O=m.isString(A.easing)?b.Easings[A.easing]:A.easing;if(1===v)T=A.endValue;else{var E=A.endValue-A.startValue;if(T=A.startValue+E*O(v,s,E),!p&&T===A.currentValue)continue}if(A.currentValue=T,"tween"===C)f=T;else{if(w.Hooks.registered[C]){var P=w.Hooks.getRoot(C),I=a(k).rootPropertyValueCache[P];I&&(A.rootPropertyValue=I)}var _=w.setPropertyValue(k,C,A.currentValue+(0===parseFloat(T)?"":A.unitType),A.rootPropertyValue,A.scrollData);w.Hooks.registered[C]&&(a(k).rootPropertyValueCache[P]=w.Normalizations.registered[P]?w.Normalizations.registered[P]("extract",null,_[1]):_[1]),"transform"===_[0]&&(M=!0)}}s.mobileHA&&a(k).transformCache.translate3d===n&&(a(k).transformCache.translate3d="(0px, 0px, 0px)",M=!0),M&&w.flushTransformCache(k)}}s.display!==n&&"none"!==s.display&&(b.State.calls[l][2].display=!1),s.visibility!==n&&"hidden"!==s.visibility&&(b.State.calls[l][2].visibility=!1),s.progress&&s.progress.call(o[1],o[1],v,Math.max(0,c+s.duration-e),c,f),1===v&&d(l)}}b.State.isTicking&&S(u)}function d(t,e){if(!b.State.calls[t])return!1;for(var i=b.State.calls[t][0],l=b.State.calls[t][1],o=b.State.calls[t][2],r=b.State.calls[t][4],s=!1,c=0,u=i.length;u>c;c++){var d=i[c].element;if(e||o.loop||("none"===o.display&&w.setPropertyValue(d,"display",o.display),"hidden"===o.visibility&&w.setPropertyValue(d,"visibility",o.visibility)),!0!==o.loop&&(h.queue(d)[1]===n||!/\.velocityQueueEntryFlag/i.test(h.queue(d)[1]))&&a(d)){a(d).isAnimating=!1,a(d).rootPropertyValueCache={};var p=!1;h.each(w.Lists.transforms3D,(function(t,e){var i=/^scale/.test(e)?1:0,l=a(d).transformCache[e];a(d).transformCache[e]!==n&&new RegExp("^\\("+i+"[^.]").test(l)&&(p=!0,delete a(d).transformCache[e])})),o.mobileHA&&(p=!0,delete a(d).transformCache.translate3d),p&&w.flushTransformCache(d),w.Values.removeClass(d,"velocity-animating")}if(!e&&o.complete&&!o.loop&&c===u-1)try{o.complete.call(l,l)}catch(t){setTimeout((function(){throw t}),1)}r&&!0!==o.loop&&r(l),a(d)&&!0===o.loop&&!e&&(h.each(a(d).tweensContainer,(function(t,e){/^rotate/.test(t)&&360===parseFloat(e.endValue)&&(e.endValue=0,e.startValue=360),/^backgroundPosition/.test(t)&&100===parseFloat(e.endValue)&&"%"===e.unitType&&(e.endValue=0,e.startValue=100)})),b(d,"reverse",{loop:!0,delay:o.delay})),!1!==o.queue&&h.dequeue(d,o.queue)}b.State.calls[t]=!1;for(var f=0,m=b.State.calls.length;m>f;f++)if(!1!==b.State.calls[f]){s=!0;break}!1===s&&(b.State.isTicking=!1,delete b.State.calls,b.State.calls=[])}var h,p=function(){if(i.documentMode)return i.documentMode;for(var t=7;t>4;t--){var e=i.createElement("div");if(e.innerHTML="\x3c!--[if IE "+t+"]><span></span><![endif]--\x3e",e.getElementsByTagName("span").length)return e=null,t}return n}(),f=function(){var t=0;return e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||function(e){var i,l=(new Date).getTime();return i=Math.max(0,16-(l-t)),t=l+i,setTimeout((function(){e(l+i)}),i)}}(),m={isString:function(t){return"string"==typeof t},isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},isFunction:function(t){return"[object Function]"===Object.prototype.toString.call(t)},isNode:function(t){return t&&t.nodeType},isNodeList:function(t){return"object"==l(t)&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t))&&t.length!==n&&(0===t.length||"object"==l(t[0])&&t[0].nodeType>0)},isWrapped:function(t){return t&&(t.jquery||e.Zepto&&e.Zepto.zepto.isZ(t))},isSVG:function(t){return e.SVGElement&&t instanceof e.SVGElement},isEmptyObject:function(t){for(var e in t)return!1;return!0}},v=!1;if(t.fn&&t.fn.jquery?(h=t,v=!0):h=e.Velocity.Utilities,8>=p&&!v)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(!(7>=p)){var g=400,y="swing",b={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:e.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:i.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:h,Redirects:{},Easings:{},Promise:e.Promise,defaults:{queue:"",duration:g,easing:y,begin:n,complete:n,progress:n,display:n,visibility:n,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(t){h.data(t,"velocity",{isSVG:m.isSVG(t),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};e.pageYOffset!==n?(b.State.scrollAnchor=e,b.State.scrollPropertyLeft="pageXOffset",b.State.scrollPropertyTop="pageYOffset"):(b.State.scrollAnchor=i.documentElement||i.body.parentNode||i.body,b.State.scrollPropertyLeft="scrollLeft",b.State.scrollPropertyTop="scrollTop");var x=function(){function t(t){return-t.tension*t.x-t.friction*t.v}function e(e,i,l){var n={x:e.x+l.dx*i,v:e.v+l.dv*i,tension:e.tension,friction:e.friction};return{dx:n.v,dv:t(n)}}function i(i,l){var n={dx:i.v,dv:t(i)},o=e(i,.5*l,n),a=e(i,.5*l,o),r=e(i,l,a),s=1/6*(n.dx+2*(o.dx+a.dx)+r.dx),c=1/6*(n.dv+2*(o.dv+a.dv)+r.dv);return i.x=i.x+s*l,i.v=i.v+c*l,i}return function t(e,l,n){var o,a,r,s={x:-1,v:0,tension:null,friction:null},c=[0],u=0;for(e=parseFloat(e)||500,l=parseFloat(l)||20,n=n||null,s.tension=e,s.friction=l,a=(o=null!==n)?(u=t(e,l))/n*.016:.016;r=i(r||s,a),c.push(1+r.x),u+=16,Math.abs(r.x)>1e-4&&Math.abs(r.v)>1e-4;);return o?function(t){return c[t*(c.length-1)|0]}:u}}();b.Easings={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},spring:function(t){return 1-Math.cos(4.5*t*Math.PI)*Math.exp(6*-t)}},h.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],(function(t,e){b.Easings[e[0]]=s.apply(null,e[1])}));var w=b.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var t=0;t<w.Lists.colors.length;t++){var e="color"===w.Lists.colors[t]?"0 0 0 1":"255 255 255 1";w.Hooks.templates[w.Lists.colors[t]]=["Red Green Blue Alpha",e]}var i,l,n;if(p)for(i in w.Hooks.templates){n=(l=w.Hooks.templates[i])[0].split(" ");var o=l[1].match(w.RegEx.valueSplit);"Color"===n[0]&&(n.push(n.shift()),o.push(o.shift()),w.Hooks.templates[i]=[n.join(" "),o.join(" ")])}for(i in w.Hooks.templates)for(var t in n=(l=w.Hooks.templates[i])[0].split(" ")){var a=i+n[t],r=t;w.Hooks.registered[a]=[i,r]}},getRoot:function(t){var e=w.Hooks.registered[t];return e?e[0]:t},cleanRootPropertyValue:function(t,e){return w.RegEx.valueUnwrap.test(e)&&(e=e.match(w.RegEx.valueUnwrap)[1]),w.Values.isCSSNullValue(e)&&(e=w.Hooks.templates[t][1]),e},extractValue:function(t,e){var i=w.Hooks.registered[t];if(i){var l=i[0],n=i[1];return(e=w.Hooks.cleanRootPropertyValue(l,e)).toString().match(w.RegEx.valueSplit)[n]}return e},injectValue:function(t,e,i){var l=w.Hooks.registered[t];if(l){var n,o=l[0],a=l[1];return(n=(i=w.Hooks.cleanRootPropertyValue(o,i)).toString().match(w.RegEx.valueSplit))[a]=e,n.join(" ")}return i}},Normalizations:{registered:{clip:function(t,e,i){switch(t){case"name":return"clip";case"extract":var l;return l=w.RegEx.wrappedValueAlreadyExtracted.test(i)?i:(l=i.toString().match(w.RegEx.valueUnwrap))?l[1].replace(/,(\s+)?/g," "):i;case"inject":return"rect("+i+")"}},blur:function(t,e,i){switch(t){case"name":return b.State.isFirefox?"filter":"-webkit-filter";case"extract":var l=parseFloat(i);if(!l&&0!==l){var n=i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);l=n?n[1]:0}return l;case"inject":return parseFloat(i)?"blur("+i+")":"none"}},opacity:function(t,e,i){if(8>=p)switch(t){case"name":return"filter";case"extract":var l=i.toString().match(/alpha\(opacity=(.*)\)/i);return l?l[1]/100:1;case"inject":return e.style.zoom=1,parseFloat(i)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(i),10)+")"}else switch(t){case"name":return"opacity";case"extract":case"inject":return i}}},register:function(){9>=p||b.State.isGingerbread||(w.Lists.transformsBase=w.Lists.transformsBase.concat(w.Lists.transforms3D));for(var t=0;t<w.Lists.transformsBase.length;t++)!function(){var e=w.Lists.transformsBase[t];w.Normalizations.registered[e]=function(t,i,l){switch(t){case"name":return"transform";case"extract":return a(i)===n||a(i).transformCache[e]===n?/^scale/i.test(e)?1:0:a(i).transformCache[e].replace(/[()]/g,"");case"inject":var o=!1;switch(e.substr(0,e.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(l);break;case"scal":case"scale":b.State.isAndroid&&a(i).transformCache[e]===n&&1>l&&(l=1),o=!/(\d)$/i.test(l);break;case"skew":o=!/(deg|\d)$/i.test(l);break;case"rotate":o=!/(deg|\d)$/i.test(l)}return o||(a(i).transformCache[e]="("+l+")"),a(i).transformCache[e]}}}();for(t=0;t<w.Lists.colors.length;t++)!function(){var e=w.Lists.colors[t];w.Normalizations.registered[e]=function(t,i,l){switch(t){case"name":return e;case"extract":var o;if(w.RegEx.wrappedValueAlreadyExtracted.test(l))o=l;else{var a,r={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(l)?a=r[l]!==n?r[l]:r.black:w.RegEx.isHex.test(l)?a="rgb("+w.Values.hexToRgb(l).join(" ")+")":/^rgba?\(/i.test(l)||(a=r.black),o=(a||l).toString().match(w.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=p||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=p?4===l.split(" ").length&&(l=l.split(/\s+/).slice(0,3).join(" ")):3===l.split(" ").length&&(l+=" 1"),(8>=p?"rgb":"rgba")+"("+l.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(t){return t.replace(/-(\w)/g,(function(t,e){return e.toUpperCase()}))},SVGAttribute:function(t){var e="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(p||b.State.isAndroid&&!b.State.isChrome)&&(e+="|transform"),new RegExp("^("+e+")$","i").test(t)},prefixCheck:function(t){if(b.State.prefixMatches[t])return[b.State.prefixMatches[t],!0];for(var e=["","Webkit","Moz","ms","O"],i=0,l=e.length;l>i;i++){var n;if(n=0===i?t:e[i]+t.replace(/^\w/,(function(t){return t.toUpperCase()})),m.isString(b.State.prefixElement.style[n]))return b.State.prefixMatches[t]=n,[n,!0]}return[t,!1]}},Values:{hexToRgb:function(t){var e;return t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(t,e,i,l){return e+e+i+i+l+l})),(e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t))?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:[0,0,0]},isCSSNullValue:function(t){return 0==t||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)},getUnitType:function(t){return/^(rotate|skew)/i.test(t)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t)?"":"px"},getDisplayType:function(t){var e=t&&t.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e)?"inline":/^(li)$/i.test(e)?"list-item":/^(tr)$/i.test(e)?"table-row":/^(table)$/i.test(e)?"table":/^(tbody)$/i.test(e)?"table-row-group":"block"},addClass:function(t,e){t.classList?t.classList.add(e):t.className+=(t.className.length?" ":"")+e},removeClass:function(t,e){t.classList?t.classList.remove(e):t.className=t.className.toString().replace(new RegExp("(^|\\s)"+e.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(t,i,l,o){function r(t,i){function l(){u&&w.setPropertyValue(t,"display","none")}var s=0;if(8>=p)s=h.css(t,i);else{var c,u=!1;if(/^(width|height)$/.test(i)&&0===w.getPropertyValue(t,"display")&&(u=!0,w.setPropertyValue(t,"display",w.Values.getDisplayType(t))),!o){if("height"===i&&"border-box"!==w.getPropertyValue(t,"boxSizing").toString().toLowerCase()){var d=t.offsetHeight-(parseFloat(w.getPropertyValue(t,"borderTopWidth"))||0)-(parseFloat(w.getPropertyValue(t,"borderBottomWidth"))||0)-(parseFloat(w.getPropertyValue(t,"paddingTop"))||0)-(parseFloat(w.getPropertyValue(t,"paddingBottom"))||0);return l(),d}if("width"===i&&"border-box"!==w.getPropertyValue(t,"boxSizing").toString().toLowerCase()){var f=t.offsetWidth-(parseFloat(w.getPropertyValue(t,"borderLeftWidth"))||0)-(parseFloat(w.getPropertyValue(t,"borderRightWidth"))||0)-(parseFloat(w.getPropertyValue(t,"paddingLeft"))||0)-(parseFloat(w.getPropertyValue(t,"paddingRight"))||0);return l(),f}}c=a(t)===n?e.getComputedStyle(t,null):a(t).computedStyle?a(t).computedStyle:a(t).computedStyle=e.getComputedStyle(t,null),"borderColor"===i&&(i="borderTopColor"),(""===(s=9===p&&"filter"===i?c.getPropertyValue(i):c[i])||null===s)&&(s=t.style[i]),l()}if("auto"===s&&/^(top|right|bottom|left)$/i.test(i)){var m=r(t,"position");("fixed"===m||"absolute"===m&&/top|left/i.test(i))&&(s=h(t).position()[i]+"px")}return s}var s;if(w.Hooks.registered[i]){var c=i,u=w.Hooks.getRoot(c);l===n&&(l=w.getPropertyValue(t,w.Names.prefixCheck(u)[0])),w.Normalizations.registered[u]&&(l=w.Normalizations.registered[u]("extract",t,l)),s=w.Hooks.extractValue(c,l)}else if(w.Normalizations.registered[i]){var d,f;"transform"!==(d=w.Normalizations.registered[i]("name",t))&&(f=r(t,w.Names.prefixCheck(d)[0]),w.Values.isCSSNullValue(f)&&w.Hooks.templates[i]&&(f=w.Hooks.templates[i][1])),s=w.Normalizations.registered[i]("extract",t,f)}if(!/^[\d-]/.test(s))if(a(t)&&a(t).isSVG&&w.Names.SVGAttribute(i))if(/^(height|width)$/i.test(i))try{s=t.getBBox()[i]}catch(t){s=0}else s=t.getAttribute(i);else s=r(t,w.Names.prefixCheck(i)[0]);return w.Values.isCSSNullValue(s)&&(s=0),b.debug>=2&&console.log("Get "+i+": "+s),s},setPropertyValue:function(t,i,l,n,o){var r=i;if("scroll"===i)o.container?o.container["scroll"+o.direction]=l:"Left"===o.direction?e.scrollTo(l,o.alternateValue):e.scrollTo(o.alternateValue,l);else if(w.Normalizations.registered[i]&&"transform"===w.Normalizations.registered[i]("name",t))w.Normalizations.registered[i]("inject",t,l),r="transform",l=a(t).transformCache[i];else{if(w.Hooks.registered[i]){var s=i,c=w.Hooks.getRoot(i);n=n||w.getPropertyValue(t,c),l=w.Hooks.injectValue(s,l,n),i=c}if(w.Normalizations.registered[i]&&(l=w.Normalizations.registered[i]("inject",t,l),i=w.Normalizations.registered[i]("name",t)),r=w.Names.prefixCheck(i)[0],8>=p)try{t.style[r]=l}catch(t){b.debug&&console.log("Browser does not support ["+l+"] for ["+r+"]")}else a(t)&&a(t).isSVG&&w.Names.SVGAttribute(i)?t.setAttribute(i,l):t.style[r]=l;b.debug>=2&&console.log("Set "+i+" ("+r+"): "+l)}return[r,l]},flushTransformCache:function(t){function e(e){return parseFloat(w.getPropertyValue(t,e))}var i="";if((p||b.State.isAndroid&&!b.State.isChrome)&&a(t).isSVG){var l={translate:[e("translateX"),e("translateY")],skewX:[e("skewX")],skewY:[e("skewY")],scale:1!==e("scale")?[e("scale"),e("scale")]:[e("scaleX"),e("scaleY")],rotate:[e("rotateZ"),0,0]};h.each(a(t).transformCache,(function(t){/^translate/i.test(t)?t="translate":/^scale/i.test(t)?t="scale":/^rotate/i.test(t)&&(t="rotate"),l[t]&&(i+=t+"("+l[t].join(" ")+") ",delete l[t])}))}else{var n,o;h.each(a(t).transformCache,(function(e){return n=a(t).transformCache[e],"transformPerspective"===e?(o=n,!0):(9===p&&"rotateZ"===e&&(e="rotate"),void(i+=e+n+" "))})),o&&(i="perspective"+o+" "+i)}w.setPropertyValue(t,"transform",i)}};w.Hooks.register(),w.Normalizations.register(),b.hook=function(t,e,i){var l=n;return t=o(t),h.each(t,(function(t,o){if(a(o)===n&&b.init(o),i===n)l===n&&(l=b.CSS.getPropertyValue(o,e));else{var r=b.CSS.setPropertyValue(o,e,i);"transform"===r[0]&&b.CSS.flushTransformCache(o),l=r}})),l};var k=function t(){function l(){return s?O.promise||null:p}function r(){function t(t){function d(t,e){var i=n,l=n,a=n;return m.isArray(t)?(i=t[0],!m.isArray(t[1])&&/^[\d-]/.test(t[1])||m.isFunction(t[1])||w.RegEx.isHex.test(t[1])?a=t[1]:(m.isString(t[1])&&!w.RegEx.isHex.test(t[1])||m.isArray(t[1]))&&(l=e?t[1]:c(t[1],r.duration),t[2]!==n&&(a=t[2]))):i=t,e||(l=l||r.easing),m.isFunction(i)&&(i=i.call(o,M,S)),m.isFunction(a)&&(a=a.call(o,M,S)),[i||0,l,a]}function p(t,e){var i,l;return l=(e||"0").toString().toLowerCase().replace(/[%A-z]+$/,(function(t){return i=t,""})),i||(i=w.Values.getUnitType(t)),[l,i]}function f(){var t={myParent:o.parentNode||i.body,position:w.getPropertyValue(o,"position"),fontSize:w.getPropertyValue(o,"fontSize")},l=t.position===L.lastPosition&&t.myParent===L.lastParent,n=t.fontSize===L.lastFontSize;L.lastParent=t.myParent,L.lastPosition=t.position,L.lastFontSize=t.fontSize;var r=100,s={};if(n&&l)s.emToPx=L.lastEmToPx,s.percentToPxWidth=L.lastPercentToPxWidth,s.percentToPxHeight=L.lastPercentToPxHeight;else{var c=a(o).isSVG?i.createElementNS("http://www.w3.org/2000/svg","rect"):i.createElement("div");b.init(c),t.myParent.appendChild(c),h.each(["overflow","overflowX","overflowY"],(function(t,e){b.CSS.setPropertyValue(c,e,"hidden")})),b.CSS.setPropertyValue(c,"position",t.position),b.CSS.setPropertyValue(c,"fontSize",t.fontSize),b.CSS.setPropertyValue(c,"boxSizing","content-box"),h.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],(function(t,e){b.CSS.setPropertyValue(c,e,r+"%")})),b.CSS.setPropertyValue(c,"paddingLeft",r+"em"),s.percentToPxWidth=L.lastPercentToPxWidth=(parseFloat(w.getPropertyValue(c,"width",null,!0))||1)/r,s.percentToPxHeight=L.lastPercentToPxHeight=(parseFloat(w.getPropertyValue(c,"height",null,!0))||1)/r,s.emToPx=L.lastEmToPx=(parseFloat(w.getPropertyValue(c,"paddingLeft"))||1)/r,t.myParent.removeChild(c)}return null===L.remToPx&&(L.remToPx=parseFloat(w.getPropertyValue(i.body,"fontSize"))||16),null===L.vwToPx&&(L.vwToPx=parseFloat(e.innerWidth)/100,L.vhToPx=parseFloat(e.innerHeight)/100),s.remToPx=L.remToPx,s.vwToPx=L.vwToPx,s.vhToPx=L.vhToPx,b.debug>=1&&console.log("Unit ratios: "+JSON.stringify(s),o),s}if(r.begin&&0===M)try{r.begin.call(v,v)}catch(t){setTimeout((function(){throw t}),1)}if("scroll"===A){var g,k,C,T=/^x$/i.test(r.axis)?"Left":"Top",E=parseFloat(r.offset)||0;r.container?m.isWrapped(r.container)||m.isNode(r.container)?(r.container=r.container[0]||r.container,C=(g=r.container["scroll"+T])+h(o).position()[T.toLowerCase()]+E):r.container=null:(g=b.State.scrollAnchor[b.State["scrollProperty"+T]],k=b.State.scrollAnchor[b.State["scrollProperty"+("Left"===T?"Top":"Left")]],C=h(o).offset()[T.toLowerCase()]+E),s={scroll:{rootPropertyValue:!1,startValue:g,currentValue:g,endValue:C,unitType:"",easing:r.easing,scrollData:{container:r.container,direction:T,alternateValue:k}},element:o},b.debug&&console.log("tweensContainer (scroll): ",s.scroll,o)}else if("reverse"===A){if(!a(o).tweensContainer)return void h.dequeue(o,r.queue);"none"===a(o).opts.display&&(a(o).opts.display="auto"),"hidden"===a(o).opts.visibility&&(a(o).opts.visibility="visible"),a(o).opts.loop=!1,a(o).opts.begin=null,a(o).opts.complete=null,x.easing||delete r.easing,x.duration||delete r.duration,r=h.extend({},a(o).opts,r);var P=h.extend(!0,{},a(o).tweensContainer);for(var I in P)if("element"!==I){var _=P[I].startValue;P[I].startValue=P[I].currentValue=P[I].endValue,P[I].endValue=_,m.isEmptyObject(x)||(P[I].easing=r.easing),b.debug&&console.log("reverse tweensContainer ("+I+"): "+JSON.stringify(P[I]),o)}s=P}else if("start"===A){for(var $ in a(o).tweensContainer&&!0===a(o).isAnimating&&(P=a(o).tweensContainer),h.each(y,(function(t,e){if(RegExp("^"+w.Lists.colors.join("$|^")+"$").test(t)){var i=d(e,!0),l=i[0],o=i[1],a=i[2];if(w.RegEx.isHex.test(l)){for(var r=["Red","Green","Blue"],s=w.Values.hexToRgb(l),c=a?w.Values.hexToRgb(a):n,u=0;u<r.length;u++){var h=[s[u]];o&&h.push(o),c!==n&&h.push(c[u]),y[t+r[u]]=h}delete y[t]}}})),y){var D=d(y[$]),V=D[0],F=D[1],W=D[2];$=w.Names.camelCase($);var j=w.Hooks.getRoot($),N=!1;if(a(o).isSVG||"tween"===j||!1!==w.Names.prefixCheck(j)[1]||w.Normalizations.registered[j]!==n){(r.display!==n&&null!==r.display&&"none"!==r.display||r.visibility!==n&&"hidden"!==r.visibility)&&/opacity|filter/.test($)&&!W&&0!==V&&(W=0),r._cacheValues&&P&&P[$]?(W===n&&(W=P[$].endValue+P[$].unitType),N=a(o).rootPropertyValueCache[j]):w.Hooks.registered[$]?W===n?(N=w.getPropertyValue(o,j),W=w.getPropertyValue(o,$,N)):N=w.Hooks.templates[j][1]:W===n&&(W=w.getPropertyValue(o,$));var z,B,H,Z=!1;if(W=(z=p($,W))[0],H=z[1],V=(z=p($,V))[0].replace(/^([+-\/*])=/,(function(t,e){return Z=e,""})),B=z[1],W=parseFloat(W)||0,V=parseFloat(V)||0,"%"===B&&(/^(fontSize|lineHeight)$/.test($)?(V/=100,B="em"):/^scale/.test($)?(V/=100,B=""):/(Red|Green|Blue)$/i.test($)&&(V=V/100*255,B="")),/[\/*]/.test(Z))B=H;else if(H!==B&&0!==W)if(0===V)B=H;else{l=l||f();var Y=/margin|padding|left|right|width|text|word|letter/i.test($)||/X$/.test($)||"x"===$?"x":"y";switch(H){case"%":W*="x"===Y?l.percentToPxWidth:l.percentToPxHeight;break;case"px":break;default:W*=l[H+"ToPx"]}switch(B){case"%":W*=1/("x"===Y?l.percentToPxWidth:l.percentToPxHeight);break;case"px":break;default:W*=1/l[B+"ToPx"]}}switch(Z){case"+":V=W+V;break;case"-":V=W-V;break;case"*":V*=W;break;case"/":V=W/V}s[$]={rootPropertyValue:N,startValue:W,currentValue:W,endValue:V,unitType:B,easing:F},b.debug&&console.log("tweensContainer ("+$+"): "+JSON.stringify(s[$]),o)}else b.debug&&console.log("Skipping ["+j+"] due to a lack of browser support.")}s.element=o}s.element&&(w.Values.addClass(o,"velocity-animating"),R.push(s),""===r.queue&&(a(o).tweensContainer=s,a(o).opts=r),a(o).isAnimating=!0,M===S-1?(b.State.calls.push([R,v,r,null,O.resolver]),!1===b.State.isTicking&&(b.State.isTicking=!0,u())):M++)}var l,o=this,r=h.extend({},b.defaults,x),s={};switch(a(o)===n&&b.init(o),parseFloat(r.delay)&&!1!==r.queue&&h.queue(o,r.queue,(function(t){b.velocityQueueEntryFlag=!0,a(o).delayTimer={setTimeout:setTimeout(t,parseFloat(r.delay)),next:t}})),r.duration.toString().toLowerCase()){case"fast":r.duration=200;break;case"normal":r.duration=g;break;case"slow":r.duration=600;break;default:r.duration=parseFloat(r.duration)||1}!1!==b.mock&&(!0===b.mock?r.duration=r.delay=1:(r.duration*=parseFloat(b.mock)||1,r.delay*=parseFloat(b.mock)||1)),r.easing=c(r.easing,r.duration),r.begin&&!m.isFunction(r.begin)&&(r.begin=null),r.progress&&!m.isFunction(r.progress)&&(r.progress=null),r.complete&&!m.isFunction(r.complete)&&(r.complete=null),r.display!==n&&null!==r.display&&(r.display=r.display.toString().toLowerCase(),"auto"===r.display&&(r.display=b.CSS.Values.getDisplayType(o))),r.visibility!==n&&null!==r.visibility&&(r.visibility=r.visibility.toString().toLowerCase()),r.mobileHA=r.mobileHA&&b.State.isMobile&&!b.State.isGingerbread,!1===r.queue?r.delay?setTimeout(t,r.delay):t():h.queue(o,r.queue,(function(e,i){return!0===i?(O.promise&&O.resolver(v),!0):(b.velocityQueueEntryFlag=!0,void t())})),""!==r.queue&&"fx"!==r.queue||"inprogress"===h.queue(o)[0]||h.dequeue(o)}var s,p,f,v,y,x,k=arguments[0]&&(arguments[0].p||h.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||m.isString(arguments[0].properties));if(m.isWrapped(this)?(s=!1,f=0,v=this,p=this):(s=!0,f=1,v=k?arguments[0].elements||arguments[0].e:arguments[0]),v=o(v)){k?(y=arguments[0].properties||arguments[0].p,x=arguments[0].options||arguments[0].o):(y=arguments[f],x=arguments[f+1]);var S=v.length,M=0;if(!/^(stop|finish)$/i.test(y)&&!h.isPlainObject(x)){var C=f+1;x={};for(var T=C;T<arguments.length;T++)m.isArray(arguments[T])||!/^(fast|normal|slow)$/i.test(arguments[T])&&!/^\d/.test(arguments[T])?m.isString(arguments[T])||m.isArray(arguments[T])?x.easing=arguments[T]:m.isFunction(arguments[T])&&(x.complete=arguments[T]):x.duration=arguments[T]}var A,O={promise:null,resolver:null,rejecter:null};switch(s&&b.Promise&&(O.promise=new b.Promise((function(t,e){O.resolver=t,O.rejecter=e}))),y){case"scroll":A="scroll";break;case"reverse":A="reverse";break;case"finish":case"stop":h.each(v,(function(t,e){a(e)&&a(e).delayTimer&&(clearTimeout(a(e).delayTimer.setTimeout),a(e).delayTimer.next&&a(e).delayTimer.next(),delete a(e).delayTimer)}));var E=[];return h.each(b.State.calls,(function(t,e){e&&h.each(e[1],(function(i,l){var o=x===n?"":x;return!0!==o&&e[2].queue!==o&&(x!==n||!1!==e[2].queue)||void h.each(v,(function(i,n){n===l&&((!0===x||m.isString(x))&&(h.each(h.queue(n,m.isString(x)?x:""),(function(t,e){m.isFunction(e)&&e(null,!0)})),h.queue(n,m.isString(x)?x:"",[])),"stop"===y?(a(n)&&a(n).tweensContainer&&!1!==o&&h.each(a(n).tweensContainer,(function(t,e){e.endValue=e.currentValue})),E.push(t)):"finish"===y&&(e[2].duration=1))}))}))})),"stop"===y&&(h.each(E,(function(t,e){d(e,!0)})),O.promise&&O.resolver(v)),l();default:if(!h.isPlainObject(y)||m.isEmptyObject(y)){if(m.isString(y)&&b.Redirects[y]){var P=(D=h.extend({},x)).duration,I=D.delay||0;return!0===D.backwards&&(v=h.extend(!0,[],v).reverse()),h.each(v,(function(t,e){parseFloat(D.stagger)?D.delay=I+parseFloat(D.stagger)*t:m.isFunction(D.stagger)&&(D.delay=I+D.stagger.call(e,t,S)),D.drag&&(D.duration=parseFloat(P)||(/^(callout|transition)/.test(y)?1e3:g),D.duration=Math.max(D.duration*(D.backwards?1-t/S:(t+1)/S),.75*D.duration,200)),b.Redirects[y].call(e,e,D||{},t,S,v,O.promise?O:n)})),l()}var _="Velocity: First argument ("+y+") was not a property map, a known action, or a registered redirect. Aborting.";return O.promise?O.rejecter(new Error(_)):console.log(_),l()}A="start"}var $,D,L={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},R=[];if(h.each(v,(function(t,e){m.isNode(e)&&r.call(e)})),(D=h.extend({},b.defaults,x)).loop=parseInt(D.loop),$=2*D.loop-1,D.loop)for(var V=0;$>V;V++){var F={delay:D.delay,progress:D.progress};V===$-1&&(F.display=D.display,F.visibility=D.visibility,F.complete=D.complete),t(v,"reverse",F)}return l()}};(b=h.extend(k,b)).animate=k;var S=e.requestAnimationFrame||f;return b.State.isMobile||i.hidden===n||i.addEventListener("visibilitychange",(function(){i.hidden?(S=function(t){return setTimeout((function(){t(!0)}),16)},u()):S=e.requestAnimationFrame||f})),t.Velocity=b,t!==e&&(t.fn.velocity=k,t.fn.velocity.defaults=b.defaults),h.each(["Down","Up"],(function(t,e){b.Redirects["slide"+e]=function(t,i,l,o,a,r){var s=h.extend({},i),c=s.begin,u=s.complete,d={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},p={};s.display===n&&(s.display="Down"===e?"inline"===b.CSS.Values.getDisplayType(t)?"inline-block":"block":"none"),s.begin=function(){for(var i in c&&c.call(a,a),d){p[i]=t.style[i];var l=b.CSS.getPropertyValue(t,i);d[i]="Down"===e?[l,0]:[0,l]}p.overflow=t.style.overflow,t.style.overflow="hidden"},s.complete=function(){for(var e in p)t.style[e]=p[e];u&&u.call(a,a),r&&r.resolver(a)},b(t,d,s)}})),h.each(["In","Out"],(function(t,e){b.Redirects["fade"+e]=function(t,i,l,o,a,r){var s=h.extend({},i),c={opacity:"In"===e?1:0},u=s.complete;s.complete=l!==o-1?s.begin=null:function(){u&&u.call(a,a),r&&r.resolver(a)},s.display===n&&(s.display="In"===e?"auto":"none"),b(this,c,s)}})),b}jQuery.fn.velocity=jQuery.fn.animate}(window.jQuery||window.Zepto||window,window,document)},"object"==l(t)&&"object"==l(t.exports)?t.exports=e(): true&&i(80)?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):e())}).call(this,i(96)(t))},function(t,e,i){"use strict";var l=i(4),n=i(1),o=i(141),a=i(8),r=i(38),s=i(11),c=i(106),u=o.ArrayBuffer,d=o.DataView,h=u.prototype.slice;l({target:"ArrayBuffer",proto:!0,unsafe:!0,forced:n((function(){return!new u(2).slice(1,void 0).byteLength}))},{slice:function(t,e){if(void 0!==h&&void 0===e)return h.call(a(this),t);for(var i=a(this).byteLength,l=r(t,i),n=r(void 0===e?i:e,i),o=new(c(this,u))(s(n-l)),p=new d(this),f=new d(o),m=0;l<n;)f.setUint8(m++,p.getUint8(l++));return o}})},function(t,e,i){var l=i(14);t.exports=function(t,e,i){for(var n in e)l(t,n,e[n],i);return t}},function(t,e,i){i(176)("Float32",4,(function(t){return function(e,i,l){return t(this,e,i,l)}}))},function(t,e,i){"use strict";var l=i(4),n=i(0),o=i(7),a=i(177),r=i(59),s=i(141),c=i(142),u=i(18),d=i(6),h=i(11),p=i(143),f=i(145),m=i(20),v=i(3),g=i(93),y=i(5),b=i(35),x=i(82),w=i(29).f,k=i(179),S=i(24).forEach,M=i(130),C=i(9),T=i(22),A=i(28),O=A.get,E=A.set,P=C.f,I=T.f,_=Math.round,$=n.RangeError,D=s.ArrayBuffer,L=s.DataView,R=r.NATIVE_ARRAY_BUFFER_VIEWS,V=r.TYPED_ARRAY_TAG,F=r.TypedArray,W=r.TypedArrayPrototype,j=r.aTypedArrayConstructor,N=r.isTypedArray,z=function(t,e){for(var i=0,l=e.length,n=new(j(t))(l);l>i;)n[i]=e[i++];return n},B=function(t,e){P(t,e,{get:function(){return O(this)[e]}})},H=function(t){var e;return t instanceof D||"ArrayBuffer"==(e=g(t))||"SharedArrayBuffer"==e},Z=function(t,e){return N(t)&&"symbol"!=typeof e&&e in t&&String(+e)==String(e)},Y=function(t,e){return Z(t,e=m(e,!0))?u(2,t[e]):I(t,e)},X=function(t,e,i){return!(Z(t,e=m(e,!0))&&y(i)&&v(i,"value"))||v(i,"get")||v(i,"set")||i.configurable||v(i,"writable")&&!i.writable||v(i,"enumerable")&&!i.enumerable?P(t,e,i):(t[e]=i.value,t)};o?(R||(T.f=Y,C.f=X,B(W,"buffer"),B(W,"byteOffset"),B(W,"byteLength"),B(W,"length")),l({target:"Object",stat:!0,forced:!R},{getOwnPropertyDescriptor:Y,defineProperty:X}),t.exports=function(t,e,i,o){var r=t+(o?"Clamped":"")+"Array",s="get"+t,u="set"+t,m=n[r],v=m,g=v&&v.prototype,C={},T=function(t,i){P(t,i,{get:function(){return function(t,i){var l=O(t);return l.view[s](i*e+l.byteOffset,!0)}(this,i)},set:function(t){return function(t,i,l){var n=O(t);o&&(l=(l=_(l))<0?0:l>255?255:255&l),n.view[u](i*e+n.byteOffset,l,!0)}(this,i,t)},enumerable:!0})};R?a&&(v=i((function(t,i,l,n){return c(t,v,r),y(i)?H(i)?void 0!==n?new m(i,f(l,e),n):void 0!==l?new m(i,f(l,e)):new m(i):N(i)?z(v,i):k.call(v,i):new m(p(i))})),x&&x(v,F),S(w(m),(function(t){t in v||d(v,t,m[t])})),v.prototype=g):(v=i((function(t,i,l,n){c(t,v,r);var o,a,s,u=0,d=0;if(y(i)){if(!H(i))return N(i)?z(v,i):k.call(v,i);o=i,d=f(l,e);var m=i.byteLength;if(void 0===n){if(m%e)throw $("Wrong length");if((a=m-d)<0)throw $("Wrong length")}else if((a=h(n)*e)+d>m)throw $("Wrong length");s=a/e}else s=p(i),o=new D(a=s*e);for(E(t,{buffer:o,byteOffset:d,byteLength:a,length:s,view:new L(o)});u<s;)T(t,u++)})),x&&x(v,F),g=v.prototype=b(W)),g.constructor!==v&&d(g,"constructor",v),V&&d(g,V,r),C[r]=v,l({global:!0,forced:v!=m,sham:!R},C),"BYTES_PER_ELEMENT"in v||d(v,"BYTES_PER_ELEMENT",e),"BYTES_PER_ELEMENT"in g||d(g,"BYTES_PER_ELEMENT",e),M(r)}):t.exports=function(){}},function(t,e,i){var l=i(0),n=i(1),o=i(144),a=i(59).NATIVE_ARRAY_BUFFER_VIEWS,r=l.ArrayBuffer,s=l.Int8Array;t.exports=!a||!n((function(){s(1)}))||!n((function(){new s(-1)}))||!o((function(t){new s,new s(null),new s(1.5),new s(t)}),!0)||n((function(){return 1!==new s(new r(2),1,void 0).length}))},function(t,e,i){var l=i(15);t.exports=function(t){var e=l(t);if(e<0)throw RangeError("The argument can't be less than 0");return e}},function(t,e,i){var l=i(16),n=i(11),o=i(146),a=i(147),r=i(57),s=i(59).aTypedArrayConstructor;t.exports=function(t){var e,i,c,u,d,h,p=l(t),f=arguments.length,m=f>1?arguments[1]:void 0,v=void 0!==m,g=o(p);if(null!=g&&!a(g))for(h=(d=g.call(p)).next,p=[];!(u=h.call(d)).done;)p.push(u.value);for(v&&f>2&&(m=r(m,arguments[2],2)),i=n(p.length),c=new(s(this))(i),e=0;i>e;e++)c[e]=v?m(p[e],e):p[e];return c}},function(t,e,i){"use strict";var l=i(59),n=i(181),o=l.aTypedArray;l.exportProto("copyWithin",(function(t,e){return n.call(o(this),t,e,arguments.length>2?arguments[2]:void 0)}))},function(t,e,i){"use strict";var l=i(16),n=i(38),o=i(11),a=Math.min;t.exports=[].copyWithin||function(t,e){var i=l(this),r=o(i.length),s=n(t,r),c=n(e,r),u=arguments.length>2?arguments[2]:void 0,d=a((void 0===u?r:n(u,r))-c,r-s),h=1;for(c<s&&s<c+d&&(h=-1,c+=d-1,s+=d-1);d-- >0;)c in i?i[s]=i[c]:delete i[s],s+=h,c+=h;return i}},function(t,e,i){"use strict";var l=i(59),n=i(24).every,o=l.aTypedArray;l.exportProto("every",(function(t){return n(o(this),t,arguments.length>1?arguments[1]:void 0)}))},function(t,e,i){"use strict";var l=i(59),n=i(135),o=l.aTypedArray;l.exportProto("fill",(function(t){return n.apply(o(this),arguments)}))},function(t,e,i){"use strict";var l=i(59),n=i(24).filter,o=i(106),a=l.aTypedArray,r=l.aTypedArrayConstructor;l.exportProto("filter",(function(t){for(var e=n(a(this),t,arguments.length>1?arguments[1]:void 0),i=o(this,this.constructor),l=0,s=e.length,c=new(r(i))(s);s>l;)c[l]=e[l++];return c}))},function(t,e,i){"use strict";var l=i(59),n=i(24).find,o=l.aTypedArray;l.exportProto("find",(function(t){return n(o(this),t,arguments.length>1?arguments[1]:void 0)}))},function(t,e,i){"use strict";var l=i(59),n=i(24).findIndex,o=l.aTypedArray;l.exportProto("findIndex",(function(t){return n(o(this),t,arguments.length>1?arguments[1]:void 0)}))},function(t,e,i){"use strict";var l=i(59),n=i(24).forEach,o=l.aTypedArray;l.exportProto("forEach",(function(t){n(o(this),t,arguments.length>1?arguments[1]:void 0)}))},function(t,e,i){"use strict";var l=i(59),n=i(39).includes,o=l.aTypedArray;l.exportProto("includes",(function(t){return n(o(this),t,arguments.length>1?arguments[1]:void 0)}))},function(t,e,i){"use strict";var l=i(59),n=i(39).indexOf,o=l.aTypedArray;l.exportProto("indexOf",(function(t){return n(o(this),t,arguments.length>1?arguments[1]:void 0)}))},function(t,e,i){"use strict";var l=i(0),n=i(59),o=i(58),a=i(2)("iterator"),r=l.Uint8Array,s=o.values,c=o.keys,u=o.entries,d=n.aTypedArray,h=n.exportProto,p=r&&r.prototype[a],f=!!p&&("values"==p.name||null==p.name),m=function(){return s.call(d(this))};h("entries",(function(){return u.call(d(this))})),h("keys",(function(){return c.call(d(this))})),h("values",m,!f),h(a,m,!f)},function(t,e,i){"use strict";var l=i(59),n=l.aTypedArray,o=[].join;l.exportProto("join",(function(t){return o.apply(n(this),arguments)}))},function(t,e,i){"use strict";var l=i(59),n=i(132),o=l.aTypedArray;l.exportProto("lastIndexOf",(function(t){return n.apply(o(this),arguments)}))},function(t,e,i){"use strict";var l=i(59),n=i(24).map,o=i(106),a=l.aTypedArray,r=l.aTypedArrayConstructor;l.exportProto("map",(function(t){return n(a(this),t,arguments.length>1?arguments[1]:void 0,(function(t,e){return new(r(o(t,t.constructor)))(e)}))}))},function(t,e,i){"use strict";var l=i(59),n=i(128).left,o=l.aTypedArray;l.exportProto("reduce",(function(t){return n(o(this),t,arguments.length,arguments.length>1?arguments[1]:void 0)}))},function(t,e,i){"use strict";var l=i(59),n=i(128).right,o=l.aTypedArray;l.exportProto("reduceRight",(function(t){return n(o(this),t,arguments.length,arguments.length>1?arguments[1]:void 0)}))},function(t,e,i){"use strict";var l=i(59),n=l.aTypedArray,o=Math.floor;l.exportProto("reverse",(function(){for(var t,e=n(this).length,i=o(e/2),l=0;l<i;)t=this[l],this[l++]=this[--e],this[e]=t;return this}))},function(t,e,i){"use strict";var l=i(59),n=i(11),o=i(145),a=i(16),r=i(1),s=l.aTypedArray,c=r((function(){new Int8Array(1).set({})}));l.exportProto("set",(function(t){s(this);var e=o(arguments.length>1?arguments[1]:void 0,1),i=this.length,l=a(t),r=n(l.length),c=0;if(r+e>i)throw RangeError("Wrong length");for(;c<r;)this[e+c]=l[c++]}),c)},function(t,e,i){"use strict";var l=i(59),n=i(106),o=i(1),a=l.aTypedArray,r=l.aTypedArrayConstructor,s=[].slice,c=o((function(){new Int8Array(1).slice()}));l.exportProto("slice",(function(t,e){for(var i=s.call(a(this),t,e),l=n(this,this.constructor),o=0,c=i.length,u=new(r(l))(c);c>o;)u[o]=i[o++];return u}),c)},function(t,e,i){"use strict";var l=i(59),n=i(24).some,o=l.aTypedArray;l.exportProto("some",(function(t){return n(o(this),t,arguments.length>1?arguments[1]:void 0)}))},function(t,e,i){"use strict";var l=i(59),n=l.aTypedArray,o=[].sort;l.exportProto("sort",(function(t){return o.call(n(this),t)}))},function(t,e,i){"use strict";var l=i(59),n=i(11),o=i(38),a=i(106),r=l.aTypedArray;l.exportProto("subarray",(function(t,e){var i=r(this),l=i.length,s=o(t,l);return new(a(i,i.constructor))(i.buffer,i.byteOffset+s*i.BYTES_PER_ELEMENT,n((void 0===e?l:o(e,l))-s))}))},function(t,e,i){"use strict";var l=i(0),n=i(59),o=i(1),a=l.Int8Array,r=n.aTypedArray,s=[].toLocaleString,c=[].slice,u=!!a&&o((function(){s.call(new a(1))})),d=o((function(){return[1,2].toLocaleString()!=new a([1,2]).toLocaleString()}))||!o((function(){a.prototype.toLocaleString.call([1,2])}));n.exportProto("toLocaleString",(function(){return s.apply(u?c.call(r(this)):r(this),arguments)}),d)},function(t,e,i){"use strict";var l=i(0),n=i(59),o=i(1),a=l.Uint8Array,r=a&&a.prototype,s=[].toString,c=[].join;o((function(){s.call({})}))&&(s=function(){return c.call(this)}),n.exportProto("toString",s,(r||{}).toString!=s)},function(t,e,i){"use strict";(function(t){i(69),i(71),i(72),i(66),i(58),i(75),i(84),i(111),i(65),i(95),i(73),i(74);function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*!
 * Waves v0.7.6
 * http://fian.my.id/Waves
 *
 * Copyright 2014-2018 Alfiana E. Sibuea and other contributors
 * Released under the MIT license
 * https://github.com/fians/Waves/blob/master/LICENSE
 */!function(l,n){ true&&i(80)?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return l.Waves=n.call(l),l.Waves}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"===( false?undefined:e(exports))?t.exports=n.call(l):l.Waves=n.call(l)}("object"===("undefined"==typeof window?"undefined":e(window))?window:void 0,(function(){var t=t||{},i=document.querySelectorAll.bind(document),l=Object.prototype.toString,n="ontouchstart"in window;function o(t){var i=e(t);return"function"===i||"object"===i&&!!t}function a(t){var e,n=l.call(t);return"[object String]"===n?i(t):o(t)&&/^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(n)&&t.hasOwnProperty("length")?t:o(e=t)&&e.nodeType>0?[t]:[]}function r(t){var i,l,n={top:0,left:0},o=t&&t.ownerDocument;return i=o.documentElement,"undefined"!==e(t.getBoundingClientRect)&&(n=t.getBoundingClientRect()),l=function(t){return null!==(e=t)&&e===e.window?t:9===t.nodeType&&t.defaultView;var e}(o),{top:n.top+l.pageYOffset-i.clientTop,left:n.left+l.pageXOffset-i.clientLeft}}function s(t){var e="";for(var i in t)t.hasOwnProperty(i)&&(e+=i+":"+t[i]+";");return e}var c={duration:750,delay:200,show:function(t,e,i){if(2===t.button)return!1;e=e||this;var l=document.createElement("div");l.className="waves-ripple waves-rippling",e.appendChild(l);var n=r(e),o=0,a=0;"touches"in t&&t.touches.length?(o=t.touches[0].pageY-n.top,a=t.touches[0].pageX-n.left):(o=t.pageY-n.top,a=t.pageX-n.left),a=a>=0?a:0,o=o>=0?o:0;var u="scale("+e.clientWidth/100*3+")",d="translate(0,0)";i&&(d="translate("+i.x+"px, "+i.y+"px)"),l.setAttribute("data-hold",Date.now()),l.setAttribute("data-x",a),l.setAttribute("data-y",o),l.setAttribute("data-scale",u),l.setAttribute("data-translate",d);var h={top:o+"px",left:a+"px"};l.classList.add("waves-notransition"),l.setAttribute("style",s(h)),l.classList.remove("waves-notransition"),h["-webkit-transform"]=u+" "+d,h["-moz-transform"]=u+" "+d,h["-ms-transform"]=u+" "+d,h["-o-transform"]=u+" "+d,h.transform=u+" "+d,h.opacity="1";var p="mousemove"===t.type?2500:c.duration;h["-webkit-transition-duration"]=p+"ms",h["-moz-transition-duration"]=p+"ms",h["-o-transition-duration"]=p+"ms",h["transition-duration"]=p+"ms",l.setAttribute("style",s(h))},hide:function(t,e){for(var i=(e=e||this).getElementsByClassName("waves-rippling"),l=0,o=i.length;l<o;l++)d(t,e,i[l]);n&&(e.removeEventListener("touchend",c.hide),e.removeEventListener("touchcancel",c.hide)),e.removeEventListener("mouseup",c.hide),e.removeEventListener("mouseleave",c.hide)}},u={input:function(t){var e=t.parentNode;if("span"!==e.tagName.toLowerCase()||!e.classList.contains("waves-effect")){var i=document.createElement("span");i.className="waves-input-wrapper",e.replaceChild(i,t),i.appendChild(t)}},img:function(t){var e=t.parentNode;if("i"!==e.tagName.toLowerCase()||!e.classList.contains("waves-effect")){var i=document.createElement("i");e.replaceChild(i,t),i.appendChild(t)}}};function d(t,e,i){if(i){i.classList.remove("waves-rippling");var l=i.getAttribute("data-x"),n=i.getAttribute("data-y"),o=i.getAttribute("data-scale"),a=i.getAttribute("data-translate"),r=350-(Date.now()-Number(i.getAttribute("data-hold")));r<0&&(r=0),"mousemove"===t.type&&(r=150);var u="mousemove"===t.type?2500:c.duration;setTimeout((function(){var t={top:n+"px",left:l+"px",opacity:"0","-webkit-transition-duration":u+"ms","-moz-transition-duration":u+"ms","-o-transition-duration":u+"ms","transition-duration":u+"ms","-webkit-transform":o+" "+a,"-moz-transform":o+" "+a,"-ms-transform":o+" "+a,"-o-transform":o+" "+a,transform:o+" "+a};i.setAttribute("style",s(t)),setTimeout((function(){try{e.removeChild(i)}catch(t){return!1}}),u)}),r)}}var h={touches:0,allowEvent:function(t){var e=!0;return/^(mousedown|mousemove)$/.test(t.type)&&h.touches&&(e=!1),e},registerEvent:function(t){var e=t.type;"touchstart"===e?h.touches+=1:/^(touchend|touchcancel)$/.test(e)&&setTimeout((function(){h.touches&&(h.touches-=1)}),500)}};function p(t){var e=function(t){if(!1===h.allowEvent(t))return null;for(var e=null,i=t.target||t.srcElement;i.parentElement;){if(!(i instanceof SVGElement)&&i.classList.contains("waves-effect")){e=i;break}i=i.parentElement}return e}(t);if(null!==e){if(e.disabled||e.getAttribute("disabled")||e.classList.contains("disabled"))return;if(h.registerEvent(t),"touchstart"===t.type&&c.delay){var i=!1,l=setTimeout((function(){l=null,c.show(t,e)}),c.delay),o=function(n){l&&(clearTimeout(l),l=null,c.show(t,e)),i||(i=!0,c.hide(n,e)),r()},a=function(t){l&&(clearTimeout(l),l=null),o(t),r()};e.addEventListener("touchmove",a,!1),e.addEventListener("touchend",o,!1),e.addEventListener("touchcancel",o,!1);var r=function(){e.removeEventListener("touchmove",a),e.removeEventListener("touchend",o),e.removeEventListener("touchcancel",o)}}else c.show(t,e),n&&(e.addEventListener("touchend",c.hide,!1),e.addEventListener("touchcancel",c.hide,!1)),e.addEventListener("mouseup",c.hide,!1),e.addEventListener("mouseleave",c.hide,!1)}}return t.init=function(t){var e=document.body;"duration"in(t=t||{})&&(c.duration=t.duration),"delay"in t&&(c.delay=t.delay),n&&(e.addEventListener("touchstart",p,!1),e.addEventListener("touchcancel",h.registerEvent,!1),e.addEventListener("touchend",h.registerEvent,!1)),e.addEventListener("mousedown",p,!1)},t.attach=function(t,e){var i,n;t=a(t),"[object Array]"===l.call(e)&&(e=e.join(" ")),e=e?" "+e:"";for(var o=0,r=t.length;o<r;o++)n=(i=t[o]).tagName.toLowerCase(),-1!==["input","img"].indexOf(n)&&(u[n](i),i=i.parentElement),-1===i.className.indexOf("waves-effect")&&(i.className+=" waves-effect"+e)},t.ripple=function(t,e){var i=(t=a(t)).length;if((e=e||{}).wait=e.wait||0,e.position=e.position||null,i)for(var l,n,o,s={},u=0,d={type:"mousedown",button:1},h=function(t,e){return function(){c.hide(t,e)}};u<i;u++)if(l=t[u],n=e.position||{x:l.clientWidth/2,y:l.clientHeight/2},o=r(l),s.x=o.left+n.x,s.y=o.top+n.y,d.pageX=s.x,d.pageY=s.y,c.show(d,l),e.wait>=0&&null!==e.wait){setTimeout(h({type:"mouseup",button:1},l),e.wait)}},t.calm=function(t){for(var e={type:"mouseup",button:1},i=0,l=(t=a(t)).length;i<l;i++)c.hide(e,t[i])},t.displayEffect=function(e){console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"),t.init(e)},t})),$(document).ready((function(){Waves.attach(".btn:not(.btn-flat), .btn-floating",["waves-light"]),Waves.attach(".btn-flat",["waves-effect"]),Waves.attach(".chip",["waves-effect"]),Waves.attach(".view a .mask",["waves-light"]),Waves.attach(".waves-light",["waves-light"]),Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-icons li a, .nav-tabs .nav-item:not(.dropdown)",["waves-light"]),Waves.attach(".pager li a",["waves-light"]),Waves.attach(".pagination .page-item .page-link",["waves-effect"]),Waves.init()}))}).call(this,i(96)(t))},function(t,e){!function(t){t.fn.sticky=function(e){var i=t.extend({},{topSpacing:0,zIndex:"",stopper:".sticky-stopper",stickyClass:!1},e);var l="number"==typeof i.zIndex;var n=0<t(i.stopper).length||"number"==typeof i.stopper;return this.each((function(){var e=t(this),o=e.outerHeight(),a=e.outerWidth(),r=i.topSpacing,s=i.zIndex,c=e.offset().top-r,u=t("<div></div>").width(a).height(o).addClass("sticky-placeholder"),d=i.stopper,h=t(window);function p(){var a=h.scrollTop(),p=d,f=e.parent().width();(u.width(f),n&&"string"==typeof d)&&(p=t(d).offset().top-o-r);if(c<a){if(i.stickyClass&&e.addClass(i.stickyClass),e.after(u).css({position:"fixed",top:r,width:f}),l&&e.css({zIndex:s}),n&&p<a){var m=p-a+r;e.css({top:m})}}else i.stickyClass&&e.removeClass(i.stickyClass),e.css({position:"static",top:null,left:null,width:"auto"}),u.remove()}h.innerHeight()>o&&(h.bind("scroll",p),h.bind("load",p),h.bind("resize",p))}))}}(jQuery)},function(t,e,i){"use strict";var l=i(89),n=i(8),o=i(13),a=i(207),r=i(90);l("search",1,(function(t,e,i){return[function(e){var i=o(this),l=null==e?void 0:e[t];return void 0!==l?l.call(e,i):new RegExp(e)[t](String(i))},function(t){var l=i(e,t,this);if(l.done)return l.value;var o=n(t),s=String(this),c=o.lastIndex;a(c,0)||(o.lastIndex=0);var u=r(o,s);return a(o.lastIndex,c)||(o.lastIndex=c),null===u?-1:u.index}]}))},function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},function(t,e,i){"use strict";(function(t){var e,l;i(69),i(71),i(72),i(209),i(92),i(103),i(66),i(58),i(75),i(110),i(84),i(112),i(65),i(123),i(68),i(73),i(116),i(98),i(104),i(74);function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*!
 * perfect-scrollbar v1.5.0
 * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */e=void 0,l=function(){function t(t){return getComputedStyle(t)}function e(t,e){for(var i in e){var l=e[i];"number"==typeof l&&(l+="px"),t.style[i]=l}return t}function i(t){var e=document.createElement("div");return e.className=t,e}var l="undefined"!=typeof Element&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function n(t,e){if(!l)throw new Error("No element matching method supported");return l.call(t,e)}function o(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function a(t,e){return Array.prototype.filter.call(t.children,(function(t){return n(t,e)}))}var r={main:"ps",rtl:"ps__rtl",element:{thumb:function(t){return"ps__thumb-"+t},rail:function(t){return"ps__rail-"+t},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(t){return"ps--active-"+t},scrolling:function(t){return"ps--scrolling-"+t}}},s={x:null,y:null};function c(t,e){var i=t.element.classList,l=r.state.scrolling(e);i.contains(l)?clearTimeout(s[e]):i.add(l)}function u(t,e){s[e]=setTimeout((function(){return t.isAlive&&t.element.classList.remove(r.state.scrolling(e))}),t.settings.scrollingThreshold)}var d=function(t){this.element=t,this.handlers={}},h={isEmpty:{configurable:!0}};d.prototype.bind=function(t,e){void 0===this.handlers[t]&&(this.handlers[t]=[]),this.handlers[t].push(e),this.element.addEventListener(t,e,!1)},d.prototype.unbind=function(t,e){var i=this;this.handlers[t]=this.handlers[t].filter((function(l){return!(!e||l===e)||(i.element.removeEventListener(t,l,!1),!1)}))},d.prototype.unbindAll=function(){for(var t in this.handlers)this.unbind(t)},h.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every((function(e){return 0===t.handlers[e].length}))},Object.defineProperties(d.prototype,h);var p=function(){this.eventElements=[]};function f(t){if("function"==typeof window.CustomEvent)return new CustomEvent(t);var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,void 0),e}function m(t,e,i,l,n){var o;if(void 0===l&&(l=!0),void 0===n&&(n=!1),"top"===e)o=["contentHeight","containerHeight","scrollTop","y","up","down"];else{if("left"!==e)throw new Error("A proper axis should be provided");o=["contentWidth","containerWidth","scrollLeft","x","left","right"]}!function(t,e,i,l,n){var o=i[0],a=i[1],r=i[2],s=i[3],d=i[4],h=i[5];void 0===l&&(l=!0),void 0===n&&(n=!1);var p=t.element;t.reach[s]=null,p[r]<1&&(t.reach[s]="start"),p[r]>t[o]-t[a]-1&&(t.reach[s]="end"),e&&(p.dispatchEvent(f("ps-scroll-"+s)),e<0?p.dispatchEvent(f("ps-scroll-"+d)):e>0&&p.dispatchEvent(f("ps-scroll-"+h)),l&&function(t,e){c(t,e),u(t,e)}(t,s)),t.reach[s]&&(e||n)&&p.dispatchEvent(f("ps-"+s+"-reach-"+t.reach[s]))}(t,i,o,l,n)}function v(t){return parseInt(t,10)||0}p.prototype.eventElement=function(t){var e=this.eventElements.filter((function(e){return e.element===t}))[0];return e||(e=new d(t),this.eventElements.push(e)),e},p.prototype.bind=function(t,e,i){this.eventElement(t).bind(e,i)},p.prototype.unbind=function(t,e,i){var l=this.eventElement(t);l.unbind(e,i),l.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(l),1)},p.prototype.unbindAll=function(){this.eventElements.forEach((function(t){return t.unbindAll()})),this.eventElements=[]},p.prototype.once=function(t,e,i){var l=this.eventElement(t);l.bind(e,(function t(n){l.unbind(e,t),i(n)}))};var g={isWebKit:"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:"undefined"!=typeof window&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:"undefined"!=typeof navigator&&navigator.msMaxTouchPoints,isChrome:"undefined"!=typeof navigator&&/Chrome/i.test(navigator&&navigator.userAgent)};function y(t){var i=t.element,l=Math.floor(i.scrollTop),n=i.getBoundingClientRect();t.containerWidth=Math.ceil(n.width),t.containerHeight=Math.ceil(n.height),t.contentWidth=i.scrollWidth,t.contentHeight=i.scrollHeight,i.contains(t.scrollbarXRail)||(a(i,r.element.rail("x")).forEach((function(t){return o(t)})),i.appendChild(t.scrollbarXRail)),i.contains(t.scrollbarYRail)||(a(i,r.element.rail("y")).forEach((function(t){return o(t)})),i.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=b(t,v(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=v((t.negativeScrollAdjustment+i.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=b(t,v(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=v(l*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),function(t,i){var l={width:i.railXWidth},n=Math.floor(t.scrollTop);i.isRtl?l.left=i.negativeScrollAdjustment+t.scrollLeft+i.containerWidth-i.contentWidth:l.left=t.scrollLeft,i.isScrollbarXUsingBottom?l.bottom=i.scrollbarXBottom-n:l.top=i.scrollbarXTop+n,e(i.scrollbarXRail,l);var o={top:n,height:i.railYHeight};i.isScrollbarYUsingRight?i.isRtl?o.right=i.contentWidth-(i.negativeScrollAdjustment+t.scrollLeft)-i.scrollbarYRight-i.scrollbarYOuterWidth-9:o.right=i.scrollbarYRight-t.scrollLeft:i.isRtl?o.left=i.negativeScrollAdjustment+t.scrollLeft+2*i.containerWidth-i.contentWidth-i.scrollbarYLeft-i.scrollbarYOuterWidth:o.left=i.scrollbarYLeft+t.scrollLeft,e(i.scrollbarYRail,o),e(i.scrollbarX,{left:i.scrollbarXLeft,width:i.scrollbarXWidth-i.railBorderXWidth}),e(i.scrollbarY,{top:i.scrollbarYTop,height:i.scrollbarYHeight-i.railBorderYWidth})}(i,t),t.scrollbarXActive?i.classList.add(r.state.active("x")):(i.classList.remove(r.state.active("x")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,i.scrollLeft=!0===t.isRtl?t.contentWidth:0),t.scrollbarYActive?i.classList.add(r.state.active("y")):(i.classList.remove(r.state.active("y")),t.scrollbarYHeight=0,t.scrollbarYTop=0,i.scrollTop=0)}function b(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function x(t,e){var i=e[0],l=e[1],n=e[2],o=e[3],a=e[4],s=e[5],d=e[6],h=e[7],p=e[8],f=t.element,m=null,v=null,g=null;function b(e){e.touches&&e.touches[0]&&(e[n]=e.touches[0].pageY),f[d]=m+g*(e[n]-v),c(t,h),y(t),e.stopPropagation(),e.preventDefault()}function x(){u(t,h),t[p].classList.remove(r.state.clicking),t.event.unbind(t.ownerDocument,"mousemove",b)}function w(e,a){m=f[d],a&&e.touches&&(e[n]=e.touches[0].pageY),v=e[n],g=(t[l]-t[i])/(t[o]-t[s]),a?t.event.bind(t.ownerDocument,"touchmove",b):(t.event.bind(t.ownerDocument,"mousemove",b),t.event.once(t.ownerDocument,"mouseup",x),e.preventDefault()),t[p].classList.add(r.state.clicking),e.stopPropagation()}t.event.bind(t[a],"mousedown",(function(t){w(t)})),t.event.bind(t[a],"touchstart",(function(t){w(t,!0)}))}var w={"click-rail":function(t){t.element,t.event.bind(t.scrollbarY,"mousedown",(function(t){return t.stopPropagation()})),t.event.bind(t.scrollbarYRail,"mousedown",(function(e){var i=e.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top>t.scrollbarYTop?1:-1;t.element.scrollTop+=i*t.containerHeight,y(t),e.stopPropagation()})),t.event.bind(t.scrollbarX,"mousedown",(function(t){return t.stopPropagation()})),t.event.bind(t.scrollbarXRail,"mousedown",(function(e){var i=e.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left>t.scrollbarXLeft?1:-1;t.element.scrollLeft+=i*t.containerWidth,y(t),e.stopPropagation()}))},"drag-thumb":function(t){x(t,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),x(t,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])},keyboard:function(t){var e=t.element;t.event.bind(t.ownerDocument,"keydown",(function(i){if(!(i.isDefaultPrevented&&i.isDefaultPrevented()||i.defaultPrevented)&&(n(e,":hover")||n(t.scrollbarX,":focus")||n(t.scrollbarY,":focus"))){var l,o=document.activeElement?document.activeElement:t.ownerDocument.activeElement;if(o){if("IFRAME"===o.tagName)o=o.contentDocument.activeElement;else for(;o.shadowRoot;)o=o.shadowRoot.activeElement;if(n(l=o,"input,[contenteditable]")||n(l,"select,[contenteditable]")||n(l,"textarea,[contenteditable]")||n(l,"button,[contenteditable]"))return}var a=0,r=0;switch(i.which){case 37:a=i.metaKey?-t.contentWidth:i.altKey?-t.containerWidth:-30;break;case 38:r=i.metaKey?t.contentHeight:i.altKey?t.containerHeight:30;break;case 39:a=i.metaKey?t.contentWidth:i.altKey?t.containerWidth:30;break;case 40:r=i.metaKey?-t.contentHeight:i.altKey?-t.containerHeight:-30;break;case 32:r=i.shiftKey?t.containerHeight:-t.containerHeight;break;case 33:r=t.containerHeight;break;case 34:r=-t.containerHeight;break;case 36:r=t.contentHeight;break;case 35:r=-t.contentHeight;break;default:return}t.settings.suppressScrollX&&0!==a||t.settings.suppressScrollY&&0!==r||(e.scrollTop-=r,e.scrollLeft+=a,y(t),function(i,l){var n=Math.floor(e.scrollTop);if(0===i){if(!t.scrollbarYActive)return!1;if(0===n&&l>0||n>=t.contentHeight-t.containerHeight&&l<0)return!t.settings.wheelPropagation}var o=e.scrollLeft;if(0===l){if(!t.scrollbarXActive)return!1;if(0===o&&i<0||o>=t.contentWidth-t.containerWidth&&i>0)return!t.settings.wheelPropagation}return!0}(a,r)&&i.preventDefault())}}))},wheel:function(e){var i=e.element;function l(l){var n=function(t){var e=t.deltaX,i=-1*t.deltaY;return void 0!==e&&void 0!==i||(e=-1*t.wheelDeltaX/6,i=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,i*=10),e!=e&&i!=i&&(e=0,i=t.wheelDelta),t.shiftKey?[-i,-e]:[e,i]}(l),o=n[0],a=n[1];if(!function(e,l,n){if(!g.isWebKit&&i.querySelector("select:focus"))return!0;if(!i.contains(e))return!1;for(var o=e;o&&o!==i;){if(o.classList.contains(r.element.consuming))return!0;var a=t(o);if(n&&a.overflowY.match(/(scroll|auto)/)){var s=o.scrollHeight-o.clientHeight;if(s>0&&(o.scrollTop>0&&n<0||o.scrollTop<s&&n>0))return!0}if(l&&a.overflowX.match(/(scroll|auto)/)){var c=o.scrollWidth-o.clientWidth;if(c>0&&(o.scrollLeft>0&&l<0||o.scrollLeft<c&&l>0))return!0}o=o.parentNode}return!1}(l.target,o,a)){var s=!1;e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(a?i.scrollTop-=a*e.settings.wheelSpeed:i.scrollTop+=o*e.settings.wheelSpeed,s=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(o?i.scrollLeft+=o*e.settings.wheelSpeed:i.scrollLeft-=a*e.settings.wheelSpeed,s=!0):(i.scrollTop-=a*e.settings.wheelSpeed,i.scrollLeft+=o*e.settings.wheelSpeed),y(e),(s=s||function(t,l){var n=Math.floor(i.scrollTop),o=0===i.scrollTop,a=n+i.offsetHeight===i.scrollHeight,r=0===i.scrollLeft,s=i.scrollLeft+i.offsetWidth===i.scrollWidth;return!(Math.abs(l)>Math.abs(t)?o||a:r||s)||!e.settings.wheelPropagation}(o,a))&&!l.ctrlKey&&(l.stopPropagation(),l.preventDefault())}}void 0!==window.onwheel?e.event.bind(i,"wheel",l):void 0!==window.onmousewheel&&e.event.bind(i,"mousewheel",l)},touch:function(e){if(g.supportsTouch||g.supportsIePointer){var i=e.element,l={},n=0,o={},a=null;g.supportsTouch?(e.event.bind(i,"touchstart",d),e.event.bind(i,"touchmove",h),e.event.bind(i,"touchend",p)):g.supportsIePointer&&(window.PointerEvent?(e.event.bind(i,"pointerdown",d),e.event.bind(i,"pointermove",h),e.event.bind(i,"pointerup",p)):window.MSPointerEvent&&(e.event.bind(i,"MSPointerDown",d),e.event.bind(i,"MSPointerMove",h),e.event.bind(i,"MSPointerUp",p)))}function s(t,l){i.scrollTop-=l,i.scrollLeft-=t,y(e)}function c(t){return t.targetTouches?t.targetTouches[0]:t}function u(t){return!(t.pointerType&&"pen"===t.pointerType&&0===t.buttons||(!t.targetTouches||1!==t.targetTouches.length)&&(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE))}function d(t){if(u(t)){var e=c(t);l.pageX=e.pageX,l.pageY=e.pageY,n=(new Date).getTime(),null!==a&&clearInterval(a)}}function h(a){if(u(a)){var d=c(a),h={pageX:d.pageX,pageY:d.pageY},p=h.pageX-l.pageX,f=h.pageY-l.pageY;if(function(e,l,n){if(!i.contains(e))return!1;for(var o=e;o&&o!==i;){if(o.classList.contains(r.element.consuming))return!0;var a=t(o);if(n&&a.overflowY.match(/(scroll|auto)/)){var s=o.scrollHeight-o.clientHeight;if(s>0&&(o.scrollTop>0&&n<0||o.scrollTop<s&&n>0))return!0}if(l&&a.overflowX.match(/(scroll|auto)/)){var c=o.scrollWidth-o.clientWidth;if(c>0&&(o.scrollLeft>0&&l<0||o.scrollLeft<c&&l>0))return!0}o=o.parentNode}return!1}(a.target,p,f))return;s(p,f),l=h;var m=(new Date).getTime(),v=m-n;v>0&&(o.x=p/v,o.y=f/v,n=m),function(t,l){var n=Math.floor(i.scrollTop),o=i.scrollLeft,a=Math.abs(t),r=Math.abs(l);if(r>a){if(l<0&&n===e.contentHeight-e.containerHeight||l>0&&0===n)return 0===window.scrollY&&l>0&&g.isChrome}else if(a>r&&(t<0&&o===e.contentWidth-e.containerWidth||t>0&&0===o))return!0;return!0}(p,f)&&a.preventDefault()}}function p(){e.settings.swipeEasing&&(clearInterval(a),a=setInterval((function(){e.isInitialized?clearInterval(a):o.x||o.y?Math.abs(o.x)<.01&&Math.abs(o.y)<.01?clearInterval(a):(s(30*o.x,30*o.y),o.x*=.8,o.y*=.8):clearInterval(a)}),10))}}},k=function(l,n){var o=this;if(void 0===n&&(n={}),"string"==typeof l&&(l=document.querySelector(l)),!l||!l.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");for(var a in this.element=l,l.classList.add(r.main),this.settings={handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1},n)this.settings[a]=n[a];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var s,c,u=function(){return l.classList.add(r.state.focus)},d=function(){return l.classList.remove(r.state.focus)};this.isRtl="rtl"===t(l).direction,!0===this.isRtl&&l.classList.add(r.rtl),this.isNegativeScroll=(c=l.scrollLeft,l.scrollLeft=-1,s=l.scrollLeft<0,l.scrollLeft=c,s),this.negativeScrollAdjustment=this.isNegativeScroll?l.scrollWidth-l.clientWidth:0,this.event=new p,this.ownerDocument=l.ownerDocument||document,this.scrollbarXRail=i(r.element.rail("x")),l.appendChild(this.scrollbarXRail),this.scrollbarX=i(r.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",u),this.event.bind(this.scrollbarX,"blur",d),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var h=t(this.scrollbarXRail);this.scrollbarXBottom=parseInt(h.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=v(h.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=v(h.borderLeftWidth)+v(h.borderRightWidth),e(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=v(h.marginLeft)+v(h.marginRight),e(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=i(r.element.rail("y")),l.appendChild(this.scrollbarYRail),this.scrollbarY=i(r.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",u),this.event.bind(this.scrollbarY,"blur",d),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var f=t(this.scrollbarYRail);this.scrollbarYRight=parseInt(f.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=v(f.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?function(e){var i=t(e);return v(i.width)+v(i.paddingLeft)+v(i.paddingRight)+v(i.borderLeftWidth)+v(i.borderRightWidth)}(this.scrollbarY):null,this.railBorderYWidth=v(f.borderTopWidth)+v(f.borderBottomWidth),e(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=v(f.marginTop)+v(f.marginBottom),e(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:l.scrollLeft<=0?"start":l.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:l.scrollTop<=0?"start":l.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach((function(t){return w[t](o)})),this.lastScrollTop=Math.floor(l.scrollTop),this.lastScrollLeft=l.scrollLeft,this.event.bind(this.element,"scroll",(function(t){return o.onScroll(t)})),y(this)};return k.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,e(this.scrollbarXRail,{display:"block"}),e(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=v(t(this.scrollbarXRail).marginLeft)+v(t(this.scrollbarXRail).marginRight),this.railYMarginHeight=v(t(this.scrollbarYRail).marginTop)+v(t(this.scrollbarYRail).marginBottom),e(this.scrollbarXRail,{display:"none"}),e(this.scrollbarYRail,{display:"none"}),y(this),m(this,"top",0,!1,!0),m(this,"left",0,!1,!0),e(this.scrollbarXRail,{display:""}),e(this.scrollbarYRail,{display:""}))},k.prototype.onScroll=function(t){this.isAlive&&(y(this),m(this,"top",this.element.scrollTop-this.lastScrollTop),m(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)},k.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),o(this.scrollbarX),o(this.scrollbarY),o(this.scrollbarXRail),o(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)},k.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter((function(t){return!t.match(/^ps([-_].+|)$/)})).join(" ")},k},"object"===( false?undefined:n(exports))&&void 0!==t?t.exports=l(): true&&i(80)?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (l),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):(e=e||self).PerfectScrollbar=l()}).call(this,i(96)(t))},function(t,e,i){"use strict";var l=i(4),n=i(24).every;l({target:"Array",proto:!0,forced:i(52)("every")},{every:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,i){"use strict";(function(t){i(84),i(115);!function(t){t(["jquery"],(function(t){return function(){var e,i,l,n=0,o={error:"error",info:"info",success:"success",warning:"warning"},a={clear:function(i,l){var n=d();e||r(n);s(i,n,l)||function(i){for(var l=e.children(),n=l.length-1;n>=0;n--)s(t(l[n]),i)}(n)},remove:function(i){var l=d();e||r(l);if(i&&0===t(":focus",i).length)return void h(i);e.children().length&&e.remove()},error:function(t,e,i){return u({type:o.error,iconClass:d().iconClasses.error,message:t,optionsOverride:i,title:e})},getContainer:r,info:function(t,e,i){return u({type:o.info,iconClass:d().iconClasses.info,message:t,optionsOverride:i,title:e})},options:{},subscribe:function(t){i=t},success:function(t,e,i){return u({type:o.success,iconClass:d().iconClasses.success,message:t,optionsOverride:i,title:e})},version:"2.1.1",warning:function(t,e,i){return u({type:o.warning,iconClass:d().iconClasses.warning,message:t,optionsOverride:i,title:e})}};return a;function r(i,l){return i||(i=d()),(e=t("#"+i.containerId)).length?e:(l&&(e=function(i){return(e=t("<div/>").attr("id",i.containerId).addClass(i.positionClass).attr("aria-live","polite").attr("role","alert")).appendTo(t(i.target)),e}(i)),e)}function s(e,i,l){var n=!(!l||!l.force)&&l.force;return!(!e||!n&&0!==t(":focus",e).length)&&(e[i.hideMethod]({duration:i.hideDuration,easing:i.hideEasing,complete:function(){h(e)}}),!0)}function c(t){i&&i(t)}function u(i){var o=d(),a=i.iconClass||o.iconClass;if(void 0!==i.optionsOverride&&(o=t.extend(o,i.optionsOverride),a=i.optionsOverride.iconClass||a),!function(t,e){if(t.preventDuplicates){if(e.message===l)return!0;l=e.message}return!1}(o,i)){n++,e=r(o,!0);var s=null,u=t("<div/>"),p=t("<div/>"),f=t("<div/>"),m=t("<div/>"),v=t(o.closeHtml),g={intervalId:null,hideEta:null,maxHideTime:null},y={toastId:n,state:"visible",startTime:new Date,options:o,map:i};return i.iconClass&&u.addClass(o.toastClass).addClass(a),i.title&&(p.append(i.title).addClass(o.titleClass),u.append(p)),i.message&&(f.append(i.message).addClass(o.messageClass),u.append(f)),o.closeButton&&(v.addClass("md-toast-close-button").attr("role","button"),u.prepend(v)),o.progressBar&&(m.addClass("md-toast-progress"),u.prepend(m)),o.newestOnTop?e.prepend(u):e.append(u),u.hide(),u[o.showMethod]({duration:o.showDuration,easing:o.showEasing,complete:o.onShown}),o.timeOut>0&&(s=setTimeout(b,o.timeOut),g.maxHideTime=parseFloat(o.timeOut),g.hideEta=(new Date).getTime()+g.maxHideTime,o.progressBar&&(g.intervalId=setInterval(k,10))),function(){u.hover(w,x),!o.onclick&&o.tapToDismiss&&u.click(b);o.closeButton&&v&&v.click((function(t){t.stopPropagation?t.stopPropagation():void 0!==t.cancelBubble&&!0!==t.cancelBubble&&(t.cancelBubble=!0),b(!0)}));o.onclick&&u.click((function(){o.onclick(),b()}))}(),c(y),o.debug&&console&&console.log(y),u}function b(e){if(!t(":focus",u).length||e)return clearTimeout(g.intervalId),u[o.hideMethod]({duration:o.hideDuration,easing:o.hideEasing,complete:function(){h(u),o.onHidden&&"hidden"!==y.state&&o.onHidden(),y.state="hidden",y.endTime=new Date,c(y)}})}function x(){(o.timeOut>0||o.extendedTimeOut>0)&&(s=setTimeout(b,o.extendedTimeOut),g.maxHideTime=parseFloat(o.extendedTimeOut),g.hideEta=(new Date).getTime()+g.maxHideTime)}function w(){clearTimeout(s),g.hideEta=0,u.stop(!0,!0)[o.showMethod]({duration:o.showDuration,easing:o.showEasing})}function k(){var t=(g.hideEta-(new Date).getTime())/g.maxHideTime*100;m.width(t+"%")}}function d(){return t.extend({},{tapToDismiss:!0,toastClass:"md-toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,extendedTimeOut:1e3,iconClasses:{error:"md-toast-error",info:"md-toast-info",success:"md-toast-success",warning:"md-toast-warning"},iconClass:"md-toast-info",positionClass:"md-toast-top-right",timeOut:5e3,titleClass:"md-toast-title",messageClass:"md-toast-message",target:"body",closeHtml:'<button type="button">&times;</button>',newestOnTop:!0,preventDuplicates:!1,progressBar:!1},a.options)}function h(t){e||(e=r()),t.is(":visible")||(t.remove(),t=null,0===e.children().length&&(e.remove(),l=void 0))}}()}))}( true&&i(80)?__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js"):function(e,l){t.exports?t.exports=l(i(118)):window.toastr=l(window.jQuery)})}).call(this,i(96)(t))},function(t,e,i){"use strict";i.r(e);i(43),i(103),i(119),i(100),i(212),i(131),i(110),i(213),i(120),i(104);function l(t,e){for(var i=0;i<e.length;i++){var l=e[i];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}jQuery((function(t){t(document).on("click",".chip .close",(function(){var e=t(this);e.closest(".chips").data("initialized")||e.closest(".chip").remove()}));var e=function(){function e(i){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.$chipsWrapper=i,this.options="string"==typeof l?l:{data:this.fallback().or(l.data).or([]).value(),dataChip:this.fallback().or(l.dataChip).or([]).value(),placeholder:this.fallback().or(i.attr("data-placeholder")).or(l.placeholder).or("").value(),secondaryPlaceholder:this.fallback().or(i.attr("data-secondary-placeholder")).or(l.secondaryPlaceholder).or("").value(),sortAutocompleteData:this.fallback().or(i.attr("data-sort-autocomplete-data")).or(l.sortAutocompleteData).or(!0).value(),autocompleteDataCompareFn:this.fallback().or(l.autocompleteDataCompareFn).or(void 0).value()},this.$autocompleteList=t('<ul class="chip-ul z-depth-1" tabindex="0"></ul>'),this.keyCodes={backspace:8,enter:13,arrowLeft:37,arrowRight:39,delete:46,comma:188}}var i,n,o;return i=e,(n=[{key:"getSelectedChip",value:function(){return this.$chipsWrapper.find(".chip.selected")}},{key:"returnPublicInterface",value:function(){return"data"===this.options?this.$chipsWrapper.data("chips"):"options"===this.options?this.$chipsWrapper.data("options"):this.$chipsWrapper}},{key:"init",value:function(){this.isPublicInterfaceCall||(this.assignOptions(),this.isInitialized||(this.$chipsWrapper.data({chips:this.options.data.slice(),index:this.$chipsWrapper.index(),initialized:!0}),this.$chipsWrapper.attr("tabindex",0),this.$chipsWrapper.hasClass(".chips")||this.$chipsWrapper.addClass("chips"),this.renderChips(),this.bindEvents()))}},{key:"assignOptions",value:function(){Array.isArray(this.options.data)||(this.options.data=[]),this.$chipsWrapper.data("options",Object.assign({},this.options))}},{key:"bindEvents",value:function(){this.bindChipsWrapperClick(),this.bindChipsWrapperBlur(),this.bindSingleChipClick(),this.bindChipsWrapperKeydown(),this.bindChipsInputClick(),this.bindChipsInputFocusout(),this.bindChipsInputKeydown(),this.bindDeleteButtonClick(),this.bindAutocompleteInputKeyup(),this.bindAutocompleteOptionClick()}},{key:"bindChipsWrapperClick",value:function(){this.$chipsWrapper.on("click",(function(e){return t(e.target).find("input").focus().addClass("active")}))}},{key:"bindChipsWrapperBlur",value:function(){var e=this;this.$chipsWrapper.on("blur",(function(i){setTimeout((function(){return e.$autocompleteList.removeClass("active").hide()}),100),t(i.target).removeClass("active"),e.getSelectedChip().removeClass("selected")}))}},{key:"bindSingleChipClick",value:function(){var e=this;this.$chipsWrapper.on("click",".chip",(function(i){var l=t(i.target),n=l.index();e.$chipsWrapper.find(".chip.selected").not(l).removeClass("selected"),e.selectChip(n)}))}},{key:"bindChipsWrapperKeydown",value:function(){var t=this;this.$chipsWrapper.on("keydown",(function(e){var i=e.which===t.keyCodes.backspace,l=e.which===t.keyCodes.delete,n=e.which===t.keyCodes.arrowLeft,o=e.which===t.keyCodes.arrowRight;if((i||l)&&t.getSelectedChip().length){e.preventDefault();var a=t.deleteSelectedChip();t.selectChip(a)}else n?t.selectLeftChip():o&&t.selectRightChip()}))}},{key:"bindChipsInputClick",value:function(){var e=this;this.$chipsWrapper.find("input").on("click",(function(i){t(i.target).addClass("active"),e.$chipsWrapper.addClass("focus"),e.$chipsWrapper.find(".chip").removeClass("selected")}))}},{key:"bindChipsInputFocusout",value:function(){var t=this;this.$chipsWrapper.on("focusout","input",(function(){return t.$chipsWrapper.removeClass("focus")}))}},{key:"bindChipsInputKeydown",value:function(){var e=this;this.$chipsWrapper.on("keydown","input",(function(i){var l=t(i.target),n=i.which===e.keyCodes.enter,o=i.which===e.keyCodes.comma,a=i.which===e.keyCodes.backspace;if((n||o)&&!e.$autocompleteList.find("li").hasClass("selected"))return i.preventDefault(),e.addChip({tag:l.val()}),void l.val("");if(""===l.val()&&a&&!e.$chipsWrapper.find(".chip").hasClass("selected")){var r=e.$chipsWrapper.find(".chip-position-wrapper .chip").last().index();e.deleteChip(r)}}))}},{key:"bindDeleteButtonClick",value:function(){var e=this;this.$chipsWrapper.on("click",".chip i.close",(function(i){i.stopPropagation();var l=t(i.target).closest(".chip").index();e.deleteChip(l),e.$chipsWrapper.find("input").focus()}))}},{key:"bindAutocompleteInputKeyup",value:function(){var e=this,i=this.$chipsWrapper.find(".chip-position-wrapper").find("input");i.on("keyup",(function(l){var n=i.val();e.$autocompleteList.empty(),n.length?(e.options.dataChip.forEach((function(i){i.toLowerCase().includes(n.toLowerCase())&&e.$chipsWrapper.find(".chip-position-wrapper").append(e.$autocompleteList.append(t("<li>".concat(i,"</li>"))))})),e.$autocompleteList.addClass("active").show()):e.$autocompleteList.removeClass("active").hide();var o=l.which===e.keyCodes.enter,a=l.which===e.keyCodes.comma,r=e.$chipsWrapper.find(".chip-position-wrapper .chip").last().text();!o&&!a||e.options.dataChip.includes(r)?(o||a)&&e.$autocompleteList.remove():(e.options.dataChip.push(r),e.options.sortAutocompleteData&&e.options.dataChip.sort(e.options.autocompleteDataCompareFn))}))}},{key:"bindAutocompleteOptionClick",value:function(){var e=this;this.$chipsWrapper.on("click","li",(function(i){i.preventDefault();var l=t(i.target);e.addChip({tag:l.text()}),e.$chipsWrapper.find(".chip-position-wrapper").find("input").val(""),e.$autocompleteList.remove()}))}},{key:"deleteSelectedChip",value:function(){var t=this.getSelectedChip(),e=t.siblings(".chip").length,i=t.index();this.deleteChip(i);var l=-1;return i<e-1?l=i:i!==e&&i!==e-1||(l=e-1),e||this.$chipsWrapper.find("input").focus(),l}},{key:"selectLeftChip",value:function(){this.selectLeftRightChip(!0)}},{key:"selectRightChip",value:function(){this.selectLeftRightChip(!1)}},{key:"selectLeftRightChip",value:function(t){var e=this.getSelectedChip(),i=e.index(),l=e.siblings(".chip").length,n=t?i-1:i+1;if(t&&n<0)n=this.$chipsWrapper.find(".chip").length-1;else if(!t&&n>l)return void this.$chipsWrapper.find("input").focus();this.$chipsWrapper.find(".chip").removeClass("selected"),this.selectChip(n)}},{key:"renderChips",value:function(){var t=this,e="";this.$chipsWrapper.data("chips").forEach((function(i){e+=t.getSingleChipTemplate(i)})),this.$chipsWrapper.hasClass("chips-autocomplete")?e+='<span class="chip-position-wrapper position-relative"><input class="input" placeholder=""></span>':e+='<input class="input" placeholder="">',this.$chipsWrapper.html(e),this.setPlaceholder()}},{key:"getSingleChipTemplate",value:function(t){if(!t.tag)return"";var e='<div class="chip">'.concat(t.tag);return t.image&&(e+=' <img src="'.concat(t.image,'" /> ')),e+='<i class="close fas fa-times"></i>',e+="</div>"}},{key:"setPlaceholder",value:function(){this.$chipsWrapper.find("input").prop("placeholder",this.options.data.length?this.options.placeholder:this.options.secondaryPlaceholder)}},{key:"addChip",value:function(e){if(this.isValid(e)){var i=t(this.getSingleChipTemplate(e));this.$chipsWrapper.data("chips").push(e),this.options.data.push(e),this.$chipsWrapper.hasClass("chips-autocomplete")&&this.$chipsWrapper.find(".chip").length>0?i.insertAfter(this.$chipsWrapper.find(".chip").last()):i.insertBefore(this.$chipsWrapper.find("input")),this.$chipsWrapper.trigger("chip.add",e),this.setPlaceholder()}}},{key:"isValid",value:function(t){return""!==t.tag&&!this.options.data.some((function(e){return e.tag===t.tag}))}},{key:"deleteChip",value:function(t){var e=this.$chipsWrapper.data("chips")[t];this.$chipsWrapper.find(".chip").eq(t).remove(),this.$chipsWrapper.data("chips").splice(t,1),this.options.data.splice(t,1),this.$chipsWrapper.trigger("chip.delete",e),this.setPlaceholder()}},{key:"selectChip",value:function(t){var e=this.$chipsWrapper.find(".chip").eq(t);e&&!e.hasClass("selected")&&(e.addClass("selected"),this.$chipsWrapper.trigger("chip.select",this.$chipsWrapper.data("chips")[t]))}},{key:"fallback",value:function(){return{_value:void 0,or:function(t){return void 0!==t&&void 0===this._value&&(this._value=t),this},value:function(){return this._value}}}},{key:"isPublicInterfaceCall",get:function(){return"string"==typeof this.options}},{key:"isInitialized",get:function(){return this.$chipsWrapper.data("initialized")}}])&&l(i.prototype,n),o&&l(i,o),e}();t.fn.materialChip=function(i){if(this.length>1){var l=[];return this.each((function(){var n=new e(t(this),i);n.init(),l.push(n.returnPublicInterface())})),l}var n=new e(t(this),i);return n.init(),n.returnPublicInterface()}}))},function(t,e,i){"use strict";var l=i(4),n=i(24).some;l({target:"Array",proto:!0,forced:i(52)("some")},{some:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,i){var l=i(4),n=i(214);l({target:"Object",stat:!0,forced:Object.assign!==n},{assign:n})},function(t,e,i){"use strict";var l=i(7),n=i(1),o=i(41),a=i(44),r=i(40),s=i(16),c=i(27),u=Object.assign;t.exports=!u||n((function(){var t={},e={},i=Symbol();return t[i]=7,"abcdefghijklmnopqrst".split("").forEach((function(t){e[t]=t})),7!=u({},t)[i]||"abcdefghijklmnopqrst"!=o(u({},e)).join("")}))?function(t,e){for(var i=s(t),n=arguments.length,u=1,d=a.f,h=r.f;n>u;)for(var p,f=c(arguments[u++]),m=d?o(f).concat(d(f)):o(f),v=m.length,g=0;v>g;)p=m[g++],l&&!h.call(f,p)||(i[p]=f[p]);return i}:u},function(t,e){function i(t,e){for(var i=0;i<e.length;i++){var l=e[i];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}jQuery((function(t){var e=function(){function e(i,l){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.defaults={topSpacing:0,zIndex:!1,stopper:"#footer",stickyClass:!1,startScrolling:"top",minWidth:!1},this.$element=i,this.options=this.assignOptions(l),this.$window=t(window),this.stopper=this.options.stopper,this.elementWidth=this.$element.outerWidth(),this.elementHeight=this.$element.outerHeight(!0),this.initialScrollTop=this.$element.offset().top,this.$placeholder=t('<div class="sticky-placeholder"></div>'),this.scrollTop=0,this.setPushPoint(),this.setStopperPosition(),this.bindEvents()}var l,n,o;return l=e,(n=[{key:"hasZIndex",value:function(){return"number"==typeof this.options.zIndex}},{key:"hasStopper",value:function(){return t(this.options.stopper).length||"number"==typeof this.options.stopper}},{key:"isScreenHeightEnough",value:function(){return this.$element.outerHeight()+this.options.topSpacing<this.$window.height()}},{key:"assignOptions",value:function(e){return t.extend({},this.defaults,e)}},{key:"setPushPoint",value:function(){"bottom"!==this.options.startScrolling||this.isScreenHeightEnough()?this.$pushPoint=this.initialScrollTop-this.options.topSpacing:this.$pushPoint=this.initialScrollTop+this.$element.outerHeight(!0)-this.$window.height()}},{key:"setStopperPosition",value:function(){"string"==typeof this.options.stopper?this.stopPoint=t(this.stopper).offset().top-this.options.topSpacing:"number"==typeof this.options.stopper&&(this.stopPoint=this.options.stopper)}},{key:"bindEvents",value:function(){this.$window.on("resize",this.handleResize.bind(this)),this.$window.on("scroll",this.init.bind(this))}},{key:"handleResize",value:function(){var t=this.$element.parent();this.elementWidth=t.width(),this.elementHeight=this.$element.outerHeight(!0),this.setPushPoint(),this.setStopperPosition(),this.init()}},{key:"init",value:function(){if(this.options.minWidth&&this.options.minWidth>this.$window.innerWidth())return!1;"bottom"!==this.options.startScrolling||this.isScreenHeightEnough()?this.scrollTop=this.$window.scrollTop():this.scrollTop=this.$window.scrollTop()+this.$window.height(),this.$pushPoint<this.scrollTop?(this.appendPlaceholder(),this.stickyStart()):this.stickyEnd(),this.$window.scrollTop()>this.$pushPoint?this.stop():this.stickyEnd()}},{key:"appendPlaceholder",value:function(){this.$element.after(this.$placeholder),this.$placeholder.css({width:this.elementWidth,height:this.elementHeight})}},{key:"stickyStart",value:function(){this.options.stickyClass&&this.$element.addClass(this.options.stickyClass),this.$element.get(0).style.overflow="scroll";var t=this.$element.get(0).scrollHeight;this.$element.get(0).style.overflow="",this.$element.css({position:"fixed",width:this.elementWidth,height:t}),"bottom"!==this.options.startScrolling||this.isScreenHeightEnough()?this.$element.css({top:this.options.topSpacing}):this.$element.css({bottom:0,top:""}),this.hasZIndex()&&this.$element.css({zIndex:this.options.zIndex})}},{key:"stickyEnd",value:function(){this.options.stickyClass&&this.$element.removeClass(this.options.stickyClass),this.$placeholder.remove(),this.$element.css({position:"static",top:this.options.topSpacing,width:"",height:""})}},{key:"stop",value:function(){this.stopPoint<t(this.$element).offset().top-this.options.topSpacing+this.$element.outerHeight(!0)&&this.$element.css({position:"absolute",bottom:0,top:""})}}])&&i(l.prototype,n),o&&i(l,o),e}();t.fn.sticky=function(i){t(this).each((function(){new e(t(this),i).init()}))}}))},,,,function(t,e,i){i(4)({target:"Number",stat:!0},{MAX_SAFE_INTEGER:9007199254740991})},function(t,e,i){i(4)({target:"Number",stat:!0},{MIN_SAFE_INTEGER:-9007199254740991})},function(t,e,i){i(78)("toStringTag")},function(t,e,i){var l=i(0);i(60)(l.JSON,"JSON",!0)},function(t,e,i){i(60)(Math,"Math",!0)},function(t,e,i){"use strict";i.r(e),function(t){var e;i(69),i(71),i(72),i(43),i(66),i(58),i(75),i(97),i(84),i(121),i(65),i(95),i(73),i(74);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*!
 * pickadate.js v3.6.3, 2019/04/03
 * By Amsul, http://amsul.ca
 * Hosted on http://amsul.github.io/pickadate.js
 * Licensed under MIT
 */e=function(t){var e=t(window),i=t(document),l=t(document.documentElement),n=null!=document.documentElement.style.transition;function o(e,l,c,d){if(!e)return o;var h=!1,p={id:e.id||"P"+Math.abs(~~(Math.random()*new Date)),handlingOpen:!1},f=c?t.extend(!0,{},c.defaults,d):d||{},m=t.extend({},o.klasses(),f.klass),v=t(e),g=2,y=function(){return this.start()},b=y.prototype={constructor:y,$node:v,start:function(){return p&&p.start?b:(p.methods={},p.start=!0,p.open=!1,p.type=e.type,e.autofocus=e==u(),e.readOnly=!f.editable,e.id=e.id||p.id,"text"!=e.type&&(e.type="text"),b.component=new c(b,f),b.$root=t('<div class="'+m.picker+'" id="'+e.id+'_root" />'),s(b.$root[0],"hidden",!0),b.$holder=t(x()).appendTo(b.$root),w(),f.formatSubmit&&(!0===f.hiddenName?(g=e.name,e.name=""):g=(g=["string"==typeof f.hiddenPrefix?f.hiddenPrefix:"","string"==typeof f.hiddenSuffix?f.hiddenSuffix:"_submit"])[0]+e.name+g[1],b._hidden=t('<input type=hidden name="'+g+'"'+(v.data("value")||e.value?' value="'+b.get("select",f.formatSubmit)+'"':"")+">")[0],v.on("change."+p.id,(function(){b._hidden.value=e.value?b.get("select",f.formatSubmit):""}))),v.data(l,b).addClass(m.input).val(v.data("value")?b.get("select",f.format):e.value).on("focus."+p.id+" click."+p.id,(o=function(t){t.preventDefault(),b.open()},a=100,function(){var t=this,e=arguments,i=function(){d=null,r||o.apply(t,e)},l=r&&!d;clearTimeout(d),d=setTimeout(i,a),l&&o.apply(t,e)})).on("mousedown",(function(){p.handlingOpen=!0,t(document).on("mouseup",(function e(){setTimeout((function(){t(document).off("mouseup",e),p.handlingOpen=!1}),0)}))})),f.editable||v.on("keydown."+p.id,S),s(e,{haspopup:!0,expanded:!1,readonly:!1,owns:e.id+"_root"}),f.containerHidden?t(f.containerHidden).append(b._hidden):v.after(b._hidden),f.container?t(f.container).append(b.$root):v.after(b.$root),b.on({start:b.component.onStart,render:b.component.onRender,stop:b.component.onStop,open:b.component.onOpen,close:b.component.onClose,set:b.component.onSet}).on({start:f.onStart,render:f.onRender,stop:f.onStop,open:f.onOpen,close:f.onClose,set:f.onSet}),(i=b.$holder[0]).currentStyle?n=i.currentStyle.position:window.getComputedStyle&&(n=getComputedStyle(i).position),h="fixed"==n,e.autofocus&&b.open(),b.trigger("start").trigger("render"));var i,n,o,a,r,d,g},render:function(e){return e?(b.$holder=t(x()),w(),b.$root.html(b.$holder)):b.$root.find("."+m.box).html(b.component.nodes(p.open)),b.trigger("render")},stop:function(){return p.start?(b.close(),b._hidden&&b._hidden.parentNode.removeChild(b._hidden),b.$root.remove(),v.removeClass(m.input).removeData(l),setTimeout((function(){v.off("."+p.id)}),0),e.type=p.type,e.readOnly=!1,b.trigger("stop"),p.methods={},p.start=!1,b):b},open:function(l){return g++,p.open?b:g<4&&f.editable?b:(setTimeout((function(){b.$root.addClass(m.opened),s(b.$root[0],"hidden",!1)}),0),!1!==l&&(p.open=!0,h&&t("body").css("overflow","hidden").css("padding-right","+="+a()),h&&n?b.$holder.find("."+m.frame).one("transitionend",(function(){b.$holder.eq(0).focus()})):setTimeout((function(){b.$holder.eq(0).focus()}),0),i.on("click."+p.id+" focusin."+p.id,(function(t){if(!p.handlingOpen){var i=r(t,e);t.isSimulated||i==e||i==document||3==t.which||b.close(i===b.$holder[0])}})).on("keydown."+p.id,(function(i){var l=i.keyCode,n=b.component.key[l],a=r(i,e);27==l?b.close(!0):a!=b.$holder[0]||!n&&13!=l?t.contains(b.$root[0],a)&&13==l&&(i.preventDefault(),a.click()):(i.preventDefault(),n?o._.trigger(b.component.key.go,b,[o._.trigger(n)]):b.$root.find("."+m.highlighted).hasClass(m.disabled)||(b.set("select",b.component.item.highlight),f.closeOnSelect&&b.close(!0)))}))),b.trigger("open"))},close:function(l){return g=0,p.open?(l&&(f.editable?e.click():(b.$holder.off("focus.toOpen").focus(),setTimeout((function(){b.$holder.on("focus.toOpen",k)}),0))),v.removeClass(m.active),s(e,"expanded",!1),setTimeout((function(){b.$root.removeClass(m.opened+" "+m.focused),s(b.$root[0],"hidden",!0)}),0),h&&t("body").css("overflow","").css("padding-right","-="+a()),document.activeElement.blur(),i.off("."+p.id),p.open=!1,b.trigger("close")):b},clear:function(t){return document.activeElement.blur(),b.set("clear",null,t)},set:function(e,i,l){var n,o,a=t.isPlainObject(e),r=a?e:{};if(l=a&&t.isPlainObject(i)?i:l||{},e){for(n in a||(r[e]=i),r)o=r[n],n in b.component.item&&(void 0===o&&(o=null),b.component.set(n,o,l)),"select"!=n&&"clear"!=n||!f.updateInput||v.val("clear"==n?"":b.get(n,f.format)).trigger("change");b.render()}return l.muted?b:b.trigger("set",r)},get:function(t,i){if(null!=p[t=t||"value"])return p[t];if("valueSubmit"==t){if(b._hidden)return b._hidden.value;t="value"}if("value"==t)return e.value;if(t in b.component.item){if("string"==typeof i){var l=b.component.get(t);return l?o._.trigger(b.component.formats.toString,b.component,[i,l]):""}return b.component.get(t)}},on:function(e,i,l){var n,o,a=t.isPlainObject(e),r=a?e:{};if(e)for(n in a||(r[e]=i),r)o=r[n],l&&(n="_"+n),p.methods[n]=p.methods[n]||[],p.methods[n].push(o);return b},off:function(){var t,e,i=arguments;for(t=0,namesCount=i.length;t<namesCount;t+=1)(e=i[t])in p.methods&&delete p.methods[e];return b},trigger:function(t,e){var i=function(t){var i=p.methods[t];i&&i.map((function(t){o._.trigger(t,b,[e])}))};return i("_"+t),i(t),b}};function x(){return o._.node("div",o._.node("div",o._.node("div",o._.node("div",b.component.nodes(p.open),m.box),m.wrap),m.frame),m.holder,'tabindex="-1"')}function w(){b.$holder.on({keydown:S,"focus.toOpen":k,blur:function(){v.removeClass(m.target)},focusin:function(t){b.$root.removeClass(m.focused),t.stopPropagation()},"mousedown click":function(i){var l=r(i,e);l!=b.$holder[0]&&(i.stopPropagation(),"mousedown"!=i.type||t(l).is("input, select, textarea, button, option")||(i.preventDefault(),b.$holder.eq(0).focus()))}}).on("click","[data-pick], [data-nav], [data-clear], [data-close]",(function(){var e=t(this),i=e.data(),l=e.hasClass(m.navDisabled)||e.hasClass(m.disabled),n=u();n=n&&(n.type||n.href?n:null),(l||n&&!t.contains(b.$root[0],n))&&b.$holder.eq(0).focus(),!l&&i.nav?b.set("highlight",b.component.item.highlight,{nav:i.nav}):!l&&"pick"in i?(b.set("select",i.pick),f.closeOnSelect&&b.close(!0)):i.clear?(b.clear(),f.closeOnClear&&b.close(!0)):i.close&&b.close(!0)}))}function k(t){t.stopPropagation(),v.addClass(m.target),b.$root.addClass(m.focused),b.open()}function S(t){var e=t.keyCode,i=/^(8|46)$/.test(e);if(27==e)return b.close(!0),!1;(32==e||i||!p.open&&b.component.key[e])&&(t.preventDefault(),t.stopPropagation(),i?b.clear().close():b.open())}return new y}function a(){if(l.height()<=e.height())return 0;var i=t('<div style="visibility:hidden;width:100px" />').appendTo("body"),n=i[0].offsetWidth;i.css("overflow","scroll");var o=t('<div style="width:100%" />').appendTo(i)[0].offsetWidth;return i.remove(),n-o}function r(t,e){var i=[];return t.path&&(i=t.path),t.originalEvent&&t.originalEvent.path&&(i=t.originalEvent.path),i&&i.length>0?e&&i.indexOf(e)>=0?e:i[0]:t.target}function s(e,i,l){if(t.isPlainObject(i))for(var n in i)c(e,n,i[n]);else c(e,i,l)}function c(t,e,i){t.setAttribute(("role"==e?"":"aria-")+e,i)}function u(){try{return document.activeElement}catch(t){}}return o.klasses=function(t){return{picker:t=t||"picker",opened:t+"--opened",focused:t+"--focused",input:t+"__input",active:t+"__input--active",target:t+"__input--target",holder:t+"__holder",frame:t+"__frame",wrap:t+"__wrap",box:t+"__box"}},o._={group:function(t){for(var e,i="",l=o._.trigger(t.min,t);l<=o._.trigger(t.max,t,[l]);l+=t.i)e=o._.trigger(t.item,t,[l]),i+=o._.node(t.node,e[0],e[1],e[2]);return i},node:function(e,i,l,n){return i?"<"+e+(l=l?' class="'+l+'"':"")+(n=n?" "+n:"")+">"+(i=t.isArray(i)?i.join(""):i)+"</"+e+">":""},lead:function(t){return(t<10?"0":"")+t},trigger:function(t,e,i){return"function"==typeof t?t.apply(e,i||[]):t},digits:function(t){return/\d/.test(t[1])?2:1},isDate:function(t){return{}.toString.call(t).indexOf("Date")>-1&&this.isInteger(t.getDate())},isInteger:function(t){return{}.toString.call(t).indexOf("Number")>-1&&t%1==0},ariaAttr:function(e,i){for(var l in t.isPlainObject(e)||(e={attribute:i}),i="",e){var n=("role"==l?"":"aria-")+l,o=e[l];i+=null==o?"":n+'="'+e[l]+'"'}return i}},o.extend=function(e,i){t.fn[e]=function(l,n){var a=this.data(e);return"picker"==l?a:a&&"string"==typeof l?o._.trigger(a[l],a,[n]):this.each((function(){t(this).data(e)||new o(this,e,i,l)}))},t.fn[e].defaults=i.defaults},o}, true&&i(80)?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_LOCAL_MODULE_0__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)):"object"==( false?undefined:l(exports))?t.exports=e(i(118)):window.Picker=e(jQuery)}.call(this,i(96)(t))},function(t,e,i){i(226),t.exports=i(291)},function(t,e,i){},function(t,e,i){"use strict";(function(t){var e,l;i(69),i(71),i(72),i(92),i(66),i(58),i(75),i(97),i(100),i(121),i(65),i(68),i(73),i(98),i(74);function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*!
 * bsCustomFileInput v1.3.2 (https://github.com/Johann-S/bs-custom-file-input)
 * Copyright 2018 - 2019 Johann-S <johann.servoire@gmail.com>
 * Licensed under MIT (https://github.com/Johann-S/bs-custom-file-input/blob/master/LICENSE)
 */e=void 0,l=function(){var t={CUSTOMFILE:'.custom-file input[type="file"]',CUSTOMFILELABEL:".custom-file-label",FORM:"form",INPUT:"input"},e=function(e){var i="",l=e.parentNode.querySelector(t.CUSTOMFILELABEL);return l&&(i=l.innerHTML),i},i=function(t){if(t.childNodes.length>0)for(var e=[].slice.call(t.childNodes),i=0;i<e.length;i++){var l=e[i];if(3!==l.nodeType)return l}return t},l=function(e){var l=e.bsCustomFileInput.defaultText,n=e.parentNode.querySelector(t.CUSTOMFILELABEL);n&&(i(n).innerHTML=l)},n=!!window.File,o=function(t){if(t.hasAttribute("multiple")&&n)return[].slice.call(t.files).map((function(t){return t.name})).join(", ");if(-1!==t.value.indexOf("fakepath")){var e=t.value.split("\\");return e[e.length-1]}return t.value};function a(){var e=this.parentNode.querySelector(t.CUSTOMFILELABEL);if(e){var n=i(e),a=o(this);a.length?n.innerHTML=a:l(this)}}function r(){for(var e=[].slice.call(this.querySelectorAll(t.INPUT)).filter((function(t){return!!t.bsCustomFileInput})),i=0,n=e.length;i<n;i++)l(e[i])}var s="reset",c="change";return{init:function(i,l){void 0===i&&(i=t.CUSTOMFILE),void 0===l&&(l=t.FORM);for(var n=[].slice.call(document.querySelectorAll(i)),o=[].slice.call(document.querySelectorAll(l)),u=0,d=n.length;u<d;u++){var h=n[u];Object.defineProperty(h,"bsCustomFileInput",{value:{defaultText:e(h)},writable:!0}),a.call(h),h.addEventListener(c,a)}for(var p=0,f=o.length;p<f;p++)o[p].addEventListener(s,r),Object.defineProperty(o[p],"bsCustomFileInput",{value:!0,writable:!0})},destroy:function(){for(var e=[].slice.call(document.querySelectorAll(t.FORM)).filter((function(t){return!!t.bsCustomFileInput})),i=[].slice.call(document.querySelectorAll(t.INPUT)).filter((function(t){return!!t.bsCustomFileInput})),n=0,o=i.length;n<o;n++){var u=i[n];l(u),u.bsCustomFileInput=void 0,u.removeEventListener(c,a)}for(var d=0,h=e.length;d<h;d++)e[d].removeEventListener(s,r),e[d].bsCustomFileInput=void 0}}},"object"===( false?undefined:n(exports))&&void 0!==t?t.exports=l(): true&&i(80)?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (l),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):(e=e||self).bsCustomFileInput=l(),document.addEventListener("DOMContentLoaded",(function(){bsCustomFileInput.init()}))}).call(this,i(96)(t))},function(t,e,i){"use strict";(function(t,e){var l;i(69),i(71),i(72),i(76),i(169),i(92),i(229),i(103),i(66),i(58),i(75),i(97),i(167),i(136),i(100),i(131),i(110),i(84),i(230),i(231),i(111),i(233),i(219),i(220),i(137),i(112),i(65),i(115),i(123),i(68),i(95),i(73),i(116),i(98),i(104),i(74);function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.7.3
 *
 * Copyright 2018 Chart.js Contributors
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */!function(l){if("object"===( false?undefined:n(exports))&&void 0!==t)t.exports=l();else if( true&&i(80))!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (l),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else{("undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:this).Chart=l()}}((function(){return function t(e,i,n){function o(r,s){if(!i[r]){if(!e[r]){if(!s&&"function"==typeof l&&l)return l(r,!0);if(a)return a(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var u=i[r]={exports:{}};e[r][0].call(u.exports,(function(t){return o(e[r][1][t]||t)}),u,u.exports,t,e,i,n)}return i[r].exports}for(var a="function"==typeof l&&l,r=0;r<n.length;r++)o(n[r]);return o}({1:[function(t,e,i){},{}],2:[function(t,e,i){var l=t(6);function n(t){if(t){var e=[0,0,0],i=1,n=t.match(/^#([a-fA-F0-9]{3})$/i);if(n){n=n[1];for(var o=0;o<e.length;o++)e[o]=parseInt(n[o]+n[o],16)}else if(n=t.match(/^#([a-fA-F0-9]{6})$/i)){n=n[1];for(o=0;o<e.length;o++)e[o]=parseInt(n.slice(2*o,2*o+2),16)}else if(n=t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(o=0;o<e.length;o++)e[o]=parseInt(n[o+1]);i=parseFloat(n[4])}else if(n=t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(o=0;o<e.length;o++)e[o]=Math.round(2.55*parseFloat(n[o+1]));i=parseFloat(n[4])}else if(n=t.match(/(\w+)/)){if("transparent"==n[1])return[0,0,0,0];if(!(e=l[n[1]]))return}for(o=0;o<e.length;o++)e[o]=u(e[o],0,255);return i=i||0==i?u(i,0,1):1,e[3]=i,e}}function o(t){if(t){var e=t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var i=parseFloat(e[4]);return[u(parseInt(e[1]),0,360),u(parseFloat(e[2]),0,100),u(parseFloat(e[3]),0,100),u(isNaN(i)?1:i,0,1)]}}}function a(t){if(t){var e=t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var i=parseFloat(e[4]);return[u(parseInt(e[1]),0,360),u(parseFloat(e[2]),0,100),u(parseFloat(e[3]),0,100),u(isNaN(i)?1:i,0,1)]}}}function r(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function s(t,e){return"rgba("+Math.round(t[0]/255*100)+"%, "+Math.round(t[1]/255*100)+"%, "+Math.round(t[2]/255*100)+"%, "+(e||t[3]||1)+")"}function c(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+e+")"}function u(t,e,i){return Math.min(Math.max(e,t),i)}function d(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}e.exports={getRgba:n,getHsla:o,getRgb:function(t){var e=n(t);return e&&e.slice(0,3)},getHsl:function(t){var e=o(t);return e&&e.slice(0,3)},getHwb:a,getAlpha:function(t){var e=n(t);if(e)return e[3];if(e=o(t))return e[3];if(e=a(t))return e[3]},hexString:function(t){return"#"+d(t[0])+d(t[1])+d(t[2])},rgbString:function(t,e){if(e<1||t[3]&&t[3]<1)return r(t,e);return"rgb("+t[0]+", "+t[1]+", "+t[2]+")"},rgbaString:r,percentString:function(t,e){if(e<1||t[3]&&t[3]<1)return s(t,e);var i=Math.round(t[0]/255*100),l=Math.round(t[1]/255*100),n=Math.round(t[2]/255*100);return"rgb("+i+"%, "+l+"%, "+n+"%)"},percentaString:s,hslString:function(t,e){if(e<1||t[3]&&t[3]<1)return c(t,e);return"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"},hslaString:c,hwbString:function(t,e){void 0===e&&(e=void 0!==t[3]?t[3]:1);return"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+(void 0!==e&&1!==e?", "+e:"")+")"},keyword:function(t){return h[t.slice(0,3)]}};var h={};for(var p in l)h[l[p]]=p},{6:6}],3:[function(t,e,i){var l=t(5),o=t(2),a=function t(e){return e instanceof t?e:this instanceof t?(this.valid=!1,this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1},void("string"==typeof e?(i=o.getRgba(e))?this.setValues("rgb",i):(i=o.getHsla(e))?this.setValues("hsl",i):(i=o.getHwb(e))&&this.setValues("hwb",i):"object"===n(e)&&(void 0!==(i=e).r||void 0!==i.red?this.setValues("rgb",i):void 0!==i.l||void 0!==i.lightness?this.setValues("hsl",i):void 0!==i.v||void 0!==i.value?this.setValues("hsv",i):void 0!==i.w||void 0!==i.whiteness?this.setValues("hwb",i):void 0===i.c&&void 0===i.cyan||this.setValues("cmyk",i)))):new t(e);var i};(a.prototype={isValid:function(){return this.valid},rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var t=this.values;return 1!==t.alpha?t.hwb.concat([t.alpha]):t.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var t=this.values;return t.rgb.concat([t.alpha])},hslaArray:function(){var t=this.values;return t.hsl.concat([t.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return t&&(t=(t%=360)<0?360+t:t),this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return o.hexString(this.values.rgb)},rgbString:function(){return o.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return o.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return o.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return o.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return o.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return o.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return o.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var t=this.values.rgb;return t[0]<<16|t[1]<<8|t[2]},luminosity:function(){for(var t=this.values.rgb,e=[],i=0;i<t.length;i++){var l=t[i]/255;e[i]=l<=.03928?l/12.92:Math.pow((l+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),i=t.luminosity();return e>i?(e+.05)/(i+.05):(i+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return e>=7.1?"AAA":e>=4.5?"AA":""},dark:function(){var t=this.values.rgb;return(299*t[0]+587*t[1]+114*t[2])/1e3<128},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;e<3;e++)t[e]=255-this.values.rgb[e];return this.setValues("rgb",t),this},lighten:function(t){var e=this.values.hsl;return e[2]+=e[2]*t,this.setValues("hsl",e),this},darken:function(t){var e=this.values.hsl;return e[2]-=e[2]*t,this.setValues("hsl",e),this},saturate:function(t){var e=this.values.hsl;return e[1]+=e[1]*t,this.setValues("hsl",e),this},desaturate:function(t){var e=this.values.hsl;return e[1]-=e[1]*t,this.setValues("hsl",e),this},whiten:function(t){var e=this.values.hwb;return e[1]+=e[1]*t,this.setValues("hwb",e),this},blacken:function(t){var e=this.values.hwb;return e[2]+=e[2]*t,this.setValues("hwb",e),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2];return this.setValues("rgb",[e,e,e]),this},clearer:function(t){var e=this.values.alpha;return this.setValues("alpha",e-e*t),this},opaquer:function(t){var e=this.values.alpha;return this.setValues("alpha",e+e*t),this},rotate:function(t){var e=this.values.hsl,i=(e[0]+t)%360;return e[0]=i<0?360+i:i,this.setValues("hsl",e),this},mix:function(t,e){var i=t,l=void 0===e?.5:e,n=2*l-1,o=this.alpha()-i.alpha(),a=((n*o==-1?n:(n+o)/(1+n*o))+1)/2,r=1-a;return this.rgb(a*this.red()+r*i.red(),a*this.green()+r*i.green(),a*this.blue()+r*i.blue()).alpha(this.alpha()*l+i.alpha()*(1-l))},toJSON:function(){return this.rgb()},clone:function(){var t,e,i=new a,l=this.values,n=i.values;for(var o in l)l.hasOwnProperty(o)&&(t=l[o],"[object Array]"===(e={}.toString.call(t))?n[o]=t.slice(0):"[object Number]"===e?n[o]=t:console.error("unexpected color value:",t));return i}}).spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},a.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},a.prototype.getValues=function(t){for(var e=this.values,i={},l=0;l<t.length;l++)i[t.charAt(l)]=e[t][l];return 1!==e.alpha&&(i.a=e.alpha),i},a.prototype.setValues=function(t,e){var i,n,o=this.values,a=this.spaces,r=this.maxes,s=1;if(this.valid=!0,"alpha"===t)s=e;else if(e.length)o[t]=e.slice(0,t.length),s=e[t.length];else if(void 0!==e[t.charAt(0)]){for(i=0;i<t.length;i++)o[t][i]=e[t.charAt(i)];s=e.a}else if(void 0!==e[a[t][0]]){var c=a[t];for(i=0;i<t.length;i++)o[t][i]=e[c[i]];s=e.alpha}if(o.alpha=Math.max(0,Math.min(1,void 0===s?o.alpha:s)),"alpha"===t)return!1;for(i=0;i<t.length;i++)n=Math.max(0,Math.min(r[t][i],o[t][i])),o[t][i]=Math.round(n);for(var u in a)u!==t&&(o[u]=l[t][u](o[t]));return!0},a.prototype.setSpace=function(t,e){var i=e[0];return void 0===i?this.getValues(t):("number"==typeof i&&(i=Array.prototype.slice.call(e)),this.setValues(t,i),this)},a.prototype.setChannel=function(t,e,i){var l=this.values[t];return void 0===i?l[e]:i===l[e]?this:(l[e]=i,this.setValues(t,l),this)},"undefined"!=typeof window&&(window.Color=a),e.exports=a},{2:2,5:5}],4:[function(t,e,i){function l(t){var e,i,l=t[0]/255,n=t[1]/255,o=t[2]/255,a=Math.min(l,n,o),r=Math.max(l,n,o),s=r-a;return r==a?e=0:l==r?e=(n-o)/s:n==r?e=2+(o-l)/s:o==r&&(e=4+(l-n)/s),(e=Math.min(60*e,360))<0&&(e+=360),i=(a+r)/2,[e,100*(r==a?0:i<=.5?s/(r+a):s/(2-r-a)),100*i]}function n(t){var e,i,l=t[0],n=t[1],o=t[2],a=Math.min(l,n,o),r=Math.max(l,n,o),s=r-a;return i=0==r?0:s/r*1e3/10,r==a?e=0:l==r?e=(n-o)/s:n==r?e=2+(o-l)/s:o==r&&(e=4+(l-n)/s),(e=Math.min(60*e,360))<0&&(e+=360),[e,i,r/255*1e3/10]}function o(t){var e=t[0],i=t[1],n=t[2];return[l(t)[0],100*(1/255*Math.min(e,Math.min(i,n))),100*(n=1-1/255*Math.max(e,Math.max(i,n)))]}function a(t){var e,i=t[0]/255,l=t[1]/255,n=t[2]/255;return[100*((1-i-(e=Math.min(1-i,1-l,1-n)))/(1-e)||0),100*((1-l-e)/(1-e)||0),100*((1-n-e)/(1-e)||0),100*e]}function s(t){return C[JSON.stringify(t)]}function c(t){var e=t[0]/255,i=t[1]/255,l=t[2]/255;return[100*(.4124*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.3576*(i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92)+.1805*(l=l>.04045?Math.pow((l+.055)/1.055,2.4):l/12.92)),100*(.2126*e+.7152*i+.0722*l),100*(.0193*e+.1192*i+.9505*l)]}function u(t){var e=c(t),i=e[0],l=e[1],n=e[2];return l/=100,n/=108.883,i=(i/=95.047)>.008856?Math.pow(i,1/3):7.787*i+16/116,[116*(l=l>.008856?Math.pow(l,1/3):7.787*l+16/116)-16,500*(i-l),200*(l-(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116))]}function d(t){var e,i,l,n,o,a=t[0]/360,r=t[1]/100,s=t[2]/100;if(0==r)return[o=255*s,o,o];e=2*s-(i=s<.5?s*(1+r):s+r-s*r),n=[0,0,0];for(var c=0;c<3;c++)(l=a+1/3*-(c-1))<0&&l++,l>1&&l--,o=6*l<1?e+6*(i-e)*l:2*l<1?i:3*l<2?e+(i-e)*(2/3-l)*6:e,n[c]=255*o;return n}function h(t){var e=t[0]/60,i=t[1]/100,l=t[2]/100,n=Math.floor(e)%6,o=e-Math.floor(e),a=255*l*(1-i),r=255*l*(1-i*o),s=255*l*(1-i*(1-o));l*=255;switch(n){case 0:return[l,s,a];case 1:return[r,l,a];case 2:return[a,l,s];case 3:return[a,r,l];case 4:return[s,a,l];case 5:return[l,a,r]}}function p(t){var e,i,l,n,o=t[0]/360,a=t[1]/100,s=t[2]/100,c=a+s;switch(c>1&&(a/=c,s/=c),l=6*o-(e=Math.floor(6*o)),0!=(1&e)&&(l=1-l),n=a+l*((i=1-s)-a),e){default:case 6:case 0:r=i,g=n,b=a;break;case 1:r=n,g=i,b=a;break;case 2:r=a,g=i,b=n;break;case 3:r=a,g=n,b=i;break;case 4:r=n,g=a,b=i;break;case 5:r=i,g=a,b=n}return[255*r,255*g,255*b]}function f(t){var e=t[0]/100,i=t[1]/100,l=t[2]/100,n=t[3]/100;return[255*(1-Math.min(1,e*(1-n)+n)),255*(1-Math.min(1,i*(1-n)+n)),255*(1-Math.min(1,l*(1-n)+n))]}function m(t){var e,i,l,n=t[0]/100,o=t[1]/100,a=t[2]/100;return i=-.9689*n+1.8758*o+.0415*a,l=.0557*n+-.204*o+1.057*a,e=(e=3.2406*n+-1.5372*o+-.4986*a)>.0031308?1.055*Math.pow(e,1/2.4)-.055:e*=12.92,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i*=12.92,l=l>.0031308?1.055*Math.pow(l,1/2.4)-.055:l*=12.92,[255*(e=Math.min(Math.max(0,e),1)),255*(i=Math.min(Math.max(0,i),1)),255*(l=Math.min(Math.max(0,l),1))]}function v(t){var e=t[0],i=t[1],l=t[2];return i/=100,l/=108.883,e=(e/=95.047)>.008856?Math.pow(e,1/3):7.787*e+16/116,[116*(i=i>.008856?Math.pow(i,1/3):7.787*i+16/116)-16,500*(e-i),200*(i-(l=l>.008856?Math.pow(l,1/3):7.787*l+16/116))]}function y(t){var e,i,l,n,o=t[0],a=t[1],r=t[2];return o<=8?n=(i=100*o/903.3)/100*7.787+16/116:(i=100*Math.pow((o+16)/116,3),n=Math.pow(i/100,1/3)),[e=e/95.047<=.008856?e=95.047*(a/500+n-16/116)/7.787:95.047*Math.pow(a/500+n,3),i,l=l/108.883<=.008859?l=108.883*(n-r/200-16/116)/7.787:108.883*Math.pow(n-r/200,3)]}function x(t){var e,i=t[0],l=t[1],n=t[2];return(e=360*Math.atan2(n,l)/2/Math.PI)<0&&(e+=360),[i,Math.sqrt(l*l+n*n),e]}function w(t){return m(y(t))}function k(t){var e,i=t[0],l=t[1];return e=t[2]/360*2*Math.PI,[i,l*Math.cos(e),l*Math.sin(e)]}function S(t){return M[t]}e.exports={rgb2hsl:l,rgb2hsv:n,rgb2hwb:o,rgb2cmyk:a,rgb2keyword:s,rgb2xyz:c,rgb2lab:u,rgb2lch:function(t){return x(u(t))},hsl2rgb:d,hsl2hsv:function(t){var e=t[0],i=t[1]/100,l=t[2]/100;if(0===l)return[0,0,0];return[e,100*(2*(i*=(l*=2)<=1?l:2-l)/(l+i)),100*((l+i)/2)]},hsl2hwb:function(t){return o(d(t))},hsl2cmyk:function(t){return a(d(t))},hsl2keyword:function(t){return s(d(t))},hsv2rgb:h,hsv2hsl:function(t){var e,i,l=t[0],n=t[1]/100,o=t[2]/100;return e=n*o,[l,100*(e=(e/=(i=(2-n)*o)<=1?i:2-i)||0),100*(i/=2)]},hsv2hwb:function(t){return o(h(t))},hsv2cmyk:function(t){return a(h(t))},hsv2keyword:function(t){return s(h(t))},hwb2rgb:p,hwb2hsl:function(t){return l(p(t))},hwb2hsv:function(t){return n(p(t))},hwb2cmyk:function(t){return a(p(t))},hwb2keyword:function(t){return s(p(t))},cmyk2rgb:f,cmyk2hsl:function(t){return l(f(t))},cmyk2hsv:function(t){return n(f(t))},cmyk2hwb:function(t){return o(f(t))},cmyk2keyword:function(t){return s(f(t))},keyword2rgb:S,keyword2hsl:function(t){return l(S(t))},keyword2hsv:function(t){return n(S(t))},keyword2hwb:function(t){return o(S(t))},keyword2cmyk:function(t){return a(S(t))},keyword2lab:function(t){return u(S(t))},keyword2xyz:function(t){return c(S(t))},xyz2rgb:m,xyz2lab:v,xyz2lch:function(t){return x(v(t))},lab2xyz:y,lab2rgb:w,lab2lch:x,lch2lab:k,lch2xyz:function(t){return y(k(t))},lch2rgb:function(t){return w(k(t))}};var M={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},C={};for(var T in M)C[JSON.stringify(M[T])]=T},{}],5:[function(t,e,i){var l=t(4),n=function(){return new c};for(var o in l){n[o+"Raw"]=function(t){return function(e){return"number"==typeof e&&(e=Array.prototype.slice.call(arguments)),l[t](e)}}(o);var a=/(\w+)2(\w+)/.exec(o),r=a[1],s=a[2];(n[r]=n[r]||{})[s]=n[o]=function(t){return function(e){"number"==typeof e&&(e=Array.prototype.slice.call(arguments));var i=l[t](e);if("string"==typeof i||void 0===i)return i;for(var n=0;n<i.length;n++)i[n]=Math.round(i[n]);return i}}(o)}var c=function(){this.convs={}};c.prototype.routeSpace=function(t,e){var i=e[0];return void 0===i?this.getValues(t):("number"==typeof i&&(i=Array.prototype.slice.call(e)),this.setValues(t,i))},c.prototype.setValues=function(t,e){return this.space=t,this.convs={},this.convs[t]=e,this},c.prototype.getValues=function(t){var e=this.convs[t];if(!e){var i=this.space,l=this.convs[i];e=n[i][t](l),this.convs[t]=e}return e},["rgb","hsl","hsv","cmyk","keyword"].forEach((function(t){c.prototype[t]=function(e){return this.routeSpace(t,arguments)}})),e.exports=n},{4:4}],6:[function(t,e,i){e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},{}],7:[function(t,e,i){var l=t(30)();l.helpers=t(46),t(28)(l),l.Animation=t(22),l.animationService=t(23),l.defaults=t(26),l.Element=t(27),l.elements=t(41),l.Interaction=t(29),l.layouts=t(31),l.platform=t(49),l.plugins=t(32),l.Scale=t(33),l.scaleService=t(34),l.Ticks=t(35),l.Tooltip=t(36),t(24)(l),t(25)(l),t(56)(l),t(54)(l),t(55)(l),t(57)(l),t(58)(l),t(59)(l),t(15)(l),t(16)(l),t(17)(l),t(18)(l),t(19)(l),t(20)(l),t(21)(l),t(8)(l),t(9)(l),t(10)(l),t(11)(l),t(12)(l),t(13)(l),t(14)(l);var n=t(50);for(var o in n)n.hasOwnProperty(o)&&l.plugins.register(n[o]);l.platform.initialize(),e.exports=l,"undefined"!=typeof window&&(window.Chart=l),l.Legend=n.legend._element,l.Title=n.title._element,l.pluginService=l.plugins,l.PluginBase=l.Element.extend({}),l.canvasHelpers=l.helpers.canvas,l.layoutService=l.layouts},{10:10,11:11,12:12,13:13,14:14,15:15,16:16,17:17,18:18,19:19,20:20,21:21,22:22,23:23,24:24,25:25,26:26,27:27,28:28,29:29,30:30,31:31,32:32,33:33,34:34,35:35,36:36,41:41,46:46,49:49,50:50,54:54,55:55,56:56,57:57,58:58,59:59,8:8,9:9}],8:[function(t,e,i){e.exports=function(t){t.Bar=function(e,i){return i.type="bar",new t(e,i)}}},{}],9:[function(t,e,i){e.exports=function(t){t.Bubble=function(e,i){return i.type="bubble",new t(e,i)}}},{}],10:[function(t,e,i){e.exports=function(t){t.Doughnut=function(e,i){return i.type="doughnut",new t(e,i)}}},{}],11:[function(t,e,i){e.exports=function(t){t.Line=function(e,i){return i.type="line",new t(e,i)}}},{}],12:[function(t,e,i){e.exports=function(t){t.PolarArea=function(e,i){return i.type="polarArea",new t(e,i)}}},{}],13:[function(t,e,i){e.exports=function(t){t.Radar=function(e,i){return i.type="radar",new t(e,i)}}},{}],14:[function(t,e,i){e.exports=function(t){t.Scatter=function(e,i){return i.type="scatter",new t(e,i)}}},{}],15:[function(t,e,i){var l=t(26),n=t(41),o=t(46);l._set("bar",{hover:{mode:"label"},scales:{xAxes:[{type:"category",categoryPercentage:.8,barPercentage:.9,offset:!0,gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}}),l._set("horizontalBar",{hover:{mode:"index",axis:"y"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{position:"left",type:"category",categoryPercentage:.8,barPercentage:.9,offset:!0,gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{callbacks:{title:function(t,e){var i="";return t.length>0&&(t[0].yLabel?i=t[0].yLabel:e.labels.length>0&&t[0].index<e.labels.length&&(i=e.labels[t[0].index])),i},label:function(t,e){return(e.datasets[t.datasetIndex].label||"")+": "+t.xLabel}},mode:"index",axis:"y"}}),e.exports=function(t){t.controllers.bar=t.DatasetController.extend({dataElementType:n.Rectangle,initialize:function(){var e,i=this;t.DatasetController.prototype.initialize.apply(i,arguments),(e=i.getMeta()).stack=i.getDataset().stack,e.bar=!0},update:function(t){var e,i,l=this.getMeta().data;for(this._ruler=this.getRuler(),e=0,i=l.length;e<i;++e)this.updateElement(l[e],e,t)},updateElement:function(t,e,i){var l=this,n=l.chart,a=l.getMeta(),r=l.getDataset(),s=t.custom||{},c=n.options.elements.rectangle;t._xScale=l.getScaleForId(a.xAxisID),t._yScale=l.getScaleForId(a.yAxisID),t._datasetIndex=l.index,t._index=e,t._model={datasetLabel:r.label,label:n.data.labels[e],borderSkipped:s.borderSkipped?s.borderSkipped:c.borderSkipped,backgroundColor:s.backgroundColor?s.backgroundColor:o.valueAtIndexOrDefault(r.backgroundColor,e,c.backgroundColor),borderColor:s.borderColor?s.borderColor:o.valueAtIndexOrDefault(r.borderColor,e,c.borderColor),borderWidth:s.borderWidth?s.borderWidth:o.valueAtIndexOrDefault(r.borderWidth,e,c.borderWidth)},l.updateElementGeometry(t,e,i),t.pivot()},updateElementGeometry:function(t,e,i){var l=this,n=t._model,o=l.getValueScale(),a=o.getBasePixel(),r=o.isHorizontal(),s=l._ruler||l.getRuler(),c=l.calculateBarValuePixels(l.index,e),u=l.calculateBarIndexPixels(l.index,e,s);n.horizontal=r,n.base=i?a:c.base,n.x=r?i?a:c.head:u.center,n.y=r?u.center:i?a:c.head,n.height=r?u.size:void 0,n.width=r?void 0:u.size},getValueScaleId:function(){return this.getMeta().yAxisID},getIndexScaleId:function(){return this.getMeta().xAxisID},getValueScale:function(){return this.getScaleForId(this.getValueScaleId())},getIndexScale:function(){return this.getScaleForId(this.getIndexScaleId())},_getStacks:function(t){var e,i,l=this.chart,n=this.getIndexScale().options.stacked,o=void 0===t?l.data.datasets.length:t+1,a=[];for(e=0;e<o;++e)(i=l.getDatasetMeta(e)).bar&&l.isDatasetVisible(e)&&(!1===n||!0===n&&-1===a.indexOf(i.stack)||void 0===n&&(void 0===i.stack||-1===a.indexOf(i.stack)))&&a.push(i.stack);return a},getStackCount:function(){return this._getStacks().length},getStackIndex:function(t,e){var i=this._getStacks(t),l=void 0!==e?i.indexOf(e):-1;return-1===l?i.length-1:l},getRuler:function(){var t,e,i=this.getIndexScale(),l=this.getStackCount(),n=this.index,a=i.isHorizontal(),r=a?i.left:i.top,s=r+(a?i.width:i.height),c=[];for(t=0,e=this.getMeta().data.length;t<e;++t)c.push(i.getPixelForValue(null,t,n));return{min:o.isNullOrUndef(i.options.barThickness)?function(t,e){var i,l,n,o,a=t.isHorizontal()?t.width:t.height,r=t.getTicks();for(n=1,o=e.length;n<o;++n)a=Math.min(a,e[n]-e[n-1]);for(n=0,o=r.length;n<o;++n)l=t.getPixelForTick(n),a=n>0?Math.min(a,l-i):a,i=l;return a}(i,c):-1,pixels:c,start:r,end:s,stackCount:l,scale:i}},calculateBarValuePixels:function(t,e){var i,l,n,o,a,r,s=this.chart,c=this.getMeta(),u=this.getValueScale(),d=s.data.datasets,h=u.getRightValue(d[t].data[e]),p=u.options.stacked,f=c.stack,m=0;if(p||void 0===p&&void 0!==f)for(i=0;i<t;++i)(l=s.getDatasetMeta(i)).bar&&l.stack===f&&l.controller.getValueScaleId()===u.id&&s.isDatasetVisible(i)&&(n=u.getRightValue(d[i].data[e]),(h<0&&n<0||h>=0&&n>0)&&(m+=n));return o=u.getPixelForValue(m),{size:r=((a=u.getPixelForValue(m+h))-o)/2,base:o,head:a,center:a+r/2}},calculateBarIndexPixels:function(t,e,i){var l=i.scale.options,n="flex"===l.barThickness?function(t,e,i){var l,n=e.pixels,o=n[t],a=t>0?n[t-1]:null,r=t<n.length-1?n[t+1]:null,s=i.categoryPercentage;return null===a&&(a=o-(null===r?e.end-o:r-o)),null===r&&(r=o+o-a),l=o-(o-a)/2*s,{chunk:(r-a)/2*s/e.stackCount,ratio:i.barPercentage,start:l}}(e,i,l):function(t,e,i){var l,n,a=i.barThickness,r=e.stackCount,s=e.pixels[t];return o.isNullOrUndef(a)?(l=e.min*i.categoryPercentage,n=i.barPercentage):(l=a*r,n=1),{chunk:l/r,ratio:n,start:s-l/2}}(e,i,l),a=this.getStackIndex(t,this.getMeta().stack),r=n.start+n.chunk*a+n.chunk/2,s=Math.min(o.valueOrDefault(l.maxBarThickness,1/0),n.chunk*n.ratio);return{base:r-s/2,head:r+s/2,center:r,size:s}},draw:function(){var t=this.chart,e=this.getValueScale(),i=this.getMeta().data,l=this.getDataset(),n=i.length,a=0;for(o.canvas.clipArea(t.ctx,t.chartArea);a<n;++a)isNaN(e.getRightValue(l.data[a]))||i[a].draw();o.canvas.unclipArea(t.ctx)}}),t.controllers.horizontalBar=t.controllers.bar.extend({getValueScaleId:function(){return this.getMeta().xAxisID},getIndexScaleId:function(){return this.getMeta().yAxisID}})}},{26:26,41:41,46:46}],16:[function(t,e,i){var l=t(26),o=t(41),a=t(46);l._set("bubble",{hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(){return""},label:function(t,e){var i=e.datasets[t.datasetIndex].label||"",l=e.datasets[t.datasetIndex].data[t.index];return i+": ("+t.xLabel+", "+t.yLabel+", "+l.r+")"}}}}),e.exports=function(t){t.controllers.bubble=t.DatasetController.extend({dataElementType:o.Point,update:function(t){var e=this,i=e.getMeta().data;a.each(i,(function(i,l){e.updateElement(i,l,t)}))},updateElement:function(t,e,i){var l=this,o=l.getMeta(),a=t.custom||{},r=l.getScaleForId(o.xAxisID),s=l.getScaleForId(o.yAxisID),c=l._resolveElementOptions(t,e),u=l.getDataset().data[e],d=l.index,h=i?r.getPixelForDecimal(.5):r.getPixelForValue("object"===n(u)?u:NaN,e,d),p=i?s.getBasePixel():s.getPixelForValue(u,e,d);t._xScale=r,t._yScale=s,t._options=c,t._datasetIndex=d,t._index=e,t._model={backgroundColor:c.backgroundColor,borderColor:c.borderColor,borderWidth:c.borderWidth,hitRadius:c.hitRadius,pointStyle:c.pointStyle,rotation:c.rotation,radius:i?0:c.radius,skip:a.skip||isNaN(h)||isNaN(p),x:h,y:p},t.pivot()},setHoverStyle:function(t){var e=t._model,i=t._options;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth,radius:e.radius},e.backgroundColor=a.valueOrDefault(i.hoverBackgroundColor,a.getHoverColor(i.backgroundColor)),e.borderColor=a.valueOrDefault(i.hoverBorderColor,a.getHoverColor(i.borderColor)),e.borderWidth=a.valueOrDefault(i.hoverBorderWidth,i.borderWidth),e.radius=i.radius+i.hoverRadius},_resolveElementOptions:function(t,e){var i,l,n,o=this.chart,r=o.data.datasets[this.index],s=t.custom||{},c=o.options.elements.point,u=a.options.resolve,d=r.data[e],h={},p={chart:o,dataIndex:e,dataset:r,datasetIndex:this.index},f=["backgroundColor","borderColor","borderWidth","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth","hoverRadius","hitRadius","pointStyle","rotation"];for(i=0,l=f.length;i<l;++i)h[n=f[i]]=u([s[n],r[n],c[n]],p,e);return h.radius=u([s.radius,d?d.r:void 0,r.radius,c.radius],p,e),h}})}},{26:26,41:41,46:46}],17:[function(t,e,i){var l=t(26),n=t(41),o=t(46);l._set("doughnut",{animation:{animateRotate:!0,animateScale:!1},hover:{mode:"single"},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var i=t.data,l=i.datasets,n=i.labels;if(l.length)for(var o=0;o<l[0].data.length;++o)e.push('<li><span style="background-color:'+l[0].backgroundColor[o]+'"></span>'),n[o]&&e.push(n[o]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var e=t.data;return e.labels.length&&e.datasets.length?e.labels.map((function(i,l){var n=t.getDatasetMeta(0),a=e.datasets[0],r=n.data[l],s=r&&r.custom||{},c=o.valueAtIndexOrDefault,u=t.options.elements.arc;return{text:i,fillStyle:s.backgroundColor?s.backgroundColor:c(a.backgroundColor,l,u.backgroundColor),strokeStyle:s.borderColor?s.borderColor:c(a.borderColor,l,u.borderColor),lineWidth:s.borderWidth?s.borderWidth:c(a.borderWidth,l,u.borderWidth),hidden:isNaN(a.data[l])||n.data[l].hidden,index:l}})):[]}},onClick:function(t,e){var i,l,n,o=e.index,a=this.chart;for(i=0,l=(a.data.datasets||[]).length;i<l;++i)(n=a.getDatasetMeta(i)).data[o]&&(n.data[o].hidden=!n.data[o].hidden);a.update()}},cutoutPercentage:50,rotation:-.5*Math.PI,circumference:2*Math.PI,tooltips:{callbacks:{title:function(){return""},label:function(t,e){var i=e.labels[t.index],l=": "+e.datasets[t.datasetIndex].data[t.index];return o.isArray(i)?(i=i.slice())[0]+=l:i+=l,i}}}}),l._set("pie",o.clone(l.doughnut)),l._set("pie",{cutoutPercentage:0}),e.exports=function(t){t.controllers.doughnut=t.controllers.pie=t.DatasetController.extend({dataElementType:n.Arc,linkScales:o.noop,getRingIndex:function(t){for(var e=0,i=0;i<t;++i)this.chart.isDatasetVisible(i)&&++e;return e},update:function(t){var e=this,i=e.chart,l=i.chartArea,n=i.options,a=n.elements.arc,r=l.right-l.left-a.borderWidth,s=l.bottom-l.top-a.borderWidth,c=Math.min(r,s),u={x:0,y:0},d=e.getMeta(),h=n.cutoutPercentage,p=n.circumference;if(p<2*Math.PI){var f=n.rotation%(2*Math.PI),m=(f+=2*Math.PI*(f>=Math.PI?-1:f<-Math.PI?1:0))+p,v={x:Math.cos(f),y:Math.sin(f)},g={x:Math.cos(m),y:Math.sin(m)},y=f<=0&&m>=0||f<=2*Math.PI&&2*Math.PI<=m,b=f<=.5*Math.PI&&.5*Math.PI<=m||f<=2.5*Math.PI&&2.5*Math.PI<=m,x=f<=-Math.PI&&-Math.PI<=m||f<=Math.PI&&Math.PI<=m,w=f<=.5*-Math.PI&&.5*-Math.PI<=m||f<=1.5*Math.PI&&1.5*Math.PI<=m,k=h/100,S={x:x?-1:Math.min(v.x*(v.x<0?1:k),g.x*(g.x<0?1:k)),y:w?-1:Math.min(v.y*(v.y<0?1:k),g.y*(g.y<0?1:k))},M={x:y?1:Math.max(v.x*(v.x>0?1:k),g.x*(g.x>0?1:k)),y:b?1:Math.max(v.y*(v.y>0?1:k),g.y*(g.y>0?1:k))},C={width:.5*(M.x-S.x),height:.5*(M.y-S.y)};c=Math.min(r/C.width,s/C.height),u={x:-.5*(M.x+S.x),y:-.5*(M.y+S.y)}}i.borderWidth=e.getMaxBorderWidth(d.data),i.outerRadius=Math.max((c-i.borderWidth)/2,0),i.innerRadius=Math.max(h?i.outerRadius/100*h:0,0),i.radiusLength=(i.outerRadius-i.innerRadius)/i.getVisibleDatasetCount(),i.offsetX=u.x*i.outerRadius,i.offsetY=u.y*i.outerRadius,d.total=e.calculateTotal(),e.outerRadius=i.outerRadius-i.radiusLength*e.getRingIndex(e.index),e.innerRadius=Math.max(e.outerRadius-i.radiusLength,0),o.each(d.data,(function(i,l){e.updateElement(i,l,t)}))},updateElement:function(t,e,i){var l=this,n=l.chart,a=n.chartArea,r=n.options,s=r.animation,c=(a.left+a.right)/2,u=(a.top+a.bottom)/2,d=r.rotation,h=r.rotation,p=l.getDataset(),f=i&&s.animateRotate?0:t.hidden?0:l.calculateCircumference(p.data[e])*(r.circumference/(2*Math.PI)),m=i&&s.animateScale?0:l.innerRadius,v=i&&s.animateScale?0:l.outerRadius,g=o.valueAtIndexOrDefault;o.extend(t,{_datasetIndex:l.index,_index:e,_model:{x:c+n.offsetX,y:u+n.offsetY,startAngle:d,endAngle:h,circumference:f,outerRadius:v,innerRadius:m,label:g(p.label,e,n.data.labels[e])}});var y=t._model,b=t.custom||{},x=o.valueAtIndexOrDefault,w=this.chart.options.elements.arc;y.backgroundColor=b.backgroundColor?b.backgroundColor:x(p.backgroundColor,e,w.backgroundColor),y.borderColor=b.borderColor?b.borderColor:x(p.borderColor,e,w.borderColor),y.borderWidth=b.borderWidth?b.borderWidth:x(p.borderWidth,e,w.borderWidth),i&&s.animateRotate||(y.startAngle=0===e?r.rotation:l.getMeta().data[e-1]._model.endAngle,y.endAngle=y.startAngle+y.circumference),t.pivot()},calculateTotal:function(){var t,e=this.getDataset(),i=this.getMeta(),l=0;return o.each(i.data,(function(i,n){t=e.data[n],isNaN(t)||i.hidden||(l+=Math.abs(t))})),l},calculateCircumference:function(t){var e=this.getMeta().total;return e>0&&!isNaN(t)?2*Math.PI*(Math.abs(t)/e):0},getMaxBorderWidth:function(t){for(var e,i,l=0,n=this.index,o=t.length,a=0;a<o;a++)e=t[a]._model?t[a]._model.borderWidth:0,l=(i=t[a]._chart?t[a]._chart.config.data.datasets[n].hoverBorderWidth:0)>(l=e>l?e:l)?i:l;return l}})}},{26:26,41:41,46:46}],18:[function(t,e,i){var l=t(26),o=t(41),a=t(46);l._set("line",{showLines:!0,spanGaps:!1,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}}),e.exports=function(t){function e(t,e){return a.valueOrDefault(t.showLine,e.showLines)}t.controllers.line=t.DatasetController.extend({datasetElementType:o.Line,dataElementType:o.Point,update:function(t){var i,l,n,o=this,r=o.getMeta(),s=r.dataset,c=r.data||[],u=o.chart.options,d=u.elements.line,h=o.getScaleForId(r.yAxisID),p=o.getDataset(),f=e(p,u);for(f&&(n=s.custom||{},void 0!==p.tension&&void 0===p.lineTension&&(p.lineTension=p.tension),s._scale=h,s._datasetIndex=o.index,s._children=c,s._model={spanGaps:p.spanGaps?p.spanGaps:u.spanGaps,tension:n.tension?n.tension:a.valueOrDefault(p.lineTension,d.tension),backgroundColor:n.backgroundColor?n.backgroundColor:p.backgroundColor||d.backgroundColor,borderWidth:n.borderWidth?n.borderWidth:p.borderWidth||d.borderWidth,borderColor:n.borderColor?n.borderColor:p.borderColor||d.borderColor,borderCapStyle:n.borderCapStyle?n.borderCapStyle:p.borderCapStyle||d.borderCapStyle,borderDash:n.borderDash?n.borderDash:p.borderDash||d.borderDash,borderDashOffset:n.borderDashOffset?n.borderDashOffset:p.borderDashOffset||d.borderDashOffset,borderJoinStyle:n.borderJoinStyle?n.borderJoinStyle:p.borderJoinStyle||d.borderJoinStyle,fill:n.fill?n.fill:void 0!==p.fill?p.fill:d.fill,steppedLine:n.steppedLine?n.steppedLine:a.valueOrDefault(p.steppedLine,d.stepped),cubicInterpolationMode:n.cubicInterpolationMode?n.cubicInterpolationMode:a.valueOrDefault(p.cubicInterpolationMode,d.cubicInterpolationMode)},s.pivot()),i=0,l=c.length;i<l;++i)o.updateElement(c[i],i,t);for(f&&0!==s._model.tension&&o.updateBezierControlPoints(),i=0,l=c.length;i<l;++i)c[i].pivot()},getPointBackgroundColor:function(t,e){var i=this.chart.options.elements.point.backgroundColor,l=this.getDataset(),n=t.custom||{};return n.backgroundColor?i=n.backgroundColor:l.pointBackgroundColor?i=a.valueAtIndexOrDefault(l.pointBackgroundColor,e,i):l.backgroundColor&&(i=l.backgroundColor),i},getPointBorderColor:function(t,e){var i=this.chart.options.elements.point.borderColor,l=this.getDataset(),n=t.custom||{};return n.borderColor?i=n.borderColor:l.pointBorderColor?i=a.valueAtIndexOrDefault(l.pointBorderColor,e,i):l.borderColor&&(i=l.borderColor),i},getPointBorderWidth:function(t,e){var i=this.chart.options.elements.point.borderWidth,l=this.getDataset(),n=t.custom||{};return isNaN(n.borderWidth)?!isNaN(l.pointBorderWidth)||a.isArray(l.pointBorderWidth)?i=a.valueAtIndexOrDefault(l.pointBorderWidth,e,i):isNaN(l.borderWidth)||(i=l.borderWidth):i=n.borderWidth,i},getPointRotation:function(t,e){var i=this.chart.options.elements.point.rotation,l=this.getDataset(),n=t.custom||{};return isNaN(n.rotation)?isNaN(l.pointRotation)&&!a.isArray(l.pointRotation)||(i=a.valueAtIndexOrDefault(l.pointRotation,e,i)):i=n.rotation,i},updateElement:function(t,e,i){var l,o,r=this,s=r.getMeta(),c=t.custom||{},u=r.getDataset(),d=r.index,h=u.data[e],p=r.getScaleForId(s.yAxisID),f=r.getScaleForId(s.xAxisID),m=r.chart.options.elements.point;void 0!==u.radius&&void 0===u.pointRadius&&(u.pointRadius=u.radius),void 0!==u.hitRadius&&void 0===u.pointHitRadius&&(u.pointHitRadius=u.hitRadius),l=f.getPixelForValue("object"===n(h)?h:NaN,e,d),o=i?p.getBasePixel():r.calculatePointY(h,e,d),t._xScale=f,t._yScale=p,t._datasetIndex=d,t._index=e,t._model={x:l,y:o,skip:c.skip||isNaN(l)||isNaN(o),radius:c.radius||a.valueAtIndexOrDefault(u.pointRadius,e,m.radius),pointStyle:c.pointStyle||a.valueAtIndexOrDefault(u.pointStyle,e,m.pointStyle),rotation:r.getPointRotation(t,e),backgroundColor:r.getPointBackgroundColor(t,e),borderColor:r.getPointBorderColor(t,e),borderWidth:r.getPointBorderWidth(t,e),tension:s.dataset._model?s.dataset._model.tension:0,steppedLine:!!s.dataset._model&&s.dataset._model.steppedLine,hitRadius:c.hitRadius||a.valueAtIndexOrDefault(u.pointHitRadius,e,m.hitRadius)}},calculatePointY:function(t,e,i){var l,n,o,a=this.chart,r=this.getMeta(),s=this.getScaleForId(r.yAxisID),c=0,u=0;if(s.options.stacked){for(l=0;l<i;l++)if(n=a.data.datasets[l],"line"===(o=a.getDatasetMeta(l)).type&&o.yAxisID===s.id&&a.isDatasetVisible(l)){var d=Number(s.getRightValue(n.data[e]));d<0?u+=d||0:c+=d||0}var h=Number(s.getRightValue(t));return h<0?s.getPixelForValue(u+h):s.getPixelForValue(c+h)}return s.getPixelForValue(t)},updateBezierControlPoints:function(){var t,e,i,l,n=this.getMeta(),o=this.chart.chartArea,r=n.data||[];function s(t,e,i){return Math.max(Math.min(t,i),e)}if(n.dataset._model.spanGaps&&(r=r.filter((function(t){return!t._model.skip}))),"monotone"===n.dataset._model.cubicInterpolationMode)a.splineCurveMonotone(r);else for(t=0,e=r.length;t<e;++t)i=r[t]._model,l=a.splineCurve(a.previousItem(r,t)._model,i,a.nextItem(r,t)._model,n.dataset._model.tension),i.controlPointPreviousX=l.previous.x,i.controlPointPreviousY=l.previous.y,i.controlPointNextX=l.next.x,i.controlPointNextY=l.next.y;if(this.chart.options.elements.line.capBezierPoints)for(t=0,e=r.length;t<e;++t)(i=r[t]._model).controlPointPreviousX=s(i.controlPointPreviousX,o.left,o.right),i.controlPointPreviousY=s(i.controlPointPreviousY,o.top,o.bottom),i.controlPointNextX=s(i.controlPointNextX,o.left,o.right),i.controlPointNextY=s(i.controlPointNextY,o.top,o.bottom)},draw:function(){var t,i=this.chart,l=this.getMeta(),n=l.data||[],o=i.chartArea,r=n.length,s=0;for(e(this.getDataset(),i.options)&&(t=(l.dataset._model.borderWidth||0)/2,a.canvas.clipArea(i.ctx,{left:o.left,right:o.right,top:o.top-t,bottom:o.bottom+t}),l.dataset.draw(),a.canvas.unclipArea(i.ctx));s<r;++s)n[s].draw(o)},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t._index,l=t.custom||{},n=t._model;t.$previousStyle={backgroundColor:n.backgroundColor,borderColor:n.borderColor,borderWidth:n.borderWidth,radius:n.radius},n.backgroundColor=l.hoverBackgroundColor||a.valueAtIndexOrDefault(e.pointHoverBackgroundColor,i,a.getHoverColor(n.backgroundColor)),n.borderColor=l.hoverBorderColor||a.valueAtIndexOrDefault(e.pointHoverBorderColor,i,a.getHoverColor(n.borderColor)),n.borderWidth=l.hoverBorderWidth||a.valueAtIndexOrDefault(e.pointHoverBorderWidth,i,n.borderWidth),n.radius=l.hoverRadius||a.valueAtIndexOrDefault(e.pointHoverRadius,i,this.chart.options.elements.point.hoverRadius)}})}},{26:26,41:41,46:46}],19:[function(t,e,i){var l=t(26),n=t(41),o=t(46);l._set("polarArea",{scale:{type:"radialLinear",angleLines:{display:!1},gridLines:{circular:!0},pointLabels:{display:!1},ticks:{beginAtZero:!0}},animation:{animateRotate:!0,animateScale:!0},startAngle:-.5*Math.PI,legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var i=t.data,l=i.datasets,n=i.labels;if(l.length)for(var o=0;o<l[0].data.length;++o)e.push('<li><span style="background-color:'+l[0].backgroundColor[o]+'"></span>'),n[o]&&e.push(n[o]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var e=t.data;return e.labels.length&&e.datasets.length?e.labels.map((function(i,l){var n=t.getDatasetMeta(0),a=e.datasets[0],r=n.data[l].custom||{},s=o.valueAtIndexOrDefault,c=t.options.elements.arc;return{text:i,fillStyle:r.backgroundColor?r.backgroundColor:s(a.backgroundColor,l,c.backgroundColor),strokeStyle:r.borderColor?r.borderColor:s(a.borderColor,l,c.borderColor),lineWidth:r.borderWidth?r.borderWidth:s(a.borderWidth,l,c.borderWidth),hidden:isNaN(a.data[l])||n.data[l].hidden,index:l}})):[]}},onClick:function(t,e){var i,l,n,o=e.index,a=this.chart;for(i=0,l=(a.data.datasets||[]).length;i<l;++i)(n=a.getDatasetMeta(i)).data[o].hidden=!n.data[o].hidden;a.update()}},tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+t.yLabel}}}}),e.exports=function(t){t.controllers.polarArea=t.DatasetController.extend({dataElementType:n.Arc,linkScales:o.noop,update:function(t){var e,i,l,n=this,a=n.getDataset(),r=n.getMeta(),s=n.chart.options.startAngle||0,c=n._starts=[],u=n._angles=[];for(n._updateRadius(),r.count=n.countVisibleElements(),e=0,i=a.data.length;e<i;e++)c[e]=s,l=n._computeAngle(e),u[e]=l,s+=l;o.each(r.data,(function(e,i){n.updateElement(e,i,t)}))},_updateRadius:function(){var t=this,e=t.chart,i=e.chartArea,l=e.options,n=l.elements.arc,o=Math.min(i.right-i.left,i.bottom-i.top);e.outerRadius=Math.max((o-n.borderWidth/2)/2,0),e.innerRadius=Math.max(l.cutoutPercentage?e.outerRadius/100*l.cutoutPercentage:1,0),e.radiusLength=(e.outerRadius-e.innerRadius)/e.getVisibleDatasetCount(),t.outerRadius=e.outerRadius-e.radiusLength*t.index,t.innerRadius=t.outerRadius-e.radiusLength},updateElement:function(t,e,i){var l=this,n=l.chart,a=l.getDataset(),r=n.options,s=r.animation,c=n.scale,u=n.data.labels,d=c.xCenter,h=c.yCenter,p=r.startAngle,f=t.hidden?0:c.getDistanceFromCenterForValue(a.data[e]),m=l._starts[e],v=m+(t.hidden?0:l._angles[e]),g=s.animateScale?0:c.getDistanceFromCenterForValue(a.data[e]);o.extend(t,{_datasetIndex:l.index,_index:e,_scale:c,_model:{x:d,y:h,innerRadius:0,outerRadius:i?g:f,startAngle:i&&s.animateRotate?p:m,endAngle:i&&s.animateRotate?p:v,label:o.valueAtIndexOrDefault(u,e,u[e])}});var y=this.chart.options.elements.arc,b=t.custom||{},x=o.valueAtIndexOrDefault,w=t._model;w.backgroundColor=b.backgroundColor?b.backgroundColor:x(a.backgroundColor,e,y.backgroundColor),w.borderColor=b.borderColor?b.borderColor:x(a.borderColor,e,y.borderColor),w.borderWidth=b.borderWidth?b.borderWidth:x(a.borderWidth,e,y.borderWidth),t.pivot()},countVisibleElements:function(){var t=this.getDataset(),e=this.getMeta(),i=0;return o.each(e.data,(function(e,l){isNaN(t.data[l])||e.hidden||i++})),i},_computeAngle:function(t){var e=this,i=this.getMeta().count,l=e.getDataset(),n=e.getMeta();if(isNaN(l.data[t])||n.data[t].hidden)return 0;var a={chart:e.chart,dataIndex:t,dataset:l,datasetIndex:e.index};return o.options.resolve([e.chart.options.elements.arc.angle,2*Math.PI/i],a,t)}})}},{26:26,41:41,46:46}],20:[function(t,e,i){var l=t(26),n=t(41),o=t(46);l._set("radar",{scale:{type:"radialLinear"},elements:{line:{tension:0}}}),e.exports=function(t){t.controllers.radar=t.DatasetController.extend({datasetElementType:n.Line,dataElementType:n.Point,linkScales:o.noop,update:function(t){var e=this,i=e.getMeta(),l=i.dataset,n=i.data,a=l.custom||{},r=e.getDataset(),s=e.chart.options.elements.line,c=e.chart.scale;void 0!==r.tension&&void 0===r.lineTension&&(r.lineTension=r.tension),o.extend(i.dataset,{_datasetIndex:e.index,_scale:c,_children:n,_loop:!0,_model:{tension:a.tension?a.tension:o.valueOrDefault(r.lineTension,s.tension),backgroundColor:a.backgroundColor?a.backgroundColor:r.backgroundColor||s.backgroundColor,borderWidth:a.borderWidth?a.borderWidth:r.borderWidth||s.borderWidth,borderColor:a.borderColor?a.borderColor:r.borderColor||s.borderColor,fill:a.fill?a.fill:void 0!==r.fill?r.fill:s.fill,borderCapStyle:a.borderCapStyle?a.borderCapStyle:r.borderCapStyle||s.borderCapStyle,borderDash:a.borderDash?a.borderDash:r.borderDash||s.borderDash,borderDashOffset:a.borderDashOffset?a.borderDashOffset:r.borderDashOffset||s.borderDashOffset,borderJoinStyle:a.borderJoinStyle?a.borderJoinStyle:r.borderJoinStyle||s.borderJoinStyle}}),i.dataset.pivot(),o.each(n,(function(i,l){e.updateElement(i,l,t)}),e),e.updateBezierControlPoints()},updateElement:function(t,e,i){var l=this,n=t.custom||{},a=l.getDataset(),r=l.chart.scale,s=l.chart.options.elements.point,c=r.getPointPositionForValue(e,a.data[e]);void 0!==a.radius&&void 0===a.pointRadius&&(a.pointRadius=a.radius),void 0!==a.hitRadius&&void 0===a.pointHitRadius&&(a.pointHitRadius=a.hitRadius),o.extend(t,{_datasetIndex:l.index,_index:e,_scale:r,_model:{x:i?r.xCenter:c.x,y:i?r.yCenter:c.y,tension:n.tension?n.tension:o.valueOrDefault(a.lineTension,l.chart.options.elements.line.tension),radius:n.radius?n.radius:o.valueAtIndexOrDefault(a.pointRadius,e,s.radius),backgroundColor:n.backgroundColor?n.backgroundColor:o.valueAtIndexOrDefault(a.pointBackgroundColor,e,s.backgroundColor),borderColor:n.borderColor?n.borderColor:o.valueAtIndexOrDefault(a.pointBorderColor,e,s.borderColor),borderWidth:n.borderWidth?n.borderWidth:o.valueAtIndexOrDefault(a.pointBorderWidth,e,s.borderWidth),pointStyle:n.pointStyle?n.pointStyle:o.valueAtIndexOrDefault(a.pointStyle,e,s.pointStyle),rotation:n.rotation?n.rotation:o.valueAtIndexOrDefault(a.pointRotation,e,s.rotation),hitRadius:n.hitRadius?n.hitRadius:o.valueAtIndexOrDefault(a.pointHitRadius,e,s.hitRadius)}}),t._model.skip=n.skip?n.skip:isNaN(t._model.x)||isNaN(t._model.y)},updateBezierControlPoints:function(){var t=this.chart.chartArea,e=this.getMeta();o.each(e.data,(function(i,l){var n=i._model,a=o.splineCurve(o.previousItem(e.data,l,!0)._model,n,o.nextItem(e.data,l,!0)._model,n.tension);n.controlPointPreviousX=Math.max(Math.min(a.previous.x,t.right),t.left),n.controlPointPreviousY=Math.max(Math.min(a.previous.y,t.bottom),t.top),n.controlPointNextX=Math.max(Math.min(a.next.x,t.right),t.left),n.controlPointNextY=Math.max(Math.min(a.next.y,t.bottom),t.top),i.pivot()}))},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t.custom||{},l=t._index,n=t._model;t.$previousStyle={backgroundColor:n.backgroundColor,borderColor:n.borderColor,borderWidth:n.borderWidth,radius:n.radius},n.radius=i.hoverRadius?i.hoverRadius:o.valueAtIndexOrDefault(e.pointHoverRadius,l,this.chart.options.elements.point.hoverRadius),n.backgroundColor=i.hoverBackgroundColor?i.hoverBackgroundColor:o.valueAtIndexOrDefault(e.pointHoverBackgroundColor,l,o.getHoverColor(n.backgroundColor)),n.borderColor=i.hoverBorderColor?i.hoverBorderColor:o.valueAtIndexOrDefault(e.pointHoverBorderColor,l,o.getHoverColor(n.borderColor)),n.borderWidth=i.hoverBorderWidth?i.hoverBorderWidth:o.valueAtIndexOrDefault(e.pointHoverBorderWidth,l,n.borderWidth)}})}},{26:26,41:41,46:46}],21:[function(t,e,i){t(26)._set("scatter",{hover:{mode:"single"},scales:{xAxes:[{id:"x-axis-1",type:"linear",position:"bottom"}],yAxes:[{id:"y-axis-1",type:"linear",position:"left"}]},showLines:!1,tooltips:{callbacks:{title:function(){return""},label:function(t){return"("+t.xLabel+", "+t.yLabel+")"}}}}),e.exports=function(t){t.controllers.scatter=t.controllers.line}},{26:26}],22:[function(t,e,i){var l=t(27);i=e.exports=l.extend({chart:null,currentStep:0,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null});Object.defineProperty(i.prototype,"animationObject",{get:function(){return this}}),Object.defineProperty(i.prototype,"chartInstance",{get:function(){return this.chart},set:function(t){this.chart=t}})},{27:27}],23:[function(t,e,i){var l=t(26),n=t(46);l._set("global",{animation:{duration:1e3,easing:"easeOutQuart",onProgress:n.noop,onComplete:n.noop}}),e.exports={frameDuration:17,animations:[],dropFrames:0,request:null,addAnimation:function(t,e,i,l){var n,o,a=this.animations;for(e.chart=t,l||(t.animating=!0),n=0,o=a.length;n<o;++n)if(a[n].chart===t)return void(a[n]=e);a.push(e),1===a.length&&this.requestAnimationFrame()},cancelAnimation:function(t){var e=n.findIndex(this.animations,(function(e){return e.chart===t}));-1!==e&&(this.animations.splice(e,1),t.animating=!1)},requestAnimationFrame:function(){var t=this;null===t.request&&(t.request=n.requestAnimFrame.call(window,(function(){t.request=null,t.startDigest()})))},startDigest:function(){var t=this,e=Date.now(),i=0;t.dropFrames>1&&(i=Math.floor(t.dropFrames),t.dropFrames=t.dropFrames%1),t.advance(1+i);var l=Date.now();t.dropFrames+=(l-e)/t.frameDuration,t.animations.length>0&&t.requestAnimationFrame()},advance:function(t){for(var e,i,l=this.animations,o=0;o<l.length;)i=(e=l[o]).chart,e.currentStep=(e.currentStep||0)+t,e.currentStep=Math.min(e.currentStep,e.numSteps),n.callback(e.render,[i,e],i),n.callback(e.onAnimationProgress,[e],i),e.currentStep>=e.numSteps?(n.callback(e.onAnimationComplete,[e],i),i.animating=!1,l.splice(o,1)):++o}}},{26:26,46:46}],24:[function(t,e,i){var l=t(22),o=t(23),a=t(26),r=t(46),s=t(29),c=t(31),u=t(49),d=t(32),h=t(34),p=t(36);e.exports=function(t){function e(e){var i=e.options;r.each(e.scales,(function(t){c.removeBox(e,t)})),i=r.configMerge(t.defaults.global,t.defaults[e.config.type],i),e.options=e.config.options=i,e.ensureScalesHaveIDs(),e.buildOrUpdateScales(),e.tooltip._options=i.tooltips,e.tooltip.initialize()}function i(t){return"top"===t||"bottom"===t}t.types={},t.instances={},t.controllers={},r.extend(t.prototype,{construct:function(e,i){var l=this;i=function(t){var e=(t=t||{}).data=t.data||{};return e.datasets=e.datasets||[],e.labels=e.labels||[],t.options=r.configMerge(a.global,a[t.type],t.options||{}),t}(i);var n=u.acquireContext(e,i),o=n&&n.canvas,s=o&&o.height,c=o&&o.width;l.id=r.uid(),l.ctx=n,l.canvas=o,l.config=i,l.width=c,l.height=s,l.aspectRatio=s?c/s:null,l.options=i.options,l._bufferedRender=!1,l.chart=l,l.controller=l,t.instances[l.id]=l,Object.defineProperty(l,"data",{get:function(){return l.config.data},set:function(t){l.config.data=t}}),n&&o?(l.initialize(),l.update()):console.error("Failed to create chart: can't acquire context from the given item")},initialize:function(){var t=this;return d.notify(t,"beforeInit"),r.retinaScale(t,t.options.devicePixelRatio),t.bindEvents(),t.options.responsive&&t.resize(!0),t.ensureScalesHaveIDs(),t.buildOrUpdateScales(),t.initToolTip(),d.notify(t,"afterInit"),t},clear:function(){return r.canvas.clear(this),this},stop:function(){return o.cancelAnimation(this),this},resize:function(t){var e=this,i=e.options,l=e.canvas,n=i.maintainAspectRatio&&e.aspectRatio||null,o=Math.max(0,Math.floor(r.getMaximumWidth(l))),a=Math.max(0,Math.floor(n?o/n:r.getMaximumHeight(l)));if((e.width!==o||e.height!==a)&&(l.width=e.width=o,l.height=e.height=a,l.style.width=o+"px",l.style.height=a+"px",r.retinaScale(e,i.devicePixelRatio),!t)){var s={width:o,height:a};d.notify(e,"resize",[s]),e.options.onResize&&e.options.onResize(e,s),e.stop(),e.update({duration:e.options.responsiveAnimationDuration})}},ensureScalesHaveIDs:function(){var t=this.options,e=t.scales||{},i=t.scale;r.each(e.xAxes,(function(t,e){t.id=t.id||"x-axis-"+e})),r.each(e.yAxes,(function(t,e){t.id=t.id||"y-axis-"+e})),i&&(i.id=i.id||"scale")},buildOrUpdateScales:function(){var t=this,e=t.options,l=t.scales||{},n=[],o=Object.keys(l).reduce((function(t,e){return t[e]=!1,t}),{});e.scales&&(n=n.concat((e.scales.xAxes||[]).map((function(t){return{options:t,dtype:"category",dposition:"bottom"}})),(e.scales.yAxes||[]).map((function(t){return{options:t,dtype:"linear",dposition:"left"}})))),e.scale&&n.push({options:e.scale,dtype:"radialLinear",isDefault:!0,dposition:"chartArea"}),r.each(n,(function(e){var n=e.options,a=n.id,s=r.valueOrDefault(n.type,e.dtype);i(n.position)!==i(e.dposition)&&(n.position=e.dposition),o[a]=!0;var c=null;if(a in l&&l[a].type===s)(c=l[a]).options=n,c.ctx=t.ctx,c.chart=t;else{var u=h.getScaleConstructor(s);if(!u)return;c=new u({id:a,type:s,options:n,ctx:t.ctx,chart:t}),l[c.id]=c}c.mergeTicksOptions(),e.isDefault&&(t.scale=c)})),r.each(o,(function(t,e){t||delete l[e]})),t.scales=l,h.addScalesToLayout(this)},buildOrUpdateControllers:function(){var e=this,i=[],l=[];return r.each(e.data.datasets,(function(n,o){var a=e.getDatasetMeta(o),r=n.type||e.config.type;if(a.type&&a.type!==r&&(e.destroyDatasetMeta(o),a=e.getDatasetMeta(o)),a.type=r,i.push(a.type),a.controller)a.controller.updateIndex(o),a.controller.linkScales();else{var s=t.controllers[a.type];if(void 0===s)throw new Error('"'+a.type+'" is not a chart type.');a.controller=new s(e,o),l.push(a.controller)}}),e),l},resetElements:function(){var t=this;r.each(t.data.datasets,(function(e,i){t.getDatasetMeta(i).controller.reset()}),t)},reset:function(){this.resetElements(),this.tooltip.initialize()},update:function(t){var i=this;if(t&&"object"===n(t)||(t={duration:t,lazy:arguments[1]}),e(i),d._invalidate(i),!1!==d.notify(i,"beforeUpdate")){i.tooltip._data=i.data;var l=i.buildOrUpdateControllers();r.each(i.data.datasets,(function(t,e){i.getDatasetMeta(e).controller.buildOrUpdateElements()}),i),i.updateLayout(),i.options.animation&&i.options.animation.duration&&r.each(l,(function(t){t.reset()})),i.updateDatasets(),i.tooltip.initialize(),i.lastActive=[],d.notify(i,"afterUpdate"),i._bufferedRender?i._bufferedRequest={duration:t.duration,easing:t.easing,lazy:t.lazy}:i.render(t)}},updateLayout:function(){!1!==d.notify(this,"beforeLayout")&&(c.update(this,this.width,this.height),d.notify(this,"afterScaleUpdate"),d.notify(this,"afterLayout"))},updateDatasets:function(){if(!1!==d.notify(this,"beforeDatasetsUpdate")){for(var t=0,e=this.data.datasets.length;t<e;++t)this.updateDataset(t);d.notify(this,"afterDatasetsUpdate")}},updateDataset:function(t){var e=this.getDatasetMeta(t),i={meta:e,index:t};!1!==d.notify(this,"beforeDatasetUpdate",[i])&&(e.controller.update(),d.notify(this,"afterDatasetUpdate",[i]))},render:function(t){var e=this;t&&"object"===n(t)||(t={duration:t,lazy:arguments[1]});var i=t.duration,a=t.lazy;if(!1!==d.notify(e,"beforeRender")){var s=e.options.animation,c=function(t){d.notify(e,"afterRender"),r.callback(s&&s.onComplete,[t],e)};if(s&&(void 0!==i&&0!==i||void 0===i&&0!==s.duration)){var u=new l({numSteps:(i||s.duration)/16.66,easing:t.easing||s.easing,render:function(t,e){var i=r.easing.effects[e.easing],l=e.currentStep,n=l/e.numSteps;t.draw(i(n),n,l)},onAnimationProgress:s.onProgress,onAnimationComplete:c});o.addAnimation(e,u,i,a)}else e.draw(),c(new l({numSteps:0,chart:e}));return e}},draw:function(t){var e=this;e.clear(),r.isNullOrUndef(t)&&(t=1),e.transition(t),e.width<=0||e.height<=0||!1!==d.notify(e,"beforeDraw",[t])&&(r.each(e.boxes,(function(t){t.draw(e.chartArea)}),e),e.scale&&e.scale.draw(),e.drawDatasets(t),e._drawTooltip(t),d.notify(e,"afterDraw",[t]))},transition:function(t){for(var e=0,i=(this.data.datasets||[]).length;e<i;++e)this.isDatasetVisible(e)&&this.getDatasetMeta(e).controller.transition(t);this.tooltip.transition(t)},drawDatasets:function(t){var e=this;if(!1!==d.notify(e,"beforeDatasetsDraw",[t])){for(var i=(e.data.datasets||[]).length-1;i>=0;--i)e.isDatasetVisible(i)&&e.drawDataset(i,t);d.notify(e,"afterDatasetsDraw",[t])}},drawDataset:function(t,e){var i=this.getDatasetMeta(t),l={meta:i,index:t,easingValue:e};!1!==d.notify(this,"beforeDatasetDraw",[l])&&(i.controller.draw(e),d.notify(this,"afterDatasetDraw",[l]))},_drawTooltip:function(t){var e=this.tooltip,i={tooltip:e,easingValue:t};!1!==d.notify(this,"beforeTooltipDraw",[i])&&(e.draw(),d.notify(this,"afterTooltipDraw",[i]))},getElementAtEvent:function(t){return s.modes.single(this,t)},getElementsAtEvent:function(t){return s.modes.label(this,t,{intersect:!0})},getElementsAtXAxis:function(t){return s.modes["x-axis"](this,t,{intersect:!0})},getElementsAtEventForMode:function(t,e,i){var l=s.modes[e];return"function"==typeof l?l(this,t,i):[]},getDatasetAtEvent:function(t){return s.modes.dataset(this,t,{intersect:!0})},getDatasetMeta:function(t){var e=this.data.datasets[t];e._meta||(e._meta={});var i=e._meta[this.id];return i||(i=e._meta[this.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null}),i},getVisibleDatasetCount:function(){for(var t=0,e=0,i=this.data.datasets.length;e<i;++e)this.isDatasetVisible(e)&&t++;return t},isDatasetVisible:function(t){var e=this.getDatasetMeta(t);return"boolean"==typeof e.hidden?!e.hidden:!this.data.datasets[t].hidden},generateLegend:function(){return this.options.legendCallback(this)},destroyDatasetMeta:function(t){var e=this.id,i=this.data.datasets[t],l=i._meta&&i._meta[e];l&&(l.controller.destroy(),delete i._meta[e])},destroy:function(){var e,i,l=this,n=l.canvas;for(l.stop(),e=0,i=l.data.datasets.length;e<i;++e)l.destroyDatasetMeta(e);n&&(l.unbindEvents(),r.canvas.clear(l),u.releaseContext(l.ctx),l.canvas=null,l.ctx=null),d.notify(l,"destroy"),delete t.instances[l.id]},toBase64Image:function(){return this.canvas.toDataURL.apply(this.canvas,arguments)},initToolTip:function(){var t=this;t.tooltip=new p({_chart:t,_chartInstance:t,_data:t.data,_options:t.options.tooltips},t)},bindEvents:function(){var t=this,e=t._listeners={},i=function(){t.eventHandler.apply(t,arguments)};r.each(t.options.events,(function(l){u.addEventListener(t,l,i),e[l]=i})),t.options.responsive&&(i=function(){t.resize()},u.addEventListener(t,"resize",i),e.resize=i)},unbindEvents:function(){var t=this,e=t._listeners;e&&(delete t._listeners,r.each(e,(function(e,i){u.removeEventListener(t,i,e)})))},updateHoverStyle:function(t,e,i){var l,n,o,a=i?"setHoverStyle":"removeHoverStyle";for(n=0,o=t.length;n<o;++n)(l=t[n])&&this.getDatasetMeta(l._datasetIndex).controller[a](l)},eventHandler:function(t){var e=this,i=e.tooltip;if(!1!==d.notify(e,"beforeEvent",[t])){e._bufferedRender=!0,e._bufferedRequest=null;var l=e.handleEvent(t);i&&(l=i._start?i.handleEvent(t):l|i.handleEvent(t)),d.notify(e,"afterEvent",[t]);var n=e._bufferedRequest;return n?e.render(n):l&&!e.animating&&(e.stop(),e.render({duration:e.options.hover.animationDuration,lazy:!0})),e._bufferedRender=!1,e._bufferedRequest=null,e}},handleEvent:function(t){var e,i=this,l=i.options||{},n=l.hover;return i.lastActive=i.lastActive||[],"mouseout"===t.type?i.active=[]:i.active=i.getElementsAtEventForMode(t,n.mode,n),r.callback(l.onHover||l.hover.onHover,[t.native,i.active],i),"mouseup"!==t.type&&"click"!==t.type||l.onClick&&l.onClick.call(i,t.native,i.active),i.lastActive.length&&i.updateHoverStyle(i.lastActive,n.mode,!1),i.active.length&&n.mode&&i.updateHoverStyle(i.active,n.mode,!0),e=!r.arrayEquals(i.active,i.lastActive),i.lastActive=i.active,e}}),t.Controller=t}},{22:22,23:23,26:26,29:29,31:31,32:32,34:34,36:36,46:46,49:49}],25:[function(t,e,i){var l=t(46);e.exports=function(t){var e=["push","pop","shift","splice","unshift"];function i(t,i){var l=t._chartjs;if(l){var n=l.listeners,o=n.indexOf(i);-1!==o&&n.splice(o,1),n.length>0||(e.forEach((function(e){delete t[e]})),delete t._chartjs)}}t.DatasetController=function(t,e){this.initialize(t,e)},l.extend(t.DatasetController.prototype,{datasetElementType:null,dataElementType:null,initialize:function(t,e){this.chart=t,this.index=e,this.linkScales(),this.addElements()},updateIndex:function(t){this.index=t},linkScales:function(){var t=this,e=t.getMeta(),i=t.getDataset();null!==e.xAxisID&&e.xAxisID in t.chart.scales||(e.xAxisID=i.xAxisID||t.chart.options.scales.xAxes[0].id),null!==e.yAxisID&&e.yAxisID in t.chart.scales||(e.yAxisID=i.yAxisID||t.chart.options.scales.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(t){return this.chart.scales[t]},reset:function(){this.update(!0)},destroy:function(){this._data&&i(this._data,this)},createMetaDataset:function(){var t=this.datasetElementType;return t&&new t({_chart:this.chart,_datasetIndex:this.index})},createMetaData:function(t){var e=this.dataElementType;return e&&new e({_chart:this.chart,_datasetIndex:this.index,_index:t})},addElements:function(){var t,e,i=this.getMeta(),l=this.getDataset().data||[],n=i.data;for(t=0,e=l.length;t<e;++t)n[t]=n[t]||this.createMetaData(t);i.dataset=i.dataset||this.createMetaDataset()},addElementAndReset:function(t){var e=this.createMetaData(t);this.getMeta().data.splice(t,0,e),this.updateElement(e,t,!0)},buildOrUpdateElements:function(){var t,n,o=this,a=o.getDataset(),r=a.data||(a.data=[]);o._data!==r&&(o._data&&i(o._data,o),n=o,(t=r)._chartjs?t._chartjs.listeners.push(n):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[n]}}),e.forEach((function(e){var i="onData"+e.charAt(0).toUpperCase()+e.slice(1),n=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:function(){var e=Array.prototype.slice.call(arguments),o=n.apply(this,e);return l.each(t._chartjs.listeners,(function(t){"function"==typeof t[i]&&t[i].apply(t,e)})),o}})}))),o._data=r),o.resyncElements()},update:l.noop,transition:function(t){for(var e=this.getMeta(),i=e.data||[],l=i.length,n=0;n<l;++n)i[n].transition(t);e.dataset&&e.dataset.transition(t)},draw:function(){var t=this.getMeta(),e=t.data||[],i=e.length,l=0;for(t.dataset&&t.dataset.draw();l<i;++l)e[l].draw()},removeHoverStyle:function(t){l.merge(t._model,t.$previousStyle||{}),delete t.$previousStyle},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t._index,n=t.custom||{},o=l.valueAtIndexOrDefault,a=l.getHoverColor,r=t._model;t.$previousStyle={backgroundColor:r.backgroundColor,borderColor:r.borderColor,borderWidth:r.borderWidth},r.backgroundColor=n.hoverBackgroundColor?n.hoverBackgroundColor:o(e.hoverBackgroundColor,i,a(r.backgroundColor)),r.borderColor=n.hoverBorderColor?n.hoverBorderColor:o(e.hoverBorderColor,i,a(r.borderColor)),r.borderWidth=n.hoverBorderWidth?n.hoverBorderWidth:o(e.hoverBorderWidth,i,r.borderWidth)},resyncElements:function(){var t=this.getMeta(),e=this.getDataset().data,i=t.data.length,l=e.length;l<i?t.data.splice(l,i-l):l>i&&this.insertElements(i,l-i)},insertElements:function(t,e){for(var i=0;i<e;++i)this.addElementAndReset(t+i)},onDataPush:function(){this.insertElements(this.getDataset().data.length-1,arguments.length)},onDataPop:function(){this.getMeta().data.pop()},onDataShift:function(){this.getMeta().data.shift()},onDataSplice:function(t,e){this.getMeta().data.splice(t,e),this.insertElements(t,arguments.length-2)},onDataUnshift:function(){this.insertElements(0,arguments.length)}}),t.DatasetController.extend=l.inherits}},{46:46}],26:[function(t,e,i){var l=t(46);e.exports={_set:function(t,e){return l.merge(this[t]||(this[t]={}),e)}}},{46:46}],27:[function(t,e,i){var l=t(3),o=t(46);var a=function(t){o.extend(this,t),this.initialize.apply(this,arguments)};o.extend(a.prototype,{initialize:function(){this.hidden=!1},pivot:function(){var t=this;return t._view||(t._view=o.clone(t._model)),t._start={},t},transition:function(t){var e=this,i=e._model,o=e._start,a=e._view;return i&&1!==t?(a||(a=e._view={}),o||(o=e._start={}),function(t,e,i,o){var a,r,s,c,u,d,h,p,f,m=Object.keys(i);for(a=0,r=m.length;a<r;++a)if(d=i[s=m[a]],e.hasOwnProperty(s)||(e[s]=d),(c=e[s])!==d&&"_"!==s[0]){if(t.hasOwnProperty(s)||(t[s]=c),u=t[s],(h=n(d))===n(u))if("string"===h){if((p=l(u)).valid&&(f=l(d)).valid){e[s]=f.mix(p,o).rgbString();continue}}else if("number"===h&&isFinite(u)&&isFinite(d)){e[s]=u+(d-u)*o;continue}e[s]=d}}(o,a,i,t),e):(e._view=i,e._start=null,e)},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return o.isNumber(this._model.x)&&o.isNumber(this._model.y)}}),a.extend=o.inherits,e.exports=a},{3:3,46:46}],28:[function(t,e,i){var l=t(3),n=t(26),o=t(46),a=t(34);e.exports=function(){function t(t,e,i){var l;return"string"==typeof t?(l=parseInt(t,10),-1!==t.indexOf("%")&&(l=l/100*e.parentNode[i])):l=t,l}function e(t){return null!=t&&"none"!==t}function i(i,l,n){var a=document.defaultView,r=o._getParentNode(i),s=a.getComputedStyle(i)[l],c=a.getComputedStyle(r)[l],u=e(s),d=e(c),h=Number.POSITIVE_INFINITY;return u||d?Math.min(u?t(s,i,n):h,d?t(c,r,n):h):"none"}o.configMerge=function(){return o.merge(o.clone(arguments[0]),[].slice.call(arguments,1),{merger:function(t,e,i,l){var n=e[t]||{},r=i[t];"scales"===t?e[t]=o.scaleMerge(n,r):"scale"===t?e[t]=o.merge(n,[a.getScaleDefaults(r.type),r]):o._merger(t,e,i,l)}})},o.scaleMerge=function(){return o.merge(o.clone(arguments[0]),[].slice.call(arguments,1),{merger:function(t,e,i,l){if("xAxes"===t||"yAxes"===t){var n,r,s,c=i[t].length;for(e[t]||(e[t]=[]),n=0;n<c;++n)s=i[t][n],r=o.valueOrDefault(s.type,"xAxes"===t?"category":"linear"),n>=e[t].length&&e[t].push({}),!e[t][n].type||s.type&&s.type!==e[t][n].type?o.merge(e[t][n],[a.getScaleDefaults(r),s]):o.merge(e[t][n],s)}else o._merger(t,e,i,l)}})},o.where=function(t,e){if(o.isArray(t)&&Array.prototype.filter)return t.filter(e);var i=[];return o.each(t,(function(t){e(t)&&i.push(t)})),i},o.findIndex=Array.prototype.findIndex?function(t,e,i){return t.findIndex(e,i)}:function(t,e,i){i=void 0===i?t:i;for(var l=0,n=t.length;l<n;++l)if(e.call(i,t[l],l,t))return l;return-1},o.findNextWhere=function(t,e,i){o.isNullOrUndef(i)&&(i=-1);for(var l=i+1;l<t.length;l++){var n=t[l];if(e(n))return n}},o.findPreviousWhere=function(t,e,i){o.isNullOrUndef(i)&&(i=t.length);for(var l=i-1;l>=0;l--){var n=t[l];if(e(n))return n}},o.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},o.almostEquals=function(t,e,i){return Math.abs(t-e)<i},o.almostWhole=function(t,e){var i=Math.round(t);return i-e<t&&i+e>t},o.max=function(t){return t.reduce((function(t,e){return isNaN(e)?t:Math.max(t,e)}),Number.NEGATIVE_INFINITY)},o.min=function(t){return t.reduce((function(t,e){return isNaN(e)?t:Math.min(t,e)}),Number.POSITIVE_INFINITY)},o.sign=Math.sign?function(t){return Math.sign(t)}:function(t){return 0===(t=+t)||isNaN(t)?t:t>0?1:-1},o.log10=Math.log10?function(t){return Math.log10(t)}:function(t){var e=Math.log(t)*Math.LOG10E,i=Math.round(e);return t===Math.pow(10,i)?i:e},o.toRadians=function(t){return t*(Math.PI/180)},o.toDegrees=function(t){return t*(180/Math.PI)},o.getAngleFromPoint=function(t,e){var i=e.x-t.x,l=e.y-t.y,n=Math.sqrt(i*i+l*l),o=Math.atan2(l,i);return o<-.5*Math.PI&&(o+=2*Math.PI),{angle:o,distance:n}},o.distanceBetweenPoints=function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},o.aliasPixel=function(t){return t%2==0?0:.5},o.splineCurve=function(t,e,i,l){var n=t.skip?e:t,o=e,a=i.skip?e:i,r=Math.sqrt(Math.pow(o.x-n.x,2)+Math.pow(o.y-n.y,2)),s=Math.sqrt(Math.pow(a.x-o.x,2)+Math.pow(a.y-o.y,2)),c=r/(r+s),u=s/(r+s),d=l*(c=isNaN(c)?0:c),h=l*(u=isNaN(u)?0:u);return{previous:{x:o.x-d*(a.x-n.x),y:o.y-d*(a.y-n.y)},next:{x:o.x+h*(a.x-n.x),y:o.y+h*(a.y-n.y)}}},o.EPSILON=Number.EPSILON||1e-14,o.splineCurveMonotone=function(t){var e,i,l,n,a,r,s,c,u,d=(t||[]).map((function(t){return{model:t._model,deltaK:0,mK:0}})),h=d.length;for(e=0;e<h;++e)if(!(l=d[e]).model.skip){if(i=e>0?d[e-1]:null,(n=e<h-1?d[e+1]:null)&&!n.model.skip){var p=n.model.x-l.model.x;l.deltaK=0!==p?(n.model.y-l.model.y)/p:0}!i||i.model.skip?l.mK=l.deltaK:!n||n.model.skip?l.mK=i.deltaK:this.sign(i.deltaK)!==this.sign(l.deltaK)?l.mK=0:l.mK=(i.deltaK+l.deltaK)/2}for(e=0;e<h-1;++e)l=d[e],n=d[e+1],l.model.skip||n.model.skip||(o.almostEquals(l.deltaK,0,this.EPSILON)?l.mK=n.mK=0:(a=l.mK/l.deltaK,r=n.mK/l.deltaK,(c=Math.pow(a,2)+Math.pow(r,2))<=9||(s=3/Math.sqrt(c),l.mK=a*s*l.deltaK,n.mK=r*s*l.deltaK)));for(e=0;e<h;++e)(l=d[e]).model.skip||(i=e>0?d[e-1]:null,n=e<h-1?d[e+1]:null,i&&!i.model.skip&&(u=(l.model.x-i.model.x)/3,l.model.controlPointPreviousX=l.model.x-u,l.model.controlPointPreviousY=l.model.y-u*l.mK),n&&!n.model.skip&&(u=(n.model.x-l.model.x)/3,l.model.controlPointNextX=l.model.x+u,l.model.controlPointNextY=l.model.y+u*l.mK))},o.nextItem=function(t,e,i){return i?e>=t.length-1?t[0]:t[e+1]:e>=t.length-1?t[t.length-1]:t[e+1]},o.previousItem=function(t,e,i){return i?e<=0?t[t.length-1]:t[e-1]:e<=0?t[0]:t[e-1]},o.niceNum=function(t,e){var i=Math.floor(o.log10(t)),l=t/Math.pow(10,i);return(e?l<1.5?1:l<3?2:l<7?5:10:l<=1?1:l<=2?2:l<=5?5:10)*Math.pow(10,i)},o.requestAnimFrame="undefined"==typeof window?function(t){t()}:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)},o.getRelativePosition=function(t,e){var i,l,n=t.originalEvent||t,a=t.target||t.srcElement,r=a.getBoundingClientRect(),s=n.touches;s&&s.length>0?(i=s[0].clientX,l=s[0].clientY):(i=n.clientX,l=n.clientY);var c=parseFloat(o.getStyle(a,"padding-left")),u=parseFloat(o.getStyle(a,"padding-top")),d=parseFloat(o.getStyle(a,"padding-right")),h=parseFloat(o.getStyle(a,"padding-bottom")),p=r.right-r.left-c-d,f=r.bottom-r.top-u-h;return{x:i=Math.round((i-r.left-c)/p*a.width/e.currentDevicePixelRatio),y:l=Math.round((l-r.top-u)/f*a.height/e.currentDevicePixelRatio)}},o.getConstraintWidth=function(t){return i(t,"max-width","clientWidth")},o.getConstraintHeight=function(t){return i(t,"max-height","clientHeight")},o._calculatePadding=function(t,e,i){return(e=o.getStyle(t,e)).indexOf("%")>-1?i/parseInt(e,10):parseInt(e,10)},o._getParentNode=function(t){var e=t.parentNode;return e&&e.host&&(e=e.host),e},o.getMaximumWidth=function(t){var e=o._getParentNode(t);if(!e)return t.clientWidth;var i=e.clientWidth,l=i-o._calculatePadding(e,"padding-left",i)-o._calculatePadding(e,"padding-right",i),n=o.getConstraintWidth(t);return isNaN(n)?l:Math.min(l,n)},o.getMaximumHeight=function(t){var e=o._getParentNode(t);if(!e)return t.clientHeight;var i=e.clientHeight,l=i-o._calculatePadding(e,"padding-top",i)-o._calculatePadding(e,"padding-bottom",i),n=o.getConstraintHeight(t);return isNaN(n)?l:Math.min(l,n)},o.getStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e)},o.retinaScale=function(t,e){var i=t.currentDevicePixelRatio=e||"undefined"!=typeof window&&window.devicePixelRatio||1;if(1!==i){var l=t.canvas,n=t.height,o=t.width;l.height=n*i,l.width=o*i,t.ctx.scale(i,i),l.style.height||l.style.width||(l.style.height=n+"px",l.style.width=o+"px")}},o.fontString=function(t,e,i){return e+" "+t+"px "+i},o.longestText=function(t,e,i,l){var n=(l=l||{}).data=l.data||{},a=l.garbageCollect=l.garbageCollect||[];l.font!==e&&(n=l.data={},a=l.garbageCollect=[],l.font=e),t.font=e;var r=0;o.each(i,(function(e){null!=e&&!0!==o.isArray(e)?r=o.measureText(t,n,a,r,e):o.isArray(e)&&o.each(e,(function(e){null==e||o.isArray(e)||(r=o.measureText(t,n,a,r,e))}))}));var s=a.length/2;if(s>i.length){for(var c=0;c<s;c++)delete n[a[c]];a.splice(0,s)}return r},o.measureText=function(t,e,i,l,n){var o=e[n];return o||(o=e[n]=t.measureText(n).width,i.push(n)),o>l&&(l=o),l},o.numberOfLabelLines=function(t){var e=1;return o.each(t,(function(t){o.isArray(t)&&t.length>e&&(e=t.length)})),e},o.color=l?function(t){return t instanceof CanvasGradient&&(t=n.global.defaultColor),l(t)}:function(t){return console.error("Color.js not found!"),t},o.getHoverColor=function(t){return t instanceof CanvasPattern?t:o.color(t).saturate(.5).darken(.1).rgbString()}}},{26:26,3:3,34:34,46:46}],29:[function(t,e,i){var l=t(46);function n(t,e){return t.native?{x:t.x,y:t.y}:l.getRelativePosition(t,e)}function o(t,e){var i,l,n,o,a;for(l=0,o=t.data.datasets.length;l<o;++l)if(t.isDatasetVisible(l))for(n=0,a=(i=t.getDatasetMeta(l)).data.length;n<a;++n){var r=i.data[n];r._view.skip||e(r)}}function a(t,e){var i=[];return o(t,(function(t){t.inRange(e.x,e.y)&&i.push(t)})),i}function r(t,e,i,l){var n=Number.POSITIVE_INFINITY,a=[];return o(t,(function(t){if(!i||t.inRange(e.x,e.y)){var o=t.getCenterPoint(),r=l(e,o);r<n?(a=[t],n=r):r===n&&a.push(t)}})),a}function s(t){var e=-1!==t.indexOf("x"),i=-1!==t.indexOf("y");return function(t,l){var n=e?Math.abs(t.x-l.x):0,o=i?Math.abs(t.y-l.y):0;return Math.sqrt(Math.pow(n,2)+Math.pow(o,2))}}function c(t,e,i){var l=n(e,t);i.axis=i.axis||"x";var o=s(i.axis),c=i.intersect?a(t,l):r(t,l,!1,o),u=[];return c.length?(t.data.datasets.forEach((function(e,i){if(t.isDatasetVisible(i)){var l=t.getDatasetMeta(i).data[c[0]._index];l&&!l._view.skip&&u.push(l)}})),u):[]}e.exports={modes:{single:function(t,e){var i=n(e,t),l=[];return o(t,(function(t){if(t.inRange(i.x,i.y))return l.push(t),l})),l.slice(0,1)},label:c,index:c,dataset:function(t,e,i){var l=n(e,t);i.axis=i.axis||"xy";var o=s(i.axis),c=i.intersect?a(t,l):r(t,l,!1,o);return c.length>0&&(c=t.getDatasetMeta(c[0]._datasetIndex).data),c},"x-axis":function(t,e){return c(t,e,{intersect:!1})},point:function(t,e){return a(t,n(e,t))},nearest:function(t,e,i){var l=n(e,t);i.axis=i.axis||"xy";var o=s(i.axis),a=r(t,l,i.intersect,o);return a.length>1&&a.sort((function(t,e){var i=t.getArea()-e.getArea();return 0===i&&(i=t._datasetIndex-e._datasetIndex),i})),a.slice(0,1)},x:function(t,e,i){var l=n(e,t),a=[],r=!1;return o(t,(function(t){t.inXRange(l.x)&&a.push(t),t.inRange(l.x,l.y)&&(r=!0)})),i.intersect&&!r&&(a=[]),a},y:function(t,e,i){var l=n(e,t),a=[],r=!1;return o(t,(function(t){t.inYRange(l.y)&&a.push(t),t.inRange(l.x,l.y)&&(r=!0)})),i.intersect&&!r&&(a=[]),a}}}},{46:46}],30:[function(t,e,i){t(26)._set("global",{responsive:!0,responsiveAnimationDuration:0,maintainAspectRatio:!0,events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"nearest",intersect:!0,animationDuration:400},onClick:null,defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",showLines:!0,elements:{},layout:{padding:{top:0,right:0,bottom:0,left:0}}}),e.exports=function(){var t=function(t,e){return this.construct(t,e),this};return t.Chart=t,t}},{26:26}],31:[function(t,e,i){var l=t(46);function n(t,e){return l.where(t,(function(t){return t.position===e}))}function o(t,e){t.forEach((function(t,e){return t._tmpIndex_=e,t})),t.sort((function(t,i){var l=e?i:t,n=e?t:i;return l.weight===n.weight?l._tmpIndex_-n._tmpIndex_:l.weight-n.weight})),t.forEach((function(t){delete t._tmpIndex_}))}e.exports={defaults:{},addBox:function(t,e){t.boxes||(t.boxes=[]),e.fullWidth=e.fullWidth||!1,e.position=e.position||"top",e.weight=e.weight||0,t.boxes.push(e)},removeBox:function(t,e){var i=t.boxes?t.boxes.indexOf(e):-1;-1!==i&&t.boxes.splice(i,1)},configure:function(t,e,i){for(var l,n=["fullWidth","position","weight"],o=n.length,a=0;a<o;++a)l=n[a],i.hasOwnProperty(l)&&(e[l]=i[l])},update:function(t,e,i){if(t){var a=t.options.layout||{},r=l.options.toPadding(a.padding),s=r.left,c=r.right,u=r.top,d=r.bottom,h=n(t.boxes,"left"),p=n(t.boxes,"right"),f=n(t.boxes,"top"),m=n(t.boxes,"bottom"),v=n(t.boxes,"chartArea");o(h,!0),o(p,!1),o(f,!0),o(m,!1);var g=e-s-c,y=i-u-d,b=y/2,x=(e-g/2)/(h.length+p.length),w=(i-b)/(f.length+m.length),k=g,S=y,M=[];l.each(h.concat(p,f,m),(function(t){var e,i=t.isHorizontal();i?(e=t.update(t.fullWidth?g:k,w),S-=e.height):(e=t.update(x,S),k-=e.width),M.push({horizontal:i,minSize:e,box:t})}));var C=0,T=0,A=0,O=0;l.each(f.concat(m),(function(t){if(t.getPadding){var e=t.getPadding();C=Math.max(C,e.left),T=Math.max(T,e.right)}})),l.each(h.concat(p),(function(t){if(t.getPadding){var e=t.getPadding();A=Math.max(A,e.top),O=Math.max(O,e.bottom)}}));var E=s,P=c,I=u,_=d;l.each(h.concat(p),W),l.each(h,(function(t){E+=t.width})),l.each(p,(function(t){P+=t.width})),l.each(f.concat(m),W),l.each(f,(function(t){I+=t.height})),l.each(m,(function(t){_+=t.height})),l.each(h.concat(p),(function(t){var e=l.findNextWhere(M,(function(e){return e.box===t})),i={left:0,right:0,top:I,bottom:_};e&&t.update(e.minSize.width,S,i)})),E=s,P=c,I=u,_=d,l.each(h,(function(t){E+=t.width})),l.each(p,(function(t){P+=t.width})),l.each(f,(function(t){I+=t.height})),l.each(m,(function(t){_+=t.height}));var $=Math.max(C-E,0);E+=$,P+=Math.max(T-P,0);var D=Math.max(A-I,0);I+=D,_+=Math.max(O-_,0);var L=i-I-_,R=e-E-P;R===k&&L===S||(l.each(h,(function(t){t.height=L})),l.each(p,(function(t){t.height=L})),l.each(f,(function(t){t.fullWidth||(t.width=R)})),l.each(m,(function(t){t.fullWidth||(t.width=R)})),S=L,k=R);var V=s+$,F=u+D;l.each(h.concat(f),j),V+=k,F+=S,l.each(p,j),l.each(m,j),t.chartArea={left:E,top:I,right:E+k,bottom:I+S},l.each(v,(function(e){e.left=t.chartArea.left,e.top=t.chartArea.top,e.right=t.chartArea.right,e.bottom=t.chartArea.bottom,e.update(k,S)}))}function W(t){var e=l.findNextWhere(M,(function(e){return e.box===t}));if(e)if(t.isHorizontal()){var i={left:Math.max(E,C),right:Math.max(P,T),top:0,bottom:0};t.update(t.fullWidth?g:k,y/2,i)}else t.update(e.minSize.width,S)}function j(t){t.isHorizontal()?(t.left=t.fullWidth?s:E,t.right=t.fullWidth?e-c:E+k,t.top=F,t.bottom=F+t.height,F=t.bottom):(t.left=V,t.right=V+t.width,t.top=I,t.bottom=I+S,V=t.right)}}}},{46:46}],32:[function(t,e,i){var l=t(26),n=t(46);l._set("global",{plugins:{}}),e.exports={_plugins:[],_cacheId:0,register:function(t){var e=this._plugins;[].concat(t).forEach((function(t){-1===e.indexOf(t)&&e.push(t)})),this._cacheId++},unregister:function(t){var e=this._plugins;[].concat(t).forEach((function(t){var i=e.indexOf(t);-1!==i&&e.splice(i,1)})),this._cacheId++},clear:function(){this._plugins=[],this._cacheId++},count:function(){return this._plugins.length},getAll:function(){return this._plugins},notify:function(t,e,i){var l,n,o,a,r,s=this.descriptors(t),c=s.length;for(l=0;l<c;++l)if("function"==typeof(r=(o=(n=s[l]).plugin)[e])&&((a=[t].concat(i||[])).push(n.options),!1===r.apply(o,a)))return!1;return!0},descriptors:function(t){var e=t.$plugins||(t.$plugins={});if(e.id===this._cacheId)return e.descriptors;var i=[],o=[],a=t&&t.config||{},r=a.options&&a.options.plugins||{};return this._plugins.concat(a.plugins||[]).forEach((function(t){if(-1===i.indexOf(t)){var e=t.id,a=r[e];!1!==a&&(!0===a&&(a=n.clone(l.global.plugins[e])),i.push(t),o.push({plugin:t,options:a||{}}))}})),e.descriptors=o,e.id=this._cacheId,o},_invalidate:function(t){delete t.$plugins}}},{26:26,46:46}],33:[function(t,e,i){var l=t(26),n=t(27),o=t(46),a=t(35);function r(t){var e,i,l=[];for(e=0,i=t.length;e<i;++e)l.push(t[e].label);return l}function s(t,e,i){var l=t.getPixelForTick(e);return i&&(l-=0===e?(t.getPixelForTick(1)-l)/2:(l-t.getPixelForTick(e-1))/2),l}function c(t,e,i){return o.isArray(e)?o.longestText(t,i,e):t.measureText(e).width}function u(t){var e=o.valueOrDefault,i=l.global,n=e(t.fontSize,i.defaultFontSize),a=e(t.fontStyle,i.defaultFontStyle),r=e(t.fontFamily,i.defaultFontFamily);return{size:n,style:a,family:r,font:o.fontString(n,a,r)}}function d(t){return o.options.toLineHeight(o.valueOrDefault(t.lineHeight,1.2),o.valueOrDefault(t.fontSize,l.global.defaultFontSize))}l._set("scale",{display:!0,position:"left",offset:!1,gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",zeroLineBorderDash:[],zeroLineBorderDashOffset:0,offsetGridLines:!1,borderDash:[],borderDashOffset:0},scaleLabel:{display:!1,labelString:"",lineHeight:1.2,padding:{top:4,bottom:4}},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:0,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:a.formatters.values,minor:{},major:{}}}),e.exports=n.extend({getPadding:function(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}},getTicks:function(){return this._ticks},mergeTicksOptions:function(){var t=this.options.ticks;for(var e in!1===t.minor&&(t.minor={display:!1}),!1===t.major&&(t.major={display:!1}),t)"major"!==e&&"minor"!==e&&(void 0===t.minor[e]&&(t.minor[e]=t[e]),void 0===t.major[e]&&(t.major[e]=t[e]))},beforeUpdate:function(){o.callback(this.options.beforeUpdate,[this])},update:function(t,e,i){var l,n,a,r,s,c,u=this;for(u.beforeUpdate(),u.maxWidth=t,u.maxHeight=e,u.margins=o.extend({left:0,right:0,top:0,bottom:0},i),u.longestTextCache=u.longestTextCache||{},u.beforeSetDimensions(),u.setDimensions(),u.afterSetDimensions(),u.beforeDataLimits(),u.determineDataLimits(),u.afterDataLimits(),u.beforeBuildTicks(),s=u.buildTicks()||[],u.afterBuildTicks(),u.beforeTickToLabelConversion(),a=u.convertTicksToLabels(s)||u.ticks,u.afterTickToLabelConversion(),u.ticks=a,l=0,n=a.length;l<n;++l)r=a[l],(c=s[l])?c.label=r:s.push(c={label:r,major:!1});return u._ticks=s,u.beforeCalculateTickRotation(),u.calculateTickRotation(),u.afterCalculateTickRotation(),u.beforeFit(),u.fit(),u.afterFit(),u.afterUpdate(),u.minSize},afterUpdate:function(){o.callback(this.options.afterUpdate,[this])},beforeSetDimensions:function(){o.callback(this.options.beforeSetDimensions,[this])},setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0},afterSetDimensions:function(){o.callback(this.options.afterSetDimensions,[this])},beforeDataLimits:function(){o.callback(this.options.beforeDataLimits,[this])},determineDataLimits:o.noop,afterDataLimits:function(){o.callback(this.options.afterDataLimits,[this])},beforeBuildTicks:function(){o.callback(this.options.beforeBuildTicks,[this])},buildTicks:o.noop,afterBuildTicks:function(){o.callback(this.options.afterBuildTicks,[this])},beforeTickToLabelConversion:function(){o.callback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){var t=this.options.ticks;this.ticks=this.ticks.map(t.userCallback||t.callback,this)},afterTickToLabelConversion:function(){o.callback(this.options.afterTickToLabelConversion,[this])},beforeCalculateTickRotation:function(){o.callback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var t=this,e=t.ctx,i=t.options.ticks,l=r(t._ticks),n=u(i);e.font=n.font;var a=i.minRotation||0;if(l.length&&t.options.display&&t.isHorizontal())for(var s,c=o.longestText(e,n.font,l,t.longestTextCache),d=c,h=t.getPixelForTick(1)-t.getPixelForTick(0)-6;d>h&&a<i.maxRotation;){var p=o.toRadians(a);if(s=Math.cos(p),Math.sin(p)*c>t.maxHeight){a--;break}a++,d=s*c}t.labelRotation=a},afterCalculateTickRotation:function(){o.callback(this.options.afterCalculateTickRotation,[this])},beforeFit:function(){o.callback(this.options.beforeFit,[this])},fit:function(){var t=this,e=t.minSize={width:0,height:0},i=r(t._ticks),l=t.options,n=l.ticks,a=l.scaleLabel,s=l.gridLines,h=l.display,p=t.isHorizontal(),f=u(n),m=l.gridLines.tickMarkLength;if(e.width=p?t.isFullWidth()?t.maxWidth-t.margins.left-t.margins.right:t.maxWidth:h&&s.drawTicks?m:0,e.height=p?h&&s.drawTicks?m:0:t.maxHeight,a.display&&h){var v=d(a)+o.options.toPadding(a.padding).height;p?e.height+=v:e.width+=v}if(n.display&&h){var g=o.longestText(t.ctx,f.font,i,t.longestTextCache),y=o.numberOfLabelLines(i),b=.5*f.size,x=t.options.ticks.padding;if(p){t.longestLabelWidth=g;var w=o.toRadians(t.labelRotation),k=Math.cos(w),S=Math.sin(w)*g+f.size*y+b*(y-1)+b;e.height=Math.min(t.maxHeight,e.height+S+x),t.ctx.font=f.font;var M=c(t.ctx,i[0],f.font),C=c(t.ctx,i[i.length-1],f.font);0!==t.labelRotation?(t.paddingLeft="bottom"===l.position?k*M+3:k*b+3,t.paddingRight="bottom"===l.position?k*b+3:k*C+3):(t.paddingLeft=M/2+3,t.paddingRight=C/2+3)}else n.mirror?g=0:g+=x+b,e.width=Math.min(t.maxWidth,e.width+g),t.paddingTop=f.size/2,t.paddingBottom=f.size/2}t.handleMargins(),t.width=e.width,t.height=e.height},handleMargins:function(){var t=this;t.margins&&(t.paddingLeft=Math.max(t.paddingLeft-t.margins.left,0),t.paddingTop=Math.max(t.paddingTop-t.margins.top,0),t.paddingRight=Math.max(t.paddingRight-t.margins.right,0),t.paddingBottom=Math.max(t.paddingBottom-t.margins.bottom,0))},afterFit:function(){o.callback(this.options.afterFit,[this])},isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},isFullWidth:function(){return this.options.fullWidth},getRightValue:function(t){if(o.isNullOrUndef(t))return NaN;if("number"==typeof t&&!isFinite(t))return NaN;if(t)if(this.isHorizontal()){if(void 0!==t.x)return this.getRightValue(t.x)}else if(void 0!==t.y)return this.getRightValue(t.y);return t},getLabelForIndex:o.noop,getPixelForValue:o.noop,getValueForPixel:o.noop,getPixelForTick:function(t){var e=this,i=e.options.offset;if(e.isHorizontal()){var l=(e.width-(e.paddingLeft+e.paddingRight))/Math.max(e._ticks.length-(i?0:1),1),n=l*t+e.paddingLeft;i&&(n+=l/2);var o=e.left+Math.round(n);return o+=e.isFullWidth()?e.margins.left:0}var a=e.height-(e.paddingTop+e.paddingBottom);return e.top+t*(a/(e._ticks.length-1))},getPixelForDecimal:function(t){var e=this;if(e.isHorizontal()){var i=(e.width-(e.paddingLeft+e.paddingRight))*t+e.paddingLeft,l=e.left+Math.round(i);return l+=e.isFullWidth()?e.margins.left:0}return e.top+t*e.height},getBasePixel:function(){return this.getPixelForValue(this.getBaseValue())},getBaseValue:function(){var t=this.min,e=this.max;return this.beginAtZero?0:t<0&&e<0?e:t>0&&e>0?t:0},_autoSkip:function(t){var e,i,l,n,a=this,r=a.isHorizontal(),s=a.options.ticks.minor,c=t.length,u=o.toRadians(a.labelRotation),d=Math.cos(u),h=a.longestLabelWidth*d,p=[];for(s.maxTicksLimit&&(n=s.maxTicksLimit),r&&(e=!1,(h+s.autoSkipPadding)*c>a.width-(a.paddingLeft+a.paddingRight)&&(e=1+Math.floor((h+s.autoSkipPadding)*c/(a.width-(a.paddingLeft+a.paddingRight)))),n&&c>n&&(e=Math.max(e,Math.floor(c/n)))),i=0;i<c;i++)l=t[i],(e>1&&i%e>0||i%e==0&&i+e>=c)&&i!==c-1&&delete l.label,p.push(l);return p},draw:function(t){var e=this,i=e.options;if(i.display){var n=e.ctx,a=l.global,r=i.ticks.minor,c=i.ticks.major||r,h=i.gridLines,p=i.scaleLabel,f=0!==e.labelRotation,m=e.isHorizontal(),v=r.autoSkip?e._autoSkip(e.getTicks()):e.getTicks(),g=o.valueOrDefault(r.fontColor,a.defaultFontColor),y=u(r),b=o.valueOrDefault(c.fontColor,a.defaultFontColor),x=u(c),w=h.drawTicks?h.tickMarkLength:0,k=o.valueOrDefault(p.fontColor,a.defaultFontColor),S=u(p),M=o.options.toPadding(p.padding),C=o.toRadians(e.labelRotation),T=[],A=e.options.gridLines.lineWidth,O="right"===i.position?e.left:e.right-A-w,E="right"===i.position?e.left+w:e.right,P="bottom"===i.position?e.top+A:e.bottom-w-A,I="bottom"===i.position?e.top+A+w:e.bottom+A;if(o.each(v,(function(l,n){if(!o.isNullOrUndef(l.label)){var c,u,d,p,g,y,b,x,k,S,M,_,$,D,L=l.label;n===e.zeroLineIndex&&i.offset===h.offsetGridLines?(c=h.zeroLineWidth,u=h.zeroLineColor,d=h.zeroLineBorderDash,p=h.zeroLineBorderDashOffset):(c=o.valueAtIndexOrDefault(h.lineWidth,n),u=o.valueAtIndexOrDefault(h.color,n),d=o.valueOrDefault(h.borderDash,a.borderDash),p=o.valueOrDefault(h.borderDashOffset,a.borderDashOffset));var R="middle",V="middle",F=r.padding;if(m){var W=w+F;"bottom"===i.position?(V=f?"middle":"top",R=f?"right":"center",D=e.top+W):(V=f?"middle":"bottom",R=f?"left":"center",D=e.bottom-W);var j=s(e,n,h.offsetGridLines&&v.length>1);j<e.left&&(u="rgba(0,0,0,0)"),j+=o.aliasPixel(c),$=e.getPixelForTick(n)+r.labelOffset,g=b=k=M=j,y=P,x=I,S=t.top,_=t.bottom+A}else{var N,z="left"===i.position;r.mirror?(R=z?"left":"right",N=F):(R=z?"right":"left",N=w+F),$=z?e.right-N:e.left+N;var B=s(e,n,h.offsetGridLines&&v.length>1);B<e.top&&(u="rgba(0,0,0,0)"),B+=o.aliasPixel(c),D=e.getPixelForTick(n)+r.labelOffset,g=O,b=E,k=t.left,M=t.right+A,y=x=S=_=B}T.push({tx1:g,ty1:y,tx2:b,ty2:x,x1:k,y1:S,x2:M,y2:_,labelX:$,labelY:D,glWidth:c,glColor:u,glBorderDash:d,glBorderDashOffset:p,rotation:-1*C,label:L,major:l.major,textBaseline:V,textAlign:R})}})),o.each(T,(function(t){if(h.display&&(n.save(),n.lineWidth=t.glWidth,n.strokeStyle=t.glColor,n.setLineDash&&(n.setLineDash(t.glBorderDash),n.lineDashOffset=t.glBorderDashOffset),n.beginPath(),h.drawTicks&&(n.moveTo(t.tx1,t.ty1),n.lineTo(t.tx2,t.ty2)),h.drawOnChartArea&&(n.moveTo(t.x1,t.y1),n.lineTo(t.x2,t.y2)),n.stroke(),n.restore()),r.display){n.save(),n.translate(t.labelX,t.labelY),n.rotate(t.rotation),n.font=t.major?x.font:y.font,n.fillStyle=t.major?b:g,n.textBaseline=t.textBaseline,n.textAlign=t.textAlign;var i=t.label;if(o.isArray(i))for(var l=i.length,a=1.5*y.size,s=e.isHorizontal()?0:-a*(l-1)/2,c=0;c<l;++c)n.fillText(""+i[c],0,s),s+=a;else n.fillText(i,0,0);n.restore()}})),p.display){var _,$,D=0,L=d(p)/2;if(m)_=e.left+(e.right-e.left)/2,$="bottom"===i.position?e.bottom-L-M.bottom:e.top+L+M.top;else{var R="left"===i.position;_=R?e.left+L+M.top:e.right-L-M.top,$=e.top+(e.bottom-e.top)/2,D=R?-.5*Math.PI:.5*Math.PI}n.save(),n.translate(_,$),n.rotate(D),n.textAlign="center",n.textBaseline="middle",n.fillStyle=k,n.font=S.font,n.fillText(p.labelString,0,0),n.restore()}if(h.drawBorder){n.lineWidth=o.valueAtIndexOrDefault(h.lineWidth,0),n.strokeStyle=o.valueAtIndexOrDefault(h.color,0);var V=e.left,F=e.right+A,W=e.top,j=e.bottom+A,N=o.aliasPixel(n.lineWidth);m?(W=j="top"===i.position?e.bottom:e.top,W+=N,j+=N):(V=F="left"===i.position?e.right:e.left,V+=N,F+=N),n.beginPath(),n.moveTo(V,W),n.lineTo(F,j),n.stroke()}}}})},{26:26,27:27,35:35,46:46}],34:[function(t,e,i){var l=t(26),n=t(46),o=t(31);e.exports={constructors:{},defaults:{},registerScaleType:function(t,e,i){this.constructors[t]=e,this.defaults[t]=n.clone(i)},getScaleConstructor:function(t){return this.constructors.hasOwnProperty(t)?this.constructors[t]:void 0},getScaleDefaults:function(t){return this.defaults.hasOwnProperty(t)?n.merge({},[l.scale,this.defaults[t]]):{}},updateScaleDefaults:function(t,e){this.defaults.hasOwnProperty(t)&&(this.defaults[t]=n.extend(this.defaults[t],e))},addScalesToLayout:function(t){n.each(t.scales,(function(e){e.fullWidth=e.options.fullWidth,e.position=e.options.position,e.weight=e.options.weight,o.addBox(t,e)}))}}},{26:26,31:31,46:46}],35:[function(t,e,i){var l=t(46);e.exports={formatters:{values:function(t){return l.isArray(t)?t:""+t},linear:function(t,e,i){var n=i.length>3?i[2]-i[1]:i[1]-i[0];Math.abs(n)>1&&t!==Math.floor(t)&&(n=t-Math.floor(t));var o=l.log10(Math.abs(n)),a="";if(0!==t)if(Math.max(Math.abs(i[0]),Math.abs(i[i.length-1]))<1e-4){var r=l.log10(Math.abs(t));a=t.toExponential(Math.floor(r)-Math.floor(o))}else{var s=-1*Math.floor(o);s=Math.max(Math.min(s,20),0),a=t.toFixed(s)}else a="0";return a},logarithmic:function(t,e,i){var n=t/Math.pow(10,Math.floor(l.log10(t)));return 0===t?"0":1===n||2===n||5===n||0===e||e===i.length-1?t.toExponential():""}}}},{46:46}],36:[function(t,e,i){var l=t(26),n=t(27),o=t(46);l._set("global",{tooltips:{enabled:!0,custom:null,mode:"nearest",position:"average",intersect:!0,backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleFontColor:"#fff",titleAlign:"left",bodySpacing:2,bodyFontColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerFontColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,caretPadding:2,caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",displayColors:!0,borderColor:"rgba(0,0,0,0)",borderWidth:0,callbacks:{beforeTitle:o.noop,title:function(t,e){var i="",l=e.labels,n=l?l.length:0;if(t.length>0){var o=t[0];o.xLabel?i=o.xLabel:n>0&&o.index<n&&(i=l[o.index])}return i},afterTitle:o.noop,beforeBody:o.noop,beforeLabel:o.noop,label:function(t,e){var i=e.datasets[t.datasetIndex].label||"";return i&&(i+=": "),i+=t.yLabel,i},labelColor:function(t,e){var i=e.getDatasetMeta(t.datasetIndex).data[t.index]._view;return{borderColor:i.borderColor,backgroundColor:i.backgroundColor}},labelTextColor:function(){return this._options.bodyFontColor},afterLabel:o.noop,afterBody:o.noop,beforeFooter:o.noop,footer:o.noop,afterFooter:o.noop}}});var a={average:function(t){if(!t.length)return!1;var e,i,l=0,n=0,o=0;for(e=0,i=t.length;e<i;++e){var a=t[e];if(a&&a.hasValue()){var r=a.tooltipPosition();l+=r.x,n+=r.y,++o}}return{x:Math.round(l/o),y:Math.round(n/o)}},nearest:function(t,e){var i,l,n,a=e.x,r=e.y,s=Number.POSITIVE_INFINITY;for(i=0,l=t.length;i<l;++i){var c=t[i];if(c&&c.hasValue()){var u=c.getCenterPoint(),d=o.distanceBetweenPoints(e,u);d<s&&(s=d,n=c)}}if(n){var h=n.tooltipPosition();a=h.x,r=h.y}return{x:a,y:r}}};function r(t,e){var i=o.color(t);return i.alpha(e*i.alpha()).rgbaString()}function s(t,e){return e&&(o.isArray(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function c(t){return("string"==typeof t||t instanceof String)&&t.indexOf("\n")>-1?t.split("\n"):t}function u(t){var e=l.global,i=o.valueOrDefault;return{xPadding:t.xPadding,yPadding:t.yPadding,xAlign:t.xAlign,yAlign:t.yAlign,bodyFontColor:t.bodyFontColor,_bodyFontFamily:i(t.bodyFontFamily,e.defaultFontFamily),_bodyFontStyle:i(t.bodyFontStyle,e.defaultFontStyle),_bodyAlign:t.bodyAlign,bodyFontSize:i(t.bodyFontSize,e.defaultFontSize),bodySpacing:t.bodySpacing,titleFontColor:t.titleFontColor,_titleFontFamily:i(t.titleFontFamily,e.defaultFontFamily),_titleFontStyle:i(t.titleFontStyle,e.defaultFontStyle),titleFontSize:i(t.titleFontSize,e.defaultFontSize),_titleAlign:t.titleAlign,titleSpacing:t.titleSpacing,titleMarginBottom:t.titleMarginBottom,footerFontColor:t.footerFontColor,_footerFontFamily:i(t.footerFontFamily,e.defaultFontFamily),_footerFontStyle:i(t.footerFontStyle,e.defaultFontStyle),footerFontSize:i(t.footerFontSize,e.defaultFontSize),_footerAlign:t.footerAlign,footerSpacing:t.footerSpacing,footerMarginTop:t.footerMarginTop,caretSize:t.caretSize,cornerRadius:t.cornerRadius,backgroundColor:t.backgroundColor,opacity:0,legendColorBackground:t.multiKeyBackground,displayColors:t.displayColors,borderColor:t.borderColor,borderWidth:t.borderWidth}}function d(t){return s([],c(t))}(e.exports=n.extend({initialize:function(){this._model=u(this._options),this._lastActive=[]},getTitle:function(){var t=this,e=t._options,i=e.callbacks,l=i.beforeTitle.apply(t,arguments),n=i.title.apply(t,arguments),o=i.afterTitle.apply(t,arguments),a=[];return a=s(a,c(l)),a=s(a,c(n)),a=s(a,c(o))},getBeforeBody:function(){return d(this._options.callbacks.beforeBody.apply(this,arguments))},getBody:function(t,e){var i=this,l=i._options.callbacks,n=[];return o.each(t,(function(t){var o={before:[],lines:[],after:[]};s(o.before,c(l.beforeLabel.call(i,t,e))),s(o.lines,l.label.call(i,t,e)),s(o.after,c(l.afterLabel.call(i,t,e))),n.push(o)})),n},getAfterBody:function(){return d(this._options.callbacks.afterBody.apply(this,arguments))},getFooter:function(){var t=this,e=t._options.callbacks,i=e.beforeFooter.apply(t,arguments),l=e.footer.apply(t,arguments),n=e.afterFooter.apply(t,arguments),o=[];return o=s(o,c(i)),o=s(o,c(l)),o=s(o,c(n))},update:function(t){var e,i,l,n,r,s,c,d=this,h=d._options,p=d._model,f=d._model=u(h),m=d._active,v=d._data,g={xAlign:p.xAlign,yAlign:p.yAlign},y={x:p.x,y:p.y},b={width:p.width,height:p.height},x={x:p.caretX,y:p.caretY};if(m.length){f.opacity=1;var w=[],k=[];x=a[h.position].call(d,m,d._eventPosition);var S=[];for(e=0,i=m.length;e<i;++e)S.push((l=m[e],n=void 0,r=void 0,s=void 0,c=void 0,n=l._xScale,r=l._yScale||l._scale,s=l._index,c=l._datasetIndex,{xLabel:n?n.getLabelForIndex(s,c):"",yLabel:r?r.getLabelForIndex(s,c):"",index:s,datasetIndex:c,x:l._model.x,y:l._model.y}));h.filter&&(S=S.filter((function(t){return h.filter(t,v)}))),h.itemSort&&(S=S.sort((function(t,e){return h.itemSort(t,e,v)}))),o.each(S,(function(t){w.push(h.callbacks.labelColor.call(d,t,d._chart)),k.push(h.callbacks.labelTextColor.call(d,t,d._chart))})),f.title=d.getTitle(S,v),f.beforeBody=d.getBeforeBody(S,v),f.body=d.getBody(S,v),f.afterBody=d.getAfterBody(S,v),f.footer=d.getFooter(S,v),f.x=Math.round(x.x),f.y=Math.round(x.y),f.caretPadding=h.caretPadding,f.labelColors=w,f.labelTextColors=k,f.dataPoints=S,b=function(t,e){var i=t._chart.ctx,l=2*e.yPadding,n=0,a=e.body,r=a.reduce((function(t,e){return t+e.before.length+e.lines.length+e.after.length}),0);r+=e.beforeBody.length+e.afterBody.length;var s=e.title.length,c=e.footer.length,u=e.titleFontSize,d=e.bodyFontSize,h=e.footerFontSize;l+=s*u,l+=s?(s-1)*e.titleSpacing:0,l+=s?e.titleMarginBottom:0,l+=r*d,l+=r?(r-1)*e.bodySpacing:0,l+=c?e.footerMarginTop:0,l+=c*h,l+=c?(c-1)*e.footerSpacing:0;var p=0,f=function(t){n=Math.max(n,i.measureText(t).width+p)};return i.font=o.fontString(u,e._titleFontStyle,e._titleFontFamily),o.each(e.title,f),i.font=o.fontString(d,e._bodyFontStyle,e._bodyFontFamily),o.each(e.beforeBody.concat(e.afterBody),f),p=e.displayColors?d+2:0,o.each(a,(function(t){o.each(t.before,f),o.each(t.lines,f),o.each(t.after,f)})),p=0,i.font=o.fontString(h,e._footerFontStyle,e._footerFontFamily),o.each(e.footer,f),{width:n+=2*e.xPadding,height:l}}(this,f),y=function(t,e,i,l){var n=t.x,o=t.y,a=t.caretSize,r=t.caretPadding,s=t.cornerRadius,c=i.xAlign,u=i.yAlign,d=a+r,h=s+r;return"right"===c?n-=e.width:"center"===c&&((n-=e.width/2)+e.width>l.width&&(n=l.width-e.width),n<0&&(n=0)),"top"===u?o+=d:o-="bottom"===u?e.height+d:e.height/2,"center"===u?"left"===c?n+=d:"right"===c&&(n-=d):"left"===c?n-=h:"right"===c&&(n+=h),{x:n,y:o}}(f,b,g=function(t,e){var i,l,n,o,a,r=t._model,s=t._chart,c=t._chart.chartArea,u="center",d="center";r.y<e.height?d="top":r.y>s.height-e.height&&(d="bottom");var h=(c.left+c.right)/2,p=(c.top+c.bottom)/2;"center"===d?(i=function(t){return t<=h},l=function(t){return t>h}):(i=function(t){return t<=e.width/2},l=function(t){return t>=s.width-e.width/2}),n=function(t){return t+e.width+r.caretSize+r.caretPadding>s.width},o=function(t){return t-e.width-r.caretSize-r.caretPadding<0},a=function(t){return t<=p?"top":"bottom"},i(r.x)?(u="left",n(r.x)&&(u="center",d=a(r.y))):l(r.x)&&(u="right",o(r.x)&&(u="center",d=a(r.y)));var f=t._options;return{xAlign:f.xAlign?f.xAlign:u,yAlign:f.yAlign?f.yAlign:d}}(this,b),d._chart)}else f.opacity=0;return f.xAlign=g.xAlign,f.yAlign=g.yAlign,f.x=y.x,f.y=y.y,f.width=b.width,f.height=b.height,f.caretX=x.x,f.caretY=x.y,d._model=f,t&&h.custom&&h.custom.call(d,f),d},drawCaret:function(t,e){var i=this._chart.ctx,l=this._view,n=this.getCaretPosition(t,e,l);i.lineTo(n.x1,n.y1),i.lineTo(n.x2,n.y2),i.lineTo(n.x3,n.y3)},getCaretPosition:function(t,e,i){var l,n,o,a,r,s,c=i.caretSize,u=i.cornerRadius,d=i.xAlign,h=i.yAlign,p=t.x,f=t.y,m=e.width,v=e.height;if("center"===h)r=f+v/2,"left"===d?(n=(l=p)-c,o=l,a=r+c,s=r-c):(n=(l=p+m)+c,o=l,a=r-c,s=r+c);else if("left"===d?(l=(n=p+u+c)-c,o=n+c):"right"===d?(l=(n=p+m-u-c)-c,o=n+c):(l=(n=i.caretX)-c,o=n+c),"top"===h)r=(a=f)-c,s=a;else{r=(a=f+v)+c,s=a;var g=o;o=l,l=g}return{x1:l,x2:n,x3:o,y1:a,y2:r,y3:s}},drawTitle:function(t,e,i,l){var n=e.title;if(n.length){i.textAlign=e._titleAlign,i.textBaseline="top";var a,s,c=e.titleFontSize,u=e.titleSpacing;for(i.fillStyle=r(e.titleFontColor,l),i.font=o.fontString(c,e._titleFontStyle,e._titleFontFamily),a=0,s=n.length;a<s;++a)i.fillText(n[a],t.x,t.y),t.y+=c+u,a+1===n.length&&(t.y+=e.titleMarginBottom-u)}},drawBody:function(t,e,i,l){var n=e.bodyFontSize,a=e.bodySpacing,s=e.body;i.textAlign=e._bodyAlign,i.textBaseline="top",i.font=o.fontString(n,e._bodyFontStyle,e._bodyFontFamily);var c=0,u=function(e){i.fillText(e,t.x+c,t.y),t.y+=n+a};i.fillStyle=r(e.bodyFontColor,l),o.each(e.beforeBody,u);var d=e.displayColors;c=d?n+2:0,o.each(s,(function(a,s){var c=r(e.labelTextColors[s],l);i.fillStyle=c,o.each(a.before,u),o.each(a.lines,(function(o){d&&(i.fillStyle=r(e.legendColorBackground,l),i.fillRect(t.x,t.y,n,n),i.lineWidth=1,i.strokeStyle=r(e.labelColors[s].borderColor,l),i.strokeRect(t.x,t.y,n,n),i.fillStyle=r(e.labelColors[s].backgroundColor,l),i.fillRect(t.x+1,t.y+1,n-2,n-2),i.fillStyle=c),u(o)})),o.each(a.after,u)})),c=0,o.each(e.afterBody,u),t.y-=a},drawFooter:function(t,e,i,l){var n=e.footer;n.length&&(t.y+=e.footerMarginTop,i.textAlign=e._footerAlign,i.textBaseline="top",i.fillStyle=r(e.footerFontColor,l),i.font=o.fontString(e.footerFontSize,e._footerFontStyle,e._footerFontFamily),o.each(n,(function(l){i.fillText(l,t.x,t.y),t.y+=e.footerFontSize+e.footerSpacing})))},drawBackground:function(t,e,i,l,n){i.fillStyle=r(e.backgroundColor,n),i.strokeStyle=r(e.borderColor,n),i.lineWidth=e.borderWidth;var o=e.xAlign,a=e.yAlign,s=t.x,c=t.y,u=l.width,d=l.height,h=e.cornerRadius;i.beginPath(),i.moveTo(s+h,c),"top"===a&&this.drawCaret(t,l),i.lineTo(s+u-h,c),i.quadraticCurveTo(s+u,c,s+u,c+h),"center"===a&&"right"===o&&this.drawCaret(t,l),i.lineTo(s+u,c+d-h),i.quadraticCurveTo(s+u,c+d,s+u-h,c+d),"bottom"===a&&this.drawCaret(t,l),i.lineTo(s+h,c+d),i.quadraticCurveTo(s,c+d,s,c+d-h),"center"===a&&"left"===o&&this.drawCaret(t,l),i.lineTo(s,c+h),i.quadraticCurveTo(s,c,s+h,c),i.closePath(),i.fill(),e.borderWidth>0&&i.stroke()},draw:function(){var t=this._chart.ctx,e=this._view;if(0!==e.opacity){var i={width:e.width,height:e.height},l={x:e.x,y:e.y},n=Math.abs(e.opacity<.001)?0:e.opacity,o=e.title.length||e.beforeBody.length||e.body.length||e.afterBody.length||e.footer.length;this._options.enabled&&o&&(this.drawBackground(l,e,t,i,n),l.x+=e.xPadding,l.y+=e.yPadding,this.drawTitle(l,e,t,n),this.drawBody(l,e,t,n),this.drawFooter(l,e,t,n))}},handleEvent:function(t){var e,i=this,l=i._options;return i._lastActive=i._lastActive||[],"mouseout"===t.type?i._active=[]:i._active=i._chart.getElementsAtEventForMode(t,l.mode,l),(e=!o.arrayEquals(i._active,i._lastActive))&&(i._lastActive=i._active,(l.enabled||l.custom)&&(i._eventPosition={x:t.x,y:t.y},i.update(!0),i.pivot())),e}})).positioners=a},{26:26,27:27,46:46}],37:[function(t,e,i){var l=t(26),n=t(27),o=t(46);l._set("global",{elements:{arc:{backgroundColor:l.global.defaultColor,borderColor:"#fff",borderWidth:2}}}),e.exports=n.extend({inLabelRange:function(t){var e=this._view;return!!e&&Math.pow(t-e.x,2)<Math.pow(e.radius+e.hoverRadius,2)},inRange:function(t,e){var i=this._view;if(i){for(var l=o.getAngleFromPoint(i,{x:t,y:e}),n=l.angle,a=l.distance,r=i.startAngle,s=i.endAngle;s<r;)s+=2*Math.PI;for(;n>s;)n-=2*Math.PI;for(;n<r;)n+=2*Math.PI;var c=n>=r&&n<=s,u=a>=i.innerRadius&&a<=i.outerRadius;return c&&u}return!1},getCenterPoint:function(){var t=this._view,e=(t.startAngle+t.endAngle)/2,i=(t.innerRadius+t.outerRadius)/2;return{x:t.x+Math.cos(e)*i,y:t.y+Math.sin(e)*i}},getArea:function(){var t=this._view;return Math.PI*((t.endAngle-t.startAngle)/(2*Math.PI))*(Math.pow(t.outerRadius,2)-Math.pow(t.innerRadius,2))},tooltipPosition:function(){var t=this._view,e=t.startAngle+(t.endAngle-t.startAngle)/2,i=(t.outerRadius-t.innerRadius)/2+t.innerRadius;return{x:t.x+Math.cos(e)*i,y:t.y+Math.sin(e)*i}},draw:function(){var t=this._chart.ctx,e=this._view,i=e.startAngle,l=e.endAngle;t.beginPath(),t.arc(e.x,e.y,e.outerRadius,i,l),t.arc(e.x,e.y,e.innerRadius,l,i,!0),t.closePath(),t.strokeStyle=e.borderColor,t.lineWidth=e.borderWidth,t.fillStyle=e.backgroundColor,t.fill(),t.lineJoin="bevel",e.borderWidth&&t.stroke()}})},{26:26,27:27,46:46}],38:[function(t,e,i){var l=t(26),n=t(27),o=t(46),a=l.global;l._set("global",{elements:{line:{tension:.4,backgroundColor:a.defaultColor,borderWidth:3,borderColor:a.defaultColor,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",capBezierPoints:!0,fill:!0}}}),e.exports=n.extend({draw:function(){var t,e,i,l,n=this._view,r=this._chart.ctx,s=n.spanGaps,c=this._children.slice(),u=a.elements.line,d=-1;for(this._loop&&c.length&&c.push(c[0]),r.save(),r.lineCap=n.borderCapStyle||u.borderCapStyle,r.setLineDash&&r.setLineDash(n.borderDash||u.borderDash),r.lineDashOffset=n.borderDashOffset||u.borderDashOffset,r.lineJoin=n.borderJoinStyle||u.borderJoinStyle,r.lineWidth=n.borderWidth||u.borderWidth,r.strokeStyle=n.borderColor||a.defaultColor,r.beginPath(),d=-1,t=0;t<c.length;++t)e=c[t],i=o.previousItem(c,t),l=e._view,0===t?l.skip||(r.moveTo(l.x,l.y),d=t):(i=-1===d?i:c[d],l.skip||(d!==t-1&&!s||-1===d?r.moveTo(l.x,l.y):o.canvas.lineTo(r,i._view,e._view),d=t));r.stroke(),r.restore()}})},{26:26,27:27,46:46}],39:[function(t,e,i){var l=t(26),n=t(27),o=t(46),a=l.global.defaultColor;function r(t){var e=this._view;return!!e&&Math.abs(t-e.x)<e.radius+e.hitRadius}l._set("global",{elements:{point:{radius:3,pointStyle:"circle",backgroundColor:a,borderColor:a,borderWidth:1,hitRadius:1,hoverRadius:4,hoverBorderWidth:1}}}),e.exports=n.extend({inRange:function(t,e){var i=this._view;return!!i&&Math.pow(t-i.x,2)+Math.pow(e-i.y,2)<Math.pow(i.hitRadius+i.radius,2)},inLabelRange:r,inXRange:r,inYRange:function(t){var e=this._view;return!!e&&Math.abs(t-e.y)<e.radius+e.hitRadius},getCenterPoint:function(){var t=this._view;return{x:t.x,y:t.y}},getArea:function(){return Math.PI*Math.pow(this._view.radius,2)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y,padding:t.radius+t.borderWidth}},draw:function(t){var e=this._view,i=this._model,n=this._chart.ctx,r=e.pointStyle,s=e.rotation,c=e.radius,u=e.x,d=e.y;e.skip||(void 0===t||i.x>=t.left&&1.01*t.right>=i.x&&i.y>=t.top&&1.01*t.bottom>=i.y)&&(n.strokeStyle=e.borderColor||a,n.lineWidth=o.valueOrDefault(e.borderWidth,l.global.elements.point.borderWidth),n.fillStyle=e.backgroundColor||a,o.canvas.drawPoint(n,r,c,u,d,s))}})},{26:26,27:27,46:46}],40:[function(t,e,i){var l=t(26),n=t(27);function o(t){return void 0!==t._view.width}function a(t){var e,i,l,n,a=t._view;if(o(t)){var r=a.width/2;e=a.x-r,i=a.x+r,l=Math.min(a.y,a.base),n=Math.max(a.y,a.base)}else{var s=a.height/2;e=Math.min(a.x,a.base),i=Math.max(a.x,a.base),l=a.y-s,n=a.y+s}return{left:e,top:l,right:i,bottom:n}}l._set("global",{elements:{rectangle:{backgroundColor:l.global.defaultColor,borderColor:l.global.defaultColor,borderSkipped:"bottom",borderWidth:0}}}),e.exports=n.extend({draw:function(){var t,e,i,l,n,o,a,r=this._chart.ctx,s=this._view,c=s.borderWidth;if(s.horizontal?(t=s.base,e=s.x,i=s.y-s.height/2,l=s.y+s.height/2,n=e>t?1:-1,o=1,a=s.borderSkipped||"left"):(t=s.x-s.width/2,e=s.x+s.width/2,i=s.y,n=1,o=(l=s.base)>i?1:-1,a=s.borderSkipped||"bottom"),c){var u=Math.min(Math.abs(t-e),Math.abs(i-l)),d=(c=c>u?u:c)/2,h=t+("left"!==a?d*n:0),p=e+("right"!==a?-d*n:0),f=i+("top"!==a?d*o:0),m=l+("bottom"!==a?-d*o:0);h!==p&&(i=f,l=m),f!==m&&(t=h,e=p)}r.beginPath(),r.fillStyle=s.backgroundColor,r.strokeStyle=s.borderColor,r.lineWidth=c;var v=[[t,l],[t,i],[e,i],[e,l]],g=["bottom","left","top","right"].indexOf(a,0);function y(t){return v[(g+t)%4]}-1===g&&(g=0);var b=y(0);r.moveTo(b[0],b[1]);for(var x=1;x<4;x++)b=y(x),r.lineTo(b[0],b[1]);r.fill(),c&&r.stroke()},height:function(){var t=this._view;return t.base-t.y},inRange:function(t,e){var i=!1;if(this._view){var l=a(this);i=t>=l.left&&t<=l.right&&e>=l.top&&e<=l.bottom}return i},inLabelRange:function(t,e){if(!this._view)return!1;var i=a(this);return o(this)?t>=i.left&&t<=i.right:e>=i.top&&e<=i.bottom},inXRange:function(t){var e=a(this);return t>=e.left&&t<=e.right},inYRange:function(t){var e=a(this);return t>=e.top&&t<=e.bottom},getCenterPoint:function(){var t,e,i=this._view;return o(this)?(t=i.x,e=(i.y+i.base)/2):(t=(i.x+i.base)/2,e=i.y),{x:t,y:e}},getArea:function(){var t=this._view;return t.width*Math.abs(t.y-t.base)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y}}})},{26:26,27:27}],41:[function(t,e,i){e.exports={},e.exports.Arc=t(37),e.exports.Line=t(38),e.exports.Point=t(39),e.exports.Rectangle=t(40)},{37:37,38:38,39:39,40:40}],42:[function(t,e,i){var l=t(43);i=e.exports={clear:function(t){t.ctx.clearRect(0,0,t.width,t.height)},roundedRect:function(t,e,i,l,n,o){if(o){var a=Math.min(o,n/2-1e-7,l/2-1e-7);t.moveTo(e+a,i),t.lineTo(e+l-a,i),t.arcTo(e+l,i,e+l,i+a,a),t.lineTo(e+l,i+n-a),t.arcTo(e+l,i+n,e+l-a,i+n,a),t.lineTo(e+a,i+n),t.arcTo(e,i+n,e,i+n-a,a),t.lineTo(e,i+a),t.arcTo(e,i,e+a,i,a),t.closePath(),t.moveTo(e,i)}else t.rect(e,i,l,n)},drawPoint:function(t,e,i,l,o,a){var r,s,c,u,d,h;if(a=a||0,!e||"object"!==n(e)||"[object HTMLImageElement]"!==(r=e.toString())&&"[object HTMLCanvasElement]"!==r){if(!(isNaN(i)||i<=0)){switch(t.save(),t.translate(l,o),t.rotate(a*Math.PI/180),t.beginPath(),e){default:t.arc(0,0,i,0,2*Math.PI),t.closePath();break;case"triangle":d=(s=3*i/Math.sqrt(3))*Math.sqrt(3)/2,t.moveTo(-s/2,d/3),t.lineTo(s/2,d/3),t.lineTo(0,-2*d/3),t.closePath();break;case"rect":h=1/Math.SQRT2*i,t.rect(-h,-h,2*h,2*h);break;case"rectRounded":var p=i/Math.SQRT2,f=-p,m=-p,v=Math.SQRT2*i;this.roundedRect(t,f,m,v,v,.425*i);break;case"rectRot":h=1/Math.SQRT2*i,t.moveTo(-h,0),t.lineTo(0,h),t.lineTo(h,0),t.lineTo(0,-h),t.closePath();break;case"cross":t.moveTo(0,i),t.lineTo(0,-i),t.moveTo(-i,0),t.lineTo(i,0);break;case"crossRot":c=Math.cos(Math.PI/4)*i,u=Math.sin(Math.PI/4)*i,t.moveTo(-c,-u),t.lineTo(c,u),t.moveTo(-c,u),t.lineTo(c,-u);break;case"star":t.moveTo(0,i),t.lineTo(0,-i),t.moveTo(-i,0),t.lineTo(i,0),c=Math.cos(Math.PI/4)*i,u=Math.sin(Math.PI/4)*i,t.moveTo(-c,-u),t.lineTo(c,u),t.moveTo(-c,u),t.lineTo(c,-u);break;case"line":t.moveTo(-i,0),t.lineTo(i,0);break;case"dash":t.moveTo(0,0),t.lineTo(i,0)}t.fill(),t.stroke(),t.restore()}}else t.drawImage(e,l-e.width/2,o-e.height/2,e.width,e.height)},clipArea:function(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()},unclipArea:function(t){t.restore()},lineTo:function(t,e,i,l){if(i.steppedLine)return"after"===i.steppedLine&&!l||"after"!==i.steppedLine&&l?t.lineTo(e.x,i.y):t.lineTo(i.x,e.y),void t.lineTo(i.x,i.y);i.tension?t.bezierCurveTo(l?e.controlPointPreviousX:e.controlPointNextX,l?e.controlPointPreviousY:e.controlPointNextY,l?i.controlPointNextX:i.controlPointPreviousX,l?i.controlPointNextY:i.controlPointPreviousY,i.x,i.y):t.lineTo(i.x,i.y)}};l.clear=i.clear,l.drawRoundedRectangle=function(t){t.beginPath(),i.roundedRect.apply(i,arguments)}},{43:43}],43:[function(t,e,i){var l,n={noop:function(){},uid:(l=0,function(){return l++}),isNullOrUndef:function(t){return null==t},isArray:Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},isObject:function(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)},valueOrDefault:function(t,e){return void 0===t?e:t},valueAtIndexOrDefault:function(t,e,i){return n.valueOrDefault(n.isArray(t)?t[e]:t,i)},callback:function(t,e,i){if(t&&"function"==typeof t.call)return t.apply(i,e)},each:function(t,e,i,l){var o,a,r;if(n.isArray(t))if(a=t.length,l)for(o=a-1;o>=0;o--)e.call(i,t[o],o);else for(o=0;o<a;o++)e.call(i,t[o],o);else if(n.isObject(t))for(a=(r=Object.keys(t)).length,o=0;o<a;o++)e.call(i,t[r[o]],r[o])},arrayEquals:function(t,e){var i,l,o,a;if(!t||!e||t.length!==e.length)return!1;for(i=0,l=t.length;i<l;++i)if(o=t[i],a=e[i],o instanceof Array&&a instanceof Array){if(!n.arrayEquals(o,a))return!1}else if(o!==a)return!1;return!0},clone:function(t){if(n.isArray(t))return t.map(n.clone);if(n.isObject(t)){for(var e={},i=Object.keys(t),l=i.length,o=0;o<l;++o)e[i[o]]=n.clone(t[i[o]]);return e}return t},_merger:function(t,e,i,l){var o=e[t],a=i[t];n.isObject(o)&&n.isObject(a)?n.merge(o,a,l):e[t]=n.clone(a)},_mergerIf:function(t,e,i){var l=e[t],o=i[t];n.isObject(l)&&n.isObject(o)?n.mergeIf(l,o):e.hasOwnProperty(t)||(e[t]=n.clone(o))},merge:function(t,e,i){var l,o,a,r,s,c=n.isArray(e)?e:[e],u=c.length;if(!n.isObject(t))return t;for(l=(i=i||{}).merger||n._merger,o=0;o<u;++o)if(e=c[o],n.isObject(e))for(s=0,r=(a=Object.keys(e)).length;s<r;++s)l(a[s],t,e,i);return t},mergeIf:function(t,e){return n.merge(t,e,{merger:n._mergerIf})},extend:function(t){for(var e=function(e,i){t[i]=e},i=1,l=arguments.length;i<l;++i)n.each(arguments[i],e);return t},inherits:function(t){var e=this,i=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return e.apply(this,arguments)},l=function(){this.constructor=i};return l.prototype=e.prototype,i.prototype=new l,i.extend=n.inherits,t&&n.extend(i.prototype,t),i.__super__=e.prototype,i}};e.exports=n,n.callCallback=n.callback,n.indexOf=function(t,e,i){return Array.prototype.indexOf.call(t,e,i)},n.getValueOrDefault=n.valueOrDefault,n.getValueAtIndexOrDefault=n.valueAtIndexOrDefault},{}],44:[function(t,e,i){var l=t(43),n={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return(t-=1)*t*t+1},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-((t-=1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return(t-=1)*t*t*t*t+1},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return 1-Math.cos(t*(Math.PI/2))},easeOutSine:function(t){return Math.sin(t*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},easeInExpo:function(t){return 0===t?0:Math.pow(2,10*(t-1))},easeOutExpo:function(t){return 1===t?1:1-Math.pow(2,-10*t)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},easeInCirc:function(t){return t>=1?t:-(Math.sqrt(1-t*t)-1)},easeOutCirc:function(t){return Math.sqrt(1-(t-=1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,i=0,l=1;return 0===t?0:1===t?1:(i||(i=.3),l<1?(l=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/l),-l*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i))},easeOutElastic:function(t){var e=1.70158,i=0,l=1;return 0===t?0:1===t?1:(i||(i=.3),l<1?(l=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/l),l*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/i)+1)},easeInOutElastic:function(t){var e=1.70158,i=0,l=1;return 0===t?0:2==(t/=.5)?1:(i||(i=.45),l<1?(l=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/l),t<1?l*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i)*-.5:l*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i)*.5+1)},easeInBack:function(t){var e=1.70158;return t*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:function(t){return 1-n.easeOutBounce(1-t)},easeOutBounce:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:function(t){return t<.5?.5*n.easeInBounce(2*t):.5*n.easeOutBounce(2*t-1)+.5}};e.exports={effects:n},l.easingEffects=n},{43:43}],45:[function(t,e,i){var l=t(43);e.exports={toLineHeight:function(t,e){var i=(""+t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);if(!i||"normal"===i[1])return 1.2*e;switch(t=+i[2],i[3]){case"px":return t;case"%":t/=100}return e*t},toPadding:function(t){var e,i,n,o;return l.isObject(t)?(e=+t.top||0,i=+t.right||0,n=+t.bottom||0,o=+t.left||0):e=i=n=o=+t||0,{top:e,right:i,bottom:n,left:o,height:e+n,width:o+i}},resolve:function(t,e,i){var n,o,a;for(n=0,o=t.length;n<o;++n)if(void 0!==(a=t[n])&&(void 0!==e&&"function"==typeof a&&(a=a(e)),void 0!==i&&l.isArray(a)&&(a=a[i]),void 0!==a))return a}}},{43:43}],46:[function(t,e,i){e.exports=t(43),e.exports.easing=t(44),e.exports.canvas=t(42),e.exports.options=t(45)},{42:42,43:43,44:44,45:45}],47:[function(t,e,i){e.exports={acquireContext:function(t){return t&&t.canvas&&(t=t.canvas),t&&t.getContext("2d")||null}}},{}],48:[function(t,e,i){var l=t(46),n="$chartjs",o="chartjs-",a=o+"render-monitor",r=o+"render-animation",s=["animationstart","webkitAnimationStart"],c={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"};function u(t,e){var i=l.getStyle(t,e),n=i&&i.match(/^(\d+)(\.\d+)?px$/);return n?Number(n[1]):void 0}var d=!!function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("e",null,e)}catch(t){}return t}()&&{passive:!0};function h(t,e,i){t.addEventListener(e,i,d)}function p(t,e,i){t.removeEventListener(e,i,d)}function f(t,e,i,l,n){return{type:t,chart:e,native:n||null,x:void 0!==i?i:null,y:void 0!==l?l:null}}function m(t,e,i){var c,u,d,p,m=t[n]||(t[n]={}),v=m.resizer=function(t){var e=document.createElement("div"),i=o+"size-monitor",l="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";e.style.cssText=l,e.className=i,e.innerHTML='<div class="'+i+'-expand" style="'+l+'"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="'+i+'-shrink" style="'+l+'"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';var n=e.childNodes[0],a=e.childNodes[1];e._reset=function(){n.scrollLeft=1e6,n.scrollTop=1e6,a.scrollLeft=1e6,a.scrollTop=1e6};var r=function(){e._reset(),t()};return h(n,"scroll",r.bind(n,"expand")),h(a,"scroll",r.bind(a,"shrink")),e}((c=function(){if(m.resizer)return e(f("resize",i))},d=!1,p=[],function(){p=Array.prototype.slice.call(arguments),u=u||this,d||(d=!0,l.requestAnimFrame.call(window,(function(){d=!1,c.apply(u,p)})))}));!function(t,e){var i=t[n]||(t[n]={}),o=i.renderProxy=function(t){t.animationName===r&&e()};l.each(s,(function(e){h(t,e,o)})),i.reflow=!!t.offsetParent,t.classList.add(a)}(t,(function(){if(m.resizer){var e=t.parentNode;e&&e!==v.parentNode&&e.insertBefore(v,e.firstChild),v._reset()}}))}function v(t){var e=t[n]||{},i=e.resizer;delete e.resizer,function(t){var e=t[n]||{},i=e.renderProxy;i&&(l.each(s,(function(e){p(t,e,i)})),delete e.renderProxy),t.classList.remove(a)}(t),i&&i.parentNode&&i.parentNode.removeChild(i)}e.exports={_enabled:"undefined"!=typeof window&&"undefined"!=typeof document,initialize:function(){var t,e,i,l="from{opacity:0.99}to{opacity:1}";e="@-webkit-keyframes "+r+"{"+l+"}@keyframes "+r+"{"+l+"}."+a+"{-webkit-animation:"+r+" 0.001s;animation:"+r+" 0.001s;}",i=(t=this)._style||document.createElement("style"),t._style||(t._style=i,e="/* Chart.js */\n"+e,i.setAttribute("type","text/css"),document.getElementsByTagName("head")[0].appendChild(i)),i.appendChild(document.createTextNode(e))},acquireContext:function(t,e){"string"==typeof t?t=document.getElementById(t):t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas);var i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(function(t,e){var i=t.style,l=t.getAttribute("height"),o=t.getAttribute("width");if(t[n]={initial:{height:l,width:o,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",null===o||""===o){var a=u(t,"width");void 0!==a&&(t.width=a)}if(null===l||""===l)if(""===t.style.height)t.height=t.width/(e.options.aspectRatio||2);else{var r=u(t,"height");void 0!==a&&(t.height=r)}}(t,e),i):null},releaseContext:function(t){var e=t.canvas;if(e[n]){var i=e[n].initial;["height","width"].forEach((function(t){var n=i[t];l.isNullOrUndef(n)?e.removeAttribute(t):e.setAttribute(t,n)})),l.each(i.style||{},(function(t,i){e.style[i]=t})),e.width=e.width,delete e[n]}},addEventListener:function(t,e,i){var o=t.canvas;if("resize"!==e){var a=i[n]||(i[n]={});h(o,e,(a.proxies||(a.proxies={}))[t.id+"_"+e]=function(e){i(function(t,e){var i=c[t.type]||t.type,n=l.getRelativePosition(t,e);return f(i,e,n.x,n.y,t)}(e,t))})}else m(o,i,t)},removeEventListener:function(t,e,i){var l=t.canvas;if("resize"!==e){var o=((i[n]||{}).proxies||{})[t.id+"_"+e];o&&p(l,e,o)}else v(l)}},l.addEvent=h,l.removeEvent=p},{46:46}],49:[function(t,e,i){var l=t(46),n=t(47),o=t(48),a=o._enabled?o:n;e.exports=l.extend({initialize:function(){},acquireContext:function(){},releaseContext:function(){},addEventListener:function(){},removeEventListener:function(){}},a)},{46:46,47:47,48:48}],50:[function(t,e,i){e.exports={},e.exports.filler=t(51),e.exports.legend=t(52),e.exports.title=t(53)},{51:51,52:52,53:53}],51:[function(t,e,i){var l=t(26),n=t(41),o=t(46);l._set("global",{plugins:{filler:{propagate:!0}}});var a={dataset:function(t){var e=t.fill,i=t.chart,l=i.getDatasetMeta(e),n=l&&i.isDatasetVisible(e)&&l.dataset._children||[],o=n.length||0;return o?function(t,e){return e<o&&n[e]._view||null}:null},boundary:function(t){var e=t.boundary,i=e?e.x:null,l=e?e.y:null;return function(t){return{x:null===i?t.x:i,y:null===l?t.y:l}}}};function r(t,e,i){var l,n=t._model||{},o=n.fill;if(void 0===o&&(o=!!n.backgroundColor),!1===o||null===o)return!1;if(!0===o)return"origin";if(l=parseFloat(o,10),isFinite(l)&&Math.floor(l)===l)return"-"!==o[0]&&"+"!==o[0]||(l=e+l),!(l===e||l<0||l>=i)&&l;switch(o){case"bottom":return"start";case"top":return"end";case"zero":return"origin";case"origin":case"start":case"end":return o;default:return!1}}function s(t){var e,i=t.el._model||{},l=t.el._scale||{},n=t.fill,o=null;if(isFinite(n))return null;if("start"===n?o=void 0===i.scaleBottom?l.bottom:i.scaleBottom:"end"===n?o=void 0===i.scaleTop?l.top:i.scaleTop:void 0!==i.scaleZero?o=i.scaleZero:l.getBasePosition?o=l.getBasePosition():l.getBasePixel&&(o=l.getBasePixel()),null!=o){if(void 0!==o.x&&void 0!==o.y)return o;if("number"==typeof o&&isFinite(o))return{x:(e=l.isHorizontal())?o:null,y:e?null:o}}return null}function c(t,e,i){var l,n=t[e].fill,o=[e];if(!i)return n;for(;!1!==n&&-1===o.indexOf(n);){if(!isFinite(n))return n;if(!(l=t[n]))return!1;if(l.visible)return n;o.push(n),n=l.fill}return!1}function u(t){var e=t.fill,i="dataset";return!1===e?null:(isFinite(e)||(i="boundary"),a[i](t))}function d(t){return t&&!t.skip}function h(t,e,i,l,n){var a;if(l&&n){for(t.moveTo(e[0].x,e[0].y),a=1;a<l;++a)o.canvas.lineTo(t,e[a-1],e[a]);for(t.lineTo(i[n-1].x,i[n-1].y),a=n-1;a>0;--a)o.canvas.lineTo(t,i[a],i[a-1],!0)}}e.exports={id:"filler",afterDatasetsUpdate:function(t,e){var i,l,o,a,d=(t.data.datasets||[]).length,h=e.propagate,p=[];for(l=0;l<d;++l)a=null,(o=(i=t.getDatasetMeta(l)).dataset)&&o._model&&o instanceof n.Line&&(a={visible:t.isDatasetVisible(l),fill:r(o,l,d),chart:t,el:o}),i.$filler=a,p.push(a);for(l=0;l<d;++l)(a=p[l])&&(a.fill=c(p,l,h),a.boundary=s(a),a.mapper=u(a))},beforeDatasetDraw:function(t,e){var i=e.meta.$filler;if(i){var n=t.ctx,a=i.el,r=a._view,s=a._children||[],c=i.mapper,u=r.backgroundColor||l.global.defaultColor;c&&u&&s.length&&(o.canvas.clipArea(n,t.chartArea),function(t,e,i,l,n,o){var a,r,s,c,u,p,f,m=e.length,v=l.spanGaps,g=[],y=[],b=0,x=0;for(t.beginPath(),a=0,r=m+!!o;a<r;++a)u=i(c=e[s=a%m]._view,s,l),p=d(c),f=d(u),p&&f?(b=g.push(c),x=y.push(u)):b&&x&&(v?(p&&g.push(c),f&&y.push(u)):(h(t,g,y,b,x),b=x=0,g=[],y=[]));h(t,g,y,b,x),t.closePath(),t.fillStyle=n,t.fill()}(n,s,c,r,u,a._loop),o.canvas.unclipArea(n))}}}},{26:26,41:41,46:46}],52:[function(t,e,i){var l=t(26),n=t(27),o=t(46),a=t(31),r=o.noop;function s(t,e){return t.usePointStyle?e*Math.SQRT2:t.boxWidth}l._set("global",{legend:{display:!0,position:"top",fullWidth:!0,reverse:!1,weight:1e3,onClick:function(t,e){var i=e.datasetIndex,l=this.chart,n=l.getDatasetMeta(i);n.hidden=null===n.hidden?!l.data.datasets[i].hidden:null,l.update()},onHover:null,labels:{boxWidth:40,padding:10,generateLabels:function(t){var e=t.data;return o.isArray(e.datasets)?e.datasets.map((function(e,i){return{text:e.label,fillStyle:o.isArray(e.backgroundColor)?e.backgroundColor[0]:e.backgroundColor,hidden:!t.isDatasetVisible(i),lineCap:e.borderCapStyle,lineDash:e.borderDash,lineDashOffset:e.borderDashOffset,lineJoin:e.borderJoinStyle,lineWidth:e.borderWidth,strokeStyle:e.borderColor,pointStyle:e.pointStyle,datasetIndex:i}}),this):[]}}},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');for(var i=0;i<t.data.datasets.length;i++)e.push('<li><span style="background-color:'+t.data.datasets[i].backgroundColor+'"></span>'),t.data.datasets[i].label&&e.push(t.data.datasets[i].label),e.push("</li>");return e.push("</ul>"),e.join("")}});var c=n.extend({initialize:function(t){o.extend(this,t),this.legendHitBoxes=[],this.doughnutMode=!1},beforeUpdate:r,update:function(t,e,i){var l=this;return l.beforeUpdate(),l.maxWidth=t,l.maxHeight=e,l.margins=i,l.beforeSetDimensions(),l.setDimensions(),l.afterSetDimensions(),l.beforeBuildLabels(),l.buildLabels(),l.afterBuildLabels(),l.beforeFit(),l.fit(),l.afterFit(),l.afterUpdate(),l.minSize},afterUpdate:r,beforeSetDimensions:r,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:r,beforeBuildLabels:r,buildLabels:function(){var t=this,e=t.options.labels||{},i=o.callback(e.generateLabels,[t.chart],t)||[];e.filter&&(i=i.filter((function(i){return e.filter(i,t.chart.data)}))),t.options.reverse&&i.reverse(),t.legendItems=i},afterBuildLabels:r,beforeFit:r,fit:function(){var t=this,e=t.options,i=e.labels,n=e.display,a=t.ctx,r=l.global,c=o.valueOrDefault,u=c(i.fontSize,r.defaultFontSize),d=c(i.fontStyle,r.defaultFontStyle),h=c(i.fontFamily,r.defaultFontFamily),p=o.fontString(u,d,h),f=t.legendHitBoxes=[],m=t.minSize,v=t.isHorizontal();if(v?(m.width=t.maxWidth,m.height=n?10:0):(m.width=n?10:0,m.height=t.maxHeight),n)if(a.font=p,v){var g=t.lineWidths=[0],y=t.legendItems.length?u+i.padding:0;a.textAlign="left",a.textBaseline="top",o.each(t.legendItems,(function(e,l){var n=s(i,u)+u/2+a.measureText(e.text).width;g[g.length-1]+n+i.padding>=t.width&&(y+=u+i.padding,g[g.length]=t.left),f[l]={left:0,top:0,width:n,height:u},g[g.length-1]+=n+i.padding})),m.height+=y}else{var b=i.padding,x=t.columnWidths=[],w=i.padding,k=0,S=0,M=u+b;o.each(t.legendItems,(function(t,e){var l=s(i,u)+u/2+a.measureText(t.text).width;S+M>m.height&&(w+=k+i.padding,x.push(k),k=0,S=0),k=Math.max(k,l),S+=M,f[e]={left:0,top:0,width:l,height:u}})),w+=k,x.push(k),m.width+=w}t.width=m.width,t.height=m.height},afterFit:r,isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},draw:function(){var t=this,e=t.options,i=e.labels,n=l.global,a=n.elements.line,r=t.width,c=t.lineWidths;if(e.display){var u,d=t.ctx,h=o.valueOrDefault,p=h(i.fontColor,n.defaultFontColor),f=h(i.fontSize,n.defaultFontSize),m=h(i.fontStyle,n.defaultFontStyle),v=h(i.fontFamily,n.defaultFontFamily),g=o.fontString(f,m,v);d.textAlign="left",d.textBaseline="middle",d.lineWidth=.5,d.strokeStyle=p,d.fillStyle=p,d.font=g;var y=s(i,f),b=t.legendHitBoxes,x=t.isHorizontal();u=x?{x:t.left+(r-c[0])/2,y:t.top+i.padding,line:0}:{x:t.left+i.padding,y:t.top+i.padding,line:0};var w=f+i.padding;o.each(t.legendItems,(function(l,s){var p=d.measureText(l.text).width,m=y+f/2+p,v=u.x,g=u.y;x?v+m>=r&&(g=u.y+=w,u.line++,v=u.x=t.left+(r-c[u.line])/2):g+w>t.bottom&&(v=u.x=v+t.columnWidths[u.line]+i.padding,g=u.y=t.top+i.padding,u.line++),function(t,i,l){if(!(isNaN(y)||y<=0)){d.save(),d.fillStyle=h(l.fillStyle,n.defaultColor),d.lineCap=h(l.lineCap,a.borderCapStyle),d.lineDashOffset=h(l.lineDashOffset,a.borderDashOffset),d.lineJoin=h(l.lineJoin,a.borderJoinStyle),d.lineWidth=h(l.lineWidth,a.borderWidth),d.strokeStyle=h(l.strokeStyle,n.defaultColor);var r=0===h(l.lineWidth,a.borderWidth);if(d.setLineDash&&d.setLineDash(h(l.lineDash,a.borderDash)),e.labels&&e.labels.usePointStyle){var s=f*Math.SQRT2/2,c=s/Math.SQRT2,u=t+c,p=i+c;o.canvas.drawPoint(d,l.pointStyle,s,u,p)}else r||d.strokeRect(t,i,y,f),d.fillRect(t,i,y,f);d.restore()}}(v,g,l),b[s].left=v,b[s].top=g,function(t,e,i,l){var n=f/2,o=y+n+t,a=e+n;d.fillText(i.text,o,a),i.hidden&&(d.beginPath(),d.lineWidth=2,d.moveTo(o,a),d.lineTo(o+l,a),d.stroke())}(v,g,l,p),x?u.x+=m+i.padding:u.y+=w}))}},handleEvent:function(t){var e=this,i=e.options,l="mouseup"===t.type?"click":t.type,n=!1;if("mousemove"===l){if(!i.onHover)return}else{if("click"!==l)return;if(!i.onClick)return}var o=t.x,a=t.y;if(o>=e.left&&o<=e.right&&a>=e.top&&a<=e.bottom)for(var r=e.legendHitBoxes,s=0;s<r.length;++s){var c=r[s];if(o>=c.left&&o<=c.left+c.width&&a>=c.top&&a<=c.top+c.height){if("click"===l){i.onClick.call(e,t.native,e.legendItems[s]),n=!0;break}if("mousemove"===l){i.onHover.call(e,t.native,e.legendItems[s]),n=!0;break}}}return n}});function u(t,e){var i=new c({ctx:t.ctx,options:e,chart:t});a.configure(t,i,e),a.addBox(t,i),t.legend=i}e.exports={id:"legend",_element:c,beforeInit:function(t){var e=t.options.legend;e&&u(t,e)},beforeUpdate:function(t){var e=t.options.legend,i=t.legend;e?(o.mergeIf(e,l.global.legend),i?(a.configure(t,i,e),i.options=e):u(t,e)):i&&(a.removeBox(t,i),delete t.legend)},afterEvent:function(t,e){var i=t.legend;i&&i.handleEvent(e)}}},{26:26,27:27,31:31,46:46}],53:[function(t,e,i){var l=t(26),n=t(27),o=t(46),a=t(31),r=o.noop;l._set("global",{title:{display:!1,fontStyle:"bold",fullWidth:!0,lineHeight:1.2,padding:10,position:"top",text:"",weight:2e3}});var s=n.extend({initialize:function(t){o.extend(this,t),this.legendHitBoxes=[]},beforeUpdate:r,update:function(t,e,i){var l=this;return l.beforeUpdate(),l.maxWidth=t,l.maxHeight=e,l.margins=i,l.beforeSetDimensions(),l.setDimensions(),l.afterSetDimensions(),l.beforeBuildLabels(),l.buildLabels(),l.afterBuildLabels(),l.beforeFit(),l.fit(),l.afterFit(),l.afterUpdate(),l.minSize},afterUpdate:r,beforeSetDimensions:r,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:r,beforeBuildLabels:r,buildLabels:r,afterBuildLabels:r,beforeFit:r,fit:function(){var t=this,e=o.valueOrDefault,i=t.options,n=i.display,a=e(i.fontSize,l.global.defaultFontSize),r=t.minSize,s=o.isArray(i.text)?i.text.length:1,c=o.options.toLineHeight(i.lineHeight,a),u=n?s*c+2*i.padding:0;t.isHorizontal()?(r.width=t.maxWidth,r.height=u):(r.width=u,r.height=t.maxHeight),t.width=r.width,t.height=r.height},afterFit:r,isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},draw:function(){var t=this,e=t.ctx,i=o.valueOrDefault,n=t.options,a=l.global;if(n.display){var r,s,c,u=i(n.fontSize,a.defaultFontSize),d=i(n.fontStyle,a.defaultFontStyle),h=i(n.fontFamily,a.defaultFontFamily),p=o.fontString(u,d,h),f=o.options.toLineHeight(n.lineHeight,u),m=f/2+n.padding,v=0,g=t.top,y=t.left,b=t.bottom,x=t.right;e.fillStyle=i(n.fontColor,a.defaultFontColor),e.font=p,t.isHorizontal()?(s=y+(x-y)/2,c=g+m,r=x-y):(s="left"===n.position?y+m:x-m,c=g+(b-g)/2,r=b-g,v=Math.PI*("left"===n.position?-.5:.5)),e.save(),e.translate(s,c),e.rotate(v),e.textAlign="center",e.textBaseline="middle";var w=n.text;if(o.isArray(w))for(var k=0,S=0;S<w.length;++S)e.fillText(w[S],0,k,r),k+=f;else e.fillText(w,0,0,r);e.restore()}}});function c(t,e){var i=new s({ctx:t.ctx,options:e,chart:t});a.configure(t,i,e),a.addBox(t,i),t.titleBlock=i}e.exports={id:"title",_element:s,beforeInit:function(t){var e=t.options.title;e&&c(t,e)},beforeUpdate:function(t){var e=t.options.title,i=t.titleBlock;e?(o.mergeIf(e,l.global.title),i?(a.configure(t,i,e),i.options=e):c(t,e)):i&&(a.removeBox(t,i),delete t.titleBlock)}}},{26:26,27:27,31:31,46:46}],54:[function(t,e,i){var l=t(33),n=t(34);e.exports=function(){var t=l.extend({getLabels:function(){var t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels},determineDataLimits:function(){var t,e=this,i=e.getLabels();e.minIndex=0,e.maxIndex=i.length-1,void 0!==e.options.ticks.min&&(t=i.indexOf(e.options.ticks.min),e.minIndex=-1!==t?t:e.minIndex),void 0!==e.options.ticks.max&&(t=i.indexOf(e.options.ticks.max),e.maxIndex=-1!==t?t:e.maxIndex),e.min=i[e.minIndex],e.max=i[e.maxIndex]},buildTicks:function(){var t=this,e=t.getLabels();t.ticks=0===t.minIndex&&t.maxIndex===e.length-1?e:e.slice(t.minIndex,t.maxIndex+1)},getLabelForIndex:function(t,e){var i=this,l=i.chart.data,n=i.isHorizontal();return l.yLabels&&!n?i.getRightValue(l.datasets[e].data[t]):i.ticks[t-i.minIndex]},getPixelForValue:function(t,e){var i,l=this,n=l.options.offset,o=Math.max(l.maxIndex+1-l.minIndex-(n?0:1),1);if(null!=t&&(i=l.isHorizontal()?t.x:t.y),void 0!==i||void 0!==t&&isNaN(e)){t=i||t;var a=l.getLabels().indexOf(t);e=-1!==a?a:e}if(l.isHorizontal()){var r=l.width/o,s=r*(e-l.minIndex);return n&&(s+=r/2),l.left+Math.round(s)}var c=l.height/o,u=c*(e-l.minIndex);return n&&(u+=c/2),l.top+Math.round(u)},getPixelForTick:function(t){return this.getPixelForValue(this.ticks[t],t+this.minIndex,null)},getValueForPixel:function(t){var e=this,i=e.options.offset,l=Math.max(e._ticks.length-(i?0:1),1),n=e.isHorizontal(),o=(n?e.width:e.height)/l;return t-=n?e.left:e.top,i&&(t-=o/2),(t<=0?0:Math.round(t/o))+e.minIndex},getBasePixel:function(){return this.bottom}});n.registerScaleType("category",t,{position:"bottom"})}},{33:33,34:34}],55:[function(t,e,i){var l=t(26),n=t(46),o=t(34),a=t(35);e.exports=function(t){var e={position:"left",ticks:{callback:a.formatters.linear}},i=t.LinearScaleBase.extend({determineDataLimits:function(){var t=this,e=t.options,i=t.chart,l=i.data.datasets,o=t.isHorizontal();function a(e){return o?e.xAxisID===t.id:e.yAxisID===t.id}t.min=null,t.max=null;var r=e.stacked;if(void 0===r&&n.each(l,(function(t,e){if(!r){var l=i.getDatasetMeta(e);i.isDatasetVisible(e)&&a(l)&&void 0!==l.stack&&(r=!0)}})),e.stacked||r){var s={};n.each(l,(function(l,o){var r=i.getDatasetMeta(o),c=[r.type,void 0===e.stacked&&void 0===r.stack?o:"",r.stack].join(".");void 0===s[c]&&(s[c]={positiveValues:[],negativeValues:[]});var u=s[c].positiveValues,d=s[c].negativeValues;i.isDatasetVisible(o)&&a(r)&&n.each(l.data,(function(i,l){var n=+t.getRightValue(i);isNaN(n)||r.data[l].hidden||(u[l]=u[l]||0,d[l]=d[l]||0,e.relativePoints?u[l]=100:n<0?d[l]+=n:u[l]+=n)}))})),n.each(s,(function(e){var i=e.positiveValues.concat(e.negativeValues),l=n.min(i),o=n.max(i);t.min=null===t.min?l:Math.min(t.min,l),t.max=null===t.max?o:Math.max(t.max,o)}))}else n.each(l,(function(e,l){var o=i.getDatasetMeta(l);i.isDatasetVisible(l)&&a(o)&&n.each(e.data,(function(e,i){var l=+t.getRightValue(e);isNaN(l)||o.data[i].hidden||(null===t.min?t.min=l:l<t.min&&(t.min=l),null===t.max?t.max=l:l>t.max&&(t.max=l))}))}));t.min=isFinite(t.min)&&!isNaN(t.min)?t.min:0,t.max=isFinite(t.max)&&!isNaN(t.max)?t.max:1,this.handleTickRangeOptions()},getTickLimit:function(){var t,e=this.options.ticks;if(this.isHorizontal())t=Math.min(e.maxTicksLimit?e.maxTicksLimit:11,Math.ceil(this.width/50));else{var i=n.valueOrDefault(e.fontSize,l.global.defaultFontSize);t=Math.min(e.maxTicksLimit?e.maxTicksLimit:11,Math.ceil(this.height/(2*i)))}return t},handleDirectionalChanges:function(){this.isHorizontal()||this.ticks.reverse()},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForValue:function(t){var e=this,i=e.start,l=+e.getRightValue(t),n=e.end-i;return e.isHorizontal()?e.left+e.width/n*(l-i):e.bottom-e.height/n*(l-i)},getValueForPixel:function(t){var e=this,i=e.isHorizontal(),l=i?e.width:e.height,n=(i?t-e.left:e.bottom-t)/l;return e.start+(e.end-e.start)*n},getPixelForTick:function(t){return this.getPixelForValue(this.ticksAsNumbers[t])}});o.registerScaleType("linear",i,e)}},{26:26,34:34,35:35,46:46}],56:[function(t,e,i){var l=t(46),n=t(33);e.exports=function(t){var e=l.noop;t.LinearScaleBase=n.extend({getRightValue:function(t){return"string"==typeof t?+t:n.prototype.getRightValue.call(this,t)},handleTickRangeOptions:function(){var t=this,e=t.options.ticks;if(e.beginAtZero){var i=l.sign(t.min),n=l.sign(t.max);i<0&&n<0?t.max=0:i>0&&n>0&&(t.min=0)}var o=void 0!==e.min||void 0!==e.suggestedMin,a=void 0!==e.max||void 0!==e.suggestedMax;void 0!==e.min?t.min=e.min:void 0!==e.suggestedMin&&(null===t.min?t.min=e.suggestedMin:t.min=Math.min(t.min,e.suggestedMin)),void 0!==e.max?t.max=e.max:void 0!==e.suggestedMax&&(null===t.max?t.max=e.suggestedMax:t.max=Math.max(t.max,e.suggestedMax)),o!==a&&t.min>=t.max&&(o?t.max=t.min+1:t.min=t.max-1),t.min===t.max&&(t.max++,e.beginAtZero||t.min--)},getTickLimit:e,handleDirectionalChanges:e,buildTicks:function(){var t=this,e=t.options.ticks,i=t.getTickLimit(),n={maxTicks:i=Math.max(2,i),min:e.min,max:e.max,precision:e.precision,stepSize:l.valueOrDefault(e.fixedStepSize,e.stepSize)},o=t.ticks=function(t,e){var i,n,o,a=[];if(t.stepSize&&t.stepSize>0)o=t.stepSize;else{var r=l.niceNum(e.max-e.min,!1);o=l.niceNum(r/(t.maxTicks-1),!0),void 0!==(n=t.precision)&&(i=Math.pow(10,n),o=Math.ceil(o*i)/i)}var s=Math.floor(e.min/o)*o,c=Math.ceil(e.max/o)*o;l.isNullOrUndef(t.min)||l.isNullOrUndef(t.max)||!t.stepSize||l.almostWhole((t.max-t.min)/t.stepSize,o/1e3)&&(s=t.min,c=t.max);var u=(c-s)/o;u=l.almostEquals(u,Math.round(u),o/1e3)?Math.round(u):Math.ceil(u),n=1,o<1&&(n=Math.pow(10,1-Math.floor(l.log10(o))),s=Math.round(s*n)/n,c=Math.round(c*n)/n),a.push(void 0!==t.min?t.min:s);for(var d=1;d<u;++d)a.push(Math.round((s+d*o)*n)/n);return a.push(void 0!==t.max?t.max:c),a}(n,t);t.handleDirectionalChanges(),t.max=l.max(o),t.min=l.min(o),e.reverse?(o.reverse(),t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max)},convertTicksToLabels:function(){var t=this;t.ticksAsNumbers=t.ticks.slice(),t.zeroLineIndex=t.ticks.indexOf(0),n.prototype.convertTicksToLabels.call(t)}})}},{33:33,46:46}],57:[function(t,e,i){var l=t(46),n=t(33),o=t(34),a=t(35);e.exports=function(t){var e={position:"left",ticks:{callback:a.formatters.logarithmic}},i=n.extend({determineDataLimits:function(){var t=this,e=t.options,i=t.chart,n=i.data.datasets,o=t.isHorizontal();function a(e){return o?e.xAxisID===t.id:e.yAxisID===t.id}t.min=null,t.max=null,t.minNotZero=null;var r=e.stacked;if(void 0===r&&l.each(n,(function(t,e){if(!r){var l=i.getDatasetMeta(e);i.isDatasetVisible(e)&&a(l)&&void 0!==l.stack&&(r=!0)}})),e.stacked||r){var s={};l.each(n,(function(n,o){var r=i.getDatasetMeta(o),c=[r.type,void 0===e.stacked&&void 0===r.stack?o:"",r.stack].join(".");i.isDatasetVisible(o)&&a(r)&&(void 0===s[c]&&(s[c]=[]),l.each(n.data,(function(e,i){var l=s[c],n=+t.getRightValue(e);isNaN(n)||r.data[i].hidden||n<0||(l[i]=l[i]||0,l[i]+=n)})))})),l.each(s,(function(e){if(e.length>0){var i=l.min(e),n=l.max(e);t.min=null===t.min?i:Math.min(t.min,i),t.max=null===t.max?n:Math.max(t.max,n)}}))}else l.each(n,(function(e,n){var o=i.getDatasetMeta(n);i.isDatasetVisible(n)&&a(o)&&l.each(e.data,(function(e,i){var l=+t.getRightValue(e);isNaN(l)||o.data[i].hidden||l<0||(null===t.min?t.min=l:l<t.min&&(t.min=l),null===t.max?t.max=l:l>t.max&&(t.max=l),0!==l&&(null===t.minNotZero||l<t.minNotZero)&&(t.minNotZero=l))}))}));this.handleTickRangeOptions()},handleTickRangeOptions:function(){var t=this,e=t.options.ticks,i=l.valueOrDefault;t.min=i(e.min,t.min),t.max=i(e.max,t.max),t.min===t.max&&(0!==t.min&&null!==t.min?(t.min=Math.pow(10,Math.floor(l.log10(t.min))-1),t.max=Math.pow(10,Math.floor(l.log10(t.max))+1)):(t.min=1,t.max=10)),null===t.min&&(t.min=Math.pow(10,Math.floor(l.log10(t.max))-1)),null===t.max&&(t.max=0!==t.min?Math.pow(10,Math.floor(l.log10(t.min))+1):10),null===t.minNotZero&&(t.min>0?t.minNotZero=t.min:t.max<1?t.minNotZero=Math.pow(10,Math.floor(l.log10(t.max))):t.minNotZero=1)},buildTicks:function(){var t=this,e=t.options.ticks,i=!t.isHorizontal(),n={min:e.min,max:e.max},o=t.ticks=function(t,e){var i,n,o=[],a=l.valueOrDefault,r=a(t.min,Math.pow(10,Math.floor(l.log10(e.min)))),s=Math.floor(l.log10(e.max)),c=Math.ceil(e.max/Math.pow(10,s));0===r?(i=Math.floor(l.log10(e.minNotZero)),n=Math.floor(e.minNotZero/Math.pow(10,i)),o.push(r),r=n*Math.pow(10,i)):(i=Math.floor(l.log10(r)),n=Math.floor(r/Math.pow(10,i)));var u=i<0?Math.pow(10,Math.abs(i)):1;do{o.push(r),10===++n&&(n=1,u=++i>=0?1:u),r=Math.round(n*Math.pow(10,i)*u)/u}while(i<s||i===s&&n<c);var d=a(t.max,r);return o.push(d),o}(n,t);t.max=l.max(o),t.min=l.min(o),e.reverse?(i=!i,t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max),i&&o.reverse()},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),n.prototype.convertTicksToLabels.call(this)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForTick:function(t){return this.getPixelForValue(this.tickValues[t])},_getFirstTickValue:function(t){var e=Math.floor(l.log10(t));return Math.floor(t/Math.pow(10,e))*Math.pow(10,e)},getPixelForValue:function(e){var i,n,o,a,r,s=this,c=s.options.ticks.reverse,u=l.log10,d=s._getFirstTickValue(s.minNotZero),h=0;return e=+s.getRightValue(e),c?(o=s.end,a=s.start,r=-1):(o=s.start,a=s.end,r=1),s.isHorizontal()?(i=s.width,n=c?s.right:s.left):(i=s.height,r*=-1,n=c?s.top:s.bottom),e!==o&&(0===o&&(i-=h=l.getValueOrDefault(s.options.ticks.fontSize,t.defaults.global.defaultFontSize),o=d),0!==e&&(h+=i/(u(a)-u(o))*(u(e)-u(o))),n+=r*h),n},getValueForPixel:function(e){var i,n,o,a,r=this,s=r.options.ticks.reverse,c=l.log10,u=r._getFirstTickValue(r.minNotZero);if(s?(n=r.end,o=r.start):(n=r.start,o=r.end),r.isHorizontal()?(i=r.width,a=s?r.right-e:e-r.left):(i=r.height,a=s?e-r.top:r.bottom-e),a!==n){if(0===n){var d=l.getValueOrDefault(r.options.ticks.fontSize,t.defaults.global.defaultFontSize);a-=d,i-=d,n=u}a*=c(o)-c(n),a/=i,a=Math.pow(10,c(n)+a)}return a}});o.registerScaleType("logarithmic",i,e)}},{33:33,34:34,35:35,46:46}],58:[function(t,e,i){var l=t(26),n=t(46),o=t(34),a=t(35);e.exports=function(t){var e=l.global,i={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1},gridLines:{circular:!1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2,callback:a.formatters.linear},pointLabels:{display:!0,fontSize:10,callback:function(t){return t}}};function r(t){var e=t.options;return e.angleLines.display||e.pointLabels.display?t.chart.data.labels.length:0}function s(t){var i=t.options.pointLabels,l=n.valueOrDefault(i.fontSize,e.defaultFontSize),o=n.valueOrDefault(i.fontStyle,e.defaultFontStyle),a=n.valueOrDefault(i.fontFamily,e.defaultFontFamily);return{size:l,style:o,family:a,font:n.fontString(l,o,a)}}function c(t,e,i,l,n){return t===l||t===n?{start:e-i/2,end:e+i/2}:t<l||t>n?{start:e-i-5,end:e}:{start:e,end:e+i+5}}function u(t){return 0===t||180===t?"center":t<180?"left":"right"}function d(t,e,i,l){if(n.isArray(e))for(var o=i.y,a=1.5*l,r=0;r<e.length;++r)t.fillText(e[r],i.x,o),o+=a;else t.fillText(e,i.x,i.y)}function h(t,e,i){90===t||270===t?i.y-=e.h/2:(t>270||t<90)&&(i.y-=e.h)}function p(t){return n.isNumber(t)?t:0}var f=t.LinearScaleBase.extend({setDimensions:function(){var t=this,i=t.options,l=i.ticks;t.width=t.maxWidth,t.height=t.maxHeight,t.xCenter=Math.round(t.width/2),t.yCenter=Math.round(t.height/2);var o=n.min([t.height,t.width]),a=n.valueOrDefault(l.fontSize,e.defaultFontSize);t.drawingArea=i.display?o/2-(a/2+l.backdropPaddingY):o/2},determineDataLimits:function(){var t=this,e=t.chart,i=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY;n.each(e.data.datasets,(function(o,a){if(e.isDatasetVisible(a)){var r=e.getDatasetMeta(a);n.each(o.data,(function(e,n){var o=+t.getRightValue(e);isNaN(o)||r.data[n].hidden||(i=Math.min(o,i),l=Math.max(o,l))}))}})),t.min=i===Number.POSITIVE_INFINITY?0:i,t.max=l===Number.NEGATIVE_INFINITY?0:l,t.handleTickRangeOptions()},getTickLimit:function(){var t=this.options.ticks,i=n.valueOrDefault(t.fontSize,e.defaultFontSize);return Math.min(t.maxTicksLimit?t.maxTicksLimit:11,Math.ceil(this.drawingArea/(1.5*i)))},convertTicksToLabels:function(){var e=this;t.LinearScaleBase.prototype.convertTicksToLabels.call(e),e.pointLabels=e.chart.data.labels.map(e.options.pointLabels.callback,e)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},fit:function(){var t,e;this.options.pointLabels.display?function(t){var e,i,l,o=s(t),a=Math.min(t.height/2,t.width/2),u={r:t.width,l:0,t:t.height,b:0},d={};t.ctx.font=o.font,t._pointLabelSizes=[];var h,p,f,m=r(t);for(e=0;e<m;e++){l=t.getPointPosition(e,a),h=t.ctx,p=o.size,f=t.pointLabels[e]||"",i=n.isArray(f)?{w:n.longestText(h,h.font,f),h:f.length*p+1.5*(f.length-1)*p}:{w:h.measureText(f).width,h:p},t._pointLabelSizes[e]=i;var v=t.getIndexAngle(e),g=n.toDegrees(v)%360,y=c(g,l.x,i.w,0,180),b=c(g,l.y,i.h,90,270);y.start<u.l&&(u.l=y.start,d.l=v),y.end>u.r&&(u.r=y.end,d.r=v),b.start<u.t&&(u.t=b.start,d.t=v),b.end>u.b&&(u.b=b.end,d.b=v)}t.setReductions(a,u,d)}(this):(t=this,e=Math.min(t.height/2,t.width/2),t.drawingArea=Math.round(e),t.setCenterPoint(0,0,0,0))},setReductions:function(t,e,i){var l=e.l/Math.sin(i.l),n=Math.max(e.r-this.width,0)/Math.sin(i.r),o=-e.t/Math.cos(i.t),a=-Math.max(e.b-this.height,0)/Math.cos(i.b);l=p(l),n=p(n),o=p(o),a=p(a),this.drawingArea=Math.min(Math.round(t-(l+n)/2),Math.round(t-(o+a)/2)),this.setCenterPoint(l,n,o,a)},setCenterPoint:function(t,e,i,l){var n=this,o=n.width-e-n.drawingArea,a=t+n.drawingArea,r=i+n.drawingArea,s=n.height-l-n.drawingArea;n.xCenter=Math.round((a+o)/2+n.left),n.yCenter=Math.round((r+s)/2+n.top)},getIndexAngle:function(t){return t*(2*Math.PI/r(this))+(this.chart.options&&this.chart.options.startAngle?this.chart.options.startAngle:0)*Math.PI*2/360},getDistanceFromCenterForValue:function(t){var e=this;if(null===t)return 0;var i=e.drawingArea/(e.max-e.min);return e.options.ticks.reverse?(e.max-t)*i:(t-e.min)*i},getPointPosition:function(t,e){var i=this.getIndexAngle(t)-Math.PI/2;return{x:Math.round(Math.cos(i)*e)+this.xCenter,y:Math.round(Math.sin(i)*e)+this.yCenter}},getPointPositionForValue:function(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))},getBasePosition:function(){var t=this.min,e=this.max;return this.getPointPositionForValue(0,this.beginAtZero?0:t<0&&e<0?e:t>0&&e>0?t:0)},draw:function(){var t=this,i=t.options,l=i.gridLines,o=i.ticks,a=n.valueOrDefault;if(i.display){var c=t.ctx,p=this.getIndexAngle(0),f=a(o.fontSize,e.defaultFontSize),m=a(o.fontStyle,e.defaultFontStyle),v=a(o.fontFamily,e.defaultFontFamily),g=n.fontString(f,m,v);n.each(t.ticks,(function(i,s){if(s>0||o.reverse){var u=t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]);if(l.display&&0!==s&&function(t,e,i,l){var o=t.ctx;if(o.strokeStyle=n.valueAtIndexOrDefault(e.color,l-1),o.lineWidth=n.valueAtIndexOrDefault(e.lineWidth,l-1),t.options.gridLines.circular)o.beginPath(),o.arc(t.xCenter,t.yCenter,i,0,2*Math.PI),o.closePath(),o.stroke();else{var a=r(t);if(0===a)return;o.beginPath();var s=t.getPointPosition(0,i);o.moveTo(s.x,s.y);for(var c=1;c<a;c++)s=t.getPointPosition(c,i),o.lineTo(s.x,s.y);o.closePath(),o.stroke()}}(t,l,u,s),o.display){var d=a(o.fontColor,e.defaultFontColor);if(c.font=g,c.save(),c.translate(t.xCenter,t.yCenter),c.rotate(p),o.showLabelBackdrop){var h=c.measureText(i).width;c.fillStyle=o.backdropColor,c.fillRect(-h/2-o.backdropPaddingX,-u-f/2-o.backdropPaddingY,h+2*o.backdropPaddingX,f+2*o.backdropPaddingY)}c.textAlign="center",c.textBaseline="middle",c.fillStyle=d,c.fillText(i,0,-u),c.restore()}}})),(i.angleLines.display||i.pointLabels.display)&&function(t){var i=t.ctx,l=t.options,o=l.angleLines,a=l.pointLabels;i.lineWidth=o.lineWidth,i.strokeStyle=o.color;var c=t.getDistanceFromCenterForValue(l.ticks.reverse?t.min:t.max),p=s(t);i.textBaseline="top";for(var f=r(t)-1;f>=0;f--){if(o.display){var m=t.getPointPosition(f,c);i.beginPath(),i.moveTo(t.xCenter,t.yCenter),i.lineTo(m.x,m.y),i.stroke(),i.closePath()}if(a.display){var v=t.getPointPosition(f,c+5),g=n.valueAtIndexOrDefault(a.fontColor,f,e.defaultFontColor);i.font=p.font,i.fillStyle=g;var y=t.getIndexAngle(f),b=n.toDegrees(y);i.textAlign=u(b),h(b,t._pointLabelSizes[f],v),d(i,t.pointLabels[f]||"",v,p.size)}}}(t)}}});o.registerScaleType("radialLinear",f,i)}},{26:26,34:34,35:35,46:46}],59:[function(t,e,i){var l=t(1);l="function"==typeof l?l:window.moment;var n=t(26),o=t(46),a=t(33),r=t(34),s=Number.MIN_SAFE_INTEGER||-9007199254740991,c=Number.MAX_SAFE_INTEGER||9007199254740991,u={millisecond:{common:!0,size:1,steps:[1,2,5,10,20,50,100,250,500]},second:{common:!0,size:1e3,steps:[1,2,5,10,15,30]},minute:{common:!0,size:6e4,steps:[1,2,5,10,15,30]},hour:{common:!0,size:36e5,steps:[1,2,3,6,12]},day:{common:!0,size:864e5,steps:[1,2,5]},week:{common:!1,size:6048e5,steps:[1,2,3,4]},month:{common:!0,size:2628e6,steps:[1,2,3]},quarter:{common:!1,size:7884e6,steps:[1,2,3,4]},year:{common:!0,size:3154e7}},d=Object.keys(u);function h(t,e){return t-e}function p(t){var e,i,l,n={},o=[];for(e=0,i=t.length;e<i;++e)n[l=t[e]]||(n[l]=!0,o.push(l));return o}function f(t,e,i,l){var n=function(t,e,i){for(var l,n,o,a=0,r=t.length-1;a>=0&&a<=r;){if(n=t[(l=a+r>>1)-1]||null,o=t[l],!n)return{lo:null,hi:o};if(o[e]<i)a=l+1;else{if(!(n[e]>i))return{lo:n,hi:o};r=l-1}}return{lo:o,hi:null}}(t,e,i),o=n.lo?n.hi?n.lo:t[t.length-2]:t[0],a=n.lo?n.hi?n.hi:t[t.length-1]:t[1],r=a[e]-o[e],s=r?(i-o[e])/r:0,c=(a[l]-o[l])*s;return o[l]+c}function m(t,e){var i=e.parser,n=e.parser||e.format;return"function"==typeof i?i(t):"string"==typeof t&&"string"==typeof n?l(t,n):(t instanceof l||(t=l(t)),t.isValid()?t:"function"==typeof n?n(t):t)}function v(t,e){if(o.isNullOrUndef(t))return null;var i=e.options.time,l=m(e.getRightValue(t),i);return l.isValid()?(i.round&&l.startOf(i.round),l.valueOf()):null}function g(t){for(var e=d.indexOf(t)+1,i=d.length;e<i;++e)if(u[d[e]].common)return d[e]}function y(t,e,i,n){var a,r=n.time,s=r.unit||function(t,e,i,l){var n,o,a,r=d.length;for(n=d.indexOf(t);n<r-1;++n)if(a=(o=u[d[n]]).steps?o.steps[o.steps.length-1]:c,o.common&&Math.ceil((i-e)/(a*o.size))<=l)return d[n];return d[r-1]}(r.minUnit,t,e,i),h=g(s),p=o.valueOrDefault(r.stepSize,r.unitStepSize),f="week"===s&&r.isoWeekday,m=n.ticks.major.enabled,v=u[s],y=l(t),b=l(e),x=[];for(p||(p=function(t,e,i,l){var n,o,a,r=e-t,s=u[i],c=s.size,d=s.steps;if(!d)return Math.ceil(r/(l*c));for(n=0,o=d.length;n<o&&(a=d[n],!(Math.ceil(r/(c*a))<=l));++n);return a}(t,e,s,i)),f&&(y=y.isoWeekday(f),b=b.isoWeekday(f)),y=y.startOf(f?"day":s),(b=b.startOf(f?"day":s))<e&&b.add(1,s),a=l(y),m&&h&&!f&&!r.round&&(a.startOf(h),a.add(~~((y-a)/(v.size*p))*p,s));a<b;a.add(p,s))x.push(+a);return x.push(+a),x}e.exports=function(){var t=a.extend({initialize:function(){if(!l)throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");this.mergeTicksOptions(),a.prototype.initialize.call(this)},update:function(){var t=this,e=t.options;return e.time&&e.time.format&&console.warn("options.time.format is deprecated and replaced by options.time.parser."),a.prototype.update.apply(t,arguments)},getRightValue:function(t){return t&&void 0!==t.t&&(t=t.t),a.prototype.getRightValue.call(this,t)},determineDataLimits:function(){var t,e,i,n,a,r,u=this,d=u.chart,f=u.options.time,m=f.unit||"day",g=c,y=s,b=[],x=[],w=[];for(t=0,i=d.data.labels.length;t<i;++t)w.push(v(d.data.labels[t],u));for(t=0,i=(d.data.datasets||[]).length;t<i;++t)if(d.isDatasetVisible(t))if(a=d.data.datasets[t].data,o.isObject(a[0]))for(x[t]=[],e=0,n=a.length;e<n;++e)r=v(a[e],u),b.push(r),x[t][e]=r;else b.push.apply(b,w),x[t]=w.slice(0);else x[t]=[];w.length&&(w=p(w).sort(h),g=Math.min(g,w[0]),y=Math.max(y,w[w.length-1])),b.length&&(b=p(b).sort(h),g=Math.min(g,b[0]),y=Math.max(y,b[b.length-1])),g=v(f.min,u)||g,y=v(f.max,u)||y,g=g===c?+l().startOf(m):g,y=y===s?+l().endOf(m)+1:y,u.min=Math.min(g,y),u.max=Math.max(g+1,y),u._horizontal=u.isHorizontal(),u._table=[],u._timestamps={data:b,datasets:x,labels:w}},buildTicks:function(){var t,e,i,n=this,o=n.min,a=n.max,r=n.options,s=r.time,c=[],h=[];switch(r.ticks.source){case"data":c=n._timestamps.data;break;case"labels":c=n._timestamps.labels;break;case"auto":default:c=y(o,a,n.getLabelCapacity(o),r)}for("ticks"===r.bounds&&c.length&&(o=c[0],a=c[c.length-1]),o=v(s.min,n)||o,a=v(s.max,n)||a,t=0,e=c.length;t<e;++t)(i=c[t])>=o&&i<=a&&h.push(i);return n.min=o,n.max=a,n._unit=s.unit||function(t,e,i,n){var o,a,r=l.duration(l(n).diff(l(i)));for(o=d.length-1;o>=d.indexOf(e);o--)if(a=d[o],u[a].common&&r.as(a)>=t.length)return a;return d[e?d.indexOf(e):0]}(h,s.minUnit,n.min,n.max),n._majorUnit=g(n._unit),n._table=function(t,e,i,l){if("linear"===l||!t.length)return[{time:e,pos:0},{time:i,pos:1}];var n,o,a,r,s,c=[],u=[e];for(n=0,o=t.length;n<o;++n)(r=t[n])>e&&r<i&&u.push(r);for(u.push(i),n=0,o=u.length;n<o;++n)s=u[n+1],a=u[n-1],r=u[n],void 0!==a&&void 0!==s&&Math.round((s+a)/2)===r||c.push({time:r,pos:n/(o-1)});return c}(n._timestamps.data,o,a,r.distribution),n._offsets=function(t,e,i,l,n){var o,a,r=0,s=0;return n.offset&&e.length&&(n.time.min||(o=e.length>1?e[1]:l,a=e[0],r=(f(t,"time",o,"pos")-f(t,"time",a,"pos"))/2),n.time.max||(o=e[e.length-1],a=e.length>1?e[e.length-2]:i,s=(f(t,"time",o,"pos")-f(t,"time",a,"pos"))/2)),{left:r,right:s}}(n._table,h,o,a,r),n._labelFormat=function(t,e){var i,l,n,o=t.length;for(i=0;i<o;i++){if(0!==(l=m(t[i],e)).millisecond())return"MMM D, YYYY h:mm:ss.SSS a";0===l.second()&&0===l.minute()&&0===l.hour()||(n=!0)}return n?"MMM D, YYYY h:mm:ss a":"MMM D, YYYY"}(n._timestamps.data,s),function(t,e){var i,n,o,a,r=[];for(i=0,n=t.length;i<n;++i)o=t[i],a=!!e&&o===+l(o).startOf(e),r.push({value:o,major:a});return r}(h,n._majorUnit)},getLabelForIndex:function(t,e){var i=this.chart.data,l=this.options.time,n=i.labels&&t<i.labels.length?i.labels[t]:"",a=i.datasets[e].data[t];return o.isObject(a)&&(n=this.getRightValue(a)),l.tooltipFormat?m(n,l).format(l.tooltipFormat):"string"==typeof n?n:m(n,l).format(this._labelFormat)},tickFormatFunction:function(t,e,i,l){var n=this.options,a=t.valueOf(),r=n.time.displayFormats,s=r[this._unit],c=this._majorUnit,u=r[c],d=t.clone().startOf(c).valueOf(),h=n.ticks.major,p=h.enabled&&c&&u&&a===d,f=t.format(l||(p?u:s)),m=p?h:n.ticks.minor,v=o.valueOrDefault(m.callback,m.userCallback);return v?v(f,e,i):f},convertTicksToLabels:function(t){var e,i,n=[];for(e=0,i=t.length;e<i;++e)n.push(this.tickFormatFunction(l(t[e].value),e,t));return n},getPixelForOffset:function(t){var e=this,i=e._horizontal?e.width:e.height,l=e._horizontal?e.left:e.top,n=f(e._table,"time",t,"pos");return l+i*(e._offsets.left+n)/(e._offsets.left+1+e._offsets.right)},getPixelForValue:function(t,e,i){var l=null;if(void 0!==e&&void 0!==i&&(l=this._timestamps.datasets[i][e]),null===l&&(l=v(t,this)),null!==l)return this.getPixelForOffset(l)},getPixelForTick:function(t){var e=this.getTicks();return t>=0&&t<e.length?this.getPixelForOffset(e[t].value):null},getValueForPixel:function(t){var e=this,i=e._horizontal?e.width:e.height,n=e._horizontal?e.left:e.top,o=(i?(t-n)/i:0)*(e._offsets.left+1+e._offsets.left)-e._offsets.right,a=f(e._table,"pos",o,"time");return l(a)},getLabelWidth:function(t){var e=this.options.ticks,i=this.ctx.measureText(t).width,l=o.toRadians(e.maxRotation),a=Math.cos(l),r=Math.sin(l);return i*a+o.valueOrDefault(e.fontSize,n.global.defaultFontSize)*r},getLabelCapacity:function(t){var e=this,i=e.options.time.displayFormats.millisecond,n=e.tickFormatFunction(l(t),0,[],i),o=e.getLabelWidth(n),a=e.isHorizontal()?e.width:e.height,r=Math.floor(a/o);return r>0?r:1}});r.registerScaleType("time",t,{position:"bottom",distribution:"linear",bounds:"data",time:{parser:!1,format:!1,unit:!1,round:!1,displayFormat:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm a",hour:"hA",day:"MMM D",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"}},ticks:{autoSkip:!1,source:"auto",major:{enabled:!1}}})}},{1:1,26:26,33:33,34:34,46:46}]},{},[7])(7)}))}).call(this,i(96)(t),i(54))},function(t,e,i){"use strict";var l=i(4),n=i(24).findIndex,o=i(51),a=!0;"findIndex"in[]&&Array(1).findIndex((function(){a=!1})),l({target:"Array",proto:!0,forced:a},{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),o("findIndex")},function(t,e,i){var l=i(4),n=Math.log,o=Math.LOG10E;l({target:"Math",stat:!0},{log10:function(t){return n(t)*o}})},function(t,e,i){i(4)({target:"Math",stat:!0},{sign:i(232)})},function(t,e){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,e,i){i(4)({target:"Number",stat:!0},{EPSILON:Math.pow(2,-52)})},function(t,e,i){"use strict";(function(t){var e,l;i(69),i(71),i(72),i(76),i(169),i(103),i(66),i(58),i(167),i(100),i(131),i(110),i(111),i(219),i(220),i(112),i(65),i(68),i(73),i(98),i(235),i(104),i(74);function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*!
 * chartjs-plugin-datalabels v0.7.0
 * https://chartjs-plugin-datalabels.netlify.com
 * (c) 2019 Chart.js Contributors
 * Released under the MIT license
 */e=void 0,l=function(t){var e=(t=t&&t.hasOwnProperty("default")?t.default:t).helpers,i=function(){if("undefined"!=typeof window){if(window.devicePixelRatio)return window.devicePixelRatio;var t=window.screen;if(t)return(t.deviceXDPI||1)/(t.logicalXDPI||1)}return 1}(),l={toTextLines:function(t){var i,l=[];for(t=[].concat(t);t.length;)"string"==typeof(i=t.pop())?l.unshift.apply(l,i.split("\n")):Array.isArray(i)?t.push.apply(t,i):e.isNullOrUndef(t)||l.unshift(""+i);return l},toFontString:function(t){return!t||e.isNullOrUndef(t.size)||e.isNullOrUndef(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family},textSize:function(t,e,i){var l,n=[].concat(e),o=n.length,a=t.font,r=0;for(t.font=i.string,l=0;l<o;++l)r=Math.max(t.measureText(n[l]).width,r);return t.font=a,{height:o*i.lineHeight,width:r}},parseFont:function(i){var n=t.defaults.global,o=e.valueOrDefault(i.size,n.defaultFontSize),a={family:e.valueOrDefault(i.family,n.defaultFontFamily),lineHeight:e.options.toLineHeight(i.lineHeight,o),size:o,style:e.valueOrDefault(i.style,n.defaultFontStyle),weight:e.valueOrDefault(i.weight,null),string:""};return a.string=l.toFontString(a),a},bound:function(t,e,i){return Math.max(t,Math.min(e,i))},arrayDiff:function(t,e){var i,l,n,o,a=t.slice(),r=[];for(i=0,n=e.length;i<n;++i)o=e[i],-1===(l=a.indexOf(o))?r.push([o,1]):a.splice(l,1);for(i=0,n=a.length;i<n;++i)r.push([a[i],-1]);return r},rasterize:function(t){return Math.round(t*i)/i}};function n(t,e){var i=e.x,l=e.y;if(null===i)return{x:0,y:-1};if(null===l)return{x:1,y:0};var n=t.x-i,o=t.y-l,a=Math.sqrt(n*n+o*o);return{x:a?n/a:0,y:a?o/a:-1}}var o=0,a=1,r=2,s=4,c=8;function u(t,e,i){var l=o;return t<i.left?l|=a:t>i.right&&(l|=r),e<i.top?l|=c:e>i.bottom&&(l|=s),l}function d(t,e){var i,l,n=e.anchor,o=t;return e.clamp&&(o=function(t,e){for(var i,l,n,o=t.x0,d=t.y0,h=t.x1,p=t.y1,f=u(o,d,e),m=u(h,p,e);f|m&&!(f&m);)(i=f||m)&c?(l=o+(h-o)*(e.top-d)/(p-d),n=e.top):i&s?(l=o+(h-o)*(e.bottom-d)/(p-d),n=e.bottom):i&r?(n=d+(p-d)*(e.right-o)/(h-o),l=e.right):i&a&&(n=d+(p-d)*(e.left-o)/(h-o),l=e.left),i===f?f=u(o=l,d=n,e):m=u(h=l,p=n,e);return{x0:o,x1:h,y0:d,y1:p}}(o,e.area)),"start"===n?(i=o.x0,l=o.y0):"end"===n?(i=o.x1,l=o.y1):(i=(o.x0+o.x1)/2,l=(o.y0+o.y1)/2),function(t,e,i,l,n){switch(n){case"center":i=l=0;break;case"bottom":i=0,l=1;break;case"right":i=1,l=0;break;case"left":i=-1,l=0;break;case"top":i=0,l=-1;break;case"start":i=-i,l=-l;break;case"end":break;default:n*=Math.PI/180,i=Math.cos(n),l=Math.sin(n)}return{x:t,y:e,vx:i,vy:l}}(i,l,t.vx,t.vy,e.align)}var h={arc:function(t,e){var i=(t.startAngle+t.endAngle)/2,l=Math.cos(i),n=Math.sin(i),o=t.innerRadius,a=t.outerRadius;return d({x0:t.x+l*o,y0:t.y+n*o,x1:t.x+l*a,y1:t.y+n*a,vx:l,vy:n},e)},point:function(t,e){var i=n(t,e.origin),l=i.x*t.radius,o=i.y*t.radius;return d({x0:t.x-l,y0:t.y-o,x1:t.x+l,y1:t.y+o,vx:i.x,vy:i.y},e)},rect:function(t,e){var i=n(t,e.origin),l=t.x,o=t.y,a=0,r=0;return t.horizontal?(l=Math.min(t.x,t.base),a=Math.abs(t.base-t.x)):(o=Math.min(t.y,t.base),r=Math.abs(t.base-t.y)),d({x0:l,y0:o+r,x1:l+a,y1:o,vx:i.x,vy:i.y},e)},fallback:function(t,e){var i=n(t,e.origin);return d({x0:t.x,y0:t.y,x1:t.x,y1:t.y,vx:i.x,vy:i.y},e)}},p=t.helpers,f=l.rasterize;function m(t){var e=t._model.horizontal,i=t._scale||e&&t._xScale||t._yScale;if(!i)return null;if(void 0!==i.xCenter&&void 0!==i.yCenter)return{x:i.xCenter,y:i.yCenter};var l=i.getBasePixel();return e?{x:l,y:null}:{x:null,y:l}}function v(t,e,i){var l=t.shadowBlur,n=i.stroked,o=f(i.x),a=f(i.y),r=f(i.w);n&&t.strokeText(e,o,a,r),i.filled&&(l&&n&&(t.shadowBlur=0),t.fillText(e,o,a,r),l&&n&&(t.shadowBlur=l))}var g=function(t,e,i,l){var n=this;n._config=t,n._index=l,n._model=null,n._rects=null,n._ctx=e,n._el=i};p.extend(g.prototype,{_modelize:function(e,i,n,o){var a,r=this._index,s=p.options.resolve,c=l.parseFont(s([n.font,{}],o,r)),u=s([n.color,t.defaults.global.defaultFontColor],o,r);return{align:s([n.align,"center"],o,r),anchor:s([n.anchor,"center"],o,r),area:o.chart.chartArea,backgroundColor:s([n.backgroundColor,null],o,r),borderColor:s([n.borderColor,null],o,r),borderRadius:s([n.borderRadius,0],o,r),borderWidth:s([n.borderWidth,0],o,r),clamp:s([n.clamp,!1],o,r),clip:s([n.clip,!1],o,r),color:u,display:e,font:c,lines:i,offset:s([n.offset,0],o,r),opacity:s([n.opacity,1],o,r),origin:m(this._el),padding:p.options.toPadding(s([n.padding,0],o,r)),positioner:(a=this._el,a instanceof t.elements.Arc?h.arc:a instanceof t.elements.Point?h.point:a instanceof t.elements.Rectangle?h.rect:h.fallback),rotation:s([n.rotation,0],o,r)*(Math.PI/180),size:l.textSize(this._ctx,i,c),textAlign:s([n.textAlign,"start"],o,r),textShadowBlur:s([n.textShadowBlur,0],o,r),textShadowColor:s([n.textShadowColor,u],o,r),textStrokeColor:s([n.textStrokeColor,u],o,r),textStrokeWidth:s([n.textStrokeWidth,0],o,r)}},update:function(t){var e,i,n,o=this,a=null,r=null,s=o._index,c=o._config,u=p.options.resolve([c.display,!0],t,s);u&&(e=t.dataset.data[s],i=p.valueOrDefault(p.callback(c.formatter,[e,t]),e),(n=p.isNullOrUndef(i)?[]:l.toTextLines(i)).length&&(r=function(t){var e=t.borderWidth||0,i=t.padding,l=t.size.height,n=t.size.width,o=-n/2,a=-l/2;return{frame:{x:o-i.left-e,y:a-i.top-e,w:n+i.width+2*e,h:l+i.height+2*e},text:{x:o,y:a,w:n,h:l}}}(a=o._modelize(u,n,c,t)))),o._model=a,o._rects=r},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(t,e){var i,n=t.ctx,o=this._model,a=this._rects;this.visible()&&(n.save(),o.clip&&(i=o.area,n.beginPath(),n.rect(i.left,i.top,i.right-i.left,i.bottom-i.top),n.clip()),n.globalAlpha=l.bound(0,o.opacity,1),n.translate(f(e.x),f(e.y)),n.rotate(o.rotation),function(t,e,i){var l=i.backgroundColor,n=i.borderColor,o=i.borderWidth;(l||n&&o)&&(t.beginPath(),p.canvas.roundedRect(t,f(e.x)+o/2,f(e.y)+o/2,f(e.w)-o,f(e.h)-o,i.borderRadius),t.closePath(),l&&(t.fillStyle=l,t.fill()),n&&o&&(t.strokeStyle=n,t.lineWidth=o,t.lineJoin="miter",t.stroke()))}(n,a.frame,o),function(t,e,i,l){var n,o=l.textAlign,a=l.color,r=!!a,s=l.font,c=e.length,u=l.textStrokeColor,d=l.textStrokeWidth,h=u&&d;if(c&&(r||h))for(i=function(t,e,i){var l=i.lineHeight,n=t.w,o=t.x;return"center"===e?o+=n/2:"end"!==e&&"right"!==e||(o+=n),{h:l,w:n,x:o,y:t.y+l/2}}(i,o,s),t.font=s.string,t.textAlign=o,t.textBaseline="middle",t.shadowBlur=l.textShadowBlur,t.shadowColor=l.textShadowColor,r&&(t.fillStyle=a),h&&(t.lineJoin="round",t.lineWidth=d,t.strokeStyle=u),n=0,c=e.length;n<c;++n)v(t,e[n],{stroked:h,filled:r,w:i.w,x:i.x,y:i.y+i.h*n})}(n,o.lines,a.text,o),n.restore())}});var y=t.helpers,b=Number.MIN_SAFE_INTEGER||-9007199254740991,x=Number.MAX_SAFE_INTEGER||9007199254740991;function w(t,e,i){var l=Math.cos(i),n=Math.sin(i),o=e.x,a=e.y;return{x:o+l*(t.x-o)-n*(t.y-a),y:a+n*(t.x-o)+l*(t.y-a)}}function k(t,e){var i,l,n,o,a,r=x,s=b,c=e.origin;for(i=0;i<t.length;++i)n=(l=t[i]).x-c.x,o=l.y-c.y,a=e.vx*n+e.vy*o,r=Math.min(r,a),s=Math.max(s,a);return{min:r,max:s}}function S(t,e){var i=e.x-t.x,l=e.y-t.y,n=Math.sqrt(i*i+l*l);return{vx:(e.x-t.x)/n,vy:(e.y-t.y)/n,origin:t,ln:n}}var M=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};function C(t,e,i){var l=e.positioner(t,e),n=l.vx,o=l.vy;if(!n&&!o)return{x:l.x,y:l.y};var a=i.w,r=i.h,s=e.rotation,c=Math.abs(a/2*Math.cos(s))+Math.abs(r/2*Math.sin(s)),u=Math.abs(a/2*Math.sin(s))+Math.abs(r/2*Math.cos(s)),d=1/Math.max(Math.abs(n),Math.abs(o));return c*=n*d,u*=o*d,c+=e.offset*n,u+=e.offset*o,{x:l.x+c,y:l.y+u}}y.extend(M.prototype,{center:function(){var t=this._rect;return{x:t.x+t.w/2,y:t.y+t.h/2}},update:function(t,e,i){this._rotation=i,this._rect={x:e.x+t.x,y:e.y+t.y,w:e.w,h:e.h}},contains:function(t){var e=this._rect;return!((t=w(t,this.center(),-this._rotation)).x<e.x-1||t.y<e.y-1||t.x>e.x+e.w+2||t.y>e.y+e.h+2)},intersects:function(t){var e,i,l,n=this._points(),o=t._points(),a=[S(n[0],n[1]),S(n[0],n[3])];for(this._rotation!==t._rotation&&a.push(S(o[0],o[1]),S(o[0],o[3])),e=0;e<a.length;++e)if(i=k(n,a[e]),l=k(o,a[e]),i.max<l.min||l.max<i.min)return!1;return!0},_points:function(){var t=this._rect,e=this._rotation,i=this.center();return[w({x:t.x,y:t.y},i,e),w({x:t.x+t.w,y:t.y},i,e),w({x:t.x+t.w,y:t.y+t.h},i,e),w({x:t.x,y:t.y+t.h},i,e)]}});var T={prepare:function(t){var e,i,l,n,o,a=[];for(e=0,l=t.length;e<l;++e)for(i=0,n=t[e].length;i<n;++i)o=t[e][i],a.push(o),o.$layout={_box:new M,_hidable:!1,_visible:!0,_set:e,_idx:i};return a.sort((function(t,e){var i=t.$layout,l=e.$layout;return i._idx===l._idx?l._set-i._set:l._idx-i._idx})),this.update(a),a},update:function(t){var e,i,l,n,o,a=!1;for(e=0,i=t.length;e<i;++e)n=(l=t[e]).model(),(o=l.$layout)._hidable=n&&"auto"===n.display,o._visible=l.visible(),a|=o._hidable;a&&function(t){var e,i,l,n,o,a;for(e=0,i=t.length;e<i;++e)(n=(l=t[e]).$layout)._visible&&(o=l.geometry(),a=C(l._el._model,l.model(),o),n._box.update(a,o,l.rotation()));!function(t,e){var i,l,n,o;for(i=t.length-1;i>=0;--i)for(n=t[i].$layout,l=i-1;l>=0&&n._visible;--l)(o=t[l].$layout)._visible&&n._box.intersects(o._box)&&e(n,o)}(t,(function(t,e){var i=t._hidable,l=e._hidable;i&&l||l?e._visible=!1:i&&(t._visible=!1)}))}(t)},lookup:function(t,e){var i,l;for(i=t.length-1;i>=0;--i)if((l=t[i].$layout)&&l._visible&&l._box.contains(e))return t[i];return null},draw:function(t,e){var i,l,n,o,a,r;for(i=0,l=e.length;i<l;++i)(o=(n=e[i]).$layout)._visible&&(a=n.geometry(),r=C(n._el._view,n.model(),a),o._box.update(r,a,n.rotation()),n.draw(t,r))}},A=t.helpers,O={align:"center",anchor:"center",backgroundColor:null,borderColor:null,borderRadius:0,borderWidth:0,clamp:!1,clip:!1,color:void 0,display:!0,font:{family:void 0,lineHeight:1.2,size:void 0,style:void 0,weight:null},formatter:function(t){if(A.isNullOrUndef(t))return null;var e,i,l,n=t;if(A.isObject(t))if(A.isNullOrUndef(t.label))if(A.isNullOrUndef(t.r))for(n="",l=0,i=(e=Object.keys(t)).length;l<i;++l)n+=(0!==l?", ":"")+e[l]+": "+t[e[l]];else n=t.r;else n=t.label;return""+n},labels:void 0,listeners:{},offset:4,opacity:1,padding:{top:4,right:4,bottom:4,left:4},rotation:0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,textShadowBlur:0,textShadowColor:void 0},E=t.helpers,P="$datalabels",I="$default";function _(t,e,i){if(e){var l,n=i.$context,o=i.$groups;e[o._set]&&(l=e[o._set][o._key])&&!0===E.callback(l,[n])&&(t[P]._dirty=!0,i.update(n))}}function $(t,e){var i,l,n=t[P],o=n._listeners;if(o.enter||o.leave){if("mousemove"===e.type)l=T.lookup(n._labels,e);else if("mouseout"!==e.type)return;i=n._hovered,n._hovered=l,function(t,e,i,l){var n,o;(i||l)&&(i?l?i!==l&&(o=n=!0):o=!0:n=!0,o&&_(t,e.leave,i),n&&_(t,e.enter,l))}(t,o,i,l)}}t.defaults.global.plugins.datalabels=O;var D={id:"datalabels",beforeInit:function(t){t[P]={_actives:[]}},beforeUpdate:function(t){var e=t[P];e._listened=!1,e._listeners={},e._datasets=[],e._labels=[]},afterDatasetUpdate:function(t,e,i){var l,n,o,a,r,s,c,u,d=e.index,h=t[P],p=h._datasets[d]=[],f=t.isDatasetVisible(d),m=t.data.datasets[d],v=function(t,e){var i,l,n,o=t.datalabels,a=[];return!1===o?null:(!0===o&&(o={}),e=E.merge({},[e,o]),l=e.labels||{},n=Object.keys(l),delete e.labels,n.length?n.forEach((function(t){l[t]&&a.push(E.merge({},[e,l[t],{_key:t}]))})):a.push(e),i=a.reduce((function(t,e){return E.each(e.listeners||{},(function(i,l){t[l]=t[l]||{},t[l][e._key||I]=i})),delete e.listeners,t}),{}),{labels:a,listeners:i})}(m,i),y=e.meta.data||[],b=t.ctx;for(b.save(),l=0,o=y.length;l<o;++l)if((c=y[l])[P]=[],f&&c&&!c.hidden&&!c._model.skip)for(n=0,a=v.labels.length;n<a;++n)s=(r=v.labels[n])._key,(u=new g(r,b,c,l)).$groups={_set:d,_key:s||I},u.$context={active:!1,chart:t,dataIndex:l,dataset:m,datasetIndex:d},u.update(u.$context),c[P].push(u),p.push(u);b.restore(),E.merge(h._listeners,v.listeners,{merger:function(t,i,l){i[t]=i[t]||{},i[t][e.index]=l[t],h._listened=!0}})},afterUpdate:function(t,e){t[P]._labels=T.prepare(t[P]._datasets,e)},afterDatasetsDraw:function(t){T.draw(t,t[P]._labels)},beforeEvent:function(t,e){if(t[P]._listened)switch(e.type){case"mousemove":case"mouseout":$(t,e);break;case"click":!function(t,e){var i=t[P],l=i._listeners.click,n=l&&T.lookup(i._labels,e);n&&_(t,l,n)}(t,e)}},afterEvent:function(e){var i,n,o,a,r,s,c,u=e[P],d=u._actives,h=u._actives=e.lastActive||[],p=l.arrayDiff(d,h);for(i=0,n=p.length;i<n;++i)if((r=p[i])[1])for(o=0,a=(c=r[0][P]||[]).length;o<a;++o)(s=c[o]).$context.active=1===r[1],s.update(s.$context);(u._dirty||p.length)&&(T.update(u._labels),function(e){if(!e.animating){for(var i=t.animationService.animations,l=0,n=i.length;l<n;++l)if(i[l].chart===e)return;e.render({duration:1,lazy:!0})}}(e)),delete u._dirty}};return t.plugins.unregister(D),D},"object"===( false?undefined:n(exports))&&void 0!==t?t.exports=l(i(238)): true&&i(80)?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (l),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):(e=e||self).ChartDataLabels=l(e.Chart)}).call(this,i(96)(t))},function(t,e,i){"use strict";var l=i(4),n=i(236);l({target:"String",proto:!0,forced:i(237)("anchor")},{anchor:function(t){return n(this,"a","name",t)}})},function(t,e,i){var l=i(13),n=/"/g;t.exports=function(t,e,i,o){var a=String(l(t)),r="<"+e;return""!==i&&(r+=" "+i+'="'+String(o).replace(n,"&quot;")+'"'),r+">"+a+"</"+e+">"}},function(t,e,i){var l=i(1);t.exports=function(t){return l((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},function(t,e){t.exports=chart},function(t,e,i){"use strict";(function(t){i(69),i(71),i(72),i(103),i(66),i(58),i(100),i(110),i(84),i(121),i(65),i(115),i(123),i(129),i(68),i(95),i(73),i(116),i(86),i(206),i(98),i(74);function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*! PhotoSwipe - v4.1.1 - 2015-12-24
 * http://photoswipe.com
 * Copyright (c) 2015 Dmitry Semenov; */!function(l,n){ true&&i(80)?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==( false?undefined:e(exports))?t.exports=n():window.PhotoSwipe=n()}(0,(function(){return function(t,i,l,n){var o={features:null,bind:function(t,e,i,l){var n=(l?"remove":"add")+"EventListener";e=e.split(" ");for(var o=0;o<e.length;o++)e[o]&&t[n](e[o],i,!1)},isArray:function(t){return t instanceof Array},createEl:function(t,e){var i=document.createElement(e||"div");return t&&(i.className=t),i},getScrollY:function(){var t=window.pageYOffset;return void 0!==t?t:document.documentElement.scrollTop},unbind:function(t,e,i){o.bind(t,e,i,!0)},removeClass:function(t,e){var i=new RegExp("(\\s|^)"+e+"(\\s|$)");t.className=t.className.replace(i," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(t,e){o.hasClass(t,e)||(t.className+=(t.className?" ":"")+e)},hasClass:function(t,e){return t.className&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(t.className)},getChildByClass:function(t,e){for(var i=t.firstChild;i;){if(o.hasClass(i,e))return i;i=i.nextSibling}},arraySearch:function(t,e,i){for(var l=t.length;l--;)if(t[l][i]===e)return l;return-1},extend:function(t,e,i){for(var l in e)if(e.hasOwnProperty(l)){if(i&&t.hasOwnProperty(l))continue;t[l]=e[l]}},easing:{sine:{out:function(t){return Math.sin(t*(Math.PI/2))},inOut:function(t){return-(Math.cos(Math.PI*t)-1)/2}},cubic:{out:function(t){return--t*t*t+1}}},detectFeatures:function(){if(o.features)return o.features;var t=o.createEl().style,e="",i={};if(i.oldIE=document.all&&!document.addEventListener,i.touch="ontouchstart"in window,window.requestAnimationFrame&&(i.raf=window.requestAnimationFrame,i.caf=window.cancelAnimationFrame),i.pointerEvent=navigator.pointerEnabled||navigator.msPointerEnabled,!i.pointerEvent){var l=navigator.userAgent;if(/iP(hone|od)/.test(navigator.platform)){var n=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);n&&n.length>0&&((n=parseInt(n[1],10))>=1&&8>n&&(i.isOldIOSPhone=!0))}var a=l.match(/Android\s([0-9\.]*)/),r=a?a[1]:0;(r=parseFloat(r))>=1&&(4.4>r&&(i.isOldAndroid=!0),i.androidVersion=r),i.isMobileOpera=/opera mini|opera mobi/i.test(l)}for(var s,c,u=["transform","perspective","animationName"],d=["","webkit","Moz","ms","O"],h=0;4>h;h++){e=d[h];for(var p=0;3>p;p++)s=u[p],c=e+(e?s.charAt(0).toUpperCase()+s.slice(1):s),!i[s]&&c in t&&(i[s]=c);e&&!i.raf&&(e=e.toLowerCase(),i.raf=window[e+"RequestAnimationFrame"],i.raf&&(i.caf=window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"]))}if(!i.raf){var f=0;i.raf=function(t){var e=(new Date).getTime(),i=Math.max(0,16-(e-f)),l=window.setTimeout((function(){t(e+i)}),i);return f=e+i,l},i.caf=function(t){clearTimeout(t)}}return i.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,o.features=i,i}};o.detectFeatures(),o.features.oldIE&&(o.bind=function(t,i,l,n){i=i.split(" ");for(var o,a=(n?"detach":"attach")+"Event",r=function(){l.handleEvent.call(l)},s=0;s<i.length;s++)if(o=i[s])if("object"==e(l)&&l.handleEvent){if(n){if(!l["oldIE"+o])return!1}else l["oldIE"+o]=r;t[a]("on"+o,l["oldIE"+o])}else t[a]("on"+o,l)});var a=this,r={allowPanToNext:!0,spacing:.12,bgOpacity:1,mouseUsed:!1,loop:!0,pinchToClose:!0,closeOnScroll:!0,closeOnVerticalDrag:!0,verticalDragRange:.75,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:!1,focus:!0,escKey:!0,arrowKeys:!0,mainScrollEndFriction:.35,panEndFriction:.35,isClickableElement:function(t){return"A"===t.tagName},getDoubleTapZoom:function(t,e){return t?1:e.initialZoomLevel<.7?1:1.33},maxSpreadZoom:1.33,modal:!0,scaleMode:"fit"};o.extend(r,n);var s,c,u,d,h,p,f,m,v,g,y,b,x,w,k,S,M,C,T,A,O,E,P,I,_,$,D,L,R,V,F,W,j,N,z,B,H,Z,Y,X,U,G,q,K,Q,J,tt,et,it,lt,nt,ot,at,rt,st,ct={x:0,y:0},ut={x:0,y:0},dt={x:0,y:0},ht={},pt=0,ft={},mt={x:0,y:0},vt=0,gt=!0,yt=[],bt={},xt=!1,wt=function(t,e){o.extend(a,e.publicMethods),yt.push(t)},kt=function(t){var e=We();return t>e-1?t-e:0>t?e+t:t},St={},Mt=function(t,e){return St[t]||(St[t]=[]),St[t].push(e)},Ct=function(t){var e=St[t];if(e){var i=Array.prototype.slice.call(arguments);i.shift();for(var l=0;l<e.length;l++)e[l].apply(a,i)}},Tt=function(){return(new Date).getTime()},At=function(t){at=t,a.bg.style.opacity=t*r.bgOpacity},Ot=function(t,e,i,l,n){(!xt||n&&n!==a.currItem)&&(l/=n?n.fitRatio:a.currItem.fitRatio),t[E]=b+e+"px, "+i+"px"+x+" scale("+l+")"},Et=function(t){et&&(t&&(g>a.currItem.fitRatio?xt||(Ue(a.currItem,!1,!0),xt=!0):xt&&(Ue(a.currItem),xt=!1)),Ot(et,dt.x,dt.y,g))},Pt=function(t){t.container&&Ot(t.container.style,t.initialPosition.x,t.initialPosition.y,t.initialZoomLevel,t)},It=function(t,e){e[E]=b+t+"px, 0px"+x},_t=function(t,e){if(!r.loop&&e){var i=d+(mt.x*pt-t)/mt.x,l=Math.round(t-ue.x);(0>i&&l>0||i>=We()-1&&0>l)&&(t=ue.x+l*r.mainScrollEndFriction)}ue.x=t,It(t,h)},$t=function(t,e){var i=de[t]-ft[t];return ut[t]+ct[t]+i-i*(e/y)},Dt=function(t,e){t.x=e.x,t.y=e.y,e.id&&(t.id=e.id)},Lt=function(t){t.x=Math.round(t.x),t.y=Math.round(t.y)},Rt=null,Vt=function e(){Rt&&(o.unbind(document,"mousemove",e),o.addClass(t,"pswp--has_mouse"),r.mouseUsed=!0,Ct("mouseUsed")),Rt=setTimeout((function(){Rt=null}),100)},Ft=function(t,e){var i=He(a.currItem,ht,t);return e&&(tt=i),i},Wt=function(t){return t||(t=a.currItem),t.initialZoomLevel},jt=function(t){return t||(t=a.currItem),t.w>0?r.maxSpreadZoom:1},Nt=function(t,e,i,l){return l===a.currItem.initialZoomLevel?(i[t]=a.currItem.initialPosition[t],!0):(i[t]=$t(t,l),i[t]>e.min[t]?(i[t]=e.min[t],!0):i[t]<e.max[t]&&(i[t]=e.max[t],!0))},zt=function(t){var e="";r.escKey&&27===t.keyCode?e="close":r.arrowKeys&&(37===t.keyCode?e="prev":39===t.keyCode&&(e="next")),e&&(t.ctrlKey||t.altKey||t.shiftKey||t.metaKey||(t.preventDefault?t.preventDefault():t.returnValue=!1,a[e]()))},Bt=function(t){t&&(U||X||it||B)&&(t.preventDefault(),t.stopPropagation())},Ht=function(){a.setScrollOffset(0,o.getScrollY())},Zt={},Yt=0,Xt=function(t){Zt[t]&&(Zt[t].raf&&$(Zt[t].raf),Yt--,delete Zt[t])},Ut=function(t){Zt[t]&&Xt(t),Zt[t]||(Yt++,Zt[t]={})},Gt=function(){for(var t in Zt)Zt.hasOwnProperty(t)&&Xt(t)},qt=function(t,e,i,l,n,o,a){var r,s=Tt();Ut(t);!function c(){if(Zt[t]){if((r=Tt()-s)>=l)return Xt(t),o(i),void(a&&a());o((i-e)*n(r/l)+e),Zt[t].raf=_(c)}}()},Kt={shout:Ct,listen:Mt,viewportSize:ht,options:r,isMainScrollAnimating:function(){return it},getZoomLevel:function(){return g},getCurrentIndex:function(){return d},isDragging:function(){return Z},isZooming:function(){return Q},setScrollOffset:function(t,e){ft.x=t,V=ft.y=e,Ct("updateScrollOffset",ft)},applyZoomPan:function(t,e,i,l){dt.x=e,dt.y=i,g=t,Et(l)},init:function(){if(!s&&!c){var e;a.framework=o,a.template=t,a.bg=o.getChildByClass(t,"pswp__bg"),D=t.className,s=!0,F=o.detectFeatures(),_=F.raf,$=F.caf,E=F.transform,R=F.oldIE,a.scrollWrap=o.getChildByClass(t,"pswp__scroll-wrap"),a.container=o.getChildByClass(a.scrollWrap,"pswp__container"),h=a.container.style,a.itemHolders=S=[{el:a.container.children[0],wrap:0,index:-1},{el:a.container.children[1],wrap:0,index:-1},{el:a.container.children[2],wrap:0,index:-1}],S[0].el.style.display=S[2].el.style.display="none",function(){if(E){var e=F.perspective&&!I;return b="translate"+(e?"3d(":"("),void(x=F.perspective?", 0px)":")")}E="left",o.addClass(t,"pswp--ie"),It=function(t,e){e.left=t+"px"},Pt=function(t){var e=t.fitRatio>1?1:t.fitRatio,i=t.container.style,l=e*t.w,n=e*t.h;i.width=l+"px",i.height=n+"px",i.left=t.initialPosition.x+"px",i.top=t.initialPosition.y+"px"},Et=function(){if(et){var t=et,e=a.currItem,i=e.fitRatio>1?1:e.fitRatio,l=i*e.w,n=i*e.h;t.width=l+"px",t.height=n+"px",t.left=dt.x+"px",t.top=dt.y+"px"}}}(),v={resize:a.updateSize,scroll:Ht,keydown:zt,click:Bt};var l=F.isOldIOSPhone||F.isOldAndroid||F.isMobileOpera;for(F.animationName&&F.transform&&!l||(r.showAnimationDuration=r.hideAnimationDuration=0),e=0;e<yt.length;e++)a["init"+yt[e]]();if(i)(a.ui=new i(a,o)).init();Ct("firstUpdate"),d=d||r.index||0,(isNaN(d)||0>d||d>=We())&&(d=0),a.currItem=Fe(d),(F.isOldIOSPhone||F.isOldAndroid)&&(gt=!1),t.setAttribute("aria-hidden","false"),r.modal&&(gt?t.style.position="fixed":(t.style.position="absolute",t.style.top=o.getScrollY()+"px")),void 0===V&&(Ct("initialLayout"),V=L=o.getScrollY());var n="pswp--open ";for(r.mainClass&&(n+=r.mainClass+" "),r.showHideOpacity&&(n+="pswp--animate_opacity "),n+=I?"pswp--touch":"pswp--notouch",n+=F.animationName?" pswp--css_animation":"",n+=F.svg?" pswp--svg":"",o.addClass(t,n),a.updateSize(),p=-1,vt=null,e=0;3>e;e++)It((e+p)*mt.x,S[e].el.style);R||o.bind(a.scrollWrap,m,a),Mt("initialZoomInEnd",(function(){a.setContent(S[0],d-1),a.setContent(S[2],d+1),S[0].el.style.display=S[2].el.style.display="block",r.focus&&t.focus(),o.bind(document,"keydown",a),F.transform&&o.bind(a.scrollWrap,"click",a),r.mouseUsed||o.bind(document,"mousemove",Vt),o.bind(window,"resize scroll",a),Ct("bindEvents")})),a.setContent(S[1],d),a.updateCurrItem(),Ct("afterInit"),gt||(w=setInterval((function(){Yt||Z||Q||g!==a.currItem.initialZoomLevel||a.updateSize()}),1e3)),o.addClass(t,"pswp--visible")}},close:function(){s&&(s=!1,c=!0,Ct("close"),o.unbind(window,"resize",a),o.unbind(window,"scroll",v.scroll),o.unbind(document,"keydown",a),o.unbind(document,"mousemove",Vt),F.transform&&o.unbind(a.scrollWrap,"click",a),Z&&o.unbind(window,f,a),Ct("unbindEvents"),je(a.currItem,null,!0,a.destroy))},destroy:function(){Ct("destroy"),De&&clearTimeout(De),t.setAttribute("aria-hidden","true"),t.className=D,w&&clearInterval(w),o.unbind(a.scrollWrap,m,a),o.unbind(window,"scroll",a),fe(),Gt(),St=null},panTo:function(t,e,i){i||(t>tt.min.x?t=tt.min.x:t<tt.max.x&&(t=tt.max.x),e>tt.min.y?e=tt.min.y:e<tt.max.y&&(e=tt.max.y)),dt.x=t,dt.y=e,Et()},handleEvent:function(t){t=t||window.event,v[t.type]&&v[t.type](t)},goTo:function(t){var e=(t=kt(t))-d;vt=e,d=t,a.currItem=Fe(d),pt-=e,_t(mt.x*pt),Gt(),it=!1,a.updateCurrItem()},next:function(){a.goTo(d+1)},prev:function(){a.goTo(d-1)},updateCurrZoomItem:function(t){if(t&&Ct("beforeChange",0),S[1].el.children.length){var e=S[1].el.children[0];et=o.hasClass(e,"pswp__zoom-wrap")?e.style:null}else et=null;tt=a.currItem.bounds,y=g=a.currItem.initialZoomLevel,dt.x=tt.center.x,dt.y=tt.center.y,t&&Ct("afterChange")},invalidateCurrItems:function(){k=!0;for(var t=0;3>t;t++)S[t].item&&(S[t].item.needsUpdate=!0)},updateCurrItem:function(t){if(0!==vt){var e,i=Math.abs(vt);if(!(t&&2>i)){a.currItem=Fe(d),xt=!1,Ct("beforeChange",vt),i>=3&&(p+=vt+(vt>0?-3:3),i=3);for(var l=0;i>l;l++)vt>0?(e=S.shift(),S[2]=e,It((++p+2)*mt.x,e.el.style),a.setContent(e,d-i+l+1+1)):(e=S.pop(),S.unshift(e),It(--p*mt.x,e.el.style),a.setContent(e,d+i-l-1-1));if(et&&1===Math.abs(vt)){var n=Fe(M);n.initialZoomLevel!==g&&(He(n,ht),Ue(n),Pt(n))}vt=0,a.updateCurrZoomItem(),M=d,Ct("afterChange")}}},updateSize:function(e){if(!gt&&r.modal){var i=o.getScrollY();if(V!==i&&(t.style.top=i+"px",V=i),!e&&bt.x===window.innerWidth&&bt.y===window.innerHeight)return;bt.x=window.innerWidth,bt.y=window.innerHeight,t.style.height=bt.y+"px"}if(ht.x=a.scrollWrap.clientWidth,ht.y=a.scrollWrap.clientHeight,Ht(),mt.x=ht.x+Math.round(ht.x*r.spacing),mt.y=ht.y,_t(mt.x*pt),Ct("beforeResize"),void 0!==p){for(var l,n,s,c=0;3>c;c++)l=S[c],It((c+p)*mt.x,l.el.style),s=d+c-1,r.loop&&We()>2&&(s=kt(s)),(n=Fe(s))&&(k||n.needsUpdate||!n.bounds)?(a.cleanSlide(n),a.setContent(l,s),1===c&&(a.currItem=n,a.updateCurrZoomItem(!0)),n.needsUpdate=!1):-1===l.index&&s>=0&&a.setContent(l,s),n&&n.container&&(He(n,ht),Ue(n),Pt(n));k=!1}y=g=a.currItem.initialZoomLevel,(tt=a.currItem.bounds)&&(dt.x=tt.center.x,dt.y=tt.center.y,Et(!0)),Ct("resize")},zoomTo:function(t,e,i,l,n){e&&(y=g,de.x=Math.abs(e.x)-dt.x,de.y=Math.abs(e.y)-dt.y,Dt(ut,dt));var a=Ft(t,!1),r={};Nt("x",a,r,t),Nt("y",a,r,t);var s=g,c=dt.x,u=dt.y;Lt(r);var d=function(e){1===e?(g=t,dt.x=r.x,dt.y=r.y):(g=(t-s)*e+s,dt.x=(r.x-c)*e+c,dt.y=(r.y-u)*e+u),n&&n(e),Et(1===e)};i?qt("customZoomTo",0,1,i,l||o.easing.sine.inOut,d):d(1)}},Qt={},Jt={},te={},ee={},ie={},le=[],ne={},oe=[],ae={},re=0,se={x:0,y:0},ce=0,ue={x:0,y:0},de={x:0,y:0},he={x:0,y:0},pe=function(t,e){return ae.x=Math.abs(t.x-e.x),ae.y=Math.abs(t.y-e.y),Math.sqrt(ae.x*ae.x+ae.y*ae.y)},fe=function(){G&&($(G),G=null)},me={},ve=function(t,e){return me.prevent=!function t(e,i){return!(!e||e===document)&&(!(e.getAttribute("class")&&e.getAttribute("class").indexOf("pswp__scroll-wrap")>-1)&&(i(e)?e:t(e.parentNode,i)))}(t.target,r.isClickableElement),Ct("preventDragEvent",t,e,me),me.prevent},ge=function(t,e){return e.x=t.pageX,e.y=t.pageY,e.id=t.identifier,e},ye=function(t,e,i){i.x=.5*(t.x+e.x),i.y=.5*(t.y+e.y)},be=function(){var t=dt.y-a.currItem.initialPosition.y;return 1-Math.abs(t/(ht.y/2))},xe={},we={},ke=[],Se=function(t){for(;ke.length>0;)ke.pop();return P?(st=0,le.forEach((function(t){0===st?ke[0]=t:1===st&&(ke[1]=t),st++}))):t.type.indexOf("touch")>-1?t.touches&&t.touches.length>0&&(ke[0]=ge(t.touches[0],xe),t.touches.length>1&&(ke[1]=ge(t.touches[1],we))):(xe.x=t.pageX,xe.y=t.pageY,xe.id="",ke[0]=xe),ke},Me=function(t,e){var i,l,n,o,s=dt[t]+e[t],c=e[t]>0,u=ue.x+e.x,d=ue.x-ne.x;return i=s>tt.min[t]||s<tt.max[t]?r.panEndFriction:1,s=dt[t]+e[t]*i,!r.allowPanToNext&&g!==a.currItem.initialZoomLevel||(et?"h"!==lt||"x"!==t||X||(c?(s>tt.min[t]&&(i=r.panEndFriction,tt.min[t]-s,l=tt.min[t]-ut[t]),(0>=l||0>d)&&We()>1?(o=u,0>d&&u>ne.x&&(o=ne.x)):tt.min.x!==tt.max.x&&(n=s)):(s<tt.max[t]&&(i=r.panEndFriction,s-tt.max[t],l=ut[t]-tt.max[t]),(0>=l||d>0)&&We()>1?(o=u,d>0&&u<ne.x&&(o=ne.x)):tt.min.x!==tt.max.x&&(n=s))):o=u,"x"!==t)?void(it||q||g>a.currItem.fitRatio&&(dt[t]+=e[t]*i)):(void 0!==o&&(_t(o,!0),q=o!==ne.x),tt.min.x!==tt.max.x&&(void 0!==n?dt.x=n:q||(dt.x+=e.x*i)),void 0!==o)},Ce=function(t){if(!("mousedown"===t.type&&t.button>0)){if(Ve)return void t.preventDefault();if(!H||"mousedown"!==t.type){if(ve(t,!0)&&t.preventDefault(),Ct("pointerDown"),P){var e=o.arraySearch(le,t.pointerId,"id");0>e&&(e=le.length),le[e]={x:t.pageX,y:t.pageY,id:t.pointerId}}var i=Se(t),l=i.length;K=null,Gt(),Z&&1!==l||(Z=nt=!0,o.bind(window,f,a),z=rt=ot=B=q=U=Y=X=!1,lt=null,Ct("firstTouchStart",i),Dt(ut,dt),ct.x=ct.y=0,Dt(ee,i[0]),Dt(ie,ee),ne.x=mt.x*pt,oe=[{x:ee.x,y:ee.y}],j=W=Tt(),Ft(g,!0),fe(),function t(){Z&&(G=_(t),Ae())}()),!Q&&l>1&&!it&&!q&&(y=g,X=!1,Q=Y=!0,ct.y=ct.x=0,Dt(ut,dt),Dt(Qt,i[0]),Dt(Jt,i[1]),ye(Qt,Jt,he),de.x=Math.abs(he.x)-dt.x,de.y=Math.abs(he.y)-dt.y,J=pe(Qt,Jt))}}},Te=function(t){if(t.preventDefault(),P){var e=o.arraySearch(le,t.pointerId,"id");if(e>-1){var i=le[e];i.x=t.pageX,i.y=t.pageY}}if(Z){var l=Se(t);if(lt||U||Q)K=l;else if(ue.x!==mt.x*pt)lt="h";else{var n=Math.abs(l[0].x-ee.x)-Math.abs(l[0].y-ee.y);Math.abs(n)>=10&&(lt=n>0?"h":"v",K=l)}}},Ae=function(){if(K){var t=K.length;if(0!==t)if(Dt(Qt,K[0]),te.x=Qt.x-ee.x,te.y=Qt.y-ee.y,Q&&t>1){if(ee.x=Qt.x,ee.y=Qt.y,!te.x&&!te.y&&function(t,e){return t.x===e.x&&t.y===e.y}(K[1],Jt))return;Dt(Jt,K[1]),X||(X=!0,Ct("zoomGestureStarted"));var e=pe(Qt,Jt),i=_e(e);i>a.currItem.initialZoomLevel+a.currItem.initialZoomLevel/15&&(rt=!0);var l=1,n=Wt(),o=jt();if(n>i)if(r.pinchToClose&&!rt&&y<=a.currItem.initialZoomLevel){var s=1-(n-i)/(n/1.2);At(s),Ct("onPinchClose",s),ot=!0}else(l=(n-i)/n)>1&&(l=1),i=n-l*(n/3);else i>o&&((l=(i-o)/(6*n))>1&&(l=1),i=o+l*n);0>l&&(l=0),e,ye(Qt,Jt,se),ct.x+=se.x-he.x,ct.y+=se.y-he.y,Dt(he,se),dt.x=$t("x",i),dt.y=$t("y",i),z=i>g,g=i,Et()}else{if(!lt)return;if(nt&&(nt=!1,Math.abs(te.x)>=10&&(te.x-=K[0].x-ie.x),Math.abs(te.y)>=10&&(te.y-=K[0].y-ie.y)),ee.x=Qt.x,ee.y=Qt.y,0===te.x&&0===te.y)return;if("v"===lt&&r.closeOnVerticalDrag&&"fit"===r.scaleMode&&g===a.currItem.initialZoomLevel){ct.y+=te.y,dt.y+=te.y;var c=be();return B=!0,Ct("onVerticalDrag",c),At(c),void Et()}(function(t,e,i){if(t-j>50){var l=oe.length>2?oe.shift():{};l.x=e,l.y=i,oe.push(l),j=t}})(Tt(),Qt.x,Qt.y),U=!0,tt=a.currItem.bounds,Me("x",te)||(Me("y",te),Lt(dt),Et())}}},Oe=function(t){if(F.isOldAndroid){if(H&&"mouseup"===t.type)return;t.type.indexOf("touch")>-1&&(clearTimeout(H),H=setTimeout((function(){H=0}),600))}var e;if(Ct("pointerUp"),ve(t,!1)&&t.preventDefault(),P){var i=o.arraySearch(le,t.pointerId,"id");if(i>-1)if(e=le.splice(i,1)[0],navigator.pointerEnabled)e.type=t.pointerType||"mouse";else{e.type={4:"mouse",2:"touch",3:"pen"}[t.pointerType],e.type||(e.type=t.pointerType||"mouse")}}var l,n=Se(t),s=n.length;if("mouseup"===t.type&&(s=0),2===s)return K=null,!0;1===s&&Dt(ie,n[0]),0!==s||lt||it||(e||("mouseup"===t.type?e={x:t.pageX,y:t.pageY,type:"mouse"}:t.changedTouches&&t.changedTouches[0]&&(e={x:t.changedTouches[0].pageX,y:t.changedTouches[0].pageY,type:"touch"})),Ct("touchRelease",t,e));var c=-1;if(0===s&&(Z=!1,o.unbind(window,f,a),fe(),Q?c=0:-1!==ce&&(c=Tt()-ce)),ce=1===s?Tt():-1,l=-1!==c&&150>c?"zoom":"swipe",Q&&2>s&&(Q=!1,1===s&&(l="zoomPointerUp"),Ct("zoomGestureEnded")),K=null,U||X||it||B)if(Gt(),N||(N=Ee()),N.calculateSwipeSpeed("x"),B){if(be()<r.verticalDragRange)a.close();else{var u=dt.y,d=at;qt("verticalDrag",0,1,300,o.easing.cubic.out,(function(t){dt.y=(a.currItem.initialPosition.y-u)*t+u,At((1-d)*t+d),Et()})),Ct("onVerticalDrag",1)}}else{if((q||it)&&0===s){if(Ie(l,N))return;l="zoomPointerUp"}if(!it)return"swipe"!==l?void $e():void(!q&&g>a.currItem.fitRatio&&Pe(N))}},Ee=function(){var t,e,i={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(l){oe.length>1?(t=Tt()-j+50,e=oe[oe.length-2][l]):(t=Tt()-W,e=ie[l]),i.lastFlickOffset[l]=ee[l]-e,i.lastFlickDist[l]=Math.abs(i.lastFlickOffset[l]),i.lastFlickDist[l]>20?i.lastFlickSpeed[l]=i.lastFlickOffset[l]/t:i.lastFlickSpeed[l]=0,Math.abs(i.lastFlickSpeed[l])<.1&&(i.lastFlickSpeed[l]=0),i.slowDownRatio[l]=.95,i.slowDownRatioReverse[l]=1-i.slowDownRatio[l],i.speedDecelerationRatio[l]=1},calculateOverBoundsAnimOffset:function(t,e){i.backAnimStarted[t]||(dt[t]>tt.min[t]?i.backAnimDestination[t]=tt.min[t]:dt[t]<tt.max[t]&&(i.backAnimDestination[t]=tt.max[t]),void 0!==i.backAnimDestination[t]&&(i.slowDownRatio[t]=.7,i.slowDownRatioReverse[t]=1-i.slowDownRatio[t],i.speedDecelerationRatioAbs[t]<.05&&(i.lastFlickSpeed[t]=0,i.backAnimStarted[t]=!0,qt("bounceZoomPan"+t,dt[t],i.backAnimDestination[t],e||300,o.easing.sine.out,(function(e){dt[t]=e,Et()})))))},calculateAnimOffset:function(t){i.backAnimStarted[t]||(i.speedDecelerationRatio[t]=i.speedDecelerationRatio[t]*(i.slowDownRatio[t]+i.slowDownRatioReverse[t]-i.slowDownRatioReverse[t]*i.timeDiff/10),i.speedDecelerationRatioAbs[t]=Math.abs(i.lastFlickSpeed[t]*i.speedDecelerationRatio[t]),i.distanceOffset[t]=i.lastFlickSpeed[t]*i.speedDecelerationRatio[t]*i.timeDiff,dt[t]+=i.distanceOffset[t])},panAnimLoop:function(){return Zt.zoomPan&&(Zt.zoomPan.raf=_(i.panAnimLoop),i.now=Tt(),i.timeDiff=i.now-i.lastNow,i.lastNow=i.now,i.calculateAnimOffset("x"),i.calculateAnimOffset("y"),Et(),i.calculateOverBoundsAnimOffset("x"),i.calculateOverBoundsAnimOffset("y"),i.speedDecelerationRatioAbs.x<.05&&i.speedDecelerationRatioAbs.y<.05)?(dt.x=Math.round(dt.x),dt.y=Math.round(dt.y),Et(),void Xt("zoomPan")):void 0}};return i},Pe=function(t){return t.calculateSwipeSpeed("y"),tt=a.currItem.bounds,t.backAnimDestination={},t.backAnimStarted={},Math.abs(t.lastFlickSpeed.x)<=.05&&Math.abs(t.lastFlickSpeed.y)<=.05?(t.speedDecelerationRatioAbs.x=t.speedDecelerationRatioAbs.y=0,t.calculateOverBoundsAnimOffset("x"),t.calculateOverBoundsAnimOffset("y"),!0):(Ut("zoomPan"),t.lastNow=Tt(),void t.panAnimLoop())},Ie=function(t,e){var i,l,n;if(it||(re=d),"swipe"===t){var s=ee.x-ie.x,c=e.lastFlickDist.x<10;s>30&&(c||e.lastFlickOffset.x>20)?l=-1:-30>s&&(c||e.lastFlickOffset.x<-20)&&(l=1)}l&&(0>(d+=l)?(d=r.loop?We()-1:0,n=!0):d>=We()&&(d=r.loop?0:We()-1,n=!0),(!n||r.loop)&&(vt+=l,pt-=l,i=!0));var u,h=mt.x*pt,p=Math.abs(h-ue.x);return i||h>ue.x==e.lastFlickSpeed.x>0?(u=Math.abs(e.lastFlickSpeed.x)>0?p/Math.abs(e.lastFlickSpeed.x):333,u=Math.min(u,400),u=Math.max(u,250)):u=333,re===d&&(i=!1),it=!0,Ct("mainScrollAnimStart"),qt("mainScroll",ue.x,h,u,o.easing.cubic.out,_t,(function(){Gt(),it=!1,re=-1,(i||re!==d)&&a.updateCurrItem(),Ct("mainScrollAnimComplete")})),i&&a.updateCurrItem(!0),i},_e=function(t){return 1/J*t*y},$e=function(){var t=g,e=Wt(),i=jt();e>g?t=e:g>i&&(t=i);var l,n=at;return ot&&!z&&!rt&&e>g?(a.close(),!0):(ot&&(l=function(t){At((1-n)*t+n)}),a.zoomTo(t,0,200,o.easing.cubic.out,l),!0)};wt("Gestures",{publicMethods:{initGestures:function(){var t=function(t,e,i,l,n){C=t+e,T=t+i,A=t+l,O=n?t+n:""};(P=F.pointerEvent)&&F.touch&&(F.touch=!1),P?navigator.pointerEnabled?t("pointer","down","move","up","cancel"):t("MSPointer","Down","Move","Up","Cancel"):F.touch?(t("touch","start","move","end","cancel"),I=!0):t("mouse","down","move","up"),f=T+" "+A+" "+O,m=C,P&&!I&&(I=navigator.maxTouchPoints>1||navigator.msMaxTouchPoints>1),a.likelyTouchDevice=I,v[C]=Ce,v[T]=Te,v[A]=Oe,O&&(v[O]=v[A]),F.touch&&(m+=" mousedown",f+=" mousemove mouseup",v.mousedown=v[C],v.mousemove=v[T],v.mouseup=v[A]),I||(r.allowPanToNext=!1)}}});var De,Le,Re,Ve,Fe,We,je=function(e,i,l,n){var s;De&&clearTimeout(De),Ve=!0,Re=!0,e.initialLayout?(s=e.initialLayout,e.initialLayout=null):s=r.getThumbBoundsFn&&r.getThumbBoundsFn(d);var c=l?r.hideAnimationDuration:r.showAnimationDuration,h=function(){Xt("initialZoom"),l?(a.template.removeAttribute("style"),a.bg.removeAttribute("style")):(At(1),i&&(i.style.display="block"),o.addClass(t,"pswp--animated-in"),Ct("initialZoom"+(l?"OutEnd":"InEnd"))),n&&n(),Ve=!1};if(!c||!s||void 0===s.x)return Ct("initialZoom"+(l?"Out":"In")),g=e.initialZoomLevel,Dt(dt,e.initialPosition),Et(),t.style.opacity=l?0:1,At(1),void(c?setTimeout((function(){h()}),c):h());!function(){var i=u,n=!a.currItem.src||a.currItem.loadError||r.showHideOpacity;e.miniImg&&(e.miniImg.style.webkitBackfaceVisibility="hidden"),l||(g=s.w/e.w,dt.x=s.x,dt.y=s.y-L,a[n?"template":"bg"].style.opacity=.001,Et()),Ut("initialZoom"),l&&!i&&o.removeClass(t,"pswp--animated-in"),n&&(l?o[(i?"remove":"add")+"Class"](t,"pswp--animate_opacity"):setTimeout((function(){o.addClass(t,"pswp--animate_opacity")}),30)),De=setTimeout((function(){if(Ct("initialZoom"+(l?"Out":"In")),l){var a=s.w/e.w,r={x:dt.x,y:dt.y},u=g,d=at,p=function(e){1===e?(g=a,dt.x=s.x,dt.y=s.y-V):(g=(a-u)*e+u,dt.x=(s.x-r.x)*e+r.x,dt.y=(s.y-V-r.y)*e+r.y),Et(),n?t.style.opacity=1-e:At(d-e*d)};i?qt("initialZoom",0,1,c,o.easing.cubic.out,p,h):(p(1),De=setTimeout(h,c+20))}else g=e.initialZoomLevel,Dt(dt,e.initialPosition),Et(),At(1),n?t.style.opacity=1:At(1),De=setTimeout(h,c+20)}),l?25:90)}()},Ne={},ze=[],Be={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:!1,preload:[1,1],getNumItemsFn:function(){return Le.length}},He=function(t,e,i){if(t.src&&!t.loadError){var l=!i;if(l&&(t.vGap||(t.vGap={top:0,bottom:0}),Ct("parseVerticalMargin",t)),Ne.x=e.x,Ne.y=e.y-t.vGap.top-t.vGap.bottom,l){var n=Ne.x/t.w,o=Ne.y/t.h;t.fitRatio=o>n?n:o;var a=r.scaleMode;"orig"===a?i=1:"fit"===a&&(i=t.fitRatio),i>1&&(i=1),t.initialZoomLevel=i,t.bounds||(t.bounds={center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}})}if(!i)return;return function(t,e,i){var l=t.bounds;l.center.x=Math.round((Ne.x-e)/2),l.center.y=Math.round((Ne.y-i)/2)+t.vGap.top,l.max.x=e>Ne.x?Math.round(Ne.x-e):l.center.x,l.max.y=i>Ne.y?Math.round(Ne.y-i)+t.vGap.top:l.center.y,l.min.x=e>Ne.x?0:l.center.x,l.min.y=i>Ne.y?t.vGap.top:l.center.y}(t,t.w*i,t.h*i),l&&i===t.initialZoomLevel&&(t.initialPosition=t.bounds.center),t.bounds}return t.w=t.h=0,t.initialZoomLevel=t.fitRatio=1,t.bounds={center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}},t.initialPosition=t.bounds.center,t.bounds},Ze=function(t,e,i,l,n,o){e.loadError||l&&(e.imageAppended=!0,Ue(e,l,e===a.currItem&&xt),i.appendChild(l),o&&setTimeout((function(){e&&e.loaded&&e.placeholder&&(e.placeholder.style.display="none",e.placeholder=null)}),500))},Ye=function(t){t.loading=!0,t.loaded=!1;var e=t.img=o.createEl("pswp__img","img"),i=function(){t.loading=!1,t.loaded=!0,t.loadComplete?t.loadComplete(t):t.img=null,e.onload=e.onerror=null,e=null};return e.onload=i,e.onerror=function(){t.loadError=!0,i()},e.src=t.src,e},Xe=function(t,e){return t.src&&t.loadError&&t.container?(e&&(t.container.innerHTML=""),t.container.innerHTML=r.errorMsg.replace("%url%",t.src),!0):void 0},Ue=function(t,e,i){if(t.src){e||(e=t.container.lastChild);var l=i?t.w:Math.round(t.w*t.fitRatio),n=i?t.h:Math.round(t.h*t.fitRatio);t.placeholder&&!t.loaded&&(t.placeholder.style.width=l+"px",t.placeholder.style.height=n+"px"),e.style.width=l+"px",e.style.height=n+"px"}},Ge=function(){if(ze.length){for(var t,e=0;e<ze.length;e++)(t=ze[e]).holder.index===t.index&&Ze(t.index,t.item,t.baseDiv,t.img,0,t.clearPlaceholder);ze=[]}};wt("Controller",{publicMethods:{lazyLoadItem:function(t){t=kt(t);var e=Fe(t);e&&(!e.loaded&&!e.loading||k)&&(Ct("gettingData",t,e),e.src&&Ye(e))},initController:function(){o.extend(r,Be,!0),a.items=Le=l,Fe=a.getItemAt,We=r.getNumItemsFn,r.loop,We()<3&&(r.loop=!1),Mt("beforeChange",(function(t){var e,i=r.preload,l=null===t||t>=0,n=Math.min(i[0],We()),o=Math.min(i[1],We());for(e=1;(l?o:n)>=e;e++)a.lazyLoadItem(d+e);for(e=1;(l?n:o)>=e;e++)a.lazyLoadItem(d-e)})),Mt("initialLayout",(function(){a.currItem.initialLayout=r.getThumbBoundsFn&&r.getThumbBoundsFn(d)})),Mt("mainScrollAnimComplete",Ge),Mt("initialZoomInEnd",Ge),Mt("destroy",(function(){for(var t,e=0;e<Le.length;e++)(t=Le[e]).container&&(t.container=null),t.placeholder&&(t.placeholder=null),t.img&&(t.img=null),t.preloader&&(t.preloader=null),t.loadError&&(t.loaded=t.loadError=!1);ze=null}))},getItemAt:function(t){return t>=0&&void 0!==Le[t]&&Le[t]},allowProgressiveImg:function(){return r.forceProgressiveLoading||!I||r.mouseUsed||screen.width>1200},setContent:function(t,e){r.loop&&(e=kt(e));var i=a.getItemAt(t.index);i&&(i.container=null);var l,n=a.getItemAt(e);if(n){Ct("gettingData",e,n),t.index=e,t.item=n;var c=n.container=o.createEl("pswp__zoom-wrap");if(!n.src&&n.html&&(n.html.tagName?c.appendChild(n.html):c.innerHTML=n.html),Xe(n),He(n,ht),!n.src||n.loadError||n.loaded)n.src&&!n.loadError&&((l=o.createEl("pswp__img","img")).style.opacity=1,l.src=n.src,Ue(n,l),Ze(0,n,c,l));else{if(n.loadComplete=function(i){if(s){if(t&&t.index===e){if(Xe(i,!0))return i.loadComplete=i.img=null,He(i,ht),Pt(i),void(t.index===d&&a.updateCurrZoomItem());i.imageAppended?!Ve&&i.placeholder&&(i.placeholder.style.display="none",i.placeholder=null):F.transform&&(it||Ve)?ze.push({item:i,baseDiv:c,img:i.img,index:e,holder:t,clearPlaceholder:!0}):Ze(0,i,c,i.img,0,!0)}i.loadComplete=null,i.img=null,Ct("imageLoadComplete",e,i)}},o.features.transform){var u="pswp__img pswp__img--placeholder";u+=n.msrc?"":" pswp__img--placeholder--blank";var h=o.createEl(u,n.msrc?"img":"");n.msrc&&(h.src=n.msrc),Ue(n,h),c.appendChild(h),n.placeholder=h}n.loading||Ye(n),a.allowProgressiveImg()&&(!Re&&F.transform?ze.push({item:n,baseDiv:c,img:n.img,index:e,holder:t}):Ze(0,n,c,n.img,0,!0))}Re||e!==d?Pt(n):(et=c.style,je(n,l||n.img)),t.el.innerHTML="",t.el.appendChild(c)}else t.el.innerHTML=""},cleanSlide:function(t){t.img&&(t.img.onload=t.img.onerror=null),t.loaded=t.loading=t.img=t.imageAppended=!1}}});var qe,Ke,Qe={},Je=function(t,e,i){var l=document.createEvent("CustomEvent"),n={origEvent:t,target:t.target,releasePoint:e,pointerType:i||"touch"};l.initCustomEvent("pswpTap",!0,!0,n),t.target.dispatchEvent(l)};wt("Tap",{publicMethods:{initTap:function(){Mt("firstTouchStart",a.onTapStart),Mt("touchRelease",a.onTapRelease),Mt("destroy",(function(){Qe={},qe=null}))},onTapStart:function(t){t.length>1&&(clearTimeout(qe),qe=null)},onTapRelease:function(t,e){if(e&&!U&&!Y&&!Yt){var i=e;if(qe&&(clearTimeout(qe),qe=null,function(t,e){return Math.abs(t.x-e.x)<25&&Math.abs(t.y-e.y)<25}(i,Qe)))return void Ct("doubleTap",i);if("mouse"===e.type)return void Je(t,e,"mouse");if("BUTTON"===t.target.tagName.toUpperCase()||o.hasClass(t.target,"pswp__single-tap"))return void Je(t,e);Dt(Qe,i),qe=setTimeout((function(){Je(t,e),qe=null}),300)}}}}),wt("DesktopZoom",{publicMethods:{initDesktopZoom:function(){R||(I?Mt("mouseUsed",(function(){a.setupDesktopZoom()})):a.setupDesktopZoom(!0))},setupDesktopZoom:function(e){Ke={};var i="wheel mousewheel DOMMouseScroll";Mt("bindEvents",(function(){o.bind(t,i,a.handleMouseWheel)})),Mt("unbindEvents",(function(){Ke&&o.unbind(t,i,a.handleMouseWheel)})),a.mouseZoomedIn=!1;var l,n=function(){a.mouseZoomedIn&&(o.removeClass(t,"pswp--zoomed-in"),a.mouseZoomedIn=!1),1>g?o.addClass(t,"pswp--zoom-allowed"):o.removeClass(t,"pswp--zoom-allowed"),r()},r=function(){l&&(o.removeClass(t,"pswp--dragging"),l=!1)};Mt("resize",n),Mt("afterChange",n),Mt("pointerDown",(function(){a.mouseZoomedIn&&(l=!0,o.addClass(t,"pswp--dragging"))})),Mt("pointerUp",r),e||n()},handleMouseWheel:function(t){if(g<=a.currItem.fitRatio)return r.modal&&(!r.closeOnScroll||Yt||Z?t.preventDefault():E&&Math.abs(t.deltaY)>2&&(u=!0,a.close())),!0;if(t.stopPropagation(),Ke.x=0,"deltaX"in t)1===t.deltaMode?(Ke.x=18*t.deltaX,Ke.y=18*t.deltaY):(Ke.x=t.deltaX,Ke.y=t.deltaY);else if("wheelDelta"in t)t.wheelDeltaX&&(Ke.x=-.16*t.wheelDeltaX),t.wheelDeltaY?Ke.y=-.16*t.wheelDeltaY:Ke.y=-.16*t.wheelDelta;else{if(!("detail"in t))return;Ke.y=t.detail}Ft(g,!0);var e=dt.x-Ke.x,i=dt.y-Ke.y;(r.modal||e<=tt.min.x&&e>=tt.max.x&&i<=tt.min.y&&i>=tt.max.y)&&t.preventDefault(),a.panTo(e,i)},toggleDesktopZoom:function(e){e=e||{x:ht.x/2+ft.x,y:ht.y/2+ft.y};var i=r.getDoubleTapZoom(!0,a.currItem),l=g===i;a.mouseZoomedIn=!l,a.zoomTo(l?a.currItem.initialZoomLevel:i,e,333),o[(l?"remove":"add")+"Class"](t,"pswp--zoomed-in")}}});var ti,ei,ii,li,ni,oi,ai,ri,si,ci,ui,di,hi={history:!0,galleryUID:1},pi=function(){return ui.hash.substring(1)},fi=function(){ti&&clearTimeout(ti),ii&&clearTimeout(ii)},mi=function(){var t=pi(),e={};if(t.length<5)return e;var i,l=t.split("&");for(i=0;i<l.length;i++)if(l[i]){var n=l[i].split("=");n.length<2||(e[n[0]]=n[1])}if(r.galleryPIDs){var o=e.pid;for(e.pid=0,i=0;i<Le.length;i++)if(Le[i].pid===o){e.pid=i;break}}else e.pid=parseInt(e.pid,10)-1;return e.pid<0&&(e.pid=0),e},vi=function t(){if(ii&&clearTimeout(ii),Yt||Z)ii=setTimeout(t,500);else{li?clearTimeout(ei):li=!0;var e=d+1,i=Fe(d);i.hasOwnProperty("pid")&&(e=i.pid);var l=ai+"&gid="+r.galleryUID+"&pid="+e;ri||-1===ui.hash.indexOf(l)&&(ci=!0);var n=ui.href.split("#")[0]+"#"+l;di?"#"+l!==window.location.hash&&history[ri?"replaceState":"pushState"]("",document.title,n):ri?ui.replace(n):ui.hash=l,ri=!0,ei=setTimeout((function(){li=!1}),60)}};wt("History",{publicMethods:{initHistory:function(){if(o.extend(r,hi,!0),r.history){ui=window.location,ci=!1,si=!1,ri=!1,ai=pi(),di="pushState"in history,ai.indexOf("gid=")>-1&&(ai=(ai=ai.split("&gid=")[0]).split("?gid=")[0]),Mt("afterChange",a.updateURL),Mt("unbindEvents",(function(){o.unbind(window,"hashchange",a.onHashChange)}));var t=function(){oi=!0,si||(ci?history.back():ai?ui.hash=ai:di?history.pushState("",document.title,ui.pathname+ui.search):ui.hash=""),fi()};Mt("unbindEvents",(function(){u&&t()})),Mt("destroy",(function(){oi||t()})),Mt("firstUpdate",(function(){d=mi().pid}));var e=ai.indexOf("pid=");e>-1&&("&"===(ai=ai.substring(0,e)).slice(-1)&&(ai=ai.slice(0,-1))),setTimeout((function(){s&&o.bind(window,"hashchange",a.onHashChange)}),40)}},onHashChange:function(){return pi()===ai?(si=!0,void a.close()):void(li||(ni=!0,a.goTo(mi().pid),ni=!1))},updateURL:function(){fi(),ni||(ri?ti=setTimeout(vi,800):vi())}}}),o.extend(a,Kt)}})),function(l,n){ true&&i(80)?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==( false?undefined:e(exports))?t.exports=n():window.PhotoSwipeUI_Default=n()}(0,(function(){return function(t,e){var i,l,n,o,a,r,s,c,u,d,h,p,f,m,v,g,y,b,x=this,w=!1,k=!0,S=!0,M={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,addCaptionHTMLFn:function(t,e){return t.title?(e.children[0].innerHTML=t.title,!0):(e.children[0].innerHTML="",!1)},closeEl:!0,captionEl:!0,fullscreenEl:!0,zoomEl:!0,shareEl:!0,counterEl:!0,arrowEl:!0,preloaderEl:!0,tapToClose:!1,tapToToggleControls:!0,clickToCloseNonZoomable:!0,shareButtons:[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:!0}],getImageURLForShare:function(){return t.currItem.src||""},getPageURLForShare:function(){return window.location.href},getTextForShare:function(){return t.currItem.title||""},indexIndicatorSep:" / ",fitControlsWidth:1200},C=function(t){if(g)return!0;t=t||window.event,v.timeToIdle&&v.mouseUsed&&!u&&D();for(var i,l,n=(t.target||t.srcElement).getAttribute("class")||"",o=0;o<F.length;o++)(i=F[o]).onTap&&n.indexOf("pswp__"+i.name)>-1&&(i.onTap(),l=!0);if(l){t.stopPropagation&&t.stopPropagation(),g=!0;var a=e.features.isOldAndroid?600:30;setTimeout((function(){g=!1}),a)}},T=function(t,i,l){e[(l?"add":"remove")+"Class"](t,"pswp__"+i)},A=function(){var t=1===v.getNumItemsFn();t!==m&&(T(l,"ui--one-slide",t),m=t)},O=function(){T(s,"share-modal--hidden",S)},E=function(){return(S=!S)?(e.removeClass(s,"pswp__share-modal--fade-in"),setTimeout((function(){S&&O()}),300)):(O(),setTimeout((function(){S||e.addClass(s,"pswp__share-modal--fade-in")}),30)),S||I(),!1},P=function(e){var i=(e=e||window.event).target||e.srcElement;return t.shout("shareLinkClick",e,i),!!i.href&&(!!i.hasAttribute("download")||(window.open(i.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100)),S||E(),!1))},I=function(){for(var t,e,i,l,n="",o=0;o<v.shareButtons.length;o++)t=v.shareButtons[o],e=v.getImageURLForShare(t),i=v.getPageURLForShare(t),l=v.getTextForShare(t),n+='<a href="'+t.url.replace("{{url}}",encodeURIComponent(i)).replace("{{image_url}}",encodeURIComponent(e)).replace("{{raw_image_url}}",e).replace("{{text}}",encodeURIComponent(l))+'" target="_blank" class="pswp__share--'+t.id+'"'+(t.download?"download":"")+">"+t.label+"</a>",v.parseShareButtonOut&&(n=v.parseShareButtonOut(t,n));s.children[0].innerHTML=n,s.children[0].onclick=P},_=function(t){for(var i=0;i<v.closeElClasses.length;i++)if(e.hasClass(t,"pswp__"+v.closeElClasses[i]))return!0},$=0,D=function(){clearTimeout(b),$=0,u&&x.setIdle(!1)},L=function(t){var e=(t=t||window.event).relatedTarget||t.toElement;e&&"HTML"!==e.nodeName||(clearTimeout(b),b=setTimeout((function(){x.setIdle(!0)}),v.timeToIdleOutside))},R=function(t){p!==t&&(T(h,"preloader--active",!t),p=t)},V=function(i){var a=i.vGap;if(!t.likelyTouchDevice||v.mouseUsed||screen.width>v.fitControlsWidth){var r=v.barsSize;if(v.captionEl&&"auto"===r.bottom)if(o||((o=e.createEl("pswp__caption pswp__caption--fake")).appendChild(e.createEl("pswp__caption__center")),l.insertBefore(o,n),e.addClass(l,"pswp__ui--fit")),v.addCaptionHTMLFn(i,o,!0)){var s=o.clientHeight;a.bottom=parseInt(s,10)||44}else a.bottom=r.top;else a.bottom="auto"===r.bottom?0:r.bottom;a.top=r.top}else a.top=a.bottom=0},F=[{name:"caption",option:"captionEl",onInit:function(t){n=t}},{name:"share-modal",option:"shareEl",onInit:function(t){s=t},onTap:function(){E()}},{name:"button--share",option:"shareEl",onInit:function(t){r=t},onTap:function(){E()}},{name:"button--zoom",option:"zoomEl",onTap:t.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(t){a=t}},{name:"button--close",option:"closeEl",onTap:t.close},{name:"button--arrow--left",option:"arrowEl",onTap:t.prev},{name:"button--arrow--right",option:"arrowEl",onTap:t.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){i.isFullscreen()?i.exit():i.enter()}},{name:"preloader",option:"preloaderEl",onInit:function(t){h=t}}];x.init=function(){e.extend(t.options,M,!0),v=t.options,l=e.getChildByClass(t.scrollWrap,"pswp__ui"),d=t.listen,function(){var t;d("onVerticalDrag",(function(t){k&&.95>t?x.hideControls():!k&&t>=.95&&x.showControls()})),d("onPinchClose",(function(e){k&&.9>e?(x.hideControls(),t=!0):t&&!k&&e>.9&&x.showControls()})),d("zoomGestureEnded",(function(){(t=!1)&&!k&&x.showControls()}))}(),d("beforeChange",x.update),d("doubleTap",(function(e){var i=t.currItem.initialZoomLevel;t.getZoomLevel()!==i?t.zoomTo(i,e,333):t.zoomTo(v.getDoubleTapZoom(!1,t.currItem),e,333)})),d("preventDragEvent",(function(t,e,i){var l=t.target||t.srcElement;l&&l.getAttribute("class")&&t.type.indexOf("mouse")>-1&&(l.getAttribute("class").indexOf("__caption")>0||/(SMALL|STRONG|EM)/i.test(l.tagName))&&(i.prevent=!1)})),d("bindEvents",(function(){e.bind(l,"pswpTap click",C),e.bind(t.scrollWrap,"pswpTap",x.onGlobalTap),t.likelyTouchDevice||e.bind(t.scrollWrap,"mouseover",x.onMouseOver)})),d("unbindEvents",(function(){S||E(),y&&clearInterval(y),e.unbind(document,"mouseout",L),e.unbind(document,"mousemove",D),e.unbind(l,"pswpTap click",C),e.unbind(t.scrollWrap,"pswpTap",x.onGlobalTap),e.unbind(t.scrollWrap,"mouseover",x.onMouseOver),i&&(e.unbind(document,i.eventK,x.updateFullscreen),i.isFullscreen()&&(v.hideAnimationDuration=0,i.exit()),i=null)})),d("destroy",(function(){v.captionEl&&(o&&l.removeChild(o),e.removeClass(n,"pswp__caption--empty")),s&&(s.children[0].onclick=null),e.removeClass(l,"pswp__ui--over-close"),e.addClass(l,"pswp__ui--hidden"),x.setIdle(!1)})),v.showAnimationDuration||e.removeClass(l,"pswp__ui--hidden"),d("initialZoomIn",(function(){v.showAnimationDuration&&e.removeClass(l,"pswp__ui--hidden")})),d("initialZoomOut",(function(){e.addClass(l,"pswp__ui--hidden")})),d("parseVerticalMargin",V),function(){var t,i,n,o=function(l){if(l)for(var o=l.length,a=0;o>a;a++){t=l[a],i=t.className;for(var r=0;r<F.length;r++)n=F[r],i.indexOf("pswp__"+n.name)>-1&&(v[n.option]?(e.removeClass(t,"pswp__element--disabled"),n.onInit&&n.onInit(t)):e.addClass(t,"pswp__element--disabled"))}};o(l.children);var a=e.getChildByClass(l,"pswp__top-bar");a&&o(a.children)}(),v.shareEl&&r&&s&&(S=!0),A(),v.timeToIdle&&d("mouseUsed",(function(){e.bind(document,"mousemove",D),e.bind(document,"mouseout",L),y=setInterval((function(){2==++$&&x.setIdle(!0)}),v.timeToIdle/2)})),v.fullscreenEl&&!e.features.isOldAndroid&&(i||(i=x.getFullscreenAPI()),i?(e.bind(document,i.eventK,x.updateFullscreen),x.updateFullscreen(),e.addClass(t.template,"pswp--supports-fs")):e.removeClass(t.template,"pswp--supports-fs")),v.preloaderEl&&(R(!0),d("beforeChange",(function(){clearTimeout(f),f=setTimeout((function(){t.currItem&&t.currItem.loading?(!t.allowProgressiveImg()||t.currItem.img&&!t.currItem.img.naturalWidth)&&R(!1):R(!0)}),v.loadingIndicatorDelay)})),d("imageLoadComplete",(function(e,i){t.currItem===i&&R(!0)})))},x.setIdle=function(t){u=t,T(l,"ui--idle",t)},x.update=function(){k&&t.currItem?(x.updateIndexIndicator(),v.captionEl&&(v.addCaptionHTMLFn(t.currItem,n),T(n,"caption--empty",!t.currItem.title)),w=!0):w=!1,S||E(),A()},x.updateFullscreen=function(l){l&&setTimeout((function(){t.setScrollOffset(0,e.getScrollY())}),50),e[(i.isFullscreen()?"add":"remove")+"Class"](t.template,"pswp--fs")},x.updateIndexIndicator=function(){v.counterEl&&(a.innerHTML=t.getCurrentIndex()+1+v.indexIndicatorSep+v.getNumItemsFn())},x.onGlobalTap=function(i){var l=(i=i||window.event).target||i.srcElement;if(!g)if(i.detail&&"mouse"===i.detail.pointerType){if(_(l))return void t.close();e.hasClass(l,"pswp__img")&&(1===t.getZoomLevel()&&t.getZoomLevel()<=t.currItem.fitRatio?v.clickToCloseNonZoomable&&t.close():t.toggleDesktopZoom(i.detail.releasePoint))}else if(v.tapToToggleControls&&(k?x.hideControls():x.showControls()),v.tapToClose&&(e.hasClass(l,"pswp__img")||_(l)))return void t.close()},x.onMouseOver=function(t){var e=(t=t||window.event).target||t.srcElement;T(l,"ui--over-close",_(e))},x.hideControls=function(){e.addClass(l,"pswp__ui--hidden"),k=!1},x.showControls=function(){k=!0,w||x.update(),e.removeClass(l,"pswp__ui--hidden")},x.supportsFullscreen=function(){var t=document;return!!(t.exitFullscreen||t.mozCancelFullScreen||t.webkitExitFullscreen||t.msExitFullscreen)},x.getFullscreenAPI=function(){var e,i=document.documentElement,l="fullscreenchange";return i.requestFullscreen?e={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:l}:i.mozRequestFullScreen?e={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+l}:i.webkitRequestFullscreen?e={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+l}:i.msRequestFullscreen&&(e={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),e&&(e.enter=function(){return c=v.closeOnScroll,v.closeOnScroll=!1,"webkitRequestFullscreen"!==this.enterK?t.template[this.enterK]():void t.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)},e.exit=function(){return v.closeOnScroll=c,document[this.exitK]()},e.isFullscreen=function(){return document[this.elementK]}),e}}}));!function(t){for(var e=function(t){(t=t||window.event).preventDefault?t.preventDefault():t.returnValue=!1;var e=function t(e,i){return e&&(i(e)?e:t(e.parentNode,i))}(t.target||t.srcElement,(function(t){return t.tagName&&"FIGURE"===t.tagName.toUpperCase()}));if(e){for(var l,n=e.parentNode,o=e.parentNode.childNodes,a=o.length,r=0,s=0;s<a;s++)if(1===o[s].nodeType){if(o[s]===e){l=r;break}r++}return l>=0&&i(l,n),!1}},i=function(t,e,i,l){var n,o,a=document.querySelectorAll(".pswp")[0];if(o=function(t){for(var e,i,l,n,o=t.childNodes,a=o.length,r=[],s=0;s<a;s++)1===(e=o[s]).nodeType&&(l=(i=e.children[0]).getAttribute("data-size").split("x"),n={src:i.getAttribute("href"),w:parseInt(l[0],10),h:parseInt(l[1],10)},e.children.length>1&&(n.title=e.children[1].innerHTML),i.children.length>0&&(n.msrc=i.children[0].getAttribute("src")),n.el=e,r.push(n));return r}(e),n={galleryUID:e.getAttribute("data-pswp-uid"),getThumbBoundsFn:function(t){var e=o[t].el.getElementsByTagName("img")[0],i=window.pageYOffset||document.documentElement.scrollTop,l=e.getBoundingClientRect();return{x:l.left,y:l.top+i,w:l.width}}},l)if(n.galleryPIDs){for(var r=0;r<o.length;r++)if(o[r].pid==t){n.index=r;break}}else n.index=parseInt(t,10)-1;else n.index=parseInt(t,10);isNaN(n.index)||(i&&(n.showAnimationDuration=0),new PhotoSwipe(a,PhotoSwipeUI_Default,o,n).init())},l=document.querySelectorAll(t),n=0,o=l.length;n<o;n++)l[n].setAttribute("data-pswp-uid",n+1),l[n].onclick=e;var a=function(){var t=window.location.hash.substring(1),e={};if(t.length<5)return e;for(var i=t.split("&"),l=0;l<i.length;l++)if(i[l]){var n=i[l].split("=");n.length<2||(e[n[0]]=n[1])}return e.gid&&(e.gid=parseInt(e.gid,10)),e}();a.pid&&a.gid&&i(a.pid,l[a.gid-1],!0,!0)}(".mdb-lightbox")}).call(this,i(96)(t))},function(t,e,i){"use strict";(function(t){var e;i(69),i(71),i(72),i(92),i(43),i(66),i(58),i(75),i(97),i(100),i(84),i(65),i(68),i(95),i(73),i(116),i(86),i(98),i(74);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*!
 * Date picker for pickadate.js v3.6.3
 * http://amsul.github.io/pickadate.js/date.htm
 */e=function(t,e){var i,l=t._;function n(t,e){var i,l=this,n=t.$node[0],o=n.value,a=t.$node.data("value"),r=a||o,s=a?e.formatSubmit:e.format,c=function(){return n.currentStyle?"rtl"==n.currentStyle.direction:"rtl"==getComputedStyle(t.$root[0]).direction};l.settings=e,l.$node=t.$node,l.queue={min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse navigate create validate",view:"parse create validate viewset",disable:"deactivate",enable:"activate"},l.item={},l.item.clear=null,l.item.disable=(e.disable||[]).slice(0),l.item.enable=-(!0===(i=l.item.disable)[0]?i.shift():-1),l.set("min",e.min).set("max",e.max).set("now"),r?l.set("select",r,{format:s,defaultValue:!0}):l.set("select",null).set("highlight",l.item.now),l.key={40:7,38:-7,39:function(){return c()?-1:1},37:function(){return c()?1:-1},go:function(t){var e=l.item.highlight,i=new Date(e.year,e.month,e.date+t);l.set("highlight",i,{interval:t}),this.render()}},t.on("render",(function(){t.$root.find("."+e.klass.selectMonth).on("change",(function(){var i=this.value;i&&(t.set("highlight",[t.get("view").year,i,t.get("highlight").date]),t.$root.find("."+e.klass.selectMonth).trigger("focus"))})),t.$root.find("."+e.klass.selectYear).on("change",(function(){var i=this.value;i&&(t.set("highlight",[i,t.get("view").month,t.get("highlight").date]),t.$root.find("."+e.klass.selectYear).trigger("focus"))}))}),1).on("open",(function(){var i="";l.disabled(l.get("now"))&&(i=":not(."+e.klass.buttonToday+")"),t.$root.find("button"+i+", select").attr("disabled",!1)}),1).on("close",(function(){t.$root.find("button, select").attr("disabled",!0)}),1)}n.prototype.set=function(t,e,i){var l=this,n=l.item;return null===e?("clear"==t&&(t="select"),n[t]=e,l):(n["enable"==t?"disable":"flip"==t?"enable":t]=l.queue[t].split(" ").map((function(n){return e=l[n](t,e,i)})).pop(),"select"==t?l.set("highlight",n.select,i):"highlight"==t?l.set("view",n.highlight,i):t.match(/^(flip|min|max|disable|enable)$/)&&(n.select&&l.disabled(n.select)&&l.set("select",n.select,i),n.highlight&&l.disabled(n.highlight)&&l.set("highlight",n.highlight,i)),l)},n.prototype.get=function(t){return this.item[t]},n.prototype.create=function(t,i,n){var o;return(i=void 0===i?t:i)==-1/0||i==1/0?o=i:e.isPlainObject(i)&&l.isInteger(i.pick)?i=i.obj:e.isArray(i)?(i=new Date(i[0],i[1],i[2]),i=l.isDate(i)?i:this.create().obj):i=l.isInteger(i)||l.isDate(i)?this.normalize(new Date(i),n):this.now(t,i,n),{year:o||i.getFullYear(),month:o||i.getMonth(),date:o||i.getDate(),day:o||i.getDay(),obj:o||i,pick:o||i.getTime()}},n.prototype.createRange=function(t,i){var n=this,o=function(t){return!0===t||e.isArray(t)||l.isDate(t)?n.create(t):t};return l.isInteger(t)||(t=o(t)),l.isInteger(i)||(i=o(i)),l.isInteger(t)&&e.isPlainObject(i)?t=[i.year,i.month,i.date+t]:l.isInteger(i)&&e.isPlainObject(t)&&(i=[t.year,t.month,t.date+i]),{from:o(t),to:o(i)}},n.prototype.withinRange=function(t,e){return t=this.createRange(t.from,t.to),e.pick>=t.from.pick&&e.pick<=t.to.pick},n.prototype.overlapRanges=function(t,e){return t=this.createRange(t.from,t.to),e=this.createRange(e.from,e.to),this.withinRange(t,e.from)||this.withinRange(t,e.to)||this.withinRange(e,t.from)||this.withinRange(e,t.to)},n.prototype.now=function(t,e,i){return e=new Date,i&&i.rel&&e.setDate(e.getDate()+i.rel),this.normalize(e,i)},n.prototype.navigate=function(t,i,l){var n,o,a,r,s=e.isArray(i),c=e.isPlainObject(i),u=this.item.view;if(s||c){for(c?(o=i.year,a=i.month,r=i.date):(o=+i[0],a=+i[1],r=+i[2]),l&&l.nav&&u&&u.month!==a&&(o=u.year,a=u.month),o=(n=new Date(o,a+(l&&l.nav?l.nav:0),1)).getFullYear(),a=n.getMonth();new Date(o,a,r).getMonth()!==a;)r-=1;i=[o,a,r]}return i},n.prototype.normalize=function(t){return t.setHours(0,0,0,0),t},n.prototype.measure=function(t,e){return l.isInteger(e)?e=this.now(t,e,{rel:e}):e?"string"==typeof e&&(e=this.parse(t,e)):e="min"==t?-1/0:1/0,e},n.prototype.viewset=function(t,e){return this.create([e.year,e.month,1])},n.prototype.validate=function(t,i,n){var o,a,r,s,c=this,u=i,d=n&&n.interval?n.interval:1,h=-1===c.item.enable,p=c.item.min,f=c.item.max,m=h&&c.item.disable.filter((function(t){if(e.isArray(t)){var n=c.create(t).pick;n<i.pick?o=!0:n>i.pick&&(a=!0)}return l.isInteger(t)})).length;if((!n||!n.nav&&!n.defaultValue)&&(!h&&c.disabled(i)||h&&c.disabled(i)&&(m||o||a)||!h&&(i.pick<=p.pick||i.pick>=f.pick)))for(h&&!m&&(!a&&d>0||!o&&d<0)&&(d*=-1);c.disabled(i)&&(Math.abs(d)>1&&(i.month<u.month||i.month>u.month)&&(i=u,d=d>0?1:-1),i.pick<=p.pick?(r=!0,d=1,i=c.create([p.year,p.month,p.date+(i.pick===p.pick?0:-1)])):i.pick>=f.pick&&(s=!0,d=-1,i=c.create([f.year,f.month,f.date+(i.pick===f.pick?0:1)])),!r||!s);)i=c.create([i.year,i.month,i.date+d]);return i},n.prototype.disabled=function(t){var i=this,n=i.item.disable.filter((function(n){return l.isInteger(n)?t.day===(i.settings.firstDay?n:n-1)%7:e.isArray(n)||l.isDate(n)?t.pick===i.create(n).pick:e.isPlainObject(n)?i.withinRange(n,t):void 0}));return n=n.length&&!n.filter((function(t){return e.isArray(t)&&"inverted"==t[3]||e.isPlainObject(t)&&t.inverted})).length,-1===i.item.enable?!n:n||t.pick<i.item.min.pick||t.pick>i.item.max.pick},n.prototype.parse=function(t,e,i){var n=this,o={};return e&&"string"==typeof e?(i&&i.format||((i=i||{}).format=n.settings.format),n.formats.toArray(i.format).map((function(t){var i=n.formats[t],a=i?l.trigger(i,n,[e,o]):t.replace(/^!/,"").length;i&&(o[t]=e.substr(0,a)),e=e.substr(a)})),[o.yyyy||o.yy,+(o.mm||o.m)-1,o.dd||o.d]):e},n.prototype.formats=function(){function t(t,e,i){var l=t.match(/[^\x00-\x7F]+|\w+/)[0];return i.mm||i.m||(i.m=e.indexOf(l)+1),l.length}function e(t){return t.match(/\w+/)[0].length}return{d:function(t,e){return t?l.digits(t):e.date},dd:function(t,e){return t?2:l.lead(e.date)},ddd:function(t,i){return t?e(t):this.settings.weekdaysShort[i.day]},dddd:function(t,i){return t?e(t):this.settings.weekdaysFull[i.day]},m:function(t,e){return t?l.digits(t):e.month+1},mm:function(t,e){return t?2:l.lead(e.month+1)},mmm:function(e,i){var l=this.settings.monthsShort;return e?t(e,l,i):l[i.month]},mmmm:function(e,i){var l=this.settings.monthsFull;return e?t(e,l,i):l[i.month]},yy:function(t,e){return t?2:(""+e.year).slice(2)},yyyy:function(t,e){return t?4:e.year},toArray:function(t){return t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)},toString:function(t,e){var i=this;return i.formats.toArray(t).map((function(t){return l.trigger(i.formats[t],i,[0,e])||t.replace(/^!/,"")})).join("")}}}(),n.prototype.isDateExact=function(t,i){return l.isInteger(t)&&l.isInteger(i)||"boolean"==typeof t&&"boolean"==typeof i?t===i:(l.isDate(t)||e.isArray(t))&&(l.isDate(i)||e.isArray(i))?this.create(t).pick===this.create(i).pick:!(!e.isPlainObject(t)||!e.isPlainObject(i))&&this.isDateExact(t.from,i.from)&&this.isDateExact(t.to,i.to)},n.prototype.isDateOverlap=function(t,i){var n=this.settings.firstDay?1:0;return l.isInteger(t)&&(l.isDate(i)||e.isArray(i))?(t=t%7+n)===this.create(i).day+1:l.isInteger(i)&&(l.isDate(t)||e.isArray(t))?(i=i%7+n)===this.create(t).day+1:!(!e.isPlainObject(t)||!e.isPlainObject(i))&&this.overlapRanges(t,i)},n.prototype.flipEnable=function(t){var e=this.item;e.enable=t||(-1==e.enable?1:-1)},n.prototype.deactivate=function(t,i){var n=this,o=n.item.disable.slice(0);return"flip"==i?n.flipEnable():!1===i?(n.flipEnable(1),o=[]):!0===i?(n.flipEnable(-1),o=[]):i.map((function(t){for(var i,a=0;a<o.length;a+=1)if(n.isDateExact(t,o[a])){i=!0;break}i||(l.isInteger(t)||l.isDate(t)||e.isArray(t)||e.isPlainObject(t)&&t.from&&t.to)&&o.push(t)})),o},n.prototype.activate=function(t,i){var n=this,o=n.item.disable,a=o.length;return"flip"==i?n.flipEnable():!0===i?(n.flipEnable(1),o=[]):!1===i?(n.flipEnable(-1),o=[]):i.map((function(t){var i,r,s,c;for(s=0;s<a;s+=1){if(r=o[s],n.isDateExact(r,t)){i=o[s]=null,c=!0;break}if(n.isDateOverlap(r,t)){e.isPlainObject(t)?(t.inverted=!0,i=t):e.isArray(t)?(i=t)[3]||i.push("inverted"):l.isDate(t)&&(i=[t.getFullYear(),t.getMonth(),t.getDate(),"inverted"]);break}}if(i)for(s=0;s<a;s+=1)if(n.isDateExact(o[s],t)){o[s]=null;break}if(c)for(s=0;s<a;s+=1)if(n.isDateOverlap(o[s],t)){o[s]=null;break}i&&o.push(i)})),o.filter((function(t){return null!=t}))},n.prototype.nodes=function(t){var e,i,n=this,o=n.settings,a=n.item,r=a.now,s=a.select,c=a.highlight,u=a.view,d=a.disable,h=a.min,p=a.max,f=(e=(o.showWeekdaysFull?o.weekdaysFull:o.weekdaysShort).slice(0),i=o.weekdaysFull.slice(0),o.firstDay&&(e.push(e.shift()),i.push(i.shift())),l.node("thead",l.node("tr",l.group({min:0,max:6,i:1,node:"th",item:function(t){return[e[t],o.klass.weekdays,'scope=col title="'+i[t]+'"']}})))),m=function(t){return l.node("button"," ",o.klass["nav"+(t?"Next":"Prev")]+(t&&u.year>=p.year&&u.month>=p.month||!t&&u.year<=h.year&&u.month<=h.month?" "+o.klass.navDisabled:""),"data-nav="+(t||-1)+" "+l.ariaAttr({role:"button",controls:n.$node[0].id+"_table"})+' title="'+(t?o.labelMonthNext:o.labelMonthPrev)+'"')},v=function(){var e=o.showMonthsShort?o.monthsShort:o.monthsFull;return o.selectMonths?l.node("select",l.group({min:0,max:11,i:1,node:"option",item:function(t){return[e[t],0,"value="+t+(u.month==t?" selected":"")+(u.year==h.year&&t<h.month||u.year==p.year&&t>p.month?" disabled":"")]}}),o.klass.selectMonth,(t?"":"disabled")+" "+l.ariaAttr({controls:n.$node[0].id+"_table"})+' title="'+o.labelMonthSelect+'"'):l.node("div",e[u.month],o.klass.month)},g=function(){var e=u.year,i=!0===o.selectYears?5:~~(o.selectYears/2);if(i){var a=h.year,r=p.year,s=e-i,c=e+i;if(a>s&&(c+=a-s,s=a),r<c){var d=s-a,f=c-r;s-=d>f?f:d,c=r}return l.node("select",l.group({min:s,max:c,i:1,node:"option",item:function(t){return[t,0,"value="+t+(e==t?" selected":"")]}}),o.klass.selectYear,(t?"":"disabled")+" "+l.ariaAttr({controls:n.$node[0].id+"_table"})+' title="'+o.labelYearSelect+'"')}return l.node("div",e,o.klass.year)};return l.node("div",(o.selectYears?g()+v():v()+g())+m()+m(1),o.klass.header)+l.node("table",f+l.node("tbody",l.group({min:0,max:5,i:1,node:"tr",item:function(t){var e=o.firstDay&&0===n.create([u.year,u.month,1]).day?-7:0;return[l.group({min:7*t-u.day+e+1,max:function(){return this.min+7-1},i:1,node:"td",item:function(t){t=n.create([u.year,u.month,t+(o.firstDay?1:0)]);var e,i=s&&s.pick==t.pick,a=c&&c.pick==t.pick,f=d&&n.disabled(t)||t.pick<h.pick||t.pick>p.pick,m=l.trigger(n.formats.toString,n,[o.format,t]);return[l.node("div",t.date,(e=[o.klass.day],e.push(u.month==t.month?o.klass.infocus:o.klass.outfocus),r.pick==t.pick&&e.push(o.klass.now),i&&e.push(o.klass.selected),a&&e.push(o.klass.highlighted),f&&e.push(o.klass.disabled),e.join(" ")),"data-pick="+t.pick+" "+l.ariaAttr({role:"gridcell",label:m,selected:!(!i||n.$node.val()!==m)||null,activedescendant:!!a||null,disabled:!!f||null})),"",l.ariaAttr({role:"presentation"})]}})]}})),o.klass.table,'id="'+n.$node[0].id+'_table" '+l.ariaAttr({role:"grid",controls:n.$node[0].id,readonly:!0}))+l.node("div",l.node("button",o.today,o.klass.buttonToday,"type=button data-pick="+r.pick+(t&&!n.disabled(r)?"":" disabled")+" "+l.ariaAttr({controls:n.$node[0].id}))+l.node("button",o.clear,o.klass.buttonClear,"type=button data-clear=1"+(t?"":" disabled")+" "+l.ariaAttr({controls:n.$node[0].id}))+l.node("button",o.close,o.klass.buttonClose,"type=button data-close=true "+(t?"":" disabled")+" "+l.ariaAttr({controls:n.$node[0].id})),o.klass.footer)},n.defaults={labelMonthNext:"Next month",labelMonthPrev:"Previous month",labelMonthSelect:"Select a month",labelYearSelect:"Select a year",monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],today:"Today",clear:"Clear",close:"Close",closeOnSelect:!0,closeOnClear:!0,updateInput:!0,format:"d mmmm, yyyy",klass:{table:(i=t.klasses().picker+"__")+"table",header:i+"header",navPrev:i+"nav--prev btn btn-flat",navNext:i+"nav--next btn btn-flat",navDisabled:i+"nav--disabled",month:i+"month",year:i+"year",selectMonth:i+"select--month",selectYear:i+"select--year",weekdays:i+"weekday",day:i+"day",disabled:i+"day--disabled",selected:i+"day--selected",highlighted:i+"day--highlighted",now:i+"day--today",infocus:i+"day--infocus",outfocus:i+"day--outfocus",footer:i+"footer",buttonClear:i+"button--clear",buttonToday:i+"button--today",buttonClose:i+"button--close"}},t.extend("pickadate",n)}, true&&i(80)?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__,__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==( false?undefined:l(exports))?t.exports=e(i(224),i(118)):e(Picker,jQuery),$.extend($.fn.pickadate.defaults,{selectMonths:!0,selectYears:15,onRender:function(){var t=this.$root,e=this.get("highlight","yyyy"),i=this.get("highlight","dd"),l=this.get("highlight","mmm"),n=this.get("highlight","dddd").slice(0,3),o=l.charAt(0).toUpperCase()+l.slice(1);t.find(".picker__header").prepend('<div class="picker__date-display"><div class="picker__weekday-display">'+n+', </div><div class="picker__month-display"><div>'+o+'</div></div><div class="picker__day-display"><div>'+i+'</div></div><div    class="picker__year-display"><div>'+e+"</div></div></div>")}}),$(".picker-opener").on("click",(function(t){t.preventDefault(),t.stopPropagation();var e=t.target.dataset.open;$("#".concat(e)).pickadate().pickadate("picker").open()}))}).call(this,i(96)(t))},function(t,e,i){"use strict";(function(t){var e;i(69),i(71),i(72),i(169),i(43),i(66),i(58),i(75),i(97),i(100),i(84),i(121),i(111),i(65),i(115),i(123),i(68),i(95),i(73),i(86),i(98),i(74);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t){var e={set:{colors:1,values:1,backgroundColor:1,scaleColors:1,normalizeFunction:1,focus:1},get:{selectedRegions:1,selectedMarkers:1,mapObject:1,regionName:1}};t.fn.vectorMap=function(t){var i=this.children(".jvectormap-container").data("mapObject");if("addMap"===t)n.Map.maps[arguments[1]]=arguments[2];else{if(("set"===t||"get"===t)&&e[t][arguments[1]])return i[t+(arguments[1].charAt(0).toUpperCase()+arguments[1].substr(1))].apply(i,Array.prototype.slice.call(arguments,2));(t=t||{}).container=this,i=new n.Map(t)}return this}}(jQuery),e=function(t){function e(e){var a=e||window.event,r=s.call(arguments,1),c=0,u=0,d=0,h=0;if((e=t.event.fix(a)).type="mousewheel","detail"in a&&(d=-1*a.detail),"wheelDelta"in a&&(d=a.wheelDelta),"wheelDeltaY"in a&&(d=a.wheelDeltaY),"wheelDeltaX"in a&&(u=-1*a.wheelDeltaX),"axis"in a&&a.axis===a.HORIZONTAL_AXIS&&(u=-1*d,d=0),c=0===d?u:d,"deltaY"in a&&(c=d=-1*a.deltaY),"deltaX"in a&&(u=a.deltaX,0===d&&(c=-1*u)),0!==d||0!==u){if(1===a.deltaMode){var p=t.data(this,"mousewheel-line-height");c*=p,d*=p,u*=p}else if(2===a.deltaMode){var f=t.data(this,"mousewheel-page-height");c*=f,d*=f,u*=f}return h=Math.max(Math.abs(d),Math.abs(u)),(!o||o>h)&&(o=h,l(a,h)&&(o/=40)),l(a,h)&&(c/=40,u/=40,d/=40),c=Math[c>=1?"floor":"ceil"](c/o),u=Math[u>=1?"floor":"ceil"](u/o),d=Math[d>=1?"floor":"ceil"](d/o),e.deltaX=u,e.deltaY=d,e.deltaFactor=o,e.deltaMode=0,r.unshift(e,c,u,d),n&&clearTimeout(n),n=setTimeout(i,200),(t.event.dispatch||t.event.handle).apply(this,r)}}function i(){o=null}function l(t,e){return u.settings.adjustOldDeltas&&"mousewheel"===t.type&&e%120==0}var n,o,a=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],r="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],s=Array.prototype.slice;if(t.event.fixHooks)for(var c=a.length;c;)t.event.fixHooks[a[--c]]=t.event.mouseHooks;var u=t.event.special.mousewheel={version:"3.1.9",setup:function(){if(this.addEventListener)for(var i=r.length;i;)this.addEventListener(r[--i],e,!1);else this.onmousewheel=e;t.data(this,"mousewheel-line-height",u.getLineHeight(this)),t.data(this,"mousewheel-page-height",u.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var t=r.length;t;)this.removeEventListener(r[--t],e,!1);else this.onmousewheel=null},getLineHeight:function(e){return parseInt(t(e)["offsetParent"in t.fn?"offsetParent":"parent"]().css("fontSize"),10)},getPageHeight:function(e){return t(e).height()},settings:{adjustOldDeltas:!0}};t.fn.extend({mousewheel:function(t){return t?this.bind("mousewheel",t):this.trigger("mousewheel")},unmousewheel:function(t){return this.unbind("mousewheel",t)}})}, true&&i(80)?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.10.4
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */!function(t){var e={};function i(l){if(e[l])return e[l].exports;var n=e[l]={i:l,l:!1,exports:{}};return t[l].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,l){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:l})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===l(t)&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=11)}([,,function(t,e,i){t.exports=function(t){"complete"===document.readyState||"interactive"===document.readyState?t.call():document.attachEvent?document.attachEvent("onreadystatechange",(function(){"interactive"===document.readyState&&t.call()})):document.addEventListener&&document.addEventListener("DOMContentLoaded",t)}},,function(t,e,i){(function(e){var i;i="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},t.exports=i}).call(this,i(5))},function(t,e,i){var n,o="function"==typeof Symbol&&"symbol"===l(Symbol.iterator)?function(t){return l(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":l(t)};n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"===("undefined"==typeof window?"undefined":o(window))&&(n=window)}t.exports=n},,,,,,function(t,e,i){t.exports=i(12)},function(t,e,i){var n="function"==typeof Symbol&&"symbol"===l(Symbol.iterator)?function(t){return l(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":l(t)},o=s(i(2)),a=i(4),r=s(i(13));function s(t){return t&&t.__esModule?t:{default:t}}var c=a.window.jarallax;if(a.window.jarallax=r.default,a.window.jarallax.noConflict=function(){return a.window.jarallax=c,this},void 0!==a.jQuery){var u=function(){var t=arguments||[];Array.prototype.unshift.call(t,this);var e=r.default.apply(a.window,t);return"object"!==(void 0===e?"undefined":n(e))?e:this};u.constructor=r.default.constructor;var d=a.jQuery.fn.jarallax;a.jQuery.fn.jarallax=u,a.jQuery.fn.jarallax.noConflict=function(){return a.jQuery.fn.jarallax=d,this}}(0,o.default)((function(){(0,r.default)(document.querySelectorAll("[data-jarallax]"))}))},function(t,e,i){(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var i=[],l=!0,n=!1,o=void 0;try{for(var a,r=t[Symbol.iterator]();!(l=(a=r.next()).done)&&(i.push(a.value),!e||i.length!==e);l=!0);}catch(t){n=!0,o=t}finally{try{!l&&r.return&&r.return()}finally{if(n)throw o}}return i}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(){function t(t,e){for(var i=0;i<e.length;i++){var l=e[i];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}return function(e,i,l){return i&&t(e.prototype,i),l&&t(e,l),e}}(),a="function"==typeof Symbol&&"symbol"===l(Symbol.iterator)?function(t){return l(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":l(t)},r=u(i(2)),s=u(i(14)),c=i(4);function u(t){return t&&t.__esModule?t:{default:t}}var d=navigator.userAgent.indexOf("MSIE ")>-1||navigator.userAgent.indexOf("Trident/")>-1||navigator.userAgent.indexOf("Edge/")>-1,h=function(){for(var t="transform WebkitTransform MozTransform".split(" "),e=document.createElement("div"),i=0;i<t.length;i++)if(e&&void 0!==e.style[t[i]])return t[i];return!1}(),p=void 0,f=void 0,m=void 0,v=!1,g=!1;function y(t){p=c.window.innerWidth||document.documentElement.clientWidth,f=c.window.innerHeight||document.documentElement.clientHeight,"object"!==(void 0===t?"undefined":a(t))||"load"!==t.type&&"dom-loaded"!==t.type||(v=!0)}y(),c.window.addEventListener("resize",y),c.window.addEventListener("orientationchange",y),c.window.addEventListener("load",y),(0,r.default)((function(){y({type:"dom-loaded"})}));var b=[],x=!1;function w(){if(b.length){m=void 0!==c.window.pageYOffset?c.window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;var t=v||!x||x.width!==p||x.height!==f,e=g||t||!x||x.y!==m;v=!1,g=!1,(t||e)&&(b.forEach((function(i){t&&i.onResize(),e&&i.onScroll()})),x={width:p,height:f,y:m}),(0,s.default)(w)}}var k=!!t.ResizeObserver&&new t.ResizeObserver((function(t){t&&t.length&&(0,s.default)((function(){t.forEach((function(t){t.target&&t.target.jarallax&&(v||t.target.jarallax.onResize(),g=!0)}))}))})),S=0,M=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var l=this;l.instanceID=S++,l.$item=e,l.defaults={type:"scroll",speed:.5,imgSrc:null,imgElement:".jarallax-img",imgSize:"cover",imgPosition:"50% 50%",imgRepeat:"no-repeat",keepImg:!1,elementInViewport:null,zIndex:-100,disableParallax:!1,disableVideo:!1,automaticResize:!0,videoSrc:null,videoStartTime:0,videoEndTime:0,videoVolume:0,videoPlayOnlyVisible:!0,onScroll:null,onInit:null,onDestroy:null,onCoverImage:null};var o=l.$item.getAttribute("data-jarallax"),r=JSON.parse(o||"{}");o&&console.warn("Detected usage of deprecated data-jarallax JSON options, you should use pure data-attribute options. See info here - https://github.com/nk-o/jarallax/issues/53");var s=l.$item.dataset||{},c={};if(Object.keys(s).forEach((function(t){var e=t.substr(0,1).toLowerCase()+t.substr(1);e&&void 0!==l.defaults[e]&&(c[e]=s[t])})),l.options=l.extend({},l.defaults,r,c,i),l.pureOptions=l.extend({},l.options),Object.keys(l.options).forEach((function(t){"true"===l.options[t]?l.options[t]=!0:"false"===l.options[t]&&(l.options[t]=!1)})),l.options.speed=Math.min(2,Math.max(-1,parseFloat(l.options.speed))),(l.options.noAndroid||l.options.noIos)&&(console.warn("Detected usage of deprecated noAndroid or noIos options, you should use disableParallax option. See info here - https://github.com/nk-o/jarallax/#disable-on-mobile-devices"),l.options.disableParallax||(l.options.noIos&&l.options.noAndroid?l.options.disableParallax=/iPad|iPhone|iPod|Android/:l.options.noIos?l.options.disableParallax=/iPad|iPhone|iPod/:l.options.noAndroid&&(l.options.disableParallax=/Android/))),"string"==typeof l.options.disableParallax&&(l.options.disableParallax=new RegExp(l.options.disableParallax)),l.options.disableParallax instanceof RegExp){var u=l.options.disableParallax;l.options.disableParallax=function(){return u.test(navigator.userAgent)}}if("function"!=typeof l.options.disableParallax&&(l.options.disableParallax=function(){return!1}),"string"==typeof l.options.disableVideo&&(l.options.disableVideo=new RegExp(l.options.disableVideo)),l.options.disableVideo instanceof RegExp){var d=l.options.disableVideo;l.options.disableVideo=function(){return d.test(navigator.userAgent)}}"function"!=typeof l.options.disableVideo&&(l.options.disableVideo=function(){return!1});var h=l.options.elementInViewport;h&&"object"===(void 0===h?"undefined":a(h))&&void 0!==h.length&&(h=n(h,1)[0]);h instanceof Element||(h=null),l.options.elementInViewport=h,l.image={src:l.options.imgSrc||null,$container:null,useImgTag:!1,position:/iPad|iPhone|iPod|Android/.test(navigator.userAgent)?"absolute":"fixed"},l.initImg()&&l.canInitParallax()&&l.init()}return o(t,[{key:"css",value:function(t,e){return"string"==typeof e?c.window.getComputedStyle(t).getPropertyValue(e):(e.transform&&h&&(e[h]=e.transform),Object.keys(e).forEach((function(i){t.style[i]=e[i]})),t)}},{key:"extend",value:function(t){var e=arguments;return t=t||{},Object.keys(arguments).forEach((function(i){e[i]&&Object.keys(e[i]).forEach((function(l){t[l]=e[i][l]}))})),t}},{key:"getWindowData",value:function(){return{width:p,height:f,y:m}}},{key:"initImg",value:function(){var t=this.options.imgElement;return t&&"string"==typeof t&&(t=this.$item.querySelector(t)),t instanceof Element||(t=null),t&&(this.options.keepImg?this.image.$item=t.cloneNode(!0):(this.image.$item=t,this.image.$itemParent=t.parentNode),this.image.useImgTag=!0),!!this.image.$item||(null===this.image.src&&(this.image.src=this.css(this.$item,"background-image").replace(/^url\(['"]?/g,"").replace(/['"]?\)$/g,"")),!(!this.image.src||"none"===this.image.src))}},{key:"canInitParallax",value:function(){return h&&!this.options.disableParallax()}},{key:"init",value:function(){var t={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",pointerEvents:"none"},e={};if(!this.options.keepImg){var i=this.$item.getAttribute("style");if(i&&this.$item.setAttribute("data-jarallax-original-styles",i),this.image.useImgTag){var l=this.image.$item.getAttribute("style");l&&this.image.$item.setAttribute("data-jarallax-original-styles",l)}}if("static"===this.css(this.$item,"position")&&this.css(this.$item,{position:"relative"}),"auto"===this.css(this.$item,"z-index")&&this.css(this.$item,{zIndex:0}),this.image.$container=document.createElement("div"),this.css(this.image.$container,t),this.css(this.image.$container,{"z-index":this.options.zIndex}),d&&this.css(this.image.$container,{opacity:.9999}),this.image.$container.setAttribute("id","jarallax-container-"+this.instanceID),this.$item.appendChild(this.image.$container),this.image.useImgTag?e=this.extend({"object-fit":this.options.imgSize,"object-position":this.options.imgPosition,"font-family":"object-fit: "+this.options.imgSize+"; object-position: "+this.options.imgPosition+";","max-width":"none"},t,e):(this.image.$item=document.createElement("div"),this.image.src&&(e=this.extend({"background-position":this.options.imgPosition,"background-size":this.options.imgSize,"background-repeat":this.options.imgRepeat,"background-image":'url("'+this.image.src+'")'},t,e))),"opacity"!==this.options.type&&"scale"!==this.options.type&&"scale-opacity"!==this.options.type&&1!==this.options.speed||(this.image.position="absolute"),"fixed"===this.image.position)for(var n=0,o=this.$item;null!==o&&o!==document&&0===n;){var a=this.css(o,"-webkit-transform")||this.css(o,"-moz-transform")||this.css(o,"transform");a&&"none"!==a&&(n=1,this.image.position="absolute"),o=o.parentNode}e.position=this.image.position,this.css(this.image.$item,e),this.image.$container.appendChild(this.image.$item),this.onResize(),this.onScroll(!0),this.options.automaticResize&&k&&k.observe(this.$item),this.options.onInit&&this.options.onInit.call(this),"none"!==this.css(this.$item,"background-image")&&this.css(this.$item,{"background-image":"none"}),this.addToParallaxList()}},{key:"addToParallaxList",value:function(){b.push(this),1===b.length&&w()}},{key:"removeFromParallaxList",value:function(){var t=this;b.forEach((function(e,i){e.instanceID===t.instanceID&&b.splice(i,1)}))}},{key:"destroy",value:function(){this.removeFromParallaxList();var t=this.$item.getAttribute("data-jarallax-original-styles");if(this.$item.removeAttribute("data-jarallax-original-styles"),t?this.$item.setAttribute("style",t):this.$item.removeAttribute("style"),this.image.useImgTag){var e=this.image.$item.getAttribute("data-jarallax-original-styles");this.image.$item.removeAttribute("data-jarallax-original-styles"),e?this.image.$item.setAttribute("style",t):this.image.$item.removeAttribute("style"),this.image.$itemParent&&this.image.$itemParent.appendChild(this.image.$item)}this.$clipStyles&&this.$clipStyles.parentNode.removeChild(this.$clipStyles),this.image.$container&&this.image.$container.parentNode.removeChild(this.image.$container),this.options.onDestroy&&this.options.onDestroy.call(this),delete this.$item.jarallax}},{key:"clipContainer",value:function(){if("fixed"===this.image.position){var t=this.image.$container.getBoundingClientRect(),e=t.width,i=t.height;if(!this.$clipStyles)this.$clipStyles=document.createElement("style"),this.$clipStyles.setAttribute("type","text/css"),this.$clipStyles.setAttribute("id","jarallax-clip-"+this.instanceID),(document.head||document.getElementsByTagName("head")[0]).appendChild(this.$clipStyles);var l="#jarallax-container-"+this.instanceID+" {\n           clip: rect(0 "+e+"px "+i+"px 0);\n           clip: rect(0, "+e+"px, "+i+"px, 0);\n        }";this.$clipStyles.styleSheet?this.$clipStyles.styleSheet.cssText=l:this.$clipStyles.innerHTML=l}}},{key:"coverImage",value:function(){var t=this.image.$container.getBoundingClientRect(),e=t.height,i=this.options.speed,l="scroll"===this.options.type||"scroll-opacity"===this.options.type,n=0,o=e,a=0;return l&&(n=i<0?i*Math.max(e,f):i*(e+f),i>1?o=Math.abs(n-f):i<0?o=n/i+Math.abs(n):o+=Math.abs(f-e)*(1-i),n/=2),this.parallaxScrollDistance=n,a=l?(f-o)/2:(e-o)/2,this.css(this.image.$item,{height:o+"px",marginTop:a+"px",left:"fixed"===this.image.position?t.left+"px":"0",width:t.width+"px"}),this.options.onCoverImage&&this.options.onCoverImage.call(this),{image:{height:o,marginTop:a},container:t}}},{key:"isVisible",value:function(){return this.isElementInViewport||!1}},{key:"onScroll",value:function(t){var e=this.$item.getBoundingClientRect(),i=e.top,l=e.height,n={},o=e;if(this.options.elementInViewport&&(o=this.options.elementInViewport.getBoundingClientRect()),this.isElementInViewport=o.bottom>=0&&o.right>=0&&o.top<=f&&o.left<=p,t||this.isElementInViewport){var a=Math.max(0,i),r=Math.max(0,l+i),s=Math.max(0,-i),c=Math.max(0,i+l-f),u=Math.max(0,l-(i+l-f)),d=Math.max(0,-i+f-l),h=1-2*(f-i)/(f+l),m=1;if(l<f?m=1-(s||c)/l:r<=f?m=r/f:u<=f&&(m=u/f),"opacity"!==this.options.type&&"scale-opacity"!==this.options.type&&"scroll-opacity"!==this.options.type||(n.transform="translate3d(0,0,0)",n.opacity=m),"scale"===this.options.type||"scale-opacity"===this.options.type){var v=1;this.options.speed<0?v-=this.options.speed*m:v+=this.options.speed*(1-m),n.transform="scale("+v+") translate3d(0,0,0)"}if("scroll"===this.options.type||"scroll-opacity"===this.options.type){var g=this.parallaxScrollDistance*h;"absolute"===this.image.position&&(g-=i),n.transform="translate3d(0,"+g+"px,0)"}this.css(this.image.$item,n),this.options.onScroll&&this.options.onScroll.call(this,{section:e,beforeTop:a,beforeTopEnd:r,afterTop:s,beforeBottom:c,beforeBottomEnd:u,afterBottom:d,visiblePercent:m,fromViewportCenter:h})}}},{key:"onResize",value:function(){this.coverImage(),this.clipContainer()}}]),t}(),C=function(t){("object"===("undefined"==typeof HTMLElement?"undefined":a(HTMLElement))?t instanceof HTMLElement:t&&"object"===(void 0===t?"undefined":a(t))&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName)&&(t=[t]);for(var e=arguments[1],i=Array.prototype.slice.call(arguments,2),l=t.length,n=0,o=void 0;n<l;n++)if("object"===(void 0===e?"undefined":a(e))||void 0===e?t[n].jarallax||(t[n].jarallax=new M(t[n],e)):t[n].jarallax&&(o=t[n].jarallax[e].apply(t[n].jarallax,i)),void 0!==o)return o;return t};C.constructor=M,e.default=C}).call(this,i(5))},function(t,e,i){var l=i(4),n=l.requestAnimationFrame||l.webkitRequestAnimationFrame||l.mozRequestAnimationFrame||function(t){var e=+new Date,i=Math.max(0,16-(e-o)),l=setTimeout(t,i);return o=e,l},o=+new Date;var a=l.cancelAnimationFrame||l.webkitCancelAnimationFrame||l.mozCancelAnimationFrame||clearTimeout;Function.prototype.bind&&(n=n.bind(l),a=a.bind(l)),(t.exports=n).cancel=a}]);i(123),i(116);function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*!
 * Name    : Video Background Extension for Jarallax
 * Version : 1.0.1
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */!function(t){var e={};function i(l){if(e[l])return e[l].exports;var n=e[l]={i:l,l:!1,exports:{}};return t[l].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,l){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:l})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===n(t)&&t&&t.__esModule)return t;var l=Object.create(null);if(i.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(l,o,function(e){return t[e]}.bind(null,o));return l},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=6)}([,,function(t,e,i){t.exports=function(t){"complete"===document.readyState||"interactive"===document.readyState?t.call():document.attachEvent?document.attachEvent("onreadystatechange",(function(){"interactive"===document.readyState&&t.call()})):document.addEventListener&&document.addEventListener("DOMContentLoaded",t)}},,function(t,e,i){(function(e){var i;i="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},t.exports=i}).call(this,i(5))},function(t,e,i){var l,o="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(t){return n(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)};l=function(){return this}();try{l=l||Function("return this")()||(0,eval)("this")}catch(t){"object"===("undefined"==typeof window?"undefined":o(window))&&(l=window)}t.exports=l},function(t,e,i){t.exports=i(7)},function(t,e,i){var l=r(i(8)),n=r(i(4)),o=r(i(2)),a=r(i(10));function r(t){return t&&t.__esModule?t:{default:t}}n.default.VideoWorker=n.default.VideoWorker||l.default,(0,a.default)(),(0,o.default)((function(){"undefined"!=typeof jarallax&&jarallax(document.querySelectorAll("[data-jarallax-video]"))}))},function(t,e,i){t.exports=i(9)},function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0});var l="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(t){return n(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},o=function(){function t(t,e){for(var i=0;i<e.length;i++){var l=e[i];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}return function(e,i,l){return i&&t(e.prototype,i),l&&t(e,l),e}}();function a(){this._done=[],this._fail=[]}a.prototype={execute:function(t,e){var i=t.length;for(e=Array.prototype.slice.call(e);i--;)t[i].apply(null,e)},resolve:function(){this.execute(this._done,arguments)},reject:function(){this.execute(this._fail,arguments)},done:function(t){this._done.push(t)},fail:function(t){this._fail.push(t)}};var r=0,s=0,c=0,u=0,d=0,h=new a,p=new a,f=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);this.url=e,this.options_default={autoplay:!1,loop:!1,mute:!1,volume:100,showContols:!0,startTime:0,endTime:0},this.options=this.extend({},this.options_default,i),this.videoID=this.parseURL(e),this.videoID&&(this.ID=r++,this.loadAPI(),this.init())}return o(t,[{key:"extend",value:function(t){var e=arguments;return t=t||{},Object.keys(arguments).forEach((function(i){e[i]&&Object.keys(e[i]).forEach((function(l){t[l]=e[i][l]}))})),t}},{key:"parseURL",value:function(t){var e,i,l,n,o=!(!(e=t.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/))||11!==e[1].length)&&e[1],a=function(t){var e=t.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/);return!(!e||!e[3])&&e[3]}(t),r=(i=t.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/),l={},n=0,i.forEach((function(t){var e=t.match(/^(mp4|webm|ogv|ogg)\:(.*)/);e&&e[1]&&e[2]&&(l["ogv"===e[1]?"ogg":e[1]]=e[2],n=1)})),!!n&&l);return o?(this.type="youtube",o):a?(this.type="vimeo",a):!!r&&(this.type="local",r)}},{key:"isValid",value:function(){return!!this.videoID}},{key:"on",value:function(t,e){this.userEventsList=this.userEventsList||[],(this.userEventsList[t]||(this.userEventsList[t]=[])).push(e)}},{key:"off",value:function(t,e){var i=this;this.userEventsList&&this.userEventsList[t]&&(e?this.userEventsList[t].forEach((function(l,n){l===e&&(i.userEventsList[t][n]=!1)})):delete this.userEventsList[t])}},{key:"fire",value:function(t){var e=this,i=[].slice.call(arguments,1);this.userEventsList&&void 0!==this.userEventsList[t]&&this.userEventsList[t].forEach((function(t){t&&t.apply(e,i)}))}},{key:"play",value:function(t){var e=this;e.player&&("youtube"===e.type&&e.player.playVideo&&(void 0!==t&&e.player.seekTo(t||0),YT.PlayerState.PLAYING!==e.player.getPlayerState()&&e.player.playVideo()),"vimeo"===e.type&&(void 0!==t&&e.player.setCurrentTime(t),e.player.getPaused().then((function(t){t&&e.player.play()}))),"local"===e.type&&(void 0!==t&&(e.player.currentTime=t),e.player.paused&&e.player.play()))}},{key:"pause",value:function(){var t=this;t.player&&("youtube"===t.type&&t.player.pauseVideo&&YT.PlayerState.PLAYING===t.player.getPlayerState()&&t.player.pauseVideo(),"vimeo"===t.type&&t.player.getPaused().then((function(e){e||t.player.pause()})),"local"===t.type&&(t.player.paused||t.player.pause()))}},{key:"mute",value:function(){this.player&&("youtube"===this.type&&this.player.mute&&this.player.mute(),"vimeo"===this.type&&this.player.setVolume&&this.player.setVolume(0),"local"===this.type&&(this.$video.muted=!0))}},{key:"unmute",value:function(){this.player&&("youtube"===this.type&&this.player.mute&&this.player.unMute(),"vimeo"===this.type&&this.player.setVolume&&this.player.setVolume(this.options.volume),"local"===this.type&&(this.$video.muted=!1))}},{key:"setVolume",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this;e.player&&t&&("youtube"===e.type&&e.player.setVolume&&e.player.setVolume(t),"vimeo"===e.type&&e.player.setVolume&&e.player.setVolume(t),"local"===e.type&&(e.$video.volume=t/100))}},{key:"getVolume",value:function(t){this.player?("youtube"===this.type&&this.player.getVolume&&t(this.player.getVolume()),"vimeo"===this.type&&this.player.getVolume&&this.player.getVolume().then((function(e){t(e)})),"local"===this.type&&t(100*this.$video.volume)):t(!1)}},{key:"getMuted",value:function(t){this.player?("youtube"===this.type&&this.player.isMuted&&t(this.player.isMuted()),"vimeo"===this.type&&this.player.getVolume&&this.player.getVolume().then((function(e){t(!!e)})),"local"===this.type&&t(this.$video.muted)):t(null)}},{key:"getImageURL",value:function(t){var e=this;if(e.videoImage)t(e.videoImage);else{if("youtube"===e.type){var i=["maxresdefault","sddefault","hqdefault","0"],l=0,n=new Image;n.onload=function(){120!==(this.naturalWidth||this.width)||l===i.length-1?(e.videoImage="https://img.youtube.com/vi/"+e.videoID+"/"+i[l]+".jpg",t(e.videoImage)):(l++,this.src="https://img.youtube.com/vi/"+e.videoID+"/"+i[l]+".jpg")},n.src="https://img.youtube.com/vi/"+e.videoID+"/"+i[l]+".jpg"}if("vimeo"===e.type){var o=new XMLHttpRequest;o.open("GET","https://vimeo.com/api/v2/video/"+e.videoID+".json",!0),o.onreadystatechange=function(){if(4===this.readyState&&this.status>=200&&this.status<400){var i=JSON.parse(this.responseText);e.videoImage=i[0].thumbnail_large,t(e.videoImage)}},o.send(),o=null}}}},{key:"getIframe",value:function(t){this.getVideo(t)}},{key:"getVideo",value:function(t){var e=this;e.$video?t(e.$video):e.onAPIready((function(){var i=void 0;if(e.$video||((i=document.createElement("div")).style.display="none"),"youtube"===e.type){e.playerOptions={},e.playerOptions.videoId=e.videoID,e.playerOptions.playerVars={autohide:1,rel:0,autoplay:0,playsinline:1},e.options.showContols||(e.playerOptions.playerVars.iv_load_policy=3,e.playerOptions.playerVars.modestbranding=1,e.playerOptions.playerVars.controls=0,e.playerOptions.playerVars.showinfo=0,e.playerOptions.playerVars.disablekb=1);var l=void 0,n=void 0;e.playerOptions.events={onReady:function(t){e.options.mute?t.target.mute():e.options.volume&&t.target.setVolume(e.options.volume),e.options.autoplay&&e.play(e.options.startTime),e.fire("ready",t),setInterval((function(){e.getVolume((function(i){e.options.volume!==i&&(e.options.volume=i,e.fire("volumechange",t))}))}),150)},onStateChange:function(t){e.options.loop&&t.data===YT.PlayerState.ENDED&&e.play(e.options.startTime),l||t.data!==YT.PlayerState.PLAYING||(l=1,e.fire("started",t)),t.data===YT.PlayerState.PLAYING&&e.fire("play",t),t.data===YT.PlayerState.PAUSED&&e.fire("pause",t),t.data===YT.PlayerState.ENDED&&e.fire("ended",t),t.data===YT.PlayerState.PLAYING?n=setInterval((function(){e.fire("timeupdate",t),e.options.endTime&&e.player.getCurrentTime()>=e.options.endTime&&(e.options.loop?e.play(e.options.startTime):e.pause())}),150):clearInterval(n)}};var o=!e.$video;if(o){var a=document.createElement("div");a.setAttribute("id",e.playerID),i.appendChild(a),document.body.appendChild(i)}e.player=e.player||new window.YT.Player(e.playerID,e.playerOptions),o&&(e.$video=document.getElementById(e.playerID),e.videoWidth=parseInt(e.$video.getAttribute("width"),10)||1280,e.videoHeight=parseInt(e.$video.getAttribute("height"),10)||720)}if("vimeo"===e.type){e.playerOptions="",e.playerOptions+="player_id="+e.playerID,e.playerOptions+="&autopause=0",e.playerOptions+="&transparent=0",e.options.showContols||(e.playerOptions+="&badge=0&byline=0&portrait=0&title=0"),e.playerOptions+="&autoplay="+(e.options.autoplay?"1":"0"),e.playerOptions+="&loop="+(e.options.loop?1:0),e.$video||(e.$video=document.createElement("iframe"),e.$video.setAttribute("id",e.playerID),e.$video.setAttribute("src","https://player.vimeo.com/video/"+e.videoID+"?"+e.playerOptions),e.$video.setAttribute("frameborder","0"),i.appendChild(e.$video),document.body.appendChild(i)),e.player=e.player||new Vimeo.Player(e.$video),e.player.getVideoWidth().then((function(t){e.videoWidth=t||1280})),e.player.getVideoHeight().then((function(t){e.videoHeight=t||720})),e.options.startTime&&e.options.autoplay&&e.player.setCurrentTime(e.options.startTime),e.options.mute?e.player.setVolume(0):e.options.volume&&e.player.setVolume(e.options.volume);var r=void 0;e.player.on("timeupdate",(function(t){r||(e.fire("started",t),r=1),e.fire("timeupdate",t),e.options.endTime&&e.options.endTime&&t.seconds>=e.options.endTime&&(e.options.loop?e.play(e.options.startTime):e.pause())})),e.player.on("play",(function(t){e.fire("play",t),e.options.startTime&&0===t.seconds&&e.play(e.options.startTime)})),e.player.on("pause",(function(t){e.fire("pause",t)})),e.player.on("ended",(function(t){e.fire("ended",t)})),e.player.on("loaded",(function(t){e.fire("ready",t)})),e.player.on("volumechange",(function(t){e.fire("volumechange",t)}))}if("local"===e.type){e.$video||(e.$video=document.createElement("video"),e.options.showContols&&(e.$video.controls=!0),e.options.mute?e.$video.muted=!0:e.$video.volume&&(e.$video.volume=e.options.volume/100),e.options.loop&&(e.$video.loop=!0),e.$video.setAttribute("playsinline",""),e.$video.setAttribute("webkit-playsinline",""),e.$video.setAttribute("id",e.playerID),i.appendChild(e.$video),document.body.appendChild(i),Object.keys(e.videoID).forEach((function(t){var i,l,n,o;i=e.$video,l=e.videoID[t],n="video/"+t,(o=document.createElement("source")).src=l,o.type=n,i.appendChild(o)}))),e.player=e.player||e.$video;var s=void 0;e.player.addEventListener("playing",(function(t){s||e.fire("started",t),s=1})),e.player.addEventListener("timeupdate",(function(t){e.fire("timeupdate",t),e.options.endTime&&e.options.endTime&&this.currentTime>=e.options.endTime&&(e.options.loop?e.play(e.options.startTime):e.pause())})),e.player.addEventListener("play",(function(t){e.fire("play",t)})),e.player.addEventListener("pause",(function(t){e.fire("pause",t)})),e.player.addEventListener("ended",(function(t){e.fire("ended",t)})),e.player.addEventListener("loadedmetadata",(function(){e.videoWidth=this.videoWidth||1280,e.videoHeight=this.videoHeight||720,e.fire("ready"),e.options.autoplay&&e.play(e.options.startTime)})),e.player.addEventListener("volumechange",(function(t){e.getVolume((function(t){e.options.volume=t})),e.fire("volumechange",t)}))}t(e.$video)}))}},{key:"init",value:function(){this.playerID="VideoWorker-"+this.ID}},{key:"loadAPI",value:function(){if(!s||!c){var t="";if("youtube"!==this.type||s||(s=1,t="https://www.youtube.com/iframe_api"),"vimeo"!==this.type||c||(c=1,t="https://player.vimeo.com/api/player.js"),t){var e=document.createElement("script"),i=document.getElementsByTagName("head")[0];e.src=t,i.appendChild(e),i=null,e=null}}}},{key:"onAPIready",value:function(t){if("youtube"===this.type&&("undefined"!=typeof YT&&0!==YT.loaded||u?"object"===("undefined"==typeof YT?"undefined":l(YT))&&1===YT.loaded?t():h.done((function(){t()})):(u=1,window.onYouTubeIframeAPIReady=function(){window.onYouTubeIframeAPIReady=null,h.resolve("done"),t()})),"vimeo"===this.type)if("undefined"!=typeof Vimeo||d)"undefined"!=typeof Vimeo?t():p.done((function(){t()}));else{d=1;var e=setInterval((function(){"undefined"!=typeof Vimeo&&(clearInterval(e),p.resolve("done"),t())}),20)}"local"===this.type&&t()}}]),t}();e.default=f},function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.default.jarallax;if(void 0===t)return;var e=t.constructor,i=e.prototype.init;e.prototype.init=function(){var t=this;i.apply(t),t.video&&!t.options.disableVideo()&&t.video.getVideo((function(e){var i=e.parentNode;t.css(e,{position:t.image.position,top:"0px",left:"0px",right:"0px",bottom:"0px",width:"100%",height:"100%",maxWidth:"none",maxHeight:"none",margin:0,zIndex:-1}),t.$video=e,t.image.$container.appendChild(e),i.parentNode.removeChild(i)}))};var o=e.prototype.coverImage;e.prototype.coverImage=function(){var t=o.apply(this),e=!!this.image.$item&&this.image.$item.nodeName;if(t&&this.video&&e&&("IFRAME"===e||"VIDEO"===e)){var i=t.image.height,l=i*this.image.width/this.image.height,n=(t.container.width-l)/2,a=t.image.marginTop;t.container.width>l&&(i=(l=t.container.width)*this.image.height/this.image.width,n=0,a+=(t.image.height-i)/2),"IFRAME"===e&&(i+=400,a-=200),this.css(this.$video,{width:l+"px",marginLeft:n+"px",height:i+"px",marginTop:a+"px"})}return t};var a=e.prototype.initImg;e.prototype.initImg=function(){var t=a.apply(this);return this.options.videoSrc||(this.options.videoSrc=this.$item.getAttribute("data-jarallax-video")||null),this.options.videoSrc?(this.defaultInitImgResult=t,!0):t};var r=e.prototype.canInitParallax;e.prototype.canInitParallax=function(){var t=this,e=r.apply(t);if(!t.options.videoSrc)return e;var i=new l.default(t.options.videoSrc,{autoplay:!0,loop:!0,showContols:!1,startTime:t.options.videoStartTime||0,endTime:t.options.videoEndTime||0,mute:t.options.videoVolume?0:1,volume:t.options.videoVolume||0});if(i.isValid())if(e){if(i.on("ready",(function(){if(t.options.videoPlayOnlyVisible){var e=t.onScroll;t.onScroll=function(){e.apply(t),t.isVisible()?i.play():i.pause()}}else i.play()})),i.on("started",(function(){t.image.$default_item=t.image.$item,t.image.$item=t.$video,t.image.width=t.video.videoWidth||1280,t.image.height=t.video.videoHeight||720,t.options.imgWidth=t.image.width,t.options.imgHeight=t.image.height,t.coverImage(),t.clipContainer(),t.onScroll(),t.image.$default_item&&(t.image.$default_item.style.display="none")})),t.video=i,!t.defaultInitImgResult)return"local"!==i.type?(i.getImageURL((function(e){t.image.src=e,t.init()})),!1):(t.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",!0)}else t.defaultInitImgResult||i.getImageURL((function(e){var i=t.$item.getAttribute("style");i&&t.$item.setAttribute("data-jarallax-original-styles",i),t.css(t.$item,{"background-image":'url("'+e+'")',"background-position":"center","background-size":"cover"})}));return e};var s=e.prototype.destroy;e.prototype.destroy=function(){this.image.$default_item&&(this.image.$item=this.image.$default_item,delete this.image.$default_item),s.apply(this)}};var l=o(i(8)),n=o(i(4));function o(t){return t&&t.__esModule?t:{default:t}}}]);i(205),i(239),function(){var t="bfred-it:object-fit-images",e=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,i="undefined"==typeof Image?{style:{"object-position":1}}:new Image,l="object-fit"in i.style,n="object-position"in i.style,o="background-size"in i.style,a="string"==typeof i.currentSrc,r=i.getAttribute,s=i.setAttribute,c=!1;function u(t,e,i){var l="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+(e||1)+"' height='"+(i||0)+"'%3E%3C/svg%3E";r.call(t,"src")!==l&&s.call(t,"src",l)}function d(t,e){t.naturalWidth?e(t):setTimeout(d,100,t,e)}function h(i){var n=function(t){for(var i,l=getComputedStyle(t).fontFamily,n={};null!==(i=e.exec(l));)n[i[1]]=i[2];return n}(i),o=i[t];if(n["object-fit"]=n["object-fit"]||"fill",!o.img){if("fill"===n["object-fit"])return;if(!o.skipTest&&l&&!n["object-position"])return}if(!o.img){o.img=new Image(i.width,i.height),o.img.srcset=r.call(i,"data-ofi-srcset")||i.srcset,o.img.src=r.call(i,"data-ofi-src")||i.src,s.call(i,"data-ofi-src",i.src),i.srcset&&s.call(i,"data-ofi-srcset",i.srcset),u(i,i.naturalWidth||i.width,i.naturalHeight||i.height),i.srcset&&(i.srcset="");try{!function(e){var i={get:function(i){return e[t].img[i||"src"]},set:function(i,l){return e[t].img[l||"src"]=i,s.call(e,"data-ofi-"+l,i),h(e),i}};Object.defineProperty(e,"src",i),Object.defineProperty(e,"currentSrc",{get:function(){return i.get("currentSrc")}}),Object.defineProperty(e,"srcset",{get:function(){return i.get("srcset")},set:function(t){return i.set(t,"srcset")}})}(i)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}!function(t){if(t.srcset&&!a&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}(o.img),i.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',i.style.backgroundPosition=n["object-position"]||"center",i.style.backgroundRepeat="no-repeat",i.style.backgroundOrigin="content-box",/scale-down/.test(n["object-fit"])?d(o.img,(function(){o.img.naturalWidth>i.width||o.img.naturalHeight>i.height?i.style.backgroundSize="contain":i.style.backgroundSize="auto"})):i.style.backgroundSize=n["object-fit"].replace("none","auto").replace("fill","100% 100%"),d(o.img,(function(t){u(i,t.naturalWidth,t.naturalHeight)}))}function p(e,i){var l=!c&&!e;if(i=i||{},e=e||"img",n&&!i.skipTest||!o)return!1;"img"===e?e=document.getElementsByTagName("img"):"string"==typeof e?e=document.querySelectorAll(e):"length"in e||(e=[e]);for(var a=0;a<e.length;a++)e[a][t]=e[a][t]||{skipTest:i.skipTest},h(e[a]);l&&(document.body.addEventListener("load",(function(t){"IMG"===t.target.tagName&&p(t.target,{skipTest:i.skipTest})}),!0),c=!0,e="img"),i.watchMQ&&window.addEventListener("resize",p.bind(null,e,{skipTest:i.skipTest}))}p.supportsObjectFit=l,p.supportsObjectPosition=n,function(){function e(e,i){return e[t]&&e[t].img&&("src"===i||"srcset"===i)?e[t].img:e}n||(HTMLImageElement.prototype.getAttribute=function(t){return r.call(e(this,t),t)},HTMLImageElement.prototype.setAttribute=function(t,i){return s.call(e(this,t),t,String(i))})}()}(),i(224),i(240),i(43),i(75);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*!
 * ClockPicker v0.0.7 (http://weareoutman.github.io/clockpicker/)
 * Copyright 2014 Wang Shenwei.
 * Licensed under MIT (https://github.com/weareoutman/clockpicker/blob/gh-pages/LICENSE)
 *
 * Further modified
 * Copyright 2015 Ching Yaw Hao.
 */!function(){var t,e,i,l=window.jQuery,n=l(window),a=l(document),r="http://www.w3.org/2000/svg",s="SVGAngle"in window&&((e=document.createElement("div")).innerHTML="<svg/>",t=(e.firstChild&&e.firstChild.namespaceURI)==r,e.innerHTML="",t),c="transition"in(i=document.createElement("div").style)||"WebkitTransition"in i||"MozTransition"in i||"msTransition"in i||"OTransition"in i,u="ontouchstart"in window,d="mousedown"+(u?" touchstart":""),h="mousemove.clockpicker"+(u?" touchmove.clockpicker":""),p="mouseup.clockpicker"+(u?" touchend.clockpicker":""),f=navigator.vibrate?"vibrate":navigator.webkitVibrate?"webkitVibrate":null;function m(t){return document.createElementNS(r,t)}function v(t,e,i){var l;return function(){var n=this,o=arguments,a=function(){l=null,i||t.apply(n,o)},r=i&&!l;clearTimeout(l),l=setTimeout(a,e),r&&t.apply(n,o)}}function g(t){return(t<10?"0":"")+t}var y=0;var b=135,x=110,w=80,k=20,S=2*b,M=c?350:1,C=['<div class="clockpicker picker">','<div class="picker__holder">','<div class="picker__frame">','<div class="picker__wrap">','<div class="picker__box">','<div class="picker__date-display">','<div class="clockpicker-display">','<div class="clockpicker-display-column">','<span class="clockpicker-span-hours text-primary"></span>',":",'<span class="clockpicker-span-minutes"></span>',"</div>",'<div class="clockpicker-display-column clockpicker-display-am-pm">','<div class="clockpicker-span-am-pm"></div>',"</div>","</div>","</div>",'<div class="picker__calendar-container">','<div class="clockpicker-plate">','<div class="clockpicker-canvas"></div>','<div class="clockpicker-dial clockpicker-hours"></div>','<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>',"</div>",'<div class="clockpicker-am-pm-block">',"</div>","</div>",'<div class="picker__footer">',"</div>","</div>","</div>","</div>","</div>","</div>"].join("");function T(t,e){var i,n,o=this,r=l(C),c=r.find(".clockpicker-plate"),u=r.find(".picker__holder"),f=r.find(".clockpicker-hours"),T=r.find(".clockpicker-minutes"),O=r.find(".clockpicker-am-pm-block"),E="INPUT"===t.prop("tagName"),P=E?t:t.find("input"),I=(P.prop("type"),l("label[for="+P.attr("id")+"]")),_=this;this.id=(n=++y+"",(i="cp")?i+n:n),this.element=t,this.holder=u,this.options=e,this.isAppended=!1,this.isShown=!1,this.currentView="hours",this.isInput=E,this.input=P,this.label=I,this.popover=r,this.plate=c,this.hoursView=f,this.minutesView=T,this.amPmBlock=O,this.spanHours=r.find(".clockpicker-span-hours"),this.spanMinutes=r.find(".clockpicker-span-minutes"),this.spanAmPm=r.find(".clockpicker-span-am-pm"),this.footer=r.find(".picker__footer"),this.amOrPm="",this.isTwelvehour=e.twelvehour,this.minTime=0,this.maxTime=0,this.minMinutes=0,this.maxMinutes=59,this.minHours=0,this.maxHours=23,this.isInvalidTimeScope=!1;var $=function(t){var i=t+"Time";if(o[i]=e[t].split(":"),4===o[i][1].length){var l=o[i][1].replace(/\d+/g,"").toUpperCase();o[i][1]=o[i][1].replace(/\D+/g,""),"PM"===l&&(o[i][0]=parseInt(o[i][0])+12)}if(2!==o[i].length)o[i]=null;else for(var n=0;n<o[i].length;n++)o[i][n]=+o[i][n]};if(e.min&&($("min"),this.minMinutes=this.minTime[1],this.minHours=this.minTime[0]),e.max&&($("max"),this.minHours>this.maxHours||this.minHours===this.maxHours&&this.minMinutes>=this.maxMinutes?this.maxTime=0:(this.maxMinutes=this.maxTime[1],this.maxHours=this.maxTime[0])),e.twelvehour){var D=['<div class="clockpicker-am-pm-block">','<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-am-button">',"AM","</button>",'<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-pm-button">',"PM","</button>","</div>"].join(""),L=(l(D),function(t){var e="pm";"PM"===t&&(e="am"),_.amOrPm=t,_.amPmBlock.children(".".concat(e,"-button")).removeClass("active"),_.amPmBlock.children(".".concat(t.toLowerCase(),"-button")).addClass("active"),_.spanAmPm.empty().append(t),o.disableOutOfRangeElements()});e.ampmclickable?(this.spanAmPm.empty(),l('<div id="click-am">AM</div>').on("click",(function(){_.spanAmPm.children("#click-am").addClass("text-primary"),_.spanAmPm.children("#click-pm").removeClass("text-primary"),_.amOrPm="AM"})).appendTo(this.spanAmPm),l('<div id="click-pm">PM</div>').on("click",(function(){_.spanAmPm.children("#click-pm").addClass("text-primary"),_.spanAmPm.children("#click-am").removeClass("text-primary"),_.amOrPm="PM"})).appendTo(this.spanAmPm)):(l('<button type="button" class="btn-floating btn-flat clockpicker-button am-button" tabindex="1">AM</button>').on("click",(function(){L("AM")})).appendTo(this.amPmBlock),l('<button type="button" class="btn-floating btn-flat clockpicker-button pm-button" tabindex="2">PM</button>').on("click",(function(){L("PM")})).appendTo(this.amPmBlock))}e.darktheme&&r.addClass("darktheme"),l('<button type="button" class="btn btn-flat clockpicker-button done-button" tabindex="'+(e.twelvehour?"3":"1")+'">'+e.donetext+"</button>").click(l.proxy(this.done,this)).appendTo(this.footer),l('<button type="button" class="btn btn-flat clockpicker-button clear-button" tabindex="'+(e.twelvehour?"4":"2")+'">'+e.cleartext+"</button>").click(l.proxy(this.clearInput,this)).appendTo(this.footer),this.spanHours.click(l.proxy(this.toggleView,this,"hours")),this.spanMinutes.click(l.proxy(this.toggleView,this,"minutes")),P.on("click.clockpicker",v(l.proxy(this.show,this),100));var R,V,F,W,j=l('<div class="clockpicker-tick"></div>');if(e.twelvehour)for(R=0;R<12;R+=e.hourstep)V=j.clone(),F=R/6*Math.PI,W=x,V.css("font-size","140%"),V.css({left:b+Math.sin(F)*W-k,top:b-Math.cos(F)*W-k}),V.html(0===R?12:R),f.append(V),V.on(d,B),this.disableOutOfRangeElements();else for(R=0;R<24;R+=e.hourstep){V=j.clone(),F=R/6*Math.PI;var N=R>0&&R<13;W=N?w:x,V.css({left:b+Math.sin(F)*W-k,top:b-Math.cos(F)*W-k}),N&&V.css("font-size","120%"),V.html(0===R?"00":R),f.append(V),V.on(d,B),this.disableOutOfRangeElements()}var z=Math.max(e.minutestep,5);for(R=0;R<60;R+=z)for(R=0;R<60;R+=5)V=j.clone(),F=R/30*Math.PI,V.css({left:b+Math.sin(F)*x-k,top:b-Math.cos(F)*x-k}),V.css("font-size","140%"),V.html(g(R)),T.append(V),V.on(d,B);function B(t,i){var l=c.offset(),n=/^touch/.test(t.type),o=l.left+b,r=l.top+b,u=(n?t.originalEvent.touches[0]:t).pageX-o,d=(n?t.originalEvent.touches[0]:t).pageY-r,f=Math.sqrt(u*u+d*d),m=!1;if(!i||!(f<x-k||f>x+k)){t.preventDefault();var v=setTimeout((function(){_.popover.addClass("clockpicker-moving")}),200);s&&c.append(_.canvas),_.setHand(u,d,!i,!0),a.off(h).on(h,(function(t){t.preventDefault();var e=/^touch/.test(t.type),i=(e?t.originalEvent.touches[0]:t).pageX-o,l=(e?t.originalEvent.touches[0]:t).pageY-r;(m||i!==u||l!==d)&&(m=!0,_.setHand(i,l,!1,!0))})),a.off(p).on(p,(function(t){a.off(p),t.preventDefault();var l=/^touch/.test(t.type),n=(l?t.originalEvent.changedTouches[0]:t).pageX-o,s=(l?t.originalEvent.changedTouches[0]:t).pageY-r;(i||m)&&n===u&&s===d&&_.setHand(n,s);_.hours,_.minutes;var f=_.amOrPm,g=_.maxHours,y=_.minHours;_.maxMinutes,_.minMinutes;"PM"===f&&(y<12&&(y=0),y>12&&(y-=12),g>12&&(g-=12)),_.isInvalidTimeScope?(_.isInvalidTimeScope=!1,t.stopPropagation()):"hours"===_.currentView?_.toggleView("minutes",M/2):"hours"!=_.currentView&&e.autoclose&&(_.minutesView.addClass("clockpicker-dial-out"),setTimeout((function(){_.done()}),M/2),_.currentHours=0),c.prepend(H),clearTimeout(v),_.popover.removeClass("clockpicker-moving"),a.off(h)})),_.disableOutOfRangeElements()}}if(c.on(d,(function(t){0===l(t.target).closest(".clockpicker-tick").length&&B(t,!0)})),s){var H=r.find(".clockpicker-canvas"),Z=m("svg");Z.setAttribute("class","clockpicker-svg"),Z.setAttribute("width",S),Z.setAttribute("height",S);var Y=m("g");Y.setAttribute("transform","translate("+b+","+b+")");var X=m("circle");X.setAttribute("class","clockpicker-canvas-bearing"),X.setAttribute("cx",0),X.setAttribute("cy",0),X.setAttribute("r",2);var U=m("line");U.setAttribute("x1",0),U.setAttribute("y1",0);var G=m("circle");G.setAttribute("class","clockpicker-canvas-bg"),G.setAttribute("r",k);var q=m("circle");q.setAttribute("class","clockpicker-canvas-fg"),q.setAttribute("r",5),Y.appendChild(U),Y.appendChild(G),Y.appendChild(q),Y.appendChild(X),Z.appendChild(Y),H.append(Z),this.hand=U,this.bg=G,this.fg=q,this.bearing=X,this.g=Y,this.canvas=H}A(this.options.init)}function A(t){t&&"function"==typeof t&&t()}T.DEFAULTS={default:"",fromnow:0,donetext:"Done",cleartext:"Clear",autoclose:!1,ampmclickable:!1,darktheme:!1,twelvehour:!1,vibrate:!0,hourstep:1,minutestep:1,ampmSubmit:!1,container:"body"},T.prototype.toggle=function(){this[this.isShown?"hide":"show"]()},T.prototype.locate=function(){var t=this.element;l(this.options.container).append(this.popover),t.offset(),t.outerWidth(),t.outerHeight(),this.options.align;this.popover.show()},T.prototype.parseInputValue=function(){var t=this.input.prop("value")||this.options.default||"";if("now"===t&&(t=new Date(+new Date+this.options.fromnow)),t instanceof Date&&(t=t.getHours()+":"+t.getMinutes()),t=t.split(":"),this.hours=+t[0]||0,this.minutes=+(t[1]+"").replace(/\D/g,"")||0,this.hours=Math.round(this.hours/this.options.hourstep)*this.options.hourstep,this.minutes=Math.round(this.minutes/this.options.minutestep)*this.options.minutestep,this.options.twelvehour){var e=(t[1]+"").replace(/\d+/g,"").toLowerCase();this.amOrPm=this.hours>12||"pm"===e?"PM":"AM"}},T.prototype.show=function(t){if(!this.isShown){A(this.options.beforeShow),l(":input").each((function(){l(this).attr("tabindex",-1)}));var e=this;this.input.blur(),this.popover.addClass("picker--opened"),this.input.addClass("picker__input picker__input--active"),l(document.body).css("overflow","hidden"),this.isAppended||(this.popover.insertAfter(this.input),this.options.twelvehour&&(this.amOrPm="AM",this.options.ampmclickable?(this.spanAmPm.children("#click-am").addClass("text-primary"),this.spanAmPm.children("#click-pm").removeClass("text-primary")):(this.amPmBlock.children(".pm-button").removeClass("active"),this.amPmBlock.children(".am-button").addClass("active"),this.spanAmPm.empty().append("PM"))),n.on("resize.clockpicker"+this.id,(function(){e.isShown&&e.locate()})),this.isAppended=!0),this.parseInputValue(),0===this.hours&&(this.hours=this.minHours),this.spanHours.html(g(this.hours)),this.spanMinutes.html(g(this.minutes)),this.options.twelvehour&&this.spanAmPm.empty().append(this.amOrPm),this.disableOutOfRangeElements(),this.toggleView("hours"),this.locate(),this.isShown=!0,a.on("click.clockpicker."+this.id+" focusin.clockpicker."+this.id,v((function(t){var i=l(t.target);0===i.closest(e.popover.find(".picker__wrap")).length&&0===i.closest(e.input).length&&e.hide()}),100)),a.on("keyup.clockpicker."+this.id,v((function(t){27===t.keyCode&&e.hide()}),100)),A(this.options.afterShow)}},T.prototype.hide=function(){A(this.options.beforeHide),this.input.removeClass("picker__input picker__input--active"),this.popover.removeClass("picker--opened"),l(document.body).css("overflow","visible"),this.isShown=!1,l(":input").each((function(t){l(this).attr("tabindex",t+1)})),a.off("click.clockpicker."+this.id+" focusin.clockpicker."+this.id),a.off("keyup.clockpicker."+this.id),this.popover.hide(),A(this.options.afterHide)},T.prototype.disableOutOfRangeElements=function(){var t=this,e=this.hours,i=this.minutes,n=this.currentView,o=this.isTwelvehour,a=this.amOrPm,r=this.maxHours,s=this.minHours,c=this.maxMinutes,u=this.minMinutes,d=l(".clockpicker-hours").children(),h=l(".clockpicker-minutes").children(),p=l(".am-button"),f=l(".pm-button"),m=l(".done-button");o&&"minutes"===n&&(m.removeClass("grey-text disabled"),"AM"!==a||e+12<=r?"PM"!==a||e>=s||p.addClass("disabled"):f.addClass("disabled")),o&&"PM"===a&&(s<12&&(s=0),s>12&&(s-=12),r>12&&(r-=12)),o&&"hours"===n&&(p.removeClass("disabled"),f.removeClass("disabled"),("AM"!==a||e>=s&&e<=r)&&("PM"!==a||e>=s&&e<=r)?m.removeClass("grey-text disabled"):m.addClass("grey-text disabled")),"minutes"===n&&(e===s&&i<u||e===r&&i>c?m.addClass("grey-text disabled"):m.removeClass("grey-text disabled")),"hours"===n&&d.each((function(e,i){var n=i.innerHTML;t.isTwelvehour&&12==n&&(n=0),n>r||n<s?l(i).addClass("grey-text disabled"):l(i).removeClass("grey-text disabled")})),"minutes"===n&&h.each((function(t,i){s==e&&i.innerHTML<u?l(i).addClass("grey-text disabled"):r==e&&i.innerHTML>c?l(i).addClass("grey-text disabled"):l(i).removeClass("grey-text disabled")}))},T.prototype.toggleView=function(t,e){var i=!1;"minutes"===t&&"visible"===l(this.hoursView).css("visibility")&&(A(this.options.beforeHourSelect),i=!0);var n="hours"===t,o=n?this.hoursView:this.minutesView,a=n?this.minutesView:this.hoursView;this.currentView=t,this.spanHours.toggleClass("text-primary",n),this.spanMinutes.toggleClass("text-primary",!n),a.addClass("clockpicker-dial-out"),o.css("visibility","visible").removeClass("clockpicker-dial-out"),this.resetClock(e),clearTimeout(this.toggleViewTimer),this.toggleViewTimer=setTimeout((function(){a.css("visibility","hidden")}),M),this.disableOutOfRangeElements(),i&&A(this.options.afterHourSelect)},T.prototype.resetClock=function(t){var e=this.currentView,i=this[e],l="hours"===e,n=i*(Math.PI/(l?6:30)),o=l&&i>0&&i<13?w:x,a=Math.sin(n)*o,r=-Math.cos(n)*o,c=this;s&&t?(c.canvas.addClass("clockpicker-canvas-out"),setTimeout((function(){c.canvas.removeClass("clockpicker-canvas-out"),c.setHand(a,r)}),t)):this.setHand(a,r)},T.prototype.setHand=function(t,e,i,n){var o,a,r=Math.atan2(t,-e),c="hours"===this.currentView,u=Math.sqrt(t*t+e*e),d=this.options,h=c&&u<(x+w)/2,p=h?w:x;o=c?d.hourstep/6*Math.PI:d.minutestep/30*Math.PI,d.twelvehour&&(p=x),r<0&&(r=2*Math.PI+r),r=(a=Math.round(r/o))*o,c?(a*=d.hourstep,d.twelvehour||!h!=a>0||(a+=12),d.twelvehour&&0===a&&(a=12),24===a&&(a=0)):60===(a*=d.minutestep)&&(a=0);var m=this.minHours,v=this.maxHours,y=this.minMinutes,b=this.maxMinutes,k=this.amOrPm;if(c){var S=a;if("PM"===this.amOrPm&&(m<12&&(m=0),m>12&&(m-=12),v>12&&(v-=12)),this.isTwelvehour&&12==S&&(S=0),S<m||S>v)return void(this.isInvalidTimeScope=!0);if(this.isTwelvehour&&12===S)return void(this.isInvalidTimeScope=!0)}else{var M=this.hours;if("PM"===k&&(M+=12),M==m&&a<y||M==v&&a>b)return void(this.isInvalidTimeScope=!0)}if(c?this.fg.setAttribute("class","clockpicker-canvas-fg"):a%5==0?this.fg.setAttribute("class","clockpicker-canvas-fg"):this.fg.setAttribute("class","clockpicker-canvas-fg active"),this[this.currentView]!==a&&f&&this.options.vibrate&&(this.vibrateTimer||(navigator[f](10),this.vibrateTimer=setTimeout(l.proxy((function(){this.vibrateTimer=null}),this),100))),this[this.currentView]=a,this[c?"spanHours":"spanMinutes"].html(g(a)),s){n||!c&&a%5?(this.g.insertBefore(this.hand,this.bearing),this.g.insertBefore(this.bg,this.fg),this.bg.setAttribute("class","clockpicker-canvas-bg clockpicker-canvas-bg-trans")):(this.g.insertBefore(this.hand,this.bg),this.g.insertBefore(this.fg,this.bg),this.bg.setAttribute("class","clockpicker-canvas-bg"));var C=Math.sin(r)*p,T=-Math.cos(r)*p;this.hand.setAttribute("x2",C),this.hand.setAttribute("y2",T),this.bg.setAttribute("cx",C),this.bg.setAttribute("cy",T),this.fg.setAttribute("cx",C),this.fg.setAttribute("cy",T)}else this[c?"hoursView":"minutesView"].find(".clockpicker-tick").each((function(){var t=l(this);t.toggleClass("active",a===+t.html())}))},T.prototype.clearInput=function(){this.input.val(""),this.hide(),this.options.afterDone&&"function"==typeof this.options.afterDone&&this.options.afterDone(this.input,null)},T.prototype.getTime=function(t){this.parseInputValue();var e=this.hours;this.options.twelvehour&&e<12&&"PM"===this.amOrPm&&(e+=12);var i=new Date;return i.setMinutes(this.minutes),i.setHours(e),i.setSeconds(0),t&&t.apply(this.element,i)||i},T.prototype.done=function(){A(this.options.beforeDone),this.hide(),this.label.addClass("active");var t=this.input.prop("value"),e=this.hours,i=":"+g(this.minutes);this.isHTML5&&this.options.twelvehour&&(this.hours<12&&"PM"===this.amOrPm&&(e+=12),12===this.hours&&"AM"===this.amOrPm&&(e=0)),i=g(e)+i,!this.isHTML5&&this.options.twelvehour&&(i+=this.amOrPm),this.input.prop("value",i),i!==t&&(this.input.trigger("change"),this.isInput||this.element.trigger("change")),this.options.autoclose&&this.input.trigger("blur"),A(this.options.afterDone)},T.prototype.remove=function(){this.element.removeData("clockpicker"),this.input.off("focus.clockpicker click.clockpicker"),this.isShown&&this.hide(),this.isAppended&&(n.off("resize.clockpicker"+this.id),this.popover.remove())},l.fn.pickatime=function(t){var e=Array.prototype.slice.call(arguments,1);function i(){var i=l(this),n=i.data("clockpicker");if(n)"function"==typeof n[t]&&n[t].apply(n,e);else{var a=l.extend({},T.DEFAULTS,i.data(),"object"==o(t)&&t);i.data("clockpicker",new T(i,a))}}if(1==this.length){var n=i.apply(this[0]);return void 0!==n?n:this}return this.each(i)},l(".time-picker-opener").on("click",(function(t){t.stopPropagation(),t.preventDefault();var e=t.target.dataset.open;l("#".concat(e)).pickatime("picker").data("clockpicker").show()}))}();i(76);jQuery((function(t){t.fn.dateTimePicker=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:", ",i=t(this)[0],l=t(".picker-opener[data-open='".concat(i.dataset.open,"']")),n=t(".timepicker[data-open='".concat(i.dataset.open,"']")),o=t("#".concat(i.dataset.open));o.pickadate({onClose:function(){n.pickatime({afterHide:function(){n.trigger("change")}}).pickatime("picker").data("clockpicker").show()},format:"yyyy/mm/dd",formatSubmit:"yyyy/mm/dd"}),o.on("change",(function(){var t=n.val(),i=o.val();l[0].value="".concat(i).concat(""!==t&&""!==i?e:"").concat(t)})),n.on("change",(function(){var t=n.val(),i=o.val();l[0].value="".concat(i).concat(""!==t&&""!==i?e:"").concat(t)}))}}));i(208),i(210),i(241),i(242),i(152),i(153),i(154),i(211),i(155),i(156),i(157),i(158),i(159),i(160),i(161),i(215),i(162),i(165),i(117),i(124),i(166)}]);
//# sourceMappingURL=mdb.min.js.map

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ })

}]);