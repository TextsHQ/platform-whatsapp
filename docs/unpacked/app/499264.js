var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScreenLockDurationForLogging = function () {
  T(d.MD_KEYS.SCREEN_LOCK_DURATION_SECONDS);
  return p.default.getUser(d.MD_KEYS.SCREEN_LOCK_DURATION_SECONDS);
};
exports.getScreenLockDurationInSeconds = function () {
  var e;
  T(d.MD_KEYS.SCREEN_LOCK_DURATION_SECONDS);
  if ((e = p.default.getUser(d.MD_KEYS.SCREEN_LOCK_DURATION_SECONDS)) !== null && e !== undefined) {
    return e;
  } else {
    return 0;
  }
};
exports.getScreenLockEnabled = function () {
  var e;
  T(d.MD_KEYS.SCREEN_LOCK_DURATION_SECONDS);
  return parseInt((e = p.default.getUser(d.MD_KEYS.SCREEN_LOCK_DURATION_SECONDS)) !== null && e !== undefined ? e : 0, 10) !== 0;
};
exports.getScreenLockIterations = function () {
  return _.apply(this, arguments);
};
exports.getScreenLockIvString = function () {
  T(d.MD_KEYS.SCREEN_LOCK_IV);
  return p.default.getUser(d.MD_KEYS.SCREEN_LOCK_IV);
};
exports.getScreenLockSalt = function () {
  T(d.MD_KEYS.SCREEN_LOCK_SALT, false);
  return p.default.getUser(d.MD_KEYS.SCREEN_LOCK_SALT);
};
exports.getScreenUnlockTryCount = function () {
  return g.apply(this, arguments);
};
exports.setScreenLockDurationInSeconds = function (e) {
  p.default.setUser(d.MD_KEYS.SCREEN_LOCK_DURATION_SECONDS, e);
};
exports.setScreenLockIterations = function () {
  return f.apply(this, arguments);
};
exports.setScreenLockIvString = function (e) {
  p.default.setUser(d.MD_KEYS.SCREEN_LOCK_IV, e);
};
exports.setScreenLockSalt = function (e) {
  return p.default.setUser(d.MD_KEYS.SCREEN_LOCK_SALT, e, {
    shouldWriteToIdb: false
  });
};
exports.setScreenUnlockTryCount = function () {
  return m.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./459617.js");
var o = require("./417405.js");
var s = require("./904704.js");
var l = require("./659102.js");
var u = require("./78088.js");
var c = r(require("./236642.js"));
var d = require("./94872.js");
var p = r(require("./53575.js"));
function f() {
  return (f = (0, i.default)(function* (e) {
    const t = v();
    const n = yield h(String(e), t);
    return p.default.setUser(d.MD_KEYS.SCREEN_LOCK_ITERATIONS, `${n}_${t}`);
  })).apply(this, arguments);
}
function _() {
  return (_ = (0, i.default)(function* () {
    T(d.MD_KEYS.SCREEN_LOCK_ITERATIONS);
    const e = p.default.getUser(d.MD_KEYS.SCREEN_LOCK_ITERATIONS);
    if (e == null) {
      return null;
    }
    if (typeof e == "number") {
      return parseInt(e, 10);
    }
    const [t, n] = e.split("_");
    if (t == null || n == null) {
      return null;
    }
    const r = yield E(t, n);
    return parseInt(r, 10);
  })).apply(this, arguments);
}
function g() {
  return (g = (0, i.default)(function* () {
    T(d.MD_KEYS.SCREEN_UNLOCK_TRY_COUNT);
    const e = p.default.getUser(d.MD_KEYS.SCREEN_UNLOCK_TRY_COUNT);
    if (e == null) {
      return 0;
    }
    if (typeof e == "number") {
      return parseInt(e, 10);
    }
    const [t, n] = e.split("_");
    const r = yield E(t, n);
    return parseInt(r, 10);
  })).apply(this, arguments);
}
function m() {
  return (m = (0, i.default)(function* (e, t) {
    const n = v();
    const r = yield h(String(e), n);
    if (!t.aborted) {
      p.default.setUser(d.MD_KEYS.SCREEN_UNLOCK_TRY_COUNT, `${r}_${n}`);
    }
  })).apply(this, arguments);
}
function h() {
  return y.apply(this, arguments);
}
function y() {
  return (y = (0, i.default)(function* (e, t) {
    const n = new Uint8Array((0, o.decodeB64)(t));
    const r = l.DbEncKeyStore.getEncKeys()[0];
    const i = yield self.crypto.subtle.encrypt({
      iv: n,
      name: "AES-CBC"
    }, r.key, (0, a.stringToArrayBuffer)(e));
    return (0, o.encodeB64)(i);
  })).apply(this, arguments);
}
function E() {
  return S.apply(this, arguments);
}
function S() {
  return (S = (0, i.default)(function* (e, t) {
    const n = new Uint8Array((0, o.decodeB64)(t));
    const r = l.DbEncKeyStore.getEncKeys()[0];
    const i = yield self.crypto.subtle.decrypt({
      iv: n,
      name: "AES-CBC"
    }, r.key, (0, o.decodeB64)(e));
    return (0, u.arrayBufferToString)(i);
  })).apply(this, arguments);
}
function v() {
  const e = new Uint8Array(16);
  self.crypto.getRandomValues(e);
  const t = new s.Binary(e).readByteArray(16);
  return (0, o.encodeB64)(t);
}
function T(e, t) {
  const n = p.default.get(e);
  if (n != null) {
    const r = t != null ? {
      shouldWriteToIdb: t
    } : null;
    p.default.setUser(e, n, r != null ? r : {});
    c.default.removeItem(e);
  }
}