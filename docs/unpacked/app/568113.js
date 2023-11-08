Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attrBroadcastJid = function (e, t) {
  return (0, a.attrValidate)(e, t, r.validateBroadcastJid, "BroadcastJid");
};
exports.attrCallJid = function (e, t) {
  return (0, a.attrValidate)(e, t, r.validateCallJid, "CallJid");
};
exports.attrDeviceJid = function (e, t) {
  return (0, a.attrValidate)(e, t, r.validateDeviceJid, "DeviceJid");
};
exports.attrDomainJid = function (e, t) {
  return (0, a.attrValidate)(e, t, r.validateDomainJid, "DomainJid");
};
exports.attrGroupJid = function (e, t) {
  return (0, a.attrValidate)(e, t, r.validateGroupJid, "GroupJid");
};
exports.attrJidEnum = function (e, t, n) {
  const r = (0, a.attrString)(e, t);
  if (!r.success) {
    return r;
  }
  const {
    validators: o,
    typeName: s
  } = n;
  for (let e = 0; e < o.length; e++) {
    const t = o[e](r.value);
    if (t != null) {
      return (0, i.makeResult)(t);
    }
  }
  return (0, a.errorMessage)(e, `to have "${t}"={${s}}, but instead has "${r.value}"`);
};
exports.attrNewsletterJid = function (e, t) {
  return (0, a.attrValidate)(e, t, r.validateNewsletterJid, "NewsletterJid");
};
exports.attrStatusJid = function (e, t) {
  return (0, a.attrValidate)(e, t, r.validateStatusJid, "StatusJid");
};
exports.attrUserJid = function (e, t) {
  return (0, a.attrValidate)(e, t, r.validateUserJid, "UserJid");
};
exports.literalJid = function (e, t, n, r) {
  const i = e(t, n);
  if (!i.success) {
    return i;
  }
  if (i.value === r) {
    return i;
  }
  return (0, a.errorMessage)(t, `to have "${n}"={${r}}, but instead has "${i.value}"`);
};
exports.optionalLiteralJid = function (e, t, n, r) {
  const i = (0, a.optional)(e, t, n);
  if (!i.success) {
    return i;
  }
  if (i.value == null || i.value === r) {
    return i;
  }
  return (0, a.errorMessage)(t, `to have "${n}"={${r}}, but instead has "${i.value}"`);
};
var r = require("./418987.js");
var i = require("./135781.js");
var a = require("./686310.js");