var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleBusinessRemoval = f;
exports.handleBusinessRemovalNotificationContact = function () {
  return m.apply(this, arguments);
};
exports.handleBusinessRemovalNotificationHash = function () {
  return g.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("./200071.js"));
var o = require("./177938.js");
var s = require("./732011.js");
var l = r(require("./556869.js"));
function u() {
  return c.apply(this, arguments);
}
function c() {
  return (c = (0, i.default)(function* (e, t) {
    const n = yield e.get(t.user);
    if (n != null) {
      n.isBusiness = false;
      n.verifiedLevel = 0;
      n.verifiedName = "";
      return e.merge(t.user, n);
    }
  })).apply(this, arguments);
}
function d(e, t) {
  return e.remove(t.user);
}
const p = {
  isBusiness: false
};
function f() {
  return _.apply(this, arguments);
}
function _() {
  return (_ = (0, i.default)(function* (e) {
    const t = o.ContactCollection.get(e);
    const n = t ? {
      isBusiness: t.isBusiness,
      privacyMode: t.privacyMode
    } : p;
    yield (0, s.getStorage)().lock(["contact", "verified-business-name"], t => {
      let [n, r] = t;
      return Promise.all([u(n, e), d(r, e)]);
    });
    const r = o.ContactCollection.get(e);
    if (r != null) {
      r.set({
        isBusiness: false,
        verifiedLevel: null,
        verifiedName: null
      });
    }
    return (0, a.default)(e, n, p);
  })).apply(this, arguments);
}
function g() {
  return (g = (0, i.default)(function* (e) {
    if (e.type !== "remove_hash") {
      throw (0, l.default)("Invalid notification type");
    }
    const t = o.ContactCollection.resolveWidsFromHash(e.hash);
    return !!t && (yield Promise.all(t.map(t => f(t, e.stanzaId, e.ts))), true);
  })).apply(this, arguments);
}
function m() {
  return (m = (0, i.default)(function* (e) {
    if (e.type !== "remove_jid") {
      throw (0, l.default)("Invalid notification type");
    }
    yield f(e.jid, e.stanzaId, e.ts);
  })).apply(this, arguments);
}