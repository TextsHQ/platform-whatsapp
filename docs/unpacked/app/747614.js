Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XmlNode = undefined;
exports.attrsToString = a;
exports.uint8ArrayToDebugString = o;
var r = require("./390934.js");
const i = {};
function a(e) {
  const t = Object.keys(e);
  let n = "";
  for (let r = 0; r < t.length; r++) {
    const i = t[r];
    n += ` ${i}="${e[i].toString()}"`;
  }
  return n;
}
function o(e) {
  let t = "";
  t = e.length === 0 ? "<!-- empty binary -->" : e.length < 50 ? (0, r.bytesToDebugString)(e) : `\x3c!-- ${e.length} bytes --\x3e`;
  return t;
}
exports.XmlNode = class {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : i;
    let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    this.tag = e;
    this.attrs = t;
    this.content = n;
  }
  toString() {
    let e = "<" + this.tag;
    e += a(this.attrs);
    const t = this.content;
    if (Array.isArray(t)) {
      e += `>${t.map(String).join("")}</${this.tag}>`;
    } else if (t instanceof Uint8Array) {
      e += `>${o(t)}</${this.tag}>`;
    } else {
      e += t != null ? `>${String(t)}</${this.tag}>` : " />";
    }
    return e;
  }
};