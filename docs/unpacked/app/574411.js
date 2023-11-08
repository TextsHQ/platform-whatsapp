var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restoreNewsletterMetadata = function () {
  return m.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./418987.js");
var o = require("./755688.js");
var s = require("./359987.js");
var l = require("./927531.js");
var u = require("./202917.js");
var c = r(require("./876319.js"));
var d = require("./876358.js");
var p = require("./669050.js");
function f(e) {
  switch (e) {
    case 0:
      return l.NewsletterMembershipType.Subscriber;
    case 1:
      return l.NewsletterMembershipType.Admin;
    case 3:
      return l.NewsletterMembershipType.Owner;
    case 2:
    default:
      return l.NewsletterMembershipType.Guest;
  }
}
function _(e) {
  switch (e) {
    case 0:
      return l.NewsletterReactionCodesSetting.All;
    case 3:
      return l.NewsletterReactionCodesSetting.None;
    case 2:
      return l.NewsletterReactionCodesSetting.Blocklist;
    case 1:
    default:
      return l.NewsletterReactionCodesSetting.Basic;
  }
}
function g(e) {
  switch (e) {
    case 1:
      return l.NewsletterPrivacy.Private;
    case 0:
    default:
      return l.NewsletterPrivacy.Public;
  }
}
function m() {
  return (m = (0, i.default)(function* () {
    try {
      (yield (0, d.getNewsletterMetadataTable)().all()).forEach(function () {
        var e = (0, i.default)(function* (e) {
          const t = (0, p.createWid)(e.id);
          const n = {
            id: t,
            creationTime: e.creationTime,
            name: e.name,
            nameUpdateTime: e.nameUpdateTime,
            description: e.description,
            descriptionUpdateTime: e.descriptionUpdateTime,
            handle: e.handle,
            inviteCode: e.inviteCode,
            size: e.size,
            verified: e.verified,
            membershipType: f(e.membershipType),
            reactionCodesSetting: _(e.reactionCodesSetting),
            privacy: g(e.privacy),
            website: e.website != null ? (0, o.findLink)(e.website) : null,
            suspended: e.suspended,
            geosuspended: e.geosuspended,
            terminated: e.terminated
          };
          if (!(c.default === null || c.default === undefined)) {
            c.default.add(n, {
              merge: true
            });
          }
          if (e.messageDeliveryUpdates != null) {
            const n = [];
            e.messageDeliveryUpdates.forEach((e, t) => n.push({
              id: t,
              code: e.code
            }));
            const {
              modelUpdatesToAdd: r
            } = yield (0, u.getMessageDeliveryUpdatesModelToUpdate)((0, a.toNewsletterJid)(e.id), n, []);
            yield (0, s.frontendFireAndForget)("updateNewsletterMessageDeliveryUpdate", {
              id: t,
              modelUpdatesToAdd: r,
              modelUpdatesToRemove: []
            });
          }
        });
        return function () {
          return e.apply(this, arguments);
        };
      }());
    } finally {}
  })).apply(this, arguments);
}