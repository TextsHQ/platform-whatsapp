var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsletterMetadata = undefined;
var i = require("./481173.js");
var a = require("./927531.js");
var o = r(require("./97359.js"));
var s = require("./382849.js");
var l = r(require("./621613.js"));
var u = require("./751460.js");
var c = r(require("./307455.js"));
var d = r(require("./124928.js"));
class p extends i.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, s.prop)();
    this.creationTime = (0, s.prop)();
    this.name = (0, s.prop)();
    this.nameUpdateTime = (0, s.prop)();
    this.description = (0, s.prop)();
    this.descriptionUpdateTime = (0, s.prop)();
    this.handle = (0, s.prop)();
    this.inviteCode = (0, s.prop)();
    this.size = (0, s.prop)();
    this.verified = (0, s.prop)();
    this.membershipType = (0, s.prop)();
    this.privacy = (0, s.prop)();
    this.website = (0, s.prop)();
    this.messageDeliveryUpdates = (0, s.collection)(c.default);
    this.reactionCodesSetting = (0, s.prop)();
    this.suspended = (0, s.prop)(false);
    this.geosuspended = (0, s.prop)(false);
    this.geosuspendedCountries = (0, s.collection)(l.default);
    this.terminated = (0, s.prop)(false);
    this.isSuspendedOrTerminated = (0, s.derived)(function () {
      return this.suspended || this.terminated;
    }, ["suspended", "terminated"]);
    this.canBeMuted = (0, s.derived)(function () {
      return this.membershipType !== a.NewsletterMembershipType.Guest;
    }, ["membershipType"]);
    this.isSubscribedOrOwned = (0, s.derived)(function () {
      return (0, u.iAmAdminOrOwner)(this) || (0, u.iAmSubscriber)(this);
    }, ["membershipType"]);
    this.isPreview = (0, s.derived)(function () {
      return this.membershipType === a.NewsletterMembershipType.Guest;
    }, ["membershipType"]);
  }
  getCollection() {
    return (0, o.default)(require("./876319.js"));
  }
}
p.Proxy = "newsletterMetadata";
p.idClass = d.default;
const f = (0, i.defineModel)(p);
exports.NewsletterMetadata = f;