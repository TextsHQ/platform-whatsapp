var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shouldPreventCatalogProductSelection = exports.isSellerCountrySameAsBuyer = exports.isOrderExpansionEnabled = exports.isContactCountrySupported = undefined;
var r = a(require("../vendor/288306.js"));
var o = require("../app/72696.js");
var l = require("../app/486392.js");
var i = require("../app/459857.js");
const u = () => {
  var e;
  var t;
  return ((e = (t = (0, o.getOrdersExpansionAllowedCountries)()) === null || t === undefined ? undefined : t.length) !== null && e !== undefined ? e : 0) > 0;
};
exports.isOrderExpansionEnabled = u;
const s = (0, r.default)(e => {
  var t;
  const n = (t = (0, o.getOrdersExpansionAllowedCountries)()) !== null && t !== undefined ? t : [];
  const a = (0, l.getCountryShortcodeByPhone)(e);
  return n.find(e => a === e) != null;
});
exports.isContactCountrySupported = e => !!u() && s(e.contact.id.user);
exports.shouldPreventCatalogProductSelection = (e, t) => {
  var n;
  var a;
  return !!u() && e.length > 0 && ((n = e.at(0)) === null || n === undefined ? undefined : n.currency) != null && ((a = e.at(0)) === null || a === undefined ? undefined : a.currency) !== t;
};
exports.isSellerCountrySameAsBuyer = e => {
  const t = (0, i.getMaybeMeUser)();
  return t != null && (0, l.getCountryShortcodeByPhone)(t.user) === (0, l.getCountryShortcodeByPhone)(e.contact.id.user);
};