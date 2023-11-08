var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return E.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./632157.js");
var o = require("./359987.js");
var s = require("./780549.js");
var l = require("./257845.js");
var u = require("./185796.js");
var c = require("./970114.js");
var d = require("./212369.js");
var p = require("./390053.js");
var f = require("./412985.js");
var _ = require("./73225.js");
var g = r(require("./742887.js"));
var m = require("./220439.js");
var h = require("./359484.js");
var y = require("./536873.js");
function E() {
  return (E = (0, i.default)(function* (e) {
    try {
      const {
        msg: t,
        ack: n,
        type: r
      } = (0, g.default)(e);
      if (!(0, _.isNewsletterEnabled)()) {
        return n;
      }
      const c = (0, a.unixTimeMs)();
      if (t.offline) {
        h.OfflineMessageHandler.addOfflinePendingMessage();
        h.OfflineMessageHandler.offlineStanzaReceivedAfterComplete();
      }
      if (h.OfflineMessageHandler.isResumeFromRestartComplete()) {
        t.offline = false;
      }
      return yield (0, f.handleMessage)(t.from.toString(), t.offline, (0, i.default)(function* () {
        const e = (0, a.unixTimeMs)();
        const {
          msgData: i,
          isOrphan: f
        } = yield (0, m.preprocessNewsletterMsg)(t, r);
        const _ = r !== "reaction" && r !== "pollVote" ? p.messageProcessorCache.addMessages([{
          msg: i
        }], !t.offline).then(() => {
          y.WorkerOfflineResumeReporter.updateProcessedMessageCount();
          (0, d.logReceivedMessagesInWAM)([i], t.offline, t.t * 1000, c, e);
        }).catch(() => {
          __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter] Failed to handle newsletter message`;
          SEND_LOGS("newsletter-failed-to-store-incoming-message", 1, "newsletter");
        }) : Promise.resolve();
        yield (0, u.maybeHandleNewsletterMsgAddOns)(i, {
          pollVotes: t.pollVote
        });
        if (s.Cmd.isMainStreamReadyMd) {
          if (s.Cmd.isOfflineDeliveryEnd) {
            yield _;
          }
          (0, o.frontendFireAndForget)("updateNewsletterMessageUI", {
            chatID: t.from,
            msg: i,
            isOrphan: f
          });
        }
        if (t.offline) {
          h.OfflineMessageHandler.processMessageDecryptResult(l.E2EProcessResult.SUCCESS);
          return void p.messageProcessorCache.addMessages([{
            receiptInfo: {
              externalId: t.id,
              from: t.from,
              author: t.from
            }
          }]).catch(() => {
            __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter] Failed to handle newsletter offline ack`;
            SEND_LOGS("newsletter-failed-to-store-offline-ack", 1, "newsletter");
          });
        } else {
          return n;
        }
      }));
    } catch (t) {
      (0, c.handleNewsletterMsgError)(t, {
        stanza: e
      });
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter] Failed to handle newsletter message`;
      SEND_LOGS("failed-handle-newsletter-message", 1, "newsletter");
      throw t;
    }
  })).apply(this, arguments);
}