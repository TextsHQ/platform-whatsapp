var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t, n) {
  return e.onRoot(a(e, t.children, n), n);
};
var i = r(require("./556869.js"));
function a(e, t, n) {
  return t.reduce((t, r) => {
    t.push(function (e, t, n) {
      if (t.type) {
        const {
          value: r
        } = t;
        switch (t.type) {
          case "text":
            return e.onText(r, n);
          case "delimiter":
            return e.onDelimiter(r, n);
          default:
            throw (0, i.default)("Invalid node type");
        }
      }
      return e.onMutator(t.mutator, a(e, t.children, n), t.match[5], t.opts, n);
    }(e, r, n));
    return t;
  }, []);
}