var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    chat: t,
    bulletPointsEnabled: n,
    editRestrictionText: a,
    testid: M,
    containerTestId: S,
    emptyValuePlaceholder: w,
    setIsEditing: A,
    focusOnMount: P
  } = e;
  const O = (0, _.useRef)();
  const [k, D] = (0, _.useState)(e.description);
  const [I, R] = (0, _.useState)(false);
  const [N, x] = (0, _.useState)(e.showFullDescription || !(k && k.length > 30));
  const L = (0, b.default)();
  if ((0, C.default)(e.description) !== e.description && k !== e.description) {
    D(e.description);
  }
  const j = a != null ? () => {
    f.ModalManager.open(_.default.createElement(i.ConfirmPopup, {
      onOK: () => f.ModalManager.close(),
      okText: (0, s.default)("OK")
    }, a));
  } : null;
  if (h.ServerProps.groupDescLength <= 0) {
    return null;
  }
  const B = {
    textLimit: N ? 1 / 0 : u.default.GROUP_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH,
    readMoreText: v.fbt._("Read more", null, {
      hk: "2pss9t"
    }),
    onReadMore: () => {
      x(true);
    },
    ellipsify: true,
    multiline: true,
    direction: "auto",
    inferLinesDirection: true,
    formatters: t.isTrusted() ? c.TrustedGroupDesc({
      links: d.findLinks(k),
      bulletPointsEnabled: n
    }) : c.UntrustedGroupDesc({
      bulletPointsEnabled: n
    })
  };
  const F = [p.TextInputCustomStyleThemes.groupInfoName, p.TextInputCustomStyleThemes.chatInfoDefaultText];
  let G = _.default.createElement("div", {
    className: (0, y.default)(T, E.uiMargin.end24)
  }, _.default.createElement(p.RichTextField, {
    ref: O,
    testid: M,
    value: k,
    emptyValuePlaceholder: w,
    emojiTextSettingsInLockMode: B,
    editable: e.canSetDescription,
    pending: I,
    showRemaining: true,
    maxLength: h.ServerProps.groupDescLength,
    onChange: t => {
      let {
        text: n
      } = t;
      D(a = n);
      return void ((r = e.onChange) === null || r === undefined || r.call(e, a));
      var a;
      var r;
    },
    onSave: () => {
      if (!e.canSetDescription) {
        return;
      }
      const n = k || "";
      const a = n.match(/\r\n/gm) ? "\r\n" : "\n";
      const l = new RegExp(`^(${a}{2,})([^\n])`, "gm");
      const i = n.replace(l, `${a}$2`);
      if (i.trim() === e.description || i === "" && e.description == null) {
        return D(i);
      }
      R(true);
      (0, o.default)(e.setDescriptionAction(t, i), L).then(() => {}).catch((0, r.catchAbort)(() => {})).catch(() => {
        __LOG__(3)`description_input:onSetDescription failed`;
      }).finally(() => {
        D(e.description);
        R(false);
      });
    },
    onCancel: () => {
      D(e.description);
    },
    multiline: true,
    editRestrictionInfo: e.canSetDescription || t.isSuspendedOrTerminated() ? undefined : j,
    supportsEmoji: true,
    lockable: true,
    lowProfile: true,
    customStyleThemes: F,
    theme: "small",
    showEditOnHover: true,
    constrainedWidth: true,
    textFormatEnabled: true,
    bulletPointsEnabled: n,
    pasteFromHTML: (0, m.improvedMessageComposerEnabled)(),
    textFormatShortcutsEnabled: (0, m.improvedMessageComposerEnabled)(),
    onBlur: e.onBlur,
    startActive: P,
    focusOnMount: P,
    setIsEditing: A
  }));
  if (!(k || e.canSetDescription)) {
    G = null;
  }
  const U = e.creationString != null ? _.default.createElement(g.TextDiv, {
    theme: "muted"
  }, e.creationString) : null;
  if (!G && !U) {
    return null;
  }
  return _.default.createElement(l.ChatInfoDrawerSection, {
    testid: S,
    xstyle: E.uiPadding.vert20
  }, G, U);
};
var r = require("../app/898817.js");
var o = a(require("../app/229922.js"));
var l = require("./464659.js");
var i = require("../app/103440.js");
var u = a(require("../app/846870.js"));
var s = a(require("../app/395767.js"));
var c = S(require("../app/675886.js"));
var d = S(require("../app/446303.js"));
var f = require("../app/114850.js");
var p = require("./202391.js");
var m = require("../app/858486.js");
var h = require("../app/937001.js");
var g = require("../app/180519.js");
var E = require("../app/676345.js");
var v = require("../vendor/548360.js");
var _ = S(require("../vendor/667294.js"));
var y = a(require("../app/156720.js"));
var C = a(require("../app/49710.js"));
var b = a(require("../app/895851.js"));
function M(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (M = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function S(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = M(t);
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
const T = {
  whiteSpace: "bbv8nyr4"
};