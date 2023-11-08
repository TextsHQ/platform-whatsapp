var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleQPSurfacesNotification = function () {
  return l.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./72696.js");
var o = require("./228981.js");
var s = require("./847602.js");
function l() {
  return (l = (0, i.default)(function* (e) {
    const {
      surfaces: t,
      makeAck: n,
      ts: r
    } = (0, s.parseQPSurfacesNotification)(e);
    const i = n();
    if ((0, a.qpSDKProcessingEnabled)()) {
      yield (0, o.updateQPSurfacesFromNotification)(t, r);
      return i;
    } else {
      return i;
    }
  })).apply(this, arguments);
}