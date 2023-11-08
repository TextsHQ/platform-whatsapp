var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const [t, n] = (0, f.useState)();
  const [a, p] = (0, f.useState)();
  const h = function () {
    var t = (0, r.default)(function* () {
      if (!e.background) {
        return;
      }
      const {
        background: t
      } = e;
      if (yield (0, i.detectWebpSupport)()) {
        const e = yield E(t);
        if (e != null) {
          n(e);
        }
      } else {
        const e = yield (0, c.getPaymentMessageBackgroundImageBuffer)(t);
        const {
          id: n = ""
        } = t;
        if (e) {
          if (!g.has(n)) {
            g.set(n, yield (0, l.default)(e));
          }
          const t = g.get(n);
          if (t) {
            p(t);
          }
        }
      }
    });
    return function () {
      return t.apply(this, arguments);
    };
  }();
  (0, f.useEffect)(() => {
    if ((0, u.paymentBackgroundEnabled)()) {
      h();
    } else {
      __LOG__(3)`Payment backgrounds support not enabled`;
    }
  }, []);
  const v = (0, u.paymentBackgroundEnabled)() ? ((e, t, n) => {
    if (!e) {
      return null;
    }
    const a = m(e.placeholderArgb);
    const r = m(e.textArgb);
    if (a != null && r != null) {
      const o = {
        backgroundColor: a,
        color: r
      };
      o.backgroundColor = a;
      if (n != null) {
        o.backgroundImage = `url(${n})`;
      }
      if (t !== true) {
        if (e.width != null) {
          o.minWidth = e.width;
        }
        if (e.height != null) {
          o.minHeight = e.height;
        }
      }
      return o;
    }
    return null;
  })(e.background, e.isQuoted, t) : null;
  return f.default.createElement("div", {
    className: (0, o.classnamesConvertMeToStylexPlease)({
      [s.default.isQuoted]: e.isQuoted,
      [s.default.isQuotedInComposeBox]: e.isQuotedInComposeBox,
      [s.default.container]: true
    })
  }, f.default.createElement("div", {
    className: (0, o.classnamesConvertMeToStylexPlease)({
      "bg-payments": !e.isQuoted,
      [s.default.thumb]: true,
      [s.default.backgroundContainer]: true
    }),
    style: v
  }, f.default.createElement("div", {
    className: s.default.foregroundData
  }, e.children), a && f.default.createElement(d.default, {
    rgbaBuffer: a.rgbaBuffer,
    height: a.height,
    width: a.width,
    className: s.default.rgbaCanvas
  })));
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/396574.js");
var l = a(require("../app/945583.js"));
var i = require("../app/868607.js");
var u = require("../app/97858.js");
var s = a(require("./315570.js"));
var c = require("./547329.js");
var d = a(require("./406102.js"));
var f = function (e, t) {
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
const m = e => e == null ? null : `rgba(${e >> 16 & 255}, ${e >> 8 & 255}, ${e & 255}, ${e >> 24 & 255})`;
const h = new Map();
const g = new Map();
const E = function () {
  var e = (0, r.default)(function* (e) {
    if (e.id == null) {
      __LOG__(4, undefined, new Error(), true)`Payment background does not have a Id`;
      return void SEND_LOGS("Payment background does not have a Id");
    }
    const {
      id: t
    } = e;
    if (h.has(t)) {
      return h.get(t);
    }
    const n = yield (0, c.getPaymentMessageBackgroundImageBuffer)(e);
    if (!n) {
      return;
    }
    const a = new Blob([n], {
      type: "image/webp"
    });
    if (!a) {
      return;
    }
    const r = window.URL.createObjectURL(a);
    h.set(t, r);
    return r;
  });
  return function () {
    return e.apply(this, arguments);
  };
}();