Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.blindToken = function (e, t) {
  return (0, r.runInAllocationScope)(() => {
    const n = (0, r.p3Element)();
    const o = (0, r.allocate)(Uint8Array, 32);
    o.set(t);
    a(o);
    i.lowlevel.scalarbase(n, o);
    const s = (0, r.hashToPoint)(e);
    (0, i.lowlevel.add)(s, n);
    const l = new Uint8Array(32);
    (0, r.pack)(l, s);
    return l;
  });
};
exports.unblindToken = function (e, t, n) {
  return (0, r.runInAllocationScope)(() => {
    const o = (0, r.p3Element)();
    if ((0, r.unpack)(o, e)) {
      return null;
    }
    const s = (0, r.p3Element)();
    if ((0, r.unpackneg)(s, n) !== 0) {
      return null;
    }
    const l = (0, r.allocate)(Uint8Array, 32);
    l.set(t);
    a(l);
    const u = (0, r.p3Element)();
    i.lowlevel.scalarmult(u, s, l);
    (0, i.lowlevel.add)(o, u);
    const c = new Uint8Array(32);
    (0, r.pack)(c, o);
    return c;
  });
};
var r = require("./278071.js");
var i = require("./194121.js");
function a(e) {
  e[0] &= 248;
  e[31] &= 127;
  e[31] |= 64;
}