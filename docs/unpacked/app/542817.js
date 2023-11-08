Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./561913.js");
const i = {
  [r.WEBC_SCENARIO_TYPE.IDLE]: 0,
  [r.WEBC_SCENARIO_TYPE.INITIAL_PAIRING]: 300000,
  [r.WEBC_SCENARIO_TYPE.OFFLINE_RESUME]: 120000
};
let a;
let o;
var s = {
  isLogoutInProgress: false,
  takeOver: false,
  getCurrentScenario() {
    var e;
    if ((e = o) !== null && e !== undefined) {
      return e;
    } else {
      return r.WEBC_SCENARIO_TYPE.IDLE;
    }
  },
  initOrUpdateTracking(e) {
    if (a) {
      self.clearTimeout(a);
    }
    o = e;
    if (o !== r.WEBC_SCENARIO_TYPE.IDLE) {
      a = self.setTimeout(() => {
        o = r.WEBC_SCENARIO_TYPE.IDLE;
        a = null;
      }, i[e]);
    }
  }
};
exports.default = s;