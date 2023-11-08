Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseABProps = function (e) {
  const t = new Map();
  e.forEach(e => {
    const {
      configCode: n,
      configValue: r,
      configExpoKey: i
    } = e;
    t.set(n, {
      configValue: r,
      configExpoKey: i
    });
  });
  const n = new Map();
  Object.keys(r.ABPropConfigs).map(e => {
    const i = r.ABPropConfigs[e][0];
    const a = t.get(i);
    const o = a == null ? undefined : a.configValue;
    const s = a == null ? undefined : a.configExpoKey;
    n.set(i, {
      configValue: o,
      configExpoKey: s == null ? null : s.toString()
    });
  });
  return n;
};
var r = require("./94728.js");