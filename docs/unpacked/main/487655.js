Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSet = function (e) {
  const [t, n] = (0, a.useState)(e ? e() : () => new Set());
  const r = (0, a.useCallback)(e => new Promise(t => {
    n(n => {
      const a = new Set(n);
      a.add(e);
      t(a);
      return a;
    });
  }), []);
  const o = (0, a.useCallback)(e => new Promise(t => {
    n(n => {
      const a = new Set(n);
      a.delete(e);
      t(a);
      return a;
    });
  }), []);
  const l = (0, a.useCallback)(e => new Promise(t => {
    n(n => {
      const a = new Set(n);
      if (a.has(e)) {
        a.delete(e);
      } else {
        a.add(e);
      }
      t(a);
      return a;
    });
  }), []);
  const i = (0, a.useCallback)(function () {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return new Promise(t => {
      n(() => {
        const n = new Set(e);
        t(n);
        return n;
      });
    });
  }, []);
  return [t, {
    add: r,
    remove: o,
    toggle: l,
    clear: i
  }];
};
var a = require("../vendor/667294.js");