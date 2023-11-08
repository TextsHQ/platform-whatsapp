Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SyncdFatalErrorType = undefined;
exports.convertSyncdFatalErrorFromAnnotations = function (e) {
  var t;
  var n;
  var r;
  var i;
  var s;
  var l;
  const u = e == null || (t = e.string) === null || t === undefined ? undefined : t.errorCode;
  if (u == null) {
    __LOG__(4, undefined, new Error())`syncd: missing error code for syncd fatal error`;
    return null;
  }
  const c = o.cast(u);
  if (c == null) {
    __LOG__(4, undefined, new Error())`syncd: unknown error code: ${u} for syncd fatal error`;
    return null;
  }
  return {
    type: c,
    collection: a.CollectionName.cast(e == null || (n = e.string) === null || n === undefined ? undefined : n.collection),
    patchSnapshotMutationCount: e == null || (r = e.int) === null || r === undefined ? undefined : r.patchSnapshotMutationCount,
    patchVersion: e == null || (i = e.int) === null || i === undefined ? undefined : i.patchVersion,
    isFatal: e == null || (s = e.bool) === null || s === undefined ? undefined : s.isFatal,
    isLtHashConsistent: e == null || (l = e.bool) === null || l === undefined ? undefined : l.isLtHashConsistent
  };
};
exports.reportSyncdFatalError = function (e, t, n, a, o, s) {
  (0, i.startMetric)(r.PRE_METRIC.SYNCD_FATAL_ERROR).endFail("syncd fatal error: " + e, function (e) {
    const {
      type: t,
      collection: n,
      patchSnapshotMutationCount: r,
      patchVersion: i,
      isFatal: a,
      isLtHashConsistent: o
    } = e;
    return {
      string: {
        errorCode: t,
        collection: n == null ? null : n
      },
      int: {
        patchSnapshotMutationCount: r,
        patchVersion: i
      },
      bool: {
        isFatal: a,
        isLtHashConsistent: o
      }
    };
  }({
    type: e,
    collection: t,
    patchSnapshotMutationCount: n,
    patchVersion: a,
    isFatal: o,
    isLtHashConsistent: s
  }));
};
var r = require("./489783.js");
var i = require("./947339.js");
var a = require("./122393.js");
const o = require("../vendor/654302.js").Mirrored(["PATCH_PROTOBUF_SERIALIZATION_FAILED", "MUTATIONS_PROTOBUF_SERIALIZATION_FAILED", "ACTION_DATA_PROTOBUF_SERIALIZATION_FAILED", "ENCRYPTION_FAILED", "MISSING_SNAPSHOT_VERSION", "MISSING_SNAPSHOT_MAC", "MISSING_SNAPSHOT_KEY_ID", "MISSING_PATCH_VERSION", "PATCH_WITH_BOTH_INLINE_AND_EXTERNAL_MUTATIONS", "MISSING_PATCH_SNAPSHOT_MAC", "MISSING_PATCH_MAC", "MISSING_PATCH_KEY_ID", "MISSING_EXTERNAL_BLOB_REFERENCE_MEDIA_KEY", "MISSING_EXTERNAL_BLOB_REFERENCE_DIRECT_PATH", "MISSING_EXTERNAL_BLOB_REFERENCE_FILE_SHA256", "MISSING_EXTERNAL_BLOB_REFERENCE_FILE_ENC_SHA256", "MISSING_MUTATION_OPERATION", "MISSING_MUTATION_RECORD", "MISSING_MUTATION_INDEX", "MISSING_MUTATION_VALUE", "MISSING_MUTATION_KEY_ID", "EXTERNAL_BLOB_REFERENCE_PROTOBUF_DESERIALIZATION_FAILED", "SNAPSHOT_PROTOBUF_DESERIALIZATION_FAILED", "PATCH_PROTOBUF_DESERIALIZATION_FAILED", "MUTATIONS_PROTOBUF_DESERIALIZATION_FAILED", "ACTION_DATA_PROTOBUF_DESERIALIZATION_FAILED", "MISSING_ACTION_INDEX", "MISSING_ACTION_VERSION", "SNAPSHOT_MAC_MISMATCH_IN_SNAPSHOT", "SNAPSHOT_MAC_MISMATCH_IN_PATCH", "MAC_MISMATCH_PATCH", "DECRYPTION_FAILED", "DUPLICATE_PATCH_VERSION_IN_COLLECTION", "SAME_INDEX_FOR_MULTIPLE_MUTATIONS_IN_PATCH", "SAME_INDEX_FOR_MULTIPLE_MUTATIONS_IN_SNAPSHOT", "MISSING_ACTION_VALUE", "MISSING_ACTION_TIMESTAMP", "XMPP_BAD_REQUEST_FOR_COLLECTION", "XMPP_NOT_FOUND_FOR_COLLECTION", "CYCLIC_MUTATION_DEPENDENCY_IN_PATCH", "SERVER_DID_NOT_SEND_ALL_PATCHES", "TERMINAL_PATCH_MISSING_DATA", "TERMINAL_PATCH_DESERIALIZATION_ERROR", "TERMINAL_PATCH_UNKNOWN", "INVALID_ACTION_INDEX", "XMPP_BAD_REQUEST_GLOBAL_ERROR", "XMPP_NOT_FOUND_GLOBAL_ERROR", "XMPP_BAD_METHOD_GLOBAL_ERROR", "XMPP_NOT_ACCEPTABLE_GLOBAL_ERROR", "TOO_MANY_INTERNAL_SERVER_ERRORS_IN_7D", "TIMEOUT_WHILE_WAITING_FOR_MISSING_KEY", "MISSING_KEY_ON_ALL_CLIENTS"]);
exports.SyncdFatalErrorType = o;