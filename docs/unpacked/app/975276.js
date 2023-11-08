var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeWamStorage = function () {
  (0, s.deinitializeWAM)();
  (0, o.closeChannelManager)();
  c = null;
  u = null;
};
exports.getFinishedStreamBuffers = function (e) {
  return d("getFinishedStreamBuffers").getBuffers().then(t => (0, l.getFinishedBuffers)(e, t));
};
exports.initializeWAMSink = function (e, t, n, r) {
  const a = d("initializeWAMSink");
  const c = (0, o.getChannelManager)();
  if (c.getChannelInitialized(t)) {
    return Promise.resolve();
  }
  c.setChannelInitialized(t);
  const p = a.getStreamId(e);
  const f = {
    putBuffer(e, r, i, o) {
      if (c.isSinkBusy(t)) {
        __LOG__(3)`WamStorage: Sink flush did not happen within timeout, buffer is not saved`;
        return Promise.resolve();
      }
      c.setSinkBusy(t, true);
      const {
        bufferKey: s,
        meta: u,
        bufferRow: d
      } = (0, l.asBufferEntry)(e, t, p, r, i);
      return a.saveBuffer(u, d, o).then(() => {
        const t = [e.streamId, e.sequenceNumber];
        __LOG__(2)`WamStorage: Successfully put buffer ${t} to sink`;
        if (i) {
          n();
          __LOG__(2)`WamStorage: Buffer ${s} is scheduled for send`;
        }
      }).finally(() => {
        c.setSinkBusy(t, false);
      });
    }
  };
  if (u == null) {
    u = a.finishBuffer(p);
  }
  return u.then(() => {
    if (a.getStartingSequenceNumbers) {
      a.getStartingSequenceRow;
      return a.getStartingSequenceNumbers(t, p);
    }
    a.getStartingSequenceRow;
    if (r == null ? undefined : r.multipleSequences) {
      throw (0, i.default)("getStartingSequenceRow must not used when enabling support for multiple sequences");
    }
    return a.getStartingSequenceRow(p).then(e => {
      const t = (0, l.getSequenceNumber)(e);
      const n = new Map();
      n.set("regular", t);
      return n;
    });
  }).then(e => {
    (0, s.initializeWAM)(p, e, t, f, r);
    if (t === "private" && a.updatePrivateStatsIds) {
      a.updatePrivateStatsIds().then(s.updatePrivateStatsIds);
    }
  });
};
exports.nukeMetrics = function () {
  return d("nukeMetrics").nukeMetrics();
};
exports.privateStatsKillSwitchGetBlockedToken = function () {
  const e = d("privateStatsKillSwitchGetBlockedToken");
  if (!e.privateStatsKillSwitchGetBlockedToken) {
    throw (0, i.default)("privateStatsKillSwitchGetBlockedToken not implemented for WAM DB");
  }
  return e.privateStatsKillSwitchGetBlockedToken();
};
exports.privateStatsKillSwitchSet = function (e) {
  const t = d("privateStatsKillSwitchSet");
  if (!t.privateStatsKillSwitchSet) {
    throw (0, i.default)("privateStatsKillSwitchSet not implemented for WAM DB");
  }
  return t.privateStatsKillSwitchSet(e);
};
exports.redeemPrivateStatsToken = function () {
  const e = d("getPrivateStatsToken");
  if (!e.redeemPrivateStatsToken) {
    throw (0, i.default)("redeemPrivateStatsToken not implemented for WAM DB");
  }
  return e.redeemPrivateStatsToken(f);
};
exports.removeBufferByKey = function (e) {
  return d("removeBufferByKey").removeBufferByKey(e);
};
exports.savePrivateStatsToken = function (e) {
  const t = d("savePrivateStatsToken");
  if (!t.savePrivateStatsToken) {
    throw (0, i.default)("savePrivateStatsToken not implemented for WAM DB");
  }
  return t.savePrivateStatsToken(e);
};
exports.startWamStorage = function (e) {
  if (c == null) {
    c = e;
  } else {
    __LOG__(3, undefined, undefined, true)`startWamStorage: called again`;
    SEND_LOGS("startWamStorage");
  }
};
var i = r(require("./415227.js"));
var a = require("./632157.js");
var o = require("./273146.js");
var s = require("./536389.js");
var l = require("./463818.js");
let u = null;
let c = null;
function d(e) {
  if (c) {
    return c;
  }
  throw (0, i.default)(`WamStorage::${e} called before startWamStorage`);
}
const p = a.DAY_SECONDS;
const f = (e, t) => {
  const n = {
    maxRedeemCount: (t == null ? undefined : t.maxRedeemCount) != null && t.maxRedeemCount !== 0 ? t.maxRedeemCount : 64,
    maxExpirySeconds: (t == null ? undefined : t.maxExpirySeconds) != null && t.maxExpirySeconds !== 0 ? t.maxExpirySeconds : p
  };
  if ((0, a.happenedWithin)(e.creationTs, n.maxExpirySeconds)) {
    return !(e.redeemCount >= n.maxRedeemCount) || (__LOG__(2)`The private stats token was redeemed maximum number of time. The client shall re-issue a new one`, false);
  } else {
    __LOG__(2)`The private stats token expired. The client shall re-issue a new one`;
    return false;
  }
};