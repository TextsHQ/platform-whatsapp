Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGroupReportResponseError = function (e, t) {
  const n = (0, l.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const u = (0, l.flattenedChildWithTag)(e, "error");
  if (!u.success) {
    return u;
  }
  const c = (0, s.attrStringFromReference)(t, ["id"]);
  if (!c.success) {
    return c;
  }
  const d = (0, l.literal)(l.attrString, e, "id", c.value);
  if (!d.success) {
    return d;
  }
  const p = (0, l.optional)(o.attrJidEnum, e, "from", i.DOMAINJID_USERJID);
  if (!p.success) {
    return p;
  }
  const f = (0, l.literal)(l.attrString, e, "type", "error");
  if (!f.success) {
    return f;
  }
  const _ = (0, a.parseIQErrorInternalServerErrorOrBadRequestMixinGroup)(u.value);
  if (!_.success) {
    return _;
  }
  return (0, r.makeResult)({
    from: p.value,
    type: f.value,
    errorIQErrorInternalServerErrorOrBadRequestMixinGroup: _.value
  });
};
var r = require("./135781.js");
var i = require("./231438.js");
var a = require("./224275.js");
var o = require("./568113.js");
var s = require("./591439.js");
var l = require("./686310.js");