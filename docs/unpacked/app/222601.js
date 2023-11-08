Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSw = function () {
  {
    __LOG__(2)`WAWebSwUpdater: sw update starts. Current app version: ${String(new a.Version(r.VERSION_BASE))}`;
    const e = navigator.serviceWorker;
    if (e) {
      return e.ready.then(t => new Promise(n => {
        function r(e) {
          o();
          __LOG__(4, undefined, new Error(), true)`Unable to update service worker to version. Error: ${String(e)}`;
          SEND_LOGS("sw-update-failed");
        }
        function a() {
          __LOG__(2)`WAWebSwUpdater: sw updated`;
          o();
          n(i.DownloadState.UPDATE_DOWNLOADED);
        }
        function o() {
          e.removeEventListener("error", r);
          e.removeEventListener("controllerchange", a);
        }
        e.addEventListener("error", r);
        e.addEventListener("controllerchange", a);
        t.update().then(() => {
          if (!t.installing) {
            __LOG__(2)`WAWebSwUpdater: sw update is not available`;
            n(i.DownloadState.UPDATE_NOT_AVAILABLE);
          }
        }).catch(e => {
          r(e);
          n(i.DownloadState.ERROR);
        });
      })).catch(e => {
        __LOG__(4, undefined, new Error(), true)`Unable to update serviceworker, error: ${e}`;
        SEND_LOGS("sw-update-failed");
        return i.DownloadState.ERROR;
      });
    }
  }
  return Promise.resolve(i.DownloadState.ERROR);
};
var r = require("./508247.js");
var i = require("./956451.js");
var a = require("./233895.js");