var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatLeaveNotification = function (e) {
  let {
    body: t,
    subject: n,
    participantsClickable: r
  } = e;
  if (n) {
    if ((0, a.isMe)(n)) {
      return o.fbt._("You left", null, {
        hk: "3mSR6P"
      });
    } else {
      return o.fbt._("{user_name} left", [o.fbt._param("user_name", r)], {
        hk: "Bk7W7"
      });
    }
  }
  if (t === i.DELETE_REASON.INTEGRITY_DELETE_PARENT) {
    return o.fbt._("This community is no longer available", null, {
      hk: "3e98vZ"
    });
  }
  return o.fbt._("This group has ended", null, {
    hk: "1Ta4nY"
  });
};
var i = require("./862159.js");
var a = require("./526424.js");
var o = require("../vendor/548360.js");
r(require("../vendor/667294.js"));