Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeMessageRecipientMixin = function (e, t) {
  const n = function (e) {
    const {
      messageTo: t
    } = e;
    return (0, r.smax)("message", {
      to: (0, a.USER_JID)(t)
    });
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./716358.js");