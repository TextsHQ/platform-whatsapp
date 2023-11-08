var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendStickerToChat = function () {
  return f.apply(this, arguments);
};
var r = a(require("../vendor/506479.js"));
var o = a(require("../vendor/348926.js"));
var l = require("../app/332221.js");
var i = require("../app/644234.js");
var u = a(require("../app/756680.js"));
var s = require("../app/163139.js");
var c = require("../app/501372.js");
const d = ["stickerSendOrigin"];
function f() {
  return (f = (0, o.default)(function* (e, t, n) {
    const a = (0, s.unproxy)(e);
    yield (0, l.maybeShowBizBot1pTos)(a);
    return p(a, t, n);
  })).apply(this, arguments);
}
function p() {
  return m.apply(this, arguments);
}
function m() {
  return (m = (0, o.default)(function* (e, t, a) {
    require("../app/647912.js").RecentStickerCollection.enqueue([t]);
    if (t.mediaData && t.mediaData.mediaBlob instanceof u.default) {
      t.mediaData.mediaBlob.retain();
    }
    const {
      stickerSendOrigin: o
    } = a;
    const l = (0, r.default)(a, d);
    const s = yield (0, i.prepSticker)(t).sendToChat(e, l);
    new c.StickerSendWamEvent({
      stickerSendOrigin: o,
      stickerIsAnimated: Boolean(t.mediaData.isAnimated),
      stickerIsFirstParty: Boolean(t.mediaData.isFirstParty),
      stickerIsFromStickerMaker: Boolean(t.mediaData.isFromStickerMaker)
    }).commit();
    return s;
  })).apply(this, arguments);
}