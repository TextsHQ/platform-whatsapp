var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteExpiredPins = function (e) {
  return (0, l.createNonPersistedJob)("deleteExpiredPins", (0, r.default)(function* () {
    try {
      yield (0, o.removePinInChatByParentMsgKeys)(e);
    } catch (e) {
      __LOG__(4, undefined, new Error())`Expired pins deletion failed`;
      throw e;
    }
  })).waitUntilCompleted();
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/183381.js");
var l = require("../app/899137.js");