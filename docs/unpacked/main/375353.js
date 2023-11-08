var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupResult = function (e) {
  let {
    theme: t,
    groupMetadata: n,
    onMouseDown: a,
    onMouseUp: r,
    onMouseEnter: l,
    term: u,
    selected: s
  } = e;
  const {
    id: c,
    subject: f
  } = (0, M.useModelValues)(n, ["id", "subject"]);
  const m = p.Search({
    terms: u ? [u] : [],
    boundary: true
  });
  return y.default.createElement("div", {
    className: (0, o.classnamesConvertMeToStylexPlease)({
      [h.default.mediaCaption]: t === "mediaCaption",
      [h.default.selected]: s === true,
      [h.default.mentionsResult]: true
    }),
    onMouseDown: a,
    onMouseUp: r,
    onMouseEnter: l
  }, y.default.createElement("div", {
    className: h.default.resultImage
  }, y.default.createElement(i.DetailImage, {
    id: c,
    size: 32
  })), y.default.createElement("div", {
    className: h.default.textContact,
    dir: "auto"
  }, y.default.createElement(d.EmojiText, {
    text: f,
    formatters: m,
    ellipsify: true
  })), null);
};
exports.UserResult = function (e) {
  let {
    theme: t,
    contact: n,
    onMouseDown: a,
    onMouseUp: M,
    onMouseEnter: T,
    term: A,
    selected: P,
    elevatedPushNamesEnabled: O = false
  } = e;
  const [k, D, I, R, N, x, L, j, B] = (0, b.useContactValues)(n.id, [l.getId, m.getFormattedName, l.getIsMyContact, l.getNotifyName, m.getFormattedPhone, m.getTextStatusString, m.getTextStatusEmoji, m.getTextStatusLastUpdateTime, m.getTextStatusExpiryTs]);
  const F = (0, E.shouldDisplayTextStatus)(x, L, j, B);
  (0, S.default)({
    contact: n
  });
  const G = p.SearchName({
    terms: A ? [A] : []
  });
  let U;
  if (L != null) {
    const e = s.EmojiUtil.normalizeEmojiFromString(L);
    if (e != null) {
      U = y.default.createElement("div", {
        className: (0, C.default)(v.uiPadding.end2)
      }, y.default.createElement(c.default, {
        key: "low-res",
        className: (0, C.default)(w),
        emoji: e,
        size: "small"
      }));
    }
  }
  const W = F && y.default.createElement(f.FlexColumn, null, y.default.createElement(f.FlexRow, {
    align: "center"
  }, U, Boolean(x) && y.default.createElement("div", null, y.default.createElement(_.WDSTextSmall, {
    as: "div",
    paddingEnd: 2,
    color: "secondaryEmphasized"
  }, x))));
  const H = y.default.createElement(y.default.Fragment, null, y.default.createElement("div", {
    className: h.default.textElevatedPushname,
    dir: "auto"
  }, y.default.createElement(d.EmojiText, {
    text: (0, r.getFormattedNotifyName)(R),
    ariaLabel: (0, r.getAccessibleNotifyName)(R),
    formatters: G
  })), y.default.createElement("div", {
    className: h.default.textPhoneNumber,
    dir: "auto"
  }, y.default.createElement(d.EmojiText, {
    text: N,
    formatters: G
  })));
  const V = y.default.createElement(y.default.Fragment, null, y.default.createElement("div", {
    className: h.default.textContact,
    dir: "auto"
  }, y.default.createElement(d.EmojiText, {
    text: D,
    formatters: G
  })), y.default.createElement("div", {
    className: h.default.textPushname,
    dir: "auto"
  }, I || D !== N || R == null ? null : y.default.createElement(d.EmojiText, {
    text: `~${R}`,
    formatters: G,
    ellipsify: true
  })));
  const q = !I && (0, u.pushNameCanBeUsed)(n) && O;
  const Y = (0, g.receiveTextStatusForNewSurfacesEnabled)() ? y.default.createElement(f.FlexRow, {
    align: "center"
  }, y.default.createElement(f.FlexItem, null, y.default.createElement("div", {
    className: h.default.resultImage
  }, y.default.createElement(i.DetailImage, {
    id: k,
    size: 32
  }))), y.default.createElement(f.FlexColumn, null, y.default.createElement(f.FlexRow, null, q ? H : V, null), y.default.createElement(f.FlexItem, null, W))) : y.default.createElement(y.default.Fragment, null, y.default.createElement("div", {
    className: h.default.resultImage
  }, y.default.createElement(i.DetailImage, {
    id: k,
    size: 32
  })), q ? H : V, null);
  return y.default.createElement("div", {
    className: (0, o.classnamesConvertMeToStylexPlease)({
      [h.default.mediaCaption]: t === "mediaCaption",
      [h.default.selected]: P === true,
      [h.default.mentionsResult]: true
    }),
    onMouseDown: a,
    onMouseUp: M,
    onMouseEnter: T
  }, Y);
};
var r = require("../app/642838.js");
var o = require("../app/396574.js");
var l = require("../app/660666.js");
var i = require("../app/23641.js");
var u = require("../app/235630.js");
var s = require("../app/70354.js");
var c = a(require("../app/225148.js"));
var d = require("../app/305521.js");
var f = require("../app/690495.js");
var p = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = T(t);
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
var m = require("../app/714574.js");
var h = a(require("./234412.js"));
var g = require("../app/491805.js");
var E = require("../app/596328.js");
var v = require("../app/676345.js");
var _ = require("../app/851488.js");
var y = a(require("../vendor/667294.js"));
var C = a(require("../app/156720.js"));
var b = require("../app/379811.js");
var M = require("../app/655241.js");
var S = a(require("./261684.js"));
function T(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (T = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const w = {
  transform: "mb6zq69i"
};