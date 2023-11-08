var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return T.apply(this, arguments);
};
var a = i(require("../vendor/348926.js"));
var o = require("./477689.js");
var s = require("./434517.js");
var l = require("./347387.js");
var u = require("./287461.js");
var c = require("./780549.js");
var d = require("./188472.js");
var p = require("./659102.js");
var f = require("./643235.js");
var _ = require("./588237.js");
var g = require("./192498.js");
var m = require("./496956.js");
var h = require("./460148.js");
var y = require("./757453.js");
var E = require("./459857.js");
var S = require("./669050.js");
const v = new l.WapParser("successParser", e => {
  e.assertTag("success");
  return {
    ts: e.attrTime("t"),
    propsVersion: e.attrInt("props"),
    companionEncStatic: e.maybeAttrString("companion_enc_static") || "NULL",
    lid: e.maybeAttrString("lid"),
    displayName: e.maybeAttrString("display_name")
  };
});
function T() {
  return (T = (0, a.default)(function* (e) {
    var t;
    const n = v.parse(e);
    if (n.error) {
      __LOG__(4, undefined, new Error())`handleSuccess: failed to parse ${n.error}`;
      return Promise.reject(n.error);
    }
    const r = n.success;
    (0, g.updateClockSkew)(r.ts);
    (0, m.updateMeLid)(r.lid != null ? (0, S.createWid)(r.lid) : null);
    if (r.displayName != null) {
      (0, E.setMeDisplayName)(r.displayName);
    }
    c.Cmd.onTemporaryBan({
      banned: false
    });
    _.PassiveTaskManager.executePassiveTasks();
    (0, y.setOfflinePushDisabled)(false);
    const i = r.companionEncStatic;
    p.DbEncKeyStore.generateFinalDbEncryptionAndFtsKey(i);
    (0, d.generateFinalDbEncryptionAndFtsKeyForInvoker)(i);
    const a = yield (0, y.getServerPropsAttributes)();
    if (((t = a == null ? undefined : a.version) !== null && t !== undefined ? t : -1) < r.propsVersion) {
      yield (0, h.queryServerProps)();
    }
    if ((0, u.getABPropConfigValue)("web_enable_profile_pic_thumb_download_over_mms4")) {
      yield M(1000);
    }
  })).apply(this, arguments);
}
function M() {
  return A.apply(this, arguments);
}
function A() {
  return (A = (0, a.default)(function* (e) {
    try {
      yield (0, s.promiseTimeout)(f.mediaHosts.forceRefresh(new r().signal), e);
    } catch (e) {
      if (e instanceof o.TimeoutError) {
        __LOG__(2, undefined, undefined, true)`fetching mms4 hosts on startup exceeded timeout`;
        SEND_LOGS("mms4-fetch-host-timeout", 0);
      } else {
        __LOG__(4, undefined, new Error(), true)`fetching mms4 hosts on startup failed: ${e}`;
        SEND_LOGS("mms4-fetch-host-failed");
      }
    }
  })).apply(this, arguments);
}