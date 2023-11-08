var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t, n) {
  const o = n != null ? n : n => {
    var o;
    return (e == null || (o = e.getter) === null || o === undefined ? undefined : o.call(e, n)) === t;
  };
  const s = (0, l.useRef)(null);
  const [u, d] = (0, l.useState)(false);
  const c = (e == null ? undefined : e.value) != null && o(e.value);
  if (u !== c) {
    d(c);
  }
  (0, i.useListener)(e, t, (e, t) => {
    if (e === "focus") {
      const e = s.current;
      if (e) {
        a.default.focus(e);
        if (t) {
          (0, r.scrollIntoViewIfNeeded)(e);
        }
      }
    }
    d(!!e);
  });
  return [s, u];
};
var r = require("./465113.js");
var a = o(require("../app/335540.js"));
var l = require("../vendor/667294.js");
var i = require("../app/808446.js");