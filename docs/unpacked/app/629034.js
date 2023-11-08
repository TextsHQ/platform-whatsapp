var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    messageProtobuf: t,
    baseMessage: n
  } = e;
  const {
    keepInChatMessage: r
  } = t;
  if (r == null) {
    return;
  }
  const {
    key: l,
    keepType: u,
    timestampMs: c
  } = r;
  return {
    msgData: (0, i.default)((0, i.default)({}, n), {}, {
      keptMessageKey: (0, o.getMsgKey)(l, n),
      type: s.MSG_TYPE.KEEP_IN_CHAT,
      keepType: u,
      senderTimestampMs: (0, a.maybeNumberOrThrowIfTooLarge)(c)
    }),
    contextInfo: null
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./229079.js");
var o = require("./974637.js");
var s = require("./373070.js");