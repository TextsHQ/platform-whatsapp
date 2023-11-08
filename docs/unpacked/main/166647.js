var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maybeSendKeyDistributionMsgToNewGroup = function () {
  return s.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/185212.js");
var l = require("../app/242382.js");
var i = require("../app/790215.js");
var u = require("./4022.js");
function s() {
  return (s = (0, r.default)(function* (e) {
    var t;
    var n;
    var a;
    var r;
    const s = (t = (n = yield (0, l.getParticipants)(e)) === null || n === undefined ? undefined : n.participants.length) !== null && t !== undefined ? t : 0;
    if (!((a = (r = yield (0, o.getGroupMetadata)(e)) === null || r === undefined ? undefined : r.announce) !== null && a !== undefined && a) && s && (0, i.sendKeyDistributionMsgToNewGroups)() && s >= (0, i.sendKeyDistributionMsgMinGroupSize)() && s <= (0, i.sendKeyDistributionMsgMaxGroupSize)()) {
      __LOG__(2, undefined, undefined, undefined, ["groups"])`handleGroupCreation: sending key distribution message`;
      (0, u.sendKeyDistributionMsg)(e).then(() => {
        __LOG__(2, undefined, undefined, undefined, ["groups"])`handleGroupCreation: sending key distribution message: done`;
      }).catch(e => {
        __LOG__(3, undefined, undefined, undefined, ["groups"])`handleGroupCreation: sending key distribution message failed: ${e}`;
      });
    }
  })).apply(this, arguments);
}