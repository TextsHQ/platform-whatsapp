var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t, n, a) {
  const s = (0, u.default)();
  const [c, d] = (0, i.useState)([]);
  const [f, p] = (0, i.useState)(false);
  const m = o.ContactCollection.getMeContact();
  (0, i.useEffect)(() => {
    (0, r.default)(function* () {
      const {
        subscribers: r,
        hasMore: o
      } = yield (0, l.getNewsletterSubscribersAction)(e, t, n);
      if (!s.aborted && r != null) {
        if (m && a === true) {
          var i;
          const t = (i = e.newsletterMetadata) === null || i === undefined ? undefined : i.membershipType;
          r.unshift({
            contact: m,
            role: t
          });
        }
        d(r.slice(0, t));
        p(o);
      }
    })().catch(() => {
      __LOG__(4, undefined, new Error(), true)`[useNewsletterSubscribers] Failed to get subscribers for newsletter ${e.id}`;
      SEND_LOGS("newsletter-hook-failed-to-get-subscribers");
    });
  }, [e, t, s, n, m, a]);
  return [c, f];
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/177938.js");
var l = require("./396802.js");
var i = require("../vendor/667294.js");
var u = a(require("../app/895851.js"));