var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    onClick: t,
    onClickAnimateEnd: n
  } = e;
  const a = (0, u.useRef)(null);
  const p = (0, u.useRef)(0);
  const [h, g] = (0, u.useState)(null);
  const E = (0, l.statusQuickReplyEmojis)();
  const [v] = (0, f.useTimeout)(() => {
    p.current = 0;
    g(null);
  }, 200);
  (0, c.useListener)(n && a.current, "animationend", () => {
    if (++p.current === E.length) {
      if (!(n == null)) {
        n();
      }
      v();
    }
  });
  const [_, y] = (0, d.default)(o.NUX.STATUS_QUICK_REPLIES);
  return u.default.createElement("div", {
    ref: a
  }, _ ? u.default.createElement("div", {
    className: (0, s.default)(m.guidance)
  }, i.fbt._("Click to send", null, {
    hk: "48egRc"
  })) : null, u.default.createElement(r.FlexRow, {
    justify: "center",
    className: (0, s.default)(m.container)
  }, E.map((e, n) => u.default.createElement("button", {
    className: (0, s.default)([m.emoji, h != null && (h === n ? m.emojiClicked : m.emojiClickedNeighbours)]),
    key: e,
    onClick: a => {
      t(a, e);
      y();
      g(n);
    }
  }, e))));
};
var r = require("../app/690495.js");
var o = require("../app/95589.js");
var l = require("../app/918715.js");
var i = require("../vendor/548360.js");
var u = function (e, t) {
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
var s = a(require("../app/156720.js"));
var c = require("../app/808446.js");
var d = a(require("./157558.js"));
var f = require("../app/441673.js");
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
const m = {
  container: {
    width: "ln8gz9je",
    marginBottom: "du8bjn1j"
  },
  emoji: {
    display: "f804f6gw",
    width: "dyxdk6fi",
    height: "m3o1wsh7",
    textAlign: "qfejxiq4",
    fontSize: "fvnbr7o8",
    marginStart: "nzcjdldu",
    transition: "qvwhnwh7",
    ":first-child": {
      marginStart: "nadoev3v"
    },
    ":hover": {
      transform: "m71s4v11"
    }
  },
  emojiClicked: {
    animationName: "p3z46sn7",
    animationDuration: "izvjr1tp",
    animationTimingFunction: "bej5yntv",
    animationFillMode: "a21kwdn3",
    transformOrigin: "s79hpmcy",
    pointerEvents: "m62443ks"
  },
  emojiClickedNeighbours: {
    animationName: "d7qcm159",
    animationDuration: "a906e4bh",
    animationFillMode: "a21kwdn3",
    animationTimingFunction: "bej5yntv",
    pointerEvents: "m62443ks"
  },
  guidance: {
    textAlign: "qfejxiq4",
    color: "octy2vkd",
    fontSize: "enbbiyaj",
    marginBottom: "brac1wpa"
  }
};