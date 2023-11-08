Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactBridgeApi = undefined;
var a = require("../app/391541.js");
var r = require("../app/177938.js");
var o = require("./899847.js");
const l = {
  updatePushname: o.updatePushname,
  bulkUpdatePhoneNumberJids: o.bulkUpdatePhoneNumberJids,
  updateContactName: o.updateContactName,
  bulkUpdateLidContactState: o.bulkUpdateLidContactState,
  updateDisappearingMode: o.updateDisappearingMode,
  updateTextStatus: o.updateTextStatus,
  updateContactWithVerifiedName(e) {
    let {
      contactId: t,
      verifiedNameInfo: n
    } = e;
    const o = r.ContactCollection.gadd(t);
    (0, a.updateContactsWithVerifiedNames)([n], [o]);
  },
  updateBusinessInfo: o.updateBusinessInfo,
  bulkUpdateUsernames: o.bulkUpdateUsernames,
  updateContactAdvAccountType: o.updateContactAdvAccountType
};
exports.ContactBridgeApi = l;