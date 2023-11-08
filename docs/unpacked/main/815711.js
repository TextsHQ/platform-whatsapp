var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const [t, n, a, s, c, d, f] = (0, u.useMsgValues)(e.msg.id, [l.getThumbnail, l.getTitle, l.getDescription, l.getMatchedText, l.getIsSentByMe, l.getStar, l.getIsKept]);
  return i.default.createElement(o.default, {
    title: n,
    description: a,
    thumbnailJpeg: t,
    onClick: () => {
      (0, r.openExternalLink)(s);
    },
    isSentByMe: c,
    star: d,
    kept: f,
    isLoading: false
  });
};
var r = require("../app/753233.js");
var o = a(require("./428543.js"));
var l = require("../app/787742.js");
var i = a(require("../vendor/667294.js"));
var u = require("./871210.js");