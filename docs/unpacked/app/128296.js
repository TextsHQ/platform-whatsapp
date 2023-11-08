var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  if ((0, A.isRegistered)()) {
    if (t) {
      return (0, c.default)(k(e), t);
    } else {
      return k(e);
    }
  }
  return function () {
    return U.apply(this, arguments);
  }(e);
};
var i = r(require("../vendor/348926.js"));
var a = require("./417405.js");
var o = require("./904704.js");
var s = require("./641341.js");
require("./390934.js");
var l = require("./651525.js");
var u = r(require("./670983.js"));
var c = r(require("./229922.js"));
var d = require("./135781.js");
var p = require("./565817.js");
var f = require("./969726.js");
var _ = require("./868242.js");
var g = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = O(t);
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
}(require("./403206.js"));
var m = r(require("./799132.js"));
r(require("./97359.js"));
var h = require("./588237.js");
var y = require("./614806.js");
var E = require("./168442.js");
var S = require("./326314.js");
var v = require("./314189.js");
var T = r(require("./795221.js"));
var M = require("./65410.js");
var A = require("./673168.js");
var b = require("./394629.js");
var C = require("./385914.js");
var P = r(require("./556869.js"));
function O(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (O = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const I = new Uint8Array([87, 65, 6, f.DICT_VERSION]);
const R = "Noise_XX_25519_AESGCM_SHA256\0\0\0\0";
let N;
function D() {
  return w.apply(this, arguments);
}
function w() {
  return (w = (0, i.default)(function* () {
    const e = yield (0, A.getRoutingInfo)();
    const t = e ? e.edgeRouting : null;
    let n = t ? (0, a.encodeB64UrlSafe)(t) : null;
    const r = new T.default({
      routingToken: n
    });
    const i = g.keyPair();
    const [u, c, d] = yield (0, m.default)(r, "change:socket").then(() => r.socket).finally(() => {
      r.deactivate();
    }).then(e => {
      let n;
      if (t) {
        const e = new o.Binary();
        e.write("ED", 0, 1);
        e.writeUint8(t.byteLength >> 16);
        e.writeUint16(t.byteLength & 65535);
        e.writeBuffer(t);
        n = e.readByteArray();
      }
      const r = n ? o.Binary.build(n, I).readByteArray() : I;
      const a = new s.FrameSocket(e, r);
      N = new l.NoiseHandshake(a);
      N.start(R, I);
      __LOG__(2)`openChatSocket send hello`;
      N.authenticate(i.pubKey);
      const u = {
        clientHello: {
          ephemeral: i.pubKey
        }
      };
      return N.sendAndReceive((0, C.encodeProtobuf)(y.HandshakeMessageSpec, u).readByteArray());
    }).then(e => L(N, e, i));
    __LOG__(2)`verifying certificate`;
    const f = (0, p.verifyChainCertificateWA6)(c, u);
    if (!f.success) {
      throw (0, P.default)(`verifyCertificateWA6 - ${f.error}`);
    }
    return d;
  })).apply(this, arguments);
}
function L(e, t, n) {
  __LOG__(2)`openChatSocket rcv hello`;
  const {
    serverHello: r
  } = (0, b.decodeProtobuf)(y.HandshakeMessageSpec, t);
  if (!r) {
    throw (0, P.default)("ServerHello payload error");
  }
  const {
    ephemeral: i,
    static: a,
    payload: o
  } = r;
  if (i == null || a == null || o == null) {
    throw (0, P.default)("Missing server Ephemeral");
  }
  e.authenticate(i);
  e.mixIntoKey(g.sharedSecret(i, n.privKey));
  const s = e.decrypt(a);
  const l = s.then(e => g.sharedSecret(e, n.privKey));
  e.mixIntoKey(l);
  return Promise.all([s, e.decrypt(o), i]);
}
function k() {
  return G.apply(this, arguments);
}
function G() {
  return (G = (0, i.default)(function* (e) {
    try {
      const t = e || {
        passive: false,
        pull: true
      };
      const n = yield M.waNoiseInfo.get();
      const r = yield D().then(function () {
        var e = (0, i.default)(function* (e) {
          if (n == null) {
            __LOG__(2, undefined, undefined, undefined, ["launch-socket-chat"])`Unable to decrypt noise data`;
            yield (0, v.socketLogout)();
            (0, u.default)(n, "noiseData");
          }
          const r = (0, u.default)(n, "noiseData").staticKeyPair;
          yield (0, E.registerPassiveTasksForConnect)();
          t.passive = h.PassiveTaskManager.shouldConnectAsPassiveMode();
          const i = yield (0, _.getClientPayloadForLogin)(t);
          return Promise.all([x(r, N, e), N.encrypt(Promise.resolve(i))]);
        });
        return function () {
          return e.apply(this, arguments);
        };
      }()).then(e => {
        let [t, n] = e;
        N.send((0, C.encodeProtobuf)(y.HandshakeMessageSpec, {
          clientFinish: {
            static: t,
            payload: n
          }
        }).readByteArray());
        return N.finish();
      });
      __LOG__(2)`openChatSocketForLogin success, resetting round`;
      return (0, d.makeResult)(r);
    } catch (e) {
      __LOG__(3)`openChatSocketForLogin error ${e}`;
      return (0, d.makeError)("disconnected");
    }
  })).apply(this, arguments);
}
function U() {
  return (U = (0, i.default)(function* (e) {
    try {
      const t = yield D().then(e => Promise.all([S.waSignalStore.getRegistrationInfo(), S.waSignalStore.getSignedPreKey(), e])).then(function () {
        var t = (0, i.default)(function* (t) {
          let [n, r, i] = t;
          if (!r || !n) {
            throw (0, P.default)("Invalid signal credentials");
          }
          const a = yield (0, _.getClientPayloadForRegistration)(n, r, e);
          const o = (0, u.default)(yield M.waNoiseInfo.get(), "yield waNoiseInfo.get()").staticKeyPair;
          return Promise.all([x(o, N, i), N.encrypt(Promise.resolve(a))]);
        });
        return function () {
          return t.apply(this, arguments);
        };
      }()).then(e => {
        let [t, n] = e;
        N.send((0, C.encodeProtobuf)(y.HandshakeMessageSpec, {
          clientFinish: {
            static: t,
            payload: n
          }
        }).readByteArray());
        return N.finish();
      });
      __LOG__(2)`openChatSocketForRegistration success, resetting round`;
      return (0, d.makeResult)(t);
    } catch (e) {
      __LOG__(3)`openChatSocketForRegistration error ${e}`;
      return (0, d.makeError)("disconnected");
    }
  })).apply(this, arguments);
}
function x(e, t, n) {
  const r = Promise.resolve(e.pubKey);
  const i = t.encrypt(r);
  if (!n) {
    return Promise.reject((0, P.default)("staticAgreement called before serverKeys"));
  }
  const a = g.sharedSecret(n, e.privKey);
  t.mixIntoKey(a);
  return i;
}