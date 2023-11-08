var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendSharePhoneNumber = function () {
  return h.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/632157.js");
var l = a(require("../app/235613.js"));
var i = require("../app/660666.js");
var u = a(require("../app/565754.js"));
var s = require("../app/373070.js");
var c = require("../app/918602.js");
var d = require("../app/487837.js");
var f = require("../app/459857.js");
var p = require("../app/669050.js");
var m = a(require("../app/556869.js"));
function h() {
  return (h = (0, r.default)(function* (e) {
    const t = e.id.toString();
    if (!e.id.isLid()) {
      __LOG__(4, undefined, new Error())`sendSharePhoneNumber should not be called for non lid chat ${t}`;
      throw (0, m.default)("sendSharePhoneNumber should not be called for non lid chat");
    }
    const n = e.contact;
    if ((0, i.getIsUser)(n) && n.isContactBlocked) {
      throw new l.default("share phone number for a blocked contact", n);
    }
    const a = (0, f.getMaybeMeLid)();
    if (a == null) {
      return;
    }
    if (n.shareOwnPn !== true) {
      yield (0, d.updateLidMetadataJob)([{
        lid: (0, p.toUserWid)(e.id),
        data: {
          shareOwnPn: true
        }
      }]);
    }
    const r = {
      id: new u.default({
        id: yield u.default.newId(),
        remote: e.id,
        fromMe: true
      }),
      from: a,
      to: e.id,
      t: (0, o.unixTime)(),
      type: s.MSG_TYPE.PROTOCOL,
      subtype: "share_phone_number",
      local: true,
      isNewMsg: true,
      self: "out"
    };
    yield (0, c.addAndSendMsgToChat)(e, r)[1];
    __LOG__(2)`chat.sendSharePhoneNumber updated chatId=${t}`;
  })).apply(this, arguments);
}