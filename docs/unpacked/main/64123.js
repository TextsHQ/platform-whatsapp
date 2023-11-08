var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setSMBDataSharingSettingAction = exports.getSMBDataSharingSettingAction = undefined;
var r = a(require("../app/883891.js"));
var o = require("../app/417442.js");
var l = require("../app/317285.js");
exports.getSMBDataSharingSettingAction = () => {
  const e = l.CTWADataSharingModel.getValue();
  if (e) {
    return Promise.resolve(e);
  } else {
    return r.default.fetchDataSharingSettingAndUpdateModel();
  }
};
exports.setSMBDataSharingSettingAction = e => (0, o.setCtwaBizDataSharingSettingJob)(e).then(e => {
  if (e) {
    l.CTWADataSharingModel.setValue(e);
  }
  return e;
}).catch(() => {
  __LOG__(4, undefined, new Error())`[ctwa][data_sharing] setSMBDataSharingSettingAction: setting data sharing setting failed`;
  return null;
});