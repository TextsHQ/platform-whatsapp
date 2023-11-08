var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateABPropsFromStorage = function () {
  return l.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./238196.js");
var o = require("./94728.js");
var s = require("./846087.js");
require("./757453.js");
function l() {
  return (l = (0, i.default)(function* () {
    try {
      const e = (yield (0, s.getABPropConfigs)()).map(e => {
        const t = a.ABPropConfigCodeToName[Number(e.configCode)];
        if (t != null) {
          const n = o.ABPropConfigs[t];
          const [r, i, a, l] = n;
          const u = a;
          let c;
          return {
            configCode: r,
            configValue: (0, s.parseConfigValue)(e.configValue, i, u),
            configExpoKey: e.configExpoKey,
            hasAccessed: e.hasAccessed,
            overriddenConfigValue: c
          };
        }
        __LOG__(3)`[ABProps] ABProp (code: ${e.configCode}) exists in storage but no longer available for this client version`;
      }).filter(e => !!e);
      (0, a.bulkCreateOrReplaceABPropConfigs)(e);
    } catch (e) {
      __LOG__(4, true, new Error(), true)`[ABProps] Failed to update ABProps configs cache from storage: ${e}`;
      SEND_LOGS("[ABProps] Failed to update ABProps configs cache from storage: " + e);
    }
  })).apply(this, arguments);
}