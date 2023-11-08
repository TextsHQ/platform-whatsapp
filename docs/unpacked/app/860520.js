var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  const e = (0, g.useRef)(null);
  const [t, n] = (0, g.useState)(S.FIRST_OPEN);
  (0, m.default)();
  const r = () => {
    n(S.READY);
  };
  const h = e => {
    n(S.LOADING);
    e.stopPropagation();
    e.preventDefault();
  };
  const T = () => {
    n(S.REPLAY);
    const t = e.current;
    if (t) {
      t.play();
    }
  };
  let M;
  let A;
  if (t === S.FIRST_OPEN) {
    M = g.default.createElement("div", {
      className: u.default.overlay
    }, g.default.createElement(d.Spinner, {
      size: 32
    }));
    A = r;
  }
  const b = t === S.FIRST_OPEN || t === S.READY || t === S.LOADING ? g.default.createElement(l.default, {
    className: (0, a.classnamesConvertMeToStylexPlease)({
      [u.default.hidden]: t === S.FIRST_OPEN,
      [u.default.poster]: true
    }),
    src: E[i.default.currentRes],
    key: "poster",
    onLoad: A
  }) : null;
  let C;
  let P;
  const O = y[i.default.currentRes];
  const I = t !== S.FIRST_OPEN && t !== S.READY ? g.default.createElement("video", {
    autoPlay: true,
    className: u.default.player,
    controls: true,
    controlsList: "nodownload",
    key: i.default.currentRes,
    onCanPlayThrough: () => {
      if (t === S.LOADING) {
        n(S.FIRST_PLAY);
      }
    },
    onEnded: () => {
      n(S.ENDED);
    },
    ref: e
  }, g.default.createElement("source", {
    src: O,
    type: "video/mp4"
  })) : null;
  switch (t) {
    case S.READY:
      P = h;
      C = g.default.createElement(v, null);
      break;
    case S.LOADING:
      C = g.default.createElement(d.Spinner, {
        color: "white",
        size: 32
      });
      break;
    case S.ENDED:
      P = T;
      C = g.default.createElement(c.RefreshLargeIcon, null);
      break;
    default:
      C = null;
      P = null;
  }
  const R = C ? g.default.createElement(p.default, {
    className: u.default.overlay,
    "aria-label": _.fbt._("Play video", null, {
      hk: "4xyT6V"
    }),
    onClick: P
  }, g.default.createElement("div", {
    className: u.default.button
  }, C)) : null;
  return g.default.createElement("div", {
    className: u.default.video
  }, g.default.createElement("div", {
    className: (0, a.classnamesConvertMeToStylexPlease)("landing-title", u.default.tutorialHeadline)
  }, _.fbt._("Tutorial", null, {
    hk: "1Hxbeb"
  })), g.default.createElement("div", {
    className: u.default.hint
  }, g.default.createElement(o.ExternalLink, {
    href: (0, s.getLoginFaqUrl)()
  }, _.fbt._("Need help to get started?", null, {
    hk: "3QtSpD"
  }))), g.default.createElement("div", {
    className: u.default.videoContainer
  }, g.default.createElement("div", {
    className: u.default.container
  }, g.default.createElement(f.default, {
    transitionName: "fade"
  }, M, R, b), I)));
};
var i = r(require("./861474.js"));
var a = require("./396574.js");
var o = require("./753233.js");
var s = require("./258105.js");
var l = r(require("./488922.js"));
var u = r(require("./521435.js"));
var c = require("./905077.js");
var d = require("./956113.js");
var p = r(require("./625903.js"));
var f = r(require("./844453.js"));
var _ = require("../vendor/548360.js");
var g = function (e, t) {
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
}(require("../vendor/667294.js"));
var m = r(require("./643934.js"));
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
const y = {
  low: require("./815109.js"),
  high: require("./326252.js")
};
const E = {
  low: require("./215767.js"),
  high: require("./977152.js")
};
const S = require("../vendor/76672.js").Mirrored(["FIRST_OPEN", "READY", "LOADING", "FIRST_PLAY", "ENDED", "REPLAY"]);
const v = () => g.default.createElement("div", {
  className: u.default.play
}, g.default.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "28",
  height: "34",
  viewBox: "0 0 28 34"
}, g.default.createElement("path", {
  fill: "#FFF",
  d: "M1 4.983v24.034a2.982 2.982 0 0 0 4.564 2.53L24.792 19.53a2.981 2.981 0 0 0 0-5.058L5.563 2.454A2.983 2.983 0 0 0 1 4.983z"
})));