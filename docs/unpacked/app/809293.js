var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DownloadAndDecryptCache = undefined;
exports.getLRUStoreKey = l;
var i = r(require("../vendor/348926.js"));
var a = require("./232294.js");
var o = require("./719621.js");
var s = r(require("./281007.js"));
function l(e) {
  var t;
  var n;
  const r = (t = e.progressiveJpegOpts) === null || t === undefined ? undefined : t.scanCount;
  const i = (n = e.progressiveJpegOpts) === null || n === undefined ? undefined : n.scanLengths;
  if (r != null && i) {
    return `${e.filehash}-${r}/${i.length}-scans`;
  }
  if (e.partialVideoOpts) {
    const {
      secondsToDownload: t
    } = e.partialVideoOpts;
    return `${e.filehash}-${t}-seconds`;
  }
  return e.filehash;
}
exports.DownloadAndDecryptCache = class {
  get(e, t) {
    return (0, i.default)(function* () {
      if (!(0, a.shouldUseLruMediaStore)(t.type)) {
        return null;
      }
      try {
        return yield o.LruMediaStore.get(l(t));
      } catch (e) {
        __LOG__(3, true)`downloadManager.asyncCache.get error:\n${(0, s.default)(e)}`;
        return null;
      }
    })();
  }
  set(e, t, n) {
    return (0, i.default)(function* () {
      if ((0, a.shouldUseLruMediaStore)(n.type)) {
        try {
          yield o.LruMediaStore.put(l(n), t);
        } catch (e) {
          __LOG__(3, true)`downloadManager.asyncCache.set error:\n${(0, s.default)(e)}`;
        }
      }
    })();
  }
};