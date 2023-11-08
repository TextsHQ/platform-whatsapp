var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./17542.js"));
class a extends i.default {}
function o(e) {
  return e.filter(Boolean).join("");
}
exports.default = a;
a.onDelimiter = () => {};
a.onMutator = (e, t, n) => {
  if (e.unformatDecorations != null) {
    const {
      pre: r,
      post: i
    } = e.unformatDecorations;
    return o([typeof r == "function" ? r(n) : r, ...t, i]);
  }
  return o(t);
};
a.onRoot = e => o(e);
a.onText = e => e;