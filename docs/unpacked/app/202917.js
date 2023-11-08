var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMessageDeliveryUpdatesModelToUpdate = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./727615.js");
var s = require("./570593.js");
var l = require("./251309.js");
function u() {
  return (u = (0, a.default)(function* (e, t, n) {
    const r = yield (0, o.bulkGetMessagesByServerIds)(t.map(e => e.id), e);
    const u = [];
    const c = t.map(function () {
      var t = (0, a.default)(function* (t) {
        const n = t.id;
        let a = r.get(t.id);
        if (a == null) {
          const t = (yield (0, s.getNewsletterMessages)(e, 1, {
            after: n - 1
          })).msgs[0];
          if (t == null) {
            return null;
          }
          a = t;
          u.push(a);
        }
        return (0, i.default)((0, i.default)({}, t), {}, {
          msgData: a,
          serverId: t.id,
          id: a.id
        });
      });
      return function () {
        return t.apply(this, arguments);
      };
    }());
    if (u.length > 0) {
      yield (0, l.addNewsletterMsgsRecords)(u);
    }
    const d = yield (0, o.bulkGetMessagesByServerIds)(n, e);
    const p = n.map(function () {
      var e = (0, a.default)(function* (e) {
        const t = d.get(e);
        if (t == null) {
          return null;
        } else {
          return t.id;
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }());
    return {
      modelUpdatesToAdd: (yield Promise.all(c)).filter(Boolean),
      modelUpdatesToRemove: (yield Promise.all(p)).filter(Boolean)
    };
  })).apply(this, arguments);
}