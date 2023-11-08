var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatRemoveNotification = function (e) {
  let {
    author: t,
    authorClickable: n,
    subject: r,
    subjectClickable: s,
    participantsClickable: l
  } = e;
  if (t) {
    if (a.default.equals(t, r)) {
      return o.fbt._("You were removed", null, {
        hk: "2gyTSa"
      });
    } else if ((0, i.isMe)(t)) {
      return o.fbt._("You removed {names}", [o.fbt._param("names", l)], {
        hk: "32PVl7"
      });
    } else if ((0, i.isMe)(r)) {
      if (n != null) {
        return o.fbt._("{user_name} removed you", [o.fbt._param("user_name", n)], {
          hk: "3SSlzK"
        });
      } else {
        return o.fbt._("A participant removed you", null, {
          hk: "3MXPgr"
        });
      }
    } else if (n != null) {
      return o.fbt._("{user_name} removed {names}", [o.fbt._param("user_name", n), o.fbt._param("names", l)], {
        hk: "2pVo2Q"
      });
    } else {
      return o.fbt._("A participant removed {names}", [o.fbt._param("names", l)], {
        hk: "2dhLZd"
      });
    }
  }
  if ((0, i.isMe)(r)) {
    return o.fbt._("You were removed", null, {
      hk: "2gyTSa"
    });
  }
  return o.fbt._("{user_name} was removed", [o.fbt._param("user_name", s)], {
    hk: "4hFBuu"
  });
};
var i = require("./526424.js");
var a = r(require("./124928.js"));
var o = require("../vendor/548360.js");
r(require("../vendor/667294.js"));