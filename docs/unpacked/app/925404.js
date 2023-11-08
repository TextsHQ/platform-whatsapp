var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invalidateChatPolls = function (e) {
  return (0, o.getStorage)().lock(["message"], function () {
    var t = (0, i.default)(function* (t) {
      let [n] = t;
      const r = yield n.between(["internalId"], (0, a.beginningOfChat)(e), (0, a.endOfChat)(e));
      yield n.bulkCreateOrMerge(r.filter(e => e.type === s.MSG_TYPE.POLL_CREATION && !e.pollInvalidated).map(e => ({
        id: e.id,
        pollInvalidated: true
      })));
    });
    return function () {
      return t.apply(this, arguments);
    };
  }());
};
var i = r(require("../vendor/348926.js"));
var a = require("./878685.js");
var o = require("./732011.js");
var s = require("./373070.js");