var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observe = function (e, t) {
  const n = function () {
    if (i == null) {
      i = new o.default(e => {
        for (const t of e) {
          const e = u().get(t.target);
          const n = t.contentRect;
          const {
            x: a,
            y: r,
            width: o,
            height: l,
            top: i,
            left: s,
            bottom: c,
            right: d
          } = n;
          if (e != null) {
            e({
              x: a,
              y: r,
              width: o,
              height: l,
              top: i,
              left: s,
              bottom: c,
              right: d
            });
          }
        }
      });
    }
    return i;
  }();
  const a = u();
  if (a.has(e)) {
    throw (0, r.default)("You can't observe the same element twice.");
  }
  a.set(e, t);
  n.observe(e);
  return () => {
    n.unobserve(e);
    a.delete(e);
  };
};
var r = a(require("../app/556869.js"));
var o = a(require("../vendors-main/391033.js"));
let l;
let i;
function u() {
  if (l == null) {
    l = new WeakMap();
  }
  return l;
}