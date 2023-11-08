var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  let {
    msg: n,
    onMsgFooterClick: a
  } = e;
  const c = (t = n.reporterJidList) === null || t === undefined ? undefined : t.length;
  const d = l.fbt._("{=m0}", [l.fbt._implicitParam("=m0", i.default.createElement(o.WDSTextSmall, {
    as: "span"
  }, l.fbt._("Sent for review by {=m2}", [l.fbt._implicitParam("=m2", i.default.createElement(o.WDSClickableText, {
    color: "teal",
    onClick: () => a == null ? undefined : a(n)
  }, l.fbt._("{reporters} participants", [l.fbt._param("reporters", c)], {
    hk: "1rI3wB"
  })))], {
    hk: "4wNqm9"
  })))], {
    hk: "30K47T"
  });
  const f = i.default.createElement("div", {
    className: (0, u.default)(s, r.uiMargin.start36, r.uiMargin.top8)
  }, d);
  return i.default.createElement(i.default.Fragment, null, f);
};
var r = require("../app/676345.js");
var o = require("../app/851488.js");
var l = require("../vendor/548360.js");
var i = a(require("../vendor/667294.js"));
var u = a(require("../app/156720.js"));
const s = {
  fontSize: "f8jlpxt4",
  color: "pm5hny62"
};