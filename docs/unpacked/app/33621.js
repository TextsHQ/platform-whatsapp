var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toLibsignalSession = f;
exports.toLibsignalSessionPrevSessions = function (e) {
  const t = [f(e)];
  for (let n = 0; n < e.prevSessions.length; n++) {
    const r = f((0, o.parseSession)(e.prevSessions[n]));
    r.indexInfo.closed = 1;
    if (e.prevSessions[n].aliceBaseKey) {
      t.push(r);
    }
  }
  return (0, s.makeLibsignalSession)(t);
};
var i = require("./459617.js");
var a = require("./881841.js");
var o = require("./122470.js");
var s = require("./116717.js");
var l = r(require("./556869.js"));
const u = 1;
const c = 2;
const d = 1;
const p = 2;
function f(e) {
  try {
    const t = e.remote.regId;
    const n = e.recvChains.length - 1;
    const r = e.initialExchangeInfo;
    const o = n !== -1 ? (0, s.makeLibsignalSessionCurrentRatchet)((0, a.uint8ArrayToBuffer)(e.rootKey), (0, a.uint8ArrayToBuffer)(e.sendChain.ratchetKey.serializedPubKey), (0, a.uint8ArrayToBuffer)(e.sendChain.ratchetKey.privateKey), (0, a.uint8ArrayToBuffer)(e.recvChains[n].ratchetPubKey), e.prevSendChainHighestIndex) : (0, s.makeLibsignalSessionCurrentRatchet)((0, a.uint8ArrayToBuffer)(e.rootKey), (0, a.uint8ArrayToBuffer)(e.sendChain.ratchetKey.serializedPubKey), (0, a.uint8ArrayToBuffer)(e.sendChain.ratchetKey.privateKey), null, e.prevSendChainHighestIndex);
    const l = e.aliceBaseKey ? (0, s.makeLibsignalSessionIndexInfo)((0, a.uint8ArrayToBuffer)(e.aliceBaseKey), r != null ? d : p, (0, a.uint8ArrayToBuffer)(e.remote.pubKey), -1) : (0, s.makeLibsignalSessionIndexInfo)(null, r != null ? d : p, (0, a.uint8ArrayToBuffer)(e.remote.pubKey), -1);
    let f;
    if (r) {
      const e = r.remoteOneTimeId;
      f = e != null ? (0, s.makeLibsignalSessionPendingPreKey)((0, a.uint8ArrayToBuffer)(r.localOneTimePubKey), r.remoteSignedId, e) : (0, s.makeLibsignalSessionPendingPreKey)((0, a.uint8ArrayToBuffer)(r.localOneTimePubKey), r.remoteSignedId, null);
    }
    const _ = (0, s.makeLibsignalSessionChainKey)(e.sendChain.nextMsgIndex - 1, (0, a.uint8ArrayToBuffer)(e.sendChain.chainKey));
    const g = (0, s.makeLibsignalSessionSendChain)(_, [], u);
    let m;
    let h;
    if (n !== -1) {
      const t = (0, s.makeLibsignalSessionChainKey)(e.recvChains[n].nextMsgIndex - 1, (0, a.uint8ArrayToBuffer)(e.recvChains[n].chainKey));
      m = (0, s.makeLibsignalSessionRecvChains)(t, [], c);
      h = (0, i.arrayBufferToString)((0, a.uint8ArrayToBuffer)(e.recvChains[n].ratchetPubKey));
    }
    const y = [];
    const E = (0, i.arrayBufferToString)(o.ephemeralKeyPair.pubKey);
    if (h != null) {
      return (0, s.makeLibsignalSessionState)(t, o, l, y, E, g, h, m, f);
    } else {
      return (0, s.makeLibsignalSessionState)(t, o, l, y, E, g, null, m, f);
    }
  } catch (e) {
    throw (0, l.default)(e);
  }
}