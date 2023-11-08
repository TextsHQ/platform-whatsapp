Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseIQErrorNotAcceptableField = a;
exports.parseIQErrorNotAcceptableMixin = function (e) {
  const t = (0, i.assertTag)(e, "error");
  if (!t.success) {
    return t;
  }
  const n = (0, i.optionalChildWithTag)(e, "field", a);
  if (!n.success) {
    return n;
  }
  const o = (0, i.literal)(i.attrString, e, "text", "not-acceptable");
  if (!o.success) {
    return o;
  }
  const s = (0, i.literal)(i.attrInt, e, "code", 406);
  if (!s.success) {
    return s;
  }
  return (0, r.makeResult)({
    text: o.value,
    code: s.value,
    field: n.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");
function a(e) {
  const t = (0, i.assertTag)(e, "field");
  if (!t.success) {
    return t;
  }
  const n = (0, i.attrString)(e, "name");
  if (!n.success) {
    return n;
  }
  const a = (0, i.attrString)(e, "reason");
  if (a.success) {
    return (0, r.makeResult)({
      name: n.value,
      reason: a.value
    });
  } else {
    return a;
  }
}