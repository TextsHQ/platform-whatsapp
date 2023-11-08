var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phashV1 = function () {
  return l.apply(this, arguments);
};
exports.phashV2 = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./417405.js");
var o = require("./517301.js");
var s = require("./669050.js");
function l() {
  return (l = (0, i.default)(function* (e) {
    const t = e.map(e => (0, s.toUserWid)(e).toString({
      legacy: true
    })).sort().join("");
    const n = [];
    for (let e = 0; e < t.length; e++) {
      n.push(t.charCodeAt(e));
    }
    const r = new Uint8Array(n);
    const i = yield self.crypto.subtle.digest({
      name: "SHA-1"
    }, r);
    return `1:${(0, a.encodeB64)(i.slice(0, 6))}`;
  })).apply(this, arguments);
}
function u() {
  return (u = (0, i.default)(function* (e) {
    const t = e.map(e => e.toString({
      legacy: true,
      formatFull: true
    })).sort().join("");
    const n = [];
    for (let e = 0; e < t.length; e++) {
      n.push(t.charCodeAt(e));
    }
    const r = new Uint8Array(n);
    const i = yield (0, o.sha256)(r);
    return `2:${(0, a.encodeB64)(i.slice(0, 6))}`;
  })).apply(this, arguments);
}