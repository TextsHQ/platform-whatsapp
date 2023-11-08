var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encryptAndSendKeyMsg = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./707065.js");
var s = require("./21838.js");
var l = r(require("./797137.js"));
var u = require("./974382.js");
var c = require("./604538.js");
function d() {
  return (d = (0, i.default)(function* (e, t) {
    yield (0, l.default)();
    __LOG__(2, undefined, undefined, undefined, ["messaging"])`encryptAndSendKeyMsg: sending ${e.id.toString()}`;
    const n = e.to;
    const r = (0, s.createPeerMsgProtobuf)(e);
    const i = yield (0, u.createUserDeviceMsgStanza)(n, null, {
      type: c.SendMessageRecordType.Message,
      data: e
    }, r, {
      type: u.MsgType.AppStateSync,
      pushPriority: t
    });
    return (0, a.deprecatedSendStanzaAndWaitForAck)(i, (0, o.toCoreAckTemplate)({
      id: e.id.id,
      class: "message",
      from: n,
      participant: null
    }));
  })).apply(this, arguments);
}