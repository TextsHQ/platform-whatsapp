var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useNewsletterReactionSenderList = function (e, t, n) {
  const [a, d] = (0, s.useState)(true);
  const [f, p] = (0, s.useState)(false);
  const [m, h] = (0, s.useState)([]);
  const [g, E] = (0, s.useState)(new Map());
  const v = (0, c.default)(o.default, "change:online", () => !o.default.online);
  const _ = (0, s.useCallback)(() => {
    (0, r.default)(function* () {
      if (!(0, l.isNewsletterReactionSenderListEnabled)(e, n) || v || f) {
        return;
      }
      const a = yield (0, i.getNewsletterMessageReactionSenderListAction)(e, t);
      if (a == null) {
        p(true);
        __LOG__(4, undefined, new Error(), true)`[useNewsletterReactionSenderList] Failed to get reaction senders for message ${t.id} from newsletter ${e.id}`;
        return void SEND_LOGS("newsletter-hook-failed-to-get-reaction-senders");
      }
      h((0, u.getContactReactionSenders)(a));
      E((0, u.getReactionSendersForFacePile)(a));
    })().finally(() => {
      d(false);
    });
  }, [e, t, n, v, f]);
  (0, s.useEffect)(() => _(), []);
  return [g, m, a, f, v, p, _];
};
var r = a(require("../vendor/348926.js"));
var o = a(require("../app/99398.js"));
var l = require("../app/73225.js");
var i = require("./556562.js");
var u = require("../app/257741.js");
var s = require("../vendor/667294.js");
var c = a(require("../app/524578.js"));