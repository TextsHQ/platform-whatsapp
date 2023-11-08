Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseCTWAPrivacy = function (e) {
  try {
    var t;
    const {
      parsedRequest: n
    } = (0, r.receiveSyncPrivacySettingRPC)(e.node());
    const i = (t = n.privacySmbDataSharingSettingMixin) === null || t === undefined ? undefined : t.value;
    if (i == null) {
      return null;
    } else {
      return {
        smbDataSharingSetting: i
      };
    }
  } catch (e) {
    __LOG__(4, undefined, new Error())`parseCTWAPrivacy: Could not parse RPC response`;
    return null;
  }
};
var r = require("./591522.js");