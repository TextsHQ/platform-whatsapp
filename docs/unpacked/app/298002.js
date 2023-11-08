var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSentAddonMsgRecord = function () {
  return f.apply(this, arguments);
};
exports.hasSentAddonMsg = c;
exports.storeSelfMessageTypeRow = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./402994.js");
var o = require("./466466.js");
var s = require("./317851.js");
var l = require("./59158.js");
var u = require("./568979.js");
function c() {
  return d.apply(this, arguments);
}
function d() {
  return (d = (0, i.default)(function* (e) {
    if ((0, s.isUnifiedPinAddonInfraEnabled)()) {
      return (yield (0, u.getSelfAddonMessageTypeTable)().equals(["msgId"], e.id))[0];
    }
  })).apply(this, arguments);
}
function p() {
  return (p = (0, i.default)(function* (e) {
    if ((yield c(e.id)) == null) {
      const t = {
        msgId: e.id.id,
        msgType: e.type
      };
      yield (0, u.getSelfAddonMessageTypeTable)().createOrReplace(t);
    }
  })).apply(this, arguments);
}
function f() {
  return (f = (0, i.default)(function* (e) {
    const t = yield c(e);
    if (t == null) {
      return;
    }
    const n = (0, l.getTableModeByMsgType)(t.msgType);
    const r = yield o.addonBackendTable.getByMsgKey(n, e);
    if (r == null) {
      return void __LOG__(3)`msg-retry: can not find addon ${e.toString()}.`;
    }
    const {
      ack: i
    } = r;
    if (i == null || i < a.ACK.SENT) {
      __LOG__(3, undefined, undefined, true)`msg-retry: can not find addon ${e.toString()}.`;
      return void SEND_LOGS("msg-retry");
    } else {
      return {
        msgData: r,
        selfMsgRow: t
      };
    }
  })).apply(this, arguments);
}