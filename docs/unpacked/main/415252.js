Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSubscribeNewsletterRequest = function (e) {
  return (0, r.mergeNewsletterIQSetRequestMixin)((0, a.smax)("iq", null, (0, a.smax)("subscribe", null)), e);
};
var a = require("../app/758616.js");
var r = require("../app/861479.js");