var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    messageProtobuf: t,
    baseMessage: n,
    bizInfo: r
  } = e;
  const {
    interactiveResponseMessage: l
  } = t;
  if (l == null) {
    return;
  }
  const u = (0, o.getInteractiveResponseMessageTypeForProto)(l);
  if (!(0, a.interactiveNativeFlowResponseMessagesEnabled)() || !u || !(0, o.isInteractiveResponseMessageTypeEnabled)(u)) {
    return {
      msgData: (0, i.default)((0, i.default)({}, n), {}, {
        type: s.MSG_TYPE.UNKNOWN,
        subtype: "phone_only_feature"
      }),
      contextInfo: l.contextInfo
    };
  }
  try {
    var c;
    var d;
    return {
      msgData: (0, i.default)((0, i.default)({}, n), {}, {
        type: s.MSG_TYPE.INTERACTIVE_RESPONSE,
        body: (c = (0, o.convertToTextWithoutSpecialEmojis)((d = l.body) === null || d === undefined ? undefined : d.text)) !== null && c !== undefined ? c : "",
        interactivePayload: (0, o.getInteractiveResponsePayload)(u, l, r)
      }),
      contextInfo: l.contextInfo
    };
  } catch (e) {
    return {
      msgData: (0, i.default)((0, i.default)({}, n), {}, {
        type: s.MSG_TYPE.UNKNOWN,
        subtype: "phone_only_feature"
      }),
      contextInfo: l.contextInfo
    };
  }
};
var i = r(require("../vendor/81109.js"));
var a = require("./72696.js");
var o = require("./974637.js");
var s = require("./373070.js");