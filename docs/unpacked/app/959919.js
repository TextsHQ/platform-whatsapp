var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preProcessOrderEphemeralExemption = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./72696.js");
var o = require("./933915.js");
var s = require("./446153.js");
var l = require("./931342.js");
var u = require("./545741.js");
function c() {
  return (c = (0, i.default)(function* (e) {
    var t;
    var n;
    var r;
    var i;
    if (!(0, a.inOrderMessagesEphemeralExceptionEnabled)()) {
      return e;
    }
    const c = e.findIndex(e => {
      const {
        nativeFlowName: t,
        interactiveType: n,
        type: r
      } = e;
      return (0, l.isMessageTypeExemptedFromDisappearing)(r, n, t);
    });
    if (c === -1 || ((t = e.at(c)) === null || t === undefined || (n = t.id) === null || n === undefined ? undefined : n.remote) == null) {
      return e;
    }
    const d = (r = e.at(c)) === null || r === undefined || (i = r.id) === null || i === undefined ? undefined : i.remote;
    if (d == null) {
      return e;
    }
    const p = yield (0, o.getChatEphemeralExemptionDataFromChat)(d);
    if (p != null && (0, l.shouldShowOrderExemptionSystemMessage)(p)) {
      var f;
      (0, o.persistsEphemeralDisplayedExemptions)(d, (f = p.ephemeralDuration) !== null && f !== undefined ? f : 0, s.EphemeralExemptionType.ORDERS_AND_PAYMENTS);
      return [...e.slice(0, c), (0, u.getOrderEphemeralExemptionSystemMsg)(d), ...e.slice(c, e.length)];
    }
    var _;
    if (p != null && (0, l.shouldUnsetChatEphemeralDisplayedExemption)(p)) {
      (0, o.persistsEphemeralDisplayedExemptions)(d, (_ = p.ephemeralDuration) !== null && _ !== undefined ? _ : 0, s.EphemeralExemptionType.UNSET);
    }
    return e;
  })).apply(this, arguments);
}