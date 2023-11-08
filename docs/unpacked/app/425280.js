var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pullNewsletterMessagesFromServer = function (e, t) {
  const n = (0, h.unproxy)(e);
  if (!n.isNewsletter) {
    __LOG__(4, undefined, new Error())`[pullNewsletterMessagesFromServer] not a newsletter`;
    return Promise.reject(new p.UnexpectedNonNewsletterChatError());
  }
  if (t.messageCount < 0) {
    return Promise.resolve([]);
  }
  return (0, s.default)([t.signal, n.deleteSignal].filter(Boolean), e => function () {
    return M.apply(this, arguments);
  }(n, (0, a.default)((0, a.default)({}, t), {}, {
    signal: e
  })));
};
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/81109.js"));
var o = require("./898817.js");
var s = r(require("./60748.js"));
var l = require("./35234.js");
var u = require("./955800.js");
var c = require("./692544.js");
var d = require("./570057.js");
var p = require("./287256.js");
var f = require("./570593.js");
var _ = require("./979842.js");
var g = require("./251309.js");
var m = require("./263318.js");
var h = require("./163139.js");
var y = require("./397516.js");
function E(e, t, n) {
  switch (t) {
    case "before":
      e.msgs.msgLoadState.isLoadingEarlierMsgs = n;
      break;
    case "after":
      e.msgs.msgLoadState.isLoadingRecentMsgs = n;
  }
}
function S(e, t, n) {
  if (t.length === 0) {
    return Promise.resolve();
  } else {
    return e.addQueue.enqueue(Promise.resolve().then(() => {
      e.msgs.add(t, n === "before" ? {
        at: 0
      } : undefined);
      if (n === "after") {
        var r;
        const n = Math.max.apply(null, t.map(e => e.t));
        e.t = Math.max((r = e.t) !== null && r !== undefined ? r : 0, n);
      }
    }));
  }
}
function v() {
  return T.apply(this, arguments);
}
function T() {
  return (T = (0, i.default)(function* (e, t) {
    const {
      unreadCount: n
    } = yield (0, l.getChatMeta)(e.id);
    if (!Number.isSafeInteger(t) || n < t) {
      return;
    }
    const r = Math.max(n - t, 0);
    yield (0, u.markConversationSeen)(e.id, r);
    yield (0, y.updateUnreadCountMD)(e, 0, false);
  })).apply(this, arguments);
}
function M() {
  return (M = (0, i.default)(function* (e, t) {
    if (t.signal.aborted) {
      throw new o.AbortError();
    }
    const {
      messageCount: n,
      cursor: r,
      shouldUpdateMsg: a
    } = t;
    const s = (0, _.createMessageHistoryRequestMetrics)({
      batchSize: n,
      chat: e
    });
    const l = r == null || r.after != null ? "after" : "before";
    e.id.toJid();
    const {
      isLoadingEarlierMsgs: u,
      isLoadingRecentMsgs: d
    } = e.msgs.msgLoadState;
    if (l === "before" && u) {
      return e.msgs.loadEarlierPromise;
    }
    if (l === "after" && d) {
      return e.msgs.loadRecentPromise;
    }
    E(e, l, true);
    try {
      const u = (0, m.toNewsletterJidOrThrow)(e.id.toJid());
      if (t.signal.aborted) {
        throw new o.AbortError();
      }
      const d = Promise.resolve().then((0, i.default)(function* () {
        if (!(s == null)) {
          s.startRequestDurationT();
        }
        const i = yield (0, f.getNewsletterMessages)(u, n, r);
        if (!(s == null)) {
          s.markRequestDurationT();
        }
        const d = a != null ? i.msgs.filter(a) : i.msgs;
        const p = d.map(c.msgModelFromMsgData);
        if (t.signal.aborted) {
          throw new o.AbortError();
        }
        if (p.length > 0) {
          if (!(s == null)) {
            s.startProcessingDurationT();
          }
          yield Promise.all([(0, g.addNewsletterMsgsRecords)(d), A(i), S(e, p, l)]);
          if (!(s == null)) {
            s.markProcessingDurationT();
          }
          if (t.resetUnreadCount === true) {
            yield v(e, p.length);
          }
        }
        E(e, l, false);
        if (s != null) {
          s.requestSuccessful = true;
        }
        return i.msgs.map(c.msgModelFromMsgData);
      }));
      if (l === "before") {
        e.msgs.loadEarlierPromise = d;
      } else if (l === "after") {
        e.msgs.loadRecentPromise = d;
      }
      return yield d;
    } catch (e) {
      __LOG__(4, undefined, new Error(), undefined, ["newsletter"])`[pullNewsletterMessagesFromServer] failed to pull newsletter messages from server`;
      if (s != null) {
        s.requestSuccessful = false;
      }
      throw e;
    } finally {
      if (!(s == null)) {
        s.commit();
      }
    }
  })).apply(this, arguments);
}
function A() {
  return b.apply(this, arguments);
}
function b() {
  return (b = (0, i.default)(function* (e) {
    const {
      reactions: t,
      pollVotes: r,
      timestamp: i
    } = e;
    yield (0, d.updateAddOnDbRecords)(e);
    const {
      NewsletterBridgeApi: a
    } = require("./549142.js");
    const o = t.map(e => e.parentMsgKey);
    return a.updateNewsletterMessages({
      reactions: t,
      ids: o,
      timestamp: i,
      pollVotes: r
    });
  })).apply(this, arguments);
}