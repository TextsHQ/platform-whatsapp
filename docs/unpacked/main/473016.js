var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RingTheme = undefined;
exports.StatusV3ImageRing = function (e) {
  const {
    stroke: t = 4,
    size: n = 48,
    breakRing: a = true,
    hideWhenNoUnreadStatuses: r = false,
    respectAppTheme: m = false,
    theme: g = c.StatusV3Panel
  } = e;
  const E = (0, u.useModelValues)(e.statusV3, ["unreadCount", "totalCount", "contact"]);
  const v = (0, o.getIsMe)(E.contact) ? 0 : E.unreadCount;
  if (v <= 0 && r || E.totalCount === 0) {
    return null;
  }
  const _ = 100 + t;
  const y = E.totalCount;
  const C = a && y !== 1 ? l.default.createElement(h, {
    totalCount: y,
    unreadCount: v,
    stroke: t,
    respectAppTheme: m
  }) : l.default.createElement(p, {
    className: (0, i.default)(v > 0 ? f(m) : s.read),
    strokeWidth: t
  });
  return l.default.createElement("svg", {
    className: (0, i.default)(d.get(g)),
    width: n,
    height: n,
    viewBox: `0 0 ${_} ${_}`
  }, C);
};
var r = a(require("../vendor/967154.js"));
var o = require("../app/660666.js");
var l = a(require("../vendor/667294.js"));
var i = a(require("../app/156720.js"));
var u = require("../app/655241.js");
const s = {
  businessContactInfoRing: {
    marginTop: "dj1c3cmq",
    position: "lhggkp7q"
  },
  read: {
    stroke: "i2tfkqu4"
  },
  statusV3PanelRing: {
    marginStart: "nxn8agaf",
    marginTop: "kv6wexeh",
    position: "lhggkp7q"
  },
  chatListRing: {
    marginStart: "bx0vhl82",
    marginTop: "ma4rpf0l",
    position: "lhggkp7q"
  },
  unread: {
    stroke: "iedsav3z"
  },
  unreadDarkModeOnly: {
    stroke: "j9ny8kmf"
  }
};
const c = require("../vendor/76672.js").Mirrored(["StatusV3Panel", "BusinessContactInfo", "ChatList"]);
exports.RingTheme = c;
const d = new Map([[c.StatusV3Panel, s.statusV3PanelRing], [c.BusinessContactInfo, s.businessContactInfoRing], [c.ChatList, s.chatListRing]]);
const f = e => e ? s.unread : s.unreadDarkModeOnly;
function p(e) {
  const t = (100 + e.strokeWidth) / 2;
  return l.default.createElement("circle", (0, r.default)({
    cx: t,
    cy: t,
    r: 50,
    fill: "none",
    strokeLinecap: "round"
  }, e));
}
function m(e) {
  let {
    className: t,
    totalDashes: n,
    dashesToDraw: a,
    dashesToOffsetBy: r,
    stroke: o
  } = e;
  let i = 10;
  const u = Math.PI * 50 * 2;
  if (u - n * 10 < 1) {
    i = u / n / 1.2;
  }
  const s = (u - i * n) / n;
  const c = ((e, t, n, a) => e + t * (n + a))(u / 4 - i / 2, r, i, s);
  const d = n !== 1 ? ((e, t, n, a) => new Array(e).fill(undefined).map((r, o) => `${t} ${o === e - 1 ? n - e * (a + t) + a : a}`).join(" "))(a, s, u, i) : undefined;
  return l.default.createElement(p, {
    className: t,
    strokeDashoffset: c,
    strokeDasharray: d,
    strokeWidth: o
  });
}
function h(e) {
  let {
    totalCount: t,
    unreadCount: n,
    stroke: a,
    respectAppTheme: r
  } = e;
  const o = t - n;
  const u = n > 0 ? l.default.createElement(m, {
    className: (0, i.default)(f(r)),
    totalDashes: t,
    dashesToDraw: n,
    dashesToOffsetBy: t,
    stroke: a
  }) : null;
  const c = o > 0 ? l.default.createElement(m, {
    className: (0, i.default)(s.read),
    totalDashes: t,
    dashesToDraw: o,
    dashesToOffsetBy: o,
    stroke: a
  }) : null;
  return l.default.createElement(l.default.Fragment, null, u, c);
}