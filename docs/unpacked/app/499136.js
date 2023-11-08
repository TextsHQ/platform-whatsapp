var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatCreateNotification = function (e) {
  let {
    chat: t,
    author: n,
    authorClickable: r,
    groupSubject: s,
    groupSubjectAsString: l
  } = e;
  const u = l ? s : o.default.createElement(i.FormattedText, {
    text: s
  });
  if ((0, i.isMe)(n)) {
    if (s) {
      return a.fbt._("You created group \"{group_subject}\"", [a.fbt._param("group_subject", u)], {
        hk: "5ueu7"
      });
    } else {
      return a.fbt._("You created this group", null, {
        hk: "2sgSHA"
      });
    }
  }
  if (s) {
    if (r != null) {
      return a.fbt._("{user_name} created group \"{group_subject}\"", [a.fbt._param("user_name", r), a.fbt._param("group_subject", u)], {
        hk: "1x9Th3"
      });
    } else {
      return a.fbt._("An admin created group \"{group_subject}\"", [a.fbt._param("group_subject", u)], {
        hk: "HHwBH"
      });
    }
  }
  if (r != null) {
    const e = t ? t.title() : "";
    if (e.trim() === "") {
      return a.fbt._("{user_name} created this group", [a.fbt._param("user_name", r)], {
        hk: "4sjoVX"
      });
    } else {
      return a.fbt._("{user_name} created group \"{group_subject}\"", [a.fbt._param("user_name", r), a.fbt._param("group_subject", e)], {
        hk: "1x9Th3"
      });
    }
  }
  return a.fbt._("An admin created this group", null, {
    hk: "4GaP6B"
  });
};
var i = require("./526424.js");
var a = require("../vendor/548360.js");
var o = r(require("../vendor/667294.js"));