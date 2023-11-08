var r = require("../vendor/595318.js");
exports.cn = function () {
  return c.apply(this, arguments);
};
exports.nx = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./332108.js");
var o = require("./314189.js");
var s = require("./459857.js");
var l = require("./673168.js");
function u() {
  return (u = (0, i.default)(function* () {
    let e = null;
    if (!!!(0, s.getMaybeMeUser)()) {
      e = new Uint8Array(128);
      self.crypto.getRandomValues(e);
      e = btoa(String.fromCharCode(...Array.from(new Uint8Array(e))));
      yield (0, l.setWebEncSalt)(e);
    }
    e = (0, l.getWebEncSalt)();
    if (e == null) {
      __LOG__(4, undefined, new Error())`[DB ENC CRITICAL ERROR] null returned for local enc salt`;
      (0, o.socketLogout)(a.LogoutReason.MissingEncSalt);
    }
    e = Uint8Array.from(atob(e), e => e.charCodeAt(0));
    return Promise.resolve(e);
  })).apply(this, arguments);
}
function c() {
  return (c = (0, i.default)(function* () {
    yield (0, l.setWebEncSalt)(null);
  })).apply(this, arguments);
}