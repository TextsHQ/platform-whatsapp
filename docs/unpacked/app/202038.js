Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encryptedUploadMutationsToSyncActions = function (e, t) {
  return e.map(e => {
    const n = s(e.binarySyncAction);
    return {
      index: e.index,
      action: e.action,
      binarySyncData: n,
      actionState: t,
      version: e.version,
      keyId: e.keyId,
      indexMac: e.indexMac,
      valueMac: e.valueMac,
      collection: e.collection,
      timestamp: e.timestamp
    };
  });
};
exports.setMutationToSyncAction = function (e, t, n, r, i) {
  return {
    index: e.index,
    binarySyncData: e.binarySyncData,
    version: e.version,
    keyId: e.keyId,
    indexMac: e.indexMac,
    valueMac: e.valueMac,
    collection: e.collection,
    timestamp: e.timestamp,
    action: n,
    actionState: t,
    modelId: r,
    modelType: i != null ? i : undefined
  };
};
exports.syncActionToSyncData = s;
exports.syncActionsToDecryptedMutation = function (e) {
  return e.map(e => ({
    collection: e.collection,
    index: e.index,
    action: e.action,
    indexMac: e.indexMac,
    keyId: e.keyId,
    operation: r.SyncdMutation$SyncdOperation.SET,
    binarySyncData: e.binarySyncData,
    valueMac: e.valueMac,
    version: e.version
  }));
};
var r = require("./679905.js");
var i = require("./527796.js");
var a = require("./394629.js");
var o = require("./385914.js");
function s(e) {
  const t = (0, a.decodeProtobuf)(i.SyncActionValueSpec, e);
  return (0, o.encodeProtobuf)(i.SyncActionDataSpec, {
    value: t
  }).readBuffer();
}