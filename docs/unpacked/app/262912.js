var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SERVER_POLLING_INTERVAL = undefined;
exports.pollMediaHosts = function () {
  return c.apply(this, arguments);
};
exports.shouldPollDownloadHosts = function (e, t) {
  return e === l.MEDIA_TYPES.DOCUMENT && (t != null ? t : 0) > s.THRESHOLD;
};
exports.shouldPollUploadHosts = function (e, t) {
  return e === l.MEDIA_TYPES.DOCUMENT && t > s.THRESHOLD;
};
var i = r(require("../vendor/348926.js"));
var a = require("./8304.js");
var o = r(require("./616144.js"));
var s = require("./101184.js");
var l = require("./708761.js");
const u = 300000;
function c() {
  return (c = (0, i.default)(function* (e) {
    let t = e.connectionBlock;
    yield (0, a.delayMs)(u, e.signal);
    return (0, o.default)(n => {
      let {
        retry: r
      } = n;
      return new Promise(n => e.getMediaHosts().then(i => {
        let {
          selectedHost: a,
          fallbackHost: o
        } = i;
        const l = {
          selectedHost: a,
          fallbackHost: o
        };
        const c = e.getRemainingBytes();
        if (c == null) {
          return r(u);
        }
        const {
          changed: d,
          host: p
        } = (0, s.maybeSwitchHost)(e.getHost(), t, l, c);
        t = l;
        if (d) {
          return n(p);
        } else {
          return r(u);
        }
      }));
    }, e.signal);
  })).apply(this, arguments);
}
exports.SERVER_POLLING_INTERVAL = u;