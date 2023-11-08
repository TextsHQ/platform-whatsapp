var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleanInvalidLidSignalSessions = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./287461.js");
var o = require("./12643.js");
var s = require("./138706.js");
var l = require("./757453.js");
function u() {
  return (u = (0, i.default)(function* () {
    if ((0, l.getExistingLidSignalSessionIsCleaned)()) {
      return;
    }
    if (!(0, a.getABPropConfigValue)("pnh_sync_identity_keys_and_devices")) {
      return;
    }
    const e = (0, o.getAllLidContacts)();
    __LOG__(2)`CleanInvalidLidSignalSessions: lid contacts (${e.length})`;
    let t = 0;
    const n = yield s.Session.hasSignalSessions(e);
    yield Promise.all(n.map((n, r) => {
      if (n) {
        t++;
        return s.Session.deleteRemoteInfo(e[r]);
      }
    }));
    __LOG__(2)`CleanInvalidLidSignalSessions: removed ${t} sessions`;
    (0, l.markExistingLidSignalSessionIsCleaned)();
  })).apply(this, arguments);
}