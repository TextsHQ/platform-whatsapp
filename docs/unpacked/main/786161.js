Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmbDataSharingConsentScreenWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./767301.js");
var o = require("./848122.js");
const {
  INTEGER: l
} = a.TYPES;
const i = (0, a.defineEvents)({
  SmbDataSharingConsentScreen: [3972, {
    smbDataSharingConsentScreenEntryPoint: [3, r.SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT],
    smbDataSharingConsentScreenType: [1, o.SMB_DATA_SHARING_CONSENT_SCREEN_TYPE],
    smbDataSharingConsentScreenVersion: [2, l]
  }, [1, 1, 1], "regular"]
});
exports.SmbDataSharingConsentScreenWamEvent = i;