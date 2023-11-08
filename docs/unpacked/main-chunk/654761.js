var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MIN_FONT_SIZE = exports.ContentEditable = undefined;
exports.Placeholder = function (e) {
  let {
    text: t,
    xstyle: n,
    testid: o
  } = e;
  return l.default.createElement("div", {
    testid: o,
    className: (0, i.default)(f.container, a.isOSMac && f.fontSmoothing, n)
  }, t);
};
var r = require("./71671.js");
var a = require("../app/572946.js");
var l = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = u(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var o = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(o, a, l);
      } else {
        o[a] = e[a];
      }
    }
  }
  o.default = e;
  if (n) {
    n.set(e, o);
  }
  return o;
}(require("../vendor/667294.js"));
var i = o(require("../app/156720.js"));
var s = o(require("../app/38085.js"));
function u(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (u = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
exports.MIN_FONT_SIZE = 15;
const d = {
  contentEditable: {
    userSelect: "to2l77zo",
    overflowX: "gfz4du6o",
    overflowY: "ag5g9lrv",
    fontSize: "bze30y65",
    lineHeight: "kao4egtt"
  },
  nowrap: {
    whiteSpace: "qh0vvdkp"
  }
};
const c = (0, l.forwardRef)((e, t) => {
  let {
    readOnly: n = false,
    spellCheck: o,
    title: a,
    testid: u,
    tabOrder: c,
    xstyle: f,
    maxVisibleLines: m,
    minVisibleLines: p = 1,
    lineWrap: h = true,
    focusOnMount: E,
    onClick: g
  } = e;
  const [C] = (0, r.useLexicalComposerContext)();
  const _ = (0, l.useCallback)(e => {
    C.setRootElement(e);
    if (E === true) {
      self.setTimeout(() => C.focus(), 0);
    }
  }, []);
  const T = (0, s.default)(t, _);
  (0, l.useEffect)(() => {
    C.setEditable(!n);
  }, [C, n]);
  return l.default.createElement("div", {
    className: (0, i.default)(d.contentEditable, f, !h && d.nowrap),
    style: {
      maxHeight: m != null ? m * 1.47 + "em" : undefined,
      minHeight: p * 1.47 + "em"
    },
    contentEditable: !n,
    role: "textbox",
    ref: T,
    spellCheck: o,
    title: a,
    tabIndex: c,
    "data-tab": c,
    onClick: g
  });
});
exports.ContentEditable = c;
c.displayName = "ContentEditable";
const f = {
  container: {
    position: "lhggkp7q",
    top: "qq0sjtgm",
    bottom: "jxacihee",
    start: "c3x5l3r8",
    zIndex: "b9fczbqn",
    color: "t35qvd06",
    pointerEvents: "m62443ks",
    userSelect: "rkxvyd19",
    transition: "c5h0bzs2",
    fontSize: "bze30y65",
    lineHeight: "kao4egtt"
  },
  fontSmoothing: {
    "-webkit-font-smoothing": "kh4n4d4z",
    "-moz-osx-font-smoothing": "tt14wmjx"
  }
};