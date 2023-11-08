var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseFetchMissingPreKeysUserSuccessDevice = g;
exports.parseFetchMissingPreKeysUserSuccessMixin = function (e) {
  const t = (0, _.assertTag)(e, "user");
  if (!t.success) {
    return t;
  }
  const n = (0, f.attrJidEnum)(e, "jid", s.USERJID_USERJID);
  if (!n.success) {
    return n;
  }
  const r = (0, _.mapChildrenWithTag)(e, "device", 1, 100, g);
  if (!r.success) {
    return r;
  }
  return (0, a.makeResult)({
    jid: n.value,
    device: r.value
  });
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./123247.js");
var s = require("./227472.js");
var l = require("./429346.js");
var u = require("./929591.js");
var c = require("./991046.js");
var d = require("./275845.js");
var p = require("./757005.js");
var f = require("./568113.js");
var _ = require("./686310.js");
function g(e) {
  const t = (0, _.assertTag)(e, "device");
  if (!t.success) {
    return t;
  }
  const n = (0, _.attrIntRange)(e, "id", 0, 99);
  if (!n.success) {
    return n;
  }
  const r = (0, _.optional)(_.attrIntRange, e, "t", 0, undefined);
  if (!r.success) {
    return r;
  }
  const s = (0, d.parseRegistrationIDMixin)(e);
  if (!s.success) {
    return s;
  }
  const f = (0, u.parseKeyTypeMixin)(e);
  const g = (0, l.parseIdentityKeyMixin)(e);
  if (!g.success) {
    return g;
  }
  const m = (0, c.parsePreKeyMixin)(e);
  const h = (0, p.parseSignedPreKeyMixin)(e);
  if (!h.success) {
    return h;
  }
  const y = (0, o.parseDeviceIdentityMixin)(e);
  return (0, a.makeResult)((0, i.default)((0, i.default)((0, i.default)((0, i.default)({
    id: n.value,
    t: r.value
  }, s.value), {}, {
    keyTypeMixin: f.success ? f.value : null
  }, g.value), {}, {
    preKeyMixin: m.success ? m.value : null
  }, h.value), {}, {
    deviceIdentityMixin: y.success ? y.value : null
  }));
}