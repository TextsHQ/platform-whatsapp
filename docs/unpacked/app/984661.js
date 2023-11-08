Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignedPreKeyRecordStructureSpec = exports.SessionStructureSpec = exports.SessionStructure$PendingPreKeySpec = exports.SessionStructure$PendingKeyExchangeSpec = exports.SessionStructure$ChainSpec = exports.SessionStructure$Chain$MessageKeySpec = exports.SessionStructure$Chain$ChainKeySpec = exports.SenderKeyStateStructureSpec = exports.SenderKeyStateStructure$SenderSigningKeySpec = exports.SenderKeyStateStructure$SenderMessageKeySpec = exports.SenderKeyStateStructure$SenderChainKeySpec = exports.SenderKeyRecordStructureSpec = exports.RecordStructureSpec = exports.PreKeyRecordStructureSpec = exports.IdentityKeyPairStructureSpec = undefined;
var r = require("./751206.js");
const i = {};
exports.SessionStructureSpec = i;
const a = {};
exports.SessionStructure$PendingPreKeySpec = a;
const o = {};
exports.SessionStructure$PendingKeyExchangeSpec = o;
const s = {};
exports.SessionStructure$ChainSpec = s;
const l = {};
exports.SessionStructure$Chain$MessageKeySpec = l;
const u = {};
exports.SessionStructure$Chain$ChainKeySpec = u;
const c = {};
exports.RecordStructureSpec = c;
const d = {};
exports.PreKeyRecordStructureSpec = d;
const p = {};
exports.SignedPreKeyRecordStructureSpec = p;
const f = {};
exports.IdentityKeyPairStructureSpec = f;
const _ = {};
exports.SenderKeyStateStructureSpec = _;
const g = {};
exports.SenderKeyStateStructure$SenderSigningKeySpec = g;
const m = {};
exports.SenderKeyStateStructure$SenderMessageKeySpec = m;
const h = {};
exports.SenderKeyStateStructure$SenderChainKeySpec = h;
const y = {};
exports.SenderKeyRecordStructureSpec = y;
i.internalSpec = {
  sessionVersion: [1, r.TYPES.UINT32],
  localIdentityPublic: [2, r.TYPES.BYTES],
  remoteIdentityPublic: [3, r.TYPES.BYTES],
  rootKey: [4, r.TYPES.BYTES],
  previousCounter: [5, r.TYPES.UINT32],
  senderChain: [6, r.TYPES.MESSAGE, s],
  receiverChains: [7, r.FLAGS.REPEATED | r.TYPES.MESSAGE, s],
  pendingKeyExchange: [8, r.TYPES.MESSAGE, o],
  pendingPreKey: [9, r.TYPES.MESSAGE, a],
  remoteRegistrationId: [10, r.TYPES.UINT32],
  localRegistrationId: [11, r.TYPES.UINT32],
  needsRefresh: [12, r.TYPES.BOOL],
  aliceBaseKey: [13, r.TYPES.BYTES]
};
a.internalSpec = {
  preKeyId: [1, r.TYPES.UINT32],
  signedPreKeyId: [3, r.TYPES.INT32],
  baseKey: [2, r.TYPES.BYTES]
};
o.internalSpec = {
  sequence: [1, r.TYPES.UINT32],
  localBaseKey: [2, r.TYPES.BYTES],
  localBaseKeyPrivate: [3, r.TYPES.BYTES],
  localRatchetKey: [4, r.TYPES.BYTES],
  localRatchetKeyPrivate: [5, r.TYPES.BYTES],
  localIdentityKey: [7, r.TYPES.BYTES],
  localIdentityKeyPrivate: [8, r.TYPES.BYTES]
};
s.internalSpec = {
  senderRatchetKey: [1, r.TYPES.BYTES],
  senderRatchetKeyPrivate: [2, r.TYPES.BYTES],
  chainKey: [3, r.TYPES.MESSAGE, u],
  messageKeys: [4, r.FLAGS.REPEATED | r.TYPES.MESSAGE, l]
};
l.internalSpec = {
  index: [1, r.TYPES.UINT32],
  cipherKey: [2, r.TYPES.BYTES],
  macKey: [3, r.TYPES.BYTES],
  iv: [4, r.TYPES.BYTES]
};
u.internalSpec = {
  index: [1, r.TYPES.UINT32],
  key: [2, r.TYPES.BYTES]
};
c.internalSpec = {
  currentSession: [1, r.TYPES.MESSAGE, i],
  previousSessions: [2, r.FLAGS.REPEATED | r.TYPES.MESSAGE, i]
};
d.internalSpec = {
  id: [1, r.TYPES.UINT32],
  publicKey: [2, r.TYPES.BYTES],
  privateKey: [3, r.TYPES.BYTES]
};
p.internalSpec = {
  id: [1, r.TYPES.UINT32],
  publicKey: [2, r.TYPES.BYTES],
  privateKey: [3, r.TYPES.BYTES],
  signature: [4, r.TYPES.BYTES],
  timestamp: [5, r.TYPES.FIXED64]
};
f.internalSpec = {
  publicKey: [1, r.TYPES.BYTES],
  privateKey: [2, r.TYPES.BYTES]
};
_.internalSpec = {
  senderKeyId: [1, r.TYPES.UINT32],
  senderChainKey: [2, r.TYPES.MESSAGE, h],
  senderSigningKey: [3, r.TYPES.MESSAGE, g],
  senderMessageKeys: [4, r.FLAGS.REPEATED | r.TYPES.MESSAGE, m]
};
g.internalSpec = {
  public: [1, r.TYPES.BYTES],
  private: [2, r.TYPES.BYTES]
};
m.internalSpec = {
  iteration: [1, r.TYPES.UINT32],
  seed: [2, r.TYPES.BYTES]
};
h.internalSpec = {
  iteration: [1, r.TYPES.UINT32],
  seed: [2, r.TYPES.BYTES]
};
y.internalSpec = {
  senderKeyStates: [1, r.FLAGS.REPEATED | r.TYPES.MESSAGE, _]
};