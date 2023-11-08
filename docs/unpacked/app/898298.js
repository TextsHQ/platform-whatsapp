var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KeptMsgCollection = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./392125.js");
var o = require("./772358.js");
class s extends a.BaseCollection {
  constructor() {
    super(...arguments);
    this.isSynced = true;
    this.syncPromise = null;
  }
  process() {}
  sync() {
    return (0, i.default)(function* () {})();
  }
  updateMsgs() {}
}
exports.KeptMsgCollection = s;
s.model = o.Msg;
s.comparator = (e, t) => t.t - e.t;