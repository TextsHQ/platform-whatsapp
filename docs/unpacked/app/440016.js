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
  if (r !== "relay") {
    return;
  }
  try {
    var f;
    const e = (f = function (e, t) {
      var n;
      var r;
      if (!Boolean((n = t.editedMessage) === null || n === undefined ? undefined : n.conversation) && !Boolean((r = t.editedMessage) === null || r === undefined ? undefined : r.extendedTextMessage)) {
        return null;
      }
      if (!(0, u.receiveTextEditEnabled)()) {
        return {
          msgData: (0, i.default)((0, i.default)({}, e), {}, {
            type: c.MSG_TYPE.UNKNOWN,
            subtype: "message_edit",
            editMsgType: c.MSG_TYPE.CHAT,
            futureproofType: c.MSG_TYPE.PROTOCOL,
            futureproofSubtype: "message_edit"
          }),
          contextInfo: null
        };
      }
      const d = (0, l.getMsgKey)(t.key, e);
      return {
        msgData: (0, i.default)((0, i.default)({}, (0, s.parseMsgProto)((0, o.default)(t.editedMessage, "protocolMessage.editedMessage"), e)), {}, {
          type: c.MSG_TYPE.PROTOCOL,
          subtype: "message_edit",
          editMsgType: c.MSG_TYPE.CHAT,
          latestEditSenderTimestampMs: (0, a.maybeNumberOrThrowIfTooLarge)(t.timestampMs),
          latestEditMsgKey: e.id,
          protocolMessageKey: d
        }),
        contextInfo: null
      };
    }(n, p)) !== null && f !== undefined ? f : function (e, t) {
      var n;
      var r;
      var o;
      var s;
      let d;
      let p;
      let f;
      if ((n = t.editedMessage) === null || n === undefined ? undefined : n.imageMessage) {
        d = c.MSG_TYPE.IMAGE;
        p = t.editedMessage.imageMessage.caption;
        f = t.editedMessage.imageMessage.contextInfo;
      } else if ((r = t.editedMessage) === null || r === undefined ? undefined : r.videoMessage) {
        d = c.MSG_TYPE.VIDEO;
        p = t.editedMessage.videoMessage.caption;
        f = t.editedMessage.videoMessage.contextInfo;
      } else if ((o = t.editedMessage) === null || o === undefined ? undefined : o.documentMessage) {
        d = c.MSG_TYPE.DOCUMENT;
        p = t.editedMessage.documentMessage.caption;
        f = t.editedMessage.documentMessage.contextInfo;
      } else if ((s = t.editedMessage) === null || s === undefined ? undefined : s.documentWithCaptionMessage) {
        var _;
        var g;
        var m;
        var h;
        var y;
        var E;
        d = c.MSG_TYPE.DOCUMENT;
        p = (_ = t.editedMessage.documentWithCaptionMessage) === null || _ === undefined || (g = _.message) === null || g === undefined || (m = g.documentMessage) === null || m === undefined ? undefined : m.caption;
        f = (h = t.editedMessage.documentWithCaptionMessage) === null || h === undefined || (y = h.message) === null || y === undefined || (E = y.documentMessage) === null || E === undefined ? undefined : E.contextInfo;
      }
      if (!d || p === "" || p == null) {
        return null;
      }
      if (!(0, u.receiveCaptionEditEnabled)()) {
        return {
          msgData: (0, i.default)((0, i.default)({}, e), {}, {
            type: c.MSG_TYPE.UNKNOWN,
            subtype: "message_edit",
            editMsgType: d,
            futureproofType: c.MSG_TYPE.PROTOCOL,
            futureproofSubtype: "message_edit"
          }),
          contextInfo: null
        };
      }
      return {
        msgData: (0, i.default)((0, i.default)({}, e), {}, {
          type: c.MSG_TYPE.PROTOCOL,
          subtype: "message_edit",
          editMsgType: d,
          caption: p,
          latestEditSenderTimestampMs: (0, a.maybeNumberOrThrowIfTooLarge)(t.timestampMs),
          latestEditMsgKey: e.id,
          protocolMessageKey: (0, l.getMsgKey)(t.key, e)
        }),
        contextInfo: f
      };
    }(n, p);
    return e || null;
  } catch (e) {
    __LOG__(3, undefined, undefined, true, ["messaging"])`parseProtocolMessageEditProto: error:${e == null ? undefined : e.name}, stack: ${e == null ? undefined : e.stack}`;
    SEND_LOGS("parseProtocolMessageEditProto: EditParseError", 1, "messaging");
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