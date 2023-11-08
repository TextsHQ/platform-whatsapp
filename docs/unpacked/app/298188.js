var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = require("./94872.js");
var a = r(require("./53575.js"));
let o = null;
var s = {
  isUpsellEnabled: () => {
    if (o == null) {
      const e = a.default.get(i.KEYS.CTWA_DATA_SHARING_UPSELL_ACTIVE);
      o = e === true;
    }
    return o;
  },
  enableUpsell: () => {
    if (o !== true) {
      o = true;
      a.default.set(i.KEYS.CTWA_DATA_SHARING_UPSELL_ACTIVE, true);
    }
  }
};
exports.default = s;