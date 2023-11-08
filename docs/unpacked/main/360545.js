var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetSubGroupsResponseSuccess = function (e, t) {
  const n = (0, u.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const a = (0, u.flattenedChildWithTag)(e, "sub_groups");
  if (!a.success) {
    return a;
  }
  const i = (0, l.parseIQResultResponseMixin)(e, t);
  if (!i.success) {
    return i;
  }
  const c = (0, u.mapChildrenWithTag)(a.value, "group", 0, 1000, s);
  if (!c.success) {
    return c;
  }
  return (0, o.makeResult)((0, r.default)((0, r.default)({}, i.value), {}, {
    subGroupsGroup: c.value
  }));
};
exports.parseGetSubGroupsResponseSuccessSubGroupsGroup = s;
var r = a(require("../vendor/73982.js"));
var o = require("../app/135781.js");
var l = require("../app/769758.js");
var i = require("./549652.js");
var u = require("../app/686310.js");
function s(e) {
  const t = (0, u.assertTag)(e, "group");
  if (!t.success) {
    return t;
  }
  const n = (0, i.parseSubGroupInfoWithIDMixin)(e);
  n.success;
  return n;
}