Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SyncdDecryptMutationsType = exports.SyncdCriticalBootstrapStageType = undefined;
exports.convertSyncdCriticalBootstrapStageFromAnnotations = function (e) {
  var t;
  const n = e == null || (t = e.string) === null || t === undefined ? undefined : t.criticalBootstrapStage;
  if (n == null) {
    __LOG__(4, undefined, new Error())`syncd: missing bootstrap stage for critical bootstrap stage`;
    return null;
  }
  const r = s.cast(n);
  if (r == null) {
    __LOG__(4, undefined, new Error())`syncd: unknown bootstrap stage: ${n} for critical bootstrap stage`;
    return null;
  }
  return {
    type: r
  };
};
exports.convertSyncdDecryptMutationsMetricsFromAnnotations = function (e) {
  var t;
  var n;
  var r;
  var i;
  const a = e == null || (t = e.string) === null || t === undefined ? undefined : t.mutationType;
  const o = e == null || (n = e.int) === null || n === undefined ? undefined : n.count;
  const s = e == null || (r = e.int) === null || r === undefined ? undefined : r.totalAdditionalMessagesCount;
  const u = e == null || (i = e.int_array) === null || i === undefined ? undefined : i.messageRangeLengths;
  if (a == null) {
    __LOG__(4, undefined, new Error())`syncd: missing type for DecryptMutations`;
    return null;
  }
  if (o == null) {
    __LOG__(4, undefined, new Error())`syncd: missing count for DecryptMutations`;
    return null;
  }
  if (s == null) {
    __LOG__(4, undefined, new Error())`syncd: missing totalAdditionalMessagesCount for DecryptMutations`;
    return null;
  }
  if (u == null) {
    __LOG__(4, undefined, new Error())`syncd: missing decryptedMutationMessageRangeCountArray for DecryptMutations`;
    return null;
  }
  const c = l.cast(a);
  if (c == null) {
    __LOG__(4, undefined, new Error())`syncd: unknown SyncdDecryptMutationsType for DecryptMutations`;
    return null;
  }
  return {
    type: c,
    count: o,
    totalAdditionalMessagesCount: s,
    decryptedMutationMessageRangeCountArray: u
  };
};
exports.reportSyncdCriticalBootstrapStage = u;
exports.reportSyncdDecryptedMutations = function (e, t) {
  u(s.MUTATIONS_DECRYPTED);
  (0, i.startMetric)(r.PRE_METRIC.SYNCD_DECRYPT_MUTATIONS).endSuccess(function (e) {
    const {
      type: t,
      mutations: n
    } = e;
    let r;
    let i = 0;
    const s = [];
    n.forEach(e => {
      const {
        binarySyncData: t
      } = e;
      const n = (0, o.decodeProtobuf)(a.SyncActionDataSpec, t).value;
      if (n != null) {
        if (n.archiveChatAction) {
          r = n.archiveChatAction.messageRange;
        } else if (n.markChatAsReadAction) {
          r = n.markChatAsReadAction.messageRange;
        } else if (n.clearChatAction) {
          r = n.clearChatAction.messageRange;
        } else if (n.deleteChatAction) {
          r = n.deleteChatAction.messageRange;
        }
        if (r != null) {
          i += r.messages.length;
          s.push(r.messages.length);
        }
      }
    });
    return {
      string: {
        mutationType: t
      },
      int: {
        count: n.length,
        totalAdditionalMessagesCount: i
      },
      int_array: {
        messageRangeLengths: s
      }
    };
  }({
    type: e,
    mutations: t
  }));
};
var r = require("./489783.js");
var i = require("./947339.js");
var a = require("./527796.js");
var o = require("./394629.js");
const s = require("../vendor/654302.js").Mirrored(["ABOUT_TO_APPLY_MUTATIONS", "APPLIED_MUTATIONS", "MUTATIONS_DECRYPTED", "REQUEST_BUILT", "RESPONSE_RECEIVED", "RESPONSE_PARSED_VALID", "ENTERED_RETRY_MODE", "MISSING_KEYS_RECEIVED"]);
exports.SyncdCriticalBootstrapStageType = s;
const l = require("../vendor/654302.js").Mirrored(["PATCH_MUTATIONS", "SNAPSHOT_MUTATIONS"]);
function u(e) {
  (0, i.startMetric)(r.PRE_METRIC.SYNCD_CRITICAL_BOOTSTRAP_STAGE).endSuccess({
    string: {
      criticalBootstrapStage: {
        type: e
      }.type
    }
  });
}
exports.SyncdDecryptMutationsType = l;