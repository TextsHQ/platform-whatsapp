var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetAllSubscribedNewslettersResponseSuccess = function (e, t) {
  const n = (0, u.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const r = (0, u.optionalChildWithTag)(e, "deleted", d);
  if (!r.success) {
    return r;
  }
  const o = (0, s.parseIQResultResponseMixin)(e, t);
  if (!o.success) {
    return o;
  }
  const l = (0, u.mapChildrenWithTag)(e, "newsletter", 0, 10000, c);
  if (!l.success) {
    return l;
  }
  return (0, a.makeResult)((0, i.default)((0, i.default)({}, o.value), {}, {
    deleted: r.value,
    newsletter: l.value
  }));
};
exports.parseGetAllSubscribedNewslettersResponseSuccessDeleted = d;
exports.parseGetAllSubscribedNewslettersResponseSuccessNewsletter = c;
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./200418.js");
var s = require("./822591.js");
var l = require("./415184.js");
var u = require("./686310.js");
function c(e) {
  const t = (0, u.assertTag)(e, "newsletter");
  if (!t.success) {
    return t;
  }
  const n = (0, l.parseNewsletterWithMetadataIQResponsePayloadMixin)(e);
  n.success;
  return n;
}
function d(e) {
  const t = (0, u.assertTag)(e, "deleted");
  if (!t.success) {
    return t;
  }
  const n = (0, o.parseDeletedSubscribedNewslettersMixin)(e);
  n.success;
  return n;
}