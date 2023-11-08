var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  let {
    contactInfo: n,
    onUnknownContactClick: a
  } = e;
  const {
    wid: h,
    chat: g,
    isBusiness: E,
    verifiedName: v,
    verifiedLevel: _
  } = n;
  const y = (t = g == null ? undefined : g.contact.isContactBlocked) !== null && t !== undefined ? t : !!l.BlocklistCollection.get(h);
  const C = m.default.createElement(s.DetailImage, {
    id: h,
    waitIdle: true
  });
  const b = {
    ellipsify: true,
    titlify: true,
    breakWord: true,
    direction: "auto"
  };
  let M;
  let S = m.default.createElement(c.EmojiText, (0, r.default)({
    text: (0, o.formatPhone)(h.user)
  }, b));
  if (g) {
    if (E && _ === "high") {
      S = m.default.createElement(c.EmojiText, (0, r.default)({
        text: v
      }, b));
    }
    let e = g.contact.pushname;
    if (!e) {
      e = v != null ? v : "";
    }
    M = (0, u.getFormattedNotifyName)(e);
  }
  if (y) {
    M = p.fbt._("Contact is blocked", null, {
      hk: "3CChjl"
    });
  }
  return m.default.createElement(m.default.Fragment, null, m.default.createElement(f.default, {
    key: "not-in-your-contacts-header",
    header: (0, d.default)("Not in your contacts")
  }), m.default.createElement(i.default, {
    image: C,
    primary: S,
    secondary: M != null ? m.default.createElement(c.EmojiText, (0, r.default)({
      text: M
    }, b)) : null,
    onClick: e => a(e, n.wid),
    focusable: true
  }));
};
var r = a(require("../vendor/967154.js"));
var o = require("../app/986120.js");
var l = require("../app/474596.js");
var i = a(require("../main-chunk/170206.js"));
var u = require("../app/642838.js");
var s = require("../app/23641.js");
var c = require("../app/305521.js");
var d = a(require("../app/395767.js"));
var f = a(require("./772549.js"));
var p = require("../vendor/548360.js");
var m = a(require("../vendor/667294.js"));