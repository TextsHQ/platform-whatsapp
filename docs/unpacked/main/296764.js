Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeNewsletterMixin = function (e, t) {
  const n = function (e) {
    const {
      receiptTo: t
    } = e;
    return (0, a.smax)("receipt", {
      to: (0, o.JID)(t)
    });
  }(t);
  return (0, r.mergeStanzas)(e, n);
};
var a = require("../app/758616.js");
var r = require("../app/770006.js");
var o = require("../app/716358.js");