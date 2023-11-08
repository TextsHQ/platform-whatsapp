var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compileCountryRegexes = d;
exports.extractDigits = function (e) {
  const t = e.match(/\d+/g);
  if (t != null) {
    return t.join("");
  } else {
    return "";
  }
};
exports.findCC = p;
exports.formatPhone = f;
exports.formattedPhoneNumber = function (e) {
  return f((0, o.phoneNumberFromJid)(e));
};
exports.isPotentiallyPhoneNumber = function (e) {
  return _.test(e);
};
exports.isPotentiallyValid = function (e, t) {
  if (!/^\d+$/.test(t)) {
    return false;
  }
  const n = d(e);
  if (!n) {
    return false;
  }
  if (typeof n.lengths == "number") {
    return n.lengths === t.length;
  } else {
    return n.lengths.includes(t.length);
  }
};
exports.phoneCC = function (e) {
  return p(e);
};
var i = r(require("./945337.js"));
var a = require("./227896.js");
var o = require("./418987.js");
const s = /^(1|2[07]|3[0-469]|4[013-9]|5[1-8]|6[0-6]|7|8[1246]|9[0-58])/;
const l = new Map();
class u {
  constructor(e) {
    let t;
    if (Array.isArray(e)) {
      t = e[0];
      let n = e[1];
      if (n != null && n !== -1) {
        if (!Array.isArray(n)) {
          n = [n];
        }
        this._leadins = n.map(function (e) {
          return new RegExp("^(" + e + ")");
        });
      }
      this._formatString = e[2];
    } else {
      t = e;
    }
    this._regex = new RegExp(`^${(0, a.inflatePhoneRegex)(t)}$`);
  }
  testAndFormat(e) {
    if (!this._regex.test(e) || !this._checkLeadins(e)) {
      return;
    }
    if (typeof this._formatString == "string") {
      return e.replace(this._regex, this._formatString);
    }
    const t = this._regex.exec(e);
    if (t != null) {
      return t.slice(1).join(this._formatString != null ? "-" : " ");
    } else {
      return undefined;
    }
  }
  _checkLeadins(e) {
    return !this._leadins || this._leadins.some(function (t) {
      return t.test(e);
    });
  }
}
const c = {};
function d(e) {
  if (c[e] != null) {
    return c[e];
  }
  const t = i.default[e] != null ? JSON.parse(`[${i.default[e]}]`) : null;
  if (t == null) {
    return null;
  }
  const n = t.pop();
  return c[e] = {
    lengths: n,
    formats: t.map(function (e) {
      return new u(e);
    })
  };
}
function p(e) {
  const t = e.match(s);
  if (t) {
    return t[0];
  } else if (e.length >= 3) {
    return e.substring(0, 3);
  } else {
    return e;
  }
}
function f(e) {
  let t = l.get(e);
  if (t == null) {
    t = function (e) {
      const t = e.length > 0 && e[0] === "+" ? e.substring(1) : e;
      const n = p(t);
      if (!n) {
        return t;
      }
      const r = t.substring(n.length);
      const i = d(n);
      if (!i) {
        return "+" + n + " " + r;
      }
      const a = i.formats;
      for (let e = 0; e < a.length; e++) {
        const t = a[e].testAndFormat(r);
        if (t != null && t !== "") {
          return "+" + n + " " + t;
        }
      }
      return "+" + n + " " + r;
    }(e);
    l.set(e, t);
  }
  return t;
}
const _ = /^\+*[\d ()]+$/;