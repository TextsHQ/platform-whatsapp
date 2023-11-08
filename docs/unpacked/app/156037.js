Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeNewsletterMessageRequestPayloadMixin = function (e, t) {
  const n = function (e) {
    const {
      messagesCount: t,
      beforeOrAfterMixinMixinGroupArgs: n
    } = e;
    return (0, i.optionalMerge)(a.mergeBeforeOrAfterMixinMixinGroup, (0, r.smax)("messages", {
      count: (0, o.INT)(t)
    }), n);
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./571762.js");
var o = require("./716358.js");