var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RetryEligibilityResult = undefined;
exports.createOrMergeReceiptRecords = function (e) {
  const t = new Map();
  e.forEach(e => {
    var n;
    const {
      msgKey: r,
      receiverId: i
    } = e;
    const a = (0, _.toUserWid)(i).toString();
    const s = r.toString();
    const l = `${s},${a}`;
    const u = (n = i.device) !== null && n !== undefined ? n : o.DEFAULT_DEVICE_ID;
    const c = t.get(l);
    if (c) {
      c.deviceNotDelivered.push(u);
    } else {
      t.set(l, {
        msgKey: s,
        receiverUserJid: a,
        deviceDelivered: [],
        deviceNotDelivered: [u]
      });
    }
  });
  return (0, l.getStorage)().lock(["message-info"], function () {
    var e = (0, a.default)(function* (e) {
      let [n] = e;
      const r = Array.from(t.values()).map(e => [e.msgKey, e.receiverUserJid]);
      (yield n.anyOf(["msgKey", "receiverUserJid"], r)).forEach(e => {
        const n = `${e.msgKey},${e.receiverUserJid}`;
        const r = t.get(n);
        if (r) {
          t.set(n, (0, i.default)((0, i.default)({}, e), {}, {
            deviceNotDelivered: [...e.deviceNotDelivered, ...r.deviceNotDelivered]
          }));
        }
      });
      return (0, d.getMessageInfoTable)().bulkCreateOrReplace(Array.from(t.values()));
    });
    return function () {
      return e.apply(this, arguments);
    };
  }());
};
exports.getHighestMsgAcks = function () {
  return M.apply(this, arguments);
};
exports.isRetryEligible = function (e, t, n, r) {
  const i = (0, _.toUserWid)(t).toString();
  const a = t.device || 0;
  return (0, d.getMessageInfoTable)().get([e.toString(), i]).then(s => s ? s.deviceNotDelivered.includes(a) ? n != null && r >= n ? h.ELIGIBLE : t.device != null && t.device !== o.DEFAULT_DEVICE_ID ? (__LOG__(2)`MessageInfoStore: ${e.toString()}, ${i}:${a}: companion identity changed`, h.INELIGIBLE_CHANGED_IDENTITY) : s.delivery != null ? (__LOG__(2)`MessageInfoStore: ${e.toString()}, ${i}:${a}: primary identity change after message has been delivered`, h.INELIGIBLE_CHANGED_IDENTITY) : h.ELIGIBLE : (__LOG__(2)`MessageInfoStore: ${e.toString()}, ${i}:${a} has been delivered`, h.INELIGIBLE_ALREADY_DELIVERED) : (__LOG__(2)`MessageInfoStore: missing record for ${e.toString()}, ${i}`, h.INELIGIBLE_RECORD_MISSING));
};
exports.queryMsgInfo = function () {
  return y.apply(this, arguments);
};
exports.queryMsgInfos = E;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./418987.js");
var s = require("./402994.js");
var l = require("./732011.js");
var u = r(require("./565754.js"));
var c = require("./851698.js");
var d = require("./53249.js");
var p = require("./459857.js");
var f = r(require("./124928.js"));
var _ = require("./669050.js");
var g = r(require("./556869.js"));
const m = [s.ACK_STRING.PLAYED, s.ACK_STRING.READ, s.ACK_STRING.DELIVERY];
const h = Object.freeze({
  ELIGIBLE: "ELGIBLE",
  INELIGIBLE_RECORD_MISSING: "INELIGIBLE_RECORD_MISSING",
  INELIGIBLE_ALREADY_DELIVERED: "INELIGIBLE_ALREADY_DELIVERED",
  INELIGIBLE_NOT_MD: "INELIGIBLE_NOT_MD",
  INELIGIBLE_CHANGED_IDENTITY: "INELIGIBLE_CHANGED_IDENTITY"
});
function y() {
  return (y = (0, a.default)(function* (e) {
    const t = (yield E([e])).get(e.toString());
    if (!t) {
      throw (0, g.default)(`No message info found for ${e.toString()}`);
    }
    return t;
  })).apply(this, arguments);
}
function E() {
  return S.apply(this, arguments);
}
function S() {
  return (S = (0, a.default)(function* (e) {
    const t = yield (0, c.getMessageTable)().bulkGet(e.map(e => e.toString()));
    const n = new Map();
    const r = new Map();
    for (let o = 0; o < e.length; o++) {
      var i;
      var a;
      const s = e[o].toString();
      const l = (i = (a = t[o]) === null || a === undefined ? undefined : a.latestEditMsgKey) !== null && i !== undefined ? i : s;
      r.set(l, s);
      const u = t[o] ? t[o].count : null;
      n.set(l, {
        messageInfoRecords: [],
        ackReceiver: u
      });
    }
    (yield (0, d.getMessageInfoTable)().anyOf(["msgKey"], Array.from(n.keys()))).forEach(e => {
      var t;
      if (!((t = n.get(e.msgKey)) === null || t === undefined)) {
        t.messageInfoRecords.push(e);
      }
    });
    const o = v(n);
    const s = new Map();
    for (const [e, t] of o) {
      const n = r.get(e);
      if (n != null) {
        s.set(n, t);
      }
    }
    return s;
  })).apply(this, arguments);
}
function v(e) {
  const t = new Map();
  for (const [n, r] of e.entries()) {
    const {
      ackReceiver: e,
      messageInfoRecords: i
    } = r;
    let a = 0;
    const o = {
      delivery: [],
      deliveryRemaining: 0,
      played: [],
      playedRemaining: 0,
      read: [],
      readRemaining: 0
    };
    let s = false;
    i.forEach(e => {
      const t = (0, _.createWid)(e.receiverUserJid);
      if (!(0, p.getMeUser)().equals(t)) {
        T(e);
        for (let r = 0; r < m.length; r++) {
          const i = m[r];
          const a = e[i];
          if (a != null) {
            o[i].push({
              id: t,
              t: a
            });
            const e = f.default.isGroup(u.default.fromString(n).remote);
            if (e && i === "read" && (t == null ? undefined : t.isBot())) {
              s = true;
            }
            if (e) {
              break;
            }
          }
        }
        if (e.delivery != null && e.deliveryPrivacyMode != null) {
          o.deliveryPrivacyMode = e.deliveryPrivacyMode;
        }
        a += 1;
      }
    });
    let l = e != null && e !== 0 ? e : a;
    if (s) {
      l++;
    }
    __LOG__(2)`queryMsgInfo: targetedMsgInfoKey: ${n}, ack count: ${e}, receiver: ${l},
played: ${o.played.length}, read: ${o.read.length}, delivery: ${o.delivery.length}`;
    o.playedRemaining = l - o.played.length;
    o.readRemaining = o.playedRemaining - o.read.length;
    o.deliveryRemaining = o.readRemaining - o.delivery.length;
    t.set(n, o);
  }
  return t;
}
function T(e) {
  const t = e.read;
  if (t != null && (e.delivery == null || e.delivery > t)) {
    e.delivery = t;
  }
}
function M() {
  return (M = (0, a.default)(function* (e) {
    const t = new Map();
    const n = yield E(e);
    for (const r of e) {
      const e = n.get(r.toString());
      if (e == null) {
        continue;
      }
      let i;
      if (e.playedRemaining === 0 && e.played.length > 0) {
        i = s.ACK.PLAYED;
      } else if (e.readRemaining === 0 && e.read.length > 0) {
        i = s.ACK.READ;
      } else if (e.deliveryRemaining === 0 && e.delivery.length > 0) {
        i = s.ACK.RECEIVED;
      }
      if (i != null) {
        t.set(r.toString(), i);
      }
    }
    return t;
  })).apply(this, arguments);
}
exports.RetryEligibilityResult = h;