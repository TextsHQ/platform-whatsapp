Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ABPropConfigCodeToName = undefined;
exports.bulkCreateOrReplaceABPropConfigs = function (e) {
  let t = false;
  e.forEach(e => {
    s.set(e.configCode, e);
    if (e.hasAccessed === true) {
      a.accessedConfigs.add(e.configCode);
      if (e.configExpoKey != null) {
        a.exposureKeys.add(e.configExpoKey);
        t = true;
      }
    }
  });
  if (t) {
    (0, a.updateGlobalExpoKey)();
  }
  l = true;
};
exports.clearABPropConfigs = function () {
  s.clear();
  a.accessedConfigs.clear();
  a.exposureKeys.clear();
  l = false;
};
exports.getAllABPropConfigs = function () {
  return Array.from(s.values());
};
exports.initializeABPropsCache = function () {
  (0, r.setGetABPropConfigValueImpl)(c);
};
var r = require("./287461.js");
var i = require("./94728.js");
var a = require("./744655.js");
var o = require("./846087.js");
require("./755985.js");
const s = new Map();
let l = false;
const u = {};
function c(e) {
  const t = i.ABPropConfigs[e];
  const [n, u, c, d] = t;
  const p = c;
  if (l) {
    return function (e) {
      if (s.get(e) && !a.accessedConfigs.has(e)) {
        var t;
        const n = (t = s.get(e)) === null || t === undefined ? undefined : t.configExpoKey;
        if (!(n == null || a.exposureKeys.has(n))) {
          a.exposureKeys.add(n);
          (0, a.updateGlobalExpoKey)();
        }
        a.accessedConfigs.add(e);
        (0, o.setConfigAccessed)(e);
      }
      const n = s.get(e);
      if (n == null) {
        return undefined;
      } else {
        return n.configValue;
      }
    }(n);
  } else {
    if (!r.usedBeforeInitializationConfigs.includes(e)) {
      __LOG__(3)`[ABProps] configs need to be initialized before its first access, config name: ${e}`;
    }
    return p;
  }
}
exports.ABPropConfigCodeToName = u;
Object.keys(i.ABPropConfigs).forEach(e => {
  const [t] = i.ABPropConfigs[e];
  u[t] = e;
});
Object.freeze(u);