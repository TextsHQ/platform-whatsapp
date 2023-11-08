var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let t;
  let {
    msg: n
  } = e;
  const a = (0, o.getKicSender)(n);
  if ((0, o.getIsKept)(n) && a != null) {
    t = l.default.createElement("div", {
      className: (0, i.default)(u)
    }, (0, r.getKeptByString)(a));
  }
  return l.default.createElement(l.default.Fragment, null, t);
};
var r = require("../app/896971.js");
var o = require("../app/787742.js");
var l = a(require("../vendor/667294.js"));
var i = a(require("../app/156720.js"));
const u = {
  fontSize: "f8jlpxt4",
  color: "pm5hny62",
  marginTop: "s11ka3oa",
  marginStart: "m4o8c6m0"
};