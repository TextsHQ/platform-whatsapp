var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseFetchKeyBundlesUserSuccessMixin = function (e) {
  const t = (0, p.assertTag)(e, "user");
  if (!t.success) {
    return t;
  }
  const n = (0, p.optional)(p.attrIntRange, e, "t", 0, undefined);
  if (!n.success) {
    return n;
  }
  const r = (0, c.parseRegistrationIDMixin)(e);
  if (!r.success) {
    return r;
  }
  const f = (0, l.parseKeyTypeMixin)(e);
  const _ = (0, s.parseIdentityKeyMixin)(e);
  if (!_.success) {
    return _;
  }
  const g = (0, u.parsePreKeyMixin)(e);
  const m = (0, d.parseSignedPreKeyMixin)(e);
  if (!m.success) {
    return m;
  }
  const h = (0, o.parseDeviceIdentityMixin)(e);
  return (0, a.makeResult)((0, i.default)((0, i.default)((0, i.default)((0, i.default)({
    t: n.value
  }, r.value), {}, {
    keyTypeMixin: f.success ? f.value : null
  }, _.value), {}, {
    preKeyMixin: g.success ? g.value : null
  }, m.value), {}, {
    deviceIdentityMixin: h.success ? h.value : null
  }));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./123247.js");
var s = require("./429346.js");
var l = require("./929591.js");
var u = require("./991046.js");
var c = require("./275845.js");
var d = require("./757005.js");
var p = require("./686310.js");