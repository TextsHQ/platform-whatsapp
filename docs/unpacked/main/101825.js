var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  var n;
  const a = (n = l.default.getActive()) !== null && n !== undefined ? n : o.ChatCollection.getActive();
  if (a == null) {
    return void __LOG__(4, undefined, new Error())`Cannot call sendStickerToActiveChat without an active chat`;
  }
  const u = a.getComposeContents();
  const s = {
    stickerSendOrigin: t,
    quotedMsg: a.composeQuotedMsg,
    ctwaContext: (0, r.prepareCtwaContextSend)(u == null ? undefined : u.ctwaContextLinkData, u == null ? undefined : u.ctwaContext)
  };
  a.composeQuotedMsg = null;
  (0, i.sendStickerToChat)(a, e, s);
};
var r = require("./95112.js");
var o = require("../app/351053.js");
var l = a(require("../app/358533.js"));
var i = require("./941584.js");