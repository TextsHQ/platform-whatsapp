Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeNewsletterRevokeMixin = function (e) {
  const t = (0, o.mergeContentTypeTextMixin)((0, a.mergeAdminRevokeMixin)((0, r.smax)("message", null, (0, r.smax)("plaintext", null))));
  return (0, i.mergeStanzas)(e, t);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./905336.js");
var o = require("./681692.js");