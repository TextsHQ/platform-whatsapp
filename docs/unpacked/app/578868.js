Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseIQResultResponseMixin = function (e, t) {
  const n = (0, a.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const o = (0, i.attrStringFromReference)(t, ["id"]);
  if (!o.success) {
    return o;
  }
  const s = (0, a.literal)(a.attrString, e, "id", o.value);
  if (!s.success) {
    return s;
  }
  const l = (0, i.attrStringFromReference)(t, ["to"]);
  if (!l.success) {
    return l;
  }
  const u = (0, a.literal)(a.attrString, e, "from", l.value);
  if (!u.success) {
    return u;
  }
  const c = (0, a.literal)(a.attrString, e, "type", "result");
  if (!c.success) {
    return c;
  }
  return (0, r.makeResult)({
    type: c.value
  });
};
var r = require("./135781.js");
var i = require("./591439.js");
var a = require("./686310.js");