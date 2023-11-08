/*!
 2022 Jason Mulligan <jason.mulligan@avoidwork.com>
 @version 8.0.7
*/
module.exports = function () {
  "use strict";

  var e = /^(b|B)$/;
  var t = {
    iec: {
      bits: ["bit", "Kibit", "Mibit", "Gibit", "Tibit", "Pibit", "Eibit", "Zibit", "Yibit"],
      bytes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"]
    },
    jedec: {
      bits: ["bit", "Kbit", "Mbit", "Gbit", "Tbit", "Pbit", "Ebit", "Zbit", "Ybit"],
      bytes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
    }
  };
  var n = {
    iec: ["", "kibi", "mebi", "gibi", "tebi", "pebi", "exbi", "zebi", "yobi"],
    jedec: ["", "kilo", "mega", "giga", "tera", "peta", "exa", "zetta", "yotta"]
  };
  var r = {
    floor: Math.floor,
    ceil: Math.ceil
  };
  function i(i) {
    var a;
    var o;
    var s;
    var u;
    var l;
    var c;
    var f;
    var d;
    var h;
    var p;
    var m;
    var v;
    var g;
    var y;
    var b;
    var w;
    var _;
    var x;
    var S;
    var E;
    var k;
    var O = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var N = [];
    var T = 0;
    if (isNaN(i)) {
      throw new TypeError("Invalid number");
    }
    s = O.bits === true;
    b = O.unix === true;
    v = O.pad === true;
    o = O.base || 10;
    g = O.round !== undefined ? O.round : b ? 1 : 2;
    f = O.locale !== undefined ? O.locale : "";
    d = O.localeOptions || {};
    w = O.separator !== undefined ? O.separator : "";
    _ = O.spacer !== undefined ? O.spacer : b ? "" : " ";
    S = O.symbols || {};
    x = o === 2 ? O.standard || "iec" : "jedec";
    m = O.output || "string";
    l = O.fullform === true;
    c = O.fullforms instanceof Array ? O.fullforms : [];
    a = O.exponent !== undefined ? O.exponent : -1;
    E = r[O.roundingMethod] || Math.round;
    h = (p = Number(i)) < 0;
    u = o > 2 ? 1000 : 1024;
    k = isNaN(O.precision) === false ? parseInt(O.precision, 10) : 0;
    if (h) {
      p = -p;
    }
    if ((a === -1 || isNaN(a)) && (a = Math.floor(Math.log(p) / Math.log(u))) < 0) {
      a = 0;
    }
    if (a > 8) {
      if (k > 0) {
        k += 8 - a;
      }
      a = 8;
    }
    if (m === "exponent") {
      return a;
    }
    if (p === 0) {
      N[0] = 0;
      y = N[1] = b ? "" : t[x][s ? "bits" : "bytes"][a];
    } else {
      T = p / (o === 2 ? Math.pow(2, a * 10) : Math.pow(1000, a));
      if (s && (T *= 8) >= u && a < 8) {
        T /= u;
        a++;
      }
      var M = Math.pow(10, a > 0 ? g : 0);
      N[0] = E(T * M) / M;
      if (N[0] === u && a < 8 && O.exponent === undefined) {
        N[0] = 1;
        a++;
      }
      y = N[1] = o === 10 && a === 1 ? s ? "kbit" : "kB" : t[x][s ? "bits" : "bytes"][a];
      if (b) {
        N[1] = N[1].charAt(0);
        if (e.test(N[1])) {
          N[0] = Math.floor(N[0]);
          N[1] = "";
        }
      }
    }
    if (h) {
      N[0] = -N[0];
    }
    if (k > 0) {
      N[0] = N[0].toPrecision(k);
    }
    N[1] = S[N[1]] || N[1];
    if (f === true) {
      N[0] = N[0].toLocaleString();
    } else if (f.length > 0) {
      N[0] = N[0].toLocaleString(f, d);
    } else if (w.length > 0) {
      N[0] = N[0].toString().replace(".", w);
    }
    if (v && Number.isInteger(N[0]) === false && g > 0) {
      var R = w || ".";
      var A = N[0].toString().split(R);
      var P = A[1] || "";
      var C = P.length;
      var D = g - C;
      N[0] = "".concat(A[0]).concat(R).concat(P.padEnd(C + D, "0"));
    }
    if (l) {
      N[1] = c[a] ? c[a] : n[x][a] + (s ? "bit" : "byte") + (N[0] === 1 ? "" : "s");
    }
    if (m === "array") {
      return N;
    } else if (m === "object") {
      return {
        value: N[0],
        symbol: N[1],
        exponent: a,
        unit: y
      };
    } else {
      return N.join(_);
    }
  }
  i.partial = function (e) {
    return function (t) {
      return i(t, e);
    };
  };
  return i;
}();