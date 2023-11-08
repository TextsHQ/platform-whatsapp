Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getValidCollectionMethod = exports.EMPTY_AGGREGATORS = exports.CollectionMethodKind = undefined;
exports.groupMethodsByKind = function (e) {
  var t;
  let n;
  for (const t of Object.keys(e)) {
    const a = i(e[t]);
    if (a) {
      switch (a.kind) {
        case r.Aggregate:
          if (!n) {
            n = [];
          }
          n.push(a);
      }
    }
  }
  return {
    aggregate: (t = n) !== null && t !== undefined ? t : a
  };
};
const r = require("../vendor/76672.js").Mirrored(["Aggregate"]);
exports.CollectionMethodKind = r;
const i = e => e != null && typeof e == "function" && "kind" in e && r.isValid(e.kind) ? e : null;
exports.getValidCollectionMethod = i;
const a = [];
exports.EMPTY_AGGREGATORS = a;