var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CTWASuggestionCollectionImpl = exports.CTWASuggestionCollection = undefined;
var r = a(require("../vendor/81109.js"));
var o = require("../app/632157.js");
var l = require("../app/392125.js");
var i = require("./87989.js");
class u extends l.BaseCollection {
  findFirstNotExpired() {
    return this.findFirst(e => (0, o.isInFuture)(e.suggestion.expiresAt));
  }
  removeInteracted(e) {
    this.remove(e);
  }
  updateTrackingNuxData(e, t) {
    const n = this.get(e);
    if (n != null) {
      n.set("suggestion", (0, r.default)((0, r.default)({}, n.suggestion), {}, {
        nuxData: t
      }));
    }
  }
  updateTrackingCoolOffData(e, t) {
    const n = this.get(e);
    if (n != null) {
      n.set("suggestion", (0, r.default)((0, r.default)({}, n.suggestion), {}, {
        coolOffData: t
      }));
    }
  }
}
exports.CTWASuggestionCollectionImpl = u;
u.model = i.CTWASuggestionModel;
const s = new u();
exports.CTWASuggestionCollection = s;