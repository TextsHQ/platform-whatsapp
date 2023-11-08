var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MentionBase = function (e) {
  var t;
  const {
    onClick: n,
    theme: r,
    selectable: p,
    text: f,
    jid: _,
    ariaLabel: g,
    lastMessage: m
  } = e;
  const h = (0, i.dir)(f) || "auto";
  const y = (t = r == null ? undefined : r.quoted) !== null && t !== undefined && t;
  const E = (0, s.default)(f, [[[o.default, {
    selectable: p
  }]]], l.default, undefined, 1 / 0);
  return u.default.createElement(a.SelectableSpan, {
    dir: "auto",
    "data-jid": _,
    "data-display": f,
    className: (0, c.default)((n && !y) === true && d.matchedMention, m === true && d.lastMessage),
    onClick: n,
    plainText: `@${f}`,
    selectable: p,
    "aria-label": g,
    selectAll: true,
    appTextTemplate: `​${_}​`
  }, "@", u.default.createElement("span", {
    dir: h
  }, E));
};
var i = require("./12132.js");
var a = require("./306703.js");
var o = r(require("./82436.js"));
var s = r(require("./146375.js"));
var l = r(require("./893874.js"));
var u = r(require("../vendor/667294.js"));
var c = r(require("./156720.js"));
const d = {
  matchedMention: {
    cursor: "ajgl1lbb",
    color: "o0rubyzf"
  },
  lastMessage: {
    fontWeight: "hnx8ox4h"
  }
};