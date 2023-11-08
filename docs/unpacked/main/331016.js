var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseFBPageResponseBaseMixin = function (e) {
  const t = (0, s.assertTag)(e, "fb_page");
  if (!t.success) {
    return t;
  }
  const n = (0, s.optionalChildWithTag)(e, "profile_sync", c);
  if (!n.success) {
    return n;
  }
  const a = (0, s.attrString)(e, "id");
  if (!a.success) {
    return a;
  }
  const i = (0, u.parseHasDisplayNameMixin)(e);
  if (!i.success) {
    return i;
  }
  const d = (0, l.parseAdStatusMixin)(e);
  if (!d.success) {
    return d;
  }
  return (0, o.makeResult)((0, r.default)((0, r.default)((0, r.default)({
    id: a.value
  }, i.value), d.value), {}, {
    profileSync: n.value
  }));
};
exports.parseFBPageResponseBaseProfileSync = c;
var r = a(require("../vendor/73982.js"));
var o = require("../app/135781.js");
var l = require("./168392.js");
var i = require("./592099.js");
var u = require("./12946.js");
var s = require("../app/686310.js");
function c(e) {
  const t = (0, s.assertTag)(e, "profile_sync");
  if (!t.success) {
    return t;
  }
  const n = (0, s.attrStringEnum)(e, "state", i.ENUM_DISABLE_IMPORT);
  if (n.success) {
    return (0, o.makeResult)({
      state: n.value
    });
  } else {
    return n;
  }
}