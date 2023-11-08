var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContactSyncRefreshSeconds = function () {
  var e;
  const t = (e = (0, a.default)(l.default, "localStorage").getItem(d.KEYS.CONTACT_SYNC_REFRESH)) !== null && e !== undefined ? e : 86400;
  return parseInt(t, 10);
};
exports.runSyncDirtyContactsJob = function () {
  return y.apply(this, arguments);
};
exports.syncNewContact = function (e) {
  g.push(e);
  if (_) {
    _.debounce(1000);
  } else {
    _ = new o.ShiftTimer(() => {
      if (!(0, p.isRegistered)()) {
        return;
      }
      const e = g;
      g = [];
      _ = null;
      __LOG__(2, undefined, undefined, undefined, ["contact-sync"])`start new contact sync for ${e.length} contacts`;
      (0, s.syncContactListInChunks)({
        contactIds: e,
        shouldDelayBetweenChunks: true
      }).catch(e => {
        __LOG__(4, true, new Error(), true, ["non-sad", "contact-sync"])`syncNewContact: contact sync failed, error: ${e}`;
        SEND_LOGS("syncNewContact: contact sync failed", 1, "non-sad", "contact-sync");
      });
    });
    _.onOrBefore(20000);
  }
};
var i = r(require("../vendor/348926.js"));
var a = r(require("./670983.js"));
var o = require("./685639.js");
var s = require("./588251.js");
var l = r(require("./174285.js"));
var u = require("./691195.js");
var c = require("./960523.js");
var d = require("./94872.js");
var p = require("./673168.js");
var f = require("./669050.js");
let _ = null;
let g = [];
function m() {
  return h.apply(this, arguments);
}
function h() {
  return (h = (0, i.default)(function* () {
    const e = (yield (0, u.getContactTable)().equals(["isContactSyncCompleted"], 0)).map(e => (0, f.createWid)(e.id));
    __LOG__(2, undefined, undefined, undefined, ["contact-sync"])`sync dirty contacts, found ${e.length} contacts to sync`;
    return (0, s.syncContactListInChunks)({
      contactIds: e,
      shouldDelayBetweenChunks: true
    });
  })).apply(this, arguments);
}
function y() {
  return (y = (0, i.default)(function* () {
    if (yield (0, p.getShouldCheckContactSyncStatus)()) {
      self.setTimeout(function () {
        m();
      }, 60000);
    }
    yield (0, c.setShouldCheckContactSyncStatus)();
  })).apply(this, arguments);
}