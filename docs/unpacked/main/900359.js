var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterPaginate = function (e, t, n) {
  if (n == null) {
    const n = e.filter(t);
    return {
      results: n,
      pagination: {
        page: 0,
        pageLength: n.length,
        hasMoreResults: false
      }
    };
  }
  const a = [];
  let r = null;
  const {
    page: o = 0,
    pageLength: l = e.length
  } = n;
  const i = (o + 1) * l + 1;
  for (let n = 0; n < e.length && a.length !== i; n++) {
    const r = e[n];
    if (t(r)) {
      a.push(r);
    }
  }
  r = a.length === i;
  return {
    results: a.slice(o * l, o * l + l),
    pagination: {
      page: o,
      pageLength: l,
      hasMoreResults: r
    }
  };
};
exports.normalizeString = function (e) {
  return r.default.accentFold(e.trim().toLowerCase());
};
var r = a(require("../app/932325.js"));