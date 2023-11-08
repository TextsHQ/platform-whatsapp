var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.columnBuilder = function (e, t) {
  const n = {
    intentionallyUsePrivateConstructor: true
  };
  if ((e == null ? undefined : e.packColumns) && t == null) {
    throw (0, y.default)("[storage-config-error] packing columns enabled, but packing data does not exist");
  }
  const r = (e == null ? undefined : e.packColumns) && t ? t : {};
  const E = e => r[e] != null ? S(r[e]) : e;
  return {
    addColumn: e => new a.default(e, E(e), n),
    addEncryptedColumn: (e, t) => new s.default(e, E(e), t, n),
    addUserDefinedPrimaryKey: e => new h.default({
      name: e,
      packedName: E(e)
    }, n),
    addAutoIncrementingPrimaryKey: e => new c.default({
      name: e,
      packedName: E(e)
    }, n),
    addCompositePrimaryKey: e => new d.default(e.map(e => ({
      name: e,
      packedName: E(e)
    })), n),
    addIndex: e => {
      const t = e.split(".")[0];
      return new l.default(E(t), n);
    },
    addArrayIndex: e => new i.default(E(e), n),
    addCompositeIndex: e => new o.default(e.map(e => E(e)), n),
    addUniqueIndex: e => new u.default(E(e), n),
    removeColumn: e => new f.default(e, n),
    removeIndex: e => new g.default(E(e), n),
    removeUniqueIndex: e => new m.default(E(e), n),
    removeArrayIndex: e => new p.default(E(e), n),
    removeCompositeIndex: e => new _.default(e.map(e => E(e)), n)
  };
};
exports.memoize = E;
var i = r(require("./908002.js"));
var a = r(require("./341201.js"));
var o = r(require("./833979.js"));
var s = r(require("./722235.js"));
var l = r(require("./921955.js"));
var u = r(require("./786770.js"));
var c = r(require("./337448.js"));
var d = r(require("./398595.js"));
var p = r(require("./467069.js"));
var f = r(require("./994946.js"));
var _ = r(require("./41362.js"));
var g = r(require("./30843.js"));
var m = r(require("./707993.js"));
var h = r(require("./100805.js"));
var y = r(require("./556869.js"));
function E(e) {
  const t = {};
  return n => {
    if (t[n]) {
      return t[n];
    }
    const r = e.apply(null, [n]);
    t[n] = r;
    return r;
  };
}
const S = E(function (e) {
  let t = e;
  const n = [];
  for (; t > 0;) {
    t--;
    const e = t % 26;
    n.push(String.fromCharCode("a".charCodeAt(0) + e));
    t = Math.floor(t / 26);
  }
  n.reverse();
  return n.join("");
});