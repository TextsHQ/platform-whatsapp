var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VoterRow = function (e) {
  let {
    vote: t
  } = e;
  const {
    pollDetailsOptionTextSize: n,
    pollDetailsTimestampTextSize: a
  } = (0, g.useElectronCompatibleStyles)();
  const {
    senderObj: v,
    timestamp: _,
    parentMsg: y
  } = (0, E.useModelValues)(t, ["senderObj", "timestamp", "parentMsg"]);
  const [C, b, M, S, T] = (0, h.useContactValues)(v.id, [i.getId, i.getName, d.getFormattedName, d.getFormattedPhone, i.getNotifyName]);
  const w = (0, f.getChat)(y.unsafe());
  const A = (0, s.elevatedPushNamesM2Enabled)(w);
  const P = (0, s.pushNameCanBeUsed)(v) && A;
  let O;
  let k;
  if (P) {
    O = (0, o.getFormattedNotifyName)(T);
    k = (0, o.getAccessibleNotifyName)(T);
  } else {
    O = M;
  }
  const D = l.Clock.relativeDateAndTimeStr(_ / 1000);
  const I = p.default.createElement(c.EmojiText, {
    direction: "auto",
    text: O,
    ariaLabel: k,
    titlify: true,
    ellipsify: true,
    xstyle: n
  });
  let R;
  R = A ? P ? p.default.createElement(c.EmojiText, {
    direction: "auto",
    text: S
  }) : null : b != null && b !== "" || M !== S || T == null ? null : p.default.createElement(c.EmojiText, {
    direction: "auto",
    text: `~${T}`
  });
  return p.default.createElement(r.default, {
    contextEnabled: () => false,
    image: p.default.createElement(u.DetailImage, {
      id: C,
      size: u.DetailImageSize.ExtraSmall
    }),
    primary: I,
    secondary: p.default.createElement("span", {
      title: D,
      className: (0, m.default)(a)
    }, D),
    primaryDetail: R,
    style: {
      cursor: "auto"
    },
    theme: "chat-info",
    idle: true
  });
};
var r = a(require("./991370.js"));
var o = require("../app/642838.js");
var l = require("../app/63014.js");
var i = require("../app/660666.js");
var u = require("../app/23641.js");
var s = require("../app/235630.js");
var c = require("../app/305521.js");
var d = require("../app/714574.js");
var f = require("../app/163755.js");
var p = a(require("../vendor/667294.js"));
var m = a(require("../app/156720.js"));
var h = require("../app/379811.js");
var g = require("../app/140455.js");
var E = require("../app/655241.js");