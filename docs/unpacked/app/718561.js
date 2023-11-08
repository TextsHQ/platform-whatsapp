Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNewsletterMetadataObjectForStorage = function (e) {
  const t = {
    id: e.id.toString()
  };
  if (e.creationTime != null) {
    t.creationTime = e.creationTime;
  }
  if (e.name != null) {
    t.name = e.name;
  }
  if (e.nameUpdateTime != null) {
    t.nameUpdateTime = e.nameUpdateTime;
  }
  if (e.description != null) {
    t.description = e.description;
  }
  if (e.descriptionUpdateTime != null) {
    t.descriptionUpdateTime = e.descriptionUpdateTime;
  }
  if (e.handle != null) {
    t.handle = e.handle;
  }
  if (e.inviteCode != null) {
    t.inviteCode = e.inviteCode;
  }
  if (e.size != null) {
    t.size = e.size;
  }
  if (e.verified != null) {
    t.verified = e.verified;
  }
  if (e.membershipType != null) {
    t.membershipType = a(e.membershipType);
  }
  if (e.privacy != null) {
    t.privacy = function (e) {
      switch (e) {
        case r.NewsletterPrivacy.Public:
          return 0;
        case r.NewsletterPrivacy.Private:
          return 1;
      }
    }(e.privacy);
  }
  var n;
  if (e.website != null) {
    t.website = (n = e.website) === null || n === undefined ? undefined : n.href;
  }
  if (e.reactionCodesSetting != null) {
    t.reactionCodesSetting = e.reactionCodesSetting;
  }
  if (e.suspended != null) {
    t.suspended = e.suspended;
  }
  if (e.geosuspended != null) {
    t.geosuspended = e.geosuspended;
  }
  if (e.terminated != null) {
    t.terminated = e.terminated;
  }
  return t;
};
exports.mapNewsletterMembershipTypeForStorage = a;
var r = require("./927531.js");
var i = require("./126392.js");
function a(e) {
  switch (e) {
    case r.NewsletterMembershipType.Subscriber:
      return i.NewsletterDBMembership.Subscriber;
    case r.NewsletterMembershipType.Admin:
      return i.NewsletterDBMembership.Admin;
    case r.NewsletterMembershipType.Guest:
      return i.NewsletterDBMembership.Guest;
    case r.NewsletterMembershipType.Owner:
      return i.NewsletterDBMembership.Owner;
  }
}