var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatPictureNotification = function (e) {
  let {
    author: t,
    authorClickable: n,
    body: r
  } = e;
  if (r === "remove") {
    if ((0, i.isMe)(t)) {
      return a.fbt._("You deleted this group's icon", null, {
        hk: "1stnw4"
      });
    } else if (n != null) {
      return a.fbt._("{user_name} deleted this group's icon", [a.fbt._param("user_name", n)], {
        hk: "2EXTnQ"
      });
    } else {
      return a.fbt._("A participant deleted this group's icon", null, {
        hk: "3Uz07c"
      });
    }
  }
  if ((0, i.isMe)(t)) {
    return a.fbt._("You changed this group's icon", null, {
      hk: "1cYkjy"
    });
  }
  if (n != null) {
    return a.fbt._("{user_name} changed this group's icon", [a.fbt._param("user_name", n)], {
      hk: "3ivg7"
    });
  } else {
    return a.fbt._("A participant changed this group's icon", null, {
      hk: "1OwHVG"
    });
  }
};
var i = require("./526424.js");
var a = require("../vendor/548360.js");
r(require("../vendor/667294.js"));