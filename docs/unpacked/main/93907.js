var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContactTrustSignal = function (e) {
  if (f(e)) {
    return u.fbt._("Not a contact", null, {
      hk: "MjZnj"
    });
  }
};
exports.getCountryCodeTrustSignal = function () {
  return d.apply(this, arguments);
};
exports.shouldShowContactTrustSignal = f;
exports.shouldShowCountryCodeTrustSignal = s;
var r = a(require("../vendor/348926.js"));
var o = require("../app/660666.js");
var l = require("../app/537469.js");
var i = require("../app/459857.js");
var u = require("../vendor/548360.js");
function s() {
  return c.apply(this, arguments);
}
function c() {
  return (c = (0, r.default)(function* (e) {
    if (!e.id.isLid()) {
      const t = (0, i.assertGetMeUser)();
      if ((yield (0, l.getCountryNameByPhone)(t.user)) !== (yield (0, l.getCountryNameByPhone)(e.id.user))) {
        return true;
      }
    }
    return false;
  })).apply(this, arguments);
}
function d() {
  return (d = (0, r.default)(function* (e) {
    if (yield s(e)) {
      const t = yield (0, l.getCountryNameByPhone)(e.id.user);
      if (t != null) {
        return u.fbt._("Phone number from {country}", [u.fbt._param("country", t)], {
          hk: "28b8IP"
        });
      }
    }
  })).apply(this, arguments);
}
function f(e) {
  return !(0, o.getIsMyContact)(e);
}