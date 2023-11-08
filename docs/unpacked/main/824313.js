Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eagerlyEstablishE2EESession = function (e) {
  const t = e.id.toString();
  let n = r.get(t);
  if (!n) {
    n = (0, a.eagerlyEstablishE2EESession)(e);
    r.set(t, n);
  }
  return n;
};
var a = require("./883189.js");
const r = new Map();