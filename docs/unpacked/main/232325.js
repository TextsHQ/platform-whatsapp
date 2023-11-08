var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msg: t,
    options: n
  } = e;
  const a = [(0, r.getText)(t), t.caption, t.footer].filter(Boolean).join(" ");
  if (!a.length) {
    return l.fbt._("Product", null, {
      hk: "1H4J4r"
    });
  }
  if (n.unformat === true) {
    return (0, o.default)(t, a);
  } else {
    return a;
  }
};
var r = require("../app/163755.js");
var o = a(require("../app/640391.js"));
var l = require("../vendor/548360.js");