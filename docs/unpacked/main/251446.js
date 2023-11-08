var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAndSendAddonToChat = function (e) {
  return (0, l.createNonPersistedJob)("sendMessage", (0, r.default)(function* () {
    return (0, i.sendAddonRecord)(e);
  }), {
    priority: o.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted();
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/775593.js");
var l = require("../app/899137.js");
var i = require("../app/387183.js");