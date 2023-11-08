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
    templateButtonReplyMessage: r
  } = t;
  if (r == null) {
    return;
  }
  return {
    msgData: (0, i.default)((0, i.default)({}, n), {}, {
      type: o.MSG_TYPE.TEMPLATE_BUTTON_REPLY,
      body: (0, a.convertToTextWithoutSpecialEmojis)(r.selectedDisplayText),
      selectedIndex: r.selectedIndex,
      selectedId: r.selectedId
    }),
    contextInfo: r.contextInfo
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./974637.js");
var o = require("./373070.js");