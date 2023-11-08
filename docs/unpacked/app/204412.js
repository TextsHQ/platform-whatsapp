Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postMdDeviceSyncAckMetric = function (e, t, n) {
  const o = new i.MdDeviceSyncAckWamEvent({
    revoke: (0, a.isRevokeMsg)(t)
  });
  o.chatType = (0, r.getMessageChatTypeFromWid)(e);
  o.isLid = e.isLid();
  if (e.isGroup() && (n == null ? undefined : n.isLid) != null) {
    o.isLid = n.isLid;
  }
  if (e.isUser()) {
    o.isLid = e.isLid();
  }
  o.commit();
};
var r = require("./859458.js");
var i = require("./540919.js");
var a = require("./608182.js");