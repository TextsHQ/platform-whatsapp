var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addSmartDefaults = function () {
  (function () {
    const e = o.QuickReplyTypes.PROFILE_SMART_DEFAULT;
    const t = function () {
      const e = i.ContactCollection.getMeContact();
      if (e) {
        const t = o.QuickReplyTypes.PROFILE_SMART_DEFAULT;
        return new s.default({
          id: t,
          shortcut: u.fbt._("profile", null, {
            hk: "10UPRT"
          }).toString(),
          message: (0, a.getDisplayName)(e),
          count: -1,
          keywords: []
        });
      }
    }();
    const r = require("./193991.js").QuickReplyCollection;
    if (r.get(e)) {
      if (t) {
        r.add({
          id: e,
          message: t.message
        }, {
          merge: true
        });
      }
    } else if (t) {
      r.add(t, {
        merge: true
      });
    }
  })();
  (function () {
    const e = o.QuickReplyTypes.ADDRESS_SMART_DEFAULT;
    const t = function () {
      const e = require("./778945.js").BusinessProfileCollection.get((0, l.getMaybeMeUser)());
      if ((e == null ? undefined : e.latitude) || (e == null ? undefined : e.longitude) || (e == null ? undefined : e.address)) {
        const t = o.QuickReplyTypes.ADDRESS_SMART_DEFAULT;
        const n = e.address || u.fbt._("Map Location", null, {
          hk: "3wlwI4"
        });
        return new s.default({
          id: t,
          shortcut: u.fbt._("address", null, {
            hk: "38K1PS"
          }).toString(),
          message: u.fbt._("{pinEmoji} {address}", [u.fbt._param("pinEmoji", "📍"), u.fbt._param("address", n)], {
            hk: "huwFP"
          }).toString(),
          count: -1,
          keywords: []
        });
      }
    }();
    const r = require("./193991.js").QuickReplyCollection;
    if (r.get(e)) {
      if (t) {
        r.add({
          id: e,
          message: t.message
        }, {
          merge: true
        });
      }
    } else if (t) {
      r.add(t, {
        merge: true
      });
    }
  })();
  (function () {
    const e = o.QuickReplyTypes.HOURS_SMART_DEFAULT;
    const t = function () {
      var e;
      const t = require("./778945.js").BusinessProfileCollection;
      const r = require("./542358.js").quickReplyHoursStr;
      const i = t.get((0, l.getMaybeMeUser)());
      if (i == null || (e = i.businessHours) === null || e === undefined ? undefined : e.config) {
        const e = o.QuickReplyTypes.HOURS_SMART_DEFAULT;
        const t = r(i.businessHours);
        return new s.default({
          id: e,
          shortcut: u.fbt._("hours", null, {
            hk: "1WmWJY"
          }).toString(),
          message: t,
          count: -1,
          keywords: []
        });
      }
    }();
    const r = require("./193991.js").QuickReplyCollection;
    if (r.get(e)) {
      if (t) {
        r.add({
          id: e,
          message: t.message
        }, {
          merge: true
        });
      }
    } else if (t) {
      r.add(t, {
        merge: true
      });
    }
  })();
};
var i = require("./177938.js");
var a = require("./714574.js");
var o = require("./174619.js");
var s = r(require("./582492.js"));
var l = require("./459857.js");
var u = require("../vendor/548360.js");