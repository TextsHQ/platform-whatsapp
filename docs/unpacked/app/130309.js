var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSignalSession = function () {
  return v.apply(this, arguments);
};
exports.decryptGroupSignalProto = function (e, t, n) {
  __LOG__(2)`CryptoLibrarySignal::decryptGroupSignalProto`;
  let r = null;
  return S().decryptGroupContent({
    loadSenderKeySession: E.loadSenderKeySession,
    saveSenderKeySession: E.saveSenderKeySession
  }, (0, g.widToMulticastJid)(e), (0, g.widToDeviceJid)(t), n, e => {
    r = (0, a.uint8ArrayToBuffer)(e);
    return Promise.resolve();
  }).then(e => {
    if (e.success) {
      if (r == null) {
        throw new _.SignalDecryptionError("Null result on successful decryption of group msg");
      }
      return r;
    }
    const {
      error: t
    } = e;
    __LOG__(3)`CryptoLibrarySignal::decryptGroupMessage failed ${t}`;
    throw t === "errDuplicateMsg" ? new _.SignalMessageCounterError(t) : new _.SignalDecryptionError(t);
  }).catch(e => {
    if (e instanceof _.SignalDecryptionError || e instanceof _.SignalMessageCounterError) {
      throw e;
    }
    __LOG__(4, undefined, new Error())`CryptoLibrarySignal::decryptGroupSignalProto failed to decrypt: ${e}`;
    throw new _.SignalDecryptionError("Unexpected decryption error");
  });
};
exports.decryptSignalProto = function () {
  return T.apply(this, arguments);
};
exports.encryptSenderKeyMsgSignalProto = function () {
  return A.apply(this, arguments);
};
exports.encryptSignalProto = function (e, t) {
  __LOG__(2)`CryptoLibrarySignal::encryptSignalProto`;
  return S().encryptContent({
    handleNewSession: E.handleNewSession,
    loadSession: E.loadSession
  }, (0, g.widToDeviceJid)(e), t, null).then(e => {
    if (e.success) {
      var t;
      const {
        type: n,
        ciphertext: r
      } = e.value;
      return {
        type: (t = c.CiphertextType.cast(n)) !== null && t !== undefined ? t : c.CiphertextType.Msg,
        ciphertext: (0, a.uint8ArrayToBuffer)(r)
      };
    }
    __LOG__(3)`CryptoLibrarySignal::encryptSignalProto:failed with error ${e.error}`;
    throw (0, m.default)(e.error);
  });
};
exports.getCryptoLibModule = S;
exports.getGroupSenderKeyInfo = function () {
  return b.apply(this, arguments);
};
exports.getRemoteRegId = function () {
  return M.apply(this, arguments);
};
exports.processSenderKeyDistributionMsg = function (e, t, n) {
  __LOG__(2)`CryptoLibrarySignal::processSenderKeyDistributionMsg`;
  return S().saveSenderKeySession({
    loadSenderKeySession: E.loadSenderKeySession,
    saveSenderKeySession: E.saveSenderKeySession
  }, e, (0, g.widToDeviceJid)(t), new Uint8Array(n)).then(e => {
    if (!e.success) {
      __LOG__(3)`CryptoLibrarySignal::processSenderKeyDistributionMsg failed with error ${e.error}`;
      throw (0, m.default)(e.error);
    }
  });
};
var i = r(require("../vendor/348926.js"));
var a = require("./881841.js");
var o = y(require("./661153.js"));
var s = y(require("./684848.js"));
var l = require("./418987.js");
var u = require("./685419.js");
var c = require("./303754.js");
var d = require("./492917.js");
var p = require("./731973.js");
var f = r(require("./561612.js"));
var _ = require("./91923.js");
var g = require("./574819.js");
var m = r(require("./556869.js"));
function h(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (h = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function y(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = h(t);
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
}
const E = (0, p.getCryptoDbCallbacks)();
function S() {
  if ((0, d.isCryptoLibraryWithQueuesEnabled)()) {
    return {
      establishOutgoingSession: s.establishOutgoingSession,
      decryptContent: s.decryptContent,
      encryptContent: s.encryptContent,
      encryptGroupContent: s.encryptGroupContent,
      decryptGroupContent: s.decryptGroupContent,
      saveSenderKeySession: s.saveSenderKeySession,
      rotateGroupSenderKey: s.rotateGroupSenderKey
    };
  } else {
    return {
      establishOutgoingSession: o.establishOutgoingSession,
      decryptContent: o.decryptContent,
      encryptContent: o.encryptContent,
      encryptGroupContent: o.encryptGroupContent,
      decryptGroupContent: o.decryptGroupContent,
      saveSenderKeySession: o.saveSenderKeySession,
      rotateGroupSenderKey: o.rotateGroupSenderKey
    };
  }
}
function v() {
  return (v = (0, i.default)(function* (e, t) {
    __LOG__(2)`CryptoLibrarySignal::createSignalSession`;
    const n = yield E.getRegistrationInfo();
    if (!n) {
      throw (0, m.default)("No registration info found");
    }
    return S().establishOutgoingSession({
      handleNewSession: E.handleNewSession
    }, n, (0, g.widToDeviceJid)(e), t).then(e => {
      if (!e.success) {
        __LOG__(3)`CryptoLibrarySignal::createSignalSession failed with error ${e.error}`;
        throw (0, m.default)(e.error);
      }
    });
  })).apply(this, arguments);
}
function T() {
  return (T = (0, i.default)(function* (e, t, n) {
    __LOG__(2)`CryptoLibrarySignal::decryptSignalProto`;
    const r = t === c.CiphertextType.Pkmsg ? "pkmsg" : "msg";
    let i;
    const o = yield E.getRegistrationInfo();
    if (o) {
      return S().decryptContent({
        handleNewSession: E.handleNewSession,
        loadOneTimePreKey: E.loadOneTimePreKey,
        loadSession: E.loadSession,
        loadSignedPreKey: E.loadSignedPreKey
      }, o, (0, g.widToDeviceJid)(e), {
        ciphertext: n,
        type: r
      }, e => {
        i = (0, a.uint8ArrayToBuffer)(e);
        return Promise.resolve();
      }).then(e => {
        if (e.success) {
          if (i == null) {
            throw new _.SignalDecryptionError("Null result on successful decryption");
          }
          return i;
        }
        const {
          error: t
        } = e;
        __LOG__(3)`CryptoLibrarySignal::decryptMessage failed with error ${t}`;
        throw t === "errDuplicateMsg" ? new _.SignalMessageCounterError(t) : new _.SignalDecryptionError(t);
      }).catch(e => {
        if (e instanceof _.SignalDecryptionError || e instanceof _.SignalMessageCounterError) {
          throw e;
        }
        __LOG__(4, undefined, new Error())`CryptoLibrarySignal::decryptSignalProto failed to decrypt: ${e.stack}`;
        throw new _.SignalDecryptionError("Unexpected decryption error");
      });
    } else {
      return Promise.reject((0, m.default)("No registration info found"));
    }
  })).apply(this, arguments);
}
function M() {
  return (M = (0, i.default)(function* (e) {
    const t = yield E.loadSession((0, g.widToDeviceJid)(e));
    if (t == null) {
      return undefined;
    } else {
      return t.remote;
    }
  })).apply(this, arguments);
}
function A() {
  return (A = (0, i.default)(function* (e, t, n) {
    var r;
    const i = (0, g.widToMulticastJid)(e);
    const o = (r = (0, l.validateGroupJid)(i)) !== null && r !== undefined ? r : (0, l.validateStatusJid)(i);
    if (o == null) {
      throw (0, m.default)("Broadcast JIDs are not supported by WACryptoManager yet.");
    }
    const s = (0, g.widToDeviceJid)(t);
    let c = yield S().encryptGroupContent({
      loadSenderKeySession: E.loadSenderKeySession,
      saveSenderKeySession: E.saveSenderKeySession
    }, o, s, n);
    if (!c.success && c.error === "errLoadSenderKeySession") {
      c.error;
      __LOG__(2)`CryptoLibrarySignal::encryptGroupMessage no sender key, generating a new one`;
      const e = yield (0, u.makeKeyPair)();
      yield S().rotateGroupSenderKey({
        saveSenderKeySession: E.saveSenderKeySession
      }, o, s, e);
      c = yield S().encryptGroupContent({
        loadSenderKeySession: E.loadSenderKeySession,
        saveSenderKeySession: E.saveSenderKeySession
      }, o, s, n);
    }
    if (c.success) {
      const {
        ciphertext: e
      } = c.value.ciphertext;
      const {
        senderKeyDistributionProto: t
      } = c.value;
      return {
        ciphertext: (0, a.uint8ArrayToBuffer)(e),
        senderKeyBytes: (0, a.uint8ArrayToBuffer)(t)
      };
    }
    __LOG__(3)`CryptoLibrarySignal::encryptGroupMessage failed with error ${c.error}`;
    throw (0, m.default)(c.error);
  })).apply(this, arguments);
}
function b() {
  return (b = (0, i.default)(function* (e, t) {
    __LOG__(2)`CryptoLibrarySignal::getGroupSenderKeyInfo`;
    const n = yield f.default.createSenderKeyDistributionMsg(E.loadSenderKeySession, E.saveSenderKeySession, (0, l.toGroupJid)(e.toString({
      legacy: true
    })), (0, g.widToDeviceJid)(t));
    if (n.success) {
      return (0, a.uint8ArrayToBuffer)(n.value);
    }
    __LOG__(3)`CryptoLibrarySignal::getGroupSenderKeyInfo failed with error ${n.error}`;
    throw (0, m.default)(n.error);
  })).apply(this, arguments);
}