var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFanOutList = function () {
  return l.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./275909.js");
var o = require("./459857.js");
var s = require("./669050.js");
function l() {
  return (l = (0, i.default)(function* (e) {
    let {
      wids: t,
      includeHostedDevice: n
    } = e;
    const r = yield (0, a.getDeviceIds)(t);
    const i = new Map();
    r.forEach((e, n) => {
      if (e) {
        const {
          devices: t
        } = e;
        t.forEach(t => {
          if (t.id === 99 || t.isHosted === true) {
            return;
          }
          const n = (0, s.createDeviceWidFromDeviceListPk)(e.id, t.id, t.isHosted);
          if (!(0, o.isMeDevice)(n)) {
            i.set(n.toString(), n);
          }
        });
      } else {
        __LOG__(2, undefined, undefined, undefined, ["messaging"])`getFanOutList: no device is found, just send to the primary device`;
        const e = (0, s.toUserWid)(t[n]);
        if (!(0, o.isMeAccount)(e)) {
          i.set(e.toString(), e);
        }
      }
    });
    return Array.from(i.values());
  })).apply(this, arguments);
}