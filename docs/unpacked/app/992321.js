var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processRenderableMessages = function () {
  return I.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./583464.js");
var s = require("./354458.js");
var l = require("./821732.js");
var u = require("./780549.js");
var c = require("./464989.js");
var d = require("./296079.js");
var p = require("./999425.js");
var f = require("./257845.js");
var _ = require("./764945.js");
var g = require("./812266.js");
var m = require("./390053.js");
var h = require("./326537.js");
var y = require("./525119.js");
var E = require("./959919.js");
var S = require("./612919.js");
var v = require("./60370.js");
var T = require("./601031.js");
var M = require("./115927.js");
var A = require("./819539.js");
var b = require("./191081.js");
var C = require("./536873.js");
function P() {
  return O.apply(this, arguments);
}
function O() {
  return (O = (0, a.default)(function* (e, t, n, r) {
    let a = e;
    if ((0, y.isMatFullyEnabled)()) {
      a = yield (0, S.processRenderableMatMessages)(e);
    }
    const l = yield (0, d.getPrivacyModeWhenSent)(t, n);
    const u = R(r);
    if (u != null) {
      a = a.map(e => (0, i.default)((0, i.default)({}, e), {}, {
        placeholderPopulationType: u
      }));
    }
    a = l == null ? a : a.map(e => (0, i.default)((0, i.default)({}, e), {}, {
      privacyModeWhenSent: l
    }));
    const c = t.addressingMode;
    a = c == null ? a : a.map(e => (0, i.default)((0, i.default)({}, e), {}, {
      groupAddressingMode: c
    }));
    a = yield (0, E.preProcessOrderEphemeralExemption)(a);
    if ((0, s.isBotReceiveEnabled)()) {
      a = a.map(e => {
        var t;
        const n = e.messageSecret != null ? (t = e.mentionedJidList) === null || t === undefined ? undefined : t.find(e => e.isBot()) : null;
        if (n != null) {
          return (0, i.default)((0, i.default)({}, e), {}, {
            invokedBotWid: n
          });
        } else {
          return e;
        }
      });
    }
    return (0, o.applyOrphanRevokes)(a);
  })).apply(this, arguments);
}
function I() {
  return (I = (0, a.default)(function* (e, t, n, r, i, a, o) {
    if (e.length !== 0) {
      try {
        const n = t.offline != null && !o;
        const d = yield P(e, t, r, a);
        if ((0, s.isBotReceiveEnabled)()) {
          let e = null;
          const t = (yield (0, A.getBotWaitlistStateFromIdb)()) === v.HistorySync$BotAIWaitListState.AI_AVAILABLE;
          d.forEach(n => {
            var r;
            var i;
            var a;
            const o = n.messageSecret;
            const s = Boolean(o && ((r = n.id.remote) === null || r === undefined ? undefined : r.isBot()));
            const l = (i = (a = n.invokedBotWid) === null || a === undefined ? undefined : a.isBot()) !== null && i !== undefined && i;
            if (o && (s || l) && n.isForwarded !== true) {
              if (l) {
                e = n.id.remote;
              }
              h.msmsgMsgSecretCache.addMsmsgMsgSecretToCache(n.id.toString(), o);
              if (!(t || n.id.fromMe !== true)) {
                (0, T.queryBotWaitlistState)();
              }
            }
            (0, M.isStatusPostingEnabled)();
          });
          if (e) {
            const t = yield (0, l.createSysMsgForIncomingBotInvoke)(e);
            if (t) {
              d.unshift(t);
            }
          }
        }
        if ((0, s.isBotEnabled)()) {
          const e = d.filter(e => Boolean(e.bizBotType));
          if (e.length) {
            const t = yield (0, p.handleBizBotMsgs)(e);
            d.unshift(...t);
          }
        }
        const f = yield (0, _.handlePrivacyModeChangeAndCreateChat)(d, t, r, i);
        const y = m.messageProcessorCache.addMessages(d.map(e => ({
          msg: e
        })), !n).then(() => {
          C.WorkerOfflineResumeReporter.updateProcessedMessageCount();
          if (!n) {
            return Promise.all(d.map(e => (0, c.processOrphansForNewMsg)(e, t)));
          }
        }).catch(e => {
          __LOG__(4, undefined, new Error(), true, ["messaging"])`processRenderableMessages write to DB from cache, failed with error: ${e}`;
          SEND_LOGS("processRenderableMessages write to DB from cache, failed", 1, "messaging");
        });
        if (u.Cmd.isMainStreamReadyMd || o) {
          if (u.Cmd.isOfflineDeliveryEnd) {
            yield y;
          }
          return (0, g.postprocessRenderableMessages)({
            msgInfo: t,
            messageOverwriteOption: a,
            preprocessedMessages: d,
            handlePrivacyModeChangeAfterMsgProcessing: f,
            isOffline: n
          });
        }
      } catch (e) {
        __LOG__(4, undefined, new Error(), true, ["messaging"])`processRenderableMessage: msgId:${t.externalId}, failed with error: ${e}`;
        SEND_LOGS("handle_msg: error storing/processing single message", 1, "messaging");
      }
      return Promise.resolve();
    }
  })).apply(this, arguments);
}
function R(e) {
  switch (e) {
    case f.MessageOverwriteOption.NO_OVERWRITE:
    case f.MessageOverwriteOption.FUTURE_PROOF:
      return null;
    case f.MessageOverwriteOption.RETRY:
      return b.PLACEHOLDER_POPULATION_TYPE.RETRY;
    case f.MessageOverwriteOption.PEER_RETRY:
      return b.PLACEHOLDER_POPULATION_TYPE.PEER_MESSAGE;
  }
}