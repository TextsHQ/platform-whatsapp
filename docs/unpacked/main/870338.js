var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Download = undefined;
exports.GifIcon = function (e) {
  let {
    onClick: t
  } = e;
  return f.default.createElement(r.Clickable, {
    className: (0, p.default)(h.controls),
    onClick: t,
    dataTestId: "media-state-gif-icon"
  }, f.default.createElement("div", {
    className: (0, p.default)(h.button)
  }, f.default.createElement(u.MediaGifIcon, null)));
};
exports.Upload = exports.Play = exports.Pending = undefined;
var r = require("../app/950987.js");
var o = a(require("../app/932325.js"));
var l = require("./214952.js");
var i = require("./844443.js");
var u = require("./660237.js");
var s = require("./861021.js");
var c = require("./72288.js");
var d = require("../app/956113.js");
var f = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = m(t);
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
var p = a(require("../app/156720.js"));
function m(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (m = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const h = {
  btnMeta: {
    alignItems: "gndfcl4n",
    backgroundColor: "g8xmoczg",
    borderTopStartRadius: "a9yjteo0",
    borderTopEndRadius: "pox2cllw",
    borderBottomEndRadius: "pi22tx4b",
    borderBottomStartRadius: "oov82czi",
    color: "k17s6i4e",
    display: "i86elurf",
    fontSize: "ovllcyds",
    height: "qmp0wt83",
    paddingTop: "i5tg98hk",
    paddingEnd: "tcyu26xv",
    paddingBottom: "przvwfww",
    paddingStart: "rn41jex5",
    position: "g0rxnol2",
    verticalAlign: "fewfhwl7"
  },
  button: {
    alignItems: "gndfcl4n",
    backgroundColor: "g8xmoczg",
    borderTopStartRadius: "g9p5wyxn",
    borderTopEndRadius: "i0tg5vk9",
    borderBottomEndRadius: "aoogvgrq",
    borderBottomStartRadius: "o2zu3hjb",
    color: "k17s6i4e",
    display: "p357zi0d",
    height: "qmp0wt83",
    justifyContent: "ac2vgrno",
    position: "g0rxnol2",
    width: "b6qzmhfs"
  },
  cancel: {
    backgroundColor: "h0psn3nu",
    borderTop: "qd2jueek",
    borderEnd: "bhvruqn2",
    borderBottom: "nqo088zx",
    borderStart: "af7d455f",
    borderTopStartRadius: "g9p5wyxn",
    borderTopEndRadius: "i0tg5vk9",
    borderBottomEndRadius: "aoogvgrq",
    borderBottomStartRadius: "o2zu3hjb",
    content: "d3pjxk2u",
    height: "rd228egi",
    start: "nji5cgl4",
    marginStart: "k6y3xtnu",
    marginTop: "g1eqewly",
    position: "lhggkp7q",
    top: "hdpg1tjz",
    width: "hj839x6e",
    ":before": {
      borderTop: "h5u7ittv",
      borderEnd: "efr419eo",
      borderBottom: "k2qxvnve",
      borderStart: "hf27ygvl",
      borderTopStartRadius: "e8mfq481",
      borderTopEndRadius: "rl2cs7re",
      borderBottomEndRadius: "k0x1nux4",
      borderBottomStartRadius: "thgejxps",
      content: "lij4d1x3",
      height: "mkhwmcgj",
      start: "boj8yvfr",
      position: "oxaw94s0",
      top: "a5zjmw75",
      width: "atsy7pmd"
    }
  },
  controls: {
    alignItems: "gndfcl4n",
    color: "k17s6i4e",
    display: "p357zi0d",
    height: "ppled2lx",
    justifyContent: "ac2vgrno",
    start: "tkdu00h0",
    position: "lhggkp7q",
    top: "qq0sjtgm",
    width: "ln8gz9je",
    zIndex: "mb8var44"
  },
  cursorPointer: {
    cursor: "ajgl1lbb"
  },
  icon: {
    display: "l7jjieqr",
    height: "qmp0wt83",
    position: "g0rxnol2",
    width: "b6qzmhfs"
  },
  iconMeta: {
    flexGrow: "tvf2evcx",
    flexShrink: "oq44ahr5",
    marginEnd: "q471nw87"
  },
  play: {
    marginStart: "gj5xqxfh"
  },
  spinner: {
    start: "tkdu00h0",
    position: "lhggkp7q",
    top: "qq0sjtgm"
  }
};
const g = (0, f.forwardRef)((e, t) => {
  const n = !!e.cancelable;
  const a = (0, f.useRef)();
  (0, f.useImperativeHandle)(t, () => ({
    getElement: () => a.current
  }));
  return f.default.createElement("div", {
    ref: a,
    className: (0, p.default)(h.controls)
  }, f.default.createElement("div", {
    className: (0, p.default)(h.icon, n && h.cursorPointer)
  }, f.default.createElement("div", {
    className: (0, p.default)(h.spinner)
  }, f.default.createElement(d.Spinner, {
    size: 50,
    stroke: 3,
    color: "white"
  })), n ? f.default.createElement("div", {
    className: (0, p.default)(h.cancel)
  }, f.default.createElement(l.MediaCancelIcon, null)) : null));
});
exports.Pending = g;
g.displayName = "Pending";
const E = (0, f.forwardRef)((e, t) => {
  let {
    filesize: n = 0,
    onClick: a,
    tabIndex: r = 0
  } = e;
  const l = (0, f.useRef)();
  (0, f.useImperativeHandle)(t, () => ({
    getElement: () => l.current
  }));
  if (n > 0) {
    return f.default.createElement("div", {
      ref: l,
      className: (0, p.default)(h.controls)
    }, f.default.createElement("button", {
      tabIndex: r,
      className: (0, p.default)(h.btnMeta, h.cursorPointer),
      onClick: a
    }, f.default.createElement(i.MediaDownloadIcon, {
      className: (0, p.default)(h.iconMeta)
    }), f.default.createElement("span", null, o.default.filesize(n))));
  } else {
    return f.default.createElement("div", {
      ref: l,
      className: (0, p.default)(h.controls)
    }, f.default.createElement("button", {
      tabIndex: r,
      className: (0, p.default)(h.button, h.cursorPointer),
      onClick: a
    }, f.default.createElement(i.MediaDownloadIcon, null)));
  }
});
exports.Download = E;
E.displayName = "Download";
const v = (0, f.forwardRef)((e, t) => {
  let {
    filesize: n = 0
  } = e;
  const a = (0, f.useRef)();
  (0, f.useImperativeHandle)(t, () => ({
    getElement: () => a.current
  }));
  if (n > 0) {
    return f.default.createElement("div", {
      ref: a,
      className: (0, p.default)(h.controls)
    }, f.default.createElement("button", {
      className: (0, p.default)(h.btnMeta, h.cursorPointer)
    }, f.default.createElement(c.MediaUploadIcon, {
      className: (0, p.default)(h.iconMeta)
    }), f.default.createElement("span", null, o.default.filesize(n))));
  } else {
    return f.default.createElement("div", {
      ref: a,
      className: (0, p.default)(h.controls)
    }, f.default.createElement("div", {
      className: (0, p.default)(h.button)
    }, f.default.createElement(c.MediaUploadIcon, null)));
  }
});
exports.Upload = v;
v.displayName = "Upload";
const _ = (0, f.forwardRef)((e, t) => {
  const n = (0, f.useRef)();
  (0, f.useImperativeHandle)(t, () => ({
    getElement: () => n.current
  }));
  return f.default.createElement("div", {
    ref: n,
    className: (0, p.default)(h.controls)
  }, f.default.createElement("div", {
    className: (0, p.default)(h.button)
  }, f.default.createElement(s.MediaPlayIcon, {
    className: (0, p.default)(h.play)
  })));
});
exports.Play = _;
_.displayName = "Play";