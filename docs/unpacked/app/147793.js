Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hydrateWids = function e(t) {
  if (Array.isArray(t)) {
    return t.map((t, n) => e((0, i.widReviver)(n, t, r.isWidlike, r.createWidFromWidLike)));
  }
  if (t && typeof t == "object") {
    const n = Object.keys(t);
    for (let a = 0; a < n.length; a++) {
      const o = n[a];
      t[o] = e((0, i.widReviver)(o, t[o], r.isWidlike, r.createWidFromWidLike));
    }
    return t;
  }
  return t;
};
var r = require("./669050.js");
var i = require("./933173.js");