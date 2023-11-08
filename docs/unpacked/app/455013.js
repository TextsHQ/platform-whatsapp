var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./476233.js"));
var a = require("./70354.js");
var o = r(require("./79291.js"));
class s extends i.default {
  constructor(e) {
    let {
      wid: t,
      msgId: n,
      tag: r,
      title: i,
      body: s,
      icon: l,
      canBlock: u,
      onClick: c,
      renotify: d,
      doNotOpenChat: p
    } = e;
    super(t, n, r, {
      title: a.EmojiUtil.normalizeAllEmojis(i),
      notification: window.Notification,
      body: a.EmojiUtil.normalizeAllEmojis(s),
      icon: o.default.relToAbs(l),
      onClick: c,
      renotify: d,
      doNotOpenChat: p
    });
  }
}
exports.default = s;