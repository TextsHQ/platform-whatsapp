var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateBlockingStatusForPSAUser = function () {
  return l.apply(this, arguments);
};
exports.updateBlocklistDbJob = u;
var i = r(require("../vendor/348926.js"));
var a = require("./394190.js");
var o = require("./467750.js");
var s = r(require("./556869.js"));
function l() {
  return (l = (0, i.default)(function* (e) {
    const t = yield (0, a.getBlockingStatusForPSAUser)();
    try {
      if (t) {
        yield u(e, true);
        return true;
      } else {
        yield u(e, false);
        return false;
      }
    } catch (e) {
      __LOG__(4, true, new Error(), true)`failed to update blocking status of psa user`;
      SEND_LOGS("Failed to update blocking status of psa user");
      throw (0, s.default)("failed to update blocking status of psa user");
    }
  })).apply(this, arguments);
}
function u() {
  return c.apply(this, arguments);
}
function c() {
  return (c = (0, i.default)(function* (e, t) {
    const n = e.toString();
    try {
      if (t) {
        yield (0, o.getBlocklistTable)().createOrReplace({
          id: n
        });
      } else {
        yield (0, o.getBlocklistTable)().remove(n);
      }
    } catch (e) {
      __LOG__(4, true, new Error(), true)`updateBlocklistDbJob failed`;
      SEND_LOGS("Failed to update blocklist db");
      throw (0, s.default)("updateBlocklistDbJob failed");
    }
  })).apply(this, arguments);
}