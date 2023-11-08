var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendRequestPhoneNumber = function () {
  return g.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/632157.js");
var l = require("../app/402994.js");
var i = a(require("../app/235613.js"));
var u = require("../app/660666.js");
var s = a(require("../app/565754.js"));
var c = require("../app/373070.js");
var d = require("../app/918602.js");
var f = require("../app/487837.js");
var p = require("../app/459857.js");
var m = require("../app/669050.js");
var h = a(require("../app/556869.js"));
function g() {
  return (g = (0, r.default)(function* (e) {
    const t = e.id.toString();
    if (!e.id.isLid()) {
      __LOG__(4, undefined, new Error())`requestPhoneNumber should not be called for non lid chat ${t}`;
      throw (0, h.default)("requestPhoneNumber should not be called for non lid chat");
    }
    const n = e.contact;
    if ((0, u.getIsUser)(n) && n.isContactBlocked) {
      throw new i.default("request phone number for a blocked contact", n);
    }
    const a = (0, p.getMaybeMeLid)();
    if (a == null) {
      return;
    }
    const r = new s.default({
      id: yield s.default.newId(),
      remote: e.id,
      fromMe: true
    });
    const g = {
      type: c.MSG_TYPE.REQUEST_PHONE_NUMBER,
      ack: l.ACK.CLOCK,
      from: a,
      to: e.id,
      id: r,
      local: true,
      isNewMsg: true,
      self: "out",
      t: (0, o.unixTime)()
    };
    yield (0, f.updateLidMetadataJob)([{
      lid: (0, m.toUserWid)(e.id),
      data: {
        shareOwnPn: n.shareOwnPn,
        requestedPnTimestamp: (0, o.unixTime)()
      }
    }]);
    yield (0, d.addAndSendMsgToChat)(e, g)[1];
  })).apply(this, arguments);
}