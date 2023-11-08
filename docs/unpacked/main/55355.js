var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMessageAriaLabel = function (e, t) {
  const {
    senderObj: n,
    mediaData: a
  } = (0, f.useModelValues)(e, ["senderObj", "mediaData"]);
  const [g, E, v, _, y, C, b, M, S, T, w] = (0, p.useMsgValues)(e.id, [u.getT, u.getAck, u.getIsSentByMe, o.getAsRevoked, u.getIsEdited, u.getType, u.getSubtype, u.getSender, u.getIsFromTemplate, u.getIsDynamicReplyButtonsMsg, u.getCaption]);
  const A = (0, d.useMessageAriaDescription)(e, t);
  const P = (0, o.getMaybeChat)(e.unsafe());
  const O = (0, r.elevatedPushNamesEnabled)(P);
  const {
    numberOfSenderReactions: k
  } = (0, m.default)([e.id.toString()], h);
  const D = {
    isDynamicReplyButtonsMsg: T,
    isFromTemplate: S,
    caption: w,
    mediaStage: a == null ? undefined : a.mediaStage
  };
  if (!(0, i.messageCustomAriaLabelEnabled)() || !function (e, t) {
    switch (e) {
      case s.MSG_TYPE.CHAT:
      case s.MSG_TYPE.IMAGE:
      case s.MSG_TYPE.VIDEO:
      case s.MSG_TYPE.POLL_CREATION:
      case s.MSG_TYPE.STICKER:
      case s.MSG_TYPE.PTT:
      case s.MSG_TYPE.REVOKED:
      case s.MSG_TYPE.PTV:
      case s.MSG_TYPE.AUDIO:
        return true;
      case s.MSG_TYPE.DOCUMENT:
        return function (e, t, n, a) {
          if (Boolean((e || t) && n) || l.ETA_SUPPORTED_STATES.has(a)) {
            return false;
          }
          return true;
        }(t.isFromTemplate, t.isDynamicReplyButtonsMsg, t.caption, t.mediaStage);
      default:
        return false;
    }
  }(C, D) || !t.atLeastOnceKeyboardUser) {
    return null;
  }
  let I = null;
  if (e.quotedMsg) {
    I = (0, c.getQuotedMsgObj)(e);
  }
  const R = {
    type: C,
    subtype: b,
    isGif: a == null ? undefined : a.isGif,
    quotedMsg: I,
    senderWid: M
  };
  return (0, l.getMessageAriaLabel)({
    t: g,
    ack: E,
    asRevoked: _,
    isEdited: y,
    isSentByMe: v,
    numberReactions: k,
    ariaLabelMessageType: R,
    senderWid: M,
    senderContact: n,
    isElevatedPushNamesEnabled: O,
    messageDescription: A
  });
};
var r = require("../app/235630.js");
var o = require("../app/163755.js");
var l = require("./115900.js");
var i = require("../app/97858.js");
var u = require("../app/787742.js");
var s = require("../app/373070.js");
var c = require("../app/592978.js");
var d = require("./290870.js");
var f = require("../app/655241.js");
var p = require("./871210.js");
var m = a(require("./154731.js"));
const h = () => {};