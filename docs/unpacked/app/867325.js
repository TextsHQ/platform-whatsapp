Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeNewsletterMediaPublishMixin = function (e, t) {
  const n = function (e) {
    const {
      messageMediaId: t
    } = e;
    return (0, o.mergeNewsletterMediaMixin)((0, i.smax)("message", {
      media_id: (0, r.OPTIONAL)(s.CUSTOM_STRING, t)
    }), e);
  }(t);
  return (0, a.mergeStanzas)(e, n);
};
var r = require("./93864.js");
var i = require("./758616.js");
var a = require("./770006.js");
var o = require("./55782.js");
var s = require("./716358.js");