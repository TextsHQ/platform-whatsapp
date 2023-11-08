var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = require("./632157.js");
var a = r(require("./708093.js"));
var o = require("./682144.js");
var s = r(require("./442690.js"));
class l extends a.default {
  getValidRecords() {
    return this.filter(e => {
      const t = (0, i.castToUnixTime)(e.leaveTs);
      return (0, i.happenedWithin)(t, i.DAY_SECONDS * o.PAST_PARTICIPANT_EXPIRATION_DAYS);
    });
  }
}
exports.default = l;
l.model = s.default;
l.comparator = (e, t) => t.leaveTs - e.leaveTs;