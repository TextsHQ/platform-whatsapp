Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parsePublishViewResponseSuccess = function (e, t) {
  const n = (0, r.assertTag)(e, "ack");
  if (!n.success) {
    return n;
  }
  const o = (0, a.parsePublishSuccessMixin)(e, t);
  if (!o.success) {
    return o;
  }
  return o;
};
var a = require("./201009.js");
var r = require("../app/686310.js");