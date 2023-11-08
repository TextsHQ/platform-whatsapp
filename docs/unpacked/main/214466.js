var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTextStatusSuggestions = function () {
  return i.apply(this, arguments);
};
exports.setTextStatusSuggestions = function (e) {
  return o.userPrefsIdb.set(l.BACKEND_ONLY_KEYS.TEXT_STATUS_SUGGESTIONS, e);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/409847.js");
var l = require("../app/94872.js");
function i() {
  return (i = (0, r.default)(function* () {
    return o.userPrefsIdb.get(l.BACKEND_ONLY_KEYS.TEXT_STATUS_SUGGESTIONS);
  })).apply(this, arguments);
}