var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StickerSuggestionsPanelContent = exports.STICKER_WIDTH = undefined;
var r = require("../app/81644.js");
var o = a(require("./101825.js"));
var l = a(require("./767569.js"));
var i = a(require("./500877.js"));
var u = require("./414493.js");
var s = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = d(t);
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
var c = a(require("../app/156720.js"));
function d(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (d = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const f = parseInt(i.default["-sticker-width"].replace(/px$/, ""), 10);
exports.STICKER_WIDTH = f;
const p = {
  display: "p357zi0d",
  marginTop: "iin4x6c7",
  marginEnd: "claouzo6",
  marginBottom: "ngycyvoj",
  marginStart: "oz0g9ue8",
  cursor: "ajgl1lbb",
  borderTopStartRadius: "f10hkraf",
  borderTopEndRadius: "q0464ah5",
  borderBottomEndRadius: "if2adgmh",
  borderBottomStartRadius: "vligc0dz"
};
const m = (0, s.forwardRef)((e, t) => {
  const {
    stickers: n,
    onFocusRelease: a,
    maxWidth: i,
    onSelect: d
  } = e;
  const [m, h] = (0, s.useState)(-1);
  const g = (0, s.useRef)(null);
  const E = (0, s.useRef)(null);
  const v = Math.floor((i - f * 2) / f);
  const _ = Math.min(n.length, v);
  const y = () => {
    if (!(a == null)) {
      a();
    }
  };
  const C = e => {
    let t = false;
    const a = (e => {
      var t;
      if ((t = n[e]) !== null && t !== undefined) {
        return t;
      } else {
        return null;
      }
    })(e != null ? e : m);
    if (a != null) {
      __LOG__(2)`WAWebStickerSuggestionsPanelContent.react sticker at index ${m} selected`;
      (0, o.default)(a);
      d(a);
      t = true;
    } else {
      __LOG__(3)`WAWebStickerSuggestionsPanelContent.react sticker at index ${m} not found`;
    }
    y();
    return t;
  };
  const b = () => {
    h(Math.min(m + 1, _ - 1));
  };
  const M = () => {
    h(Math.max(m - 1, 0));
  };
  (0, s.useEffect)(() => {
    const e = Math.min(m, n.length - 1);
    h(e);
  }, [m, n]);
  (0, s.useEffect)(() => {
    var e;
    if (!(g == null || (e = g.current) === null || e === undefined)) {
      e.focus();
    }
  }, []);
  (0, s.useImperativeHandle)(t, () => ({
    moveSelectionLeft: M,
    moveSelectionRight: b,
    pickSelectedSticker: C
  }));
  const S = n.slice(0, _).map((e, t) => {
    const n = m === t;
    return s.default.createElement(l.default, {
      key: e.id,
      ref: n ? E : null,
      selected: n,
      sticker: e,
      onClick: (e, n) => {
        a = t;
        r = n;
        (0, u.stopEvent)(r);
        return void (r.target instanceof HTMLElement && (a !== m && h(a), C(a)));
        var a;
        var r;
      },
      theme: "stickerExpressionsPanel"
    });
  });
  return s.default.createElement(r.HotKeys, {
    ref: g,
    style: {
      width: _ * f
    },
    className: (0, c.default)(p),
    onMouseDown: e => {
      (0, u.stopEvent)(e);
    },
    handlers: {
      left: M,
      right: b,
      escape: y
    }
  }, S);
});
exports.StickerSuggestionsPanelContent = m;
m.displayName = "StickerSuggestionsPanelContent";