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
    conversation: l,
    extendedTextMessage: u
  } = t;
  if (l == null && u == null) {
    return;
  }
  if (l != null) {
    return {
      msgData: (0, i.default)((0, i.default)({}, n), {}, {
        type: o.MSG_TYPE.CHAT,
        body: (0, a.convertToTextWithoutSpecialEmojis)(l)
      }),
      contextInfo: undefined
    };
  }
  if ((0, s.isUrlExtendedTextMessage)(u)) {
    return;
  }
  return (0, s.parseExtendedTextMessageProto)({
    messageProtobuf: t,
    baseMessage: n,
    msgContext: r
  });
};
var i = r(require("../vendor/81109.js"));
var a = require("./974637.js");
var o = require("./373070.js");
var s = require("./732982.js");