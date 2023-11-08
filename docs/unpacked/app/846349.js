Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGetNewsletterMessageUpdatesRequest = function (e) {
  const {
    messageUpdatesCount: t,
    messageUpdatesSince: n,
    messageUpdatesBeforeOrAfterMixinMixinGroupArgs: l
  } = e;
  return (0, o.mergeNewsletterIQGetRequestMixin)((0, i.smax)("iq", null, (0, a.mergeMessageUpdatesBeforeOrAfterMixinMixinGroup)((0, i.smax)("message_updates", {
    count: (0, s.INT)(t),
    since: (0, r.OPTIONAL)(s.INT, n)
  }), l)), e);
};
var r = require("./93864.js");
var i = require("./758616.js");
var a = require("./253805.js");
var o = require("./839021.js");
var s = require("./716358.js");