var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Socket = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/435161.js"));
var o = r(require("../vendor/763105.js"));
var s = r(require("../vendor/402525.js"));
var l = require("./250281.js");
var u = require("./8304.js");
var c = require("./434517.js");
var d = require("./287461.js");
var p = require("./238196.js");
var f = require("./674016.js");
var _ = require("./984330.js");
var g = require("./481173.js");
require("./508247.js");
var m = require("./780549.js");
var h = require("./445729.js");
var y = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = Z(t);
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
}(require("./996588.js"));
var E = require("./188472.js");
var S = r(require("./467277.js"));
var v = r(require("./385158.js"));
var T = require("./110567.js");
var M = require("./561601.js");
var A = r(require("./97359.js"));
var b = require("./542137.js");
var C = require("./900038.js");
var P = require("./65889.js");
var O = r(require("./174285.js"));
var I = require("./383047.js");
var R = require("./332108.js");
var N = require("./149254.js");
var D = require("./719621.js");
var w = r(require("./524173.js"));
var L = require("./288057.js");
var k = require("./555823.js");
var G = require("./433541.js");
var U = r(require("./665810.js"));
var x = require("./109959.js");
var B = require("./937001.js");
var F = require("./311721.js");
var j = require("./226562.js");
var Y = require("./731344.js");
var K = require("./77767.js");
var W = require("./366320.js");
var V = require("./960523.js");
var H = require("./725137.js");
var $ = require("./757453.js");
var z = require("./94872.js");
var q = require("./459857.js");
var J = require("./673168.js");
var Q = r(require("./53575.js"));
var X = r(require("./556869.js"));
function Z(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (Z = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
class ee extends g.BaseModel {
  constructor() {
    super(...arguments);
    this.socket = (0, g.session)();
    this.launchGeneration = (0, g.session)(0);
    this.backoffGeneration = (0, g.session)(0);
    this.hasSynced = (0, g.session)();
    this.state = (0, g.session)(j.SOCKET_STATE.UNLAUNCHED);
    this.stream = (0, g.session)(j.SOCKET_STREAM.DISCONNECTED);
    this.canSend = (0, g.session)();
    this.sendQueue = (0, g.session)();
    this.sendHash = (0, g.session)();
    this.cancelHash = (0, g.session)();
    this.doubleAckHash = (0, g.session)();
    this.sequence = (0, g.session)(0);
    this.shortTagBase = (0, g.session)();
    this.socketWatcher = (0, g.session)();
    this.refWatcher = (0, g.session)();
    this.pendingPhoneReqs = (0, g.session)(0);
    this.isIncognito = (0, g.session)();
    this.logoutMutex = (0, g.session)(0);
    this.retryTimestamp = (0, g.session)();
    this.launched = (0, g.session)();
    this.mustExitLoop = (0, g.session)();
    this.syncTag = (0, g.session)();
    this.lastPhoneMessage = (0, g.session)();
    this.shouldForceReconnect = (0, g.session)(false);
  }
  initialize() {
    var e = this;
    this.sendQueue = [];
    this.sendHash = {};
    this.cancelHash = {};
    this.doubleAckHash = {};
    this.listenTo(this, "change:state", this._handleStateChange.bind(this));
    this.listenTo(this, "change:stream", this._handleStreamChange.bind(this));
    (0, u.delayMs)(0).then(v.default).then(e => {
      this.isIncognito = e;
    });
    this.listenTo(m.Cmd, "log_socket_summary", this.summary);
    this.listenTo(m.Cmd, "set_socket_state", e => {
      this.state = e;
    });
    this.listenTo(m.Cmd, "open_socket_stream", () => {
      this.openStream();
      if (this.hasSynced) {
        this.set({
          stream: j.SOCKET_STREAM.CONNECTED
        });
      }
    });
    this.listenTo(m.Cmd, "socket_stream_disconnected", () => {
      this.set({
        stream: j.SOCKET_STREAM.DISCONNECTED
      });
    });
    this.listenTo(m.Cmd, "on_critical_sync_done", () => {
      __LOG__(2)`[ws2] observed on_critical_sync_done`;
      this._handleCriticalSyncDone();
    });
    this.listenTo(m.Cmd, "main_stream_mode_ready", (0, i.default)(function* () {
      __LOG__(2)`[ws2] observed main_stream_mode_ready`;
      if (yield (0, V.getAllCriticalDataSynced)()) {
        __LOG__(2)`[ws2] moving to main screen from main_stream_mode_ready`;
        e.set({
          hasSynced: true,
          stream: j.SOCKET_STREAM.CONNECTED
        });
      } else {
        __LOG__(2)`[ws2] did not meet conditions to move to main screen`;
      }
    }));
    this.listenTo(m.Cmd, "socket_stream_disconnected", () => {
      this.stream = j.SOCKET_STREAM.DISCONNECTED;
    });
  }
  reconnect() {
    if ((0, d.getABPropConfigValue)("web_socket_reconnect_enabled")) {
      m.Cmd.reconnectSocket();
    }
  }
  takeover() {
    throw "Takeover called without conflict!";
  }
  exitLoop() {
    this.mustExitLoop = true;
  }
  _setLogoutDirtyBit() {
    if (O.default) {
      O.default.setItem(z.KEYS.LOGOUT_DIRTY_BIT, "1");
    }
  }
  _removeLogoutDirtyBit() {
    if (O.default) {
      O.default.removeItem(z.KEYS.LOGOUT_DIRTY_BIT);
    }
  }
  _hasDirtyBitSet() {
    if (O.default) {
      O.default.getItem(z.KEYS.LOGOUT_DIRTY_BIT);
    }
  }
  clearCredentialsAndStoredData(e, t) {
    var n = this;
    return (0, i.default)(function* () {
      let r = false;
      if (e === R.LogoutReason.ClientFatalError) {
        r = true;
      }
      n._setLogoutDirtyBit();
      r = yield n.clearCredentials();
      if (n._hasDirtyBitSet()) {
        r = true;
      }
      (0, Y.unsubscribePushManager)();
      n._setLogoutDirtyBit();
      try {
        yield n.destroyStorage();
      } catch (e) {
        r = true;
        __LOG__(4, undefined, new Error(), undefined, ["logout"])`destroyStorage: failed with error ${e}`;
      }
      (0, p.clearABPropConfigs)();
      if (!r) {
        n._removeLogoutDirtyBit();
      }
      {
        const n = new U.default();
        if (r && w.default.info().name !== "Firefox") {
          n.set("post_logout", "1");
        }
        if (e) {
          const r = (0, I.getErrorCodeFromLogoutReason)(e);
          if (r) {
            n.set("logout_reason", r);
          }
          if (e === R.LogoutReason.AccountLocked && t != null) {
            const {
              logoutMessageHeader: e,
              logoutMessageSubtext: r
            } = t;
            if (e != null) {
              n.set("logout_message_header", e);
            }
            if (r != null) {
              n.set("logout_message_subtext", r);
            }
          }
        }
        const i = n.toString();
        if (i == null || i === "") {
          window.location.reload();
        } else {
          window.location.href = `${window.location.pathname}?${n.toString()}`;
        }
      }
    })();
  }
  destroyStorage() {
    return (0, i.default)(function* () {
      const e = [(0, k.destroy)(), (0, N.destroyStorage)()];
      e.push((0, M.destroy)());
      e.push((0, G.destroy)());
      e.push((0, C.destroy)());
      e.push((0, x.destroy)());
      e.push(T.ftsClient.clearInitializationPromises());
      {
        const t = require("./961209.js").ob;
        e.push(t());
      }
      yield Promise.all(e);
    })();
  }
  logout() {
    var e = this;
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : R.LogoutReason.UserInitiated;
    if (O.default) {
      O.default.removeItem("WebEncKeySalt");
      O.default.removeItem("WANoiseInfo");
    }
    (0, b.get)().setLogoutState(true);
    m.Cmd.onStartingLogout();
    __LOG__(2)`ws2:user logged out`;
    let r = Promise.resolve();
    const a = Math.min(20, Math.max(0, B.ServerProps.syncdSentinelTimeoutSeconds));
    r = (0, c.promiseTimeout)((0, A.default)(require("./300767.js"))(), a * 1000).catch(() => __LOG__(3)`ws2: multi-device logout did not manage to send sentinel patch`);
    (0, c.promiseTimeout)(r.then(() => this.sendCurrentLogout(t)).catch(function () {
      var n = (0, i.default)(function* (n) {
        __LOG__(4, undefined, new Error())`ws2: [logout error] sendCurrentLogoutPromise errored with ${n}`;
        yield e.clearCredentialsAndStoredData(t);
        m.Cmd.logout();
      });
      return function () {
        return n.apply(this, arguments);
      };
    }()), 3000, "network request took more than 3 seconds").then((0, i.default)(function* () {
      yield e.clearCredentialsAndStoredData(t);
      if (e.state === j.SOCKET_STATE.OPENING) {
        e.trigger("change:state");
      }
      m.Cmd.logout();
    })).catch(function () {
      var n = (0, i.default)(function* (n) {
        __LOG__(4, undefined, new Error())`ws2: [logout error] sentinelPromise or sendCurrentLogoutPromise timed out with ${n}`;
        yield e.clearCredentialsAndStoredData(t);
        m.Cmd.logout();
      });
      return function () {
        return n.apply(this, arguments);
      };
    }()).finally(() => {
      (0, b.get)().setLogoutState(false);
    });
  }
  summary() {
    var e = this;
    return (0, i.default)(function* () {
      __LOG__(2)`ws:summary --------------------------------`;
      __LOG__(2)`ws state           ${e.state}`;
      __LOG__(2)`wd online:         ${String(navigator.onLine)}`;
      __LOG__(2)`ws socket id:      ${e.socket ? e.socket.id : "n/a"}`;
    })();
  }
  _handleStateChange() {
    __LOG__(2)`ws2:state change: ${this.state}`;
  }
  _handleStreamChange() {
    __LOG__(2)`ws2:stream change: ${this.stream}`;
    if (this.stream === j.SOCKET_STREAM.DISCONNECTED) {
      this.unset("resumePromise");
    }
  }
  clearSendHash(e) {
    if (e) {
      (0, s.default)(this.sendHash, function (e) {
        if (e.resendTimer) {
          self.clearTimeout(e.resendTimer);
        }
        e.onDrop(new _.LogoutDrop(e.toString()));
      });
    } else {
      const e = (0, o.default)(this.sendHash, "ephemeral");
      __LOG__(3)`Ephemeral Drop: ${(0, a.default)(e, "tag").join(",")}`;
      e.forEach(function (e) {
        if (e.resendTimer) {
          self.clearTimeout(e.resendTimer);
        }
        e.onDrop(new _.EphemeralDrop(e.toString()));
      });
    }
    this.sendHash = {};
    this.doubleAckHash = {};
    this.pendingPhoneReqs = 0;
  }
  _handleCriticalSyncDone() {
    __LOG__(2)`[ws2] moving to main screen from onCriticalSyncDone`;
    this.set({
      hasSynced: true,
      stream: j.SOCKET_STREAM.CONNECTED
    });
  }
  openStream() {
    if ((0, q.getMeUser)()) {
      h.Conn.blockStoreAdds = false;
      h.Conn.id = "1";
      h.Conn.trigger("me_ready");
    }
    return (0, f.addMeToContacts)();
  }
  clearCredentials() {
    var e = this;
    return (0, i.default)(function* () {
      Q.default.updatePreservedUserKeys();
      let t = false;
      try {
        t = yield e.clearState();
      } catch (e) {
        t = true;
      }
      try {
        (0, $.setBrowserId)();
      } catch (e) {
        t = true;
        __LOG__(4, undefined, new Error(), undefined, ["logout"])`ws2:clearState error ${e}`;
      }
      try {
        (0, $.setUnknownId)();
      } catch (e) {
        __LOG__(4, undefined, new Error(), undefined, ["logout"])`ws2:setUnknownId error ${e}`;
      }
      try {
        (0, q.setMe)();
      } catch (e) {
        t = true;
        __LOG__(4, undefined, new Error(), undefined, ["logout"])`ws2:setMe error ${e}`;
      }
      try {
        yield (0, J.clearRegistrationInfo)();
      } catch (e) {
        t = true;
        __LOG__(4, undefined, new Error(), undefined, ["logout"])`ws2:clearRegistrationInfo error ${e}`;
      }
      try {
        yield (0, F.destroy)();
      } catch (e) {
        t = true;
        __LOG__(4, undefined, new Error(), undefined, ["logout"])`ws2:destroySignal error ${e}`;
      }
      try {
        yield (0, E.deleteEncKeysAndCache)();
        const e = require("./47405.js").cn;
        yield e();
      } catch (e) {
        t = true;
      }
      try {
        yield (0, H.clearAllLocalState)();
      } catch (e) {
        t = true;
        __LOG__(4, undefined, new Error(), undefined, ["logout"])`ws2:clearAllLocalState error ${e}`;
      }
      return t;
    })();
  }
  clearState() {
    var e = this;
    return (0, i.default)(function* () {
      __LOG__(2)`ws2:clearState`;
      let t = false;
      e.sendQueue = [];
      e.clearSendHash(true);
      e.unset("hasSynced");
      try {
        (yield (0, P.requireClearAppStates)())();
      } catch (e) {
        t = true;
        if (e instanceof L.DbOnLogoutAbort) {
          __LOG__(3)`ws2:clearState failed due to DB operations aborted: ${e.stack}`;
        } else {
          __LOG__(4, undefined, new Error(), true)`ws2:clearState error ${e.stack}`;
          SEND_LOGS("clear_session_app_state");
        }
      }
      try {
        yield function () {
          return ne.apply(this, arguments);
        }();
      } catch (e) {
        t = true;
        if (e instanceof L.DbOnLogoutAbort) {
          __LOG__(3)`ws2:clearState failed due to DB operations aborted: ${e.stack}`;
        } else {
          __LOG__(4, undefined, new Error(), true)`ws2:clearState error ${e.stack}`;
          SEND_LOGS("clear_persistent_app_state");
        }
      }
      return t;
    })();
  }
  sendCurrentLogout(e) {
    let t = (0, K.unpairDevice)(e).then(e => {
      if (e.status !== 200) {
        __LOG__(3)`ws2:multi-device logout failed with error code ${e.status}`;
      }
      (0, l.stopComms)();
    }).catch(e => {
      __LOG__(4, true, new Error())`[CRITICAL] unpairDevice failed with error, preoceed with local logout \n${e.stack}`;
    });
    if (!t) {
      t = Promise.reject((0, X.default)("sendCurrentLogout: should not reach"));
    }
    return t;
  }
  updateImmediately(e) {
    y.upload({
      reason: e,
      immediate: true
    }).finally(() => {
      W.Updater.restart(true);
    });
  }
}
const te = new ((0, g.defineModel)(ee))();
function ne() {
  return (ne = (0, i.default)(function* () {
    (yield Promise.allSettled([(0, S.default)(), D.LruMediaStore.clear()])).forEach(e => {
      if (e.status === "rejected") {
        throw e.reason;
      }
    });
  })).apply(this, arguments);
}
exports.Socket = te;