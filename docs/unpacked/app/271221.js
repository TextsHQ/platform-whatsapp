var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchResendMissingKeys = function () {
  return S.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./918019.js");
var o = require("./652204.js");
var s = require("./146767.js");
var l = require("./716358.js");
var u = require("./275909.js");
var c = require("./984330.js");
var d = require("./459387.js");
var p = r(require("./797137.js"));
var f = require("./76833.js");
var _ = require("./999821.js");
var g = require("./76256.js");
var m = require("./459857.js");
var h = require("./669050.js");
var y = require("./574819.js");
const E = new o.PromiseQueueMap();
function S() {
  return (S = (0, i.default)(function* (e) {
    yield (0, p.default)();
    const t = Array.from(new Set(e.map(e => (0, h.toUserWid)(e).toString()))).map(e => (0, h.createUserWid)(e));
    const n = t.map(e => e.toString()).join();
    __LOG__(2)`fetchResendMissingKeys ${n}`;
    const r = E.waitIfPending(n);
    if (r) {
      __LOG__(2)`fetchResendMissingKeys deduped ${n}`;
      return r;
    } else {
      return E.enqueueHandlers(n, v(t));
    }
  })).apply(this, arguments);
}
function v() {
  return T.apply(this, arguments);
}
function T() {
  return (T = (0, i.default)(function* (e) {
    __LOG__(2)`fetchResendMissingKeys: start fetching key for ${e.length} wids`;
    const t = yield M(e);
    const n = yield b(t);
    const r = new Map();
    t.forEach((e, t) => {
      const i = n[t];
      const a = (0, h.toUserWid)(e).toString();
      const o = r.get(a) || [];
      var s;
      if (i != null) {
        o.push({
          id: (s = e.device) !== null && s !== undefined ? s : 0,
          regId: i
        });
      }
      r.set(a, o);
    });
    const i = [];
    r.forEach((e, t) => {
      const n = {
        userJid: (0, y.widToUserJid)((0, h.createUserWid)(t)),
        hasUserReasonIdentity: false,
        deviceArgs: e.map(e => ({
          deviceId: e.id,
          registrationElementValue: (0, l.BIG_ENDIAN_CONTENT)(e.regId)
        }))
      };
      i.push(n);
    });
    __LOG__(2)`fetchResendMissingKeys: start sending fetching iq for ${e.length} wids`;
    const a = yield (0, s.sendFetchMissingPreKeysRPC)({
      userArgs: i
    });
    switch (a.name) {
      case "FetchMissingPreKeysResponseSuccess":
        __LOG__(2)`fetchResendMissingKeys: start processing keys for ${e.length} wids`;
        return C(a.value);
      case "FetchMissingPreKeysResponseServerError":
        {
          const e = a.value.errorServerErrors.value;
          __LOG__(2)`fetchResendMissingKeys failed: ${e.code}:${e.text}`;
          return Promise.reject(new c.ServerStatusCodeError(Number(e.code), e.text));
        }
      case "FetchMissingPreKeysResponseRequestError":
        {
          const e = a.value.errorRequestErrorsFetch.value;
          __LOG__(2)`fetchResendMissingKeys failed: ${e.code}:${e.text}`;
          return Promise.reject(new c.ServerStatusCodeError(Number(e.code), e.text));
        }
    }
  })).apply(this, arguments);
}
function M() {
  return A.apply(this, arguments);
}
function A() {
  return (A = (0, i.default)(function* (e) {
    __LOG__(2)`fetchResendMissingKeys: find ${e.length} users`;
    const t = yield (0, u.getDeviceIds)(e);
    const n = new Map();
    t.forEach((t, r) => {
      if (t) {
        const {
          devices: e
        } = t;
        e.forEach(e => {
          if (e.id !== 0) {
            const r = (0, h.createDeviceWidFromDeviceListPk)(t.id, e.id, e.isHosted);
            n.set(r.toString(), r);
          }
        });
      }
      const i = (0, h.toUserWid)(e[r]);
      n.set(i.toString(), i);
    });
    return Array.from(n.values());
  })).apply(this, arguments);
}
function b(e) {
  const t = e.map(e => (0, m.isMeDevice)(e) ? (0, g.getSignalProtocolStore)().getLocalRegistrationId() : (0, g.getSignalProtocolStore)().loadSession(String((0, _.createSignalAddress)(e))).then(e => {
    var t;
    const n = e == null ? undefined : e.sessions;
    if (n) {
      for (const e in n) {
        if (n[e].indexInfo.closed === -1) {
          return n[e].registrationId;
        }
      }
    }
    if (e == null || (t = e.remote) === null || t === undefined) {
      return undefined;
    } else {
      return t.regId;
    }
  }));
  return Promise.all(t);
}
function C() {
  return P.apply(this, arguments);
}
function P() {
  return (P = (0, i.default)(function* (e) {
    const t = [];
    e.listUser.forEach(e => {
      const n = e.userFetchMissingPreKeysSuccessOrFetchMissingPreKeysErrorOrFetchMissingPreKeysErrorFallbackMixinGroup;
      switch (n.name) {
        case "FetchMissingPreKeysUserSuccess":
          {
            const {
              jid: e,
              device: r
            } = n.value;
            const i = (0, h.createWid)(e);
            return void r.forEach(e => {
              var n;
              var r;
              const o = e.preKeyMixin;
              t.push({
                identity: e.elementValue,
                deviceIdentity: (n = (r = e.deviceIdentityMixin) === null || r === undefined ? undefined : r.deviceIdentityElementValue) !== null && n !== undefined ? n : null,
                skey: {
                  id: (0, a.convertBytesToUint)(e.skeyIdKeyIDMixin.elementValue, 3),
                  pubkey: e.skeyValueKeyDataMixin.elementValue,
                  signature: e.skeySignatureElementValue
                },
                key: o && {
                  id: (0, a.convertBytesToUint)(o.keyIdKeyIDMixin.elementValue, 3),
                  pubkey: o.keyValueKeyDataMixin.elementValue
                },
                regId: (0, a.convertBytesToUint)(e.registrationElementValue, 4),
                wid: (0, h.createDeviceWidFromDeviceListPk)((0, d.createDeviceListPK)(i), e.id, false)
              });
            });
          }
        case "FetchMissingPreKeysUserErrorFallback":
        case "FetchMissingPreKeysUserError":
          {
            const t = n.value;
            __LOG__(3, undefined, undefined, true)`fetchResendMissingKeys failed for user ${e.jid}: ${t.errorCode}:${t.errorText}`;
            SEND_LOGS("fetchResendMissingKeys-user-error");
          }
      }
    });
    __LOG__(2)`fetchResendMissingKeys: parsed ${t.length} keys`;
    if (t.length > 0) {
      try {
        const {
          processedPrekeyCount: e
        } = yield (0, f.processKeyBundles)(t);
        __LOG__(2)`fetchResendMissingKeys: successfully established ${e} E2E sessions out of ${t.length} requested`;
      } catch (e) {
        __LOG__(3, undefined, undefined, true)`fetchResendMissingKeys: failed to build session with error ${e}`;
        SEND_LOGS("fetchResendMissingKeys-session-error");
      }
    }
  })).apply(this, arguments);
}