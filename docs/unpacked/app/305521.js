var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmojiText = exports.EMOJI_SIZE = undefined;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/23279.js"));
var o = v(require("./12132.js"));
var s = r(require("./670983.js"));
var l = require("./354458.js");
var u = require("./396574.js");
var c = require("./306703.js");
var d = require("./70354.js");
var p = r(require("./146375.js"));
var f = v(require("./675886.js"));
var _ = r(require("./893874.js"));
var g = r(require("./932325.js"));
var m = require("./696430.js");
var h = require("./368170.js");
var y = v(require("../vendor/667294.js"));
var E = r(require("./156720.js"));
function S(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (S = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function v(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = S(t);
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
const T = {
  breakWord: {
    wordBreak: "cw3vfol9"
  },
  clickable: {
    cursor: "ajgl1lbb",
    ":hover": {
      textDecoration: "edeob0r2"
    }
  },
  dirMismatch: {
    display: "f804f6gw",
    width: "ln8gz9je"
  },
  ellipsify: {
    flexGrow: "ggj6brxn",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    position: "g0rxnol2",
    textOverflow: "lhj4utae",
    whiteSpace: "le5p0ye3"
  },
  inlineblock: {
    display: "l7jjieqr"
  },
  multiline: {
    whiteSpace: "i033jvx7"
  },
  preformatted: {
    whiteSpace: "ag95hn57",
    width: "boenfpwf",
    display: "l7jjieqr"
  },
  botEditTextAnimation: {
    animationName: "fry2mfyn",
    animationDuration: "oauresqk",
    display: "ew8mgplc",
    animationTimingFunction: "gaqnkt02"
  }
};
const M = {
  SMALL: "SMALL",
  LARGE: "LARGE"
};
exports.EMOJI_SIZE = M;
const A = 4096;
const b = /^\r?\n/;
function C(e) {
  return d.EmojiUtil.containsEmoji(e.substring(0, A));
}
class P extends y.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      text: String(this.props.text || ""),
      ellipsified: null
    };
    this.refContainer = (0, y.createRef)();
    this._registeredListener = false;
    this._recompute = (0, a.default)(() => {
      this.setState({
        ellipsified: null
      }, this.ellipsify);
    }, 10);
    this._buildBidiModel = e => e.reduce((e, t) => {
      if (typeof t == "string") {
        const n = t.split(/(\r?\n|\r)/g).map(e => ({
          dir: o.dir(e),
          content: e
        }));
        return e.concat(n);
      }
      e.push({
        content: t
      });
      return e;
    }, []);
    this.ellipsify = () => {
      const e = this.refContainer.current;
      if (!e) {
        return;
      }
      const t = (0, s.default)(e.parentElement, "node.parentElement");
      const n = e.querySelectorAll("img");
      if (!n.length) {
        return;
      }
      const r = e.clientWidth;
      e.style.overflow = "visible";
      const i = e.clientWidth !== r;
      e.style.overflow = "hidden";
      if (!i) {
        return;
      }
      const a = Boolean(g.default.isRTL()) === Boolean(this.props.dirMismatch);
      const o = n[function (e, t, n) {
        let r = 0;
        for (; r < e.length;) {
          const i = e[r];
          if (n && i.offsetLeft + i.clientWidth >= t) {
            break;
          }
          if (!n && i.offsetLeft <= t) {
            break;
          }
          r++;
        }
        return r;
      }(n, a ? t.clientWidth - function (e, t) {
        let n = 0;
        const {
          childNodes: r
        } = e;
        for (let e = 0; e < r.length; e++) {
          const i = r[e];
          if (i === t) {
            break;
          }
          n += i instanceof Element ? i.clientWidth : 0;
        }
        return n;
      }(t, e) - 12 : 12, a)];
      this.setState({
        ellipsified: I(e, o)
      });
    };
    this._ellipsifyCheck = () => C(this.state.text) && this.ellipsify();
    this._explodeOutputByLines = (e, t) => {
      const {
        direction: n
      } = this.props;
      const r = [];
      const i = this._buildBidiModel(e);
      let a = [];
      let o = n;
      if (!(n !== "auto" && n !== "inherit")) {
        o = null;
      }
      const s = function (e) {
        let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
        const i = o == null || n == null || o === n;
        const s = i ? null : o;
        const l = !i || o === "rtl" !== g.default.isRTL();
        const u = l ? (0, E.default)(T.dirMismatch) : null;
        r.push(y.default.createElement("span", {
          key: e,
          dir: s,
          className: u
        }, a, t ? String.fromCodePoint(8230) : null));
      };
      for (let e = 0; e < i.length; e++) {
        const t = i[e];
        if (o !== t.dir && o != null && t.dir !== undefined) {
          s(e);
          a = [];
        }
        if (t.dir !== undefined) {
          o = t.dir;
        }
        a.push(t.content);
      }
      s(i.length, t);
      return r;
    };
    this._registerResizeListener = () => {
      if (!this._registeredListener) {
        this._registeredListener = true;
        this.props.listeners.add(window, "resize", this._recompute);
      }
    };
    this.componentDidMount = () => {
      if (!h.UA.supportsEmojiEllipsification && this.props.ellipsify && C(this.state.text)) {
        this._registerResizeListener();
      }
      if (!h.UA.supportsEmojiEllipsification && this.props.ellipsify) {
        this._ellipsifyCheck();
      }
    };
    this._unregisterResizeListener = () => {
      if (this._registeredListener) {
        this._registeredListener = false;
        this.props.listeners.remove(window, "resize", this._recompute);
      }
    };
    this.render = () => {
      var e;
      var t;
      var n;
      if (!this.state.text) {
        return null;
      }
      const {
        onClick: r,
        ellipsify: i,
        dirMismatch: a,
        inferLinesDirection: o,
        inlineblock: s,
        direction: d,
        textLimit: g,
        multiline: m,
        preformatted: h,
        breakWord: S,
        emojiXstyle: v,
        lastBotEditBodyLength: M
      } = this.props;
      const b = this.state.ellipsified ? this.state.ellipsified : this.state.text;
      const C = d === "inherit" ? null : d || "auto";
      const P = !!this.props.selectable;
      const O = this.props.formatters || f.EmojiOnly({
        selectable: P,
        emojiXstyle: v
      });
      let I = g || 1 / 0;
      if (i && b.length > A && I > A) {
        I = A;
      }
      const R = (0, u.classnamesConvertMeToStylexPlease)(this.props.className, (0, E.default)(!!i && T.ellipsify, !!s && T.inlineblock, !!r && T.clickable, a && !o && T.dirMismatch, m && T.multiline, h && T.preformatted, S && T.breakWord, this.props.xstyle));
      let N = b;
      let L = null;
      const k = (0, l.isBotReceiveEnabled)() && !(0, l.isBotPerWordStreamingEnabled)();
      if (k && M != null && !Number.isNaN(M)) {
        N = b.slice(0, M);
        L = b.slice(M);
      }
      const G = (0, p.default)(N, O, _.default, undefined, I);
      if (k && L != null) {
        const e = (0, p.default)(L, O, _.default, undefined, I);
        const t = 100;
        let n = 0;
        for (; n++ <= t && !D(G, e) && w(G, e););
        if (n >= t) {
          __LOG__(4, undefined, new Error())`[EmojiText] Exceeded max iteration count while processing bot edit message for lists. Check for a potential infinite loop.`;
        }
        G.push(y.default.createElement("p", {
          key: "botMsgEdit",
          className: (0, E.default)(T.botEditTextAnimation)
        }, e));
      }
      const U = !!this.state.ellipsified || b.length > I;
      const x = this.props.inferLinesDirection ? this._explodeOutputByLines(G, U) : G;
      const B = (e = this.props.title) !== null && e !== undefined ? e : this.state.text;
      const F = (t = this.props.ariaLabel) !== null && t !== undefined ? t : "";
      return y.default.createElement(c.Selectable, {
        className: R,
        dir: C,
        element: this.props.element,
        onClick: r,
        ref: this.refContainer,
        selectable: P,
        title: this.props.titlify ? B : undefined,
        "aria-label": F,
        style: {
          minHeight: (n = this.props.minTextHeight) !== null && n !== undefined ? n : "0px"
        }
      }, x);
    };
  }
  getElement() {
    return this.refContainer.current;
  }
  static getDerivedStateFromProps(e, t) {
    var n;
    let r = null;
    const a = String((n = e.text) !== null && n !== undefined ? n : "");
    if (a !== t.text) {
      r = {
        text: a
      };
    }
    if (!(h.UA.supportsEmojiEllipsification || !e.ellipsify || r == null || C(a))) {
      r = (0, i.default)((0, i.default)({}, r), {}, {
        ellipsified: null
      });
    }
    return r;
  }
  getWidth() {
    const e = this.refContainer.current;
    if (e) {
      return e.getBoundingClientRect().width;
    } else {
      return 0;
    }
  }
  componentDidUpdate(e, t) {
    if (!h.UA.supportsEmojiEllipsification && this.props.ellipsify && t.text !== this.state.text) {
      if (C(this.state.text)) {
        this._recompute();
        this._registerResizeListener();
      } else {
        this._unregisterResizeListener();
      }
    }
  }
  componentWillUnmount() {
    this._recompute.cancel();
  }
}
P.defaultProps = {
  element: "span",
  emojiSize: M.SMALL,
  textLimit: 1 / 0
};
const O = (0, m.ListenerHOC)(P);
function I(e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    found: false
  };
  if (e === t) {
    n.found = true;
    return "";
  }
  if (e instanceof HTMLImageElement) {
    return e.alt;
  }
  if (e.nodeType === Node.TEXT_NODE) {
    return e.nodeValue;
  }
  const r = R(e);
  let i = "";
  let a = 0;
  for (; a < e.childNodes.length && (i += I(e.childNodes[a], t, n), !n.found);) {
    a++;
  }
  if (r == null) {
    return i;
  }
  const [o, s] = r;
  return `${o}${i}${s}`;
}
function R(e) {
  if (e instanceof Element) {
    switch (e.tagName) {
      case "CODE":
        return ["```", "```"];
      case "STRONG":
        return ["*", "*"];
      case "EM":
        return ["_", "_"];
      case "DEL":
        return ["~", "~"];
      case "LI":
        return ["* ", ""];
      default:
        return null;
    }
  }
  return null;
}
function N(e) {
  var t;
  var n;
  return typeof e != "string" && ((e == null || (t = e.type) === null || t === undefined ? undefined : t.name) === "BulletedList" || (e == null || (n = e.type) === null || n === undefined ? undefined : n.name) === "NumberedList");
}
function D(e, t) {
  var n;
  var r;
  return !(!N(e[e.length - 1]) || !((n = t[0]) === null || n === undefined || (r = n.match) === null || r === undefined ? undefined : r.call(n, b))) && (t[0] = t[0].replace(b, ""), true);
}
function w(e, t) {
  var n;
  const r = e[e.length - 1];
  if (!N(r)) {
    return false;
  }
  const i = (r == null ? undefined : r.props.children) ? r == null ? undefined : r.props.children[(r == null ? undefined : r.props.children.length) - 1] : null;
  const a = t[0];
  if (i && a && !(a == null || (n = a.match) === null || n === undefined ? undefined : n.call(a, b)) && !N(a)) {
    let e = t.shift();
    if (typeof e == "string") {
      const n = e.split(/\r?\n/);
      e = n.shift();
      t.unshift("\n" + n.join("\n"));
    }
    i.props.children.push(y.default.createElement("p", {
      key: "botMsgEdit",
      className: (0, E.default)(T.botEditTextAnimation)
    }, e));
    return true;
  }
  return false;
}
exports.EmojiText = class extends O {
  constructor() {
    super(...arguments);
    this.getElement = () => this.getComponent().getElement();
  }
  getWidth() {
    return this.getComponent().getWidth();
  }
};