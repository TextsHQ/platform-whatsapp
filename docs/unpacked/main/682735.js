var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, h.useModelValues)(e.msgInfoParticipant, ["t"]);
  const [n, a, g, E, v] = (0, m.useContactValues)(e.contact.id, [u.getId, u.getName, f.getFormattedName, f.getFormattedPhone, u.getNotifyName]);
  const {
    contact: _,
    elevatedPushNamesEnabled: y = false
  } = e;
  const C = p.default.createElement(s.DetailImage, {
    id: n
  });
  const b = i.Clock.relativeDateAndTimeStr(t.t);
  const M = p.default.createElement("span", {
    title: b
  }, b);
  let S;
  let T;
  let w;
  if (!a && g === E && v) {
    S = y ? p.default.createElement(d.EmojiText, {
      direction: "auto",
      text: E
    }) : p.default.createElement(d.EmojiText, {
      className: l.default.notifyName,
      direction: "auto",
      text: v
    });
  }
  if ((0, c.pushNameCanBeUsed)(_) && y) {
    T = (0, o.getFormattedNotifyName)(v);
    w = (0, o.getAccessibleNotifyName)(v);
  } else {
    T = g;
  }
  return p.default.createElement(r.default, {
    contextEnabled: () => false,
    image: C,
    primary: p.default.createElement(d.EmojiText, {
      direction: "auto",
      text: T,
      ariaLabel: w,
      titlify: true,
      ellipsify: true
    }),
    secondary: M,
    secondaryDetail: S,
    style: {
      cursor: "auto"
    },
    theme: e.theme,
    idle: true
  });
};
var r = a(require("./991370.js"));
var o = require("../app/642838.js");
var l = a(require("./655507.js"));
var i = require("../app/63014.js");
var u = require("../app/660666.js");
var s = require("../app/23641.js");
var c = require("../app/235630.js");
var d = require("../app/305521.js");
var f = require("../app/714574.js");
var p = a(require("../vendor/667294.js"));
var m = require("../app/379811.js");
var h = require("../app/655241.js");