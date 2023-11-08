var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("./670983.js"));
var o = require("./38069.js");
var s = require("./94872.js");
var l = require("./459857.js");
var u = require("./574819.js");
function c() {
  return (c = (0, i.default)(function* () {
    const e = (0, a.default)((0, l.getMaybeMeLid)(), "getMaybeMeLid()");
    const t = (0, l.getMeDisplayName)();
    const n = [{
      key: "deviceJid",
      value: (0, u.widToDeviceJid)((0, l.assertGetMe)())
    }, {
      key: "lidDeviceJid",
      value: e.toString()
    }, {
      key: s.KEYS.ME_DISPLAY_NAME,
      value: t
    }];
    yield (0, o.updateLocalStorage)(n);
  })).apply(this, arguments);
}
(0, r(require("../vendor/441143.js")).default)(true, "only for use in worker");
var d = {
  setWorkerLocalStorage: function () {
    return c.apply(this, arguments);
  },
  clearWorkerLocalStorage: function () {
    return (0, o.clearLocalStorage)();
  }
};
exports.default = d;