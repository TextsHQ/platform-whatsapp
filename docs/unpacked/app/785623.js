var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdCollectionImpl = exports.AdCollection = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./86569.js");
var o = require("./392125.js");
var s = require("./350864.js");
class l extends o.BaseCollection {
  constructor() {
    super(...arguments);
    this.loadingInfo = null;
  }
  loadAds(e) {
    var t = this;
    return (0, i.default)(function* () {
      if (t.loadingInfo != null && t.loadingInfo.pageId === e) {
        return t.loadingInfo.promise;
      }
      t.reset();
      const n = (0, s.fetchAds)(e).then(n => {
        if (n.type === "success") {
          t.set(n.ads.map(e => ({
            id: e.adId,
            ad: e
          })));
        } else {
          n.type;
        }
        t.trigger("ads-loaded", {
          result: n.type,
          pageId: e
        });
      }).finally(() => {
        t.loadingInfo = null;
      });
      t.loadingInfo = {
        promise: n,
        pageId: e
      };
      return n;
    })();
  }
}
exports.AdCollectionImpl = l;
l.model = a.AdModel;
const u = new l();
exports.AdCollection = u;