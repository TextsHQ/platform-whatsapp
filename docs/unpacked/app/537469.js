var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COUNTRY_FILTER_TYPE = undefined;
exports.getCountries = function () {
  return p.apply(this, arguments);
};
exports.getCountryName = c;
exports.getCountryNameByPhone = function () {
  return f.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./189509.js");
var o = r(require("./932325.js"));
var s = require("./486392.js");
const l = Object.freeze({
  META_RECOGNIZED: "META_RECOGNIZED",
  WHATSAPP_REGISTRATION: "WHATSAPP_REGISTRATION"
});
exports.COUNTRY_FILTER_TYPE = l;
const u = {
  [l.META_RECOGNIZED]: ["AC", "CP", "DG", "EA", "EU", "EZ", "IC", "QO", "TA", "UN", "XA", "XB"],
  [l.WHATSAPP_REGISTRATION]: ["AQ", "BV", "CP", "DG", "EA", "EH", "EU", "EZ", "GS", "HM", "IC", "PN", "QO", "TA", "TF", "UM", "UN", "XA", "XB", "ZZ"]
};
function c() {
  return d.apply(this, arguments);
}
function d() {
  return (d = (0, i.default)(function* (e, t) {
    if (!e || t && u[t].includes(e.toUpperCase())) {
      return;
    }
    return (yield (0, a.getCountriesMap)(o.default.getLocale()))[e.toUpperCase()];
  })).apply(this, arguments);
}
function p() {
  return (p = (0, i.default)(function* (e) {
    const t = yield (0, a.getCountriesMap)(o.default.getLocale());
    return Object.keys(t).filter(t => !t.includes("@") && !u[e.filter].includes(t)).map(e => [e, t[e]]).sort((e, t) => {
      let [, n] = e;
      let [, r] = t;
      return String(n).localeCompare(String(r));
    });
  })).apply(this, arguments);
}
function f() {
  return (f = (0, i.default)(function* (e) {
    const t = (0, s.getCountryShortcodeByPhone)(e);
    if (t !== "") {
      return c(t);
    }
  })).apply(this, arguments);
}