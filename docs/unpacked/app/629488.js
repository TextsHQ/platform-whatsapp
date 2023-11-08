var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeMessageDeliveryUpdates = function () {
  return s.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./418987.js");
var o = require("./787671.js");
function s() {
  return (s = (0, i.default)(function* (e, t) {
    var n;
    yield (0, o.updateNewsletterMessageDeliveryUpdates)((0, a.toNewsletterJid)(e.id.toString()), [], t.map(e => e.serverId).filter(Boolean));
    if (!((n = e.newsletterMetadata) === null || n === undefined)) {
      n.messageDeliveryUpdates.remove(t.map(e => e.id));
    }
  })).apply(this, arguments);
}