var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/396574.js");
var o = a(require("./161171.js"));
var l = a(require("../vendor/667294.js"));
var i = a(require("../app/156720.js"));
var u = e => {
  const {
    header: t,
    uppercase: n = true,
    isTransparent: a = false
  } = e;
  return l.default.createElement("div", {
    className: (0, r.classnamesConvertMeToStylexPlease)({
      [o.default.container]: true,
      [o.default.uppercase]: n,
      [o.default.transparent]: a
    }, (0, i.default)(e.xstyle))
  }, t);
};
exports.default = u;