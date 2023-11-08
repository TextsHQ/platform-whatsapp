var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deletePreviewNewsletters = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./359987.js");
var o = require("./927531.js");
var s = require("./362626.js");
var l = require("./718561.js");
var u = require("./876358.js");
var c = require("./669050.js");
const d = (0, l.mapNewsletterMembershipTypeForStorage)(o.NewsletterMembershipType.Guest);
function p() {
  return (p = (0, i.default)(function* () {
    const e = yield (0, a.frontendSendAndReceive)("getActiveNewsletter");
    const t = e == null ? undefined : e.toJid();
    const n = (yield (0, u.getNewsletterMetadataTable)().all()).filter(e => e.membershipType === d && e.id !== t).map(e => e.id);
    yield (0, s.bulkDeleteNewsletterChats)(n.map(c.createWid));
  })).apply(this, arguments);
}