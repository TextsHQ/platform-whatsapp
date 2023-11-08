var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeBusinessProfileAndCompliance = u;
exports.queryBusinessProfile = function (e, t) {
  const n = (0, o.getBusinessProfileQueryVersion)();
  let r;
  r = t ? Promise.all([(0, l.default)(e, n), (0, s.getMerchantCompliance)(e)]).then(u) : (0, l.default)(e, n);
  return (0, a.attachErrorLogger)(r, "Query business profile failed");
};
var i = r(require("../vendor/81109.js"));
var a = require("./984330.js");
var o = require("./260459.js");
var s = require("./20970.js");
var l = r(require("./764059.js"));
function u(e) {
  let [t, n] = e;
  return t.map((e, t) => (0, i.default)((0, i.default)({}, e), {}, {
    profile: (0, i.default)((0, i.default)({}, e.profile), {}, {
      legal_entity_details: n[t]
    })
  }));
}