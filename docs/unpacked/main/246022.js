Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeUnsubscribeNewsletterRequest = function (e) {
  return (0, r.mergeNewsletterIQSetRequestMixin)((0, a.smax)("iq", null, (0, a.smax)("unsubscribe", null)), e);
};
var a = require("../app/758616.js");
var r = require("../app/861479.js");