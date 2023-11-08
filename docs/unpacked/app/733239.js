var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaType = undefined;
exports.ModalManagerComponent = function (e) {
  const {
    type: t,
    contextMenuRef: n
  } = e;
  const r = (0, _.useRef)(null);
  const h = (0, _.useRef)(false);
  const [y, T] = (0, _.useState)(undefined);
  const [M, A] = (0, _.useState)(null);
  const [b, C] = (0, _.useState)(E);
  const [P, O] = (0, _.useState)(undefined);
  const [I, R] = (0, _.useState)(false);
  const N = () => {
    if (!r.current) {
      return;
    }
    const e = r.current.getElement();
    if (e && !e.contains(document.activeElement)) {
      o.default.focus(e);
    }
  };
  const D = () => {
    if (!r.current) {
      return;
    }
    const e = r.current.getElement();
    if (e) {
      o.default.focus(e);
    }
  };
  const w = e => {
    const t = e.relatedTarget;
    const r = n == null ? undefined : n.current;
    const i = !!r && r.isOpen();
    return t instanceof HTMLElement && !e.currentTarget.contains(t) && (a = t, !((o = document.getElementById(c.ANCHOR_PORTAL_ID)) === null || o === undefined ? undefined : o.contains(a))) && !i && h.current === false;
    var a;
    var o;
  };
  const L = e => {
    if (w(e)) {
      N();
    }
  };
  const k = e => {
    if (y) {
      T(undefined);
      A(null);
      if (e) {
        C(e);
      }
      h.current = true;
    }
  };
  const G = e => {
    if (e === M) {
      k();
      u.ModalManager.trigger(`close_${t}`);
    }
  };
  let U;
  (0, m.useListener)(u.ModalManager, `open_${t}`, function (e) {
    let n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let r = n.transition || E;
    const {
      uim: a,
      blockClose: o
    } = n;
    if (y) {
      r = S;
    }
    const s = (0, i.default)(`ModalManager${t}`);
    let l = e;
    if (t === v) {
      l = (0, _.cloneElement)(e, {
        requestFocus: D
      });
    }
    h.current = false;
    g.unstable_batchedUpdates(() => {
      T(l);
      A(s);
      C(r);
      O(a);
      R(o != null && o);
    });
  });
  (0, m.useListener)(u.ModalManager, `exists_${t}`, e => {
    e(h.current !== true && !!y);
  });
  (0, m.useListener)(u.ModalManager, `close_${t}`, k);
  (0, m.useListener)(u.ModalManager, "get_ref", e => {
    var t;
    e((t = r.current) === null || t === undefined ? undefined : t.getElement());
  });
  if (y) {
    U = _.default.createElement(p.UIE, {
      displayName: `Modal${(0, a.default)(e.type)}`,
      escapable: !I,
      key: M,
      ref: r,
      requestFocus: N,
      requestDismiss: G.bind(null, M)
    }, _.default.createElement(s.default, {
      onBlur: L
    }, y));
  }
  return _.default.createElement(l.MaybeStrictMode, null, _.default.createElement(d.default.Consumer, null, e => _.default.createElement(d.default.Provider, {
    value: P || e
  }, _.default.createElement(f.default, {
    transitionName: b
  }, U))));
};
exports.ModalType = undefined;
var i = r(require("../vendor/873955.js"));
var a = r(require("./817173.js"));
var o = r(require("./335540.js"));
var s = r(require("./241115.js"));
var l = require("./48343.js");
var u = require("./114850.js");
var c = require("./411342.js");
var d = r(require("./8073.js"));
var p = require("./392632.js");
var f = r(require("./844453.js"));
var _ = y(require("../vendor/667294.js"));
var g = y(require("../vendor/973935.js"));
var m = require("./808446.js");
function h(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (h = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function y(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = h(t);
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
}
const E = "modal";
const S = "none";
const v = "modal";
exports.ModalType = v;
exports.MediaType = "media";