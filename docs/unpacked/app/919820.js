var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encryptAndSendKeyDistributionMsg = function () {
  return h.apply(this, arguments);
};
exports.encryptAndSendMsg = function () {
  return m.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("./797137.js"));
var o = require("./566509.js");
var s = require("./141797.js");
var l = require("./47.js");
var u = require("./178777.js");
var c = require("./342223.js");
var d = require("./325392.js");
var p = require("./784399.js");
var f = require("./684290.js");
var _ = require("./718451.js");
var g = r(require("./556869.js"));
function m() {
  return (m = (0, i.default)(function* (e, t, n) {
    yield (0, a.default)();
    const {
      id: r,
      to: i
    } = t;
    if (!r || !r.id) {
      return Promise.reject((0, g.default)("[messaging] sending message without an id"));
    }
    if (!i) {
      return Promise.reject((0, g.default)("[messaging] sending message without an remote id"));
    }
    const o = (0, l.createOutgoingMessageProtobuf)(e);
    if (i.isUser()) {
      const r = (0, p.encryptAndSendUserMsg)(e, t, o, n);
      (0, d.sendTcToken)(i);
      return r;
    }
    if (i.isGroup()) {
      return (0, c.encryptAndSendGroupMsg)(e, t, o, n);
    } else {
      return Promise.reject((0, g.default)("[messaging] unsupported remote jid type"));
    }
  })).apply(this, arguments);
}
function h() {
  return (h = (0, i.default)(function* (e) {
    yield (0, a.default)();
    if (!e.id) {
      return Promise.reject((0, g.default)("[messaging] sending message without an id"));
    }
    if (!e.remote) {
      return Promise.reject((0, g.default)("[messaging] sending message without an remote id"));
    }
    if (e.remote.isGroup()) {
      const t = (0, s.createMessageSendMetricReporter)({
        messageIsInvisible: true
      });
      const n = new o.MessageSendPerfReporter({
        chatWid: e.remote,
        mediaType: f.MEDIA_TYPE.NONE,
        messageType: _.MESSAGE_TYPE.GROUP
      });
      n.setMessageIsInvisible(true);
      return (0, u.encryptAndSendGroupKeyDistributionMsg)(e, t).then(() => {
        n.postWrittenWireStage();
        t.post();
      });
    }
    return Promise.reject((0, g.default)("[messaging] unsupported remote jid type"));
  })).apply(this, arguments);
}