var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    msg: t
  } = e;
  const [n, a, m] = (0, f.useMsgValues)(t.id, [l.getType, l.getSubtype, r.getMediaData]);
  const h = {
    parsedVcards: m == null ? undefined : m.parsedVcards,
    viewOnceStatic: e.viewOnceStatic
  };
  let g = c.default.createElement(i.StatusUnknownIcon, null);
  const E = (0, o.getPreviewIconComponent)({
    msg: t,
    options: h
  });
  if (E != null) {
    g = c.default.createElement(E, {
      msg: t,
      options: h
    });
  }
  const v = (0, u.getPreviewIconComponent)({
    msg: t
  });
  if (v != null) {
    g = c.default.createElement(v, {
      msg: t
    });
  }
  return c.default.createElement("div", {
    className: (0, d.default)(p, s.uiMargin.end3)
  }, g);
};
var r = require("../app/163755.js");
var o = require("./931007.js");
var l = require("../app/787742.js");
var i = require("./333856.js");
var u = require("./502613.js");
var s = require("../app/676345.js");
var c = a(require("../vendor/667294.js"));
var d = a(require("../app/156720.js"));
var f = require("./871210.js");
const p = {
  display: "l7jjieqr",
  flexGrow: "tvf2evcx",
  flexShrink: "oq44ahr5",
  flexBasis: "lb5m6g5c",
  color: "g97rt3p3",
  verticalAlign: "fewfhwl7",
  height: "jdwybkuq"
};