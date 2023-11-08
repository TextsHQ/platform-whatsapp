var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getABKey = function () {
  const e = l();
  if (e == null) {
    return undefined;
  } else {
    return e.abKey;
  }
};
exports.getHash = function () {
  const e = l();
  if (e == null) {
    return undefined;
  } else {
    return e.hash;
  }
};
exports.getRefresh = function () {
  var e;
  const t = l();
  return parseInt((e = t == null ? undefined : t.refresh) !== null && e !== undefined ? e : 86400, 10);
};
exports.isABPropsAfterFirstSync = function () {
  return l() != null;
};
exports.updateAttributesLocalStorage = function (e, t, n, r) {
  var u;
  var c;
  let d = null;
  if (n != null) {
    d = n;
    if (d < 600) {
      d = 600;
    } else if (d > s) {
      d = s;
    }
  }
  const p = l() || {};
  const f = {
    abKey: e != null ? e : p.abKey,
    hash: t != null ? t : p.hash,
    refresh: (u = (c = d) === null || c === undefined ? undefined : c.toString()) !== null && u !== undefined ? u : p.refresh,
    lastSyncTime: r
  };
  (0, i.default)(a.default, "localStorage").setItem(o.KEYS.ABPROPS, JSON.stringify(f));
};
var i = r(require("./670983.js"));
var a = r(require("./174285.js"));
var o = require("./94872.js");
const s = 604800;
function l() {
  const e = (0, i.default)(a.default, "localStorage").getItem(o.KEYS.ABPROPS);
  if (e == null) {
    return null;
  } else {
    return JSON.parse(e);
  }
}