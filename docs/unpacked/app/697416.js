var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decryptGroupSignalProto = function () {
  return m.apply(this, arguments);
};
exports.decryptSignalProto = function () {
  return _.apply(this, arguments);
};
exports.encryptSenderKeyMsgSignalProto = function () {
  return h.apply(this, arguments);
};
exports.encryptSignalProto = function () {
  return g.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./303754.js");
var o = require("./130309.js");
var s = require("./492917.js");
var l = require("./695769.js");
var u = require("./91923.js");
var c = require("./999821.js");
var d = require("./76256.js");
var p = require("./743275.js");
var f = r(require("./556869.js"));
function _() {
  return (_ = (0, i.default)(function* (e, t, n) {
    if ((0, s.isCryptoLibraryEnabled)()) {
      return (0, o.decryptSignalProto)(e, t, n);
    }
    const r = new self.libsignal.SessionCipher((0, d.getSignalProtocolStore)(), (0, c.createSignalAddress)(e));
    try {
      const e = yield Promise.resolve(r);
      let i;
      switch (t) {
        case a.CiphertextType.Pkmsg:
          i = yield e.decryptPreKeyWhisperMessage(n);
          break;
        case a.CiphertextType.Msg:
          i = yield e.decryptWhisperMessage(n);
          break;
        default:
          return Promise.reject((0, f.default)(`decryptSignalProto: Received unsupported msg type ${t}`));
      }
      return i;
    } catch (e) {
      if (e && e.reason === "call_failure" && e.value && typeof e.value.result == "number") {
        __LOG__(3)`decryptSignalProto error code ${e.value.result}`;
      } else {
        if (e && e.name === "MessageCounterError") {
          return Promise.reject(new u.SignalMessageCounterError(e));
        }
        __LOG__(3)`decryptSignalProto js error ${e}`;
      }
      return Promise.reject(new u.SignalDecryptionError(e));
    }
  })).apply(this, arguments);
}
function g() {
  return (g = (0, i.default)(function* (e, t) {
    if ((0, s.isCryptoLibraryEnabled)()) {
      return (0, o.encryptSignalProto)(e, t);
    }
    const n = yield new self.libsignal.SessionCipher((0, d.getSignalProtocolStore)(), (0, c.createSignalAddress)(e));
    const {
      type: r,
      body: i
    } = yield n.encrypt(t);
    __LOG__(2)`encryptSignalProto complete, type=${r}`;
    return {
      type: r === 3 ? a.CiphertextType.Pkmsg : a.CiphertextType.Msg,
      ciphertext: (0, c.strToBuffer)(i)
    };
  })).apply(this, arguments);
}
function m() {
  return (m = (0, i.default)(function* (e, t, n) {
    if ((0, s.isCryptoLibraryEnabled)()) {
      return (0, o.decryptGroupSignalProto)(e, t, n);
    }
    const r = (0, l.getCryptoLibDebugHelperInstance)();
    try {
      const i = yield new self.libsignal.GroupCipher((0, d.getSignalProtocolStore)(), e.toString({
        legacy: true
      }), (0, c.createSignalAddress)(t));
      yield r == null ? undefined : r.loadCurrentCryptoGroupSession(e, t);
      const a = yield i.decryptSenderKeyMessage(n);
      if (!(r == null)) {
        r.verifyCryptoGroupDecryption(e, t, n);
      }
      return a;
    } catch (e) {
      if (e && e.name === "MessageCounterError") {
        throw new u.SignalMessageCounterError(e);
      }
      throw new u.SignalDecryptionError(e);
    }
  })).apply(this, arguments);
}
function h() {
  return (h = (0, i.default)(function* (e, t, n) {
    if ((0, s.isCryptoLibraryEnabled)()) {
      return (0, o.encryptSenderKeyMsgSignalProto)(e, t, n);
    }
    const r = yield (0, p.getGroupSenderKeyInfo)(e, t);
    const i = new self.libsignal.GroupCipher((0, d.getSignalProtocolStore)(), e.toString({
      legacy: true
    }), (0, c.createSignalAddress)(t));
    const a = yield Promise.resolve(i).then(e => e.encrypt(n));
    return {
      ciphertext: (0, c.strToBuffer)(a),
      senderKeyBytes: r
    };
  })).apply(this, arguments);
}