var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decryptPartialMedia = exports.decrypt = exports.cleanupCiphertextAndIv = exports.HMAC_SIZE = exports.BLOCK_SIZE = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./786702.js");
exports.BLOCK_SIZE = 16;
exports.HMAC_SIZE = 10;
const o = function () {
  var e = (0, i.default)(function* (e) {
    const {
      ciphertext: t,
      iv: n,
      mediaKeys: r
    } = e;
    const {
      encKey: i
    } = r;
    try {
      const e = yield self.crypto.subtle.importKey("raw", new Uint8Array(i), "AES-CBC", false, ["decrypt"]).catch(e => {
        __LOG__(2)`decryptPartialMedia:decrypt importKey error: ${String(e)}`;
        throw e;
      });
      return self.crypto.subtle.decrypt({
        name: "AES-CBC",
        iv: n
      }, e, t);
    } catch (e) {
      __LOG__(2)`decryptPartialMedia:decrypt decrypt error: ${String(e)}`;
      throw e;
    }
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
exports.decrypt = o;
const s = function () {
  var e = (0, i.default)(function* (e) {
    const {
      ciphertext: t,
      mediaKeys: n
    } = e;
    const {
      encKey: r
    } = n;
    const i = {
      name: "AES-CBC",
      iv: (t instanceof Uint8Array ? t : new Uint8Array(t)).slice(-16)
    };
    try {
      const e = yield self.crypto.subtle.importKey("raw", new Uint8Array(r), "AES-CBC", false, ["encrypt"]).catch(e => {
        __LOG__(2)`decryptPartialMedia:getEncryptedPadding importKey error: ${String(e)}`;
      });
      const t = new Uint8Array([]);
      return self.crypto.subtle.encrypt(i, e, t);
    } catch (e) {
      return void __LOG__(2)`decryptPartialMedia:getEncryptedPadding encrypt error: ${String(e)}`;
    }
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
const l = e => {
  const {
    serverRangeStart: t,
    ciphertext: n,
    mediaKeys: r
  } = e;
  let i = n instanceof Uint8Array ? n : new Uint8Array(n);
  const o = i.byteLength % 16 == 0;
  let l;
  if (t === 0) {
    l = new Uint8Array(r.iv);
  } else {
    l = i.slice(0, 16);
    i = i.slice(16);
  }
  if (!o) {
    i = i.slice(0, i.byteLength - 10);
  }
  if (o) {
    return s({
      ciphertext: i,
      mediaKeys: r
    }).then(e => {
      i = (0, a.concatTypedArrays)(Uint8Array, [i, new Uint8Array(e)]);
      return {
        ciphertext: i,
        iv: l
      };
    });
  } else {
    return Promise.resolve({
      ciphertext: i,
      iv: l
    });
  }
};
exports.cleanupCiphertextAndIv = l;
const u = function () {
  var e = (0, i.default)(function* (e) {
    let {
      mediaKeys: t,
      ciphertext: n
    } = e;
    const {
      ciphertext: r,
      iv: i
    } = yield l({
      serverRangeStart: 0,
      ciphertext: n,
      mediaKeys: t
    });
    return o({
      ciphertext: r,
      iv: i,
      mediaKeys: t
    });
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
exports.decryptPartialMedia = u;