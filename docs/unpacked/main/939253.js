var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GifPreview = undefined;
var r = require("../app/898817.js");
var o = a(require("./587222.js"));
var l = require("./407024.js");
var i = require("../app/368170.js");
var u = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = s(t);
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
function s(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (s = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function c(e, t) {
  const {
    onSend: n,
    gif: a
  } = e;
  const [s, c] = (0, u.useState)(null);
  const d = (0, u.useRef)(null);
  const [f, p] = (0, u.useState)(false);
  const [m, h] = (0, u.useState)(false);
  const [g, E] = (0, u.useState)(false);
  (0, u.useEffect)(() => {
    if (s != null) {
      if (f) {
        if (s.paused) {
          s.play().catch((0, r.catchAbort)(() => {}));
        }
      } else if (!s.paused) {
        s.pause();
        s.currentTime = 0;
      }
    }
  }, [s, f]);
  const v = e => {
    if (!(f === e && m)) {
      p(e);
      h(true);
    }
  };
  const _ = () => {
    n(a);
  };
  const y = () => d.current;
  (0, u.useImperativeHandle)(t, () => ({
    setShouldAnimate: v,
    getElement: y
  }));
  let C;
  let b = null;
  if (m) {
    b = i.UA.troublesWithLotsOfVideos && a.nonVideoUrl ? u.default.createElement("img", {
      className: o.default.body,
      onClick: _,
      src: a.nonVideoUrl
    }) : u.default.createElement("video", {
      className: o.default.body,
      onClick: _,
      controls: false,
      autoPlay: f,
      loop: true,
      muted: true,
      ref: c,
      src: a.previewUrl
    });
  }
  if (e.isStarred && e.onUnstarMsg) {
    C = u.default.createElement("button", {
      className: o.default.icon,
      onClick: e.onUnstarMsg
    }, u.default.createElement(l.StarIcon, null));
  }
  return u.default.createElement("div", {
    ref: e => {
      d.current = e;
    },
    className: o.default.preview,
    tabIndex: "-1",
    onFocus: e => {
      e.preventDefault();
      e.stopPropagation();
      E(true);
    },
    onBlur: e => {
      e.preventDefault();
      e.stopPropagation();
      E(false);
    },
    style: {
      flexBasis: a.widthStr
    }
  }, g && u.default.createElement("div", {
    style: {
      flexBasis: a.widthStr
    },
    className: o.default.focusBorder
  }), u.default.createElement("div", {
    style: {
      width: a.widthStr
    },
    className: o.default.wrapper
  }, u.default.createElement("div", {
    style: {
      paddingBottom: a.ratioStr
    },
    className: o.default.container
  }, b)), C);
}
const d = (0, u.forwardRef)(c);
exports.GifPreview = d;
d.displayName = "GifPreview";