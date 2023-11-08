var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIsTabActive = function () {
  return s;
};
exports.isAnotherTabActive = function () {
  return l.apply(this, arguments);
};
exports.setTabActive = function () {
  s = true;
};
var i = r(require("../vendor/348926.js"));
var a = r(require("./537152.js"));
var o = r(require("./647349.js"));
let s = false;
function l() {
  return (l = (0, i.default)(function* () {
    const e = navigator.serviceWorker;
    if (e == null ? undefined : e.controller) {
      try {
        return (yield a.default.request(e.controller, o.default.ACTIVE_TAB)).some(e => e.isActive === true);
      } catch (e) {
        __LOG__(4, undefined, new Error(), true)`error: ${e}`;
        SEND_LOGS("ACTIVE_TAB service worker call failed");
        return false;
      }
    }
    return false;
  })).apply(this, arguments);
}