var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.batch = function (e, t) {
  const n = o(e, t);
  return e => n.accept(e);
};
exports.createBatcher = function (e) {
  let t = [];
  let n = new a.Resolvable();
  return {
    accept: e => {
      t.push(e);
      return n.promise.then(t => {
        const n = t.get(e);
        if (n == null) {
          throw (0, i.default)("This should not happen because we just added it to the batch");
        }
        return n;
      });
    },
    runActiveBatch: r => {
      if (t.length === 0) {
        return Promise.resolve(new Map());
      }
      const i = t;
      const o = n;
      t = [];
      n = new a.Resolvable();
      return Promise.resolve(e(i, r)).then(e => {
        o.resolve(e);
        return e;
      });
    }
  };
};
exports.createSimpleBatcher = o;
var i = r(require("./415227.js"));
var a = require("./950376.js");
function o(e, t) {
  let {
    delayMs: n,
    maxSize: r
  } = e;
  let a = null;
  function o(e) {
    if (a && a.args === e) {
      a = null;
    }
    return t(e);
  }
  const s = () => {
    if (a == null) {
      return Promise.resolve();
    }
    const e = a;
    a = null;
    clearTimeout(e.timer);
    e.run();
    return e.batchPromise;
  };
  return {
    accept: e => {
      if (a) {
        a.args.push(e);
      } else {
        let t;
        const r = [e];
        const i = new Promise(e => {
          t = () => {
            e(r);
          };
        }).then(o);
        a = {
          args: r,
          batchPromise: i,
          run: t,
          timer: setTimeout(t, n)
        };
      }
      if (a == null) {
        throw (0, i.default)("activeBatch should not be null here");
      }
      const {
        args: t,
        batchPromise: l
      } = a;
      const u = t.length - 1;
      if (r != null && t.length >= r) {
        s();
      }
      return l.then(e => e[u]);
    },
    runActiveBatch: s
  };
}