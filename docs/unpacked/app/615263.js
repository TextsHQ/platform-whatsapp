var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HistorySyncScheduleSource = undefined;
exports.checkSelfHistorySyncIdentity = function () {
  return I.apply(this, arguments);
};
exports.checkThrottle = function () {
  return R.apply(this, arguments);
};
exports.commitHistoryDataAppliedMetric = function (e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
  const i = (0, l.unixTimeMs)();
  e.mdTimestamp = i;
  e.mdBootstrapStepDuration = i - t;
  e.mdBootstrapStepResult = n ? T.MD_BOOTSTRAP_STEP_RESULT.SUCCESS : T.MD_BOOTSTRAP_STEP_RESULT.FAILURE;
  e.commitAndWaitForFlush(r);
};
exports.commitHistoryDownloadedMetric = function (e, t, n, r) {
  e.mdTimestamp = r;
  e.mdBootstrapStepDuration = r - t;
  e.mdBootstrapStepResult = n ? T.MD_BOOTSTRAP_STEP_RESULT.SUCCESS : T.MD_BOOTSTRAP_STEP_RESULT.FAILURE;
  e.commit();
};
exports.commitHistoryStartDownloadingMetric = function (e, t, n) {
  e.mdTimestamp = n;
  e.mdBootstrapStepDuration = n - t;
  e.commit();
};
exports.convertEndofHistoryTransferTypeFromProtoToModelPropType = function (e) {
  switch (e) {
    case E.Conversation$EndOfHistoryTransferType.COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY:
      return u.ConversationEndOfHistoryTransferModelPropType.COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY;
    case E.Conversation$EndOfHistoryTransferType.COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY:
      return u.ConversationEndOfHistoryTransferModelPropType.COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY;
    case E.Conversation$EndOfHistoryTransferType.COMPLETE_ON_DEMAND_SYNC_BUT_MORE_MSG_REMAIN_ON_PRIMARY:
      return u.ConversationEndOfHistoryTransferModelPropType.COMPLETE_ON_DEMAND_SYNC_BUT_MORE_MSG_REMAIN_ON_PRIMARY;
  }
};
exports.getHistorySyncBasicChunkInfoString = P;
exports.getHistorySyncLogDetailsString = C;
exports.getHistorySyncProgress = function () {
  return N.apply(this, arguments);
};
exports.handleChatThreadLoggingMetadata = function (e) {
  let t = Promise.resolve();
  let n = Promise.resolve();
  if (e.threadIdUserSecret != null) {
    t = (0, c.setThreadIdUserSecret)(e.threadIdUserSecret);
  } else {
    __LOG__(4, undefined, new Error(), true)`[history sync] handleChatThreadLoggingMetadata: missing threadIdUserSecret`;
    SEND_LOGS("ctl-missing-secret-history-sync");
  }
  if (e.threadDsTimeframeOffset != null) {
    n = (0, c.setThreadDsTimeframeOffset)(e.threadDsTimeframeOffset);
  } else {
    __LOG__(4, undefined, new Error(), true)`[history sync] handleChatThreadLoggingMetadata: missing threadDsTimeframeOffset`;
    SEND_LOGS("ctl-missing-offset-history-sync");
  }
  return Promise.all([t, n]);
};
exports.isInvalidMsg = O;
exports.maybeGetInlinePayload = function (e) {
  if ([E.HistorySync$HistorySyncType.INITIAL_BOOTSTRAP, E.HistorySync$HistorySyncType.INITIAL_STATUS_V3, E.HistorySync$HistorySyncType.PUSH_NAME].includes(e.syncType) && e.initialHistBootstrapInlinePayload != null && (e == null ? undefined : e.initialHistBootstrapInlinePayload.byteLength) > 0) {
    return e.initialHistBootstrapInlinePayload;
  }
  return null;
};
exports.parseWebMsgInfoAndReturnNullOnFailure = function (e, t, n) {
  let r = null;
  try {
    if (n != null) {
      r = (0, y.parseWebMessageInfo)(n);
    }
  } catch (e) {
    __LOG__(4, undefined, new Error())`[history sync] parseWebMessageInfo failed with error ${e == null ? undefined : e.name} and stack ${e == null ? undefined : e.stack}`;
  }
  if (O(e, r)) {
    return;
  }
  return r;
};
exports.processPastParticipants = function () {
  return b.apply(this, arguments);
};
exports.saveGroupMetadataForLeftGroup = function (e, t) {
  if (!t.isGroup()) {
    return;
  }
  if (e.suspended != null || e.terminated != null || e.createdBy != null || e.createdAt != null || e.description != null || e.support != null || e.isParentGroup != null || e.isDefaultSubgroup != null || e.parentGroupId != null) {
    var n;
    const r = {
      id: t,
      subject: e.name,
      suspended: e.suspended,
      terminated: e.terminated,
      owner: e.createdBy != null ? (0, M.createWid)(e.createdBy) : undefined,
      creation: e.createdAt,
      desc: e.description,
      support: e.support,
      isParentGroup: e.isParentGroup,
      defaultSubgroup: e.isDefaultSubgroup,
      parentGroup: e.parentGroupId != null ? (0, M.createWid)(e.parentGroupId) : undefined
    };
    (0, p.persistGroupMetadata)(t, (0, i.default)((0, i.default)({}, r), {}, {
      id: r.id.toString(),
      owner: r.owner !== undefined ? r.owner.toString() : undefined,
      creation: r.creation !== undefined ? Number(r.creation) : undefined,
      parentGroup: r.parentGroup !== undefined ? String(r.parentGroup) : undefined
    }));
    const a = f.default.add(r, {
      merge: true
    })[0];
    const o = (n = e.participant) === null || n === undefined ? undefined : n.map(e => {
      const t = e.rank === E.GroupParticipant$Rank.SUPERADMIN;
      const n = e.rank === E.GroupParticipant$Rank.ADMIN;
      return new _.default({
        id: (0, M.createWid)(e.userJid),
        isAdmin: n || t,
        isSuperAdmin: t
      });
    });
    if (!(a == null)) {
      a.participants.add(o, {
        merge: true
      });
    }
    if (e.readOnly === true || o.length > 0) {
      (0, g.updateParticipantsJob)({
        group: t,
        participants: o.map(e => ({
          id: e.id,
          isAdmin: e.isAdmin,
          isSuperAdmin: e.isSuperAdmin
        })),
        skipDeviceSync: (0, h.isDeviceSyncManagerEnabled)() && e.readOnly
      }).catch(e => {
        __LOG__(3)`updateParticipantsJob: failed: ${e}`;
      });
    }
  }
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./229079.js");
var s = r(require("./670983.js"));
var l = require("./632157.js");
var u = require("./735618.js");
var c = require("./698867.js");
var d = require("./608916.js");
var p = require("./185212.js");
var f = r(require("./667845.js"));
var _ = r(require("./442690.js"));
var g = require("./660913.js");
var m = require("./687352.js");
var h = require("./790215.js");
var y = require("./75540.js");
var E = require("./60370.js");
var S = require("./76256.js");
var v = require("./157942.js");
var T = require("./355933.js");
var M = require("./669050.js");
const A = require("../vendor/76672.js").Mirrored(["NewRecentSyncNotification", "NewOnDemandSyncNotification", "LastProcessedNotification", "InitialSyncComplete", "BackendStart", "HistorySyncStatusCheck"]);
function b() {
  return (b = (0, a.default)(function* (e, t) {
    const r = e.pastParticipants.map(e => ({
      groupId: (0, s.default)(e.groupJid, "group.groupJid"),
      pastParticipants: e.pastParticipants.map(e => ({
        id: (0, M.createWid)((0, s.default)(e.userJid, "participant.userJid")),
        leaveReason: e.leaveReason === E.PastParticipant$LeaveReason.LEFT ? m.LeaveReason.Left : m.LeaveReason.Removed,
        leaveTs: (0, o.numberOrThrowIfTooLarge)((0, s.default)(e.leaveTs, "participant.leaveTs"))
      }))
    }));
    yield (0, d.addPastParticipants)(r);
    const {
      ChatCollection: i
    } = require("./351053.js");
    r.forEach(e => {
      const {
        groupMetadata: t
      } = i.gadd((0, M.createWid)(e.groupId));
      if (!(t == null)) {
        t.pastParticipants.add(e.pastParticipants, {
          merge: true
        });
      }
    });
    __LOG__(2)`[history sync] Past Participants completed, ${C(t)}`;
  })).apply(this, arguments);
}
function C(e) {
  var t;
  var n;
  var r;
  let i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  const o = (e.msgKey || "").split("_")[2];
  const s = P(e.syncType, e.chunkOrder, e.isReupload);
  const l = (t = (n = e.downloadOptions.filehash) === null || n === undefined ? undefined : n.slice(0, 10)) !== null && t !== undefined ? t : (r = e.filehash) === null || r === undefined ? undefined : r.slice(0, 10);
  return ` ${s}, id: ${o} ## msgCount: ${i}, ## chatCount: ${a}, ## downloadStr: ${l != null ? l : ""} `;
}
function P(e, t, n) {
  return `type_${e != null ? e : "none"}_order_${t != null ? t : "none"}_isReupload_${n || 0}`;
}
function O(e, t) {
  var n;
  if (t == null) {
    return false;
  }
  if (!(e.isUser() && !e.isLid())) {
    return false;
  }
  const r = (n = t.id) === null || n === undefined ? undefined : n.remote;
  return r != null && r.isLid();
}
function I() {
  return (I = (0, a.default)(function* (e, t) {
    const n = yield (0, S.getPersistSignalProtocolStore)().loadIdentityKey(e);
    if (n && n !== t) {
      __LOG__(4, undefined, new Error(), true, ["history-sync"])`[history sync] get changed self identity key from history sync,
existing length: ${n.length}, new length: ${t.length}`;
      SEND_LOGS("self-identity-change-from-history-sync", 1, "history-sync");
    }
  })).apply(this, arguments);
}
function R() {
  return (R = (0, a.default)(function* (e) {
    if (e) {
      yield new Promise(e => self.setTimeout(e, 1000));
    }
  })).apply(this, arguments);
}
function N() {
  return (N = (0, a.default)(function* (e) {
    var t;
    let n = e.progress;
    const r = yield (0, v.getChunkCountForEndOfRecentHistorySync)();
    if (e.syncType === E.HistorySync$HistorySyncType.FULL || e.syncType === E.HistorySync$HistorySyncType.RECENT && e.chunkOrder === r) {
      n = 100;
    }
    if ((t = n) !== null && t !== undefined) {
      return t;
    } else {
      return 0;
    }
  })).apply(this, arguments);
}
exports.HistorySyncScheduleSource = A;