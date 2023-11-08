var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TosManager = exports.TOS_3_ID = undefined;
var a = i(require("../vendor/348926.js"));
var o = require("./477689.js");
var s = require("./672076.js");
var l = require("./8304.js");
var u = require("./984330.js");
var c = require("./72696.js");
var d = require("./354458.js");
var p = require("./67988.js");
var f = require("./780549.js");
var _ = i(require("./395654.js"));
var g = require("./354516.js");
var m = require("./73225.js");
var h = require("./912513.js");
var y = require("./94872.js");
var E = require("./459857.js");
var S = i(require("./53575.js"));
const v = "20210210";
exports.TOS_3_ID = v;
class T extends (0, o.customError)("UnknownUserNoticeIdError") {
  constructor(e) {
    super(`Unknown user notice id: ${e}`);
  }
}
const M = {
  minTimeout: 1000,
  maxTimeout: 16000,
  retries: 5,
  signal: new r().signal
};
class A extends _.default {
  constructor() {
    super(...arguments);
    this._disclosureNoticeIds = [];
    this.botTosFetched = false;
    this._refreshInterval = h.DEFAULT_TOS_REFRESH_INTERVAL * 1000;
  }
  _getTosNoticeIds() {
    const e = [];
    if ((0, c.tosFetchEnabled)()) {
      e.push(v);
    }
    if ((0, d.isBotEnabled)()) {
      this.botTosFetched = true;
      e.push(p.BOT_AGENT_TOS_ID, p.BOT_INVOKE_TOS_ID);
    }
    if ((0, d.isBizBot1pEnabled)() || (0, d.isBizBot3pEnabled)()) {
      e.push(p.BIZ_BOT_TOS_ID);
    }
    return e;
  }
  _getAllNoticeIds() {
    return this._getTosNoticeIds().concat(this._disclosureNoticeIds);
  }
  _addDisclosureNoticeIds(e) {
    const t = new Set(this._disclosureNoticeIds.concat(e));
    this._disclosureNoticeIds = Array.from(t);
  }
  getState(e) {
    try {
      const t = this._getStoreKey(e);
      const n = S.default.getUser(t);
      if (typeof n != "string" || n !== "UNKNOWN" && n !== "NOT_ACCEPTED" && n !== "ACCEPTED") {
        return "UNKNOWN";
      } else {
        return n;
      }
    } catch (t) {
      if (!(t instanceof T)) {
        __LOG__(4, undefined, new Error(), true, ["tos-manager"])`Unexpected error when getting notice id state: ${e}`;
        SEND_LOGS("Unexpected error when getting notice id state", 1, "tos-manager");
      }
      return "UNKNOWN";
    }
  }
  setState(e, t) {
    if (this._disclosureNoticeIds.includes(e) || b() && this._getTosNoticeIds().includes(e)) {
      S.default.setUser(this._getStoreKey(e), t);
      this.trigger("change");
    } else {
      __LOG__(3)`ToS state manager unrecognized user notice id: ${e}`;
    }
  }
  run(e) {
    var t = this;
    return (0, a.default)(function* () {
      if (b() || (0, m.isNewsletterEnabled)()) {
        try {
          yield (0, s.exponentialBackoff)(M, (e, n) => t._query().catch(t => {
            if (t instanceof u.ServerStatusCodeError) {
              switch (t.statusCode) {
                case 500:
                  __LOG__(3)`ToS state manager query failed, retriable error: ${t.message}, failCount ${n}`;
                  return e(t);
              }
            }
            throw t;
          }));
        } catch (e) {
          __LOG__(4, true, new Error(), true)`ToS state manager state pull failed, error: ${e}`;
          SEND_LOGS("ToS state manager run failed");
          if (!(e instanceof u.ServerStatusCodeError && e.statusCode === 500)) {
            return;
          }
        }
        if ((e == null ? undefined : e.singleRun) !== true && t._getNoticeIdsToRun(t._getAllNoticeIds()).length > 0) {
          const e = (0, E.getMaybeMeUser)();
          yield (0, l.delayMs)(t._refreshInterval);
          if ((0, E.getMaybeMeUser)() === e) {
            t.run();
          }
        }
      }
    })();
  }
  _query() {
    var e = this;
    return (0, a.default)(function* () {
      if (!(0, E.getMaybeMeUser)()) {
        return;
      }
      const [t, n] = yield Promise.all([e._tosQuery(), e._disclosuresQuery()]);
      e._refreshInterval = Math.min(t.refresh, n.refresh) * 1000;
      const r = t.notice.concat(n.notice);
      const i = new Set(e._getAllNoticeIds());
      let a = false;
      r.filter(e => i.has(e.id)).forEach(t => {
        const n = t.state ? "ACCEPTED" : "NOT_ACCEPTED";
        const r = e._getStoreKey(t.id);
        if (S.default.getUser(r) !== n) {
          S.default.setUser(r, n);
          a = true;
        }
      });
      S.default.setUser(y.KEYS.TOS_STATE_FETCH_ITERATION, (0, c.tosFetchIteration)());
      if (a) {
        e.trigger("change");
      }
    })();
  }
  _getEmptyTosNoticeData() {
    return {
      refresh: h.DEFAULT_TOS_REFRESH_INTERVAL,
      notice: []
    };
  }
  _tosQuery() {
    if (!b()) {
      return Promise.resolve(this._getEmptyTosNoticeData());
    }
    const e = this._getNoticeIdsToRun(this._getTosNoticeIds());
    if (e.length > 0) {
      return (0, h.queryTosState)(e);
    } else {
      return Promise.resolve(this._getEmptyTosNoticeData());
    }
  }
  _disclosuresQuery() {
    if ((0, m.isNewsletterEnabled)()) {
      this.populateTosManagerNewsletterIds();
    }
    if (this._disclosureNoticeIds.length === 0) {
      return Promise.resolve(this._getEmptyTosNoticeData());
    } else {
      return (0, g.getUserDisclosuresAction)();
    }
  }
  _getNoticeIdsToRun(e) {
    const t = parseInt(S.default.getUser(y.KEYS.TOS_STATE_FETCH_ITERATION), 10) || 0;
    if ((0, c.tosFetchIteration)() > t) {
      return e;
    }
    const n = e.map(e => this.getState(e));
    return e.filter((e, t) => n[t] !== "ACCEPTED");
  }
  _getStoreKey(e) {
    if (new Set(this._getAllNoticeIds()).has(e)) {
      return `TOS_STATE_${e}`;
    }
    throw new T(e);
  }
  maybeUpdateServer(e) {
    var t = this;
    return (0, a.default)(function* () {
      if (b()) {
        try {
          const n = new Set(e);
          yield (0, s.exponentialBackoff)(M, (e, r) => {
            const i = t._getAcceptedNoticeIds(n);
            if (i.length > 0) {
              return (0, h.updateTosState)(i).catch(t => {
                if (t instanceof u.ServerStatusCodeError && t.statusCode === 500) {
                  __LOG__(3)`ToS state manager server session state update failed, retriable error: ${t.message}, failCount ${r}`;
                  return e(t);
                }
                throw t;
              });
            } else {
              return Promise.resolve();
            }
          });
        } catch (e) {
          __LOG__(4, true, new Error(), true)`ToS state manager server session state update failed, error: ${e}`;
          SEND_LOGS("ToS state manager server session state update failed");
        }
      }
    })();
  }
  _getAcceptedNoticeIds(e) {
    if ((0, E.getMaybeMeUser)()) {
      const t = this._getTosNoticeIds().map(e => this.getState(e));
      return this._getTosNoticeIds().filter((n, r) => t[r] === "ACCEPTED" && e.has(n));
    }
    return [];
  }
  resetAllState() {
    this._getAllNoticeIds().forEach(e => {
      S.default.setUser(this._getStoreKey(e), undefined);
    });
    (0, h.deleteTosState)(v);
  }
  resetState(e) {
    S.default.setUser(this._getStoreKey(e), undefined);
    (0, h.deleteTosState)(e);
  }
  populateTosManagerNewsletterIds() {
    this._addDisclosureNoticeIds([(0, m.getNewsletterConsumerTos)(), (0, m.getNewsletterProducerTos)()]);
  }
}
function b() {
  return (0, c.tosFetchEnabled)() || (0, d.isBizBot1pEnabled)() || (0, d.isBizBot3pEnabled)();
}
const C = new A();
exports.TosManager = C;
f.Cmd.on("bot_waitlist_state_updated", () => {
  if ((0, d.isBotEnabled)() && C.botTosFetched !== true) {
    C.run();
  }
});