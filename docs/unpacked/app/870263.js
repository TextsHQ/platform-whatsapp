Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dbCallbacks = undefined;
var r = require("./83905.js");
var i = require("./159992.js");
var a = require("./496573.js");
const o = {
  downloadSyncBlob: a.downloadSyncBlob,
  getDeviceFingerprint: i.getDeviceFingerprint,
  handleSyncBeforeApplyPatch: r.handleSyncBeforeApplyPatch,
  handleSyncCompleted: r.handleSyncCompleted,
  handleSyncDelayApplyingPatchUntilUIUnblocks: r.handleSyncDelayApplyingPatchUntilUIUnblocks,
  handleSyncdFatal: r.handleSyncdFatal,
  sendSyncdKeyRequest: i.sendSyncdKeyRequest,
  sendSyncdKeyRotation: i.sendSyncdKeyRotation,
  uploadSyncExternalPatch: a.uploadSyncExternalPatch,
  writeSyncdLog: r.writeSyncdLog,
  printSyncdLog: r.printSyncdLog
};
exports.dbCallbacks = o;