Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SyncdVersionSpec = exports.SyncdValueSpec = exports.SyncdSnapshotSpec = exports.SyncdRecordSpec = exports.SyncdPatchSpec = exports.SyncdMutationsSpec = exports.SyncdMutationSpec = exports.SyncdMutation$SyncdOperation = exports.SyncdIndexSpec = exports.KeyIdSpec = exports.ExternalBlobReferenceSpec = exports.ExitCodeSpec = undefined;
var r = require("./751206.js");
const i = require("../vendor/654302.js")({
  SET: 0,
  REMOVE: 1
});
exports.SyncdMutation$SyncdOperation = i;
const a = {};
exports.SyncdVersionSpec = a;
const o = {};
exports.ExitCodeSpec = o;
const s = {};
exports.SyncdIndexSpec = s;
const l = {};
exports.SyncdValueSpec = l;
const u = {};
exports.KeyIdSpec = u;
const c = {};
exports.SyncdRecordSpec = c;
const d = {};
exports.ExternalBlobReferenceSpec = d;
const p = {};
exports.SyncdSnapshotSpec = p;
const f = {};
exports.SyncdMutationsSpec = f;
const _ = {};
exports.SyncdMutationSpec = _;
const g = {};
exports.SyncdPatchSpec = g;
a.internalSpec = {
  version: [1, r.TYPES.UINT64]
};
o.internalSpec = {
  code: [1, r.TYPES.UINT64],
  text: [2, r.TYPES.STRING]
};
s.internalSpec = {
  blob: [1, r.TYPES.BYTES]
};
l.internalSpec = {
  blob: [1, r.TYPES.BYTES]
};
u.internalSpec = {
  id: [1, r.TYPES.BYTES]
};
c.internalSpec = {
  index: [1, r.TYPES.MESSAGE, s],
  value: [2, r.TYPES.MESSAGE, l],
  keyId: [3, r.TYPES.MESSAGE, u]
};
d.internalSpec = {
  mediaKey: [1, r.TYPES.BYTES],
  directPath: [2, r.TYPES.STRING],
  handle: [3, r.TYPES.STRING],
  fileSizeBytes: [4, r.TYPES.UINT64],
  fileSha256: [5, r.TYPES.BYTES],
  fileEncSha256: [6, r.TYPES.BYTES]
};
p.internalSpec = {
  version: [1, r.TYPES.MESSAGE, a],
  records: [2, r.FLAGS.REPEATED | r.TYPES.MESSAGE, c],
  mac: [3, r.TYPES.BYTES],
  keyId: [4, r.TYPES.MESSAGE, u]
};
f.internalSpec = {
  mutations: [1, r.FLAGS.REPEATED | r.TYPES.MESSAGE, _]
};
_.internalSpec = {
  operation: [1, r.TYPES.ENUM, i],
  record: [2, r.TYPES.MESSAGE, c]
};
g.internalSpec = {
  version: [1, r.TYPES.MESSAGE, a],
  mutations: [2, r.FLAGS.REPEATED | r.TYPES.MESSAGE, _],
  externalMutations: [3, r.TYPES.MESSAGE, d],
  snapshotMac: [4, r.TYPES.BYTES],
  patchMac: [5, r.TYPES.BYTES],
  keyId: [6, r.TYPES.MESSAGE, u],
  exitCode: [7, r.TYPES.MESSAGE, o],
  deviceIndex: [8, r.TYPES.UINT32]
};