var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertGetMe = _;
exports.assertGetMeDisplayName = m;
exports.assertGetMeUser = g;
exports.clearGetMaybeMeUserCache = undefined;
exports.getMaybeMeLid = S;
exports.getMaybeMeLidUser = v;
exports.getMaybeMeUser = undefined;
exports.getMe = f;
exports.getMeDisplayName = function () {
  return m();
};
exports.getMeLidUser = function () {
  return (0, d.toUserWid)((0, a.default)(S(), "meLid"));
};
exports.getMePNandLIDWids = function () {
  const e = S();
  if (e == null) {
    return [_()];
  } else {
    return [_(), e];
  }
};
exports.getMeUser = h;
exports.isMeAccount = M;
exports.isMeAccountNonLid = function (e) {
  if (e == null || !T(e)) {
    return false;
  }
  const t = y();
  if (t != null && e.isSameAccount(t)) {
    return true;
  }
  return false;
};
exports.isMeDevice = function (e) {
  if (e == null || !T(e)) {
    return false;
  }
  if (e.equals(_())) {
    return true;
  }
  const t = S();
  return t != null && e.equals(t);
};
exports.isMePrimary = function (e) {
  if (e == null || !T(e)) {
    return false;
  }
  if (e.equals(h())) {
    return true;
  }
  const t = v();
  return t != null && e.equals(t);
};
exports.isMePrimaryNonLid = function (e) {
  if (e == null || !T(e)) {
    return false;
  }
  if (e.equals(g())) {
    return true;
  }
  return false;
};
exports.isSerializedWidMe = function (e) {
  return M((0, d.createWid)(e));
};
exports.setMe = function (e) {
  E();
  l.userPreferencesStoreBase.set(u.KEYS.LAST_WID_MD, e == null ? null : e.toString());
  (0, i.setMyJids)((0, p.widToMyJids)(e));
};
exports.setMeDisplayName = function (e) {
  if ((0, s.isWorker)()) {
    require("./697371.js").setMyDisplayName(e);
  } else {
    l.userPreferencesStoreBase.set(u.KEYS.ME_DISPLAY_NAME, e);
  }
};
exports.setMeLid = function (e) {
  if ((0, s.isWorker)()) {
    require("./697371.js").setMyLidDeviceJid(e.toString());
  } else {
    l.userPreferencesStoreBase.set(u.KEYS.LID, e.toString());
  }
};
var i = require("./819416.js");
var a = r(require("./670983.js"));
var o = require("./528646.js");
var s = require("./755985.js");
var l = require("./102461.js");
var u = require("./94872.js");
var c = r(require("./124928.js"));
var d = require("./669050.js");
var p = require("./574819.js");
function f() {
  if ((0, s.isWorker)()) {
    const e = require("./697371.js").getMyDeviceJid;
    return (0, d.createWid)(e());
  }
  const e = l.userPreferencesStoreBase.get(u.KEYS.LAST_WID_MD);
  if (typeof e == "string") {
    if (c.default.isWid(e)) {
      return (0, d.createWid)(e);
    } else {
      return undefined;
    }
  }
}
function _() {
  return (0, a.default)(f(), "me");
}
function g() {
  return (0, a.default)(h(), "meUser");
}
function m() {
  return (0, a.default)(function () {
    if ((0, s.isWorker)()) {
      return require("./697371.js").getMyDisplayName();
    }
    const e = l.userPreferencesStoreBase.get(u.KEYS.ME_DISPLAY_NAME);
    if (typeof e == "string") {
      return e;
    }
  }(), "meDisplayName");
}
function h() {
  return (0, d.toUserWid)(_());
}
const [y, E] = (0, o.memoizeWithClear)(() => {
  const e = f();
  if (e) {
    return (0, d.toUserWid)(e);
  }
});
function S() {
  let e = !(arguments.length > 0 && arguments[0] !== undefined) || arguments[0];
  const t = (0, s.isWorker)() ? require("./697371.js").getMyLidDeviceJid() : l.userPreferencesStoreBase.get(u.KEYS.LID);
  const r = typeof t == "string" ? t : null;
  const i = c.default.isWid(r);
  if (e && !i) {
    __LOG__(4, undefined, new Error(), true)`self-lid-missing`;
    SEND_LOGS("self-lid-missing");
  }
  if (r != null && i) {
    return (0, d.createWid)(r);
  } else {
    return null;
  }
}
function v() {
  const e = S();
  if (e == null) {
    return null;
  } else {
    return (0, d.toUserWid)(e);
  }
}
function T(e) {
  const t = e instanceof c.default;
  if (!t) {
    __LOG__(3)`isWID: input exists but is not WID`;
  }
  return t;
}
function M(e) {
  if (e == null || !T(e)) {
    return false;
  }
  const t = y();
  if (t != null && e.isSameAccount(t)) {
    return true;
  }
  const n = S();
  return n != null && e.isSameAccount(n);
}
exports.clearGetMaybeMeUserCache = E;
exports.getMaybeMeUser = y;