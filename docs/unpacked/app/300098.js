var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadUploadCrashLogger = exports.ProgressType = undefined;
var i = r(require("./174285.js"));
var a = require("./937001.js");
const o = require("../vendor/76672.js").Mirrored(["DOWNLOAD_STARTED", "DOWNLOAD_FINISHED", "DOWNLOAD_DECRYPTION_STARTED", "DOWNLOAD_DECRYPTION_FINISHED", "DOWNLOAD_ERROR", "UPLOAD_STARTED", "UPLOAD_FINISHED", "UPLOAD_BLOB_TO_ARRAY_BUFFER_STARTED", "UPLOAD_BLOB_TO_ARRAY_BUFFER_FINISHED", "UPLOAD_ENCRYPTION_STARTED", "UPLOAD_ENCRYPTION_FINISHED", "UPLOAD_ERROR"]);
exports.ProgressType = o;
const s = "DownloadUploadCrashLoggerLikelyCrashed";
const l = new Set([o.DOWNLOAD_DECRYPTION_FINISHED, o.DOWNLOAD_ERROR, o.UPLOAD_FINISHED, o.UPLOAD_ERROR]);
const u = new class {
  constructor() {
    this.hasPerformedInit = false;
    this._clearAllStorage = () => {
      if (!(i.default === null || i.default === undefined)) {
        i.default.removeItem(s);
      }
    };
  }
  _getStorage() {
    const e = i.default === null || i.default === undefined ? undefined : i.default.getItem(s);
    if (e) {
      return JSON.parse(e);
    } else {
      return {};
    }
  }
  _commitStorage() {
    if (!(i.default === null || i.default === undefined)) {
      i.default.setItem(s, JSON.stringify(this.storage));
    }
  }
  _shouldLog() {
    return a.ServerProps.webLogUploadDownloadCrashes === true;
  }
  init() {
    if (!this.hasPerformedInit && this._shouldLog()) {
      window.addEventListener("beforeunload", this._clearAllStorage);
      this.storage = this._getStorage();
      Object.entries(this.storage).forEach(e => {
        let [t, {
          progressType: n,
          metadata: r
        }] = e;
        var i;
        var a;
        __LOG__(3, undefined, undefined, true)`downloadUploadCrashLogger.likelyCrashedDuring${(a = n, a.toLowerCase().replace(/(?:^|_)(\w)/g, (e, t) => t.toLocaleUpperCase()))}WithID${t}${r ? `AndData => ${(i = r, Object.entries(i).map(e => {
          let [t, n] = e;
          return `${t}: ${String(n)}`;
        }).join(", "))}` : ""}`;
        SEND_LOGS("download-upload-manager-likely-crashed");
      });
      this._clearAllStorage();
      this.hasPerformedInit = true;
    }
  }
  reset() {
    if (this._shouldLog()) {
      window.removeEventListener("beforeunload", this._clearAllStorage);
      this._clearAllStorage();
      this.hasPerformedInit = false;
    }
  }
  mark(e, t, n) {
    if (this._shouldLog()) {
      if (l.has(t)) {
        delete this.storage[String(e)];
      } else {
        this.storage[String(e)] = {
          progressType: t,
          metadata: n
        };
      }
      this._commitStorage();
    }
  }
}();
exports.downloadUploadCrashLogger = u;