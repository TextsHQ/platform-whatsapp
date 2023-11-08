var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetLinkedAccountsResponseSuccess = function (e, t) {
  const n = (0, h.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const a = (0, h.flattenedChildWithTag)(e, "linked_accounts");
  if (!a.success) {
    return a;
  }
  const l = (0, h.optionalChildWithTag)(a.value, "fb_page", g);
  if (!l.success) {
    return l;
  }
  const i = (0, h.optionalChildWithTag)(a.value, "fb_biz", E);
  if (!i.success) {
    return i;
  }
  const u = (0, h.optionalChildWithTag)(a.value, "ig_professional", v);
  if (!u.success) {
    return u;
  }
  const c = (0, h.optionalChildWithTag)(a.value, "whatsapp_ad_identity", _);
  if (!c.success) {
    return c;
  }
  const d = (0, s.parseHackBaseIQResultResponseMixin)(e, t);
  if (!d.success) {
    return d;
  }
  return (0, o.makeResult)((0, r.default)((0, r.default)({}, d.value), {}, {
    linkedAccountsFbPage: l.value,
    linkedAccountsFbBiz: i.value,
    linkedAccountsIgProfessional: u.value,
    linkedAccountsWhatsappAdIdentity: c.value
  }));
};
exports.parseGetLinkedAccountsResponseSuccessLinkedAccountsFbBiz = E;
exports.parseGetLinkedAccountsResponseSuccessLinkedAccountsFbPage = g;
exports.parseGetLinkedAccountsResponseSuccessLinkedAccountsIgProfessional = v;
exports.parseGetLinkedAccountsResponseSuccessLinkedAccountsWhatsappAdIdentity = _;
var r = a(require("../vendor/73982.js"));
var o = require("../app/135781.js");
var l = require("./592099.js");
var i = require("./66555.js");
var u = require("./331016.js");
var s = require("./346092.js");
var c = require("./12946.js");
var d = require("./739604.js");
var f = require("./500780.js");
var p = require("./751291.js");
var m = require("./597920.js");
var h = require("../app/686310.js");
function g(e) {
  const t = (0, h.assertTag)(e, "fb_page");
  if (!t.success) {
    return t;
  }
  const n = (0, h.flattenedChildWithTag)(e, "whatsapp_as_page_button");
  if (!n.success) {
    return n;
  }
  const a = (0, h.attrStringEnum)(n.value, "state", l.ENUM_OFF_ON);
  if (!a.success) {
    return a;
  }
  const i = (0, u.parseFBPageResponseBaseMixin)(e);
  if (!i.success) {
    return i;
  }
  const s = (0, d.parseHasProfilePictureMixin)(e);
  const c = (0, f.parseHasShowOnProfileMixin)(e);
  return (0, o.makeResult)((0, r.default)((0, r.default)({
    whatsappAsPageButtonState: a.value
  }, i.value), {}, {
    hasProfilePictureMixin: s.success ? s.value : null,
    hasShowOnProfileMixin: c.success ? c.value : null
  }));
}
function E(e) {
  const t = (0, h.assertTag)(e, "fb_biz");
  if (!t.success) {
    return t;
  }
  const n = (0, i.parseFBBizResponseMixin)(e);
  n.success;
  return n;
}
function v(e) {
  const t = (0, h.assertTag)(e, "ig_professional");
  if (!t.success) {
    return t;
  }
  const n = (0, p.parseIGProfessionalResponseBaseMixin)(e);
  if (!n.success) {
    return n;
  }
  const a = (0, d.parseHasProfilePictureMixin)(e);
  const l = (0, c.parseHasDisplayNameMixin)(e);
  const i = (0, f.parseHasShowOnProfileMixin)(e);
  return (0, o.makeResult)((0, r.default)((0, r.default)({}, n.value), {}, {
    hasProfilePictureMixin: a.success ? a.value : null,
    hasDisplayNameMixin: l.success ? l.value : null,
    hasShowOnProfileMixin: i.success ? i.value : null
  }));
}
function _(e) {
  const t = (0, h.assertTag)(e, "whatsapp_ad_identity");
  if (!t.success) {
    return t;
  }
  const n = (0, m.parseWhatsAppAdIdentityResponseMixin)(e);
  n.success;
  return n;
}