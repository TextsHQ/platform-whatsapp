var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    unreadCount: t
  } = e;
  if (t === 0) {
    return null;
  }
  return u.default.createElement(u.default.Fragment, null, u.default.createElement("div", {
    className: (0, s.default)(l.uiMargin.end4)
  }, u.default.createElement(d, null)), u.default.createElement(o.TextSpan, {
    size: "12",
    xstyle: c.unread
  }, i.fbt._("{unread} unread", [i.fbt._param("unread", t)], {
    hk: "45nO26"
  })), u.default.createElement(o.TextSpan, {
    color: "secondary",
    xstyle: l.uiMargin.horiz4
  }, r.default.isRTL() ? " - " : " · "));
};
var r = a(require("../app/932325.js"));
var o = require("../app/180519.js");
var l = require("../app/676345.js");
var i = require("../vendor/548360.js");
var u = a(require("../vendor/667294.js"));
var s = a(require("../app/156720.js"));
const c = {
  unread: {
    color: "p8uago8x"
  },
  unreadIcon: {
    width: "qdnpk9s2",
    height: "fpwmets0",
    verticalAlign: "md4apq9i",
    backgroundColor: "nsrfiouf",
    borderTopStartRadius: "boajuire",
    borderTopEndRadius: "o93wvyfv",
    borderBottomEndRadius: "i5w8n1e6",
    borderBottomStartRadius: "cnpay6qi"
  },
  icon: {
    display: "l7jjieqr",
    color: "s4k44ver"
  }
};
const d = () => u.default.createElement("div", {
  className: (0, s.default)([c.icon, c.unreadIcon, l.uiMargin.vert2]),
  key: "newsletter-icon-unread"
});