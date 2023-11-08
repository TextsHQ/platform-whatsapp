var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.receiptBatcher = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/594654.js"));
var o = require("./392646.js");
var s = require("./418987.js");
var l = require("./498199.js");
var u = require("./402994.js");
var c = require("./558763.js");
var d = require("./359987.js");
var p = require("./910453.js");
var f = require("./522841.js");
var _ = require("./485225.js");
var g = require("./732011.js");
var m = r(require("./565754.js"));
var h = require("./851698.js");
var y = require("./53249.js");
var E = require("./499972.js");
var S = require("./459857.js");
var v = require("./669050.js");
var T = require("./766187.js");
const M = Object.freeze({
  [u.ACK.SENT]: u.ACK_STRING.DELIVERY,
  [u.ACK.RECEIVED]: u.ACK_STRING.DELIVERY,
  [u.ACK.READ]: u.ACK_STRING.READ,
  [u.ACK.PLAYED]: u.ACK_STRING.PLAYED,
  [u.ACK.INACTIVE]: u.ACK_STRING.INACTIVE
});
const A = {
  delayMs: 1000
};
function b() {
  return C.apply(this, arguments);
}
function C() {
  return (C = (0, i.default)(function* (e) {
    const t = e.msgKeys.map(e => m.default.from(e));
    if (e.remote.isStatusV3()) {
      (0, d.frontendFireAndForget)("handleReadStatus", {
        msgKeys: t
      });
      return (0, d.frontendSendAndReceive)("updateMsgPeerAcks", {
        msgKeys: t,
        ack: u.ACK.READ,
        t: e.ts
      });
    }
    if ((e.remote.isUser() || e.remote.isGroup() || e.remote.isNewsletter()) && e.ack >= u.ACK.RECEIVED) {
      if (e.ack === u.ACK.READ) {
        return (0, f.updateChatPeerRead)(e.remote, t);
      }
      if (e.ack === u.ACK.PLAYED) {
        return (0, d.frontendSendAndReceive)("updateMsgPeerAcks", {
          msgKeys: t,
          ack: e.ack,
          t: e.ts
        });
      }
    }
  })).apply(this, arguments);
}
function P(e, t) {
  if (e != null && t != null) {
    return Math.min(e, t);
  }
  const n = e != null ? e : t;
  if (n != null) {
    return n;
  } else {
    return undefined;
  }
}
const O = new class {
  constructor() {
    this._peerReceiptBatcher = (0, o.createSimpleBatcher)(A, e => this._processPeerReceipts(e).then(() => []));
    this._otherReceiptBatcher = (0, o.createSimpleBatcher)(A, e => this._processOtherReceipts(e).then(() => []));
  }
  acceptPeerReceipt(e) {
    return this._peerReceiptBatcher.accept(e);
  }
  acceptOtherReceipt(e) {
    return this._otherReceiptBatcher.accept(e);
  }
  runActiveBatches() {
    return Promise.all([this._peerReceiptBatcher.runActiveBatch(), this._otherReceiptBatcher.runActiveBatch()]).then(() => {});
  }
  _extractPrivacyModeUpdates(e) {
    const t = [];
    for (const {
      ack: n,
      privacyMode: r,
      msgKeys: i,
      receiverId: a
    } of e) {
      if (n === u.ACK.RECEIVED && r != null) {
        t.push({
          remote: a,
          deliveryPrivacyMode: r,
          msgKeys: i.map(e => m.default.from(e))
        });
      }
    }
    return t;
  }
  _processPrivacyModeUpdates(e) {
    return (0, i.default)(function* () {
      yield (0, l.promiseMap)(e, function () {
        var e = (0, i.default)(function* (e) {
          yield (0, _.handlePrivacyModeTransition)(e.remote, e.deliveryPrivacyMode);
          yield (0, T.workerSafeSendAndReceive)("updateBizPrivacyStatus", {
            msgIds: e.msgKeys,
            privacyMode: e.deliveryPrivacyMode
          });
        });
        return function () {
          return e.apply(this, arguments);
        };
      }());
    })();
  }
  _getHighestAcks(e, t) {
    var n = this;
    return (0, i.default)(function* () {
      const r = n._getDirectChatAcks(e);
      const i = t.map(e => m.default.from(e)).filter(e => e.remote.isGroup() || e.remote.isStatusV3() || e.remote.isBot());
      const a = yield (0, c.getHighestMsgAcks)(i);
      for (const [e, t] of a.entries()) {
        r.set(e, t);
      }
      return r;
    })();
  }
  _getDirectChatAcks(e) {
    const t = new Map();
    for (const {
      msgKeys: r,
      ack: i,
      isBotInvoke: a,
      isSender: o
    } of e) {
      for (const e of r) {
        var n;
        if (m.default.from(e).remote.isUser() && a !== true && o !== true) {
          t.set(e, Math.max(i, (n = t.get(e)) !== null && n !== undefined ? n : Number.NEGATIVE_INFINITY));
        }
      }
    }
    return t;
  }
  _getMsgInfoUpdatesForOtherReceipts(e) {
    const t = new Map();
    e.forEach(e => {
      var n;
      const {
        ack: r,
        ts: i,
        receiverId: a,
        msgKeys: o
      } = e;
      const l = a.isNewsletter() ? a.toJid() : (0, v.toUserWid)(a).toString();
      const c = (n = a.device) !== null && n !== undefined ? n : s.DEFAULT_DEVICE_ID;
      o.forEach(e => {
        const n = M[r];
        if (n == null) {
          return void __LOG__(3)`[unify][batcher]: receipt has unsupported ack type ${r}`;
        }
        const a = `${e},${l}`;
        const o = t.get(a);
        if (o) {
          if (n !== M[u.ACK.INACTIVE]) {
            o[n] = P(o[n], i);
          }
          o.deviceDelivered.add(c);
        } else {
          t.set(a, {
            [n]: i,
            deviceDelivered: new Set([c])
          });
        }
      });
    });
    return Array.from(t, e => {
      let [t, n] = e;
      const [r, i] = t.split(",");
      return [[r, i], n];
    });
  }
  _processOtherReceipts(e) {
    var t = this;
    return (0, i.default)(function* () {
      const n = t._getMsgInfoUpdatesForOtherReceipts(e);
      const r = Array.from(new Set((0, a.default)(e, e => e.msgKeys)));
      const o = yield (0, g.getStorage)().lock(["message-info", "message", "chat"], (0, i.default)(function* () {
        const [i, a] = yield Promise.all([(0, y.getMessageInfoTable)().bulkGet(n.map(e => {
          let [t, n] = e;
          return t;
        })), (0, p.bulkGetRootMsgs)(r)]);
        const o = new Map(r.map((e, t) => [e, a[t]]));
        const s = i.map((e, t) => {
          const [[r, i], a] = n[t];
          if (!a) {
            return null;
          }
          if (!e) {
            return {
              delivery: a.delivery,
              read: a.read,
              played: a.played,
              msgKey: r,
              receiverUserJid: i,
              deviceDelivered: Array.from(a.deviceDelivered),
              deviceNotDelivered: []
            };
          }
          const o = a.deviceDelivered;
          e.deviceDelivered.forEach(e => o.add(e));
          return {
            delivery: P(e.delivery, a.delivery),
            read: P(e.read, a.read),
            played: P(e.played, a.played),
            msgKey: e.msgKey,
            receiverUserJid: e.receiverUserJid,
            deviceDelivered: Array.from(o),
            deviceNotDelivered: e.deviceNotDelivered.filter(e => !o.has(e))
          };
        }).filter(Boolean);
        yield (0, y.getMessageInfoTable)().bulkCreateOrReplace(s);
        const l = yield t._getHighestAcks(e, r);
        return {
          ackUpdates: Array.from(l.entries()).map(e => {
            let [t, n] = e;
            const {
              remote: r
            } = m.default.fromString(t);
            if (r.isUser() || r.isGroup() || r.isStatusV3()) {
              var i;
              const e = o.get(t);
              if (e == null) {
                return;
              }
              if (n > ((i = e.ack) !== null && i !== undefined ? i : Number.NEGATIVE_INFINITY)) {
                return {
                  id: e.id.toString(),
                  ack: n
                };
              }
            }
          }).filter(Boolean),
          receiptMsgKeyToMsg: o
        };
      }));
      yield (0, h.getMessageTable)().bulkCreateOrMerge(o.ackUpdates);
      (0, d.frontendFireAndForget)("updateMsgModelAcks", {
        updates: o.ackUpdates.map(e => {
          let {
            id: t,
            ack: n
          } = e;
          return {
            id: m.default.from(t),
            ack: n
          };
        })
      });
      (0, d.frontendFireAndForget)("updateMsgInfo", {
        updates: (0, a.default)(e, e => {
          let {
            msgKeys: t,
            ack: n,
            ts: r,
            receiverId: i
          } = e;
          return t.map(e => {
            const t = o.receiptMsgKeyToMsg.get(e);
            if (t == null) {
              return;
            }
            const a = m.default.from(t.id);
            if (!a.fromMe) {
              return;
            }
            if (!(a.remote.isUser() || a.remote.isGroup() || a.remote.isStatusV3())) {
              return;
            }
            const s = (0, v.toUserWid)(i);
            if (s.equals((0, S.getMeUser)())) {
              return undefined;
            } else {
              return {
                msgKey: a,
                ts: r,
                participant: s,
                ack: n
              };
            }
          });
        }).filter(Boolean)
      });
      t._processPrivacyModeUpdates(t._extractPrivacyModeUpdates(e)).catch(() => {
        __LOG__(4, undefined, new Error())`_processOtherReceipts: failed to process privacy mode updates`;
      });
    })();
  }
  _processPeerReceipts(e) {
    return (0, i.default)(function* () {
      if (e.some(e => !e.isOffline)) {
        return void (yield (0, l.promiseMap)(e, b));
      }
      const t = e.map(e => {
        const {
          ts: t,
          msgKeys: n,
          ack: r
        } = e;
        return {
          ts: t,
          msgKeys: n,
          ack: r
        };
      });
      yield (0, E.getTable)().bulkCreate(t);
    })();
  }
}();
exports.receiptBatcher = O;