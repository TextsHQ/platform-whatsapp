var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Statusv3Snapshot = exports.StatusV3MsgNotFound = exports.StatusV3LoadingError = exports.InvalidStatusV3Iterator = undefined;
var r = a(require("../vendor/348926.js"));
var o = require("../app/250655.js");
var l = require("../app/477689.js");
var i = require("../app/8304.js");
var u = require("../app/904086.js");
var s = require("../app/660666.js");
var c = require("../app/430231.js");
var d = require("../app/657694.js");
class f extends (0, l.customError)("InvalidStatusV3Iterator") {}
exports.InvalidStatusV3Iterator = f;
class p extends (0, l.customError)("StatusV3LoadingError") {}
exports.StatusV3LoadingError = p;
class m extends (0, l.customError)("StatusV3MsgNotFound") {}
exports.StatusV3MsgNotFound = m;
exports.Statusv3Snapshot = class {
  constructor(e) {
    var t = this;
    let n = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    let a = arguments.length > 2 ? arguments[2] : undefined;
    this._getSnapshotStatus = e => {
      const t = e.msgs.getModelsArray();
      return {
        statusV3: e,
        totalCount: e.totalCount,
        unreadCount: e.unreadCount,
        msgs: t,
        readMsgKeys: this._getReadKeysSet(t)
      };
    };
    this._getReadKeysSet = e => new Set((0, c.getReadMsgKeys)(e));
    this._printInfo = () => {
      this.statuses.forEach(e => {
        __LOG__(2)`Total count: ${e.totalCount}, unread count: ${e.unreadCount}, msgs length: ${e.msgs.length}`;
      });
    };
    this.getFirstUnread = (e, t, n) => {
      const a = this.statuses.findIndex(t => t.statusV3 === e);
      if (a !== -1) {
        const r = this.statuses[a];
        const o = r.readMsgKeys;
        let l;
        if (n) {
          l = r.msgs ? r.msgs.findIndex(e => n && e.id.toString() === n.toString()) : -1;
          if (l >= 0) {
            return Promise.resolve({
              msgIdx: l,
              statusIdx: a
            });
          } else {
            return Promise.reject(new f());
          }
        } else {
          l = r.msgs ? r.msgs.findIndex(e => !o.has(e.id.toString())) : -1;
          if (l === -1 && e.msgs.msgLoadState.noEarlierMsgs) {
            l = t ? 0 : r.msgs.length - 1;
            return Promise.resolve({
              msgIdx: l,
              statusIdx: a
            });
          } else if (l !== -1) {
            return Promise.resolve({
              msgIdx: l,
              statusIdx: a
            });
          } else if (r.unreadCount === 0 && t && r.msgs.length > 0) {
            return Promise.resolve({
              msgIdx: 0,
              statusIdx: a
            });
          } else {
            return this._fetchMore(e).then(() => this.getFirstUnread(e, t, n)).catch(e => {
              __LOG__(3)`error while getting first unread status: ${String(e)}`;
              throw new f();
            });
          }
        }
      }
      return Promise.reject(new f());
    };
    this.hasNext = e => {
      const t = this.statuses[e.statusIdx];
      return e.msgIdx + 1 < t.totalCount || e.statusIdx + 1 < this.statuses.length;
    };
    this.getNext = e => {
      const t = this.statuses[e.statusIdx];
      const n = t.statusV3;
      if (e.msgIdx + 1 < t.totalCount && e.msgIdx + 1 < t.msgs.length) {
        return Promise.resolve({
          msgIdx: e.msgIdx + 1,
          statusIdx: e.statusIdx
        });
      }
      if (e.msgIdx + 1 < t.totalCount) {
        if (n.msgs.msgLoadState.noEarlierMsgs) {
          __LOG__(3)`Loaded ${t.msgs.length} messages with total count ${t.totalCount}, but noEarlierMsgs set. Attempting re-sync`;
          d.StatusV3Collection.sync();
          return Promise.reject(new f());
        } else {
          return this._fetchMore(n).then(() => this.getNext(e)).catch(t => {
            __LOG__(3)`error while loading more status msgs: ${String(t)}`;
            if (e.statusIdx + 1 < this.statuses.length) {
              const t = this.statuses[e.statusIdx + 1].statusV3;
              return this.getFirstUnread(t, true);
            }
            throw new f();
          });
        }
      }
      if (e.statusIdx + 1 < this.statuses.length) {
        const t = this.statuses[e.statusIdx + 1].statusV3;
        return this.getFirstUnread(t, true);
      }
      return Promise.reject(new f());
    };
    this.hasPrev = e => e.msgIdx > 0 || e.statusIdx > 0;
    this.getPrev = e => {
      if (e.msgIdx > 0) {
        return Promise.resolve({
          msgIdx: e.msgIdx - 1,
          statusIdx: e.statusIdx
        });
      }
      if (e.statusIdx > 0) {
        const t = this.statuses[e.statusIdx - 1].statusV3;
        return this.getFirstUnread(t, false);
      }
      return Promise.reject(new f());
    };
    this.statusAt = (e, t) => {
      const n = this.statuses[e.statusIdx];
      const a = n.statusV3;
      if (t < n.msgs.length) {
        return Promise.resolve({
          msgIdx: t,
          statusIdx: e.statusIdx
        });
      } else if (a.msgs.msgLoadState.noEarlierMsgs) {
        return Promise.reject(new f());
      } else {
        return this._fetchMore(a).then(() => this.statusAt(e, t)).catch(e => {
          __LOG__(3)`error while loading more status msgs: ${String(e)}`;
          throw new f();
        });
      }
    };
    this._fetchMore = function () {
      var e = (0, r.default)(function* (e) {
        if (!(yield (0, u.promiseLoop)(function () {
          var n = (0, r.default)(function* (n, a, r) {
            const l = (0, i.delayMs)((0, o.expBackoff)(r, 120000, 1000, 0.1));
            try {
              yield e.loadMore();
              const a = t.statuses.findIndex(t => t.statusV3 === e);
              if (a !== -1) {
                const r = t.statuses[a];
                const o = r.totalCount;
                const l = e.msgs.getModelsArray().slice(0, o);
                const i = t._getReadKeysSet(l);
                r.msgs = l;
                r.readMsgKeys = new Set([...r.readMsgKeys, ...i]);
                n(true);
              } else {
                if (!(r >= 4)) {
                  return l;
                }
                n(false);
              }
            } catch (e) {
              if (!(r >= 4)) {
                return l;
              }
              n(false);
            }
          });
          return function () {
            return n.apply(this, arguments);
          };
        }()))) {
          throw new p();
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }();
    if (a) {
      const t = e.msgs.getModelsArray().find(e => a && e.id.toString() === a.toString());
      if (!t) {
        throw new m();
      }
      this.statuses = [{
        statusV3: e,
        totalCount: 1,
        unreadCount: 0,
        msgs: [t],
        readMsgKeys: new Set([t.id.toString()])
      }];
    } else if (n && e.unreadCount > 0 && !(0, s.getIsMe)(e.contact) && !e.contact.statusMute) {
      const e = d.StatusV3Collection.getUnexpired(true);
      const t = [];
      e.forEach(e => {
        if (e.contact.statusMute) {
          return;
        }
        const n = this._getSnapshotStatus(e);
        t.push(n);
      });
      this.statuses = t;
    } else {
      this.statuses = [this._getSnapshotStatus(e)];
    }
    this._printInfo();
  }
};