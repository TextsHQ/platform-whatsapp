Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSubscribeNewsletterResponseClientError = function (e, t) {
  const n = (0, o.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const l = (0, r.parseSubscribeNewsletterClientErrors)(e, t);
  if (!l.success) {
    return l;
  }
  return (0, a.makeResult)({
    subscribeNewsletterClientErrors: l.value
  });
};
var a = require("../app/135781.js");
var r = require("./232673.js");
var o = require("../app/686310.js");