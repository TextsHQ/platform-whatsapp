var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return y.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./255462.js");
var o = require("./122583.js");
var s = require("./418987.js");
var l = r(require("./670983.js"));
var u = require("./678002.js");
var c = require("./303754.js");
var d = require("./257845.js");
var p = require("./533494.js");
var f = function (e, t) {
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
}(require("./138706.js"));
var _ = require("./91923.js");
var g = require("./394629.js");
var m = r(require("../vendor/441143.js"));
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
function y() {
  return (y = (0, i.default)(function* (e, t) {
    var n;
    const r = t.payload[2] && t.payload[2].find(e => e[0] === "enc");
    const i = e.peer_jid;
    if (!r || !i) {
      return {
        result: d.E2EProcessResult.SUCCESS
      };
    }
    let a = 0;
    if ((n = r[1]) === null || n === undefined ? undefined : n.count) {
      a = parseInt(r[1].count, 10) || 0;
    }
    const o = {
      e2eType: r[1].type,
      ciphertext: new Uint8Array(r[2]),
      retryCount: a,
      encMediaType: null,
      hideFail: false
    };
    try {
      const e = t.payload[2].find(e => e[0] === "device-identity");
      if (i.device != null && i.device !== s.DEFAULT_DEVICE_ID && o.e2eType === c.CiphertextType.Pkmsg && !e) {
        __LOG__(2)`voip:validateAndDecryptEnc: expected device-identity with pkmsg enc`;
        return {
          result: d.E2EProcessResult.PARSE_ERROR
        };
      }
      if (e) {
        const t = new Uint8Array(e[2]);
        if (!(yield (0, u.validateADVwithEncs)(i, t, [o]))) {
          return {
            result: d.E2EProcessResult.PARSE_ERROR
          };
        }
        __LOG__(2)`voip:validateAndDecryptEnc: successfully validated ADV device-identity`;
      }
      const {
        result: n,
        decrypted: p
      } = yield E(o, i);
      if (n === d.E2EProcessResult.SUCCESS) {
        r[2] = Array.prototype.slice.call(new Uint8Array((0, l.default)(p, "decrypted")));
      }
      return {
        result: n,
        retryCount: a
      };
    } catch (e) {
      __LOG__(3)`voip:validateAndDecryptEnc error`;
      return {
        result: d.E2EProcessResult.PARSE_ERROR
      };
    }
  })).apply(this, arguments);
}
function E(e, t) {
  (0, m.default)(e.e2eType !== c.CiphertextType.Skmsg, "VoIP enc type should not be skmsg");
  return f.Cipher.decryptSignalProto(t, e.e2eType, e.ciphertext).then(e => {
    var t;
    const n = (0, a.unpadPkcs7)(new Uint8Array(e));
    const r = (0, g.decodeProtobuf)(p.MessageSpec, n);
    if ((t = r.call) === null || t === undefined ? undefined : t.callKey) {
      return {
        result: d.E2EProcessResult.SUCCESS,
        decrypted: r.call.callKey
      };
    } else {
      return {
        result: d.E2EProcessResult.PARSE_ERROR
      };
    }
  }).catch((0, o.filteredCatch)(_.SignalDecryptionError, e => {
    __LOG__(3)`voip:decryptSignalProto failed with decryption error; ${e}`;
    return {
      result: d.E2EProcessResult.RETRY
    };
  })).catch(e => {
    __LOG__(3)`voip:decryptSignalProto failed with unexpected error; ${e}`;
    return {
      result: d.E2EProcessResult.PARSE_ERROR
    };
  });
}