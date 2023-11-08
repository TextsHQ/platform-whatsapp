var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReadReceiptType = M;
exports.markChatRead = function () {
  return A.apply(this, arguments);
};
exports.markEditedMsgsRead = function () {
  return O.apply(this, arguments);
};
exports.markStatusRead = function () {
  return b.apply(this, arguments);
};
exports.sendAddOnReadReceipts = function () {
  return C.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./418987.js");
var o = r(require("./670983.js"));
var s = require("./632157.js");
var l = require("./402994.js");
var u = require("./35234.js");
var c = require("./359987.js");
var d = require("./732011.js");
var p = r(require("./565754.js"));
var f = require("./373070.js");
var _ = require("./997772.js");
var g = require("./851698.js");
var m = require("./259377.js");
var h = require("./757453.js");
var y = require("./459857.js");
var E = require("./369084.js");
var S = r(require("./124928.js"));
var v = require("./669050.js");
const T = (0, v.createWid)(a.STATUS_JID);
function M(e, t) {
  if (e.isNewsletter() || e.isStatusV3() && t != null && t.isPSA() || S.default.isPSA(e)) {
    return m.RECEIPT_TYPE.READ_SELF;
  } else if (e.isGroup()) {
    return m.RECEIPT_TYPE.READ;
  } else if ((0, h.getUserPrivacySettings)().readReceipts === _.ALL_NONE.none) {
    return m.RECEIPT_TYPE.READ_SELF;
  } else {
    return m.RECEIPT_TYPE.READ;
  }
}
function A() {
  return (A = (0, i.default)(function* (e, t) {
    const n = Date.now().toString();
    const r = String(e.id);
    const i = yield (0, u.queryPendingReadReceiptMsgRows)(r);
    i.sort((e, t) => (e.rowId || 0) - (t.rowId || 0));
    const a = t ? String(t) : null;
    let o = i.length - 1;
    if (a) {
      for (; o >= 0 && i[o].id !== a; o--);
      if (o < 0) {
        o = i.length - 1;
      }
    }
    let s = null;
    const l = [];
    for (; o >= 0; o--) {
      const t = i[o];
      const n = e.msgs.get(t.id);
      if (n && S.default.isPSA(e.id)) {
        (0, E.logChatPSARead)(n);
      }
      if (t.rowId != null && (s == null || t.rowId > s)) {
        s = t.rowId;
      }
      const r = p.default.fromString(t.id);
      if (t.type === f.MSG_TYPE.CIPHERTEXT) {
        (0, c.frontendFireAndForget)("viewPlaceholderWamActions", {
          msgRows: [t]
        });
        continue;
      }
      const a = t.broadcastId || t.from;
      const u = t.author || t.from;
      l.push({
        id: r.id,
        sender: (0, v.createWidFromWidLike)(u),
        chat: (0, v.createWidFromWidLike)(a)
      });
    }
    const [d, _] = P(l);
    yield Promise.all([...Array.from(d.keys()).map(t => {
      const r = d.get(t);
      if (!r) {
        return;
      }
      let i;
      i = e.trusted ? M(e.id) : m.RECEIPT_TYPE.READ_SELF;
      return (0, m.sendAggregateReceipts)(t, i, n, r);
    }), ...Array.from(_.keys()).map(e => {
      const t = d.get(e);
      if (t) {
        return (0, m.sendAggregateReceipts)(e, m.RECEIPT_TYPE.READ_SELF, n, t);
      }
    })]);
    return (0, u.markMessageAndChatAsRead)(s, r, false);
  })).apply(this, arguments);
}
function b() {
  return (b = (0, i.default)(function* (e, t) {
    if (e.remote.user !== "status") {
      return void __LOG__(3)`markStatusRead: message is not a status.`;
    }
    if (e.fromMe) {
      return;
    }
    yield (0, m.sendAggregateReceipts)(T, M(T, (0, o.default)(e.participant, "msgKey.participant")), String(t), new Map([[(0, o.default)(e.participant, "msgKey.participant"), [e.id]]]));
    const n = {
      ack: l.ACK.READ
    };
    if (e.participant && e.participant.isPSA()) {
      n.statusPSAReadTimestamp = t;
    }
    yield (0, g.getMessageTable)().merge(e.toString(), n);
  })).apply(this, arguments);
}
function C() {
  return (C = (0, i.default)(function* (e) {
    const t = String((0, s.unixTime)());
    const [n] = P(e.filter(e => !(0, y.isSerializedWidMe)(e.sender)).map(e => ({
      chat: e.msgKey.remote,
      sender: (0, v.createWidFromWidLike)(e.sender),
      id: e.msgKey.id
    })));
    yield Promise.all(Array.from(n.keys()).map(e => {
      const r = n.get(e);
      if (r) {
        return (0, m.sendAggregateReceipts)(e, m.RECEIPT_TYPE.READ_SELF, t, r);
      }
    }));
  })).apply(this, arguments);
}
function P(e) {
  const t = new Map();
  const n = new Map();
  e.forEach(e => {
    var r;
    var i;
    let {
      chat: a,
      sender: o,
      id: s
    } = e;
    const l = !a.isBot() && o.isBot() ? n : t;
    const u = (r = l.get(a)) !== null && r !== undefined ? r : new Map();
    const c = (i = u.get(o)) !== null && i !== undefined ? i : [];
    c.push(s);
    u.set(o, c);
    l.set(a, u);
  });
  return [t, n];
}
function O() {
  return (O = (0, i.default)(function* (e, t) {
    const n = String(e);
    const r = yield I(n);
    if (!r.length) {
      return;
    }
    const a = [];
    r.forEach(t => {
      const n = p.default.fromString(t.latestEditMsgKey);
      const r = t.author || t.from;
      a.push({
        id: n.id,
        sender: (0, v.createWidFromWidLike)(r),
        chat: (0, v.createWidFromWidLike)(e)
      });
    });
    const [o, s] = P(a);
    const l = o.get(e);
    const u = s.get(e);
    const c = Date.now().toString();
    if (l) {
      let n;
      n = t.trusted ? M(e) : m.RECEIPT_TYPE.READ_SELF;
      yield (0, m.sendAggregateReceipts)(e, n, c, l);
    }
    if (u) {
      yield (0, m.sendAggregateReceipts)(e, m.RECEIPT_TYPE.READ_SELF, c, u);
    }
    return (0, d.getStorage)().lock(["message"], function () {
      var e = (0, i.default)(function* (e) {
        let [t] = e;
        const r = new Set(a.map(e => e.id));
        const i = (yield I(n)).filter(e => r.has(p.default.fromString(e.latestEditMsgKey).id)).map(e => ({
          id: e.id,
          pendingReadReceipt: null
        }));
        if (i.length > 0) {
          yield t.bulkCreateOrMerge(i);
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }());
  })).apply(this, arguments);
}
function I(e) {
  return (0, g.getMessageTable)().equals(["from", "pendingReadReceipt"], [e, 2], {
    shouldDecrypt: false
  });
}