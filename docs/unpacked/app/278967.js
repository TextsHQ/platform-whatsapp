var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSetResponseSuccess = function (e, t) {
  const n = (0, l.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const r = (0, l.optionalChildWithTag)(e, "notice", u);
  if (!r.success) {
    return r;
  }
  const s = (0, o.parseIQResultResponseMixin)(e, t);
  if (!s.success) {
    return s;
  }
  return (0, a.makeResult)((0, i.default)((0, i.default)({}, s.value), {}, {
    notice: r.value
  }));
};
exports.parseSetResponseSuccessNotice = u;
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./58529.js");
var s = require("./938706.js");
var l = require("./686310.js");
function u(e) {
  const t = (0, l.assertTag)(e, "notice");
  if (!t.success) {
    return t;
  }
  const n = (0, l.attrIntRange)(e, "t", 0, undefined);
  if (!n.success) {
    return n;
  }
  const r = (0, s.parseStageMixin)(e);
  if (r.success) {
    return (0, a.makeResult)((0, i.default)({
      t: n.value
    }, r.value));
  } else {
    return r;
  }
}