var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendMsgRecord = function () {
  return f.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./402994.js");
var s = require("./31162.js");
var l = require("./891244.js");
var u = require("./177205.js");
var c = require("./733694.js");
var d = require("./619350.js");
var p = require("./604538.js");
function f() {
  return (f = (0, a.default)(function* (e, t) {
    let r;
    if (e.isForwarded) {
      r = (0, c.createMessageForwardMetric)(e);
    }
    try {
      const {
        encryptAndSendMsg: i
      } = require("./919820.js");
      const a = yield i({
        type: p.SendMessageRecordType.Message,
        data: e
      }, (0, d.msgToBaseMsgInfo)(e), t);
      if (r) {
        r.then(c.logMessageMetric);
      }
      if (a.error != null) {
        throw new u.MessageSentAckError(a.error);
      }
      return {
        t: parseInt(a.t, 10),
        count: a.count
      };
    } catch (t) {
      __LOG__(3, undefined, undefined, undefined, ["messaging"])`sendMsgRecord: MD send failure, msg: ${e.id.toString()}`;
      let n = {
        isSendFailure: true
      };
      if (t instanceof u.MessageSentAckError) {
        n = (0, i.default)((0, i.default)({}, n), {}, {
          ack: o.ACK.FAILED
        });
      }
      (0, l.updateMessageTable)(e.id, n);
      e.set(n);
      (0, s.updateAddOnSendStatesForMsgAction)(e, n);
      throw t;
    }
  })).apply(this, arguments);
}