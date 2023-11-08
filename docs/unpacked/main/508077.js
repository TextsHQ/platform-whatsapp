var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CtwaContextThumbImage = function (e) {
  let {
    context: t,
    className: n
  } = e;
  const [a, s] = (0, i.useState)(false);
  const f = (t == null ? undefined : t.isSuspiciousLink) === true || (t == null ? undefined : t.thumbnailUrl) == null && (t == null ? undefined : t.thumbnail) == null;
  const p = (0, o.classnamesConvertMeToStylexPlease)((0, u.default)(c.image, (a || t?.thumbnailUrl == null) && c.imageBlur), n);
  const m = a ? d(t) : (e => {
    if (!e) {
      return "";
    }
    if (e.thumbnailUrl != null) {
      return e.thumbnailUrl;
    }
    return d(e);
  })(t);
  if (f || !m) {
    const e = (0, u.default)(c.noThumbContainer, (0, r.isAdsAttributionEnabled)() && c.wideThumbContainer);
    return i.default.createElement("div", {
      className: e
    }, i.default.createElement(l.LinkIcon, {
      className: (0, u.default)(c.noThumbIcon)
    }));
  }
  return i.default.createElement("img", {
    onError: () => s(true),
    alt: "",
    className: p,
    src: m
  });
};
var r = require("../app/72696.js");
var o = require("../app/396574.js");
var l = require("./406506.js");
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
  image: {
    flexGrow: "tvf2evcx",
    flexShrink: "oq44ahr5",
    flexBasis: "lb5m6g5c",
    width: "fpj7ivsd",
    minWidth: "q3aarhc9",
    height: "n43pk08i",
    minHeight: "mw6k2wl9"
  },
  noThumbContainer: {
    position: "g0rxnol2",
    display: "p357zi0d",
    flexGrow: "tvf2evcx",
    flexShrink: "oq44ahr5",
    flexBasis: "lb5m6g5c",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    width: "fpj7ivsd",
    height: "n43pk08i",
    backgroundColor: "ej3x2ktq",
    cursor: "ajgl1lbb"
  },
  wideThumbContainer: {
    width: "ln8gz9je"
  },
  noThumbIcon: {
    color: "i0c11cip"
  },
  imageBlur: {
    filter: "fsmudgz7"
  }
};
const d = e => (e == null ? undefined : e.thumbnail) != null ? `data:image/jpeg;base64,${e.thumbnail}` : "";