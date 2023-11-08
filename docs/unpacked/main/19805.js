var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  const [n] = (0, s.useMsgValues)(e.msg.id, [l.getIsFromTemplate]);
  const a = (t = e.spacer) === null || t === undefined || t;
  return u.default.createElement("div", {
    className: (0, r.classnamesConvertMeToStylexPlease)(e.className, {
      [o.default.text]: true,
      [o.default.placeholder]: e.theme === "placeholder",
      [o.default.template]: n
    })
  }, e.children, a && u.default.createElement(i.default, {
    msg: e.msg
  }));
};
var r = require("../app/396574.js");
var o = a(require("./495852.js"));
var l = require("../app/787742.js");
var i = a(require("./809958.js"));
var u = a(require("../vendor/667294.js"));
var s = require("./871210.js");