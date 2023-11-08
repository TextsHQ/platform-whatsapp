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
    buttonsResponseMessage: r
  } = t;
  if (r == null) {
    return;
  }
  if (r.type === s.Message$ButtonsResponseMessage$Type.DISPLAY_TEXT) {
    return {
      msgData: (0, i.default)((0, i.default)({}, n), {}, {
        type: o.MSG_TYPE.BUTTONS_RESPONSE,
        selectedButtonId: r.selectedButtonId,
        body: (0, a.convertToTextWithoutSpecialEmojis)(r.selectedDisplayText)
      }),
      contextInfo: r.contextInfo
    };
  }
  return {
    msgData: (0, i.default)((0, i.default)({}, n), {}, {
      type: o.MSG_TYPE.UNKNOWN
    }),
    contextInfo: r.contextInfo
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./974637.js");
var o = require("./373070.js");
var s = require("./533494.js");