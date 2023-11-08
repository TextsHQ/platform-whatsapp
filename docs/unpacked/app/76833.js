var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processKeyBundles = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./418987.js");
var o = require("./138706.js");
var s = require("./999821.js");
var l = require("./76256.js");
var u = r(require("./556869.js"));
function c() {
  return (c = (0, i.default)(function* (e) {
    let t = null;
    let n = 0;
    let r = 0;
    const i = [];
    const c = [];
    e.forEach(e => {
      if (e instanceof Error) {
        __LOG__(3)`establishE2ESession: error: ${e}`;
        t = e;
      } else {
        if (e.wid.device != null && e.wid.device !== a.DEFAULT_DEVICE_ID) {
          c.push(e);
        } else {
          i.push(e);
        }
        if (!e.key) {
          n++;
        }
      }
    });
    if (i.length === 0 && c.length === 0) {
      throw (0, u.default)("establishE2ESession: no keys in the response");
    }
    try {
      const e = [...i, ...c].map(e => (0, s.createSignalAddress)(e.wid).toString());
      yield (0, l.getPersistSignalProtocolStore)().bulkLoadIdentityKey(e);
      __LOG__(2)`establishE2ESession: warmed up identity cache: ${e.length} records`;
    } catch (e) {
      __LOG__(3)`establishE2ESession: failed to warm up identity cache: ${e}`;
    }
    const d = e => o.Session.createSignalSession(e).then(() => {
      r++;
    }).catch(t => {
      __LOG__(3, undefined, undefined, true)`createSignalSession: failed for device ${e.wid} with error ${t}`;
      SEND_LOGS("createSignalSession-fail");
    });
    yield Promise.all(i.map(d));
    yield Promise.all(c.map(d));
    if (t != null) {
      throw t;
    }
    return {
      depletedPrekeyCount: n,
      processedPrekeyCount: r
    };
  })).apply(this, arguments);
}