var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayBufferToBase64 = f;
exports.arrayBufferToString = g;
exports.base64ToArrayBuffer = p;
exports.certificateStringToString = function (e) {
  return e;
};
exports.encodeToString = function (e) {
  return e.map(e => {
    const t = f(e.toSchema(true).toBER(false)).split(/(.{0,64})/g).filter(e => e !== "").join("\n");
    return `${s}\n${t}\n${l}`;
  }).join("\n");
};
exports.encryptWithPublicKey = function () {
  return O.apply(this, arguments);
};
exports.extractCertificates = S;
exports.fetchFromCABundle = function () {
  return E.apply(this, arguments);
};
exports.genRootIssuers = function () {
  return M.apply(this, arguments);
};
exports.getCommonName = A;
exports.getEngine = b;
exports.getRandomValues = function () {
  return P.apply(this, arguments);
};
exports.stringToArrayBuffer = _;
exports.stringToCertificateString = function (e) {
  return e;
};
exports.validateCertificates = function () {
  return T.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("./170872.js"));
var o = require("./484054.js");
const s = "-----BEGIN CERTIFICATE-----";
const l = "-----END CERTIFICATE-----";
const u = `(?:${s})((?:.|\n)*?)(?:${l})`;
function c() {
  return Promise.all([require.e(6352), require.e(6)]).then(require.bind(require, 614231));
}
function d() {
  return Promise.all([require.e(6352), require.e(6)]).then(require.bind(require, 616143));
}
function p(e) {
  let t = "";
  try {
    t = atob(e);
  } catch (e) {
    __LOG__(3)`[direct-connection] base64 decoding failed with ${e.toString()}`;
  }
  return _(t);
}
function f(e) {
  return btoa(g(e));
}
function _(e) {
  const t = e.length;
  const n = new Uint8Array(t);
  for (let r = 0; r < t; r++) {
    n[r] = e.charCodeAt(r);
  }
  return n.buffer;
}
function g(e) {
  return String.fromCharCode(...Array.from(new Uint8Array(e)));
}
function m() {
  return h.apply(this, arguments);
}
function h() {
  return (h = (0, i.default)(function* (e, t) {
    const {
      CertificateChainValidationEngine: n
    } = yield c();
    return new n({
      trustedCerts: t,
      certs: e
    });
  })).apply(this, arguments);
}
function y(e, t) {
  return e.flat().reduce((e, n) => e.every(e => !(0, o.isEqualBuffer)(e.tbs, n.tbs)) && t.includes(n) ? [...e, n] : e, []);
}
function E() {
  return (E = (0, i.default)(function* () {
    const {
      CA_BUNDLE: e
    } = yield require.e(239).then(require.bind(require, 278596));
    return S(e);
  })).apply(this, arguments);
}
function S() {
  return v.apply(this, arguments);
}
function v() {
  return (v = (0, i.default)(function* (e) {
    const {
      Certificate: t
    } = yield c();
    const {
      fromBER: n
    } = yield d();
    return (0, a.default)(Array.from(e.matchAll(new RegExp(u, "gm"))).map(e => {
      let [r, i] = e;
      const {
        result: a
      } = n(p(i));
      let o;
      try {
        o = a.error ? null : new t({
          schema: a
        });
      } catch (e) {
        __LOG__(3)`[direct-connection] certificate chain parsing from Get Public Key IQ failed with ${e.toString()}`;
      }
      return o;
    }));
  })).apply(this, arguments);
}
function T() {
  return (T = (0, i.default)(function* (e, t) {
    return (yield m(e, t)).verify();
  })).apply(this, arguments);
}
function M() {
  return (M = (0, i.default)(function* (e, t) {
    const n = yield m(e, t);
    const r = y(yield Promise.all(e.map(e => n.findIssuer(e, n))), t);
    if (r.length === 0) {
      __LOG__(3)`[direct-connection] no trusted root certificates could be found for ${A(e[0])}`;
      return null;
    } else {
      return r;
    }
  })).apply(this, arguments);
}
function A(e) {
  var t;
  if ((t = e.issuer.typesAndValues.find(e => {
    let {
      type: t
    } = e;
    return t === "2.5.4.3";
  })) === null || t === undefined) {
    return undefined;
  } else {
    return t.value.valueBlock.value;
  }
}
function b() {
  return C.apply(this, arguments);
}
function C() {
  return (C = (0, i.default)(function* () {
    const {
      getEngine: e
    } = yield c();
    return e();
  })).apply(this, arguments);
}
function P() {
  return (P = (0, i.default)(function* (e) {
    const {
      getRandomValues: t
    } = yield c();
    return t(e);
  })).apply(this, arguments);
}
function O() {
  return (O = (0, i.default)(function* (e, t) {
    const n = yield e.getPublicKey({
      algorithm: {
        algorithm: {
          name: "RSA-OAEP",
          hash: {
            name: "SHA-256"
          }
        },
        usages: ["encrypt"]
      }
    });
    const r = yield b();
    return f(yield r.subtle.encrypt({
      name: "RSA-OAEP"
    }, n, t));
  })).apply(this, arguments);
}