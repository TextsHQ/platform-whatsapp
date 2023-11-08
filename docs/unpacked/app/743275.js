var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGroupSignalSession = function () {
  return C.apply(this, arguments);
};
exports.createSignalSession = function () {
  return E.apply(this, arguments);
};
exports.deleteDeviceSenderKey = function (e) {
  const t = String((0, _.createSignalAddress)(e));
  return m.waSignalStore.removeSenderKeyBySenderId(t);
};
exports.deleteGroupSenderKeyInfo = function (e, t) {
  const n = (0, _.createSignalAddress)(t);
  const r = `${e.toString({
    legacy: true
  })}::${n.toString()}`;
  return m.waSignalStore.removeSenderKey(r);
};
exports.deleteRemoteInfo = function () {
  return v.apply(this, arguments);
};
exports.deleteRemoteSession = function (e) {
  const t = (0, _.createSignalAddress)(e).toString();
  return (0, g.getSignalProtocolStore)().removeSession(t);
};
exports.getGroupSenderKeyInfo = function () {
  return P.apply(this, arguments);
};
exports.getRemoteRegId = function () {
  return S.apply(this, arguments);
};
exports.hasSameBaseKey = function () {
  return b.apply(this, arguments);
};
exports.hasSignalSessions = function (e) {
  return (0, g.getPersistSignalProtocolStore)().containSessions(e.map(e => (0, _.createSignalAddress)(e).toString()));
};
exports.maybeDeleteUnconvertedSession = function (e) {
  const t = (0, _.createSignalAddress)(e).toString();
  return (0, g.getPersistSignalProtocolStore)().maybeCleanUpUnconvertedSession(t);
};
exports.saveSessionBaseKey = function () {
  return A.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./904704.js");
var o = require("./418987.js");
var s = require("./678002.js");
var l = require("./403206.js");
var u = require("./130309.js");
var c = require("./492917.js");
var d = require("./731973.js");
var p = require("./231091.js");
var f = r(require("./561612.js"));
var _ = require("./999821.js");
var g = require("./76256.js");
var m = require("./326314.js");
var h = require("./669050.js");
var y = r(require("./556869.js"));
function E() {
  return (E = (0, i.default)(function* (e) {
    const {
      wid: t,
      identity: n,
      deviceIdentity: r
    } = e;
    __LOG__(2)`Signal::createSignalSession`;
    if (t.device != null && t.device !== o.DEFAULT_DEVICE_ID) {
      if (!r) {
        throw (0, y.default)("Signal::createSignalSession: expected device-identity in keyBundle for companion device");
      }
      if (!(yield (0, s.validateADVwithIdentityKey)(t, r, n))) {
        throw (0, y.default)("Signal::createSignalSession: invalid identityKey fetched");
      }
    }
    let i;
    let u;
    let d;
    try {
      i = (0, l.toSignalCurvePubKey)(new a.Binary(e.identity).readBuffer());
    } catch (e) {
      __LOG__(4, undefined, new Error(), true)`Assertion failed!`;
      SEND_LOGS("Signal::createSignalSession: invalid identityKey fetched");
      throw e;
    }
    try {
      u = (0, l.toSignalCurvePubKey)(new a.Binary(e.skey.pubkey).readBuffer());
    } catch (e) {
      __LOG__(4, undefined, new Error(), true)`Assertion failed!`;
      SEND_LOGS("Signal::createSignalSession: invalid signedPreKey fetched");
      throw e;
    }
    if (e.key) {
      try {
        d = (0, l.toSignalCurvePubKey)(new a.Binary(e.key.pubkey).readBuffer());
      } catch (e) {
        __LOG__(4, undefined, new Error(), true)`Assertion failed!`;
        SEND_LOGS("Signal::createSignalSession: invalid preKey fetched");
      }
    }
    const f = {
      registrationId: e.regId,
      identityKey: i,
      signedPreKey: {
        keyId: e.skey.id,
        publicKey: u,
        signature: new a.Binary(e.skey.signature).readBuffer()
      }
    };
    if (e.key && d) {
      f.preKey = {
        keyId: e.key.id,
        publicKey: d
      };
    }
    if ((0, c.isCryptoLibraryEnabled)()) {
      return (0, p.createSignalSession)(f, t);
    } else {
      return new self.libsignal.SessionBuilder((0, g.getPersistSignalProtocolStore)(), (0, _.createSignalAddress)(t)).processPreKey(f);
    }
  })).apply(this, arguments);
}
function S() {
  return (S = (0, i.default)(function* (e) {
    if ((0, c.isCryptoLibraryEnabled)()) {
      return (0, p.getRemoteRegId)(e);
    }
    const t = new self.libsignal.SessionCipher((0, g.getPersistSignalProtocolStore)(), (0, _.createSignalAddress)(e));
    return (yield Promise.resolve(t)).getRemoteRegistrationId();
  })).apply(this, arguments);
}
function v() {
  return (v = (0, i.default)(function* (e) {
    const t = (0, _.createSignalAddress)(e).toString();
    yield Promise.all([(0, g.getSignalProtocolStore)().removeIdentity(t), (0, g.getSignalProtocolStore)().removeSession(t)]);
  })).apply(this, arguments);
}
function T() {
  return M.apply(this, arguments);
}
function M() {
  return (M = (0, i.default)(function* (e, t) {
    if ((0, c.isCryptoLibraryEnabled)()) {
      const e = (0, o.unsafeCoerceToDeviceJid)(t.toJid());
      const n = yield f.default.getSessionAliceBaseKey(e, (0, d.getCryptoDbCallbacks)().loadSession);
      if (n.success === true) {
        return n.value;
      } else {
        return null;
      }
    }
    return e.getSessionBaseKey();
  })).apply(this, arguments);
}
function A() {
  return (A = (0, i.default)(function* (e, t) {
    const n = (0, _.createSignalAddress)(e);
    const r = new self.libsignal.SessionInfo((0, g.getPersistSignalProtocolStore)(), n);
    const i = yield T(r, e);
    if (i) {
      yield m.waSignalStore.saveBaseKey(n.toString(), t, i);
    } else {
      __LOG__(2)`saveSessionBaseKey: for ${t}, no basekey provided`;
    }
  })).apply(this, arguments);
}
function b() {
  return (b = (0, i.default)(function* (e, t) {
    const n = (0, _.createSignalAddress)(e);
    const r = new self.libsignal.SessionInfo((0, g.getPersistSignalProtocolStore)(), (0, _.createSignalAddress)(e));
    const [i, a] = yield Promise.all([T(r, e), m.waSignalStore.loadBaseKey(n.toString(), t)]);
    if (a) {
      if (i) {
        if ((0, _.bufferEqual)(a, i)) {
          __LOG__(2)`hasSameBaseKey: MsgId: ${t}, savedBaseKey and sessionBaseKey is same`;
          return true;
        } else {
          __LOG__(2)`hasSameBaseKey: MsgId: ${t}, savedBaseKey and sessionBaseKey is different `;
          return false;
        }
      } else {
        __LOG__(2)`hasSameBaseKey: MsgId: ${t}, no session has been saved locally `;
        return false;
      }
    } else {
      __LOG__(2)`hasSameBaseKey: MsgId: ${t}, no base key has been saved locally `;
      return false;
    }
  })).apply(this, arguments);
}
function C() {
  return (C = (0, i.default)(function* (e, t, n) {
    if ((0, c.isCryptoLibraryEnabled)()) {
      return (0, p.createGroupSenderSignalSession)((0, h.createWid)(t), e, n);
    }
    const r = new self.libsignal.GroupCipher((0, g.getSignalProtocolStore)(), t, (0, _.createSignalAddress)(e));
    return (yield Promise.resolve(r)).decryptSenderKeyDistributionMessage(n);
  })).apply(this, arguments);
}
function P() {
  return (P = (0, i.default)(function* (e, t) {
    if ((0, c.isCryptoLibraryEnabled)()) {
      return (0, u.getGroupSenderKeyInfo)(e, t);
    }
    const n = new self.libsignal.GroupCipher((0, g.getPersistSignalProtocolStore)(), e.toString({
      legacy: true
    }), (0, _.createSignalAddress)(t));
    const r = yield n.createSenderKeyDistributionMsg();
    return (0, _.strToBuffer)(r);
  })).apply(this, arguments);
}