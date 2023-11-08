var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    children: t,
    className: n,
    contact: a,
    msg: m,
    onClick: h,
    style: g,
    xstyle: E
  } = e;
  const [v, _] = (0, f.useContactValues)(a.id, [s.getFormattedUser, i.getIsMe]);
  const {
    t: y
  } = (0, p.useModelValues)(m, ["senderObj", "t"]);
  const C = o.Clock.timeStr(y);
  const b = function (e, t) {
    const n = t != null ? t : "";
    if (e && l.Conn.pushname) {
      return l.Conn.pushname;
    } else {
      return n;
    }
  }(_, v);
  return c.default.createElement(u.CopyableDiv, {
    className: (0, r.classnamesConvertMeToStylexPlease)(n, (0, d.default)(E)),
    onClick: h,
    prePlainText: `[${C}] ${b}: `,
    style: g
  }, t);
};
var r = require("../app/396574.js");
var o = require("../app/63014.js");
var l = require("../app/445729.js");
var i = require("../app/660666.js");
var u = require("../app/175448.js");
var s = require("../app/714574.js");
var c = a(require("../vendor/667294.js"));
var d = a(require("../app/156720.js"));
var f = require("../app/379811.js");
var p = require("../app/655241.js");