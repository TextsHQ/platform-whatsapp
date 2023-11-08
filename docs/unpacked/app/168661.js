Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shouldBlockByCountry = function (e) {
  var t;
  return !!(0, i.countryGatingEnabled)() && ((t = e.privacyMode) === null || t === undefined ? undefined : t.hostStorage) === a.HostStorageEnumType.Facebook && !(0, r.getFbBrandedNumber)(e.id.user);
};
var r = require("./513592.js");
var i = require("./72696.js");
var a = require("./257845.js");