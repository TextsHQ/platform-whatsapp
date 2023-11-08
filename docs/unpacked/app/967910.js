var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserDisclosureCollectionImpl = exports.UserDisclosureCollection = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./392125.js");
var o = require("./705389.js");
var s = r(require("./892568.js"));
class l extends a.BaseCollection {
  constructor() {
    var e;
    super(...arguments);
    e = this;
    this.findImpl = function () {
      var t = (0, i.default)(function* (t) {
        var n;
        const r = e.get(t);
        if (r != null && r.privacyDisclosureModal != null && r.endDate != null && ((n = r.endDate) === null || n === undefined ? undefined : n.getTime()) > new Date().getTime() && new Date().getTime() - r.lastUpdated.getTime() < 86400000) {
          return r;
        }
        const i = yield (0, o.getDisclosuresContentAction)(parseInt(t, 10));
        if (i != null) {
          const t = new s.default({
            id: i.disclosureId,
            policyVersion: i.policyVersion,
            privacyDisclosureModal: i.privacyDisclosureModal,
            endDate: i.endDate,
            lastUpdated: new Date()
          });
          e.gadd(t, {
            merge: true
          });
          return t;
        }
      });
      return function () {
        return t.apply(this, arguments);
      };
    }();
  }
  updateNoticeStage(e, t, n) {
    var r = this;
    return (0, i.default)(function* () {
      const i = r.get(e);
      if (i) {
        i.accepted = t;
        i.lastUpdated = new Date();
        yield r.update(i);
      } else {
        const i = new s.default({
          id: e,
          policyVersion: n,
          accepted: t,
          lastUpdated: new Date()
        });
        r.gadd(i, {
          merge: true
        });
      }
    })();
  }
}
exports.UserDisclosureCollectionImpl = l;
l.model = s.default;
const u = new l();
exports.UserDisclosureCollection = u;