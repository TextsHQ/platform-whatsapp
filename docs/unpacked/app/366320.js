var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdaterImpl = exports.Updater = undefined;
var i = r(require("./164325.js"));
var a = r(require("./524173.js"));
var o = require("./222601.js");
var s = require("./663893.js");
var l = require("./956451.js");
var u = require("./233895.js");
var c = r(require("./478885.js"));
class d extends s.UpdaterBase {
  update(e, t, r) {
    __LOG__(2)`AppUpdate:update current: ${String(this.activeVersion)} latest: ${String(e)}`;
    const a = ++this.latestUpdateIteration;
    const o = e == null ? undefined : new u.Version(e);
    this.clearHardExpiration();
    const s = require("./973981.js").Stream;
    if (typeof r == "number") {
      this.hardExpirationTimer = i.default.setLocalTimeout(() => {
        s.clientExpired = true;
        return this._update(o).then(e => {
          if (e === l.DownloadState.UPDATE_DOWNLOADED) {
            this.restart();
          }
        });
      }, Date.now() + r);
    }
    this.updateInProgress = Promise.resolve(this.updateInProgress).then(() => this._update(o)).then(e => {
      this.updateInProgress = undefined;
      const n = a !== this.latestUpdateIteration;
      const i = e === l.DownloadState.ERROR;
      const o = e === l.DownloadState.UPDATE_NOT_AVAILABLE;
      if (!(n || i || o)) {
        if (!(t !== true && typeof r != "number")) {
          s.needsUpdate = true;
        }
        if (typeof r == "number") {
          this.listenToAndRun(s, "change:couldForce", () => {
            if (s.couldForce) {
              this.restart();
            }
          });
        }
      }
      return e;
    });
    return this.updateInProgress;
  }
  _update(e) {
    if (!this.activeVersion.equals(e) && (c.default === null || c.default === undefined ? undefined : c.default.alive)) {
      return (0, o.updateSw)();
    }
    const t = this.activeVersion.equals(e) ? l.DownloadState.UPDATE_NOT_AVAILABLE : l.DownloadState.UPDATE_DOWNLOADED;
    return Promise.resolve(t);
  }
  killServiceWorker() {
    if (!(c.default === null || c.default === undefined ? undefined : c.default.alive)) {
      return Promise.resolve();
    }
    const e = navigator.serviceWorker;
    if (e) {
      __LOG__(2)`Killing service worker`;
      return e.ready.then(e => e.unregister()).then(e => {
        __LOG__(2)`Service worker unregistration status: ${String(e)}`;
      });
    } else {
      return Promise.resolve();
    }
  }
  restart(e) {
    if (e === true) {
      return this.update(undefined, true, 0);
    } else {
      a.default.hardRefresh(undefined, false);
      return Promise.resolve(l.DownloadState.UPDATE_DOWNLOADED);
    }
  }
}
exports.UpdaterImpl = d;
const p = new d();
exports.Updater = p;