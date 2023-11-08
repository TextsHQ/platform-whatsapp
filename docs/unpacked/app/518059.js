var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mexGetAbout = function () {
  return u.apply(this, arguments);
};
var i;
var a = r(require("../vendor/348926.js"));
var o = require("./123982.js");
var s = require("./561225.js");
var l = r(require("./124928.js"));
function u() {
  return (u = (0, a.default)(function* (e) {
    if (!l.default.isWid(e) || !e.isUser()) {
      __LOG__(4, undefined, new Error(), true, ["mex", "about_status"])`[mex][about_status] this method should only take user wid, instead it received: ${e}`;
      SEND_LOGS("mex-about-status-wrong-wid", 1, "mex", "about_status");
      return Promise.resolve({
        id: e
      });
    }
    const t = i !== undefined ? i : i = require("./669859.js");
    const r = {
      user_id: e.user
    };
    try {
      var a;
      var u;
      var c;
      const n = (a = (yield (0, o.fetchQuery)(t, r)).xwa2_users_updates_since) === null || a === undefined ? undefined : a[0];
      if (n == null) {
        __LOG__(4, undefined, new Error(), true, ["mex", "about_status"])`[mex][about_status] empty return list`;
        SEND_LOGS("mex-about-status-empty-return-list", 1, "mex", "about_status");
      }
      return {
        id: e,
        status: n == null || (u = n.updates) === null || u === undefined || (c = u[0]) === null || c === undefined ? undefined : c.text
      };
    } catch (t) {
      if (t instanceof s.MexIqError) {
        return {
          id: e,
          isIQError: true,
          error: {
            errorCode: t.code,
            errorText: t.message
          }
        };
      }
      if (t instanceof s.MexFatalExtensionError) {
        return {
          id: e,
          isIQError: false,
          error: {
            errorCode: t.error.extensions.error_code,
            errorText: t.error.message
          }
        };
      }
      throw t;
    }
  })).apply(this, arguments);
}