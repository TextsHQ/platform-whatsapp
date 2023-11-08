var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatCollectionImpl = exports.ChatCollection = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/535937.js"));
var o = r(require("../vendor/639693.js"));
var s = r(require("../vendor/763105.js"));
var l = r(require("../vendor/435161.js"));
var u = r(require("../vendor/23279.js"));
var c = require("./423660.js");
var d = require("./392125.js");
var p = require("./547979.js");
var f = r(require("./345371.js"));
var _ = require("./391985.js");
var g = require("./79672.js");
var m = require("./445729.js");
var h = r(require("./293559.js"));
var y = r(require("./4780.js"));
var E = require("./806279.js");
var S = require("./939716.js");
var v = require("./787742.js");
var T = require("./682739.js");
var M = require("./226562.js");
var A = require("./38878.js");
var b = r(require("./53575.js"));
class C extends d.BaseCollection {
  constructor() {
    super();
    this.notSpam = {};
    this.promises = {
      sendUnstarAll: null
    };
    this._sortEnabled = false;
    this._viewOnceCleanupTaskQueue = new Set();
    this.enableSortListener();
    this.listenTo(A.Socket, "change:stream", () => {
      if (A.Socket.stream === M.SOCKET_STREAM.RESUMING) {
        this.forEach(e => {
          e.pendingMsgs = false;
        });
      }
    });
    this.listenToOnce(this, "sort", (0, u.default)(this.setIndexes, 100));
    this._scheduleViewOnceMediaCleanup();
  }
  _scheduleViewOnceMediaCleanup() {
    self.clearTimeout(this._viewOnceCleanupTimeout);
    this._viewOnceCleanupTimeout = self.setTimeout(() => {
      E.IdleCallbackTasks.enqueue(() => {
        this._runViewOnceMediaCleanup();
        this._scheduleViewOnceMediaCleanup();
      });
    }, 1800000);
  }
  _runViewOnceMediaCleanup() {
    this.forEach(e => {
      const t = e.id;
      if (!this._viewOnceCleanupTaskQueue.has(t)) {
        E.IdleCallbackTasks.enqueue(() => {
          this._viewOnceCleanupTaskQueue.delete(t);
          const e = this.get(t);
          if ((e == null ? undefined : e.active) === false) {
            e.deregisterExpiredViewOnceBulkMessages(e.msgs);
          }
        });
        this._viewOnceCleanupTaskQueue.add(t);
      }
    });
  }
  getUnreadCount() {
    return this.filter(e => e.showUnreadInTitle).length;
  }
  enableSortListener(e) {
    if (!this._sortEnabled) {
      this.listenTo(this, "change:t change:pin change:shouldAppearInList", this.sort);
      if (e) {
        this.sort();
      }
      this._sortEnabled = true;
    }
  }
  disableSortListener() {
    if (this._sortEnabled) {
      this.stopListening(null, null, this.sort);
      this._sortEnabled = false;
    }
  }
  setIndexes() {
    this.forEach((e, t) => {
      e.initialIndex = t;
    });
  }
  getActive() {
    return this.filter(e => e.active)[0];
  }
  unstarAllMessages(e, t) {
    return (0, T.unstarAllMessages)(e, t);
  }
  forwardMessagesToChats(e, t) {
    let r = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    return (0, i.default)(function* () {
      const a = Promise.all(e.map(e => (0, c.promiseProps)({
        message: e,
        canForward: (0, S.canForwardMsg)(e) && (require("./61113.js").MsgCollection.get(e.id) != null || (0, v.getIsEphemeral)(e))
      })));
      const u = yield Promise.all(t.filter(e => e.canSend).map(function () {
        var e = (0, i.default)(function* (e) {
          let t;
          t = e.isUser && e.contact.isContactBlocked ? (0, p.unblockContact)(e.contact) : Promise.resolve(true);
          const [n] = yield Promise.all([a, t]);
          const i = (0, l.default)((0, s.default)(n, {
            canForward: true
          }), "message");
          const o = (0, l.default)((0, s.default)(n, {
            canForward: false
          }), "message");
          return (0, c.promiseProps)({
            chat: e,
            undelivered: (0, _.forwardMessages)(e, i, true, r),
            canForward: i,
            cannotForward: o
          });
        });
        return function () {
          return e.apply(this, arguments);
        };
      }()));
      const d = (0, o.default)(u.map(e => {
        let {
          chat: t,
          undelivered: n,
          canForward: r,
          cannotForward: i
        } = e;
        let a = null;
        if (n.length || i.length) {
          a = (0, h.default)({
            chat: t,
            undelivered: n,
            canForward: r,
            cannotForward: i
          });
        }
        if (a) {
          return {
            chat: t,
            reason: a
          };
        } else {
          return null;
        }
      }));
      if (d.length) {
        throw new y.default(d);
      }
      return true;
    })();
  }
  saveToCache() {
    if (!m.Conn.shouldSaveToCache()) {
      return;
    }
    const {
      id: e
    } = C.cachePolicy;
    __LOG__(2)`ChatCollection:saveToCache save: ${String(e)}`;
    const t = this.map((e, t) => {
      const n = e.toJSON();
      const r = t < 20 ? Math.min(e.unreadCount + 20, 50) : Math.min(Math.max(3, e.unreadCount), 20);
      n.msgs = e.msgs ? e.msgs.slice(-r).map(e => (0, a.default)(e.toJSON(), e => e !== undefined)) : [];
      return n;
    });
    b.default.setCollection(e, t, true);
  }
  hasAnyUnreadSinceGivenTimestamp(e) {
    return this.length !== 0 && this.some(t => {
      var n;
      const r = (n = t.t) !== null && n !== undefined ? n : 0;
      return t.hasUnread && r > e;
    });
  }
  delete() {
    super.delete();
    this.listenToOnce(this, "sort", (0, u.default)(this.setIndexes, 100));
  }
}
exports.ChatCollectionImpl = C;
C.model = g.Chat;
C.comparator = f.default;
const P = new C();
exports.ChatCollection = P;