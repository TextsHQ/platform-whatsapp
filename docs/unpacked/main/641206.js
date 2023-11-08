var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    msg: t,
    thumbnailPlaceholder: n
  } = e;
  const a = (0, o.default)(e, d);
  const {
    mediaData: i
  } = (0, c.useModelValues)(t, ["mediaData"]);
  if (i == null) {
    if (n != null) {
      return u.default.createElement(g, {
        className: a.containerClassName
      }, u.default.createElement("div", {
        className: (0, l.classnamesConvertMeToStylexPlease)((0, s.default)(m), a.childClassName)
      }, n));
    } else {
      return null;
    }
  }
  return u.default.createElement(h, (0, r.default)({
    mediaData: i,
    thumbnailPlaceholder: n
  }, a));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/396574.js");
var i = a(require("../app/756680.js"));
var u = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = f(t);
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
var c = require("../app/655241.js");
const d = ["msg", "thumbnailPlaceholder"];
function f(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (f = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const p = {
  position: "g0rxnol2"
};
const m = {
  position: "lhggkp7q"
};
function h(e) {
  const {
    containerClassName: t,
    childClassName: n,
    mediaData: a,
    thumbnailPlaceholder: r
  } = e;
  const {
    preview: o,
    fullPreviewData: d
  } = (0, c.useModelValues)(a, ["preview", "fullPreviewData"]);
  const f = [];
  if (o != null) {
    f.push({
      opaque: o,
      key: "preview"
    });
  }
  if (d != null) {
    f.push({
      opaque: d,
      key: "fullPreviewData"
    });
  }
  if (f.length === 0) {
    if (r != null) {
      return u.default.createElement(g, {
        className: t
      }, u.default.createElement("div", {
        className: (0, l.classnamesConvertMeToStylexPlease)((0, s.default)(m), n)
      }, r));
    } else {
      return null;
    }
  }
  return u.default.createElement(g, {
    className: t
  }, f.map(e => {
    let {
      key: t,
      opaque: a
    } = e;
    if (a instanceof i.default) {
      return u.default.createElement(E, {
        className: n,
        key: t,
        opaque: a
      });
    } else {
      return null;
    }
  }).filter(Boolean));
}
function g(e) {
  const {
    className: t,
    children: n
  } = e;
  return u.default.createElement("div", {
    className: (0, l.classnamesConvertMeToStylexPlease)((0, s.default)(p), t)
  }, n);
}
function E(e) {
  const {
    className: t,
    opaque: n
  } = e;
  (0, u.useEffect)(() => {
    if (n != null) {
      n.retain();
      return () => {
        n.autorelease();
      };
    }
  }, [n]);
  return u.default.createElement("div", {
    className: (0, l.classnamesConvertMeToStylexPlease)((0, s.default)(m), t),
    style: n ? {
      backgroundImage: `url("${n.url()}")`
    } : null
  });
}