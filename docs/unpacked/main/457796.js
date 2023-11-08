var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icons = function (e) {
  const {
    unreadCount: t,
    hideArchivedIcon: n,
    unreadMentionIcon: a,
    smallUnread: v,
    hidePin: y,
    fakePin: C,
    hideMuteIcon: b
  } = e;
  const M = (0, g.useModelValues)(e.chat, ["id", "archive", "pin", "unopenedByAssignedAgent", "isAssignedToMe", "isNewsletter"]);
  const S = (0, g.useModelValues)(e.mute, ["isMuted"]);
  const T = (0, g.useModelValues)(e.settings, ["showArchiveV2"]);
  const w = M.id;
  const A = (0, E.default)(w);
  const P = p.default.equals(A, w);
  const O = (M.archive && (0, u.archiveV2Supported)() && T.showArchiveV2 ? b : M.isNewsletter || !S.isMuted) ? null : h.default.createElement("div", {
    className: r.default.icon,
    key: "icon-muted",
    "aria-label": m.fbt._("Muted chat", null, {
      hk: "FRvtZ"
    })
  }, h.default.createElement(s.MutedIcon, null));
  const k = y !== true && M.pin != null && M.pin > 0 || C === true ? h.default.createElement("div", {
    className: (0, l.classnamesConvertMeToStylexPlease)(r.default.icon, r.default.iconPinned),
    key: "icon-pinned"
  }, h.default.createElement(c.Pinned2Icon, null)) : null;
  const D = v === true ? h.default.createElement(_, null) : h.default.createElement("div", {
    className: r.default.icon,
    key: "icon-unread"
  }, h.default.createElement(o.default, {
    count: t
  }));
  const I = t !== 0 ? D : null;
  const R = (0, d.default)("MD_EXTENSION") && M.isAssignedToMe && M.unopenedByAssignedAgent && !I ? h.default.createElement("div", {
    className: r.default.icon,
    key: "icon-unread"
  }, h.default.createElement(o.default, {
    count: 0
  })) : null;
  const N = a ? h.default.createElement("div", {
    className: (0, l.classnamesConvertMeToStylexPlease)(r.default.icon, r.default.iconMentions),
    key: "icon-mentions",
    "aria-label": m.fbt._("@ message", null, {
      hk: "2UzXVt"
    })
  }, h.default.createElement(i.MentionsIcon, {
    className: r.default.iconMentions
  })) : null;
  const x = M.archive && !n ? h.default.createElement("span", {
    className: (0, l.classnamesConvertMeToStylexPlease)(r.default.icon, r.default.archived),
    key: "icon-archived"
  }, m.fbt._("Archived", null, {
    hk: "1roeyQ"
  })) : null;
  return h.default.createElement(f.default, {
    transitionName: "pop",
    enter: P,
    exit: P
  }, O, x, k, N, I, R);
};
exports.UnreadIndicator = undefined;
var r = a(require("./955035.js"));
var o = a(require("./683874.js"));
var l = require("../app/396574.js");
var i = require("./229281.js");
var u = require("../app/97858.js");
var s = require("./273757.js");
var c = require("./121528.js");
var d = a(require("../main-chunk/806077.js"));
var f = a(require("../app/844453.js"));
var p = a(require("../app/124928.js"));
var m = require("../vendor/548360.js");
var h = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = v(t);
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
}(require("../vendor/667294.js"));
var g = require("../app/655241.js");
var E = a(require("../app/49710.js"));
function v(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (v = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const _ = (0, h.forwardRef)((e, t) => {
  let {
    noMargin: n,
    noMarginRight: a
  } = e;
  return h.default.createElement("div", {
    ref: t,
    className: (0, l.classnamesConvertMeToStylexPlease)({
      [r.default.noMarginRight]: a,
      [r.default.noMargin]: n,
      [r.default.icon]: true,
      [r.default.iconSmallUnread]: true
    }),
    key: "icon-unread"
  });
});
exports.UnreadIndicator = _;
_.displayName = "UnreadIndicator";