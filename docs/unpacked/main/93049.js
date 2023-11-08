var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restoreGroupsAndContacts = function () {
  f.QPL.markerPoint(d.QuickLogMarkerId.OFFLINE_RESUME, "RestoreGroupsAndContacts_start");
  return (0, c.initializeWithoutGKs)().then(() => {
    self.performance.now();
    f.QPL.markerPoint(d.QuickLogMarkerId.OFFLINE_RESUME, "RestoreContacts_start");
    const e = (0, p.getContactTable)().all().then(e => {
      e.forEach(e => {
        let {
          id: t,
          phoneNumber: n,
          phoneNumberCreatedAt: a
        } = e;
        if (g.default.isLid(t) && n != null && a != null) {
          (0, r.warmUpLidPnMapping)((0, E.createUserWid)(t, "lid"), (0, E.createUserWid)(n), a);
        }
      });
      i.ContactCollection.checksum = (0, h.getContactChecksum)() || "";
      i.ContactCollection.add(e.map(o.hydrateWids), {
        silent: true,
        merge: true
      });
      f.QPL.markerPoint(d.QuickLogMarkerId.OFFLINE_RESUME, "RestoreContacts_end");
    });
    f.QPL.markerPoint(d.QuickLogMarkerId.OFFLINE_RESUME, "RestoreGroups_start");
    const t = (0, m.getGroupMetadataTable)().all().then(e => {
      u.default.add(e.map(o.hydrateWids), {
        merge: true
      });
      e.forEach(e => {
        const t = (0, E.createWidFromWidLike)(e.id);
        if (e.isParentGroup === true) {
          l.ChatCollection.gadd({
            id: t,
            isReadOnly: false
          });
        }
        (0, s.updateSubject)(t, e.subject);
      });
      f.QPL.markerPoint(d.QuickLogMarkerId.OFFLINE_RESUME, "RestoreGroups_end");
    });
    return Promise.all([e, t]);
  }).then(() => {
    f.QPL.markerPoint(d.QuickLogMarkerId.OFFLINE_RESUME, "RestoreGroupsAndContacts_end");
  });
};
var r = require("../app/12643.js");
var o = require("../app/147793.js");
var l = require("../app/351053.js");
var i = require("../app/177938.js");
var u = a(require("../app/667845.js"));
var s = require("../app/853441.js");
var c = require("../app/535157.js");
var d = require("../app/316348.js");
var f = require("../app/555622.js");
var p = require("../app/691195.js");
var m = require("../app/98742.js");
var h = require("../app/15321.js");
var g = a(require("../app/124928.js"));
var E = require("../app/669050.js");