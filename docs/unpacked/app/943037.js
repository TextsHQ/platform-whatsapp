Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UndeclaredMessageType = undefined;
exports.getProtobufMessageTypesToKeys = u;
exports.verifyProtobufMessageObjectKeys = function (e) {
  if (!(0, r.getABPropConfigValue)("web_invalid_message_count_validation")) {
    return;
  }
  const t = u(e);
  if (!(t.length === 1 || t.length === 2 && function (e) {
    return Boolean(e.find(e => {
      let [t] = e;
      return typeof t == "number" && t === o.SenderKeyDistribution;
    }));
  }(t))) {
    throw new i.MessageProtobufInvalidMessageTypes(t.map(e => {
      let [t, n] = e;
      return n;
    }));
  }
};
var r = require("./287461.js");
var i = require("./177205.js");
var a = require("./373070.js");
const o = require("../vendor/76672.js")({
  Buttons: 1,
  Template: 2,
  SenderKeyDistribution: 3,
  UnknownMessageKey: 4
});
function s(e, t) {
  switch (e) {
    case "$$unknownFieldCount":
      if (t[e] === 0) {
        return null;
      } else {
        return a.MSG_TYPE.UNKNOWN;
      }
    case "messageContextInfo":
      return null;
    case "contactMessage":
      return a.MSG_TYPE.VCARD;
    case "contactsArrayMessage":
      return a.MSG_TYPE.MULTI_VCARD;
    case "conversation":
    case "extendedTextMessage":
      return a.MSG_TYPE.CHAT;
    case "imageMessage":
      return a.MSG_TYPE.IMAGE;
    case "locationMessage":
    case "liveLocationMessage":
      return a.MSG_TYPE.LOCATION;
    case "documentMessage":
      return a.MSG_TYPE.DOCUMENT;
    case "audioMessage":
      return a.MSG_TYPE.AUDIO;
    case "videoMessage":
      return a.MSG_TYPE.VIDEO;
    case "protocolMessage":
    case "highlyStructuredMessage":
      return a.MSG_TYPE.PROTOCOL;
    case "sendPaymentMessage":
    case "requestPaymentMessage":
    case "paymentInviteMessage":
      return a.MSG_TYPE.PAYMENT;
    case "declinePaymentRequestMessage":
    case "cancelPaymentRequestMessage":
      return a.MSG_TYPE.UNKNOWN;
    case "stickerMessage":
      return a.MSG_TYPE.STICKER;
    case "groupInviteMessage":
      return a.MSG_TYPE.GROUPS_V4_INVITE;
    case "templateButtonReplyMessage":
      return a.MSG_TYPE.TEMPLATE_BUTTON_REPLY;
    case "productMessage":
      return a.MSG_TYPE.PRODUCT;
    case "listMessage":
      return a.MSG_TYPE.LIST;
    case "orderMessage":
      return a.MSG_TYPE.ORDER;
    case "listResponseMessage":
      return a.MSG_TYPE.LIST_RESPONSE;
    case "buttonsResponseMessage":
      return a.MSG_TYPE.BUTTONS_RESPONSE;
    case "interactiveMessage":
      return a.MSG_TYPE.INTERACTIVE;
    case "interactiveResponseMessage":
      return a.MSG_TYPE.INTERACTIVE_RESPONSE;
    case "reactionMessage":
      return a.MSG_TYPE.REACTION;
    case "encReactionMessage":
      return a.MSG_TYPE.REACTION_ENC;
    case "encCommentMessage":
      return a.MSG_TYPE.COMMENT;
    case "pinInChatMessage":
      return a.MSG_TYPE.PIN_MESSAGE;
    case "pollCreationMessage":
    case "pollCreationMessageV2":
    case "pollCreationMessageV3":
      return a.MSG_TYPE.POLL_CREATION;
    case "pollUpdateMessage":
      return a.MSG_TYPE.POLL_UPDATE;
    case "keepInChatMessage":
      return a.MSG_TYPE.KEEP_IN_CHAT;
    case "requestPhoneNumberMessage":
      return a.MSG_TYPE.REQUEST_PHONE_NUMBER;
    case "ptvMessage":
      return a.MSG_TYPE.PTV;
    case "callLogMesssage":
      return a.MSG_TYPE.CALL_LOG;
    case "buttonsMessage":
      return o.Buttons;
    case "templateMessage":
      return o.Template;
    case "senderKeyDistributionMessage":
    case "fastRatchetKeySenderKeyDistributionMessage":
      return o.SenderKeyDistribution;
    default:
      return o.UnknownMessageKey;
  }
}
function l(e) {
  if (e != null && typeof e == "object" && "message" in e) {
    const t = e.message;
    if (t != null && typeof t == "object") {
      return t;
    }
  }
  return null;
}
function u(e) {
  const t = [];
  for (const n of Object.keys(e)) {
    const r = l(e[n]);
    if (r != null) {
      if (u(r).length === 0) {
        t.push([a.MSG_TYPE.UNKNOWN, n]);
      } else {
        t.push(...u(r));
      }
    } else {
      const r = s(n, e);
      if (r != null) {
        t.push([r, n]);
      }
    }
  }
  return t;
}
exports.UndeclaredMessageType = o;