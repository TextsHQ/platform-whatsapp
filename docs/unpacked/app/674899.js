Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendBatchRequestIb = function (e) {
  __LOG__(2)`[offline-resume][adaptive] requesting ${e} offline stanzas.`;
  const t = (0, i.wap)("ib", null, (0, i.wap)("offline_batch", {
    count: (0, i.CUSTOM_STRING)(String(e))
  }));
  (0, r.deprecatedCastStanza)(t);
};
var r = require("./250281.js");
var i = require("./716358.js");