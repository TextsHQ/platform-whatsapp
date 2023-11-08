Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMsgTypeRegistryLookup = function (e) {
  const t = new Map();
  for (const r of e) {
    var n;
    const {
      type: e
    } = r;
    const i = (n = r.subtype) !== null && n !== undefined ? n : null;
    let a = t.get(e);
    if (a == null) {
      a = new Map();
      t.set(e, a);
    }
    a.set(i, r);
  }
  return (e, n) => {
    var r;
    if ((r = t.get(e)) === null || r === undefined) {
      return undefined;
    } else {
      return r.get(n != null ? n : null);
    }
  };
};