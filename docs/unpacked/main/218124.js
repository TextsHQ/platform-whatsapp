var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNewsletterPreviewData = function (e, t) {
  return (0, g.createNonPersistedJob)("getNewsletterPreviewData", (0, r.default)(function* () {
    const [n, {
      messages: a,
      timestamp: r
    }] = yield Promise.all([(0, f.queryNewsletterMetadataByInviteCode)(e, t), (0, c.queryNewsletterMessagesByInviteCode)(e, (0, s.getMaxMsgCountFromServer)())]);
    const o = n != null ? (0, E.createWid)(n == null ? undefined : n.idJid) : null;
    const {
      msgs: i,
      reactions: d,
      ids: p,
      pollVotes: m
    } = yield (0, u.getMsgsAndAddOnsFromUpdates)(a, (0, l.default)(o, "Unexpected null metadata"), r);
    return {
      newsletterMetadata: n,
      newsletterMessages: i,
      newsletterReactions: d,
      newsletterVotes: m,
      timestamp: r,
      ids: p
    };
  }), {
    priority: o.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted();
};
exports.persistPreviewNewsletterInfoInDb = function (e, t, n) {
  return (0, g.createNonPersistedJob)("persistPreviewNewsletterInfoInDb", (0, r.default)(function* () {
    yield (0, d.updateNewsletterMetadata)((0, p.createNewsletterMetadataObjectForStorage)(t));
    yield (0, h.updateNewsletterChatRecords)([(0, i.createNewsletterObjectForStorage)(e)]);
    yield (0, m.addNewsletterMsgsRecords)(n);
  }), {
    priority: o.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted();
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/775593.js");
var l = a(require("../app/670983.js"));
var i = require("../app/293056.js");
var u = require("../app/570057.js");
var s = require("../app/73225.js");
var c = require("../app/802213.js");
var d = require("../app/787671.js");
var f = require("../app/657987.js");
var p = require("../app/718561.js");
var m = require("../app/251309.js");
var h = require("../app/108803.js");
var g = require("../app/899137.js");
var E = require("../app/669050.js");