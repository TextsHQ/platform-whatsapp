var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNewsletter = function (e) {
  return (0, g.createNonPersistedJob)("createNewsletter", () => (0, l.createNewsletterQuery)(e).then(function () {
    var e = (0, i.default)(function* (e) {
      if (e == null) {
        return null;
      }
      const {
        chat: t,
        metadata: n
      } = (0, c.mapNewsletterToModels)(e);
      try {
        const r = (0, p.genNewsletterCreationSystemMessages)({
          id: t.id,
          name: t.name,
          t: n.creationTime,
          role: n.membershipType
        });
        yield (0, _.updateNewsletterChatRecords)([(0, s.createNewsletterObjectForStorage)(t)]);
        yield (0, f.addNewsletterMsgsRecords)(r);
        yield (0, u.updateNewsletterMetadata)((0, d.createNewsletterMetadataObjectForStorage)(n));
        return {
          newsletter: e,
          msgs: r
        };
      } catch (e) {
        __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter][join-notification] Failed to update the db records`;
        SEND_LOGS("newsletter-join-notification-db-fail", 1, "newsletter");
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }()), {
    priority: o.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted();
};
exports.encodePicture = function (e) {
  if (e == null) {
    return null;
  }
  const t = m.default.parseDataURL(e).data;
  const n = (0, a.decodeB64)(t);
  return new Uint8Array(n);
};
var i = r(require("../vendor/348926.js"));
var a = require("./417405.js");
var o = require("./775593.js");
var s = require("./293056.js");
var l = require("./874705.js");
var u = require("./787671.js");
var c = require("./14291.js");
var d = require("./718561.js");
var p = require("./787111.js");
var f = require("./251309.js");
var _ = require("./108803.js");
var g = require("./899137.js");
var m = r(require("./79291.js"));