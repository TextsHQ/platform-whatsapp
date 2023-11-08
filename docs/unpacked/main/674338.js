var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msg: t
  } = e;
  const [n] = (0, u.useMsgValues)(t.id, [r.getIsBotFutureproofPlaceholder]);
  if (n) {
    return i.default.createElement(l.UnknownIcon, {
      width: 20,
      height: 20
    });
  }
  return i.default.createElement(o.StatusCiphertextIcon, null);
};
var r = require("../app/787742.js");
var o = require("./44822.js");
var l = require("./199777.js");
var i = a(require("../vendor/667294.js"));
var u = require("./871210.js");