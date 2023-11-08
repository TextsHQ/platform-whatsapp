var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bulkRemoveNewsletterReactionsForParentMsg = function (e) {
  return (0, l.getTable)().bulkRemove(e);
};
exports.createOrUpdateNewsletterReaction = function (e) {
  return (0, s.getStorage)().lock(["newsletter-reactions"], function () {
    var t = (0, a.default)(function* (t) {
      let [n] = t;
      const {
        parentMsgKey: r
      } = e;
      const a = yield c(r);
      if (a) {
        yield n.bulkCreateOrReplace([a]);
      } else {
        const t = (0, i.default)({
          emojiCountMap: new Map(),
          serverTimestamp: 0
        }, e);
        yield n.createOrReplace(t);
      }
    });
    return function () {
      return t.apply(this, arguments);
    };
  }());
};
exports.createOrUpdateNewsletterReactions = function (e) {
  const t = new Map();
  e.forEach(e => {
    const {
      parentMsgKey: n
    } = e;
    const r = n;
    const i = t.get(r);
    if (i) {
      if (i.serverTimestamp <= e.serverTimestamp) {
        t.set(r, e);
      }
    } else {
      t.set(r, e);
    }
  });
  return (0, s.getStorage)().lock(["newsletter-reactions"], function () {
    var e = (0, a.default)(function* (e) {
      let [n] = e;
      const r = Array.from(t.values()).map(e => e.parentMsgKey);
      (yield n.anyOf(["parentMsgKey"], r)).forEach(e => {
        const n = e.parentMsgKey;
        const r = t.get(n);
        if (r && r.serverTimestamp <= e.serverTimestamp) {
          t.delete(n);
        }
      });
      yield n.bulkCreateOrReplace(Array.from(t.values()));
    });
    return function () {
      return e.apply(this, arguments);
    };
  }());
};
exports.getNewsletterReaction = c;
exports.removeNewsletterReactionsForParentMsg = function (e) {
  return (0, l.getTable)().remove(e);
};
exports.updateNewsletterReactionTimestamp = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = r(require("../vendor/535937.js"));
var s = require("./732011.js");
var l = require("./241644.js");
function u() {
  return (u = (0, a.default)(function* (e, t) {
    if ((yield (0, l.getTable)().get(e)) == null) {
      return;
    }
    const n = (0, o.default)(t, e => Number.isSafeInteger(e));
    return (0, l.getTable)().merge(e, n);
  })).apply(this, arguments);
}
function c(e) {
  return (0, l.getTable)().get(e);
}