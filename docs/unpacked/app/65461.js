Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeExternalBlobReference = function (e, t) {
  try {
    return (0, s.decodeProtobuf)(r.ExternalBlobReferenceSpec, t);
  } catch (t) {
    (0, o.reportSyncdFatalError)(o.SyncdFatalErrorType.EXTERNAL_BLOB_REFERENCE_PROTOBUF_DESERIALIZATION_FAILED, e);
    throw new a.SyncdFatalError("external blob reference protobuf deserialization failed");
  }
};
exports.decodeSyncActionData = function (e, t) {
  try {
    return (0, s.decodeProtobuf)(i.SyncActionDataSpec, t);
  } catch (t) {
    (0, o.reportSyncdFatalError)(o.SyncdFatalErrorType.ACTION_DATA_PROTOBUF_DESERIALIZATION_FAILED, e);
    throw new a.SyncdFatalError("action data protobuf deserialization failed");
  }
};
exports.decodeSyncdMutations = function (e, t) {
  try {
    return (0, s.decodeProtobuf)(r.SyncdMutationsSpec, t);
  } catch (t) {
    (0, o.reportSyncdFatalError)(o.SyncdFatalErrorType.MUTATIONS_PROTOBUF_DESERIALIZATION_FAILED, e);
    throw new a.SyncdFatalError("mutations protobuf deserialization failed");
  }
};
exports.decodeSyncdPatch = function (e, t) {
  try {
    return (0, s.decodeProtobuf)(r.SyncdPatchSpec, t);
  } catch (t) {
    (0, o.reportSyncdFatalError)(o.SyncdFatalErrorType.PATCH_PROTOBUF_DESERIALIZATION_FAILED, e);
    throw new a.SyncdFatalError("patch protobuf deserialization failed");
  }
};
exports.decodeSyncdSnapshot = function (e, t) {
  try {
    return (0, s.decodeProtobuf)(r.SyncdSnapshotSpec, t);
  } catch (t) {
    (0, o.reportSyncdFatalError)(o.SyncdFatalErrorType.SNAPSHOT_PROTOBUF_DESERIALIZATION_FAILED, e);
    throw new a.SyncdFatalError("snapshot protobuf deserialization failed");
  }
};
var r = require("./679905.js");
var i = require("./527796.js");
var a = require("./256764.js");
var o = require("./787685.js");
var s = require("./394629.js");