var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.markFutureproofMessagesReparsed = function () {
  return s.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./373070.js");
var o = require("./851698.js");
function s() {
  return (s = (0, i.default)(function* (e) {
    try {
      if (e.length === 0) {
        return;
      }
      const t = (yield (0, o.getMessageTable)().bulkGet(e)).filter(Boolean).filter(e => e.type === a.MSG_TYPE.UNKNOWN);
      if (t.length === 0) {
        return;
      }
      const n = t.map(e => ({
        id: e.id.toString(),
        futureproofReparsed: true
      }));
      yield (0, o.getMessageTable)().bulkCreateOrMerge(n);
    } catch (e) {
      __LOG__(4, undefined, new Error())`markFutureproofMessagesReparsed: error ${e}`;
      throw e;
    }
  })).apply(this, arguments);
}