Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateNewsletterChatRecords = function (e) {
  return (0, i.createNonPersistedJob)("updateNewsletterChatRecords", () => (0, a.getChatTable)().bulkCreateOrMerge(e), {
    priority: r.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted();
};
var r = require("./775593.js");
var i = require("./899137.js");
var a = require("./61229.js");