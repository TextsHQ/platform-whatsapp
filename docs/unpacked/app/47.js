Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOutgoingMsgModelProtobuf = exports.createOutgoingMessageProtobuf = exports.createOutgoingAddonMessageProtobuf = undefined;
var r = require("./287461.js");
var i = require("./317851.js");
var a = require("./21838.js");
var o = require("./974637.js");
var s = require("./163755.js");
var l = require("./177205.js");
var u = require("./263674.js");
var c = require("./373070.js");
var d = require("./619350.js");
var p = require("./604538.js");
var f = require("./943037.js");
const _ = new Set([c.MSG_TYPE.REACTION, c.MSG_TYPE.POLL_CREATION, c.MSG_TYPE.POLL_UPDATE, c.MSG_TYPE.PIN_MESSAGE, c.MSG_TYPE.COMMENT, c.MSG_TYPE.IMAGE, c.MSG_TYPE.VIDEO, c.MSG_TYPE.STICKER, c.MSG_TYPE.AUDIO, c.MSG_TYPE.PTT, c.MSG_TYPE.DOCUMENT, c.MSG_TYPE.MULTI_VCARD]);
const g = (e, t) => {
  try {
    const n = (0, o.getMutableMessageProtobuf)(t);
    (0, f.verifyProtobufMessageObjectKeys)(n);
    if (_.has(e.data.type) || (0, i.isUnifiedInfraEnabledForType)(e.data.type)) {
      (0, u.parseProtobuf)({
        msgContext: "outgoing",
        messageProtobuf: n,
        baseMessage: e.type === p.SendMessageRecordType.Message ? (0, d.msgToBaseMsgInfo)(e.data) : (0, d.msgDataToBaseMsgInfo)(e.data)
      });
    }
  } catch (t) {
    if (t instanceof l.MessageValidationError) {
      __LOG__(3, undefined, undefined, undefined, ["messaging"])`generate proto: msgId:${e.data.id} type:${e.data.type} error:${t.stack}`;
      __LOG__(3, undefined, undefined, true, ["messaging"])`generate proto: type:${e.data.type} error:${t}`;
      SEND_LOGS(`outgoingMsg: ${t.name}`, 1, "messaging");
    }
    throw t;
  }
};
const m = "https://web.whatsapp.net";
const h = e => {
  let t;
  if (e.type === c.MSG_TYPE.STICKER && e.deprecatedMms3Url == null) {
    e.deprecatedMms3Url = m;
  }
  if ((0, s.getAsMms)(e)) {
    const n = e.isUnsentPhoneMsg();
    t = n ? {
      type: e.type
    } : e.avParams();
    if (!(e.type !== c.MSG_TYPE.STICKER || n || t.url != null)) {
      t.url = m;
    }
  }
  return (0, a.createMsgProtobuf)(e, t || {});
};
const y = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  const n = e.type === p.SendMessageRecordType.Message ? h(e.data) : (0, a.createAddonProtobuf)(e.data);
  if ((0, l.isMessageDropValidationEnabled)("outgoing")) {
    try {
      g(e, n);
    } catch (n) {
      if ((0, r.getABPropConfigValue)("web_retry_building_e2e_proto_on_error") && !t) {
        return y(e, true);
      }
      throw n;
    }
  }
  return n;
};
exports.createOutgoingMessageProtobuf = y;
exports.createOutgoingMsgModelProtobuf = e => y({
  type: p.SendMessageRecordType.Message,
  data: e
});
exports.createOutgoingAddonMessageProtobuf = e => y({
  type: p.SendMessageRecordType.Addon,
  data: e
});