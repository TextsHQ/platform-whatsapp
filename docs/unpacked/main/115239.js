var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msg: t
  } = e;
  const [n] = (0, u.useMsgValues)(t.id, [r.getSubtype]);
  let a;
  a = n === "miss_video" || n === "miss_group_video" ? l.StatusMissVideoIcon : o.StatusMissIcon;
  return i.default.createElement(a, {
    iconXstyle: s.miss
  });
};
var r = require("../app/787742.js");
var o = require("./716096.js");
var l = require("./890139.js");
var i = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
var u = require("./871210.js");
const s = {
  miss: {
    color: "mvxzr2tb"
  }
};