var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MAX_RETRY = undefined;
exports.maybePostMessageHighRetryCountMetric = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./738515.js");
var o = require("./790215.js");
var s = require("./440401.js");
var l = require("./816793.js");
function u() {
  return (u = (0, i.default)(function* (e, t) {
    if (e < 5) {
      return;
    }
    const n = new a.MessageHighRetryCountWamEvent({
      retryCount: e,
      messageType: (0, l.getMessageTypeFromMsgInfoType)(t.type)
    });
    const r = (0, l.getWamE2eSenderType)(t.author);
    if (r != null) {
      n.e2eSenderType = r;
    }
    const i = t.chat;
    if (i == null ? undefined : i.isGroup()) {
      const e = yield (0, s.getGroupMetrics)(i);
      if ((e == null ? undefined : e.deviceSizeBucket) != null) {
        n.deviceSizeBucket = e.deviceSizeBucket;
      }
      if ((e == null ? undefined : e.participantCount) != null && e.participantCount > (0, o.getGroupSizeBypassingSampling)()) {
        n.weight = 0;
      }
    }
    n.commit();
  })).apply(this, arguments);
}
exports.MAX_RETRY = 5;