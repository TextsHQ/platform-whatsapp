var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeOrphanStateReactions = function (e) {
  return (0, a.getStorage)().lock(["reactions"], function () {
    var t = (0, i.default)(function* (t) {
      let [n] = t;
      const r = e.map(e => [e, 1]);
      const i = yield (0, o.getReactionsTable)().anyOf(["parentMsgKey", "orphan"], r);
      i.forEach(e => {
        e.orphan = 0;
        e.orphanReason = undefined;
      });
      yield n.bulkCreateOrReplace(i);
      return i;
    });
    return function () {
      return t.apply(this, arguments);
    };
  }());
};
var i = r(require("../vendor/348926.js"));
var a = require("./732011.js");
var o = require("./603635.js");