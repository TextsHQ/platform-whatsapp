Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scanComplianceInfoForMissingData = exports.isBusinessCompliant = exports.getGrievanceOfficerDetailsError = exports.getEntityTypeText = exports.getCustomerCareDetailsError = exports.existsGrievanceOfficerDetailsContact = exports.existsFieldIgnoreHardEnforcement = exports.existsField = exports.existsCustomerCareDetailsContact = undefined;
var r = require("./72696.js");
var i = require("./817649.js");
var a = require("./741703.js");
var o = require("../vendor/548360.js");
exports.getEntityTypeText = e => {
  const {
    entityType: t,
    entityTypeCustom: n,
    isRegistered: r
  } = e || {};
  const a = {
    [i.businessTypeOptions.limitedLiabilityPartnership]: o.fbt._("Limited liability partnership", null, {
      hk: "2dwmwU"
    }),
    [i.businessTypeOptions.soleProprietorship]: o.fbt._("Sole proprietorship", null, {
      hk: "2N7jks"
    }),
    [i.businessTypeOptions.partnership]: o.fbt._("Partnership", null, {
      hk: "ZeckL"
    }),
    [i.businessTypeOptions.publicCompany]: o.fbt._("Public Company", null, {
      hk: "1YuMvC"
    }),
    [i.businessTypeOptions.privateCompany]: o.fbt._("Private Company", null, {
      hk: "WL0uU"
    }),
    [i.businessTypeOptions.other]: o.fbt._("Other", null, {
      hk: "3zua5D"
    })
  };
  const s = n || a[t] || "";
  if (!s) {
    return "";
  }
  let l = "";
  if ([i.businessTypeOptions.partnership, i.businessTypeOptions.other].includes(t)) {
    l = r != null && r ? o.fbt._("Registered Business", null, {
      hk: "3N1x9I"
    }) : o.fbt._("Not Registered Business", null, {
      hk: "2zDsuK"
    });
  }
  return `${s.toString()}${l ? ` (${l.toString()})` : ""}`;
};
const s = (e, t) => !(!e && !t);
const l = e => !!(e == null ? undefined : e.trim());
exports.existsFieldIgnoreHardEnforcement = l;
const u = (e, t) => !(0, r.canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney)(t) || l(e);
exports.existsField = u;
const c = (e, t, n, i, a) => !(0, r.canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney)(t) || n.some(t => l(t === i ? a : e == null ? undefined : e[t]));
const d = (e, t, n, r) => c(e, t, ["mobileNumber", "landlineNumber"], n, r);
exports.existsCustomerCareDetailsContact = d;
const p = (e, t, n, r) => c(e, t, ["mobileNumber", "landlineNumber", "email"], n, r);
exports.existsGrievanceOfficerDetailsContact = p;
exports.isBusinessCompliant = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let n = arguments.length > 2 ? arguments[2] : undefined;
  if (!(0, r.canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney)(n)) {
    return true;
  }
  if (!t) {
    return false;
  }
  const {
    entityName: i,
    entityType: a,
    entityTypeCustom: o,
    customerCareDetails: l,
    grievanceOfficerDetails: c
  } = t;
  return [e, i, l == null ? undefined : l.email, c == null ? undefined : c.name].every(e => u(e, n)) && s(a, o) && d(l, n) && p(c, n);
};
exports.getCustomerCareDetailsError = (e, t, n, r, i) => d(e, i, t, n) ? r : "";
exports.getGrievanceOfficerDetailsError = (e, t, n, r, i) => p(e, i, t, n) ? r : "";
exports.scanComplianceInfoForMissingData = e => {
  const t = (e == null ? undefined : e.countryCodeOrigin) === String(a.SyntheticCountryCode.NotApplicable);
  const n = !t && (e == null ? undefined : e.countryCodeOrigin) !== undefined;
  const r = !t && (e == null ? undefined : e.importerName) !== undefined;
  return {
    isExempt: t,
    hasImporterAddress: !t && (e == null ? undefined : e.importerAddress) !== undefined && [e.importerAddress.street1, e.importerAddress.street2, e.importerAddress.city, e.importerAddress.region, e.importerAddress.postalCode, e.importerAddress.countryCode].some(e => e),
    hasImporterName: r,
    hasCountryCodeOrigin: n
  };
};