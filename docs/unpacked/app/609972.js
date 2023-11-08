var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatRestrictNotification = function (e) {
  let {
    author: t,
    authorClickable: n,
    templateParams: r
  } = e;
  if (r[0] === "on") {
    if (r[1] != null) {
      const e = parseInt(r[1], 10) || 256;
      return a.fbt._({
        "*": "This group has over {threshold} participants so now only admins can edit the group settings",
        _1: "This group has over 1 participant so now only admins can edit the group settings"
      }, [a.fbt._plural(e, "threshold")], {
        hk: "3Pm0hh"
      });
    }
    if ((0, i.isMe)(t)) {
      return a.fbt._("You changed the settings so only admins can edit the group settings", null, {
        hk: "3crSEi"
      });
    } else if (n != null) {
      return a.fbt._("{user_name} changed the settings so only admins can edit the group settings", [a.fbt._param("user_name", n)], {
        hk: "44x0tX"
      });
    } else {
      return a.fbt._("A participant changed the settings so only admins can edit the group settings", null, {
        hk: "1bYOb"
      });
    }
  }
  if ((0, i.isMe)(t)) {
    return a.fbt._("You changed the settings so all participants can edit the group settings", null, {
      hk: "RyLIe"
    });
  }
  if (n != null) {
    return a.fbt._("{user_name} changed the settings so all participants can edit the group settings", [a.fbt._param("user_name", n)], {
      hk: "4EmOae"
    });
  } else {
    return a.fbt._("A participant changed the settings so all participants can edit the group settings", null, {
      hk: "Cc44B"
    });
  }
};
var i = require("./526424.js");
var a = require("../vendor/548360.js");
r(require("../vendor/667294.js"));