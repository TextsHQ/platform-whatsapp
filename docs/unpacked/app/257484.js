var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWidfromPath = function () {
  return l.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./984330.js");
var o = require("./262661.js");
var s = require("./669050.js");
function l() {
  return (l = (0, i.default)(function* (e) {
    try {
      const t = yield (0, o.getUserByCustomURL)(e);
      return (0, s.createUserWid)(t.user.jid);
    } catch (e) {
      if (e instanceof a.ServerStatusCodeError) {
        if (e.statusCode !== 404) {
          __LOG__(4, undefined, new Error(), true)`[custom-url] Error fetching user by custom url ${e.message}`;
          SEND_LOGS("get-user-by-custom-url-error");
        }
        return null;
      }
      throw e;
    }
  })).apply(this, arguments);
}