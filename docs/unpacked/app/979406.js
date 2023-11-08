var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatAddNotification = function (e) {
  let {
    author: t,
    authorClickable: n,
    subject: r,
    subjectClickable: o,
    participantsClickable: s
  } = e;
  if (t) {
    if ((0, i.isMe)(t)) {
      return a.fbt._("You added {names}", [a.fbt._param("names", s)], {
        hk: "4DKy6i"
      });
    } else if ((0, i.isMe)(r)) {
      if (n != null) {
        return a.fbt._("{user_name} added you", [a.fbt._param("user_name", n)], {
          hk: "1Dd4FA"
        });
      } else {
        return a.fbt._("A participant added you", null, {
          hk: "LtOH1"
        });
      }
    } else if (n != null) {
      return a.fbt._("{user_name} added {names}", [a.fbt._param("user_name", n), a.fbt._param("names", s)], {
        hk: "hYJRy"
      });
    } else {
      return a.fbt._("A participant added {names}", [a.fbt._param("names", s)], {
        hk: "2F16H1"
      });
    }
  }
  if ((0, i.isMe)(r)) {
    return a.fbt._("You were added", null, {
      hk: "4x0xHD"
    });
  }
  return a.fbt._("{user_name} was added", [a.fbt._param("user_name", o)], {
    hk: "1PVOfk"
  });
};
var i = require("./526424.js");
var a = require("../vendor/548360.js");
r(require("../vendor/667294.js"));