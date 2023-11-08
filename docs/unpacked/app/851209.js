Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateAndTypeSetMutations = function (e, t) {
  return t.map(t => {
    const n = (0, u.decodeProtobuf)(a.SyncActionDataSpec, t.binarySyncData).value;
    if (!n) {
      (0, l.reportSyncdFatalError)(l.SyncdFatalErrorType.MISSING_ACTION_VALUE, e);
      throw new s.SyncdFatalError("missing action value");
    }
    const i = (0, r.maybeNumberOrThrowIfTooLarge)(n.timestamp);
    if (i == null) {
      (0, l.reportSyncdFatalError)(l.SyncdFatalErrorType.MISSING_ACTION_TIMESTAMP, e);
      throw new s.SyncdFatalError("missing action timestamp");
    }
    return {
      index: t.index,
      version: t.version,
      keyId: t.keyId,
      indexMac: t.indexMac,
      valueMac: t.valueMac,
      collection: t.collection,
      binarySyncData: t.binarySyncData,
      timestamp: i
    };
  });
};
exports.validateNoDuplicatePatchVersionInCollection = function (e, t) {
  const n = new Set();
  t.forEach(t => {
    const r = t.version.version;
    if (n.has(r)) {
      (0, l.reportSyncdFatalError)(l.SyncdFatalErrorType.DUPLICATE_PATCH_VERSION_IN_COLLECTION, e);
      throw new s.SyncdFatalError("duplicate patch version in collection");
    }
    n.add(r);
  });
};
exports.validateNoSameIndexForMultipleMutations = function (e, t, n) {
  const r = new Set();
  const a = new Set();
  t.forEach(t => {
    let u = false;
    if (t.operation === i.SyncdMutation$SyncdOperation.SET) {
      if (r.has(t.index)) {
        u = true;
      } else {
        r.add(t.index);
      }
    }
    if (t.operation === i.SyncdMutation$SyncdOperation.REMOVE) {
      if (a.has(t.index)) {
        u = true;
      } else {
        a.add(t.index);
      }
    }
    if (u) {
      switch (n) {
        case o.SyncDataType.Patch:
          (0, l.reportSyncdFatalError)(l.SyncdFatalErrorType.SAME_INDEX_FOR_MULTIPLE_MUTATIONS_IN_PATCH, e);
          throw new s.SyncdFatalError("same index for multiple mutations in patch");
        case o.SyncDataType.Snapshot:
          (0, l.reportSyncdFatalError)(l.SyncdFatalErrorType.SAME_INDEX_FOR_MULTIPLE_MUTATIONS_IN_SNAPSHOT, e);
          throw new s.SyncdFatalError("same index for multiple mutations in snapshot");
        case o.SyncDataType.Local:
          __LOG__(3)`validation not required for local mutations`;
      }
    }
  });
};
var r = require("./229079.js");
var i = require("./679905.js");
var a = require("./527796.js");
var o = require("./122393.js");
var s = require("./256764.js");
var l = require("./787685.js");
var u = require("./394629.js");