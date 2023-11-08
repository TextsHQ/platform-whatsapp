var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  const {
    shouldAnimation: n,
    msg: a,
    children: r,
    componentClass: s,
    bubbleRef: d
  } = e;
  const f = (t = d.current) === null || t === undefined ? undefined : t.clientHeight;
  const p = (0, u.default)(f);
  (0, i.useEffect)(() => {
    var e;
    if (!(0, o.isBotReceiveEnabled)() || (0, o.isBotPerWordStreamingEnabled)()) {
      return;
    }
    const t = (e = d.current) === null || e === undefined ? undefined : e.clientHeight;
    if (t != null && p != null && !Number.isNaN(t) && !Number.isNaN(p) && p !== 0) {
      const e = t - p + 60;
      if (e > 0) {
        l.Cmd.scrollChatHeight(e);
      }
    }
  }, [e.lastBotEditBodyLength]);
  const m = n ? function (e, t) {
    if ((0, o.isBotReceiveEnabled)()) {
      var n;
      var a;
      var r;
      var l;
      var i;
      const u = Boolean((0, o.shouldAnimateAsBotStream)(e));
      const s = (n = t.current) === null || n === undefined ? undefined : n.clientHeight;
      const c = `${e.id.toString()}_${(a = (r = e.unsafe().latestEditMsgKey) === null || r === undefined ? undefined : r.toString()) !== null && a !== undefined ? a : ""}_${(l = (i = e.unsafe().latestEditSenderTimestampMs) === null || i === undefined ? undefined : i.toString()) !== null && l !== undefined ? l : ""}`;
      if (u && s != null) {
        return {
          key: c,
          style: {
            "--msg-bubble-starting-height": `${s != null ? s : 0}px`
          }
        };
      } else {
        return {};
      }
    }
    return {};
  }(a, d) : {};
  return i.default.createElement(c, {
    ref: d,
    animationProps: m,
    componentClass: s
  }, r);
};
var r = a(require("../vendor/967154.js"));
var o = require("../app/354458.js");
var l = require("../app/780549.js");
var i = function (e, t) {
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
var u = a(require("../app/49710.js"));
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
const c = (0, i.forwardRef)((e, t) => {
  const {
    animationProps: n,
    children: a,
    componentClass: o
  } = e;
  return i.default.createElement("div", (0, r.default)({}, n, {
    className: o,
    ref: t
  }), a);
});
c.displayName = "BubbleWithChildren";