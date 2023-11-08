var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WABaseNotification = undefined;
var a = i(require("../vendor/81109.js"));
var o = i(require("../vendor/348926.js"));
var s = require("./898817.js");
var l = require("./477689.js");
var u = require("./122583.js");
var c = i(require("./229922.js"));
var d = require("./434517.js");
var p = require("./971804.js");
var f = i(require("./455013.js"));
var _ = require("./955562.js");
var g = require("./419379.js");
var m = require("./446474.js");
var h = i(require("./556869.js"));
exports.WABaseNotification = class {
  constructor() {
    this.closeBanner = () => {
      if (this.notificationBanner != null) {
        __LOG__(2)`WABaseNotification:_closeNotification()`;
        this.notificationBanner.close();
      }
    };
  }
  shouldPlaySound() {
    return p.MuteCollection.getGlobalSounds();
  }
  shouldMute() {
    return false;
  }
  shouldShowBanner() {
    return window.Notification && window.Notification.permission === _.PERMISSION_ALLOWED && p.MuteCollection.getGlobalNotifications();
  }
  shouldSquelch() {
    return false;
  }
  buildKey() {
    throw (0, h.default)("WABaseNotification: must implement `buildKey` method");
  }
  getBannerOptions() {
    throw (0, h.default)("WABaseNotification: must implement `getBannerOptions` method");
  }
  getDefaultIcon() {
    throw (0, h.default)("WABaseNotification: must implement `getDefaultIcon` method");
  }
  matchesChat() {
    return false;
  }
  afterBannerShown() {}
  getChatKind() {
    throw (0, h.default)("WABaseNotification: must implement `getChatKind` method");
  }
  performLogging() {}
  triggerNotification() {
    var e = this;
    return (0, o.default)(function* () {
      if (yield e.shouldMute()) {
        throw new s.AbortError("Notification muted");
      }
      if (yield e.shouldSquelch()) {
        throw new s.AbortError("Notification squelched");
      }
      let t;
      if (yield e.shouldShowBanner()) {
        t = yield e.showBanner();
        e.afterBannerShown(t);
        e.performLogging();
      }
      if (yield e.shouldPlaySound()) {
        e.playSound();
      }
      return t;
    })();
  }
  showBanner() {
    var e = this;
    return (0, o.default)(function* () {
      __LOG__(2)`WABaseNotification: showing banner`;
      e.abortController = new r();
      const t = e.getBannerOptions();
      const n = yield (i = t.iconWid || t.wid, o = e.abortController.signal, p = e.getDefaultIcon(), (0, d.promiseTimeout)((0, c.default)(m.ProfilePicThumbCollection.find(i), o), 1500, "showNotificationTimeout").then(function (e) {
        var t;
        if (o.aborted) {
          throw new s.AbortError();
        }
        const n = (t = e == null ? undefined : e.img) !== null && t !== undefined ? t : p;
        return (0, g.cachePath)(n);
      }).catch((0, u.filteredCatch)(l.TimeoutError, function () {
        __LOG__(2)`NotificationBackend:IconLoadTimeoutError:${i.toString()}`;
        return (0, g.cachePath)(p);
      })));
      var i;
      var o;
      var p;
      if (e.abortController.signal.aborted) {
        throw new s.AbortError("Aborted through abortController");
      }
      if (window.Notification.permission !== _.PERMISSION_ALLOWED) {
        throw new s.AbortError("Permission Denied");
      }
      const h = new f.default((0, a.default)((0, a.default)({}, t), {}, {
        icon: n
      }));
      e.notificationBanner = h;
      return h;
    })();
  }
  playSound() {
    __LOG__(2)`WABaseNotification: playing sound`;
    (0, g.playNotification)();
  }
};