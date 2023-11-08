var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmoothRangeInput = function (e) {
  const {
    value: t,
    valueText: n,
    min: a,
    max: s,
    smallSkip: d,
    largeSkip: f,
    onChange: p,
    onCommit: m,
    disabled: h,
    theme: g
  } = e;
  const [E, v] = (0, u.useState)(null);
  const _ = (0, u.useCallback)(e => {
    v(e);
    if (!(p == null)) {
      p(e);
    }
  }, [v, p]);
  const y = (0, u.useCallback)(e => {
    v(null);
    if (!(m == null)) {
      m(e);
    }
  }, [v, m]);
  const C = E != null ? E : t;
  const b = (0, r.default)((C - a) / (s - a), 0, 1) * 100;
  const M = (0, o.classnamesConvertMeToStylexPlease)(l.default.container, function (e) {
    switch (e) {
      case c.AUDIO_OUTGOING_UNPLAYED:
        return l.default.containerOutgoingUnplayed;
      case c.AUDIO_OUTGOING_PLAYED:
        return l.default.containerOutgoingPlayed;
      case c.AUDIO_INCOMING_UNPLAYED:
        return l.default.containerIncomingUnplayed;
      case c.AUDIO_INCOMING_PLAYED:
        return l.default.containerIncomingPlayed;
    }
  }(g), {
    [l.default.containerDisabled]: h
  });
  return u.default.createElement(i.default, {
    value: t,
    valueText: n,
    min: 0,
    max: s,
    smallSkip: d,
    largeSkip: f,
    onChange: _,
    onCommit: y,
    disabled: h
  }, u.default.createElement("div", {
    className: M
  }, u.default.createElement("div", {
    className: l.default.track
  }), u.default.createElement("span", {
    className: l.default.progress,
    style: {
      width: `${b}%`
    }
  }), u.default.createElement("div", {
    className: l.default.thumbTravelContainer
  }, u.default.createElement("div", {
    className: l.default.thumbContainer,
    style: {
      transform: `translateX(${b}%)`
    }
  }, u.default.createElement("div", {
    className: l.default.thumb
  })))));
};
exports.SmoothRangeInputTheme = undefined;
var r = a(require("../vendors-main/974691.js"));
var o = require("../app/396574.js");
var l = a(require("./740521.js"));
var i = a(require("./803554.js"));
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
const c = require("../vendor/76672.js").Mirrored(["AUDIO_OUTGOING_UNPLAYED", "AUDIO_OUTGOING_PLAYED", "AUDIO_INCOMING_UNPLAYED", "AUDIO_INCOMING_PLAYED"]);
exports.SmoothRangeInputTheme = c;