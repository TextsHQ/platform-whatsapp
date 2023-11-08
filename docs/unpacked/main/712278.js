var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    theme: t,
    Icon: n
  } = e;
  const a = (0, o.classnamesConvertMeToStylexPlease)({
    [r.default.pending]: t === "pending",
    [r.default.warning]: t === "warning",
    [r.default.badge]: true
  });
  const i = n ? l.default.createElement(n, {
    className: r.default.icon
  }) : null;
  return l.default.createElement("div", {
    className: a
  }, i);
};
var r = a(require("./458824.js"));
var o = require("../app/396574.js");
var l = a(require("../vendor/667294.js"));