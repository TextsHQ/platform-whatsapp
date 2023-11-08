var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restoreProfilePictures = function () {
  return d.apply(this, arguments);
};
var r = a(require("../vendor/81109.js"));
var o = a(require("../vendor/348926.js"));
var l = require("../app/147793.js");
var i = require("../app/446474.js");
var u = require("../app/316348.js");
var s = require("../app/555622.js");
var c = require("../app/829884.js");
function d() {
  return (d = (0, o.default)(function* () {
    self.performance.now();
    s.QPL.markerPoint(u.QuickLogMarkerId.OFFLINE_RESUME, "RestoreProfilePictures_start");
    const e = yield (0, c.getProfilePicThumbTable)().all();
    const t = [];
    const n = [];
    e.forEach(e => {
      if (i.ProfilePicThumbCollection.get(e.id) != null || i.ProfilePicThumbCollection.isProfilePicRefreshNeeded(e.timestamp)) {
        n.push(e.id);
      } else {
        t.push(e);
      }
    });
    if (n.length > 0) {
      (0, c.getProfilePicThumbTable)().bulkRemove(n);
    }
    const a = t.map(e => (0, r.default)((0, r.default)({}, (0, l.hydrateWids)(e)), {}, {
      stale: false,
      eurlStale: false
    }));
    i.ProfilePicThumbCollection.add(a, {
      silent: true,
      merge: false
    });
    s.QPL.markerPoint(u.QuickLogMarkerId.OFFLINE_RESUME, "RestoreProfilePictures_end");
  })).apply(this, arguments);
}