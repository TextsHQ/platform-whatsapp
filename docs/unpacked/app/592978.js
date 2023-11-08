var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createQuotedMsgObj = p;
exports.getQuotedMsgAdminGroupJid = function (e) {
  const t = (0, s.unproxy)(e);
  if (t.quotedMsg == null) {
    return t.quotedRemoteJid;
  } else {
    return null;
  }
};
exports.getQuotedMsgAdminGroupSubject = function (e) {
  const t = (0, s.unproxy)(e);
  if (t.quotedMsg == null) {
    return t.quotedGroupSubject;
  } else {
    return null;
  }
};
exports.getQuotedMsgAdminParentGroupJid = function (e) {
  const t = (0, s.unproxy)(e);
  if (t.quotedMsg == null) {
    return t.quotedParentGroupJid;
  } else {
    return null;
  }
};
exports.getQuotedMsgObj = d;
exports.getQuotedPaymentRequestMsg = f;
exports.isQuotedMsg = function (e, t) {
  const n = d(e);
  return !!n && (0, a.getSender)(n).equals(t);
};
var i = r(require("./670983.js"));
var a = require("./787742.js");
var o = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = c(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("./430231.js"));
var s = require("./163139.js");
var l = require("./459857.js");
var u = r(require("./124928.js"));
function c(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (c = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function d(e) {
  const t = (0, s.unproxy)(e);
  if (!t.quotedMsg && !t.paymentRequestMessageKey) {
    return null;
  }
  const n = t.getCollection();
  if (t.quotedMsgKey) {
    const e = n.get(t.quotedMsgKey);
    if (e) {
      return e.safe();
    }
  }
  let r;
  if (t.quotedMsg) {
    r = p(t);
  } else if (t.paymentRequestMessageKey) {
    r = f(t);
  }
  if (r == null) {
    return null;
  } else {
    t.quotedMsgKey = r.id;
    r.ephemeralDuration = null;
    n.add(r.unsafe());
    return r;
  }
}
function p(e) {
  const t = (0, l.getMaybeMeUser)();
  const n = (0, i.default)(e.quotedParticipant, "msg.quotedParticipant");
  const r = (0, l.isMeAccount)(n);
  const a = r ? "out" : "in";
  const s = e.quotedRemoteJid ? e.quotedRemoteJid : e.id.remote;
  const c = {
    id: e.quotedStanzaID,
    from: r ? t : s,
    to: r ? s : t,
    self: a,
    author: n,
    remote: s
  };
  if (u.default.isGroup(c.from) || u.default.isGroup(c.to) || u.default.isStatusV3(s)) {
    c.participant = (0, i.default)(e.quotedParticipant, "msg.quotedParticipant");
  }
  Object.assign(c, e.quotedMsg);
  return o.createQuotedMsg(c);
}
function f(e) {
  if (!e.paymentRequestMessageKey) {
    return null;
  }
  const t = e.paymentRequestMessageKey.remote ? e.paymentRequestMessageKey.remote : e.id.remote;
  const n = e.paymentRequestMessageKey.fromMe;
  const r = e.paymentRequestMessageKey.self != null ? e.paymentRequestMessageKey.self : n ? "out" : "in";
  const i = e.paymentRequestMessageKey.participant || e.paymentMessageReceiverJid;
  const s = {
    id: e.paymentRequestMessageKey.id,
    from: n ? (0, l.getMaybeMeUser)() : t,
    to: n ? t : (0, l.getMaybeMeUser)(),
    self: r,
    participant: i,
    author: i,
    remote: t,
    amount1000: e.paymentAmount1000,
    currency: e.paymentCurrency,
    receiverJid: (0, a.getSender)(e),
    type: e.type,
    subtype: "request"
  };
  return o.createQuotedMsg(s);
}