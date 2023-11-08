Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseAcknowledgeGroupResponseSuccess = function (e, t) {
  const n = (0, a.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const o = (0, i.attrStringFromReference)(t, ["to"]);
  if (!o.success) {
    return o;
  }
  const s = (0, a.literal)(a.attrString, e, "from", o.value);
  if (!s.success) {
    return s;
  }
  const l = (0, a.literal)(a.attrString, e, "type", "result");
  if (!l.success) {
    return l;
  }
  const u = (0, i.attrStringFromReference)(t, ["id"]);
  if (!u.success) {
    return u;
  }
  const c = (0, a.literal)(a.attrString, e, "id", u.value);
  if (!c.success) {
    return c;
  }
  return (0, r.makeResult)({
    type: l.value
  });
};
var r = require("./135781.js");
var i = require("./591439.js");
var a = require("./686310.js");