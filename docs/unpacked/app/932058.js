Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeNewsletterResponseError = function (e) {
  return (0, i.mergeCommonAckMixin)((0, r.smax)("ack", {
    error: "406"
  }), e);
};
var r = require("./758616.js");
var i = require("./382034.js");