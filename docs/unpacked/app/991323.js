var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseFetchKeyBundlesResponseSuccess = function (e, t) {
  const n = (0, c.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const r = (0, c.flattenedChildWithTag)(e, "list");
  if (!r.success) {
    return r;
  }
  const o = (0, s.parseIQResultResponseMixin)(e, t);
  if (!o.success) {
    return o;
  }
  const l = (0, c.mapChildrenWithTag)(r.value, "user", 0, 100000, d);
  if (!l.success) {
    return l;
  }
  return (0, a.makeResult)((0, i.default)((0, i.default)({}, o.value), {}, {
    listUser: l.value
  }));
};
exports.parseFetchKeyBundlesResponseSuccessListUser = d;
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./227472.js");
var s = require("./954009.js");
var l = require("./1245.js");
var u = require("./568113.js");
var c = require("./686310.js");
function d(e) {
  const t = (0, c.assertTag)(e, "user");
  if (!t.success) {
    return t;
  }
  const n = (0, u.attrJidEnum)(e, "jid", o.DEVICEJID_DEVICEJID);
  if (!n.success) {
    return n;
  }
  const r = (0, l.parseUserFetchKeyBundlesSuccessOrFetchKeyBundlesErrorOrFetchKeyBundlesErrorFallbackMixinGroup)(e);
  if (r.success) {
    return (0, a.makeResult)({
      jid: n.value,
      userFetchKeyBundlesSuccessOrFetchKeyBundlesErrorOrFetchKeyBundlesErrorFallbackMixinGroup: r.value
    });
  } else {
    return r;
  }
}