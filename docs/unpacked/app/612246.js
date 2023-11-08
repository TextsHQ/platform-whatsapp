var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseProtocolRevokeMessageProto = function (e) {
  let {
    messageProtobuf: t,
    baseMessage: n,
    editAttr: r,
    msgContext: u
  } = e;
  const {
    protocolMessage: c
  } = t;
  if (c == null) {
    return;
  }
  const {
    type: d,
    key: p
  } = c;
  if (u !== "relay" && d !== l.Message$ProtocolMessage$Type.EPHEMERAL_SETTING) {
    return;
  }
  if (d !== l.Message$ProtocolMessage$Type.REVOKE) {
    return;
  }
  try {
    return {
      msgData: (0, i.default)((0, i.default)({}, n), {}, {
        type: s.MSG_TYPE.PROTOCOL,
        subtype: r === a.EDIT_ATTR.ADMIN_REVOKE ? "admin_revoke" : "sender_revoke",
        protocolMessageKey: (0, o.getMsgKey)(p, n)
      }),
      contextInfo: null
    };
  } catch (e) {
    __LOG__(3, undefined, undefined, true, ["messaging"])`parseProtocolRevokeMessageProto: error:${e == null ? undefined : e.name}, stack: ${e == null ? undefined : e.stack}`;
    SEND_LOGS("ProtocolRevokeParseError", 1, "messaging");
    throw e;
  }
};
var i = r(require("../vendor/81109.js"));
var a = require("./402994.js");
var o = require("./974637.js");
var s = require("./373070.js");
var l = require("./533494.js");