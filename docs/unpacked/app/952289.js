var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    messageProtobuf: t,
    baseMessage: n,
    rcat: r,
    msgContext: u
  } = e;
  const {
    extendedTextMessage: c
  } = t;
  if (c == null) {
    return;
  }
  if (!(0, s.isUrlExtendedTextMessage)(c)) {
    return;
  }
  const d = (0, a.default)(function (e) {
    return l.default.hostname(e);
  });
  const p = d((c == null ? undefined : c.canonicalUrl) || "");
  const f = d((c == null ? undefined : c.matchedText) || "");
  const _ = (0, s.parseExtendedTextMessageProto)({
    messageProtobuf: t,
    baseMessage: n,
    msgContext: u
  });
  return {
    msgData: (0, i.default)((0, i.default)((0, i.default)({}, n), _ == null ? undefined : _.msgData), {}, {
      type: o.MSG_TYPE.CHAT,
      subtype: "url",
      canonicalUrl: p === f || p === "" ? c == null ? undefined : c.canonicalUrl : f,
      rcat: r
    }),
    contextInfo: c == null ? undefined : c.contextInfo
  };
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/288306.js"));
var o = require("./373070.js");
var s = require("./732982.js");
var l = r(require("./79291.js"));