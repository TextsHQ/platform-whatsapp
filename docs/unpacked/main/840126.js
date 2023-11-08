var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDomainPreviewableAction = function () {
  return l.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("./851770.js");
function l() {
  return (l = (0, r.default)(function* (e) {
    try {
      var t;
      const n = yield (0, o.mexFetchNewsletterIsDomainPreviewable)([e]);
      return (t = n == null ? undefined : n.get(e)) !== null && t !== undefined && t;
    } catch (e) {
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletters][isDomainPreviewableAction] Failed to get domain previewable status`;
      SEND_LOGS("newsletter-is-domain-previewable-action", 1, "newsletter");
      return false;
    }
  })).apply(this, arguments);
}