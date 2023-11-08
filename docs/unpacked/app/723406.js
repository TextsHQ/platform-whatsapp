var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendRetry = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./707065.js");
var s = require("./47.js");
var l = require("./974382.js");
var u = r(require("../vendor/441143.js"));
function c() {
  return (c = (0, i.default)(function* (e, t, n, r, i) {
    const c = r.data.id.id;
    __LOG__(2, undefined, undefined, undefined, ["messaging"])`sendRetry: id ${c} to ${e.toString()}, requester: ${(t || e).toString()}, count: ${i}`;
    const d = (0, s.createOutgoingMessageProtobuf)(r);
    const p = {
      type: l.MsgType.Retry,
      retryCount: i
    };
    let f;
    if (e.isUser()) {
      f = yield (0, l.createUserDeviceMsgStanza)(e, n, r, d, p);
    } else {
      (0, u.default)(t != null, "[messaging] sendRetry: no participant for group retry message");
      f = yield (0, l.createGroupDeviceMsgStanza)(e, t, r, d, p);
    }
    __LOG__(2, undefined, undefined, undefined, ["messaging"])`sendRetry: sending ${c} to ${e.toString()}`;
    return (0, a.deprecatedSendStanzaAndWaitForAck)(f, (0, o.toCoreAckTemplate)({
      id: c,
      class: "message",
      from: e,
      participant: t
    }));
  })).apply(this, arguments);
}