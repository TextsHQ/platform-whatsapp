Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNativeActionsMixinMixin = function (e) {
  const t = (0, i.mapChildrenWithTag)(e, "native_action", 0, 50, a);
  if (!t.success) {
    return t;
  }
  return (0, r.makeResult)({
    nativeAction: t.value
  });
};
exports.parseNativeActionsMixinNativeAction = a;
var r = require("./135781.js");
var i = require("./686310.js");
function a(e) {
  const t = (0, i.assertTag)(e, "native_action");
  if (!t.success) {
    return t;
  }
  const n = (0, i.attrString)(e, "platform");
  if (!n.success) {
    return n;
  }
  const a = (0, i.attrString)(e, "min_app_version");
  if (!a.success) {
    return a;
  }
  const o = (0, i.attrString)(e, "local_link");
  if (!o.success) {
    return o;
  }
  const s = (0, i.optional)(i.attrString, e, "universal_link");
  if (s.success) {
    return (0, r.makeResult)({
      platform: n.value,
      minAppVersion: a.value,
      localLink: o.value,
      universalLink: s.value
    });
  } else {
    return s;
  }
}