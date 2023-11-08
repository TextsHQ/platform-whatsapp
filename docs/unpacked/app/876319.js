var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = require("./392125.js");
var a = require("./818454.js");
var o = require("./705080.js");
var s = r(require("./124928.js"));
var l = r(require("./556869.js"));
class u extends i.BaseCollection {
  constructor() {
    super(...arguments);
    this.byInviteCode = (0, a.aggregated)(e => e.inviteCode);
    this.findImpl = e => s.default.isNewsletter(e) ? Promise.resolve({
      id: e
    }) : (__LOG__(2)`newsletterMetadata:find trying to fetch non-newsletter wid ${e.toString()}`, Promise.reject((0, l.default)(`newsletterMetadata:find trying to fetch non-newsletter  wid ${e.toString()}`)));
  }
}
u.model = o.NewsletterMetadata;
u.staleCollection = true;
var c = new u();
exports.default = c;