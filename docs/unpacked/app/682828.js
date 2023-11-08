var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCollectionValues = function (e, t, n, r) {
  let l;
  let u;
  if (typeof n == "function" && Array.isArray(r)) {
    l = n;
    u = r;
  } else {
    (0, i.default)(Array.isArray(n), "useMsgValues dependencies should be an Array");
    l = e => e;
    u = n;
  }
  const [c, d] = (0, a.useState)(() => e.assertGet(t));
  const [p, f] = (0, a.useState)(false);
  const _ = () => {
    const n = e.get(t);
    if (n != null) {
      if (p || n !== c || n.id.toString() !== c.id.toString()) {
        f(false);
        d(n);
      }
    } else if (!p) {
      f(true);
    }
  };
  _();
  (0, o.useListener)(e, "add", () => {
    _();
  });
  const g = (0, a.useCallback)(e => {
    if (!p) {
      c.on("change", e);
      c.incObservers(true);
      return () => {
        c.decObservers();
        c.off("change", e);
      };
    }
  }, [c, p]);
  const m = l(c);
  return (0, s.useValues)(m, u, {
    subscribe: g
  });
};
var i = r(require("../vendor/441143.js"));
var a = require("../vendor/667294.js");
var o = require("./808446.js");
var s = require("./806123.js");