var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return x.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./417405.js");
var o = require("./904704.js");
var s = require("./250281.js");
var l = require("./301055.js");
r(require("./670983.js"));
var u = require("./15842.js");
var c = require("./632157.js");
var d = require("./716358.js");
var p = require("./347387.js");
var f = require("./678002.js");
var _ = require("./518043.js");
var g = require("./366202.js");
var m = require("./400116.js");
var h = require("./445729.js");
var y = require("./403206.js");
require("./618422.js");
var E = require("./854379.js");
r(require("./174285.js"));
var S = require("./332108.js");
var v = require("./94602.js");
var T = require("./962559.js");
var M = require("./999821.js");
var A = require("./326314.js");
var b = require("./314189.js");
var C = require("./157942.js");
var P = require("./459857.js");
var O = require("./673168.js");
var I = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = k(t);
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
}(require("./784898.js"));
var R = require("./72687.js");
var N = require("./669050.js");
var D = require("./394629.js");
var w = require("./385914.js");
var L = r(require("../vendor/441143.js"));
function k(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (k = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
let G = false;
const U = new p.WapParser("pairSuccessParser", e => {
  e.assertTag("iq");
  e.assertFromServer();
  const t = e.attrString("id");
  const n = e.child("pair-success");
  const r = n.child("platform").attrString("name");
  const i = n.child("device");
  const a = n.child("device-identity").contentBytes();
  return {
    wid: (0, E.deviceJidToDeviceWid)(i.attrDeviceJid("jid")),
    id: t,
    deviceIdentityBytes: a,
    platform: r
  };
});
function x() {
  return (x = (0, i.default)(function* (e) {
    if (G || (0, O.isRegistered)()) {
      return;
    }
    G = true;
    const t = (0, c.unixTimeWithoutClockSkewCorrection)();
    const n = U.parse(e);
    if (n.error) {
      __LOG__(4, undefined, new Error())`Parsing Error: ${n.error.toString()}`;
      G = false;
      return Promise.reject(n.error);
    }
    try {
      var r;
      var i;
      (0, m.resetCompanionReg)();
      (0, O.setPairingTimestamp)(t);
      if ((0, _.getPairingType)() === _.PairingType.ALT_DEVICE_LINKING) {
        if (!((r = (0, _.getCurrentMarker)()) === null || r === undefined)) {
          r.addPoint("alt_linking_pair_success");
        }
        if (!((i = (0, _.getCurrentMarker)()) === null || i === undefined)) {
          i.end(u.QuickLogActionType.SUCCESS);
        }
      }
      const e = n.success;
      const {
        id: c,
        wid: p,
        deviceIdentityBytes: E,
        platform: S
      } = e;
      h.Conn.blockStoreAdds = false;
      h.Conn.platform = S;
      yield (0, v.setMobilePlatform)(S);
      const b = (0, D.decodeProtobuf)(T.ADVSignedDeviceIdentityHMACSpec, E);
      const k = b.details;
      const U = b.hmac;
      (0, L.default)(k != null && U != null, "ADVSignedDeviceIdentityHMAC should not have empty details or hmac");
      let x = new o.Binary(k).readByteArray();
      const B = yield (0, f.getADVSecretKey)();
      const F = yield (0, l.hmacSha256)(B, x);
      const j = (0, a.encodeB64)(F);
      if (j !== (0, a.encodeB64)(U)) {
        (0, s.deprecatedCastStanza)((0, d.wap)("iq", {
          to: d.S_WHATSAPP_NET,
          type: "error",
          id: (0, d.CUSTOM_STRING)(c)
        }, (0, d.wap)("error", {
          code: "401",
          text: "not-authorized"
        })));
        (0, m.logoutAfterValidationFail)();
        return void (G = false);
      }
      const Y = (0, D.decodeProtobuf)(T.ADVSignedDeviceIdentitySpec, k);
      const K = Y.accountSignatureKey;
      (0, L.default)(K != null, "accountSignatureKey should not be null");
      const W = Y.accountSignature;
      (0, L.default)(W != null, "accountSignature should not be null");
      const V = yield A.waSignalStore.getRegistrationInfo();
      (0, L.default)(V != null, "Empty regInfo");
      yield I.initDeviceLinkEvent(K, V.identityKeyPair.pubKey, t);
      yield I.setDeviceLinkPairStage(R.MD_LINK_DEVICE_COMPANION_STAGE.PAIR_SUCCESS_RECEIVED);
      (0, m.initDevicePairingLatencyMeasurement)();
      if (!(0, f.verifyDeviceIdentityAccountSignature)(Y, V.identityKeyPair.pubKey, null)) {
        (0, s.deprecatedCastStanza)((0, d.wap)("iq", {
          to: d.S_WHATSAPP_NET,
          type: "error",
          id: (0, d.CUSTOM_STRING)(c)
        }, (0, d.wap)("error", {
          code: "401",
          text: "not-authorized"
        })));
        yield I.commitDeviceLinkEvent(401);
        (0, m.logoutAfterValidationFail)();
        return void (G = false);
      }
      Y.deviceSignature = yield (0, f.generateDeviceSignature)(Y, V.identityKeyPair, K);
      yield A.waSignalStore.putIdentity((0, M.createSignalAddress)((0, N.toUserWid)(p)).toString(), (0, M.bufferToStr)((0, y.toSignalCurvePubKey)(K)));
      yield (0, f.setADVSignedIdentity)(Y);
      const H = (0, D.decodeProtobuf)(T.ADVDeviceIdentitySpec, Y.details).keyIndex;
      (0, L.default)(H != null, "keyIndex should not be null");
      Y.accountSignatureKey = undefined;
      const $ = (0, w.encodeProtobuf)(T.ADVSignedDeviceIdentitySpec, Y).readByteArray();
      (0, s.deprecatedCastStanza)((0, d.wap)("iq", {
        to: d.S_WHATSAPP_NET,
        type: "result",
        id: (0, d.CUSTOM_STRING)(c)
      }, (0, d.wap)("pair-device-sign", null, (0, d.wap)("device-identity", {
        "key-index": (0, d.INT)(H)
      }, $))));
      yield I.setDeviceLinkPairStage(R.MD_LINK_DEVICE_COMPANION_STAGE.PAIR_DEVICE_SIGN_SENT);
      (0, P.setMe)(p);
      if ((yield (0, C.getInitialHistorySyncComplete)()) !== true) {
        (0, m.startInitialHistorySyncTimeout)();
      }
      G = false;
      (0, g.setShouldLogAgentLogin)({
        loginTimestamp: t
      });
    } catch (e) {
      __LOG__(4, true, new Error(), true)`error in handlePairSuccess, ${e}`;
      SEND_LOGS("error in handlePairSuccess");
      yield (0, I.commitDeviceLinkEvent)(-1);
      yield (0, b.socketLogout)(S.LogoutReason.UnknownCompanion);
    }
  })).apply(this, arguments);
}