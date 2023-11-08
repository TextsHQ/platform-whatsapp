var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    messageProtobuf: t,
    baseMessage: n,
    msgContext: r
  } = e;
  const {
    protocolMessage: p
  } = t;
  if (p == null || (p == null ? undefined : p.type) !== d.Message$ProtocolMessage$Type.MESSAGE_EDIT) {
    return;
  }
  if (r === "relay") {
    return;
  }
  try {
    if (!(0, u.receiveTextEditEnabled)()) {
      return {
        msgData: (0, i.default)((0, i.default)({}, n), {}, {
          type: c.MSG_TYPE.UNKNOWN,
          subtype: "message_edit",
          futureproofType: c.MSG_TYPE.PROTOCOL,
          futureproofSubtype: "message_edit"
        }),
        contextInfo: null
      };
    }
    const e = (0, i.default)((0, i.default)({}, n), {}, {
      latestEditSenderTimestampMs: (0, a.maybeNumberOrThrowIfTooLarge)(p.timestampMs),
      latestEditMsgKey: n.id
    });
    Object.assign(e, (0, s.parseMsgProto)((0, o.default)(p.editedMessage, "protocolMessage.editedMessage"), e));
    e.id = (0, l.protobufToMsgKey)((0, o.default)(p.key, "protocolMessage.key"));
    return {
      msgData: e,
      contextInfo: null
    };
  } catch (e) {
    __LOG__(3, undefined, undefined, true, ["messaging"])`parseHistorySyncEditedMessageProto: error:${e == null ? undefined : e.name}, stack: ${e == null ? undefined : e.stack}`;
    SEND_LOGS("parseHistorySyncEditedMessageProto: EditParseError", 1, "messaging");
    throw e;
  }
};
var i = r(require("../vendor/81109.js"));
var a = require("./229079.js");
var o = r(require("./670983.js"));
var s = require("./740293.js");
var l = require("./974637.js");
var u = require("./483460.js");
var c = require("./373070.js");
var d = require("./533494.js");