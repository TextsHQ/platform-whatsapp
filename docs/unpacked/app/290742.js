Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeSmbDataSharingSettingMixin = function (e, t) {
  const n = function (e) {
    return (0, r.smax)("privacy", null, (0, a.mergeSmbDataSharingSettingValueMixin)((0, r.smax)("smb_data_sharing_with_meta_consent", null), e));
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./598040.js");