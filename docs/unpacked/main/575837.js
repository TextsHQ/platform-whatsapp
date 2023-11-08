var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    entityId: t
  } = e;
  const n = i.default.createElement("span", {
    role: "button",
    onClick: () => (0, o.handleContactUs)(t),
    className: (0, u.default)(s)
  }, l.fbt._("WhatsApp Support", null, {
    hk: "3gjAA2"
  }));
  return i.default.createElement(r.FlexColumn, {
    align: "center"
  }, i.default.createElement("span", {
    className: (0, u.default)(c)
  }, l.fbt._("This group is no longer available. Please contact {support} for help.", [l.fbt._param("support", n)], {
    hk: "25E74Z"
  })));
};
var r = require("../app/690495.js");
var o = require("./387304.js");
var l = require("../vendor/548360.js");
var i = a(require("../vendor/667294.js"));
var u = a(require("../app/156720.js"));
const s = {
  color: "o0rubyzf"
};
const c = {
  whiteSpace: "bbv8nyr4"
};