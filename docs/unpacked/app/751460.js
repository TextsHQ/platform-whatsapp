Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iAmAdmin = a;
exports.iAmAdminOrOwner = function (e) {
  return i(e) || a(e);
};
exports.iAmGuest = function (e) {
  return (e == null ? undefined : e.membershipType) === r.NewsletterMembershipType.Guest;
};
exports.iAmOwner = i;
exports.iAmSubscriber = function (e) {
  return (e == null ? undefined : e.membershipType) === r.NewsletterMembershipType.Subscriber;
};
var r = require("./927531.js");
function i(e) {
  return (e == null ? undefined : e.membershipType) === r.NewsletterMembershipType.Owner;
}
function a(e) {
  return (e == null ? undefined : e.membershipType) === r.NewsletterMembershipType.Admin;
}