var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maybeUpdateMsgsAddOns = function () {
  return f.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./418987.js");
var o = require("./632157.js");
var s = require("./287461.js");
var l = require("./73225.js");
var u = require("./696204.js");
var c = require("./787671.js");
var d = require("./787111.js");
var p = require("./263318.js");
function f() {
  return (f = (0, i.default)(function* (e, t) {
    t.id.toJid();
    if (e.length === 0) {
      return;
    }
    const r = e.filter(e => {
      var t;
      return ((t = e.serverId) !== null && t !== undefined ? t : 0) >= d.EARLIEST_AVAILABLE_MESSAGE_ID;
    });
    const i = Math.min(...r.map(e => {
      var t;
      if ((t = e.lastUpdateFromServerTs) !== null && t !== undefined) {
        return t;
      } else {
        return 0;
      }
    }));
    if (!_(i)) {
      return;
    }
    const o = Math.min(...r.map(e => e.serverId).filter(Boolean));
    if (Number.isSafeInteger(o)) {
      try {
        let e = o - 1;
        let a = 0;
        const s = [];
        for (; a < r.length;) {
          const n = Math.min(r.length - a, (0, l.getMaxMsgCountFromServer)());
          s.push((0, u.getNewsletterMessageUpdates)((0, p.toNewsletterJidOrThrow)(t.id.toJid()), {
            cursor: {
              after: e
            },
            count: n,
            since: i > 0 ? i : undefined,
            ids: r.map(e => e.id)
          }));
          e += n;
          a += n;
        }
        (yield Promise.all(s)).forEach(e => {
          const {
            NewsletterBridgeApi: t
          } = require("./549142.js");
          t.updateNewsletterMessages(e);
        });
      } catch (e) {
        if ((e == null ? undefined : e.status) === 423) {
          try {
            yield (0, c.suspendNewsletter)((0, a.toNewsletterJid)(t.id.toJid()));
            const {
              NewsletterBridgeApi: e
            } = require("./549142.js");
            e.suspendNewsletter({
              id: t.id
            });
          } catch (e) {
            __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter][maybeUpdateMsgsAddOns] Failed to suspend channel ${t.id.toString()} on receiving 423 error - ${e.name}`;
            return void SEND_LOGS("newsletter-maybe-update-msg-addons-suspend-error", 1, "newsletter");
          }
        } else if ((e == null ? undefined : e.status) === 451) {
          try {
            yield (0, c.geosuspendNewsletter)((0, a.toNewsletterJid)(t.id.toJid()));
            const {
              NewsletterBridgeApi: e
            } = require("./549142.js");
            e.geosuspendNewsletter({
              id: t.id
            });
          } catch (e) {
            __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter][maybeUpdateMsgsAddOns] Failed to geosuspend channel ${t.id.toString()} on receiving 451 error - ${e.name}`;
            return void SEND_LOGS("newsletter-maybe-update-msg-addons-geosuspend-error", 1, "newsletter");
          }
        }
        __LOG__(4, undefined, new Error(), undefined, ["newsletter"])`[maybeUpdateMsgsAddOns] Failed to update messages`;
      }
    }
  })).apply(this, arguments);
}
function _(e) {
  return !!Number.isSafeInteger(e) && (0, o.unixTime)() - e > (0, s.getABPropConfigValue)("channel_pull_message_updates_threshold_seconds");
}