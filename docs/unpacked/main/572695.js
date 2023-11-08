Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMsgTypeRegistryLookup = function (e) {
  const t = new Map();
  for (const a of e) {
    var n;
    const {
      type: e
    } = a;
    const r = (n = a.subtype) !== null && n !== undefined ? n : null;
    let o = t.get(e);
    if (o == null) {
      o = new Map();
      t.set(e, o);
    }
    o.set(r, a);
  }
  return (e, n) => {
    var a;
    if ((a = t.get(e)) === null || a === undefined) {
      return undefined;
    } else {
      return a.get(n != null ? n : null);
    }
  };
};