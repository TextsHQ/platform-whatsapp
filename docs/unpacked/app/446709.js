var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = function () {
  return je.default.createElement(et, null);
};
exports.AppWrapper = undefined;
exports.closeSocketBeforeUnload = function () {
  (0, o.closeSocketAndPreventRetry)();
};
exports.forceReconnectSocketLoopIfUnloadFails = function () {
  (0, o.socketLoopIteration)();
};
exports.hasPending = function () {
  return He != null && He.hasPending();
};
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/751463.js"));
var o = require("./250281.js");
var s = require("./418987.js");
var l = r(require("./939067.js"));
var u = r(require("./670983.js"));
var c = require("./434517.js");
var d = require("./685639.js");
var p = r(require("./164325.js"));
var f = require("./251780.js");
var _ = require("./127714.js");
var g = r(require("./346297.js"));
r(require("./54099.js"));
var m = require("./135630.js");
var h = require("./789379.js");
var y = require("./72696.js");
var E = r(require("./542817.js"));
require("./508247.js");
var S = r(require("./659177.js"));
var v = require("./396574.js");
var T = r(require("./408401.js"));
var M = require("./63014.js");
var A = require("./780549.js");
var b = require("./429933.js");
var C = require("./103440.js");
var P = r(require("./140552.js"));
var O = require("./445729.js");
r(require("./846870.js"));
var I = require("./152730.js");
var R = require("./996588.js");
var N = require("./870263.js");
var D = require("./553568.js");
var w = r(require("./975338.js"));
var L = require("./413677.js");
var k = require("./707529.js");
var G = r(require("./845294.js"));
var U = require("./258105.js");
var x = require("./520538.js");
var B = r(require("./395767.js"));
var F = r(require("./97359.js"));
var j = require("./697371.js");
var Y = r(require("./591748.js"));
var K = require("./81644.js");
var W = r(require("./932325.js"));
var V = require("./65889.js");
var H = require("./584379.js");
var $ = require("./696430.js");
var z = r(require("./858867.js"));
var q = require("./591547.js");
var J = r(require("./89134.js"));
var Q = require("./332108.js");
var X = require("./97858.js");
var Z = require("./114850.js");
var ee = require("./733239.js");
var te = require("./61113.js");
var ne = r(require("./370247.js"));
var re = r(require("./5297.js"));
var ie = require("./860975.js");
var ae = require("./236715.js");
var oe = require("./497890.js");
var se = require("./94715.js");
var le = require("./72732.js");
var ue = require("./937001.js");
var ce = r(require("./897344.js"));
var de = r(require("./76892.js"));
var pe = require("./38878.js");
var fe = r(require("./527471.js"));
var _e = require("./894076.js");
var ge = require("./973981.js");
var me = We(require("./572946.js"));
var he = r(require("./614495.js"));
var ye = require("./667738.js");
var Ee = require("./91640.js");
var Se = r(require("./755210.js"));
var ve = require("./368170.js");
var Te = require("./238669.js");
var Me = require("./392632.js");
var Ae = require("./366320.js");
var be = require("./343343.js");
var Ce = r(require("./79291.js"));
var Pe = require("./757453.js");
var Oe = require("./65410.js");
var Ie = r(require("./627162.js"));
var Re = require("./459857.js");
var Ne = require("./499264.js");
var De = require("./905225.js");
var we = require("./209983.js");
var Le = require("./115383.js");
var ke = r(require("./584666.js"));
var Ge = require("./574819.js");
var Ue = r(require("./556869.js"));
var xe = require("../vendor/548360.js");
var Be = r(require("../vendor/441143.js"));
var Fe = r(require("../vendor/730381.js"));
var je = We(require("../vendor/667294.js"));
var Ye = require("./753233.js");
function Ke(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (Ke = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function We(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = Ke(t);
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
  return r;
}
require("./764597.js");
const Ve = require("../vendor/76672.js").Mirrored(["CLIENT_EXPIRED_DIALOG", "ANOTHER_SESSION", "UNSUPPORTED_TAKEOVER", "QR", "SYNCING", "OFFLINE", "PROXYBLOCK", "CONFLICT", "TOS_BLOCK", "SMB_TOS_BLOCK", "DEPRECATED_VERSION", "MAIN", "STARTUP", "TEMP_BAN", "LOGOUT", "SCREEN_LOCK", "SERVICE_UNAVAILABLE"]);
let He;
let $e = false;
let ze = false;
function qe(e) {
  if (e === "initialPanelMountTRecorded") {
    $e = true;
  }
  if (e === "initialPanelRenderTRecorded") {
    ze = true;
  }
  if ($e && ze) {
    (0, Le.onInitialRenderComplete)();
  }
}
const Je = (0, a.default)(() => {
  (0, Le.saveInitialPanelMountTime)(Date.now());
  qe("initialPanelMountTRecorded");
});
function Qe(e) {
  let {
    cmdAndData: t,
    isExternal: n,
    sessionId: r
  } = e;
  const {
    resultType: i,
    data: a
  } = t;
  __LOG__(2)`main:execApiCmd:${i}`;
  (0, Be.default)(He != null, "Attempted to exec API command before main was loaded");
  return i !== "ADVERTISE" && i !== "MANAGE_ADS" && He.execApiCmd({
    cmdData: t,
    isExternal: n,
    sessionId: r
  });
}
function Xe() {
  A.Cmd.logSocketSummary();
  __LOG__(2)`Focus at time of upload:`;
  try {
    Te.UIM.pprint(true);
  } catch (e) {
    __LOG__(3)`UIM Print Failed!`;
  }
  return {
    platform: O.Conn.platform,
    ref: O.Conn.ref
  };
}
class Ze extends je.Component {
  constructor() {
    super(...arguments);
    this.contextMenuRef = (0, je.createRef)();
    this.animate = true;
    this.state = {
      mode: ge.Stream.mode,
      updating: ge.Stream.clientExpired,
      hardExpired: ge.Stream.hardExpired,
      anotherSession: false,
      takingOver: false,
      isUnsupportedTakeover: false,
      apiCmd: undefined,
      locale: W.default.getLocale(),
      mainLoaded: false,
      theme: (0, ye.getTheme)(),
      systemThemeMode: (0, Pe.getSystemThemeMode)(),
      isKeyboardUser: false,
      initialLoadReady: false,
      startLogout: false,
      stayInSync: !pe.Socket.hasSynced,
      screenLocked: false,
      screenLockFeatureSupported: false
    };
    this._setIsKeyboardUser = e => {
      if (this.state.isKeyboardUser !== e) {
        this.setState({
          isKeyboardUser: e
        });
      }
    };
    this._handlers = {
      up: () => this._setIsKeyboardUser(true),
      down: () => this._setIsKeyboardUser(true),
      left: () => this._setIsKeyboardUser(true),
      right: () => this._setIsKeyboardUser(true),
      home: () => this._setIsKeyboardUser(true),
      end: () => this._setIsKeyboardUser(true),
      "command+up": () => this._setIsKeyboardUser(true),
      "command+down": () => this._setIsKeyboardUser(true),
      pageUp: () => this._setIsKeyboardUser(true),
      pageDown: () => this._setIsKeyboardUser(true),
      tab: () => this._setIsKeyboardUser(true),
      "shift+tab": () => this._setIsKeyboardUser(true),
      "shift+?": () => this._setIsKeyboardUser(true)
    };
    this._setWamSystemInfo = null;
    this._setModeScheduler = new d.ShiftTimer(e => {
      if (e !== this.state.mode) {
        this.setState({
          mode: e
        });
      }
    });
    this._handleStreamModeChange = () => {
      const e = ge.Stream.mode;
      if (this.state.mode !== ge.StreamMode.MAIN) {
        this._setModeScheduler.onOrBefore(0, e);
      } else {
        this._setModeScheduler.forceRunNow(e);
      }
    };
    this._handleClientExpired = () => {
      if (this.state.updating !== ge.Stream.clientExpired) {
        this.setState({
          updating: ge.Stream.clientExpired
        });
      }
    };
    this._handleHardExpired = () => {
      this.setState({
        hardExpired: ge.Stream.hardExpired
      });
    };
    this._handleMouseDown = e => {
      if (e.detail !== 0) {
        this._setIsKeyboardUser(false);
      }
      A.Cmd.windowMouseDown(e);
    };
    this._handleClick = e => {
      A.Cmd.windowClick(e);
    };
    this._handleWindowClick = e => {
      const t = e.target;
      if (!t) {
        return;
      }
      if (t.nodeName !== "A") {
        return;
      }
      const n = t.getAttribute("href");
      if (!n) {
        return;
      }
      if (!function (e) {
        let t = e;
        for (; t;) {
          var n;
          if (t instanceof HTMLElement && ((n = t.dataset) === null || n === undefined ? undefined : n.nohandle)) {
            return false;
          }
          t = t.parentElement;
        }
        return true;
      }(t)) {
        return;
      }
      const r = (0, _.parseAPICmd)(n);
      if (r.resultType === "INVALID" || r.resultType === "ADVERTISE" || r.resultType === "MANAGE_ADS") {
        return;
      }
      r.resultType;
      const i = this._getDeeplinkSessionId();
      if (this._canExecApiCmd() && Qe({
        cmdAndData: r,
        isExternal: true,
        sessionId: i
      })) {
        this._logDeepLinkClickMetric(r, i);
        e.preventDefault();
      }
    };
    this._logDeepLinkClickMetric = (e, t) => {
      if (e.resultType === f.APICmd.GROUP_INVITE) {
        new D.DeepLinkClickWamEvent({
          deepLinkHasPhoneNumber: false,
          deepLinkHasText: true
        }).commit();
      } else if (e.resultType === f.APICmd.MSG_SEND) {
        const n = e.data.phone;
        const r = e.data.text;
        new D.DeepLinkClickWamEvent({
          deepLinkHasPhoneNumber: !!n,
          deepLinkHasText: !!r,
          deepLinkSessionId: t
        }).commit();
      } else if (e.resultType === f.APICmd.CATALOG || e.resultType === f.APICmd.PRODUCT) {
        new D.DeepLinkClickWamEvent({
          deepLinkHasPhoneNumber: true,
          deepLinkHasText: false
        }).commit();
      }
    };
    this._handleSetTheme = e => {
      if (this.state.theme !== e) {
        for (const t of ye.THEME_ASSETS[e]) {
          h.AssetLoader.loadAsset(t, m.LOAD_PRIORITY.THEME_ASSET_LOAD, false);
        }
        if (ue.ServerProps.wallpapersV2) {
          const e = S.default.get("defaultPreference");
          if (e && De.DEFAULT_CHAT_WALLPAPER !== e.wallpaperColor) {
            const t = (0, De.toggleWallpaperColor)(e.wallpaperColor, this.state.theme);
            e.set("wallpaperColor", t);
          }
        }
        (0, ye.setTheme)(e);
        this.setState({
          theme: e
        });
      }
    };
    this._handleSetSystemThemeMode = e => {
      (0, Pe.setSystemThemeMode)(e);
      this.setState({
        systemThemeMode: e
      });
    };
    this._mdReloadPageOnTakeOver = () => {
      __LOG__(2)`[md takeover] refreshing page on takeover`;
      window.location.reload();
    };
    this._handleReadyForMainScreen = () => {
      __LOG__(2)`DebouncedLoadingScreen: Ready for main screen`;
      this.setState({
        stayInSync: false
      });
    };
    this._mdReloadPageWithUnsupportedTakeOver = () => {
      __LOG__(2)`[unsupported takeover] refreshing page with unsupported takeover`;
      window.location.reload();
    };
    this._getThemeContextValue = (0, l.default)(e => {
      let {
        theme: t,
        systemThemeMode: n
      } = e;
      return {
        theme: t,
        setTheme: this._handleSetTheme,
        systemThemeMode: n,
        setSystemThemeMode: this._handleSetSystemThemeMode
      };
    });
  }
  componentDidMount() {
    var e = this;
    (0, R.registerCrashlogUploadInformationalLoggingFunction)(Xe);
    (0, ie.registerPwaDisplayModeListener)();
    (0, ie.registerPwaInstallListener)();
    (0, ae.updatePwaManifestOnMacOS)();
    const t = (0, Ge.widToMyJids)((0, Re.getMe)());
    (0, j.setGlobals)({
      config: b.ConfigImpl,
      jidUtils: (0, s.createJidUtils)({
        platform: "whatsapp"
      }),
      myJids: t,
      db: N.dbCallbacks,
      runInTransaction: se.runInTransaction,
      qpl: oe.qplConfigs
    });
    const {
      theme: r
    } = this.state;
    (0, ye.applyThemeToUI)(r);
    rt().then(e => {
      h.AssetLoader.setPlatform(e);
      h.AssetLoader.loadInitialAssets(ye.THEME_ASSETS[r]);
    });
    (function () {
      return tt.apply(this, arguments);
    })().then(() => {
      A.Cmd.mainLoaded();
      this.setState({
        mainLoaded: true
      });
    }).then(() => Promise.all([(0, V.requireEmojiAssetMapCreator)(), (0, V.requireEmojiConfig)(), rt()])).then(e => {
      let [t, n, r] = e;
      h.AssetLoader.setPlatform(r);
      h.AssetLoader.initEmojiAsset(t(n));
      L.emojiCompletionTracker.beginPreloadFallback();
    });
    const {
      listeners: a
    } = this.props;
    a.add(A.Cmd, "initial_load_ready", () => {
      this.setState({
        initialLoadReady: true
      });
    });
    a.add(_e.StorageCmd, "storage_not_enough_space", () => {
      Z.ModalManager.open(je.default.createElement(C.ConfirmPopup, {
        onOK: () => {
          pe.Socket.logout(Q.LogoutReason.StorageQuotaExceeded);
        },
        okText: (0, B.default)("OK")
      }, xe.fbt._("Your computer does not have enough space for WhatsApp to run. Please create more storage by deleting unused files from your computer, then log in again.", null, {
        hk: "3tBII8"
      })));
    });
    a.add(A.Cmd, "account_temporarily_banned", e => {
      this.setState({
        temporaryBan: e
      });
    });
    a.add(A.Cmd, "service_unavailable_503", () => {
      this.setState({
        serviceUnavailable: true
      });
    });
    a.add(A.Cmd, "starting_logout", () => {
      this.setState({
        startLogout: true
      });
    });
    we.OfflineResumeReporter.logOfflineStartT();
    {
      const e = (0, F.default)(require("./889423.js"));
      a.add(window, "beforeunload", () => {
        if (!(Ye.isOpeningDeeplinkInCurrentTab === null || Ye.isOpeningDeeplinkInCurrentTab === undefined ? undefined : (0, Ye.isOpeningDeeplinkInCurrentTab)())) {
          e.unloadMutex();
        }
      });
      a.add(window, "unload", () => {
        if (!(Ye.isOpeningDeeplinkInCurrentTab === null || Ye.isOpeningDeeplinkInCurrentTab === undefined ? undefined : (0, Ye.isOpeningDeeplinkInCurrentTab)())) {
          e.unloadMutex();
        }
      });
      a.add(window, "storage", t => {
        if (e.storagePong(t)) {
          __LOG__(2)`[md takeover] tab taken over. stopping comms`;
          (0, o.closeSocketAndPreventRetry)();
          q.Logger.onTakeOver();
          this.setState({
            takingOver: false,
            anotherSession: true
          });
        }
      });
    }
    a.add(ge.Stream, "change:clientExpired", this._handleClientExpired);
    a.add(ge.Stream, "change:hardExpired", this._handleHardExpired);
    a.add(ge.Stream, "change:mode", this._handleStreamModeChange);
    a.add(A.Cmd, "open_lock_screen_modal", () => {
      this.setState({
        screenLocked: true
      });
    });
    a.add(A.Cmd, "correct_passcode_lock_screen", function () {
      var t = (0, i.default)(function* (t) {
        yield te.MsgCollection.decryptAndSetModels(t);
        e.setState({
          screenLocked: false,
          stayInSync: false
        });
      });
      return function () {
        return t.apply(this, arguments);
      };
    }());
    a.add(A.Cmd, "ab_props_loaded", () => {
      this.setState({
        screenLockFeatureSupported: (0, X.screenLockFeatureSupported)()
      });
    });
    if (this.state.screenLockFeatureSupported && (0, Ne.getScreenLockEnabled)() && Oe.waNoiseInfo.cachedPasscodeDerivedKey == null) {
      this.setState({
        screenLocked: true
      });
    }
    if (Ce.default.canMuckHistory()) {
      const e = (0, _.parseAPICmd)(window.location.href);
      if (e.resultType !== f.APICmd.INVALID && e.resultType !== "ADVERTISE" && e.resultType !== "MANAGE_ADS" && e.resultType !== "MESSAGE_YOURSELF") {
        const {
          url: t
        } = e.data;
        delete e.data.url;
        this._maybeExecApiCmd(e);
        window.history.replaceState({}, "", t);
      }
    }
    var l;
    a.add(W.default, "locale_change", e => {
      let {
        loc: t
      } = e;
      __LOG__(2)`App:componentDidMount:rerenderUI locale change`;
      Ie.default.setLangPref(t);
      M.Clock.setIs24HourBasedOnLocale();
      this.animate = false;
      this.setState({
        locale: `${W.default.getLocale()}#${Fe.default.locale()}`
      });
    });
    this._registerYesterdayTimer();
    __LOG__(2)`App:componentDidMount:visibilityState: ${document.visibilityState}`;
    if (document.visibilityState !== "visible") {
      (0, c.promiseTimeout)((0, G.default)(document, "visibilitychange"), 5000).then(() => this._beginMutex(0)).catch(() => this._beginMutex(0));
    } else {
      this._beginMutex(0);
    }
    this.props.listeners.add(window, "click", this._handleWindowClick, {
      capture: true
    });
    this.props.listeners.add(window, "blur", () => {
      this._setIsKeyboardUser(false);
    });
    be.updatePoll.poll(be.checkForUpdates);
    this._logFirstRenderMountTime();
    document.createElement = (l = document.createElement.bind(document), function (e) {
      let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (e.toLowerCase() === "iframe") {
        __LOG__(3)`Modified a created iframe element to include sandbox attributes for security fix.`;
        const n = l(e, t);
        n.sandbox = "allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox";
        return n;
      }
      return l(e, t);
    });
    this.props.listeners.add(he.default, "system_theme_change", e => {
      if (this.state.systemThemeMode) {
        this._handleSetTheme(e);
      }
    });
  }
  componentDidUpdate(e, t) {
    if (t.anotherSession === true && this.state.anotherSession === false) {
      ke.default.openDB().catch(e => {
        __LOG__(3)`Failed to open indexeddb: ${e}`;
      });
    } else if (t.anotherSession === false && this.state.anotherSession === true) {
      ke.default.idb().then(e => {
        E.default.takeOver = true;
        e.close();
        __LOG__(2)`db: closed due to take over`;
      }).catch(() => {});
    }
    this._maybeExecApiCmd(this.state.apiCmd);
    if (this.state.mode !== ge.StreamMode.MAIN) {
      this.animate = true;
    }
    this._logFirstRenderMountTime();
  }
  componentWillUnmount() {
    this._setModeScheduler.cancel();
    if (this._setWamSystemInfo) {
      this._setWamSystemInfo.cancel();
    }
  }
  _beginMutex(e) {
    var t = this;
    let r = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    return (0, i.default)(function* () {
      if (ve.UA.isLocalStorageBroken) {
        if (yield (0, le.isAnotherTabActive)()) {
          q.Logger.onTakeOver();
          t.setState({
            isUnsupportedTakeover: true
          });
          try {
            (0, o.stopComms)();
          } catch (e) {}
          return;
        }
      }
      (0, le.setTabActive)();
      if (r && Ae.Updater.shouldForceUpdateOnTakeOver()) {
        Ae.Updater.restart();
      }
      {
        const i = (0, F.default)(require("./889423.js"));
        const a = r ? i.takeoverLocal(e) : i.init(e);
        const o = yield a.catch(e => {
          t.setState({
            takingOver: true
          });
          return t._beginMutex(e, true);
        });
        q.Logger.isTakeOver = o;
        t.setState({
          takingOver: false,
          anotherSession: o
        });
      }
    })();
  }
  _maybeExecApiCmd(e) {
    if (e && e.resultType !== "ADVERTISE" && e.resultType !== "MANAGE_ADS") {
      e.resultType;
      if (this._canExecApiCmd()) {
        Qe({
          cmdAndData: e,
          isExternal: true,
          sessionId: this._getDeeplinkSessionId()
        });
        return void (this.state.apiCmd != null && this.setState({
          apiCmd: null
        }));
      }
      if (e !== this.state.apiCmd) {
        this.setState({
          apiCmd: e
        });
      }
    }
  }
  _canExecApiCmd() {
    return He != null && nt(this.state) === Ve.MAIN;
  }
  _logFirstRenderMountTime() {
    if (this.state.mode !== ge.StreamMode.SYNCING) {
      Je();
    }
  }
  _registerYesterdayTimer() {
    p.default.setLocalTimeout(() => {
      __LOG__(2)`App:registerYesterdayTimer:rerenderUI relative timestamps`;
      __LOG__(2)`Local Clock: ${Date.now()}, Skew: ${M.Clock.getSkew()}`;
      A.Cmd.midnight();
      this._registerYesterdayTimer();
    }, (0, Fe.default)().endOf("day").valueOf());
  }
  _getTemporaryBanReason(e) {
    const t = (0, Re.getMaybeMeUser)().user;
    switch (e) {
      case 101:
        return xe.fbt._("You're temporarily banned from WhatsApp because you sent too many messages to people who don't have {phone} in their address books.", [xe.fbt._param("phone", t)], {
          hk: "1cF5rb"
        });
      case 102:
        return xe.fbt._("You're temporarily banned from WhatsApp because too many people blocked you.", null, {
          hk: "3HhQ7n"
        });
      case 103:
        return xe.fbt._("You're temporarily banned from WhatsApp because you created too many groups with people who don't have {phone} in their address books.", [xe.fbt._param("phone", t)], {
          hk: "2CTUOJ"
        });
      case 104:
        return xe.fbt._("You're temporarily banned from WhatsApp because you sent the same message to too many people.", null, {
          hk: "2r9Adr"
        });
      case 106:
        return xe.fbt._("You're temporarily banned from WhatsApp because you sent too many messages to a broadcast list.", null, {
          hk: "3QZzJ1"
        });
      default:
        return xe.fbt._("You're temporarily banned from WhatsApp because you may have violated our terms of service.", null, {
          hk: "1d1rXh"
        });
    }
  }
  _getUiAndIconCount() {
    switch (nt(this.state)) {
      case Ve.CLIENT_EXPIRED_DIALOG:
        return {
          ui: je.default.createElement(x.DefaultFavicon, null, je.default.createElement(T.default, null)),
          requiresBackendCheck: false
        };
      case Ve.ANOTHER_SESSION:
        {
          let e;
          let t;
          if (this.state.takingOver) {
            e = () => {};
            t = xe.fbt._("Connecting…", null, {
              hk: "hLOBL"
            });
          } else {
            e = () => {
              this._mdReloadPageOnTakeOver();
            };
            t = xe.fbt._("Use Here", null, {
              hk: "A3bJr"
            });
          }
          return {
            ui: je.default.createElement(x.ErrorFavicon, null, je.default.createElement(P.default, {
              cancelText: (0, B.default)("Close"),
              onCancel: window.open.bind(window, "https://www.whatsapp.com/", "_self"),
              okText: t,
              onOK: e
            }, xe.fbt._("WhatsApp is open in another window. Click \"Use Here\" to use WhatsApp in this window.", null, {
              hk: "2XpoDN"
            }))),
            requiresBackendCheck: false
          };
        }
      case Ve.UNSUPPORTED_TAKEOVER:
        return {
          ui: je.default.createElement(x.ErrorFavicon, null, je.default.createElement(P.default, {
            okText: xe.fbt._("Refresh", null, {
              hk: "3gD6Jh"
            }),
            onOK: this._mdReloadPageWithUnsupportedTakeOver
          }, xe.fbt._("There is already another active WhatsApp Web tab in this browser. WhatsApp Web does not support multiple active tabs in this browser. Please use the existing tab or close it and refresh this tab.", null, {
            hk: "xnVvw"
          }))),
          requiresBackendCheck: false
        };
      case Ve.SERVICE_UNAVAILABLE:
        return {
          ui: je.default.createElement(x.ErrorFavicon, null, je.default.createElement(ce.default, null)),
          requiresBackendCheck: false
        };
      case Ve.TEMP_BAN:
        {
          const {
            code: e,
            expire: t,
            message: n,
            url: r
          } = this.state.temporaryBan || {};
          const i = n != null ? n : this._getTemporaryBanReason(e);
          const a = Fe.default.duration(t, "seconds").humanize();
          return {
            ui: je.default.createElement(x.ErrorFavicon, null, je.default.createElement(P.default, {
              cancelText: xe.fbt._("Log out", null, {
                hk: "1qOHlo"
              }),
              onCancel: () => {
                __LOG__(2)`Banned accounts: user selected logout`;
                pe.Socket.logout();
              },
              okText: xe.fbt._("Learn more", null, {
                hk: "1L9NkE"
              }),
              onOK: window.open.bind(window, r != null ? r : (0, U.getFaqUrl)())
            }, je.default.createElement("div", null, i), je.default.createElement("div", null, xe.fbt._("You'll be able to use WhatsApp again in {duration}", [xe.fbt._param("duration", a)], {
              hk: "4dLSjo"
            })))),
            requiresBackendCheck: true
          };
        }
      case Ve.QR:
        return {
          ui: je.default.createElement(x.DefaultFavicon, null, je.default.createElement(ee.ModalManagerComponent, {
            type: ee.ModalType,
            key: "modal-manager"
          }), je.default.createElement(H.LinkDeviceScreen, {
            key: "qr-code",
            apiCmd: this.state.apiCmd
          })),
          extraClasses: g.default.isQR,
          requiresBackendCheck: true
        };
      case Ve.STARTUP:
      case Ve.SYNCING:
        {
          let e = je.default.createElement(fe.default, {
            initialLoadReady: this.state.initialLoadReady,
            onReady: this._handleReadyForMainScreen
          });
          return {
            ui: je.default.createElement(x.DefaultFavicon, null, e),
            requiresBackendCheck: true
          };
        }
      case Ve.OFFLINE:
        return {
          ui: je.default.createElement(x.ErrorFavicon, null, je.default.createElement(ne.default, null)),
          requiresBackendCheck: true
        };
      case Ve.PROXYBLOCK:
        return {
          ui: je.default.createElement(x.ErrorFavicon, null, je.default.createElement(re.default, null)),
          requiresBackendCheck: true
        };
      case Ve.CONFLICT:
        return {
          ui: je.default.createElement(x.ErrorFavicon, null, je.default.createElement(P.default, {
            cancelText: xe.fbt._("Log out", null, {
              hk: "1qOHlo"
            }),
            onCancel: () => pe.Socket.logout(),
            okText: xe.fbt._("Use Here", null, {
              hk: "A3bJr"
            }),
            onOK: () => pe.Socket.takeover()
          }, xe.fbt._("WhatsApp is open on another computer or browser. Click \"Use Here\" to use WhatsApp in this window.", null, {
            hk: "2oUAKP"
          }))),
          requiresBackendCheck: true
        };
      case Ve.TOS_BLOCK:
        return {
          ui: je.default.createElement(x.ErrorFavicon, null, je.default.createElement(Se.default, {
            description: xe.fbt._("WhatsApp is updating our Terms and Privacy Policy to reflect new features and comply with the new European Union data protection laws. Open WhatsApp on your phone to read our Terms and Privacy Policy and learn more about the choices you have. If you have accepted the Terms and Privacy Policy, click \"LOG IN\" to continue using WhatsApp.", null, {
              hk: "4uxe2b"
            })
          })),
          requiresBackendCheck: true
        };
      case Ve.SMB_TOS_BLOCK:
        return {
          ui: je.default.createElement(x.ErrorFavicon, null, je.default.createElement(Se.default, {
            description: xe.fbt._("We are updating our WhatsApp Business Terms of Service. Agree to our new Terms on your phone to continue using WhatsApp Business. If you have accepted the Terms of Service, click \"LOG IN\" to continue using WhatsApp Business.", null, {
              hk: "3Ti2sa"
            })
          }, je.default.createElement(de.default, null))),
          requiresBackendCheck: true
        };
      case Ve.DEPRECATED_VERSION:
        return {
          ui: je.default.createElement(x.ErrorFavicon, null, je.default.createElement(w.default, null)),
          requiresBackendCheck: true
        };
      case Ve.LOGOUT:
        return {
          ui: je.default.createElement(x.DefaultFavicon, null, je.default.createElement(ee.ModalManagerComponent, {
            type: ee.ModalType,
            key: "modal-manager"
          }), je.default.createElement(J.default, {
            key: "logout"
          })),
          requiresBackendCheck: true
        };
      case Ve.SCREEN_LOCK:
        return {
          ui: je.default.createElement(z.default, null),
          requiresBackendCheck: true
        };
      case Ve.MAIN:
        {
          const {
            MainComponent: e
          } = (0, u.default)(He, "Main");
          return {
            ui: [je.default.createElement(Ee.ToastManagerComponent, {
              key: "toast-manager"
            }), je.default.createElement(ee.ModalManagerComponent, {
              contextMenuRef: this.contextMenuRef,
              type: ee.ModalType,
              key: "main-modal-manager"
            }), je.default.createElement(ee.ModalManagerComponent, {
              type: ee.MediaType,
              key: "media-modal-manager"
            }), je.default.createElement(I.ContextMenuManager, {
              ref: this.contextMenuRef,
              type: I.Type.MENU,
              key: "context-menu-manager"
            }), je.default.createElement(I.ContextMenuManager, {
              type: I.Type.TOOLTIP,
              key: "tooltip-manager"
            }), je.default.createElement(L.InitialEmojisCompletionContext.Provider, {
              key: "main",
              value: L.emojiCompletionTracker
            }, je.default.createElement(e, {
              conn: O.Conn,
              animate: this.animate
            }))],
            extraClasses: g.default.isMain,
            requiresBackendCheck: true
          };
        }
    }
  }
  _getDeeplinkSessionId() {
    if ((0, y.smbClickToChatLoggingEnabled)()) {
      return Math.floor(Math.random() * 2147483648).toString();
    } else {
      return undefined;
    }
  }
  render() {
    !function (e) {
      if (Le.initialScreenTimer.hasStarted()) {
        return;
      }
      const t = nt(e);
      if (!function (e) {
        return e !== Ve.SYNCING;
      }(t)) {
        return;
      }
      (0, Le.setInitialScreen)(t);
      Le.initialScreenTimer.start();
      window.requestAnimationFrame(() => {
        Le.initialScreenTimer.end();
        qe("initialPanelRenderTRecorded");
      });
    }(this.state);
    const {
      isKeyboardUser: e
    } = this.state;
    const {
      ui: t,
      extraClasses: n,
      requiresBackendCheck: r
    } = this._getUiAndIconCount();
    const i = (0, v.classnamesConvertMeToStylexPlease)(g.default.wrapper, n, {
      "app-wrapper-native": me.isNative,
      "app-wrapper-web": me.isWeb,
      "safari-fix": me.hasSafariFix,
      "font-fix": me.hasFontFix,
      "os-ltr": me.isOSLTR,
      "os-rtl": me.isOSRTL,
      "os-mac": me.isOSMac,
      "os-win": me.isOSWin,
      "keyboard-user": e
    });
    if (r && He != null && !(0, Pe.knowsPhone)()) {
      He.notificationBackend.shutdownAsNeeded();
    }
    const a = nt(this.state);
    const o = a === Ve.STARTUP || a === Ve.SYNCING ? "loading-screen" : this.state.locale;
    return je.default.createElement(ye.ThemeContext.Provider, {
      value: this._getThemeContextValue({
        theme: this.state.theme,
        systemThemeMode: this.state.systemThemeMode
      })
    }, je.default.createElement(Y.default.Provider, {
      value: {
        isKeyboardUser: e,
        setIsKeyboardUser: this._setIsKeyboardUser
      }
    }, je.default.createElement(k.ErrorBoundary, {
      name: "app-wrapper"
    }, je.default.createElement(Me.UIE, {
      displayName: "App",
      uimState: Te.UIMState.INACTIVE
    }, je.default.createElement(K.HotKeys, {
      handlers: this._handlers,
      className: i,
      tabIndex: null,
      onMouseDownCapture: this._handleMouseDown,
      onClickCapture: this._handleClick,
      key: o
    }, undefined, undefined, t)))));
  }
}
Ze.displayName = "AppImpl";
const et = (0, $.ListenerHOC)(Ze);
function tt() {
  return (tt = (0, i.default)(function* () {
    const [e, t] = yield Promise.all([(0, V.requireMain)(), rt()]);
    Le.mainScriptTimer.start();
    He = e(t);
    Le.mainScriptTimer.end();
  })).apply(this, arguments);
}
function nt(e) {
  var t;
  const {
    anotherSession: n,
    isUnsupportedTakeover: r,
    updating: i,
    hardExpired: a,
    mainLoaded: o,
    mode: s,
    screenLocked: l
  } = e;
  if ((t = e.temporaryBan) === null || t === undefined ? undefined : t.banned) {
    return Ve.TEMP_BAN;
  }
  if (e.serviceUnavailable === true) {
    return Ve.SERVICE_UNAVAILABLE;
  }
  if (e.startLogout) {
    return Ve.LOGOUT;
  }
  if (i || a) {
    return Ve.CLIENT_EXPIRED_DIALOG;
  }
  if (r) {
    return Ve.UNSUPPORTED_TAKEOVER;
  }
  if (n) {
    return Ve.ANOTHER_SESSION;
  }
  if (l) {
    return Ve.SCREEN_LOCK;
  }
  switch (s) {
    case ge.StreamMode.QR:
      return Ve.QR;
    case ge.StreamMode.SYNCING:
      return Ve.SYNCING;
    case ge.StreamMode.OFFLINE:
      return Ve.OFFLINE;
    case ge.StreamMode.PROXYBLOCK:
      return Ve.PROXYBLOCK;
    case ge.StreamMode.CONFLICT:
      return Ve.CONFLICT;
    case ge.StreamMode.TOS_BLOCK:
      return Ve.TOS_BLOCK;
    case ge.StreamMode.SMB_TOS_BLOCK:
      return Ve.SMB_TOS_BLOCK;
    case ge.StreamMode.DEPRECATED_VERSION:
      return Ve.DEPRECATED_VERSION;
    case ge.StreamMode.MAIN:
      if (o) {
        if (e.stayInSync) {
          return Ve.SYNCING;
        } else {
          return Ve.MAIN;
        }
      } else {
        return Ve.STARTUP;
      }
  }
  throw (0, Ue.default)(`app:render Error invalid StreamMode: ${s}`);
}
function rt() {
  if (O.Conn.platform) {
    return Promise.resolve(O.Conn.platform);
  } else {
    return new Promise(e => {
      const t = () => {
        const {
          platform: n
        } = O.Conn;
        if (n != null) {
          O.Conn.off("change:platform", t);
          e(n);
        }
      };
      O.Conn.on("change:platform", t);
    });
  }
}
exports.AppWrapper = et;