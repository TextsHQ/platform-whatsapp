var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkUpdateForOrphanReactions = function () {
  return s.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./359987.js");
var o = require("./398642.js");
function s() {
  return (s = (0, i.default)(function* (e) {
    try {
      const t = yield (0, o.changeOrphanStateReactions)(e);
      (0, a.frontendFireAndForget)("checkUpdateForOrphanReactions", {
        updatedRecords: t
      });
    } catch (e) {
      __LOG__(3)`checkUpdateForOrphanReactions: error ${e}`;
    }
  })).apply(this, arguments);
}