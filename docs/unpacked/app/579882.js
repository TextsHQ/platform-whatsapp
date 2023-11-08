Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseCompanionFinishResponseSuccess = function (e, t) {
  const n = (0, i.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const a = (0, r.parseIQResultResponseMixin)(e, t);
  if (!a.success) {
    return a;
  }
  return a;
};
var r = require("./948685.js");
var i = require("./686310.js");