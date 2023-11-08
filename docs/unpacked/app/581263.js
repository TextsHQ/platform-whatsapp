var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startBackend = function () {
  return be.apply(this, arguments);
};
exports.startWebComms = Ce;
var i = r(require("../vendor/348926.js"));
require("./417405.js");
require("./904704.js");
var a = require("./250281.js");
var o = require("./44276.js");
var s = require("./434517.js");
var l = require("./183660.js");
var u = require("./266485.js");
var c = require("./100898.js");
var d = require("./854718.js");
var p = require("./12643.js");
var f = require("./359987.js");
var _ = require("./366202.js");
var g = require("./452072.js");
var m = require("./72696.js");
var h = require("./391541.js");
var y = require("./980301.js");
require("./508247.js");
var E = require("./698867.js");
var S = require("./780549.js");
var v = r(require("./883891.js"));
var T = require("./642067.js");
var M = r(require("./762848.js"));
var A = require("./996588.js");
require("./403206.js");
var b = require("./31115.js");
var C = require("./659102.js");
var P = require("./775865.js");
var O = r(require("./555470.js"));
var I = require("./110567.js");
var R = r(require("./97359.js"));
var N = require("./724469.js");
var D = require("./615263.js");
var w = require("./926552.js");
var L = require("./422481.js");
var k = require("./201312.js");
var G = require("./827747.js");
var U = require("./658265.js");
var x = require("./486392.js");
var B = require("./65889.js");
var F = require("./383047.js");
var j = require("./332108.js");
var Y = require("./12562.js");
var K = require("./555823.js");
var W = require("./73225.js");
var V = require("./574411.js");
var H = require("./433541.js");
var $ = require("./359484.js");
var z = require("./552991.js");
var q = require("./588237.js");
var J = require("./628905.js");
r(require("./219368.js"));
var Q = require("./146254.js");
var X = require("./233137.js");
var Z = require("./875234.js");
var ee = require("./60287.js");
var te = require("./168442.js");
require("./691195.js");
require("./830627.js");
var ne = require("./937001.js");
var re = require("./326314.js");
var ie = require("./38878.js");
var ae = require("./731344.js");
var oe = require("./170428.js");
var se = r(require("./775410.js"));
var le = require("./416911.js");
var ue = require("./480313.js");
var ce = require("./142601.js");
var de = require("./702627.js");
var pe = require("./177733.js");
var fe = require("./87429.js");
var _e = require("./460148.js");
r(require("./79291.js"));
var ge = require("./757453.js");
var me = require("./409847.js");
var he = require("./94872.js");
var ye = r(require("./627162.js"));
var Ee = require("./459857.js");
var Se = require("./673168.js");
var ve = require("./130945.js");
var Te = require("./209983.js");
var Me = require("./198584.js");
require("./669050.js");
S.Cmd.once("offline_delivery_end", (0, i.default)(function* () {
  try {
    __LOG__(2)`[StartBackend]: start initial setup`;
    yield function () {
      return Ne.apply(this, arguments);
    }();
    __LOG__(2)`[StartBackend]: complete initial setup`;
  } catch (e) {
    __LOG__(2)`[StartBackend] initial setup failed:`;
  }
}));
S.Cmd.on("storage_initialization_error", (0, i.default)(function* () {
  if ((0, Se.isRegistered)() || (0, F.getPrevLogoutReasonCode)() !== j.LOGOUT_REASON_CODE.CLIENT_FATAL) {
    __LOG__(2)`storage initialization error, logging out`;
    yield ie.Socket.clearCredentialsAndStoredData(j.LogoutReason.ClientFatalError);
    (0, G.maybeLogToJestE2eJSConsole)("logging out due to storage initialization error");
    S.Cmd.logout();
  }
}));
S.Cmd.on("open_socket_stream", () => {
  if (S.Cmd.isOfflineDeliveryEnd) {
    if ((0, N.isNonBlockingResumeFromOpenTabEnabled)()) {
      Te.OfflineResumeReporter.resetEvent();
      Te.OfflineResumeReporter.logSocketConnectT();
    }
  } else {
    Te.OfflineResumeReporter.logSocketConnectT();
  }
});
const Ae = () => {
  v.default.fetchDataSharingSettingAndUpdateModel();
};
function be() {
  return (be = (0, i.default)(function* () {
    if (!re.waSignalStore.getRegistrationInfo()) {
      return void __LOG__(2)`startBackendRegistered: chatd user not registered`;
    }
    __LOG__(2)`[startBackend]: connected as ${(0, Ee.assertGetMe)()}`;
    try {
      yield (0, s.promiseTimeout)(Promise.all([(0, K.initialize)()]), 20000);
      yield (0, s.promiseTimeout)((0, H.initialize)(), 20000);
      (0, A.registerCrashlogUploadIsUserInExternalBetaFunction)(ge.getWhatsAppWebExternalBetaJoinedIdb);
    } catch (e) {
      S.Cmd.storageInitializationError();
    }
    Te.OfflineResumeReporter.setLastPushCompleteTimestamp();
    yield Ge();
    yield (0, X.loadPrimaryFeatures)();
    yield xe();
    if (!((0, l.isABPropsAfterFirstSync)() && !(yield (0, ge.getWhatsAppWebExternalBetaDirtyBitIdb)()))) {
      yield (0, u.syncABPropsTask)();
      yield (0, ge.setWhatsAppWebExternalBetaDirtyBitIdb)(false);
    }
    Oe();
    (0, c.setAbPropDependingGlobalWamAttributes)();
    yield me.userPrefsIdb.set(he.KEYS.LANG, ye.default.getLangPref() || "en");
    (0, pe.restoreTimeSpentSession)();
    yield (0, E.initChatThreadLogging)();
    yield (0, J.startWebPersistedJobManager)();
    (0, z.setupMainThreadResume)($.OfflineMessageHandler);
    yield (0, a.startHandlingRequests)();
    yield C.DbEncKeyStore.waitForFinalDbMsgEncKey();
    yield q.PassiveTaskManager.waitForPassiveTaskEnd();
    yield (0, ue.initialize)();
    if (!(yield se.default.isCriticalDataSynced())) {
      yield se.default.syncCriticalData();
    } else {
      __LOG__(2)`[bootstrap] need to sync critical data: false`;
    }
    (0, f.frontendFireAndForget)("handleDeferredMessages", {});
    if (ne.ServerProps.serverPropsVersion == null) {
      yield (0, _e.queryServerProps)();
    }
    yield Ie();
    fe.TosManager.run();
    (0, ee.startQPL)();
    yield (0, Q.initialize)((0, m.getBillingPremiumAccessConfig)());
    (0, oe.runSubscriptionsManager)();
    (0, ae.updatePushManager)();
    De();
    Le();
    (0, Y.mergeContactRecordsById)();
    Ae();
    (0, k.initializeBots)();
  })).apply(this, arguments);
}
function Ce() {
  return Pe.apply(this, arguments);
}
function Pe() {
  return (Pe = (0, i.default)(function* () {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      passive: false,
      pull: true
    };
    const t = (0, T.getCommsConfig)(e);
    yield (0, O.default)();
    yield (0, a.startComms)(M.default, t, e => Promise.resolve((0, o.inflate)(e)));
    yield (0, a.waitForConnection)();
  })).apply(this, arguments);
}
function Oe() {
  var e;
  const t = (e = (0, Ee.getMaybeMeUser)()) === null || e === undefined ? undefined : e.user;
  if (t != null) {
    ve.Global.set({
      psCountryCode: (0, x.getCountryShortcodeByPhone)(t)
    });
  }
}
function Ie() {
  return Re.apply(this, arguments);
}
function Re() {
  return (Re = (0, i.default)(function* () {
    (0, h.applyContactBusinessProps)();
    (0, L.restoreLabels)();
    (0, L.restoreQuickReplies)();
    (0, L.restoreLabelAssociations)();
    (0, L.restoreCarts)();
    (0, y.restorePremiumMessages)();
    (0, y.bindPremiumMessageListeners)();
    yield (0, L.restoreArchiveV2Settings)();
    yield (0, L.restoreAgents)().then(_.initializeAgentLog);
    (0, g.checkOrphanAssignments)();
    (0, L.restoreChatAssignments)();
    (0, b.restoreCTWASuggestions)(f.frontendFireAndForget);
    (0, U.loadQuickPromotions)();
  })).apply(this, arguments);
}
function Ne() {
  return (Ne = (0, i.default)(function* () {
    (0, p.flushLidPnMappingsToDb)();
    if ((0, ce.isHistorySyncNotificationHandlingV2Enabled)()) {
      __LOG__(2)`[history sync][continueProgressiveHistorySyncProcessingV2] start backend`;
      se.default.continueProgressiveHistorySyncProcessingV2(D.HistorySyncScheduleSource.BackendStart);
    } else {
      se.default.continueProgressiveHistorySyncProcessing();
    }
    __LOG__(2)`init worker: startIndexer from initialSetup`;
    I.ftsClient.startIndexer().catch(e => {
      __LOG__(3)`init worker: error while calling startIndexer from initialSetup: ${e}`;
    });
    (0, B.requireStatusV3Collection)().then(e => {
      e.sync().then(() => {
        (0, P.clearStatusForRemovedContact)();
      });
    });
    (0, de.registerTasks)();
    if ((0, Z.canSupportOfflineNotifications)()) {
      (0, Me.processWorkerWamData)(true);
    }
    yield (0, le.runSyncDirtyContactsJob)();
    (0, L.restoreRecentStickers)();
    (0, L.restoreFavoriteStickers)();
    (0, d.scheduleAdvDeviceInfoCheck)();
    (0, L.restoreCommunityActivity)();
    (0, w.updateHistorySyncProgressModel)();
    (0, L.restoreMediaUploadResult)();
    (0, L.restoreUnjoinedSubgroups)();
    if ((0, W.isNewsletterEnabled)()) {
      (0, V.restoreNewsletterMetadata)();
    }
  })).apply(this, arguments);
}
function De() {
  return we.apply(this, arguments);
}
function we() {
  return (we = (0, i.default)(function* () {})).apply(this, arguments);
}
function Le() {
  return ke.apply(this, arguments);
}
function ke() {
  return (ke = (0, i.default)(function* () {})).apply(this, arguments);
}
function Ge() {
  return Ue.apply(this, arguments);
}
function Ue() {
  return (Ue = (0, i.default)(function* () {
    if ((0, Z.canSupportOfflineNotifications)()) {
      if ((0, R.default)(require("./478885.js")).supported) {
        var e;
        var t;
        var r;
        const a = (0, R.default)(require("./537152.js"));
        const o = (0, R.default)(require("./647349.js"));
        if ((e = window.navigator.serviceWorker) === null || e === undefined ? undefined : e.controller) {
          yield a.request(window.navigator.serviceWorker.controller, o.STOP_COMMS).catch(e => {
            __LOG__(3)`[push-notification] Failed to request stopComms for service worker, error: ${e}`;
          });
        }
        if (!((t = window.navigator.serviceWorker) === null || t === undefined || (r = t.ready) === null || r === undefined)) {
          r.then(function () {
            var e = (0, i.default)(function* (e) {
              var t;
              var n;
              ((t = yield e == null || (n = e.getNotifications) === null || n === undefined ? undefined : n.call(e)) !== null && t !== undefined ? t : []).forEach(e => e.close());
            });
            return function () {
              return e.apply(this, arguments);
            };
          }()).catch(e => {
            __LOG__(3)`[push-notification] Failed to close existing notifications, error: ${e}`;
          });
        }
      }
    }
  })).apply(this, arguments);
}
function xe() {
  return Be.apply(this, arguments);
}
function Be() {
  return (Be = (0, i.default)(function* () {
    yield (0, te.registerPassiveTaskForStartUp)();
    yield Ce({
      pull: true
    });
  })).apply(this, arguments);
}