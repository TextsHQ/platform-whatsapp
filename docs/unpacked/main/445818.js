Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shouldHaveTail = function (e) {
  let {
    chat: t,
    isNotification: n,
    displayType: o,
    tailOverride: l,
    position: i
  } = e;
  return !(t == null ? undefined : t.isPSA) && !n && ![a.DISPLAY_TYPE.ANNOUNCEMENT, a.DISPLAY_TYPE.NEWSLETTER, a.DISPLAY_TYPE.BOT_INVOKE_RESPONSE].includes(o) && !l && (i === r.MsgPosition.FRONT || i === r.MsgPosition.SINGLE) || o === a.DISPLAY_TYPE.MSG_INFO || Boolean(l);
};
var a = require("../app/356097.js");
var r = require("./48794.js");