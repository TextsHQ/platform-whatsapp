var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    onOK: t,
    onUnmute: n,
    onOpen: a
  } = e;
  (0, s.useEffect)(() => {
    if (!(a == null)) {
      a();
    }
  }, [a]);
  return s.default.createElement(o.FlexColumn, {
    align: "center",
    xstyle: [f.chatAutoMutedConfirmation, i.uiMargin.top0, i.uiPadding.top24, i.uiPadding.bottom20, i.uiPadding.horiz20],
    testid: "chat-auto-mute-confirmation"
  }, s.default.createElement(l.default, {
    grow: 0,
    shrink: 0,
    basis: "auto"
  }, u.fbt._("This group has over 256 participants and was automatically muted to help reduce notifications.", null, {
    hk: "Qfqyc"
  })), s.default.createElement(l.default, {
    grow: 0,
    shrink: 0,
    basis: "auto",
    xstyle: i.uiMargin.top12
  }, s.default.createElement("div", {
    className: (0, c.default)(f.button, i.uiMargin.end8)
  }, s.default.createElement(r.default, {
    type: "plain-white",
    onClick: n
  }, u.fbt._("Unmute", null, {
    hk: "1GqSyx"
  }))), s.default.createElement("div", {
    className: (0, c.default)(f.button)
  }, s.default.createElement(r.default, {
    type: "plain-white",
    onClick: t
  }, u.fbt._("OK", null, {
    hk: "1q77mG"
  })))));
};
var r = a(require("../app/692629.js"));
var o = require("../app/690495.js");
var l = a(require("../app/469733.js"));
var i = require("../app/676345.js");
var u = require("../vendor/548360.js");
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
const f = {
  chatAutoMutedConfirmation: {
    backgroundColor: "rv6u8h8g",
    borderTop: "rj102gmn",
    boxShadow: "hxov8ih6",
    textAlign: "qfejxiq4",
    "::before": {
      position: "jiaumjzp",
      start: "fx6vfo4m",
      end: "dr53e3n4",
      top: "beenm9b3",
      bottom: "rhdd2pe1",
      zIndex: "of3b7f0x",
      pointerEvents: "hetm8iza",
      content: "ckfn5qle",
      boxShadow: "jhdjhcni"
    }
  },
  button: {
    display: "l7jjieqr"
  }
};