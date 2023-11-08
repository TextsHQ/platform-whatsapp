Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterReportResponseSuccess = function (e, t) {
  const n = (0, s.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const l = (0, o.attrStringFromReference)(t, ["id"]);
  if (!l.success) {
    return l;
  }
  const u = (0, s.literal)(s.attrString, e, "id", l.value);
  if (!u.success) {
    return u;
  }
  const c = (0, s.optional)(a.attrJidEnum, e, "from", i.DOMAINJID_USERJID);
  if (!c.success) {
    return c;
  }
  const d = (0, s.literal)(s.attrString, e, "type", "result");
  if (!d.success) {
    return d;
  }
  return (0, r.makeResult)({
    from: c.value,
    type: d.value
  });
};
var r = require("./135781.js");
var i = require("./231438.js");
var a = require("./568113.js");
var o = require("./591439.js");
var s = require("./686310.js");