var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataSharingOptInCoolOffModel = undefined;
var i = require("./632157.js");
var a = require("./72696.js");
var o = require("./94872.js");
var s = r(require("./53575.js"));
let l = null;
const u = {
  isCoolOffActive: () => {
    const e = (0, a.smbDataSharingOptInCoolOffSeconds)();
    if (l == null) {
      const e = s.default.get(o.KEYS.CTWA_DATA_SHARING_COOL_OFF);
      l = (0, i.castToUnixTime)(typeof e == "number" ? e : 0);
    }
    return (0, i.isInFuture)((0, i.futureUnixTime)(e, l));
  },
  startCoolOff: () => {
    l = (0, i.unixTime)();
    s.default.set(o.KEYS.CTWA_DATA_SHARING_COOL_OFF, l);
  },
  resetCoolOffStartTimestamp: () => {}
};
exports.DataSharingOptInCoolOffModel = u;