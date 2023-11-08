var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapMsgToEditProtocolMsg = function (e, t) {
  const n = e.id.clone();
  const r = new a.default({
    remote: e.id.remote,
    fromMe: e.id.fromMe,
    id: a.default.newId_DEPRECATED()
  });
  return (0, i.default)((0, i.default)({}, e), {}, {
    id: r,
    type: o.MSG_TYPE.PROTOCOL,
    subtype: "message_edit",
    editMsgType: e.type,
    protocolMessageKey: n,
    latestEditMsgKey: r,
    latestEditSenderTimestampMs: t.latestEditSenderTimestampMs
  });
};
exports.mapMsgToEditProtocolMsgLegacy = function (e) {
  return (0, i.default)((0, i.default)({}, e), {}, {
    type: o.MSG_TYPE.PROTOCOL,
    subtype: "message_edit",
    protocolMessageKey: e.id,
    latestEditMsgKey: e.id,
    latestEditSenderTimestampMs: e.t
  });
};
var i = r(require("../vendor/81109.js"));
var a = r(require("./565754.js"));
var o = require("./373070.js");