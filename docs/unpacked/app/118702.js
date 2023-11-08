var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  try {
    const t = e != null && e !== "" ? JSON.parse(e) : a.default;
    const n = {};
    o(t, n, "", "");
    return n;
  } catch (e) {
    return null;
  }
};
var i = require("./724976.js");
var a = r(require("./355631.js"));
function o(e, t, n, r) {
  let a = e;
  if (Array.isArray(a) || (0, i.isString)(a)) {
    if ((0, i.isString)(a)) {
      a = [a];
    }
    for (let e = 0; e < a.length; e++) {
      const o = a[e];
      if ((0, i.isString)(o)) {
        t[o] = r + n;
      }
    }
  } else if (typeof a == "object") {
    for (const e in a) {
      o(a[e], t, e, r + n);
    }
  }
}