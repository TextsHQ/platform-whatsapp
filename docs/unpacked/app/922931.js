var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decryptDataInMsgModel = function () {
  return f.apply(this, arguments);
};
exports.encryptDataInMsgModel = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./848755.js");
var o = r(require("./565754.js"));
var s = require("./426750.js");
var l = require("./412744.js");
var u = require("./65410.js");
var c = require("./394629.js");
var d = require("./385914.js");
function p() {
  return (p = (0, i.default)(function* (e) {
    const {
      cachedPasscodeDerivedKey: t
    } = u.waNoiseInfo;
    if (t == null) {
      return void location.reload();
    }
    const n = g(e);
    const r = new Uint8Array(16);
    self.crypto.getRandomValues(r);
    const i = yield self.crypto.subtle.encrypt({
      iv: r,
      name: "AES-GCM"
    }, t, n);
    e.encryptedData = {
      iv: r,
      data: i
    };
  })).apply(this, arguments);
}
function f() {
  return (f = (0, i.default)(function* (e, t) {
    const {
      encryptedData: n
    } = e;
    if (n == null) {
      return;
    }
    _(e, yield self.crypto.subtle.decrypt({
      iv: n.iv,
      name: "AES-GCM"
    }, t, n.data));
    e.encryptedData = null;
  })).apply(this, arguments);
}
function _(e, t) {
  const n = (0, c.decodeProtobuf)(l.MsgRowOpaqueDataSpec, t);
  const {
    currentMsg: r,
    quotedMsg: i
  } = n;
  if (r) {
    h(e, r);
  }
  if (e.quotedMsg && i) {
    h(e.quotedMsg, r);
  }
  e.encryptedData = null;
}
function g(e) {
  const t = {
    currentMsg: {},
    quotedMsg: {}
  };
  t.currentMsg = m(e);
  if (e.quotedMsg) {
    t.quotedMsg = m(e.quotedMsg);
  }
  return (0, d.encodeProtobuf)(l.MsgRowOpaqueDataSpec, t).readBuffer();
}
const m = e => {
  var t;
  const n = {};
  if ((t = e.paymentNoteMsg) === null || t === undefined ? undefined : t.body) {
    n.paymentNoteMsgBody = e.paymentNoteMsg.body;
    e.paymentNoteMsg.body = undefined;
  }
  a.MSG_OPAQUE_DATA_KEYS.forEach(t => {
    if (e[t] && a.MsgKeyFieldsInOpaqueData.includes(t)) {
      n[t] = e[t].toString();
    } else {
      n[t] = e[t];
    }
    e[t] = undefined;
  });
  n.pollOptions = (0, s.compressPollOptions)(e.pollOptions);
  e.pollOptions = undefined;
  return n;
};
const h = (e, t) => {
  if (t.paymentNoteMsgBody != null && e.paymentNoteMsg) {
    e.paymentNoteMsg.body = t == null ? undefined : t.paymentNoteMsgBody;
  }
  a.MSG_OPAQUE_DATA_KEYS.forEach(n => {
    const r = t[(0, a.getKey)(e.type, n)];
    if (r && a.MsgKeyFieldsInOpaqueData.includes(n)) {
      e[n] = o.default.fromString(r);
    } else {
      e[n] = r;
    }
  });
  e.pollOptions = (0, s.expandPollOptions)(t == null ? undefined : t.pollOptions);
};