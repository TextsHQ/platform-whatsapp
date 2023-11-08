Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeNewsletterRequest = function (e) {
  const {
    messageTo: t,
    clientNewsletterOrNewsletterAndServerIDMixinGroupArgs: n
  } = e;
  return (0, i.mergeClientNewsletterOrNewsletterAndServerIDMixinGroup)((0, r.smax)("message", {
    to: (0, a.JID)(t)
  }), n);
};
var r = require("./758616.js");
var i = require("./199324.js");
var a = require("./716358.js");