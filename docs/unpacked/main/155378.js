Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseIQResultResponseMixin = function (e, t) {
  const n = (0, o.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const l = (0, r.attrStringFromReference)(t, ["id"]);
  if (!l.success) {
    return l;
  }
  const i = (0, o.literal)(o.attrString, e, "id", l.value);
  if (!i.success) {
    return i;
  }
  const u = (0, r.attrStringFromReference)(t, ["to"]);
  if (!u.success) {
    return u;
  }
  const s = (0, o.literal)(o.attrString, e, "from", u.value);
  if (!s.success) {
    return s;
  }
  const c = (0, o.literal)(o.attrString, e, "type", "result");
  if (!c.success) {
    return c;
  }
  return (0, a.makeResult)({
    type: c.value
  });
};
var a = require("../app/135781.js");
var r = require("../app/591439.js");
var o = require("../app/686310.js");