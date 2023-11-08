var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCommsConfig = function (e) {
  const t = e || {
    passive: false,
    pull: false
  };
  return {
    maxRetries: Number.MAX_SAFE_INTEGER,
    openChatSocket: (e, n) => (0, u.default)(t, n).then(n => {
      e();
      t.passive = false;
      return n;
    }),
    healthCheckInterval: 15,
    deadSocketTime: 20000,
    maxSocketLoopWaitTime: 900000,
    shouldCloseStaleSocket: true,
    shouldBlockReceivingUntilSuccess: true,
    handlers: {
      onConnect: () => {
        if ((0, d.isRegistered)()) {
          a.Cmd.setSocketState(c.SOCKET_STATE.CONNECTED);
          a.Cmd.openSocketStream();
        }
      },
      onDisconnect: () => {
        a.Cmd.socketStreamDisconnected();
      },
      onSocketOpen: () => {
        a.Cmd.setSocketState(c.SOCKET_STATE.PAIRING);
      },
      onSocketLoopIteration: () => {
        a.Cmd.setSocketState(c.SOCKET_STATE.OPENING);
      },
      onConnectionChange: () => {},
      onOptimisticConnectionChange: () => {},
      onBeforeCastStanzaForE2E: (e, t) => {
        if (!(!(0, i.getABPropConfigValue)("web_pre_acks_m2_enabled") || e.tag !== "ack" || (t == null ? undefined : t.preAck) || a.Cmd.isOfflineDeliveryEnd)) {
          (0, l.parseAndSerializeOfflinePreAck)(e);
        }
      },
      onCastStanza: () => {},
      onHandleAck: e => {
        (0, o.default)(e);
      },
      onHandleStanza: () => {},
      onSendIq: () => {},
      onClockSkewUpdate: e => {
        (0, s.updateClockSkew)(e);
      }
    }
  };
};
require("./718682.js");
var i = require("./287461.js");
var a = require("./780549.js");
var o = r(require("./871811.js"));
var s = require("./355802.js");
r(require("./97359.js"));
require("./114850.js");
var l = require("./497296.js");
var u = r(require("./128296.js"));
var c = require("./226562.js");
var d = require("./673168.js");