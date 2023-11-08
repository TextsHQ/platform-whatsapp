var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastManagerComponent = function () {
  const e = (0, S.default)(() => new Map());
  const t = (t, n) => {
    if (n) {
      e.current.set(t, n);
    } else {
      e.current.delete(t);
    }
  };
  const n = (0, S.default)(() => new f.default(t));
  const r = (0, y.useRef)(null);
  const [A, P] = (0, y.useState)({});
  const O = (0, M.default)(A);
  const I = (t, n) => {
    var r;
    const i = (r = t.props.id) !== null && r !== undefined ? r : (0, o.default)(s || "toast");
    var s;
    const l = e.current.get(i);
    var u;
    if (l) {
      if (!((u = l.restartDelay) === null || u === undefined)) {
        u.call(l);
      }
    } else {
      P(e => (0, a.default)((0, a.default)({}, e), {}, {
        [i]: {
          toast: t,
          position: n,
          id: i
        }
      }));
    }
  };
  (0, v.useListener)(g.ToastManager, "open_toast", I);
  (0, v.useListener)(g.ToastManager, "close_toast", e => {
    if (A[e]) {
      P(t => (0, l.default)(t, e));
    }
  });
  const R = (0, S.default)(() => new Map());
  (0, T.default)(() => {
    R.current.forEach(e => self.clearTimeout(e));
  });
  (0, v.useListener)(null, "window_error", e => {
    const t = (0, u.default)(e);
    if (R.current.has(t)) {
      return;
    }
    const n = self.setTimeout(() => {
      R.current.delete(t);
    }, 5000);
    var r;
    R.current.set(t, n);
    I(y.default.createElement(_.Toast, {
      msg: C(e),
      action: [{
        actionText: "Copy",
        onAction: () => {
          (0, c.default)(e);
        }
      }, {
        actionText: "Report",
        onAction: (r = (0, i.default)(function* () {
          yield (0, p.openBugReportForm)(e);
        }), function () {
          return r.apply(this, arguments);
        })
      }]
    }));
  });
  (0, y.useEffect)(() => {
    r.current = Object.keys(O != null ? O : {}).length > Object.keys(A).length;
  }, [A, O]);
  const N = r.current;
  const D = (0, s.default)(A, ["toast", "id"]).reverse().map((e, t) => {
    let {
      toast: r,
      position: i,
      id: a
    } = e;
    return y.default.createElement("div", {
      key: a,
      className: (0, E.default)(b.wrapper, i === g.ToastPosition.CENTER && b.center, i === g.ToastPosition.RIGHT && b.right, t === 0 && N && b.slide0, t === 1 && b.slide1, t === 2 && b.slide2, t >= 3 && b.slide3)
    }, y.default.createElement("div", {
      className: (0, E.default)(i === g.ToastPosition.CENTER && (d.default.isRTL() ? b.transformRight : b.transformLeft))
    }, (0, y.cloneElement)(r, {
      ref: n.current.getRefSetter(a),
      id: a
    })));
  });
  const w = m.UA.isTrident ? "fade_sifo" : "toast-transition";
  return y.default.createElement(h.default, {
    transitionName: w
  }, D);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/81109.js"));
var o = r(require("../vendor/873955.js"));
var s = r(require("../vendor/189734.js"));
var l = r(require("../vendor/957557.js"));
var u = r(require("./270441.js"));
require("./780549.js");
var c = r(require("./719838.js"));
var d = r(require("./932325.js"));
var p = require("./615459.js");
var f = r(require("./359599.js"));
var _ = require("./625786.js");
var g = require("./390737.js");
var m = require("./368170.js");
var h = r(require("./844453.js"));
var y = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = A(t);
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
var E = r(require("./156720.js"));
var S = r(require("./637660.js"));
var v = require("./808446.js");
var T = r(require("./558532.js"));
var M = r(require("./49710.js"));
function A(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (A = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const b = {
  slide0: {
    transform: "qdd0en2n"
  },
  slide1: {
    transform: "gqonocmn"
  },
  slide2: {
    transform: "b5bqnu92"
  },
  slide3: {
    opacity: "axi1ht8l",
    transform: "j7iro104"
  },
  wrapper: {
    opacity: "bs7a17vp",
    bottom: "jxacihee",
    lineHeight: "d53pemmv",
    marginTop: "fgtikrv0",
    marginEnd: "gqi0zhd6",
    marginBottom: "dblt22a0",
    marginStart: "nzcjdldu",
    minHeight: "ocs0cmsa",
    position: "lhggkp7q",
    zIndex: "pglj95m3",
    transition: "byw3xhqn"
  },
  center: {
    start: "m7kgcvyw",
    marginStart: "svoq16ka",
    marginEnd: "jnwc1y2a",
    maxWidth: "culzvsue"
  },
  transformLeft: {
    transform: "t9w6h8zt"
  },
  transformRight: {
    transform: "ajuzgosp"
  },
  right: {
    end: "ebjesfe0"
  }
};
function C(e) {
  return `🛑 ${e.length > 200 ? `${e.slice(0, 200)}...` : e}`;
}