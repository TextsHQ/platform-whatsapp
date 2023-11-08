var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msg: t,
    displayAuthor: n,
    displayType: a,
    hideUpdateButton: i = false,
    customUpdateButtonFbt: u
  } = e;
  return p.default.createElement(l.default, {
    msg: t,
    displayAuthor: n
  }, p.default.createElement(o.default, {
    Icon: s.UnknownIcon,
    msg: t.unsafe()
  }, (0, r.default)(t.unsafe()), " ", i ? null : p.default.createElement(E, {
    msg: t,
    customUpdateButtonFbt: u
  })));
};
var r = a(require("./353033.js"));
var o = a(require("./530404.js"));
var l = a(require("./398685.js"));
var i = require("../app/787742.js");
var u = require("../app/373070.js");
var s = require("./199777.js");
var c = require("../app/366320.js");
var d = require("./405585.js");
var f = require("../vendor/548360.js");
var p = a(require("../vendor/667294.js"));
var m = a(require("../app/156720.js"));
const h = {
  color: "seuajalt"
};
function g() {
  (0, d.updateApp)();
}
function E(e) {
  let {
    msg: t,
    customUpdateButtonFbt: n
  } = e;
  const a = f.fbt._("Click here to update.", null, {
    hk: "mDvEI"
  });
  const r = n != null ? n : a;
  if ((0, i.getIsSentByMe)(t) || !t.subtype || t.futureproofType === u.MSG_TYPE.KEEP_IN_CHAT || t.futureproofType === u.MSG_TYPE.PROTOCOL && t.futureproofSubtype === "message_edit") {
    return p.default.createElement("span", {
      className: (0, m.default)(h),
      role: "button",
      onClick: g
    }, r);
  } else {
    return null;
  }
}
window.updater = c.Updater;