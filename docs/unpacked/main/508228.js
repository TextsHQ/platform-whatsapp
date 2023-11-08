var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useBusinessProfile = function (e, t) {
  const [n, a] = (0, i.useState)(() => e ? o.BusinessProfileCollection.get(e) : null);
  if (n && e && !n.id.equals(e)) {
    a(o.BusinessProfileCollection.get(e));
  }
  const c = (0, s.default)();
  (0, i.useEffect)(() => {
    (function () {
      var t = (0, r.default)(function* () {
        if (!e || !e.isUserNotPSA()) {
          return;
        }
        const t = l.ContactCollection.get(e);
        if (t && !t.isBusiness && !t.isEnterprise) {
          return;
        }
        const n = yield o.BusinessProfileCollection.find(e);
        if (!c.aborted) {
          a(n);
        }
      });
      return function () {
        return t.apply(this, arguments);
      };
    })()();
  }, [e]);
  return (0, u.useOptionalModelValues)(n, t != null ? t : []);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/778945.js");
var l = require("../app/177938.js");
var i = require("../vendor/667294.js");
var u = require("../app/655241.js");
var s = a(require("../app/895851.js"));