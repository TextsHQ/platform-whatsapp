Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseIQErrorGrowthLockedGrowthLocked = a;
exports.parseIQErrorGrowthLockedMixin = function (e) {
  const t = (0, i.assertTag)(e, "error");
  if (!t.success) {
    return t;
  }
  const n = (0, i.optionalChildWithTag)(e, "growth_locked", a);
  if (!n.success) {
    return n;
  }
  const o = (0, i.literal)(i.attrString, e, "text", "growth-locked");
  if (!o.success) {
    return o;
  }
  const s = (0, i.literal)(i.attrInt, e, "code", 436);
  if (!s.success) {
    return s;
  }
  return (0, r.makeResult)({
    text: o.value,
    code: s.value,
    growthLocked: n.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");
function a(e) {
  const t = (0, i.assertTag)(e, "growth_locked");
  if (!t.success) {
    return t;
  }
  const n = (0, i.literal)(i.attrString, e, "type", "invite");
  if (!n.success) {
    return n;
  }
  const a = (0, i.attrIntRange)(e, "expiration", 0, undefined);
  if (a.success) {
    return (0, r.makeResult)({
      type: n.value,
      expiration: a.value
    });
  } else {
    return a;
  }
}