Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allUserPrefsIdb = function () {
  return (0, r.getUserPrefsTable)().all();
};
exports.bulkCreateOrReplaceUserPrefs = function (e) {
  return (0, r.getUserPrefsTable)().bulkCreateOrReplace(e);
};
exports.clearUserPrefs = function () {
  return (0, r.getUserPrefsTable)().clear();
};
exports.createOrReplaceUserPref = function (e) {
  return (0, r.getUserPrefsTable)().createOrReplace(e);
};
exports.getUserPref = function (e) {
  return (0, r.getUserPrefsTable)().get(e);
};
exports.removeUserPref = function (e) {
  return (0, r.getUserPrefsTable)().remove(e);
};
var r = require("./753108.js");