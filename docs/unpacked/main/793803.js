var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maybeSyncDeviceList = function () {
  return i.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/642569.js");
var l = require("../app/275909.js");
function i() {
  return (i = (0, r.default)(function* (e) {
    const t = yield (0, l.bulkGetDeviceRecord)(e);
    const n = e.filter((e, n) => {
      var a;
      return t[n] == null || ((a = t[n]) === null || a === undefined ? undefined : a.deleted);
    });
    if (n.length > 0) {
      __LOG__(2)`maybeSyncDeviceList: sync devices for ${n.length} out of ${e.length} requested wids`;
      yield (0, o.syncDeviceList)({
        wids: n,
        context: "message",
        phash: null
      });
    }
  })).apply(this, arguments);
}