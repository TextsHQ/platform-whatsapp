var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./17542.js"));
var a = r(require("./216593.js"));
var o = require("../vendor/667294.js");
class s extends i.default {}
function l(e) {
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (r === undefined) {
      continue;
    }
    if (typeof r == "string") {
      t.push(r);
      continue;
    }
    const i = `jsx-child-${n}`;
    t.push((0, o.cloneElement)(r, {
      key: i
    }));
  }
  return t;
}
exports.default = s;
s.onText = a.default;
s.onDelimiter = () => {};
s.onRoot = e => l(e);
s.onMutator = (e, t, n, r) => e.jsx(l(t), n, r);