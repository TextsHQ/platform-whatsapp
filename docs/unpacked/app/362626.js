var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bulkDeleteNewsletterChats = function () {
  return u.apply(this, arguments);
};
exports.deleteNewsletterChat = function (e) {
  return (0, s.createNonPersistedJob)("deleteNewsletterChat", () => e.isNewsletter() ? (0, a.deleteFromStorage)(e) : (__LOG__(4, undefined, new Error(), true, ["newsletter"])`[deleteNewsletterChat][job] Trying to delete a non-newsletter chat`, SEND_LOGS("delete-non-newsletter-chat", 1, "newsletter"), Promise.resolve())).waitUntilCompleted();
};
var i = r(require("../vendor/348926.js"));
var a = require("./125409.js");
var o = require("./424091.js");
var s = require("./899137.js");
var l = require("./876358.js");
function u() {
  return (u = (0, i.default)(function* (e) {
    const t = e.map(e => e.toJid());
    yield Promise.all(e.map(e => (0, o.deleteNewsletterMessageAddOns)(e)));
    yield Promise.all(e.map(e => (0, a.deleteFromStorage)(e)));
    yield (0, l.getNewsletterMetadataTable)().bulkRemove(t);
  })).apply(this, arguments);
}