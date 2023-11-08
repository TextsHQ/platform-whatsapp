var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleBusinessProfile = function () {
  return l.apply(this, arguments);
};
exports.handleBusinessProfileHash = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./778945.js");
var o = require("./177938.js");
var s = require("./669050.js");
function l() {
  return (l = (0, i.default)(function* (e) {
    let {
      from: t
    } = e;
    const n = (0, s.createWidFromWidLike)(t.toString());
    yield c([n]);
  })).apply(this, arguments);
}
function u() {
  return (u = (0, i.default)(function* (e) {
    let {
      hash: t
    } = e;
    const n = o.ContactCollection.resolveWidsFromHash(t);
    return !!n && (yield c(n), true);
  })).apply(this, arguments);
}
function c(e) {
  const t = e.map(function () {
    var e = (0, i.default)(function* (e) {
      const t = Boolean(a.BusinessProfileCollection.getValid(e));
      const n = yield a.BusinessProfileCollection.update(e);
      const r = Array.isArray(n) ? n : [n];
      for (const e of r) {
        if (!t) {
          e.stale = true;
        }
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }());
  return Promise.all(t);
}