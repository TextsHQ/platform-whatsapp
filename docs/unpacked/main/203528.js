var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    id: t
  } = e;
  const [n, a] = (0, d.useState)(() => u.StatusCollection.get(t));
  const o = (0, m.default)(t);
  (0, d.useEffect)(() => {
    if (!n) {
      const e = r.ContactCollection.gadd(t);
      a(e.getStatus());
    }
  }, []);
  (0, d.useEffect)(() => {
    if (!s.default.equals(t, o)) {
      const e = r.ContactCollection.gadd(t);
      a(e.getStatus());
    }
  }, [t, o]);
  if (!n) {
    return g;
  }
  return d.default.createElement(E, {
    status: n,
    waitIdle: e.waitIdle
  });
};
var r = require("../app/177938.js");
var o = require("../app/305521.js");
var l = a(require("../app/373347.js"));
var i = require("../app/163139.js");
var u = require("../app/476473.js");
var s = a(require("../app/124928.js"));
var c = require("../vendor/548360.js");
var d = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = h(t);
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
var f = a(require("../app/156720.js"));
var p = require("../app/655241.js");
var m = a(require("../app/49710.js"));
function h(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (h = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const g = d.default.createElement("span", {
  className: (0, f.default)({
    display: "f804f6gw",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    color: "hp667wtd",
    textOverflow: "lhj4utae",
    whiteSpace: "le5p0ye3"
  })
}, c.fbt._("Loading About…", null, {
  hk: "1XpokG"
}));
function E(e) {
  const t = (0, p.useModelValues)(e.status, ["id", "stale", "status"], {
    isStrong: false
  });
  const n = d.default.createElement(o.EmojiText, {
    direction: "auto",
    selectable: true,
    titlify: true,
    text: t.status,
    breakWord: true
  });
  const a = (0, i.unproxy)(t).stale ? g : n;
  return d.default.createElement(l.default, {
    id: t.id,
    onComplex: () => {
      u.StatusCollection.find(t.id);
      if (t.status !== undefined) {
        return n;
      } else {
        return g;
      }
    },
    waitIdle: e.waitIdle
  }, a);
}