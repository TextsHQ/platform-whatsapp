var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkIfDomainIsPreviewable = function () {
  return u.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/73225.js");
var l = require("./840126.js");
var i = require("../app/163139.js");
function u() {
  return (u = (0, r.default)(function* (e, t) {
    if (!(t != null && (0, i.unproxy)(t).isNewsletter) || !(0, o.isNewsletterHideNewsUrlPreviewEnabled)()) {
      return true;
    }
    return yield (0, l.isDomainPreviewableAction)(e);
  })).apply(this, arguments);
}