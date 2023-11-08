var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bulkUpdateGroupParticipantsInTransaction = function () {
  return f.apply(this, arguments);
};
exports.updateGroupParticipantsInTransaction = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./418987.js");
var s = require("./437695.js");
var l = require("./918475.js");
var u = require("./459857.js");
var c = require("./499497.js");
var d = require("./669050.js");
function p() {
  return (p = (0, a.default)(function* (e, t, n) {
    let r;
    try {
      r = yield (0, l.getParticipantTable)().equals(["participants"], String(e));
    } catch (e) {
      if (e.toString().includes("Failed to read large IndexedDB value")) {
        __LOG__(4, undefined, new Error(), true)`updateGroupParticipantsInTransaction: error: ${e}`;
        SEND_LOGS("indexeddb-participant-read-large-value");
      }
      throw e;
    }
    const a = r.map(r => {
      let a = r.rotateKey;
      const o = new Map(r.senderKey);
      n.forEach(t => {
        var n;
        const r = String((0, d.createDeviceWidFromUserAndDevice)(e.user, e.server, t));
        a = a || (n = o.get(r)) !== null && n !== undefined && n;
        o.delete(r);
      });
      if (a) {
        o.forEach((e, t) => o.set(t, false));
      }
      t.forEach(t => {
        o.set(String((0, d.createDeviceWidFromUserAndDevice)(e.user, e.server, t)), false);
      });
      _(e, a, r, t, n);
      return (0, i.default)((0, i.default)({}, r), {}, {
        senderKey: o,
        rotateKey: a
      });
    });
    return (0, l.getParticipantTable)().bulkCreateOrReplace(a);
  })).apply(this, arguments);
}
function f() {
  return (f = (0, a.default)(function* (e) {
    if (e.length === 0) {
      return;
    }
    let t;
    try {
      t = yield (0, l.getParticipantTable)().anyOf(["participants"], e.map(e => String(e.wid)));
    } catch (e) {
      if (e.toString().includes("Failed to read large IndexedDB value")) {
        __LOG__(4, undefined, new Error(), true)`bulkUpdateGroupParticipantsInTransaction: error: ${e}`;
        SEND_LOGS("indexeddb-participant-bulk-read-large-value");
      }
      throw e;
    }
    if (t.length === 0) {
      return;
    }
    const n = new Map();
    e.forEach(e => {
      n.set(String(e.wid), e);
    });
    const r = t.map(e => {
      let t = e.rotateKey;
      const r = new Map(e.senderKey);
      e.participants.forEach(i => {
        const a = n.get(i);
        if (!a) {
          return;
        }
        const {
          wid: o,
          added: s,
          removed: l
        } = a;
        l.forEach(e => {
          var n;
          const i = String((0, d.createDeviceWidFromUserAndDevice)(a.wid.user, a.wid.server, e));
          t = t || (n = r.get(i)) !== null && n !== undefined && n;
          r.delete(i);
        });
        if (t) {
          r.forEach((e, t) => r.set(t, false));
        }
        s.forEach(e => {
          r.set(String((0, d.createDeviceWidFromUserAndDevice)(a.wid.user, a.wid.server, e)), false);
        });
        _(o, t, e, s, l);
      });
      return (0, i.default)((0, i.default)({}, e), {}, {
        senderKey: r,
        rotateKey: t
      });
    });
    return (0, l.getParticipantTable)().bulkCreateOrReplace(r);
  })).apply(this, arguments);
}
function _(e, t, n, r, i) {
  if (t && !n.rotateKey) {
    var a;
    let t;
    t = i.includes(o.DEFAULT_DEVICE_ID) && r.includes(o.DEFAULT_DEVICE_ID) ? c.EXPIRY_REASON.IDENTITY_CHANGE : ((a = (0, u.getMaybeMeUser)()) === null || a === undefined ? undefined : a.equals(e)) ? c.EXPIRY_REASON.PEER_COMPANION_UNPAIR : c.EXPIRY_REASON.OTHER_DEVICE_UNPAIR;
    (0, s.postSenderKeyExpiredMetric)({
      chatId: n.groupId,
      deviceCount: n.senderKey.size,
      expiryReason: t
    });
  }
}