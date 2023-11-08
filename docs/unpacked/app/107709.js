var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReleaseChannel = function () {
  return s.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./614806.js");
var o = require("./757453.js");
function s() {
  return (s = (0, i.default)(function* () {
    if (yield (0, o.getWhatsAppWebExternalBetaJoinedIdb)()) {
      __LOG__(2)`[Web Beta] Enabling BETA features`;
      return a.ClientPayload$UserAgent$ReleaseChannel.BETA;
    } else {
      return a.ClientPayload$UserAgent$ReleaseChannel.RELEASE;
    }
  })).apply(this, arguments);
}