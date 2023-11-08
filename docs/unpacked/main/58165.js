var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/396574.js");
var o = require("../app/780549.js");
var l = require("../app/174834.js");
var i = a(require("./222437.js"));
var u = require("../app/305521.js");
var s = C(require("../app/675886.js"));
var c = a(require("./69750.js"));
var d = C(require("../app/446303.js"));
var f = a(require("./929796.js"));
var p = require("../app/180519.js");
var m = require("../app/392632.js");
var h = require("../app/676345.js");
var g = require("../vendor/548360.js");
var E = C(require("../vendor/667294.js"));
var v = a(require("../app/156720.js"));
var _ = require("../app/655241.js");
function y(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (y = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function C(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = y(t);
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
}
function b(e) {
  var t;
  return ((t = e == null ? undefined : e.split("\n")) !== null && t !== undefined ? t : []).length;
}
const M = (e, t) => {
  const {
    chat: n,
    onClose: a
  } = e;
  const y = (0, _.useOptionalModelValues)(e.groupMetadata, ["displayedDesc"]);
  const C = (0, E.useRef)(null);
  const M = (0, E.useRef)(null);
  const S = function (e) {
    if (e == null) {
      return undefined;
    } else {
      return e.displayedDesc;
    }
  }(y);
  const [T, w] = (0, E.useState)(S);
  const A = function (e, t) {
    const n = e == null ? undefined : e.split("\n");
    if (n == null) {
      return undefined;
    } else {
      return n.slice(0, t).join("\n");
    }
  }(T, 1);
  const [P, O] = (0, E.useState)(false);
  const [k, D] = (0, E.useState)(true);
  (0, E.useEffect)(() => {
    var e;
    var t;
    var n;
    var a;
    var r;
    if (!C.current || !M.current) {
      return;
    }
    const o = (e = (t = C.current) === null || t === undefined ? undefined : t.clientHeight) !== null && e !== undefined ? e : 0;
    const l = (n = (a = M.current) === null || a === undefined || (r = a.getElement()) === null || r === undefined ? undefined : r.offsetHeight) !== null && n !== undefined ? n : 0;
    O(b(T) > 1 || o < l);
    D(false);
  }, [T]);
  if (T !== S) {
    w(S);
    O(false);
    D(true);
  }
  if (!T) {
    return null;
  }
  const I = e.chat.isTrusted() ? s.TrustedGroupDesc({
    links: d.findLinks(T),
    bulletPointsEnabled: (0, l.richCommunityDescriptionEnabled)()
  }) : s.UntrustedGroupDesc({
    bulletPointsEnabled: (0, l.richCommunityDescriptionEnabled)()
  });
  const R = E.default.createElement("div", {
    className: c.default.more,
    role: "button",
    onClick: () => {
      o.Cmd.chatInfoDrawer(n, {
        showFullGroupDescription: true
      });
    }
  }, g.fbt._("Read more", null, {
    hk: "2DvSvh"
  }));
  return E.default.createElement(m.UIE, {
    displayName: "GroupDesc",
    escapable: true,
    requestDismiss: a
  }, E.default.createElement(i.default, {
    ref: t,
    onClose: a
  }, E.default.createElement(p.TextDiv, {
    theme: "title"
  }, g.fbt._("Group Description", null, {
    hk: "3Cs2oY"
  })), E.default.createElement(f.default, {
    ref: C,
    onResize: e => {
      var t;
      var n;
      var a;
      let {
        height: r
      } = e;
      const o = (t = (n = M.current) === null || n === undefined || (a = n.getElement()) === null || a === undefined ? undefined : a.offsetHeight) !== null && t !== undefined ? t : 0;
      O(b(T) > 1 || r < o);
    },
    className: c.default.body
  }, E.default.createElement(p.TextSpan, {
    theme: "small",
    className: (0, r.classnamesConvertMeToStylexPlease)({
      [c.default.hidden]: k,
      [c.default.text]: true
    })
  }, E.default.createElement(u.EmojiText, {
    ref: M,
    text: A,
    selectable: true,
    formatters: I,
    className: c.default.desc,
    multiline: true
  }), P && E.default.createElement(E.default.Fragment, null, E.default.createElement("span", {
    className: (0, v.default)(h.uiMargin.top1)
  }, "..."), R)))));
};
var S = (0, E.forwardRef)(M);
exports.default = S;