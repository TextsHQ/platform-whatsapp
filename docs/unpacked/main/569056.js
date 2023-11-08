var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WA_DATA_SHARING_HCA = exports.TOS_BASE_URL = exports.META_BUSINESS_TOS = exports.BIZ_TOS_BASE_URL = undefined;
exports.getBizDataSharingHcaUrl = function () {
  return `${u}?lg=${r.default.getLocale()}`;
};
exports.getBizTosUrl = function () {
  return `${l}?lg=${r.default.getLocale()}`;
};
exports.getMetaBizTosUrl = function () {
  return i;
};
exports.getTosUrl = function () {
  return `${o}?lg=${r.default.getLocale()}`;
};
var r = a(require("../app/932325.js"));
const o = "https://www.whatsapp.com/legal/";
exports.TOS_BASE_URL = o;
const l = "https://www.whatsapp.com/legal/business-terms";
exports.BIZ_TOS_BASE_URL = l;
const i = "https://www.facebook.com/legal/terms/businesstools";
exports.META_BUSINESS_TOS = i;
const u = "https://faq.whatsapp.com/732422085323636";
exports.WA_DATA_SHARING_HCA = u;