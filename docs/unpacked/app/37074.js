Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseClientResponseServerResponse = function (e, t) {
  const n = (0, s.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const l = (0, a.attrJidEnum)(e, "from", i.DOMAINJID_USERJID);
  if (!l.success) {
    return l;
  }
  const u = (0, s.literal)(s.attrString, e, "type", "result");
  if (!u.success) {
    return u;
  }
  const c = (0, o.attrStringFromReference)(t, ["id"]);
  if (!c.success) {
    return c;
  }
  const d = (0, s.literal)(s.attrString, e, "id", c.value);
  if (!d.success) {
    return d;
  }
  const p = (0, s.attrInt)(e, "t");
  if (!p.success) {
    return p;
  }
  return (0, r.makeResult)({
    from: l.value,
    type: u.value,
    t: p.value
  });
};
var r = require("./135781.js");
var i = require("./941923.js");
var a = require("./568113.js");
var o = require("./591439.js");
var s = require("./686310.js");