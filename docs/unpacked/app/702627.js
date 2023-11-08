var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerTasks = function () {
  (0, o.startScheduler)({
    scheduledTimeResolver: {
      get: e => (0, f.getTaskScheduledTime)(String(e)),
      set: (e, t) => (0, f.updateTaskScheduledTime)(String(e), t)
    }
  });
  x.filter(e => e !== U.LOG_DB_ROW_COUNTS || false).forEach(e => {
    const t = function (e) {
      switch (e) {
        case U.MONITOR_DB_STORAGE:
          return function () {
            var e = (0, i.default)(function* () {
              return o.DO_NOT_RESCHEDULE;
            });
            return function () {
              return e.apply(this, arguments);
            };
          }();
        case U.CLEAN_TC_TOKENS:
          return function () {
            var e = (0, i.default)(function* (e) {
              if (e) {
                __LOG__(2)`CleanTcToken skip first run`;
              } else {
                try {
                  yield (0, d.pruneExpiredTcTokens)();
                  yield (0, d.pruneExpiredOrphanTcTokens)();
                } catch (e) {
                  __LOG__(4, true, new Error())`Failed to delete the expired TcTokens with error: ${e}`;
                }
              }
              return s.DAY_SECONDS;
            });
            return function () {
              return e.apply(this, arguments);
            };
          }();
        case U.UPDATE_EXPIRED_TEXT_STATUS:
          return function () {
            var e = (0, i.default)(function* (e) {
              if (e) {
                __LOG__(2)`Update expired text status skip first run`;
              } else {
                try {
                  yield (0, _.updateExpiredTextStatusOfContact)();
                } catch (e) {
                  __LOG__(4, true, new Error())`Failed to update the expired text status of contacts with error: ${e}`;
                }
              }
              return s.DAY_SECONDS;
            });
            return function () {
              return e.apply(this, arguments);
            };
          }();
        case U.CLEAN_INVALID_LID_SIGNAL_SESSIONS:
          return function () {
            var e = (0, i.default)(function* (e) {
              if (e) {
                __LOG__(2)`CleanInvalidLidSignalSessions skip first run`;
              } else {
                try {
                  __LOG__(2)`CleanInvalidLidSignalSessions running`;
                  yield (0, E.cleanInvalidLidSignalSessions)();
                } catch (e) {
                  __LOG__(4, true, new Error())`Failed to delete the invalid LID signal sessions: ${e}`;
                }
              }
              return s.DAY_SECONDS;
            });
            return function () {
              return e.apply(this, arguments);
            };
          }();
        case U.LOG_DAILY_STATS:
          return () => (0, v.logDailyStatsJob)().catch(e => {
            __LOG__(4, true, new Error())`Failed to log daily stats: ${e}`;
          }).then(() => s.DAY_SECONDS);
        case U.LOG_DB_ROW_COUNTS:
          break;
        case U.ROTATE_KEY:
          return function () {
            var e = (0, i.default)(function* (e) {
              if (e) {
                __LOG__(2)`RotateKeyTask skip first run`;
              } else {
                yield (0, P.getJobManager)().waitUntilCompleted(C.jobSerializers.rotateKey());
              }
              return s.DAY_SECONDS * 27;
            });
            return function () {
              return e.apply(this, arguments);
            };
          }();
        case U.SYNC_AB_PROPS:
          return function () {
            var e = (0, i.default)(function* (e) {
              if (!e) {
                yield (0, c.syncABPropsTask)();
              }
              return (0, u.getRefresh)();
            });
            return function () {
              return e.apply(this, arguments);
            };
          }();
        case U.SYNC_CONTACTS:
          return function () {
            var e = (0, i.default)(function* (e) {
              if (!e) {
                try {
                  yield (0, A.getNonAddressBookContactsAndMarkAllContactsDirty)();
                } catch (e) {
                  __LOG__(4, true, new Error())`Failed to sync non-address book contacts with error: ${e}`;
                }
                try {
                  yield (0, h.contactSync)();
                } catch (e) {
                  __LOG__(4, true, new Error(), true, ["non-sad", "contact-sync"])`syncContacts: contact sync failed, error: ${e}`;
                  SEND_LOGS("syncContacts: contact sync failed", 1, "non-sad", "contact-sync");
                }
              }
              return (0, I.getContactSyncRefreshSeconds)();
            });
            return function () {
              return e.apply(this, arguments);
            };
          }();
        case U.REPORT_SYNCD_ACTION_STAT:
          return function () {
            var e = (0, i.default)(function* (e) {
              if (!e) {
                yield (0, N.reportSyncdStatsJob)();
              }
              return s.DAY_SECONDS;
            });
            return function () {
              return e.apply(this, arguments);
            };
          }();
        case U.LT_HASH_CHECK:
          return function () {
            var e = (0, i.default)(function* (e) {
              const t = (0, l.getABPropConfigValue)("lthash_check_hours");
              if (t === 0) {
                return s.HOUR_SECONDS * 24;
              } else {
                if (!e) {
                  yield (0, a.checkLtHash)();
                }
                return t * s.HOUR_SECONDS;
              }
            });
            return function () {
              return e.apply(this, arguments);
            };
          }();
        case U.REQUEST_ALL_SYNCD_MISSING_KEYS:
          return function () {
            var e = (0, i.default)(function* (e) {
              if (!e) {
                yield (0, D.requestAllSyncdMissingKeysJob)();
              }
              return s.HOUR_SECONDS * 6;
            });
            return function () {
              return e.apply(this, arguments);
            };
          }();
        case U.REPORT_SYNCD_KEY_STATS:
          return function () {
            var e = (0, i.default)(function* (e) {
              if (!e) {
                yield (0, R.reportSyncdKeyStatsJob)();
              }
              return s.DAY_SECONDS * 3;
            });
            return function () {
              return e.apply(this, arguments);
            };
          }();
        case U.SYNCD_SYNC_ALL_COLLECTIONS:
          return function () {
            var e = (0, i.default)(function* (e) {
              const t = (0, l.getABPropConfigValue)("syncd_periodic_sync_days");
              if (t === 0) {
                __LOG__(2)`syncd: syncdPeriodicSyncDays is 0, skipping sync`;
                return s.DAY_SECONDS;
              } else {
                if (!e) {
                  yield (0, w.syncdSyncAllCollectionsJob)();
                }
                return s.DAY_SECONDS * t;
              }
            });
            return function () {
              return e.apply(this, arguments);
            };
          }();
        case U.CLEAN_ORPHAN_REACTIONS:
          return (0, i.default)(function* () {
            try {
              yield (0, y.pruneExpiredOrphanReactions)();
            } catch (e) {
              __LOG__(4, true, new Error())`Failed to delete the expired orphan reactions with error: ${e}`;
            }
            return s.DAY_SECONDS;
          });
        case U.CLEAN_ORPHAN_ADD_ONS:
          return (0, i.default)(function* () {
            try {
              yield (0, S.purgeExpiredOrphanRecords)(30, 90);
            } catch (e) {
              __LOG__(4, true, new Error())`Failed to delete the expired orphan add-on messages with error: ${e}`;
            }
            return s.DAY_SECONDS;
          });
        case U.CLEAN_PAST_PARTICIPANTS:
          return (0, i.default)(function* () {
            try {
              yield (0, p.pruneExpiredPastParticipants)();
            } catch (e) {
              __LOG__(4, true, new Error())`Failed to delete the expired orphan reactions with error: ${e}`;
            }
            return s.DAY_SECONDS;
          });
        case U.CLEAN_EXPIRED_UTM:
          return () => (0, g.isUtmTrackingEnabled)() ? (0, m.cleanExpiredUtmJob)().catch(e => {
            __LOG__(4, true, new Error())`Failed to clean expired UTM: ${e}`;
          }).then(() => s.DAY_SECONDS) : Promise.resolve(o.DO_NOT_RESCHEDULE);
        case U.SEND_REGULAR_WAM_EVENTS:
        case U.SEND_PRIVATE_WAM_EVENTS:
          return (0, i.default)(function* () {
            return o.DO_NOT_RESCHEDULE;
          });
        case U.SEND_NON_MESSAGE_DATA_REQUEST:
          return (0, i.default)(function* () {
            yield (0, b.retryNonMessageDataRequestJob)();
            return s.HOUR_SECONDS * 23;
          });
        case U.DELETE_NEWSLETTER_PREVIEW_CHATS:
          return (0, i.default)(function* () {
            yield (0, M.deletePreviewNewsletters)();
            return s.HOUR_SECONDS * 4;
          });
        case U.REPORT_DB_VERSIONS:
          return (0, i.default)(function* () {
            yield (0, O.reportDbVersionsJob)();
            return s.DAY_SECONDS * 3;
          });
        case U.LOG_HISTORY_SYNC_STATUS_AFTER_PAIRING:
          return (0, i.default)(function* () {
            const e = (0, k.getPairingTimestamp)();
            if (e != null) {
              var t;
              const n = (t = yield (0, L.getHistorySyncStatusAfterPairingLoggingCount)()) !== null && t !== undefined ? t : 0;
              if (n >= 5) {
                __LOG__(2)`[history sync] do not schedule job for logging history sync status as we've logged for more than 4 times.`;
                return o.DO_NOT_RESCHEDULE;
              } else {
                yield (0, T.logHistorySyncStatusAfterPairingJob)(e, n);
                if (n === 0) {
                  return s.MINUTE_SECONDS * 5;
                } else {
                  return s.MINUTE_SECONDS * 10;
                }
              }
            }
            return 10;
          });
      }
    }(e);
    if (t != null) {
      (0, o.registerTask)(e, t);
    }
  });
};
var i = r(require("../vendor/348926.js"));
var a = require("./291774.js");
var o = require("./733847.js");
var s = require("./632157.js");
var l = require("./287461.js");
var u = require("./183660.js");
var c = require("./266485.js");
var d = require("./35234.js");
var p = require("./827467.js");
var f = require("./447465.js");
var _ = require("./732703.js");
var g = require("./72696.js");
var m = require("./490663.js");
var h = require("./748050.js");
require("./323321.js");
var y = require("./371682.js");
var E = require("./845320.js");
var S = require("./345011.js");
var v = require("./864726.js");
var T = require("./352233.js");
var M = require("./58709.js");
var A = require("./180019.js");
var b = require("./443261.js");
var C = require("./323829.js");
var P = require("./628905.js");
var O = require("./645752.js");
var I = require("./416911.js");
var R = require("./194036.js");
var N = require("./580890.js");
var D = require("./30937.js");
var w = require("./632084.js");
var L = require("./157942.js");
var k = require("./673168.js");
!function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = G(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
}(require("./173077.js"));
function G(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (G = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const U = require("../vendor/76672.js")({
  CLEAN_TC_TOKENS: "cleanTcTokens",
  CLEAN_INVALID_LID_SIGNAL_SESSIONS: "cleanInvalidLidSignalSessions",
  LOG_DAILY_STATS: "logDailyStats",
  LOG_DB_ROW_COUNTS: "logDbRowCounts",
  ROTATE_KEY: "rotateKey",
  SYNC_AB_PROPS: "syncAbProps",
  SYNC_CONTACTS: "syncContacts",
  MONITOR_DB_STORAGE: "monitorDbStorage",
  REPORT_SYNCD_ACTION_STAT: "reportSyncdActionStat",
  LT_HASH_CHECK: "ltHashCheck",
  REQUEST_ALL_SYNCD_MISSING_KEYS: "requestAllSyncdMissingKeys",
  REPORT_SYNCD_KEY_STATS: "reportSyncdKeyStats",
  SYNCD_SYNC_ALL_COLLECTIONS: "syncdSyncAllCollections",
  CLEAN_ORPHAN_REACTIONS: "cleanOrphanReactions",
  CLEAN_ORPHAN_ADD_ONS: "cleanOrphanAddOns",
  CLEAN_PAST_PARTICIPANTS: "cleanPastParticipants",
  CLEAN_EXPIRED_UTM: "cleanExpiredUtm",
  SEND_REGULAR_WAM_EVENTS: "sendCoreWamRegularMetrics",
  SEND_PRIVATE_WAM_EVENTS: "sendCoreWamPrivateMetrics",
  SEND_NON_MESSAGE_DATA_REQUEST: "sendNonMessageDataRequest",
  LOG_HISTORY_SYNC_STATUS_AFTER_PAIRING: "logHistorySyncStatusAfterPairing",
  DELETE_NEWSLETTER_PREVIEW_CHATS: "deleteNewsletterPreviewChats",
  REPORT_DB_VERSIONS: "reportDbVersions",
  UPDATE_EXPIRED_TEXT_STATUS: "updateExpiredTextStatus"
});
const x = [U.CLEAN_TC_TOKENS, U.CLEAN_INVALID_LID_SIGNAL_SESSIONS, U.LOG_DAILY_STATS, U.LOG_DB_ROW_COUNTS, U.ROTATE_KEY, U.SYNC_AB_PROPS, U.SYNC_CONTACTS, U.MONITOR_DB_STORAGE, U.REPORT_SYNCD_ACTION_STAT, U.LT_HASH_CHECK, U.REQUEST_ALL_SYNCD_MISSING_KEYS, U.REPORT_SYNCD_KEY_STATS, U.SYNCD_SYNC_ALL_COLLECTIONS, U.CLEAN_ORPHAN_REACTIONS, U.CLEAN_ORPHAN_ADD_ONS, U.CLEAN_EXPIRED_UTM, U.SEND_REGULAR_WAM_EVENTS, U.SEND_PRIVATE_WAM_EVENTS, U.SEND_NON_MESSAGE_DATA_REQUEST, U.LOG_HISTORY_SYNC_STATUS_AFTER_PAIRING, U.DELETE_NEWSLETTER_PREVIEW_CHATS, U.REPORT_DB_VERSIONS, U.UPDATE_EXPIRED_TEXT_STATUS];