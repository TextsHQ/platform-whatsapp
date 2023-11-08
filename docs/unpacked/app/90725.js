var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LabelPill = function (e) {
  let {
    children: t,
    pillText: n
  } = e;
  let r = (0, a.default)(e, c);
  return l.default.createElement(o.FlexRow, {
    align: "center"
  }, t, l.default.createElement(p, (0, i.default)({}, r, {
    inline: t != null || r.inline
  }), n));
};
exports.Pill = p;
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/506479.js"));
var o = require("./690495.js");
var s = require("./676345.js");
var l = r(require("../vendor/667294.js"));
var u = r(require("./156720.js"));
const c = ["children", "pillText"];
const d = {
  pill: {
    display: "i86elurf",
    boxSizing: "cm280p3y",
    height: "qgpfrw6h",
    fontSize: "r8knbtme",
    fontWeight: "wvgvrgjz",
    borderTopStartRadius: "m2gb0jvt",
    borderTopEndRadius: "rfxpxord",
    borderBottomEndRadius: "gwd8mfxi",
    borderBottomStartRadius: "mnh9o63b",
    color: "pm5hny62",
    backgroundColor: "tljf6x17"
  },
  green: {
    color: "rpz5dbxo",
    backgroundColor: "aquyuamc"
  },
  yellow: {
    color: "rpz5dbxo",
    backgroundColor: "g9gonq0i"
  },
  blue: {
    color: "rpz5dbxo",
    backgroundColor: "sfolu3pm"
  }
};
function p(e) {
  let {
    children: t,
    color: n,
    inline: r
  } = e;
  return l.default.createElement(o.FlexRow, {
    align: "center",
    className: (0, u.default)([d.pill, n ? d[n] : null, s.uiPadding.vert4, s.uiPadding.horiz8, s.uiMargin.vertAuto, r === true ? s.uiMargin.start8 : null])
  }, t);
}