var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    base: t,
    unicode: n,
    action: a,
    children: s
  } = e;
  return i.default.createElement("div", {
    className: (0, u.default)(c)
  }, i.default.createElement("span", {
    className: (0, u.default)(d)
  }, i.default.createElement(r.DropdownItem, {
    type: "emoji-grid",
    key: "base",
    testid: "mi-emoji-variant",
    action: e => a(e, n, t)
  }, i.default.createElement(o.EmojiText, {
    text: t,
    formatters: l.LargeEmojiOnly(),
    tabIndex: "-1"
  }))), i.default.createElement("div", {
    className: (0, u.default)(f)
  }, s));
};
var r = require("../app/675085.js");
var o = require("../app/305521.js");
var l = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = s(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../app/675886.js"));
var i = a(require("../vendor/667294.js"));
var u = a(require("../app/156720.js"));
function s(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (s = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const c = {
  display: "p357zi0d",
  flexDirection: "f8m0rgwh",
  alignItems: "gndfcl4n",
  justifyContent: "ac2vgrno"
};
const d = {
  width: "b6qzmhfs",
  paddingBottom: "ekpn4oxx",
  marginBottom: "t4zgqcuo",
  textAlign: "qfejxiq4",
  borderBottom: "afzp6nl2"
};
const f = {
  display: "p357zi0d",
  flexWrap: "lkhkxwyq",
  justifyContent: "ac2vgrno",
  maxWidth: "j2j5w4e7"
};