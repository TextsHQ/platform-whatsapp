var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    theme: t,
    wid: n
  } = e;
  const [r, g] = (0, p.useState)(null);
  const [m, h] = (0, p.useState)(null);
  const y = function () {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    g(e.img);
  };
  const E = (0, _.default)();
  (0, p.useEffect)(() => {
    if (n) {
      d.ProfilePicThumbCollection.find(n).then(e => (0, i.delayMs)(0).then(() => e)).then(e => {
        if (!E.aborted) {
          h(e);
          y(e);
        }
      }).catch(() => {});
    }
  }, []);
  (0, f.useListener)(m, "change:img", y);
  if (r && e.wid) {
    return p.default.createElement(l.DetailImage, {
      id: e.wid,
      quoted: e.quoted,
      size: e.size,
      shape: e.shape,
      border: e.border,
      quality: e.quality
    });
  }
  let S;
  S = typeof e.size == "number" && e.size !== 0 || typeof e.size != "number" && e.size != null ? e.size : l.DetailImageSize.Small;
  const v = (0, l.getSize)(S) || undefined;
  const T = e.thumbs ? e.thumbs : [e.thumb];
  const M = T.map((t, n) => {
    if (t) {
      return p.default.createElement("img", {
        className: c.default.image,
        src: t,
        key: n,
        alt: ""
      });
    }
    const r = v && v / (T.length > 2 && n > 0 ? 2 : 1);
    const i = e.quoted === true ? s.DefaultUserSquareIcon : o.DefaultUserIcon;
    return p.default.createElement(u.FlexRow, {
      key: n,
      className: c.default.default,
      justify: "center",
      align: "center"
    }, p.default.createElement(i, {
      style: {
        width: r,
        height: r
      },
      className: c.default.icon
    }));
  });
  let A;
  A = M.length === 1 ? M[0] : M.length === 2 ? p.default.createElement(u.FlexRow, {
    className: c.default.row,
    justify: "stretch",
    align: "stretch"
  }, M[0], M[1]) : p.default.createElement(u.FlexRow, {
    className: c.default.row,
    justify: "stretch",
    align: "stretch"
  }, M[0], p.default.createElement(u.FlexColumn, {
    className: c.default.col,
    justify: "stretch",
    align: "stretch"
  }, M[1], M[2]));
  return p.default.createElement(u.FlexRow, {
    className: (0, a.classnamesConvertMeToStylexPlease)({
      [c.default.square]: e.shape === l.DetailImageShape.Square,
      [c.default.hasBorder]: e.border,
      [c.default.hasInnerBorder]: t === "voip" || t === "voip-dimmed",
      [c.default.hasLargeInnerBorder]: t === "voip-large" || t === "voip-large-dimmed",
      [c.default.dimmed]: t === "voip-dimmed" || t === "voip-large-dimmed",
      [c.default.container]: true
    }),
    style: {
      width: v,
      height: v
    }
  }, A);
};
var i = require("./8304.js");
var a = require("./396574.js");
var o = require("./759350.js");
var s = require("./379317.js");
var l = require("./23641.js");
var u = require("./690495.js");
var c = r(require("./757980.js"));
var d = require("./446474.js");
var p = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = g(t);
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
var f = require("./808446.js");
var _ = r(require("./895851.js"));
function g(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (g = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}