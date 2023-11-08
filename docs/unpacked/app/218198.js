var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendAddonMsgData = function () {
  return E.apply(this, arguments);
};
exports.updateAddonAck = m;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = r(require("./670983.js"));
var s = require("./402994.js");
var l = require("./466466.js");
var u = require("./664179.js");
var c = require("./652056.js");
var d = require("./298002.js");
var p = require("./59158.js");
var f = require("./619350.js");
var _ = require("./604538.js");
var g = require("./459857.js");
function m() {
  return h.apply(this, arguments);
}
function h() {
  return (h = (0, a.default)(function* (e, t) {
    const n = (0, i.default)((0, i.default)({}, e), {}, {
      ack: t
    });
    const r = (0, p.getTableModeByMsgType)(e.type);
    yield l.addonBackendTable.updateAck(r, e, (0, o.default)(n.ack, "updatedMsgData.ack"));
    (0, u.getAddonProcessor)(e.type).updateCollection([n]);
  })).apply(this, arguments);
}
const y = e => {
  const t = e.id;
  const n = t.remote;
  if (t.fromMe && (0, g.isMePrimary)(n)) {
    return s.ACK.READ;
  } else {
    return s.ACK.SENT;
  }
};
function E() {
  return (E = (0, a.default)(function* (e, t) {
    try {
      yield (0, c.processMsgs)([e], t);
      yield (0, d.storeSelfMessageTypeRow)(e);
      const {
        encryptAndSendMsg: r
      } = require("./919820.js");
      const {
        count: i,
        t: a
      } = yield r({
        type: _.SendMessageRecordType.Addon,
        data: e
      }, (0, f.msgDataToBaseMsgInfo)(e), t);
      m(e, y(e));
      return {
        t: parseInt(a, 10),
        count: i
      };
    } catch (t) {
      m(e, s.ACK.FAILED);
      __LOG__(3, undefined, undefined, undefined, ["messaging", "addons"])`sendAddonMsgData: failure, msg: ${e.id.toString()}`;
      throw t;
    }
  })).apply(this, arguments);
}