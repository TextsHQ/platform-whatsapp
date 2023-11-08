var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportedMsgCollection = undefined;
var r = a(require("../vendor/348926.js"));
var o = require("../app/392125.js");
var l = require("../app/772358.js");
class i extends o.BaseCollection {
  constructor() {
    super(...arguments);
    this.isSynced = true;
    this.syncPromise = null;
  }
  process() {}
  sync() {
    return (0, r.default)(function* () {})();
  }
  updateMsgs() {}
}
exports.ReportedMsgCollection = i;
i.model = l.Msg;
i.comparator = (e, t) => t.t - e.t;