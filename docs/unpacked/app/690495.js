var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexContainer = exports.FlexColumn = undefined;
Object.defineProperty(exports, "FlexItem", {
  enumerable: true,
  get: function () {
    return o.default;
  }
});
exports.FlexRow = undefined;
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/506479.js"));
var o = r(require("./469733.js"));
var s = function (e, t) {
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
r(require("./156720.js"));
const l = ["align", "alignSelf", "justify", "justifySelf", "direction", "className", "xstyle"];
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
const c = {
  flex: {
    minWidth: "ktfrpxia",
    minHeight: "nu7pwgvd"
  }
};
const d = {
  start: {
    justifyContent: "fhf7t426"
  },
  center: {
    justifyContent: "ac2vgrno"
  },
  end: {
    justifyContent: "kcgo1i74"
  },
  all: {
    justifyContent: "o4u7okr9"
  },
  around: {
    justifyContent: "j1p1mz06"
  },
  evenly: {
    justifyContent: "s1e5xcja"
  },
  stretch: {
    justifyContent: "ctjs45qd"
  }
};
const p = {
  horizontal: {
    flexDirection: "sap93d0t"
  },
  vertical: {
    flexDirection: "f8m0rgwh"
  },
  horizontalReverse: {
    flexDirection: "v76qf5v1"
  },
  verticalReverse: {
    flexDirection: "qzvtbs9h"
  }
};
const f = {
  center: {
    alignItems: "gndfcl4n"
  },
  start: {
    alignItems: "r15c9g6i"
  },
  end: {
    alignItems: "r6jd426a"
  },
  stretch: {
    alignItems: "elxb2u3l"
  },
  baseline: {
    alignItems: "e4eao3g2"
  }
};
const _ = (0, s.forwardRef)(function (e, t) {
  const {
    align: n = "start",
    alignSelf: r,
    justify: u = "start",
    justifySelf: _,
    direction: g,
    className: m,
    xstyle: h
  } = e;
  const y = (0, a.default)(e, l);
  return s.default.createElement(o.default, (0, i.default)({
    className: m,
    xstyle: [c.flex, d[u], p[g], f[n], h],
    align: r,
    justify: _,
    isFlexContainer: true,
    ref: t
  }, y));
});
exports.FlexContainer = _;
_.displayName = "FlexContainer";
const g = (0, s.forwardRef)(function (e, t) {
  return s.default.createElement(_, (0, i.default)({}, e, {
    direction: "horizontal",
    ref: t
  }), e.children);
});
exports.FlexRow = g;
g.displayName = "FlexRow";
const m = (0, s.forwardRef)(function (e, t) {
  return s.default.createElement(_, (0, i.default)({}, e, {
    direction: "vertical",
    ref: t
  }), e.children);
});
exports.FlexColumn = m;
m.displayName = "FlexColumn";