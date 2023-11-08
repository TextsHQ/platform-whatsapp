var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/396574.js");
var o = a(require("./130440.js"));
var l = a(require("../vendor/667294.js"));
var i = e => {
  let {
    children: t,
    fromMe: n
  } = e;
  return l.default.createElement("div", {
    className: (0, r.classnamesConvertMeToStylexPlease)({
      [o.default.notFromMe]: n === false,
      [o.default.tooltip]: true
    }),
    role: "tooltip"
  }, t);
};
exports.default = i;