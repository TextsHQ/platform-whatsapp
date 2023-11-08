var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    sourceUrl: t,
    context: n,
    isSentByMe: a,
    compose: h
  } = e;
  const g = (n == null ? undefined : n.description) != null && n.isSuspiciousLink !== true && m.default.createElement("div", {
    className: r.default.description
  }, m.default.createElement(i.EmojiText, {
    text: n.description,
    titlify: true
  }));
  let E = t;
  if (n && (E = n.sourceUrl, n.isSuspiciousLink !== true && (n.title != null && n.title !== "" || n.thumbnailUrl != null && n.thumbnailUrl !== "" || n.thumbnail != null && n.thumbnail !== ""))) {
    E = f.default.hostname(E);
    try {
      E = p.default.toUnicode(E);
    } catch (e) {}
  }
  const v = E != null && E !== "" ? m.default.createElement("div", {
    className: r.default.source
  }, m.default.createElement(i.EmojiText, {
    text: E
  })) : null;
  const _ = (n == null ? undefined : n.isSuspiciousLink) === true ? null : n == null ? undefined : n.title;
  const y = (0, l.classnamesConvertMeToStylexPlease)({
    [r.default.isCompose]: h,
    [r.default.bubbleIn]: !h && !a,
    [r.default.bubbleOut]: a,
    [r.default.preview]: true
  });
  return m.default.createElement("div", {
    className: y,
    onClick: () => {
      if (!h) {
        if ((n == null ? undefined : n.isSuspiciousLink) === true) {
          const e = (0, s.findLink)(n.sourceUrl);
          if (e) {
            c.ModalManager.open(m.default.createElement(d.default, {
              link: e
            }));
          }
        } else if (n == null ? undefined : n.sourceUrl) {
          (0, u.openExternalLink)(n.sourceUrl);
        }
      }
    }
  }, m.default.createElement(o.CtwaContextThumbImage, {
    context: n,
    className: r.default.media
  }), m.default.createElement("div", {
    className: r.default.body
  }, m.default.createElement("div", {
    className: r.default.title,
    title: _
  }, m.default.createElement(i.EmojiText, {
    text: _
  })), g, v));
};
var r = a(require("./158945.js"));
var o = require("./508077.js");
var l = require("../app/396574.js");
var i = require("../app/305521.js");
var u = require("../app/753233.js");
var s = require("../app/446303.js");
var c = require("../app/114850.js");
var d = a(require("../app/569984.js"));
var f = a(require("../app/79291.js"));
var p = a(require("../vendors-main/803689.js"));
var m = a(require("../vendor/667294.js"));