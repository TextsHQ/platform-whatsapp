var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfirmPopupTheme = exports.ConfirmPopup = undefined;
var i = r(require("../vendor/967154.js"));
var a = r(require("./692629.js"));
var o = r(require("./395767.js"));
var s = require("./81644.js");
var l = require("./118612.js");
var u = require("./617425.js");
var c = require("../vendor/548360.js");
var d = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = p(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("../vendor/667294.js"));
function p(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (p = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const f = require("../vendor/76672.js").Mirrored(["PollsCancelationPrompt"]);
exports.ConfirmPopupTheme = f;
const _ = (e, t) => {
  const {
    buttonAlign: n = "end"
  } = e;
  const r = t => {
    var n;
    t.stopPropagation();
    t.preventDefault();
    if (!((n = e.onCancel) === null || n === undefined)) {
      n.call(e, t);
    }
  };
  const p = e.onOK ? d.default.createElement(a.default, {
    testid: "popup-controls-ok",
    type: e.okButtonType ? e.okButtonType : "primary",
    onClick: t => {
      var n;
      t.stopPropagation();
      t.preventDefault();
      if (!((n = e.onOK) === null || n === undefined)) {
        n.call(e);
      }
    },
    disabled: e.okDisabled,
    spinner: e.okSpinner === true,
    xstyle: e.buttonStyle
  }, e.okText != null ? e.okText : (0, o.default)("OK")) : null;
  const _ = e.onCancel ? d.default.createElement(a.default, {
    testid: "popup-controls-cancel",
    type: e.onOK ? e.theme === f.PollsCancelationPrompt ? "warning-secondary" : "secondary" : "primary",
    disabled: e.cancelDisabled,
    onClick: r,
    xstyle: e.buttonStyle
  }, e.cancelText || c.fbt._("Cancel", null, {
    hk: "H0gNq"
  })) : null;
  const m = e.extraButtonProps ? d.default.createElement(g, (0, i.default)({
    xstyle: e.buttonStyle
  }, e.extraButtonProps)) : null;
  const h = {
    escape: e.onCancel ? r : () => {}
  };
  let y;
  if (m) {
    var E;
    const t = [_, m, p];
    y = d.default.createElement(u.ButtonGroup, {
      direction: (E = e.buttonsDirection) !== null && E !== undefined ? E : "vertical",
      align: n
    }, t[0], t[1], t[2]);
  } else {
    var S;
    y = d.default.createElement(u.ButtonGroup, {
      direction: (S = e.buttonsDirection) !== null && S !== undefined ? S : "horizontal",
      align: n
    }, _, p);
  }
  return d.default.createElement(s.HotKeys, {
    handlers: h,
    ref: t
  }, d.default.createElement(l.Modal, {
    actions: y,
    controlsStyle: e.buttonGroupStyle,
    children: e.children,
    cover: e.cover,
    onDragChange: e.onDragChange,
    onOverlayClick: e.onOverlayClick,
    onDrop: e.onDrop,
    type: e.type,
    title: e.title,
    testid: e.testid,
    overflow: e.overflow,
    ariaLabel: e.ariaLabel
  }));
};
function g(e) {
  const {
    primary: t = false,
    disabled: n = false,
    spinner: r = false,
    text: i,
    onClick: o,
    xstyle: s
  } = e;
  return d.default.createElement(a.default, {
    testid: "popup-controls-extra",
    type: t ? "primary" : "secondary",
    onClick: e => {
      e.stopPropagation();
      e.preventDefault();
      o();
    },
    disabled: n,
    spinner: r,
    xstyle: s
  }, i);
}
const m = (0, d.forwardRef)(_);
exports.ConfirmPopup = m;
m.displayName = "ConfirmPopup";