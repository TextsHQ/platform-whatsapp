var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PairingType = exports.PairingState = exports.OldCodeError = exports.NoiseInfoIsNullError = exports.MissingCachedRefError = exports.MaxPrimaryHelloError = exports.MAX_SECONDS_CODE_IS_VALID = exports.InvalidRefError = exports.AltPairingStage = undefined;
exports.getCurrentMarker = w;
exports.getCurrentRef = function () {
  return I.ref;
};
exports.getPairingType = N;
exports.handlePrimaryHello = function () {
  return B.apply(this, arguments);
};
exports.handlePrimaryHelloInternal = Y;
exports.initializeAltDeviceLinking = function () {
  return L.apply(this, arguments);
};
exports.initializeQRLinking = function () {
  return k.apply(this, arguments);
};
exports.setPairingType = D;
exports.startAltLinkingFlow = function () {
  return G.apply(this, arguments);
};
exports.startAltLinkingFlowInternal = U;
var i = r(require("../vendor/348926.js"));
var a = require("./417405.js");
var o = require("./881841.js");
var s = require("./31549.js");
var l = require("./15842.js");
var u = require("./632157.js");
var c = require("./678002.js");
var d = require("./760261.js");
var p = require("./511761.js");
var f = require("./359987.js");
var _ = require("./714443.js");
var g = require("./316348.js");
var m = require("./555622.js");
var h = require("./65410.js");
var y = require("./673168.js");
var E = r(require("./556869.js"));
var S = r(require("../vendor/441143.js"));
class v extends Error {
  constructor() {
    super(...arguments);
    this.name = "MissingCachedRefError";
  }
}
exports.MissingCachedRefError = v;
class T extends Error {
  constructor() {
    super(...arguments);
    this.name = "NoiseInfoIsNullError";
  }
}
exports.NoiseInfoIsNullError = T;
class M extends Error {
  constructor() {
    super(...arguments);
    this.name = "InvalidRefError";
  }
}
exports.InvalidRefError = M;
class A extends Error {
  constructor() {
    super(...arguments);
    this.name = "OldCodeError";
  }
}
exports.OldCodeError = A;
class b extends Error {
  constructor() {
    super(...arguments);
    this.name = "MaxPrimaryHelloError";
  }
}
exports.MaxPrimaryHelloError = b;
const C = require("../vendor/76672.js").Mirrored(["QR_CODE", "ALT_DEVICE_LINKING"]);
exports.PairingType = C;
const P = require("../vendor/76672.js").Mirrored(["NotStarted", "Initialized", "AfterSendCompanionHello", "AfterSendCompanionFinish"]);
exports.AltPairingStage = P;
class O {
  constructor() {
    this.clear();
  }
  clear() {
    this.helloCached = null;
    this.ref = null;
    this.phone = null;
    this.stage = P.NotStarted;
    this.codeGenerationTs = null;
    this.primaryHelloAttemptCount = 0;
    if (this.marker != null) {
      this.marker.end(l.QuickLogActionType.ABORTED);
      this.marker = null;
    }
  }
}
exports.PairingState = O;
exports.MAX_SECONDS_CODE_IS_VALID = 180;
const I = new O();
let R = C.QR_CODE;
function N() {
  return R;
}
function D(e) {
  R = e;
}
function w() {
  return I.marker;
}
function L() {
  return (L = (0, i.default)(function* () {
    __LOG__(2)`alt pairing: initialize alt linking`;
    I.clear();
    I.marker = m.QPL.markerStart(g.QuickLogMarkerId.ALTERNATIVE_DEVICE_LINKING);
    yield (0, y.setADVSecretKey)();
    I.stage = P.Initialized;
    D(C.ALT_DEVICE_LINKING);
  })).apply(this, arguments);
}
function k() {
  return (k = (0, i.default)(function* () {
    var e;
    __LOG__(2)`alt pairing: initialize QR linking`;
    if (N() === C.ALT_DEVICE_LINKING) {
      if (!((e = w()) === null || e === undefined)) {
        e.addPoint("switch_to_qr");
      }
    }
    I.clear();
    yield (0, c.generateADVSecretKey)();
    I.stage = P.NotStarted;
    D(C.QR_CODE);
  })).apply(this, arguments);
}
function G() {
  return (G = (0, i.default)(function* (e, t) {
    __LOG__(2)`alt pairing: start linking flow`;
    const n = yield h.waNoiseInfo.get();
    if (n == null) {
      throw new T("alt pairing: noise info is null");
    }
    I.phone = e;
    I.codeGenerationTs = (0, u.unixTime)();
    return U(I, n, t);
  })).apply(this, arguments);
}
function U() {
  return x.apply(this, arguments);
}
function x() {
  return (x = (0, i.default)(function* (e, t, n) {
    var r;
    var i;
    var a;
    var o;
    (0, S.default)(e.stage === P.Initialized, `alt pairing: expected stage to be Initialized but was ${e.stage}`);
    if (!((r = I.marker) === null || r === undefined)) {
      r.addPoint("generate_code_start");
    }
    const s = yield (0, d.companionHello)();
    e.helloCached = s;
    if (!((i = I.marker) === null || i === undefined)) {
      i.addPoint("generate_code_end");
    }
    __LOG__(2)`alt pairing: completed companion hello generation`;
    if (!((a = I.marker) === null || a === undefined)) {
      a.addPoint("send_companion_hello_start");
    }
    (0, S.default)(e.phone != null, "alt pairing: called startAltLinkingFlow with empty phone");
    e.ref = yield (0, p.sendCompanionHello)((0, _.toPhoneUserJid)(e.phone), s.linkCodePairingWrappedCompanionEphemeralPub, t.staticKeyPair.pubKey, n);
    if (!((o = I.marker) === null || o === undefined)) {
      o.addPoint("send_companion_hello_end");
    }
    __LOG__(2)`alt pairing: sent companion hello`;
    if (e.ref == null) {
      throw new v("alt pairing:could not get ref from companion hello");
    }
    e.stage = P.AfterSendCompanionHello;
    return s.linkCodePairingSecret;
  })).apply(this, arguments);
}
function B() {
  return (B = (0, i.default)(function* (e) {
    __LOG__(2)`alt pairing: handling primary hello`;
    (0, f.frontendSendAndReceive)("primaryHelloReceivedAltLinking", {});
    try {
      return yield Y(e, I, (0, u.unixTime)());
    } catch (e) {
      (0, f.frontendSendAndReceive)("errorAltLinking", {});
      return Promise.reject(e);
    }
  })).apply(this, arguments);
}
function F() {
  return j.apply(this, arguments);
}
function j() {
  return (j = (0, i.default)(function* (e) {
    yield (0, c.generateADVSecretKey)();
    e.stage = P.AfterSendCompanionHello;
  })).apply(this, arguments);
}
function Y() {
  return K.apply(this, arguments);
}
function K() {
  return (K = (0, i.default)(function* (e, t, n) {
    var r;
    var i;
    if (!((r = I.marker) === null || r === undefined)) {
      r.addPoint("handle_primary_hello_start");
    }
    t.primaryHelloAttemptCount++;
    if (t.stage === P.AfterSendCompanionFinish) {
      if (!(t.primaryHelloAttemptCount <= 3)) {
        throw new b("alt pairing: reached max allowed primary hello attempts per code");
      }
      yield F(t);
    }
    (0, S.default)(t.stage === P.AfterSendCompanionHello, `alt pairing: expected stage to be AfterSendCompanionHello but was ${t.stage}`);
    if (t.ref == null) {
      throw new v("alt pairing:could not get ref from companion hello");
    }
    if (!(0, s.uint8ArraysEqual)(t.ref, e.linkCodeCompanionRegLinkCodePairingRefElementValue)) {
      throw new M("alt pairing: handle primary hello: received unexpected ref");
    }
    if (t.helloCached == null) {
      throw (0, E.default)("alt pairing: cannot find cached hello data");
    }
    if (t.codeGenerationTs == null) {
      throw (0, E.default)("alt pairing: cannot find codeGenerationTs");
    }
    if (n - t.codeGenerationTs > 180) {
      throw new A("alt pairing: cannot process primaryHello for an old code");
    }
    const l = t.helloCached;
    const u = yield (0, d.companionFinish)((0, o.uint8ArrayToBuffer)(e.linkCodeCompanionRegLinkCodePairingWrappedPrimaryEphemeralPubElementValue), (0, o.uint8ArrayToBuffer)(e.linkCodeCompanionRegPrimaryIdentityPubElementValue), l.linkCodeKey, l.linkCodePairingCompanionADVEphemeralKeyPair);
    __LOG__(2)`alt pairing: completed companion finish local algorithm`;
    yield (0, y.setADVSecretKey)((0, a.encodeB64)(u.advSecret));
    const c = t.ref;
    if (c == null) {
      throw new v("alt pairing: cannot find cached ref");
    }
    const f = t.phone;
    if (f == null) {
      throw new v("alt pairing: phone is empty");
    }
    yield (0, p.sendCompanionFinish)(u.linkCodePairingWrappedKeyBundle, u.companionIdentityPublic, c, (0, _.toPhoneUserJid)(f));
    __LOG__(2)`alt pairing: sent companion finish to server`;
    t.stage = P.AfterSendCompanionFinish;
    if (!((i = I.marker) === null || i === undefined)) {
      i.addPoint("handle_primary_hello_end");
    }
  })).apply(this, arguments);
}