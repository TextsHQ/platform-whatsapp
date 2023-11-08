Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterRequest = function (e) {
  const t = (0, i.assertTag)(e, "message");
  if (!t.success) {
    return t;
  }
  const n = (0, r.parseNewsletterMessageWithJIDMixin)(e);
  if (!n.success) {
    return n;
  }
  return n;
};
var r = require("./581482.js");
var i = require("./686310.js");