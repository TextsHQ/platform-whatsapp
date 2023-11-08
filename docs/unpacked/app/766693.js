var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bulkCreateOrUpdateVotes = function (e) {
  return (0, a.getStorage)().lock(["newsletter-polls-votes"], function () {
    var t = (0, i.default)(function* (t) {
      let [n] = t;
      const r = new Map(e.map(e => [e.parentMsgKey, e]));
      (yield n.bulkGet(e.map(e => e.parentMsgKey))).filter(Boolean).forEach(e => {
        const t = r.get(e.parentMsgKey);
        if (t != null && t.serverTimestamp < e.serverTimestamp) {
          r.delete(e.parentMsgKey);
        }
      });
      yield n.bulkCreateOrReplace(Array.from(r.values()));
    });
    return function () {
      return t.apply(this, arguments);
    };
  }());
};
exports.bulkDeleteVotes = function (e) {
  return (0, o.getTable)().bulkRemove(e);
};
exports.getVote = function (e) {
  return (0, o.getTable)().get(e);
};
var i = r(require("../vendor/348926.js"));
var a = require("./732011.js");
var o = require("./40069.js");