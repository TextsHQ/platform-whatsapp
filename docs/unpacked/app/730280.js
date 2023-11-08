Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapOrphansToProviders = function (e) {
  const t = new Map();
  for (const i of e) {
    var n;
    const e = (0, r.getProviderForAddOnType)(i.type);
    if (!e) {
      continue;
    }
    const a = (n = t.get(e)) !== null && n !== undefined ? n : [];
    a.push(i);
    t.set(e, a);
  }
  return t;
};
var r = require("./944749.js");