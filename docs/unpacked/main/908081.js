var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../app/152583.js"));
var o = a(require("../app/825545.js"));
var l = require("../app/717089.js");
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
var u = a(require("../app/156720.js"));
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
const c = {
  belowHeader: {
    height: "sh5ccnuw",
    marginTop: "dn3ua38v",
    position: "lhggkp7q",
    width: "ln8gz9je"
  },
  drawer: {
    backgroundColor: "g6kkip0l",
    display: "p357zi0d",
    flexDirection: "f8m0rgwh",
    height: "ppled2lx",
    start: "tkdu00h0",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    pointerEvents: "jv8uhy2r",
    position: "lhggkp7q",
    top: "qq0sjtgm",
    width: "ln8gz9je"
  },
  drawerCapture: {
    backgroundColor: "ej3x2ktq"
  },
  drawerCatalog: {
    backgroundColor: "svpeipy5"
  },
  drawerEdit: {
    backgroundColor: "ej3x2ktq"
  },
  drawerGallery: {
    backgroundColor: "cumqsjf0"
  },
  drawerMedia: {
    backgroundColor: "ej3x2ktq"
  },
  striped: {
    backgroundColor: "se2m7z6i"
  },
  white: {
    backgroundColor: "ihvf49ua"
  }
};
function d(e, t) {
  var n;
  const {
    children: a,
    onDrop: s,
    onDragChange: d,
    theme: f,
    testid: p
  } = e;
  const m = (0, i.useRef)(null);
  (0, l.useTsNavigation)((n = e.tsNavigationData) !== null && n !== undefined ? n : {
    surface: "unknown"
  });
  const h = (0, u.default)(c.drawer, (f === "white-bg" || f === "invite" || f === "products" || f === "labels" || f === "settings" || f === "archived" || f === "sticker-store") && c.white, (f === "capture-contain" || f === "capture-cover") && c.drawerCapture, f === "edit" && c.drawerEdit, f === "media" && c.drawerMedia, f === "gallery" && c.drawerGallery, f === "catalog" && c.drawerCatalog, f === "striped" && c.striped, (f === "capture-contain" || f === "media") && c.belowHeader, e.xstyle);
  return i.default.createElement(r.default, {
    ref: t,
    className: h,
    style: e.style,
    onDragOver: e => {
      var t;
      if (!((t = m.current) === null || t === undefined)) {
        t.onDragOver(e);
      }
    },
    onDragStart: e => {
      var t;
      if (!((t = m.current) === null || t === undefined)) {
        t.onDragStart(e);
      }
    },
    onDragEnd: e => {
      var t;
      if (!((t = m.current) === null || t === undefined)) {
        t.onDragEnd(e);
      }
    },
    testid: p
  }, s && i.default.createElement(o.default, {
    ref: m,
    disableFromWithin: true,
    onDragChange: d,
    onDrop: s
  }), a);
}
var f = (0, i.forwardRef)(d);
exports.default = f;