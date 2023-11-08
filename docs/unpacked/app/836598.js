Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeMessageUpdatesAfterMixinMixin = function (e, t) {
  const n = function (e) {
    const {
      messageUpdatesAfter: t
    } = e;
    return (0, r.smax)("message_updates", {
      after: (0, a.INT)(t)
    });
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./716358.js");