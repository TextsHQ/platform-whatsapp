Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./229079.js");
var i = require("./256764.js");
var a = require("./347197.js");
var o = require("./787685.js");
class s {
  static validateSnapshotProtobuf(e, t) {
    const {
      version: n,
      records: a,
      mac: l,
      keyId: u
    } = t;
    const c = n == null ? undefined : n.version;
    if (!n || c == null) {
      (0, o.reportSyncdFatalError)(o.SyncdFatalErrorType.MISSING_SNAPSHOT_VERSION, e);
      throw new i.SyncdFatalError("missing snapshot version");
    }
    const d = a.map(t => s.validateRecordProtobuf(e, t));
    if (!l) {
      (0, o.reportSyncdFatalError)(o.SyncdFatalErrorType.MISSING_SNAPSHOT_MAC, e);
      throw new i.SyncdFatalError("missing snapshot mac");
    }
    const p = s.validateKeyIdProtobuf(e, u, o.SyncdFatalErrorType.MISSING_SNAPSHOT_KEY_ID);
    return {
      version: {
        version: (0, r.numberOrThrowIfTooLarge)(c)
      },
      records: d,
      mac: l,
      keyId: p
    };
  }
  static validatePatchProtobuf(e, t) {
    const {
      version: n,
      mutations: a,
      externalMutations: l,
      snapshotMac: u,
      patchMac: c,
      keyId: d,
      exitCode: p,
      deviceIndex: f
    } = t;
    const _ = n == null ? undefined : n.version;
    if (!n || _ == null) {
      (0, o.reportSyncdFatalError)(o.SyncdFatalErrorType.MISSING_PATCH_VERSION, e);
      throw new i.SyncdFatalError("missing patch version");
    }
    if (a && a.length > 0 && l) {
      (0, o.reportSyncdFatalError)(o.SyncdFatalErrorType.PATCH_WITH_BOTH_INLINE_AND_EXTERNAL_MUTATIONS, e);
      throw new i.SyncdFatalError("patch with both inline and external mutations");
    }
    if (!u) {
      (0, o.reportSyncdFatalError)(o.SyncdFatalErrorType.MISSING_PATCH_SNAPSHOT_MAC, e);
      throw new i.SyncdFatalError("missing patch snapshot mac");
    }
    if (!c) {
      (0, o.reportSyncdFatalError)(o.SyncdFatalErrorType.MISSING_PATCH_MAC, e);
      throw new i.SyncdFatalError("missing patch mac");
    }
    const g = s.validateKeyIdProtobuf(e, d, o.SyncdFatalErrorType.MISSING_PATCH_KEY_ID);
    if (l) {
      const t = s.validateExternalBlobReference(e, l);
      return {
        version: {
          version: (0, r.numberOrThrowIfTooLarge)(_)
        },
        mutations: undefined,
        externalMutations: t,
        snapshotMac: u,
        patchMac: c,
        keyId: g,
        deviceIndex: f
      };
    }
    const m = a.map(t => s.validateMutationProtobuf(e, t));
    return {
      version: {
        version: (0, r.numberOrThrowIfTooLarge)(_)
      },
      mutations: m,
      externalMutations: undefined,
      exitCode: p,
      snapshotMac: u,
      patchMac: c,
      keyId: g,
      deviceIndex: f
    };
  }
  static validateExternalBlobReference(e, t) {
    const {
      mediaKey: n,
      directPath: r,
      handle: a,
      fileSizeBytes: s,
      fileSha256: l,
      fileEncSha256: u
    } = t;
    if (!n) {
      (0, o.reportSyncdFatalError)(o.SyncdFatalErrorType.MISSING_EXTERNAL_BLOB_REFERENCE_MEDIA_KEY, e);
      throw new i.SyncdFatalError("missing external blob reference media key");
    }
    if (r == null) {
      (0, o.reportSyncdFatalError)(o.SyncdFatalErrorType.MISSING_EXTERNAL_BLOB_REFERENCE_DIRECT_PATH, e);
      throw new i.SyncdFatalError("missing external blob reference direct path");
    }
    if (!l) {
      (0, o.reportSyncdFatalError)(o.SyncdFatalErrorType.MISSING_EXTERNAL_BLOB_REFERENCE_FILE_SHA256, e);
      throw new i.SyncdFatalError("missing external blob reference file SHA256");
    }
    if (!u) {
      (0, o.reportSyncdFatalError)(o.SyncdFatalErrorType.MISSING_EXTERNAL_BLOB_REFERENCE_FILE_ENC_SHA256, e);
      throw new i.SyncdFatalError("missing external blob reference file enc SHA256");
    }
    return {
      mediaKey: n,
      directPath: r,
      handle: a,
      fileSizeBytes: s,
      fileSha256: l,
      fileEncSha256: u
    };
  }
  static validateMutationProtobuf(e, t) {
    const {
      operation: n,
      record: r
    } = t;
    if (n == null) {
      (0, o.reportSyncdFatalError)(o.SyncdFatalErrorType.MISSING_MUTATION_OPERATION, e);
      throw new i.SyncdFatalError("missing mutation operation");
    }
    if (!r) {
      (0, o.reportSyncdFatalError)(o.SyncdFatalErrorType.MISSING_MUTATION_RECORD, e);
      throw new i.SyncdFatalError("missing mutation record");
    }
    return {
      operation: n,
      record: s.validateRecordProtobuf(e, r)
    };
  }
  static validateRecordProtobuf(e, t) {
    const {
      index: n,
      value: r,
      keyId: a
    } = t;
    const l = n == null ? undefined : n.blob;
    const u = r == null ? undefined : r.blob;
    if (!n || !l) {
      (0, o.reportSyncdFatalError)(o.SyncdFatalErrorType.MISSING_MUTATION_INDEX, e);
      throw new i.SyncdFatalError("missing mutation index");
    }
    if (!r || !u) {
      (0, o.reportSyncdFatalError)(o.SyncdFatalErrorType.MISSING_MUTATION_VALUE, e);
      throw new i.SyncdFatalError("missing mutation value");
    }
    return {
      index: {
        blob: l
      },
      value: {
        blob: u
      },
      keyId: s.validateKeyIdProtobuf(e, a, o.SyncdFatalErrorType.MISSING_MUTATION_KEY_ID)
    };
  }
  static validateKeyIdProtobuf(e, t, n) {
    const r = t == null ? undefined : t.id;
    if (!t || !r) {
      (0, o.reportSyncdFatalError)(n, e);
      throw new i.SyncdFatalError("missing mutation key id");
    }
    return {
      id: (0, a.toSyncKeyId)(r)
    };
  }
}
exports.default = s;