var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetLinkedGroupResponseSuccess = function (e, t) {
  const n = (0, u.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const a = (0, u.flattenedChildWithTag)(e, "linked_group");
  if (!a.success) {
    return a;
  }
  const s = (0, i.parseLinkedGroupInfoMixin)(a.value);
  if (!s.success) {
    return s;
  }
  const c = (0, l.parseIQResultResponseMixin)(e, t);
  if (!c.success) {
    return c;
  }
  return (0, o.makeResult)((0, r.default)({
    linkedGroupLinkedGroupInfoMixin: s.value
  }, c.value));
};
var r = a(require("../vendor/73982.js"));
var o = require("../app/135781.js");
var l = require("../app/769758.js");
var i = require("./404058.js");
var u = require("../app/686310.js");