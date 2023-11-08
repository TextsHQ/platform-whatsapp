var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    emojis: t,
    animation: n
  } = e;
  const a = t ? t.length : 0;
  if (a === 0) {
    return null;
  }
  let s;
  switch (a) {
    default:
    case 3:
      s = o.SIZE.MEDIUM;
      break;
    case 2:
      s = o.SIZE.LARGE;
      break;
    case 1:
      s = o.SIZE.XLARGE;
  }
  const c = t.map((e, t) => l.default.createElement(o.LargeEmoji, {
    animation: n,
    size: s,
    emoji: e,
    key: e + t,
    selectable: true
  }));
  return l.default.createElement(r.SelectableDiv, {
    selectable: true,
    className: (0, i.default)(u)
  }, c);
};
var r = require("../app/306703.js");
var o = require("../app/116594.js");
var l = a(require("../vendor/667294.js"));
var i = a(require("../app/156720.js"));
const u = {
  position: "g0rxnol2",
  zIndex: "pglj95m3",
  display: "p357zi0d",
  justifyContent: "ac2vgrno",
  paddingTop: "n1yiu2zv",
  marginTop: "tt8xd2xn",
  marginEnd: "aumn88wd",
  marginBottom: "k0lnf8n4",
  marginStart: "htq1q0kf",
  cursor: "n3nyt3io"
};