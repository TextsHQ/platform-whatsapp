var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shouldDisplayAuthor = function (e) {
  let {
    msg: t,
    position: n,
    displayType: a
  } = e;
  if (c.default.isPSA((0, o.getChat)(t).id)) {
    return true;
  }
  if (a === r.DISPLAY_TYPE.ANNOUNCEMENT) {
    return true;
  }
  if (a === r.DISPLAY_TYPE.BOT_INVOKE_RESPONSE) {
    return true;
  }
  if ((0, i.getIsBotFutureproofPlaceholder)(t)) {
    return true;
  }
  if ((0, i.getIsSentByMe)(t) || !(0, i.getIsGroupMsg)(t)) {
    return false;
  }
  if (t.type === u.MSG_TYPE.CHAT) {
    return !(a === r.DISPLAY_TYPE.STARRED_MSGS || !t.quotedMsg) || n !== l.MsgPosition.MID && n !== l.MsgPosition.END || a === r.DISPLAY_TYPE.GALLERY || !!(0, i.getLinkPreview)(t) || !!(0, s.isParsableOnlineVideoURL)(t.richPreviewType, t.matchedText, t.doNotPlayInline) || !!(0, o.getIsTransparentMsg)(t);
  }
  return true;
};
var r = require("../app/356097.js");
var o = require("../app/163755.js");
var l = require("./48794.js");
var i = require("../app/787742.js");
var u = require("../app/373070.js");
var s = require("./968698.js");
var c = a(require("../app/124928.js"));