var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maybeUpdateAddOnAcks = function () {
  return c.apply(this, arguments);
};
exports.updateAddOnAcks = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./29797.js");
var o = r(require("./670983.js"));
var s = require("./724976.js");
var l = require("./359987.js");
function u() {
  return (u = (0, i.default)(function* (e) {
    const {
      getProviderForAddOnType: t
    } = require("./944749.js");
    const r = yield Promise.allSettled(Array.from(e.entries()).map(e => {
      var n;
      let [r, i] = e;
      const a = (0, o.default)(t(r), "getProviderForAddOnType(addOnType)");
      if ((n = a.updateAcks) === null || n === undefined) {
        return undefined;
      } else {
        return n.call(a, i, () => true);
      }
    }));
    for (const e of r) {
      if (e.status === "rejected") {
        throw e.reason;
      }
    }
  })).apply(this, arguments);
}
function c() {
  return (c = (0, i.default)(function* (e) {
    const {
      getProviderForAddOnType: t
    } = require("./944749.js");
    const r = yield Promise.allSettled(Array.from(e).map(function () {
      var e = (0, i.default)(function* (e) {
        var n;
        let [r, i] = e;
        const a = (0, o.default)(t(r), "getProviderForAddOnType(addOnType)");
        const s = yield (n = a.updateAcks) === null || n === undefined ? undefined : n.call(a, i, (e, t) => d(e.ack, t.ack));
        if (s != null && s.length !== 0) {
          return [r, s];
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }()));
    const a = new Map(r.map(e => e.value).filter(Boolean));
    (0, l.frontendFireAndForget)("updateAddOnCollectionAcks", {
      updatesByType: a
    });
    for (const e of r) {
      if (e.status === "rejected") {
        throw e.reason;
      }
    }
  })).apply(this, arguments);
}
function d(e, t) {
  return (0, s.isNumber)(t) && (e == null || t > e || t === a.ACK.FAILED);
}