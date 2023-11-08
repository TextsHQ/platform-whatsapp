Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMexNewsletterSwitch = function () {
  if (a == null) {
    a = new i();
  }
  return a;
};
var r = require("./997074.js");
class i extends r.MexSwitch {
  constructor() {
    super("mex_newsletter_killswitch", "mex_newsletter_flags");
    this._newsletterMetadataByJIDTarget = (0, r.createValueForBitPosition)(1);
    this._newsletterMessageHistoryByJIDTarget = (0, r.createValueForBitPosition)(2);
    this._newsletterMetadataByInviteTarget = (0, r.createValueForBitPosition)(3);
    this._newsletterQueryAllSubscribedTarget = (0, r.createValueForBitPosition)(4);
    this._newsletterJoinTarget = (0, r.createValueForBitPosition)(5);
    this._newsletterLeaveTarget = (0, r.createValueForBitPosition)(6);
    this._newsletterCreationTarget = (0, r.createValueForBitPosition)(7);
    this._newsletterUpdateTarget = (0, r.createValueForBitPosition)(8);
    this._newsletterDeletionTarget = (0, r.createValueForBitPosition)(9);
    this._newsletterMuteTarget = (0, r.createValueForBitPosition)(10);
    this._newsletterUnmuteTarget = (0, r.createValueForBitPosition)(11);
    this._newsletterRecommendedTarget = (0, r.createValueForBitPosition)(12);
    this._newsletterSearchTarget = (0, r.createValueForBitPosition)(13);
  }
  isMexEnabledForNewsletterMetadataByJID() {
    return this.isMexEnabled(this._newsletterMetadataByJIDTarget);
  }
  isMexEnabledForNewsletterMessageHistoryByJID() {
    return this.isMexEnabled(this._newsletterMessageHistoryByJIDTarget);
  }
  isMexEnabledForNewsletterMetadataByInvite() {
    return this.isMexEnabled(this._newsletterMetadataByInviteTarget);
  }
  isMexEnabledForQueryAllNewsletters() {
    return this.isMexEnabled(this._newsletterQueryAllSubscribedTarget);
  }
  isMexEnabledForNewsletterJoin() {
    return this.isMexEnabled(this._newsletterJoinTarget);
  }
  isMexEnabledForNewsletterLeave() {
    return this.isMexEnabled(this._newsletterLeaveTarget);
  }
  isMexEnabledForNewsletterCreation() {
    return this.isMexEnabled(this._newsletterCreationTarget);
  }
  isMexEnabledForNewsletterUpdate() {
    return this.isMexEnabled(this._newsletterUpdateTarget);
  }
  isMexEnabledForNewsletterDeletion() {
    return this.isMexEnabled(this._newsletterDeletionTarget);
  }
  isMexEnabledForNewsletterMute() {
    return this.isMexEnabled(this._newsletterMuteTarget);
  }
  isMexEnabledForNewsletterUnmute() {
    return this.isMexEnabled(this._newsletterUnmuteTarget);
  }
  isMexEnabledForNewsletterRecommended() {
    return this.isMexEnabled(this._newsletterRecommendedTarget);
  }
  isMexEnabledForNewsletterSearch() {
    return this.isMexEnabled(this._newsletterSearchTarget);
  }
}
let a;