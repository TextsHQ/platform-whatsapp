var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryBusinessCategories = function (e) {
  if (e === o.BUSINESS_CATEGORY_EMPTY_STR_ID) {
    return (0, s.queryBusinessCategories)("");
  }
  return (0, s.queryBusinessCategories)(e);
};
exports.queryBusinessProfile = function () {
  return f.apply(this, arguments);
};
exports.queryBusinessPublicKey = function (e) {
  return (0, require("./628905.js").getJobManager)().waitUntilCompleted(u.jobSerializers.getPublicKey(e));
};
exports.queryCustomUrlPaths = function (e) {
  return (0, a.getCustomUrlPaths)(e);
};
exports.querySignedUserInfo = function () {
  return g.apply(this, arguments);
};
exports.updateCartEnabled = function () {
  return _.apply(this, arguments);
};
r(require("../vendor/81109.js"));
var i = r(require("../vendor/348926.js"));
require("./8304.js");
var a = require("./570103.js");
var o = require("./431307.js");
var s = require("./954439.js");
var l = require("./761849.js");
var u = require("./323829.js");
var c = require("./228733.js");
var d = require("./459857.js");
var p = r(require("./556869.js"));
function f() {
  return (f = (0, i.default)(function* (e, t) {
    return yield (0, c.queryBusinessProfile)(e, t);
  })).apply(this, arguments);
}
function _() {
  return (_ = (0, i.default)(function* (e) {
    const t = require("./778945.js").BusinessProfileCollection;
    const r = yield (0, l.updateCartEnabled)(e);
    const i = t.getValid((0, d.getMeUser)());
    const a = i == null ? undefined : i.profileOptions;
    if (i && a) {
      a.cartEnabled = r;
      t.add(i, {
        merge: true
      });
    }
  })).apply(this, arguments);
}
function g() {
  return (g = (0, i.default)(function* (e) {
    const t = require("./628905.js").getJobManager;
    const {
      phoneNumber: r,
      phoneNumberSignature: i,
      phoneNumberSignatureExpiration: a,
      businessDomain: o
    } = yield t().waitUntilCompleted(u.jobSerializers.getSignedUserInfo(e));
    if (r == null || a == null || i == null || o == null) {
      throw (0, p.default)("Unexpected null or undefined");
    }
    return {
      phoneNumber: r,
      phoneNumberSignature: i,
      phoneNumberSignatureExpiration: a,
      businessDomain: o
    };
  })).apply(this, arguments);
}