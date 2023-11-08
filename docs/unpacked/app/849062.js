var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  let {
    json: n,
    contextInfo: r
  } = e;
  const c = Boolean(n.matchedText || n.canonicalUrl || n.description || n.title);
  let d;
  const p = (t = n.editMsgType) !== null && t !== undefined ? t : s.MSG_TYPE.CHAT;
  switch (p) {
    case s.MSG_TYPE.CHAT:
      {
        const e = (0, i.default)((0, i.default)({}, n), {}, {
          type: s.MSG_TYPE.CHAT,
          subtype: c ? "url" : undefined
        });
        d = (0, a.getProtobufMessage)(e, undefined, r);
        break;
      }
    case s.MSG_TYPE.IMAGE:
      d = {
        imageMessage: {
          caption: n.caption,
          contextInfo: r
        }
      };
      break;
    case s.MSG_TYPE.VIDEO:
      d = {
        videoMessage: {
          caption: n.caption,
          contextInfo: r
        }
      };
      break;
    case s.MSG_TYPE.DOCUMENT:
      d = {
        documentWithCaptionMessage: {
          message: {
            documentMessage: {
              caption: n.caption,
              contextInfo: r
            }
          }
        }
      };
      break;
    default:
      throw (0, u.default)(`Unsupported edit msg type: ${p}`);
  }
  return {
    protocolMessage: {
      key: (0, o.encodeKey)(n.protocolMessageKey),
      type: l.Message$ProtocolMessage$Type.MESSAGE_EDIT,
      timestampMs: n.latestEditSenderTimestampMs,
      editedMessage: d
    }
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./21838.js");
var o = require("./974637.js");
var s = require("./373070.js");
var l = require("./533494.js");
var u = r(require("./556869.js"));