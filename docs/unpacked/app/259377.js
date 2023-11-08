var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RECEIPT_TYPE = undefined;
exports.sendAggregateReceipts = function () {
  return y.apply(this, arguments);
};
exports.sendBotInvokeResponseAcks = h;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = r(require("../vendor/385564.js"));
var s = require("./250281.js");
var l = require("./716358.js");
var u = require("./347387.js");
var c = require("./707065.js");
var d = require("./355813.js");
var p = require("./997772.js");
var f = require("./757453.js");
const _ = Object.freeze({
  INACTIVE: "inactive",
  SENDER: "sender",
  DELIVERY: "delivery",
  READ: "read",
  READ_SELF: "read-self",
  PLAYED: "played",
  PLAYED_SELF: "played-self",
  HISTORY_SYNC_COMPLETION: "hist_sync",
  SERVER_ERROR: "server-error",
  PEER_MSG: "peer_msg"
});
exports.RECEIPT_TYPE = _;
Object.freeze({
  PEER: "peer"
});
const g = new u.WapParser("readReceiptAckParser", e => {
  e.assertTag("ack");
  return {
    readReceipts: e.hasAttr("readreceipts") ? e.attrEnum("readreceipts", p.ALL_NONE) : null
  };
});
function m(e, t) {
  const [n, ...r] = (0, o.default)(Array.from(t.values()));
  const i = r.length > 0 ? (0, l.wap)("list", null, r.map(e => (0, l.wap)("item", {
    id: (0, l.CUSTOM_STRING)(e)
  }))) : null;
  const a = (0, l.wap)("ack", {
    id: (0, l.CUSTOM_STRING)(n),
    to: (0, d.JID)(e),
    class: (0, l.CUSTOM_STRING)("message"),
    type: (0, l.CUSTOM_STRING)("text")
  }, i);
  return (0, s.deprecatedCastStanza)(a);
}
function h(e, t, n, r) {
  const [i, ...a] = e;
  const o = a.length > 0 ? (0, l.wap)("list", null, a.map(e => (0, l.wap)("item", {
    id: (0, l.CUSTOM_STRING)(e)
  }))) : null;
  const u = (0, l.wap)("ack", {
    id: (0, l.CUSTOM_STRING)(i),
    to: (0, d.JID)(t),
    recipient: n != null ? (0, d.USER_JID)(n) : l.DROP_ATTR,
    participant: r != null ? (0, d.USER_JID)(r) : l.DROP_ATTR,
    class: (0, l.CUSTOM_STRING)("message"),
    type: (0, l.CUSTOM_STRING)("text")
  }, o);
  return (0, s.deprecatedCastStanza)(u);
}
function y() {
  return (y = (0, a.default)(function* (e, t, n, r, o, u) {
    if (e.isNewsletter() && t === _.DELIVERY) {
      return m(e, r);
    }
    const p = t === _.READ || t === _.PLAYED || t === _.READ_SELF || t === _.PLAYED_SELF || t === _.HISTORY_SYNC_COMPLETION;
    yield Promise.all(Array.from(r.keys()).map(m => {
      const y = r.get(m);
      if (!y || y.length === 0) {
        return;
      }
      const E = !e.isBot() && m.isBot();
      if (t === _.DELIVERY && E) {
        let t;
        let n;
        let r;
        if (e.isUser()) {
          t = m;
          n = e;
        } else {
          t = e;
          r = m;
        }
        return void h(y, t, n, r);
      }
      const S = e.isUser() || e.isNewsletter() ? null : m;
      let v = e;
      let T = o;
      if (T == null && e.isUser() && !e.isBot() && m.isBot()) {
        v = m;
        T = e;
      }
      const M = [];
      for (; y.length > 0;) {
        const e = y.splice(0, 256);
        let r = null;
        if (e.length > 1) {
          r = (0, l.wap)("list", null, e.slice(1).map(e => (0, l.wap)("item", {
            id: (0, l.CUSTOM_STRING)(e)
          })));
        }
        const o = (0, l.wap)("receipt", {
          to: (0, d.JID)(v),
          type: t === _.DELIVERY ? l.DROP_ATTR : (0, l.CUSTOM_STRING)(t),
          msgtype: u ? (0, l.CUSTOM_STRING)(u) : l.DROP_ATTR,
          id: (0, l.CUSTOM_STRING)(e[0]),
          t: n != null ? (0, l.CUSTOM_STRING)(n) : l.DROP_ATTR,
          participant: S ? (0, d.DEVICE_JID)(S) : l.DROP_ATTR,
          recipient: T ? (0, d.USER_JID)(T) : l.DROP_ATTR
        }, r);
        if (p) {
          const n = function () {
            var n = (0, a.default)(function* () {
              const n = {
                id: e[0],
                from: v,
                class: "receipt",
                type: t,
                participant: S,
                recipient: T
              };
              if (t !== _.READ && t !== _.READ_SELF) {
                return (0, s.deprecatedSendStanzaAndWaitForAck)(o, (0, c.toCoreAckTemplate)(n));
              }
              {
                const e = yield (0, s.deprecatedSendStanzaAndReturnAck)(o, (0, c.toCoreAckTemplate)(n));
                const t = g.parse(e);
                if (t.error) {
                  __LOG__(4, undefined, new Error(), true)`[messaging] sendAggregateReceipts: Invalid ack from server`;
                  SEND_LOGS("Invalid-Receipt-Ack");
                } else {
                  const {
                    readReceipts: e
                  } = t.success;
                  if (e != null) {
                    (0, f.setUserPrivacySettings)((0, i.default)((0, i.default)({}, (0, f.getUserPrivacySettings)()), {}, {
                      readReceipts: e
                    }));
                  }
                }
              }
            });
            return function () {
              return n.apply(this, arguments);
            };
          }();
          M.push(n());
        } else {
          M.push((0, s.deprecatedCastStanza)(o));
        }
      }
      return Promise.all(M);
    }));
  })).apply(this, arguments);
}