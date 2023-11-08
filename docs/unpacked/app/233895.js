Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Version = exports.SANITIZED_VERSION_STR = undefined;
exports.sanitizeVersionStr = s;
var r = require("./477689.js");
var i = require("./508247.js");
class a extends (0, r.customError)("InvalidVersion") {}
class o {
  constructor(e) {
    const t = e.split(".");
    if (t.length !== 3) {
      throw new a("Version format does not contain 3 numbers.");
    }
    this.primary = Number.parseInt(t[0], 10);
    this.secondary = Number.parseInt(t[1], 10);
    this.tertiary = Number.parseInt(t[2], 10);
    if (Number.isNaN(this.primary) || Number.isNaN(this.secondary) || Number.isNaN(this.tertiary)) {
      throw new a("Version contains a non-parseable string.");
    }
  }
  lt(e) {
    let t = e;
    if (typeof t == "string") {
      t = new o(t);
    }
    return this.primary < t.primary || this.primary === t.primary && this.secondary < t.secondary || this.primary === t.primary && this.secondary === t.secondary && this.tertiary < t.tertiary;
  }
  equals(e) {
    let t = e;
    return !!t && (typeof t == "string" && (t = new o(t)), this.primary === t.primary && this.secondary === t.secondary && this.tertiary === t.tertiary);
  }
  toString() {
    return `${this.primary}.${this.secondary}.${this.tertiary}`;
  }
}
function s(e) {
  return e.replace(/\.[di]$/, "");
}
exports.Version = o;
const l = s(i.VERSION_STR);
exports.SANITIZED_VERSION_STR = l;