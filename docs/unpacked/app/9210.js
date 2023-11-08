var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.digestKey = function () {
  return f.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./417405.js");
var o = require("./250281.js");
var s = require("./716358.js");
var l = require("./347387.js");
var u = require("./326314.js");
var c = require("./41517.js");
var d = r(require("./556869.js"));
const p = new l.WapParser("digestResponseParser", e => {
  const t = e.child("digest");
  const n = t.child("skey");
  return {
    regId: t.child("registration").contentUint(4),
    type: t.child("type").contentUint(1),
    identity: t.child("identity").contentBytes(32),
    skey: {
      id: n.child("id").contentUint(3),
      pubkey: n.child("value").contentBytes(32),
      signature: n.child("signature").contentBytes(64)
    },
    keys: t.child("list").mapChildren(e => e.contentUint(3)),
    hash: t.child("hash").contentBytes(20)
  };
});
function f() {
  return (f = (0, i.default)(function* () {
    const e = (0, s.wap)("iq", {
      xmlns: "encrypt",
      type: "get",
      to: s.S_WHATSAPP_NET,
      id: (0, s.generateId)()
    }, (0, s.wap)("digest", null));
    const t = yield (0, o.deprecatedSendIq)(e, p);
    let n = null;
    if (t.success) {
      try {
        yield _(t.result);
        n = false;
      } catch (e) {
        n = false;
      }
    } else {
      const e = t.errorCode;
      if (e === 404) {
        __LOG__(3)`digestKey: no record found for current user`;
        n = true;
      } else if (e === 406) {
        __LOG__(3)`digestKey: malformed request`;
        n = false;
      } else if (e === 503) {
        __LOG__(3)`digestKey: service unavailable`;
        n = false;
      } else {
        __LOG__(3)`digestKey: server error ${e}`;
        n = false;
      }
    }
    if (n != null && n) {
      __LOG__(2)`digestKey: validate key bundle failed, upload prekeys again`;
      return (0, c.uploadPreKeys)();
    }
  })).apply(this, arguments);
}
function _() {
  return g.apply(this, arguments);
}
function g() {
  return (g = (0, i.default)(function* (e) {
    const [t, n] = yield Promise.all([u.waSignalStore.getRegistrationInfo(), u.waSignalStore.getSignedPreKey()]);
    if (!t || !n) {
      throw (0, d.default)("validateLocalKeyBundle: No registration info is available");
    }
    if (e.regId !== t.registrationId) {
      throw (0, d.default)("validateLocalKeyBundle: registation id mismatch");
    }
    const r = t.identityKeyPair.pubKey;
    const o = n.keyPair.pubKey;
    const s = r.byteLength + o.byteLength + n.signature.byteLength + e.keys.length * 32;
    const l = new Uint8Array(s);
    let c = 0;
    [r, o, n.signature].forEach(e => {
      l.set(new Uint8Array(e), c);
      c += e.byteLength;
    });
    const p = e.keys.map(function () {
      var e = (0, i.default)(function* (e) {
        const t = yield u.waSignalStore.getPreKeyById(e);
        if (!t) {
          throw (0, d.default)(`validateLocalKeyBundle: missing prekey record for id ${e}`);
        }
        return t.keyPair.pubKey;
      });
      return function () {
        return e.apply(this, arguments);
      };
    }());
    (yield Promise.all(p)).forEach(e => {
      l.set(new Uint8Array(e), c);
      c += e.byteLength;
    });
    const f = yield self.crypto.subtle.digest("SHA-1", l);
    const _ = (0, a.encodeB64)(f);
    const g = (0, a.encodeB64)(e.hash);
    if (_ !== g) {
      throw (0, d.default)(`validateLocalKeyBundle: hash mismatch remote:${g} local:${_}`);
    }
    __LOG__(2)`validateLocalKeyBundle: success`;
  })).apply(this, arguments);
}