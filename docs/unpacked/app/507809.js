Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encodeSyncActionData = function (e) {
  try {
    return (0, s.encodeProtobuf)(i.SyncActionDataSpec, e).readBuffer();
  } catch (e) {
    (0, o.reportSyncdFatalError)(o.SyncdFatalErrorType.ACTION_DATA_PROTOBUF_SERIALIZATION_FAILED);
    throw new a.SyncdFatalError("action data protobuf serialization failed");
  }
};
exports.encodeSyncdMutations = function (e) {
  try {
    return (0, s.encodeProtobuf)(r.SyncdMutationsSpec, e).readBuffer();
  } catch (e) {
    (0, o.reportSyncdFatalError)(o.SyncdFatalErrorType.MUTATIONS_PROTOBUF_SERIALIZATION_FAILED);
    throw new a.SyncdFatalError("mutations protobuf serialization failed");
  }
};
exports.encodeSyncdPatch = function (e) {
  try {
    return (0, s.encodeProtobuf)(r.SyncdPatchSpec, e).readBuffer();
  } catch (e) {
    (0, o.reportSyncdFatalError)(o.SyncdFatalErrorType.PATCH_PROTOBUF_SERIALIZATION_FAILED);
    throw new a.SyncdFatalError("patch protobuf serialization failed");
  }
};
var r = require("./679905.js");
var i = require("./527796.js");
var a = require("./256764.js");
var o = require("./787685.js");
var s = require("./385914.js");