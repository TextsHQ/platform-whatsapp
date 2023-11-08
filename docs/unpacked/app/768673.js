var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.markAddOnsAsReadDb = function () {
  return l.apply(this, arguments);
};
exports.markUnclassifiedAddOnsAsReadDb = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("./670983.js"));
var o = require("./944749.js");
var s = require("./702618.js");
function l() {
  return (l = (0, i.default)(function* (e) {
    const {
      getProviderForAddOnType: t
    } = require("./944749.js");
    const r = yield Promise.allSettled(Array.from(e.entries()).map(e => {
      var n;
      let [r, i] = e;
      const o = (0, a.default)(t(r), "getProviderForAddOnType(addOnType)");
      if ((n = o.markAsRead) === null || n === undefined) {
        return undefined;
      } else {
        return n.call(o, i);
      }
    }));
    for (const e of r) {
      if (e.status === "rejected") {
        throw e.reason;
      }
    }
  })).apply(this, arguments);
}
function u() {
  return (u = (0, i.default)(function* (e) {
    const t = new Map();
    const n = o.addOnProviders.map(function () {
      var n = (0, i.default)(function* (n) {
        var r;
        const i = yield (r = n.markAsRead) === null || r === undefined ? undefined : r.call(n, e);
        t.set(n.type, i != null ? i : []);
      });
      return function () {
        return n.apply(this, arguments);
      };
    }());
    const r = [];
    const a = (0, s.markAsReadForTable)("message-orphans", e.map(String)).then(e => {
      r.push(...e);
    });
    const l = yield Promise.allSettled([...n, a]);
    for (const e of l) {
      if (e.status === "rejected") {
        throw e.reason;
      }
    }
    return {
      updatedAddOns: t,
      updatedOrphans: r
    };
  })).apply(this, arguments);
}