var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = m;
exports.Labels = function (e) {
  const {
    labels: t,
    showName: n = false,
    renderAsCircle: r = false,
    theme: a,
    iconXstyle: s
  } = e;
  const l = (0, d.default)();
  const f = (0, u.useMemo)(() => g(t), [t]);
  (0, p.useListener)(f != null ? o.LabelCollection : null, `label_updated_${f != null ? f : ""}`, l);
  if (!(0, i.canDisplayLabel)()) {
    return null;
  }
  const h = function (e) {
    const t = g(e);
    if (t == null) {
      return null;
    } else {
      return o.LabelCollection.get(t);
    }
  }(t);
  if (!h || !h.name) {
    return null;
  }
  if (t.length === 1) {
    const e = h.hexColor;
    const t = n ? h.name : null;
    return u.default.createElement(m, {
      color: e,
      name: t,
      renderAsCircle: r,
      theme: a,
      iconXstyle: s
    });
  }
  return u.default.createElement("div", {
    className: (0, c.default)(_.container)
  }, u.default.createElement("svg", {
    width: "18px",
    height: "15px",
    viewBox: "0 0 18 15"
  }, u.default.createElement("path", {
    fill: h.hexColor,
    d: "M11.208,3.925H2.236C1.556,3.925,1,4.565,1,5.357v7.213C1,13.362,1.556,14,2.236,14h8.972 c0.414,0,0.785-0.237,1.007-0.604l2.701-4.433L12.215,4.53C11.993,4.162,11.622,3.925,11.208,3.925z"
  }), u.default.createElement("path", {
    fill: "currentColor",
    d: "M15.541,7.832L13.164,3.93 c-0.423-0.698-1.15-1.142-1.956-1.142H2.595V2.432C2.595,1.64,3.151,1,3.831,1h9.1c0.414,0,0.782,0.237,1.005,0.605l2.696,4.433 L15.541,7.832z"
  })));
};
exports.getVisibleLabelId = g;
exports.renderLabelSvg = h;
var i = require("./72696.js");
var a = require("./305521.js");
var o = require("./856311.js");
var s = require("./170749.js");
var l = require("./676345.js");
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
var c = r(require("./156720.js"));
var d = r(require("./969651.js"));
var p = require("./808446.js");
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
const _ = {
  container: {
    display: "l7jjieqr",
    flexShrink: "oq44ahr5",
    verticalAlign: "fewfhwl7"
  },
  name: {
    flexShrink: "oq44ahr5",
    fontSize: "f8jlpxt4",
    lineHeight: "t61waeak",
    color: "tviruh8d"
  },
  labelFilter: {
    maxWidth: "laorhtua",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex"
  },
  labelFilterIconContainer: {
    display: "p357zi0d",
    flexShrink: "oq44ahr5",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    width: "i94gqilv",
    height: "bmot90v7"
  },
  labelFilterName: {
    flexGrow: "ggj6brxn",
    flexShrink: "m0h2a7mj",
    flexBasis: "lb5m6g5c",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    lineHeight: "pvbam5uh",
    textOverflow: "lhj4utae",
    whiteSpace: "le5p0ye3"
  },
  drawerTitle: {
    maxWidth: "laorhtua"
  },
  drawerTitleIconContainer: {
    flexShrink: "oq44ahr5"
  },
  drawerTitleName: {
    flexGrow: "ggj6brxn",
    flexShrink: "m0h2a7mj",
    flexBasis: "lb5m6g5c",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    fontSize: "enbbiyaj",
    color: "dmous0d2",
    textOverflow: "lhj4utae",
    whiteSpace: "le5p0ye3"
  },
  containerFull: {
    display: "i86elurf",
    alignItems: "gndfcl4n"
  },
  containerFullCircleIcon: {
    display: "l7jjieqr",
    flexShrink: "oq44ahr5",
    marginTop: "o9i7y497",
    color: "svlsagor"
  },
  circleIconContainer: {
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    width: "qssinsw9",
    height: "lniyxyh2",
    borderTopStartRadius: "g9p5wyxn",
    borderTopEndRadius: "i0tg5vk9",
    borderBottomEndRadius: "aoogvgrq",
    borderBottomStartRadius: "o2zu3hjb"
  },
  circleIcon: {
    color: "k17s6i4e"
  },
  circleIconSVG: {
    width: "m0s4cjtr",
    height: "jdwybkuq"
  }
};
function g(e) {
  if (e.length === 0) {
    return;
  }
  const t = Math.max(...e.map(e => parseInt(e, 10)));
  if (Number.isNaN(t)) {
    return e[0];
  } else {
    return t.toString();
  }
}
function m(e) {
  const {
    color: t,
    name: n,
    renderAsCircle: r = false,
    theme: i,
    iconXstyle: o
  } = e;
  const d = n != null ? u.default.createElement("span", {
    className: (0, c.default)(_.name, l.uiMargin.start3, e.theme === "label-filter" && _.labelFilterName, e.theme === "label-filter" && l.uiMargin.start8, e.theme === "drawer-title" && _.drawerTitleName, e.theme === "drawer-title" && l.uiMargin.start0)
  }, u.default.createElement(a.EmojiText, {
    text: n
  })) : null;
  const p = (0, c.default)(n == null && !r && _.container, r && _.containerFull, n != null && !r && _.containerFull, i === "label-filter" && _.labelFilter, i === "drawer-title" && _.drawerTitle);
  const f = r && t != null ? {
    backgroundColor: t
  } : {};
  const g = r ? u.default.createElement(s.LabelIcon, {
    xstyle: _.circleIcon,
    iconXstyle: _.circleIconSVG
  }) : h(t, [n != null && _.containerFullCircleIcon, o]);
  return u.default.createElement("div", {
    className: p
  }, u.default.createElement("div", {
    className: (0, c.default)(r && _.circleIconContainer, i === "drawer-title" && _.drawerTitleIconContainer, i === "drawer-title" && l.uiMargin.end20, i === "drawer-title" && l.uiMargin.start4, i === "label-filter" && _.labelFilterIconContainer),
    style: f
  }, g), d);
}
function h(e, t) {
  return u.default.createElement("svg", {
    width: "18px",
    height: "12px",
    viewBox: "0 0 18 12",
    className: (0, c.default)(t)
  }, u.default.createElement("path", {
    fill: e || "#ffffff",
    d: "M11.208,0.925H2.236C1.556,0.925,1,1.565,1,2.357V9.57C1,10.362,1.556,11,2.236,11h8.972 c0.414,0,0.785-0.237,1.007-0.604l2.701-4.433L12.215,1.53C11.993,1.162,11.622,0.925,11.208,0.925z"
  }));
}