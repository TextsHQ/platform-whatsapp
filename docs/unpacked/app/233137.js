var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadPrimaryFeatures = function () {
  return d.apply(this, arguments);
};
exports.primaryFeatureEnabled = function (e) {
  if (u == null) {
    __LOG__(4, undefined, new Error())`primaryFeatureEnabled: primary features have not been initialized!`;
    return false;
  }
  return u.has(e);
};
exports.setPrimaryFeatures = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./359987.js");
var o = require("./409847.js");
var s = require("./94872.js");
var l = r(require("./53575.js"));
let u = null;
function c() {
  return (c = (0, i.default)(function* (e) {
    l.default.set(s.KEYS.PRIMARY_FEATURES, e);
    yield o.userPrefsIdb.set(s.KEYS.PRIMARY_FEATURES, e);
    u = new Set(e);
    (0, a.frontendFireAndForget)("setPrimaryFeatures", {
      primaryFeatures: e
    });
  })).apply(this, arguments);
}
function d() {
  return (d = (0, i.default)(function* () {
    var e;
    const t = (e = o.userPrefsIdb.get(s.KEYS.PRIMARY_FEATURES)) !== null && e !== undefined ? e : [];
    u = new Set(t);
    (0, a.frontendFireAndForget)("setPrimaryFeatures", {
      primaryFeatures: t
    });
    __LOG__(2)`primary features loaded`;
  })).apply(this, arguments);
}