var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PresenceCollectionImpl = exports.PresenceCollection = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./392125.js");
var o = require("./516269.js");
var s = require("./914003.js");
var l = r(require("./124928.js"));
class u extends a.BaseCollection {
  constructor() {
    var e;
    super(...arguments);
    e = this;
    this.findImpl = function () {
      var t = (0, i.default)(function* (t) {
        if (!(!e.gadd(t).isUser || l.default.isServer(t) || l.default.isPSA(t))) {
          yield e._subscribe(t);
        }
        return {
          id: t
        };
      });
      return function () {
        return t.apply(this, arguments);
      };
    }();
  }
  _subscribe(e) {
    return (0, i.default)(function* () {
      const t = require("./351053.js").ChatCollection.get(e);
      yield (0, o.subscribePresence)(e, t == null ? undefined : t.getTcToken());
    })();
  }
  reSubscribeWhenActive(e) {
    var t = this;
    return (0, i.default)(function* () {
      const n = t.get(e);
      if (n != null && n.isSubscribed !== false) {
        yield t._subscribe(e);
      }
    })();
  }
  clearAllPresence() {
    this.forEach(e => {
      e.reset();
      e.set({
        stale: true,
        isSubscribed: false
      });
    });
  }
}
exports.PresenceCollectionImpl = u;
u.model = s.Presence;
u.staleCollection = true;
const c = new u();
exports.PresenceCollection = c;