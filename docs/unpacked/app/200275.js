Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleSmbDataSharingSettingNotification = function (e) {
  (0, r.frontendFireAndForget)("smbDataSharingSettingUpdate", {
    smbDataSharingSettingValue: e
  });
};
var r = require("./359987.js");