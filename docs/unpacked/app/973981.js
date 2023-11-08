var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StreamMode = exports.StreamInfo = exports.Stream = exports.Obscurity = undefined;
var i = r(require("../vendor/23279.js"));
var a = require("./685639.js");
var o = require("./481173.js");
var s = require("./780549.js");
var l = require("./804334.js");
var u = r(require("./99398.js"));
var c = require("./639880.js");
var d = require("./226562.js");
var p = require("./38878.js");
var f = require("./366320.js");
var _ = require("./673168.js");
var g = require("./499264.js");
var m = require("./238327.js");
var h = require("./115383.js");
var y = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = M(t);
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
}(require("./824194.js"));
var E = require("./940494.js");
var S = require("./689283.js");
var v = require("./46029.js");
var T = require("./889404.js");
function M(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (M = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const A = require("../vendor/76672.js").Mirrored(["OFFLINE", "OPENING", "PAIRING", "SYNCING", "RESUMING", "CONNECTING", "NORMAL", "TIMEOUT"]);
exports.StreamInfo = A;
const b = require("../vendor/76672.js").Mirrored(["QR", "MAIN", "SYNCING", "OFFLINE", "CONFLICT", "PROXYBLOCK", "TOS_BLOCK", "SMB_TOS_BLOCK", "DEPRECATED_VERSION"]);
exports.StreamMode = b;
const C = require("../vendor/76672.js").Mirrored(["SHOW", "OBSCURE", "HIDE"]);
exports.Obscurity = C;
class P extends o.BaseModel {
  constructor() {
    super(...arguments);
    this.info = (0, o.session)(A.NORMAL);
    this.mode = (0, o.session)(b.SYNCING);
    this.obscurity = (0, o.session)(C.HIDE);
    this.needsUpdate = (0, o.session)();
    this.clientExpired = (0, o.session)(false);
    this.hardExpired = (0, o.session)(false);
    this.lastSyncStart = (0, o.session)(R());
    this.needsManualDownload = (0, o.session)();
    this.couldForce = (0, o.session)();
    this.uiActive = (0, o.session)();
    this.available = (0, o.session)(true);
    this.unavailableShiftTimer = (0, o.session)();
    this.unavailableAutoLockTimer = (0, o.session)();
    this.unavailableLogoutTimer = (0, o.session)();
    this.unobscureShiftTimer = (0, o.session)();
    this.timeoutEvent = (0, o.session)();
    this.resumeCount = (0, o.session)(0);
    this.phoneAuthed = (0, o.session)(false);
    this._activeModeMeasure = (0, o.session)();
    this.displayInfo = (0, o.derived)(function () {
      return function (e, t) {
        switch (t) {
          case C.SHOW:
            return e;
          case C.HIDE:
            if (p.Socket.hasSynced) {
              return A.NORMAL;
            } else {
              return A.CONNECTING;
            }
          case C.OBSCURE:
            switch (e) {
              case A.OPENING:
              case A.PAIRING:
              case A.SYNCING:
              case A.RESUMING:
                return A.CONNECTING;
              default:
                return e;
            }
        }
        __LOG__(3)`Stream:unknown obscure level:`;
        return e;
      }(this.info, this.obscurity);
    }, ["info", "obscurity"]);
  }
  initialize() {
    super.initialize();
    if (!(0, _.isRegistered)()) {
      this.mode = b.QR;
    }
    this._activeModeMeasure = y.startMeasure(`Stream.mode: ${this.mode}`);
    this.unavailableShiftTimer = new a.ShiftTimer(() => this.markUnavailable());
    this.unobscureShiftTimer = new a.ShiftTimer(() => this.unobscure());
    this.unavailableAutoLockTimer = new a.ShiftTimer(function () {
      if ((0, g.getScreenLockDurationInSeconds)() !== 0) {
        __LOG__(2)`Stream:autoLockShiftTimer auto lock due to inactivity`;
        (0, l.lockScreenAndTriggerUnlockFlow)();
      }
    });
    this.listenTo(p.Socket, "change:state change:stream change:hasSynced", this._handleSocketUpdate);
    this.listenTo(u.default, "change:online", this._handleSocketUpdate);
    this.listenTo(this, "change:available", this._handleAvailableUpdate);
    this.listenTo(this, "change:phoneAuthed", this._handlePhoneAuthedUpdate);
    this.listenTo(this, "change:info change:displayInfo change:mode", (0, i.default)(this._handleSelfUpdate));
    this.listenTo(this, "change:info", this.logPageResume);
    this.listenTo(this, "change:info", this.updateWamLog);
    this.listenTo(this, "change:mode", this.logModeChange);
    this.listenTo(this, "change:available change:uiActive", this.updateCouldForce);
    this.listenTo(s.Cmd, "midnight", this.updateHardExpire);
    this.listenTo(s.Cmd, "serverUpdatedClientExpiration", this.updateHardExpire);
    this.listenTo(s.Cmd, "socket_stream_disconnected", () => {
      require("./434989.js").PresenceCollection.clearAllPresence();
    });
    if (window.document) {
      document.addEventListener("visibilitychange", this.updateCouldForce);
    }
    this.updateCouldForce();
    this.updateHardExpire();
  }
  delete() {}
  markAvailable() {
    this.unavailableShiftTimer.cancel();
    this.available = true;
  }
  markUnavailable(e) {
    if (e != null && e !== 0) {
      this.unavailableShiftTimer.onOrBefore(e);
    } else {
      this.unavailableShiftTimer.cancel();
      this.available = false;
    }
  }
  _handleSelfUpdate() {
    __LOG__(2)`Stream:onSelfUpdate mode:${this.mode} info:${this.info} view:${this.displayInfo}`;
    let e = this.timeoutEvent;
    if (this.info === A.TIMEOUT) {
      if (!e) {
        this.timeoutEvent = e = new v.WebcPhoneDisconnectedWamEvent();
      }
      if (this.displayInfo === A.TIMEOUT && this._bbarTime == null) {
        this._bbarTime = Date.now();
      }
    } else if (e) {
      e.markWebcPhoneDisconnectedT();
      const t = this._bbarTime;
      if (t != null) {
        e.webcPhoneBbarShownT = Date.now() - t;
      }
      e.commit();
      this.timeoutEvent = null;
      this._bbarTime = null;
    }
    if (this.mode === b.MAIN) {
      s.Cmd.readyForMainStreamModeLegacy();
    }
  }
  _handleSocketUpdate() {
    const e = {};
    const t = function () {
      switch (p.Socket.state) {
        case d.SOCKET_STATE.TIMEOUT:
          return A.TIMEOUT;
        case d.SOCKET_STATE.OPENING:
          if (u.default.online) {
            return A.OPENING;
          } else {
            return A.OFFLINE;
          }
        case d.SOCKET_STATE.PAIRING:
          if (p.Socket.hasSynced) {
            return A.RESUMING;
          } else {
            return A.PAIRING;
          }
        case d.SOCKET_STATE.CONNECTED:
          if (p.Socket.stream !== d.SOCKET_STREAM.CONNECTED) {
            if (p.Socket.hasSynced) {
              return A.NORMAL;
            } else {
              return A.SYNCING;
            }
          } else {
            return A.NORMAL;
          }
        case d.SOCKET_STATE.UNLAUNCHED:
        case d.SOCKET_STATE.PROXYBLOCK:
        default:
          return A.NORMAL;
      }
    }();
    e.info = t;
    e.mode = function () {
      let e = false;
      e = (0, _.isRegistered)();
      if (!e && p.Socket.state !== d.SOCKET_STATE.PROXYBLOCK) {
        return b.QR;
      }
      const t = p.Socket.hasSynced;
      switch (p.Socket.state) {
        case d.SOCKET_STATE.PROXYBLOCK:
          return b.PROXYBLOCK;
        case d.SOCKET_STATE.CONFLICT:
          return b.CONFLICT;
        case d.SOCKET_STATE.TOS_BLOCK:
          return b.TOS_BLOCK;
        case d.SOCKET_STATE.SMB_TOS_BLOCK:
          return b.SMB_TOS_BLOCK;
        case d.SOCKET_STATE.DEPRECATED_VERSION:
          return b.DEPRECATED_VERSION;
        case d.SOCKET_STATE.UNLAUNCHED:
          return b.SYNCING;
        case d.SOCKET_STATE.UNPAIRED_IDLE:
        case d.SOCKET_STATE.UNPAIRED:
          return b.QR;
        case d.SOCKET_STATE.OPENING:
          if (!u.default.online && !p.Socket.hasSynced) {
            return b.OFFLINE;
          }
        default:
          if (t || p.Socket.stream === d.SOCKET_STREAM.CONNECTED) {
            return b.MAIN;
          } else {
            return b.SYNCING;
          }
      }
    }();
    e.phoneAuthed = p.Socket.stream !== d.SOCKET_STREAM.DISCONNECTED;
    if (t === A.NORMAL) {
      this.unobscureShiftTimer.cancel();
      e.obscurity = C.HIDE;
    } else if (t === A.OFFLINE) {
      this.unobscureShiftTimer.cancel();
      e.obscurity = C.OBSCURE;
    } else {
      switch (this.obscurity) {
        case C.HIDE:
          this.unobscureShiftTimer.onOrBefore(18000);
          break;
        case C.OBSCURE:
          this.unobscureShiftTimer.onOrBefore(3000);
          break;
        case C.SHOW:
      }
    }
    this.set(e);
  }
  unobscure() {
    this.obscurity = C.SHOW;
  }
  _handlePhoneAuthedUpdate() {
    if (this.phoneAuthed) {
      this.sendAvailability(true);
    }
  }
  _handleAvailableUpdate() {
    const e = this.available;
    __LOG__(2)`Stream:onAvailableUpdate user ${e ? "available" : "unavailable"}`;
    const t = (0, g.getScreenLockDurationInSeconds)();
    if (e || t === 0) {
      this.unavailableAutoLockTimer.cancel();
    } else {
      this.unavailableAutoLockTimer.onOrBefore(t * 1000);
    }
    this.sendAvailability(false);
    if (e) {
      const {
        sendDeliveryReceiptsAfterPresence: e
      } = require("./203274.js");
      e();
    } else {
      require("./434989.js").PresenceCollection.clearAllPresence();
    }
  }
  sendAvailability(e) {
    if (e || this.uiActive) {
      if (this.available) {
        (0, c.sendPresenceAvailable)();
      } else {
        (0, c.sendPresenceUnavailable)();
      }
    }
  }
  updateCouldForce() {
    this.couldForce = !this.uiActive || !this.available && document.hidden;
  }
  updateHardExpire() {
    if (f.Updater.isExpired()) {
      this.hardExpired = true;
      f.Updater.restart(true);
    }
  }
  logPageResume() {
    if (this.info === A.RESUMING) {
      this.resumeCount++;
      new S.WebcPageResumeWamEvent({
        webcResumeCount: this.resumeCount
      }).commit();
    }
  }
  updateWamLog() {
    const e = this.info === A.NORMAL;
    (0, h.streamInfoChange)(this.info, E.WatchedSocketMD.numSocketsAttempted, e);
    if (e) {
      this.stopListening(this, "change:info", this.updateWamLog);
    }
  }
  logModeChange() {
    if (this._activeModeMeasure) {
      this._activeModeMeasure.end();
    }
    if (this.mode === b.SYNCING) {
      this.lastSyncStart = R();
    }
    this._activeModeMeasure = y.startMeasure(`Stream.mode: ${this.mode}`);
    new T.WebcStreamModeChangeWamEvent({
      webcStreamMode: O(this.mode)
    }).commit();
  }
}
function O(e) {
  switch (e) {
    case b.QR:
      return m.WEBC_STREAM_MODE_CODE.QR;
    case b.MAIN:
      return m.WEBC_STREAM_MODE_CODE.MAIN;
    case b.SYNCING:
      return m.WEBC_STREAM_MODE_CODE.SYNCING;
    case b.OFFLINE:
      return m.WEBC_STREAM_MODE_CODE.OFFLINE;
    case b.CONFLICT:
      return m.WEBC_STREAM_MODE_CODE.CONFLICT;
    case b.PROXYBLOCK:
      return m.WEBC_STREAM_MODE_CODE.PROXYBLOCK;
    case b.DEPRECATED_VERSION:
      return m.WEBC_STREAM_MODE_CODE.DEPRECATED_VERSION;
    case b.TOS_BLOCK:
    case b.SMB_TOS_BLOCK:
      return m.WEBC_STREAM_MODE_CODE.TOS_BLOCK;
  }
}
P.Proxy = "stream";
const I = new ((0, o.defineModel)(P))();
function R() {
  return Math.floor(window.performance.now());
}
exports.Stream = I;