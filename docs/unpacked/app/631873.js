var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  if (!(0, l.default)(require("./478885.js")).supported) {
    return;
  }
  const t = e.estimateStorage === true;
  const r = (0, l.default)(require("./537152.js"));
  const p = (0, l.default)(require("./647349.js"));
  const f = navigator.serviceWorker;
  (0, s.detectWebpSupport)().then(t => {
    const n = (0, i.default)(e.keep, e => [e[a.default.RES.LOW], e[a.default.RES.HIGH]]).map(e => {
      var n;
      const r = (n = e[t && e[d] ? d : c]) === null || n === undefined ? undefined : n.split("/");
      if (r != null) {
        return r[r.length - 1];
      } else {
        return null;
      }
    });
    if (f == null ? undefined : f.controller) {
      r.request(f.controller, p.CLEAN_ASSETS, n).catch(() => {});
    }
  }).then(() => t ? (0, o.default)() : null).then(e => {
    if (e) {
      new u.WebcStorageStatWamEvent({
        webcStorageUsage: e.usage,
        webcStorageQuota: e.quota
      }).commit();
    }
  });
};
var i = r(require("../vendor/594654.js"));
var a = r(require("./861474.js"));
var o = r(require("./495976.js"));
var s = require("./868607.js");
var l = r(require("./97359.js"));
var u = require("./172493.js");
(0, r(require("../vendor/441143.js")).default)(true, "service worker builds only");
const c = "default";
const d = "webp";