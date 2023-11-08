var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    renderProgressively: t = false,
    downloadMedia: n
  } = e;
  const {
    filehash: a,
    mediaStage: d,
    progressiveStage: h
  } = (0, s.useModelValues)(e.mediaData, ["filehash", "mediaStage", "progressiveStage"]);
  const [g, E] = (0, i.useState)(m);
  const v = (0, i.useMemo)(() => h != null ? (0, r.getProgressiveMediaCacheKey)(a, h) : null, [a, h]);
  const _ = v != null && d !== l.MEDIA_DATA_STAGE.RESOLVED ? v : a;
  const y = (0, i.useMemo)(() => o.InMemoryMediaBlobCache.has(_) ? (o.InMemoryMediaBlobCache.increaseUsageCount(_), o.InMemoryMediaBlobCache.getOrCreateURL(_)) : null, [_, d]);
  const [C, b] = (0, i.useState)(a);
  const [M, S] = (0, i.useState)(null);
  if (C !== a) {
    E(y != null ? [y] : []);
    b(a);
    S(y);
  } else if (y != null && y !== M) {
    E([...g, y]);
    S(y);
  }
  const T = (0, c.default)(() => {
    if (!(v != null && t || n == null)) {
      n();
    }
  });
  (0, i.useEffect)(() => {
    T();
  }, [a, T]);
  (0, i.useEffect)(() => () => {
    if (o.InMemoryMediaBlobCache.has(_) && y != null) {
      o.InMemoryMediaBlobCache.decreaseUsageCount(_);
    }
  }, [_, y]);
  (0, i.useEffect)(() => {
    if (y == null && d !== l.MEDIA_DATA_STAGE.RESOLVED && v != null) {
      __LOG__(4, undefined, new Error(), true)`Blob missing for trimmed-filehash: ${a.slice(0, 10)} with progressive stage: ${h} and mediaStage: ${d}`;
      SEND_LOGS("missing-progressive-blob");
    }
  }, [y, d, v, a, h]);
  if (y == null) {
    return e.placeholderRenderer();
  }
  if (t === true) {
    return i.default.createElement("div", {
      className: (0, u.default)(f)
    }, i.default.createElement("div", {
      className: (0, u.default)(p)
    }, e.placeholderRenderer()), g.map(t => i.default.createElement("div", {
      className: (0, u.default)(p),
      key: t
    }, e.children(t))));
  }
  return e.children(y);
};
var r = require("../app/874962.js");
var o = require("../app/196127.js");
var l = require("../app/172259.js");
var i = function (e, t) {
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
var u = a(require("../app/156720.js"));
var s = require("../app/655241.js");
var c = a(require("../app/17533.js"));
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
  position: "g0rxnol2",
  width: "ln8gz9je",
  height: "ppled2lx"
};
const p = {
  position: "lhggkp7q",
  zIndex: "jnl3jror",
  display: "p357zi0d",
  alignItems: "gndfcl4n",
  justifyContent: "ac2vgrno",
  width: "ln8gz9je",
  height: "ppled2lx"
};
const m = [];