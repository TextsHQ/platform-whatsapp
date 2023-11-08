var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jsonWidReviver = function (e, t) {
  return o(e, t);
};
exports.widReviver = o;
var i = r(require("./124928.js"));
var a = require("./669050.js");
function o(e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : i.default.isWid;
  let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : a.createWid;
  let o = t;
  switch (e) {
    case "author":
    case "broadcast":
    case "chat":
    case "descOwner":
    case "from":
    case "gid":
    case "id":
    case "jid":
    case "owner":
    case "participant":
    case "quotedRemoteJid":
    case "quotedParticipant":
    case "remote":
    case "subjectOwner":
    case "s_o":
    case "to":
    case "wid":
    case "changeNumberNewJid":
    case "changeNumberOldJid":
    case "recipient":
    case "paymentMessageReceiverJid":
    case "parentGroup":
    case "phoneNumber":
    case "revokeSender":
    case "ephemeralSettingUser":
    case "newsletterId":
    case "invokedBotWid":
    case "botTargetSenderJid":
      if (n(t)) {
        o = r(t);
      }
      break;
    default:
      {
        const i = parseInt(e, 10);
        if (!isNaN(i) && n(t)) {
          o = r(t);
        }
        break;
      }
  }
  return o;
}