Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.businessTypeOptions = exports.VERIFIED_LEVEL = exports.DAYS_OF_WEEK = exports.COMMERCE_EXPERIENCE_TYPES = exports.BUSINESS_PROFILE_FIELDS_LENGTH = exports.BUSINESS_HOUR_MODES = undefined;
exports.convertLevel = function (e) {
  if (e == null) {
    return;
  }
  switch (e) {
    case "unknown":
      return r.UNKNOWN;
    case "low":
      return r.LOW;
    case "high":
      return r.HIGH;
    default:
      return r.UNKNOWN;
  }
};
const r = {
  UNKNOWN: 0,
  LOW: 1,
  HIGH: 2
};
exports.VERIFIED_LEVEL = r;
exports.DAYS_OF_WEEK = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
exports.BUSINESS_HOUR_MODES = {
  OPEN_24H: "open_24h",
  SPECIFIC_HOURS: "specific_hours",
  APPOINTMENT_ONLY: "appointment_only"
};
const i = require("../vendor/76672.js")({
  CATALOG: "catalog",
  NONE: "none",
  SHOP: "shop"
});
exports.COMMERCE_EXPERIENCE_TYPES = i;
exports.businessTypeOptions = {
  limitedLiabilityPartnership: "Limited liability partnership",
  soleProprietorship: "Sole proprietorship",
  partnership: "Partnership",
  publicCompany: "Public Company",
  privateCompany: "Private Company",
  other: "Other"
};
exports.BUSINESS_PROFILE_FIELDS_LENGTH = {
  WEBSITE: 256,
  DESCRIPTION: 512,
  EMAIL: 128,
  ADDRESS: 256
};