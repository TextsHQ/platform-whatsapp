var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetGroupInfoResponseSuccess = function (e, t) {
  const n = (0, u.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const r = (0, u.optionalChildWithTag)(e, "group", c);
  if (!r.success) {
    return r;
  }
  const i = (0, l.attrStringFromReference)(t, ["to"]);
  if (!i.success) {
    return i;
  }
  const o = (0, u.literal)(u.attrString, e, "from", i.value);
  if (!o.success) {
    return o;
  }
  const s = (0, u.literal)(u.attrString, e, "type", "result");
  if (!s.success) {
    return s;
  }
  const d = (0, l.attrStringFromReference)(t, ["id"]);
  if (!d.success) {
    return d;
  }
  const p = (0, u.literal)(u.attrString, e, "id", d.value);
  if (!p.success) {
    return p;
  }
  return (0, a.makeResult)({
    type: s.value,
    group: r.value
  });
};
exports.parseGetGroupInfoResponseSuccessGroup = c;
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./120892.js");
var s = require("./672819.js");
var l = require("./591439.js");
var u = require("./686310.js");
function c(e) {
  const t = (0, u.assertTag)(e, "group");
  if (!t.success) {
    return t;
  }
  const n = (0, u.optional)(u.attrIntRange, e, "size", 0, 19999);
  if (!n.success) {
    return n;
  }
  const r = (0, s.parseGroupInfoMixin)(e);
  if (!r.success) {
    return r;
  }
  const l = (0, o.parseDedupAttrsMixin)(e);
  return (0, a.makeResult)((0, i.default)((0, i.default)({
    size: n.value
  }, r.value), {}, {
    dedupAttrsMixin: l.success ? l.value : null
  }));
}