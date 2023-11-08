var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatAnnounceNotification = function (e) {
  let {
    author: t,
    authorClickable: n,
    body: r
  } = e;
  if (r === "on") {
    if ((0, i.isMe)(t)) {
      return a.fbt._("You allowed only admins to send messages to this group", null, {
        hk: "w9ZN5"
      });
    } else {
      return a.fbt._("{user_name} changed this group's settings to allow only admins to send messages to this group", [a.fbt._param("user_name", n)], {
        hk: "3MGANp"
      });
    }
  }
  if ((0, i.isMe)(t)) {
    return a.fbt._("You changed this group's settings to allow all participants to send messages to this group", null, {
      hk: "48wdOD"
    });
  } else {
    return a.fbt._("{user_name} changed this group's settings to allow all participants to send messages to this group", [a.fbt._param("user_name", n)], {
      hk: "33DWmK"
    });
  }
};
var i = require("./526424.js");
var a = require("../vendor/548360.js");
r(require("../vendor/667294.js"));