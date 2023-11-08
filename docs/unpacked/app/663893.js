var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdaterBase = undefined;
var i = require("./477689.js");
var a = require("./632157.js");
var o = r(require("./164325.js"));
var s = require("./508247.js");
var l = r(require("./395654.js"));
var u = r(require("./595307.js"));
var c = require("./233895.js");
var d = require("./673168.js");
var p = r(require("./584666.js"));
class f extends l.default {
  constructor() {
    super();
    this._forceUpdateOnTakeOver = false;
    this.latestUpdateIteration = 0;
    this.activeVersion = new c.Version(s.VERSION_BASE);
    p.default.onVersionChange(() => this.setForceUpdateOnTakeOver());
  }
  setForceUpdateOnTakeOver() {
    this._forceUpdateOnTakeOver = true;
  }
  shouldForceUpdateOnTakeOver() {
    const e = this._forceUpdateOnTakeOver;
    this._forceUpdateOnTakeOver = false;
    return !!e;
  }
  isExpired() {
    {
      const e = (0, d.getServerClientExpirationOverride)();
      const t = new c.Version((e == null ? undefined : e.appVersion) || "0.0.0");
      let n = Number((e == null ? undefined : e.timestamp) || 1 / 0);
      if (!t.equals(this.activeVersion)) {
        (0, d.clearServerClientExpirationOverride)();
        n = 1 / 0;
      }
      return (0, a.unixTime)() > n || (0, a.unixTime)() > Number(u.default);
    }
  }
  clearHardExpiration() {
    if (this.hardExpirationTimer) {
      o.default.clearTimeout(this.hardExpirationTimer);
      this.hardExpirationTimer = undefined;
    }
    this.stopListening(require("./973981.js").Stream, "change:couldForce");
  }
  update() {
    throw new i.UnimplementedMethod("Updater::update");
  }
  restart() {
    throw new i.UnimplementedMethod("Updater::restart");
  }
  manualDownload() {
    throw new i.UnimplementedMethod("Updater::manualDownload");
  }
  killServiceWorker() {
    throw new i.UnimplementedMethod("Updater::killServiceWorker");
  }
}
exports.UpdaterBase = f;