var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageUnread = undefined;
var r = require("../app/396574.js");
var o = require("./776078.js");
var l = a(require("./711418.js"));
var i = require("../vendor/548360.js");
var u = a(require("../vendor/667294.js"));
exports.MessageUnread = e => {
  let {
    count: t,
    textContainerRef: n
  } = e;
  const a = i.fbt._({
    "*": "{count} unread messages",
    _1: "1 unread message"
  }, [i.fbt._plural(t, "count")], {
    hk: "SvDsm"
  });
  return u.default.createElement("div", {
    className: (0, r.classnamesConvertMeToStylexPlease)(l.default.msgUnread, o.LIST_FOCUSABLE_ITEM_CLASS_NAME),
    ref: n,
    tabIndex: -1
  }, u.default.createElement("span", {
    className: l.default.msgUnreadBody,
    "aria-live": "polite"
  }, a));
};