var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eagerlyEstablishE2EESession = function () {
  return m.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/827467.js");
var l = require("../app/984330.js");
var i = require("../app/917504.js");
var u = require("../app/311110.js");
var s = require("./10586.js");
var c = require("../app/459857.js");
var d = require("../app/718451.js");
var f = require("../app/86575.js");
var p = a(require("../app/342310.js"));
function m() {
  return (m = (0, r.default)(function* (e) {
    let t;
    let n = null;
    if (e.isGroup) {
      const a = yield (0, o.getGroupSenderKeyList)(e.id);
      t = a.skDistribList;
      n = (0, p.default)(a.skDistribList.length + a.skList.length);
    } else {
      const n = (0, c.assertGetMe)();
      t = yield (0, s.getFanOutListJob)([e.id, n]);
    }
    try {
      const a = yield (0, i.ensureE2ESessions)(t);
      (0, u.maybePostPrekeysDepletionMetric)({
        count: a == null ? undefined : a.depletedPrekeyCount,
        prekeysFetchReason: f.PREKEYS_FETCH_CONTEXT.USER_INTENT_PREFETCH,
        messageType: e.isGroup ? d.MESSAGE_TYPE.GROUP : d.MESSAGE_TYPE.INDIVIDUAL,
        deviceSizeBucket: n
      });
    } catch (e) {
      if (e instanceof l.ServerStatusCodeError && e.statusCode === 406) {
        __LOG__(2)`eagerlyEstablishE2EESession: ignore prekey fetching error since device is no longer registered (server error: ${e})`;
      } else {
        __LOG__(4, undefined, new Error(), true)`error: ${e}`;
        SEND_LOGS("eagerlyEstablishE2EESession: failed");
      }
    }
  })).apply(this, arguments);
}