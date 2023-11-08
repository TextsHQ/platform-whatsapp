var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusV3CollectionImpl = exports.StatusV3Collection = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/441609.js"));
var o = r(require("../vendor/763105.js"));
var s = r(require("../vendor/112297.js"));
var l = require("./418987.js");
var u = require("./632157.js");
var c = require("./287461.js");
var d = require("./392125.js");
var p = require("./660666.js");
var f = require("./374100.js");
var _ = r(require("./756680.js"));
var g = require("./61113.js");
var m = require("./430231.js");
var h = r(require("./735151.js"));
var y = require("./459857.js");
var E = require("./164768.js");
var S = require("./150164.js");
var v = require("./669050.js");
class T extends d.BaseCollection {
  constructor() {
    super(...arguments);
    this.findImpl = e => Promise.resolve({
      id: e
    });
    this.findQueryImpl = () => (0, f.queryStatusAll)();
  }
  findQuery(e, t) {
    var n = () => super.findQuery;
    var r = this;
    return (0, i.default)(function* () {
      const i = (yield n().call(r, e, t)) || [];
      yield Promise.all(i.map(e => {
        if (!e) {
          return;
        }
        let t = 0;
        e.msgs.forEach(n => {
          if (t < e._msgs.length && e._msgs[t].id.toString() === n.id.toString()) {
            ++t;
          } else {
            n.delete();
          }
        });
        if (e._msgs.length > 0) {
          return r.addStatusMessages(e.id, e._msgs);
        } else {
          return Promise.resolve();
        }
      }));
      return i;
    })();
  }
  sync() {
    const e = window.performance.now();
    return this.findQuery({}, {
      set: this.hasSynced()
    }).finally(() => {
      this.trigger("sync");
    }).then(t => {
      const n = window.performance.now();
      const r = Math.round(n - e);
      this.logMetrics({
        type: "sync",
        syncTime: r
      });
      this.forEach(e => {
        if (e.msgs.length > e.totalCount) {
          __LOG__(2)`Total count: ${e.totalCount}, msgs length: ${e.msgs.length}`;
        }
      });
      return t;
    });
  }
  logMetrics(e) {
    let t;
    t = e.type === "sync" ? new S.WebcStatusSyncWamEvent({
      webcStatusSyncT: e.syncTime
    }) : new E.WebcStatusSessionWamEvent({
      webcStatusSessionId: e.sessionId
    });
    const n = this.filter(e => !(0, p.getIsMe)(e.contact));
    const r = n.filter(e => !e.contact.statusMute);
    const i = r.filter(e => e.hasUnread);
    const a = r.filter(e => !e.hasUnread);
    const o = n.filter(e => e.contact.statusMute);
    const l = (0, s.default)(r.map(e => e.unreadCount));
    const u = (0, s.default)(r.map(e => e.readCount));
    const c = (0, s.default)(o.map(e => e.totalCount));
    t.webcStatusRecentItemCount = l;
    t.webcStatusRecentRowCount = i.length;
    t.webcStatusViewedItemCount = u;
    t.webcStatusViewedRowCount = a.length;
    t.webcStatusMutedItemCount = c;
    t.webcStatusMutedRowCount = o.length;
    t.commit();
  }
  hasSynced() {
    return true;
  }
  handleUpdate(e, t, n) {
    const r = e.id.fromMe ? (0, y.getMaybeMeUser)() : e.author;
    if (this.hasSynced()) {
      if (n) {
        return true;
      }
      const t = e.subtype === "sender_revoke";
      const i = this.get(r);
      if (i) {
        const n = i.totalCount === i.msgs.length;
        if (t) {
          const t = e.protocolMessageKey;
          if ((t != null && i.containsMessage(t)) !== true) {
            return true;
          }
          const n = t == null ? undefined : t.toString();
          const r = (0, m.getReadMsgKeys)(i.msgs.toArray());
          const a = {
            totalCount: i.totalCount - 1
          };
          if (r.find(e => e === n) == null && i.readKeys[n] !== true) {
            a.unreadCount = i.unreadCount - 1;
          }
          i.set(a);
        } else {
          const t = {
            totalCount: i.totalCount + 1
          };
          if (!e.invis) {
            t.unreadCount = i.unreadCount + 1;
          }
          t.t = e.t;
          i.set(t);
        }
        if (!n && e.body) {
          _.default.createFromBase64Jpeg(e.body).then(e => {
            i.pic = e;
          });
        }
        return n;
      }
      if (!t) {
        this.add({
          id: r,
          t: e.t,
          unreadCount: e.invis ? 0 : 1,
          totalCount: 1
        });
      }
      return true;
    }
    return false;
  }
  addStatusMessages(e, t) {
    return g.MsgCollection.processMultipleMessages((0, v.createWid)(l.STATUS_JID), t, {
      add: "after",
      isHistory: true
    }, "addStatusMessages");
  }
  getUnexpired(e) {
    let t = false;
    t = (0, c.getABPropConfigValue)("web_status_psa");
    const n = this.filter(e => !(e.totalCount <= 0) && !e.isExpired() && !(0, p.getIsMe)(e.contact) && (!!(0, p.getIsMyContact)(e.contact) || !!(0, p.getIsPSA)(e.contact) && t));
    if (t) {
      n.sort((e, t) => (0, p.getIsPSA)(e.contact) === (0, p.getIsPSA)(t.contact) ? 0 : (0, p.getIsPSA)(e.contact) ? -1 : 1);
    }
    if (e) {
      return (0, o.default)(n, e => e.unreadCount > 0);
    }
    return (0, o.default)(n, e => e.unreadCount === 0);
  }
  getMyStatus() {
    const e = this.filter(e => (0, p.getIsMe)(e.contact));
    if (!((0, a.default)(e) || (0, u.unixTime)() - e[0].t > 86400)) {
      return e[0];
    }
  }
  getPSAStatus() {
    const e = this.filter(e => (0, p.getIsPSA)(e.contact));
    if (e.length !== 0) {
      return e[0];
    }
  }
}
exports.StatusV3CollectionImpl = T;
T.model = h.default;
T.comparator = (e, t) => t.t - e.t;
const M = new T();
exports.StatusV3Collection = M;