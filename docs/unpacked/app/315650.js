Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubscriptionCollection = undefined;
var r = require("./392125.js");
var i = require("./505148.js");
class a extends r.BaseCollection {
  initializeFromCache(e) {
    this.add(e, {
      merge: true
    });
  }
}
a.model = i.Subscription;
const o = new a();
exports.SubscriptionCollection = o;