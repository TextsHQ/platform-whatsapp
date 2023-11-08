Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeNewsletterPollCreationMixin = function (e, t) {
  const n = function (e) {
    const {
      payloadMixinArgs: t
    } = e;
    return (0, a.mergeContentTypePollCreationMixin)((0, r.smax)("message", null, (0, o.mergePayloadMixin)((0, r.smax)("plaintext", null), t)));
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./774893.js");
var o = require("./303197.js");