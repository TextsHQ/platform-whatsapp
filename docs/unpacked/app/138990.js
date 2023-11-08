var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.graphQLRemapLocale = undefined;
var i = r(require("../vendor/968630.js"));
exports.graphQLRemapLocale = (e, t) => {
  try {
    const n = JSON.parse(t);
    if ((0, i.default)(n)) {
      return Object.keys(n).find(t => {
        const r = n[t];
        return !!Array.isArray(r) && r.includes(e);
      }) || e;
    } else {
      __LOG__(3)`Invalid json locale mapping`;
      return e;
    }
  } catch (t) {
    __LOG__(3)`Invalid json locale mapping`;
    return e;
  }
};