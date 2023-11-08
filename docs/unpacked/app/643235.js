var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mediaHosts = exports.FETCH_STATE = undefined;
var a = i(require("../vendor/506479.js"));
var o = i(require("../vendor/348926.js"));
var s = require("./898817.js");
var l = i(require("./66836.js"));
var u = require("./984330.js");
var c = require("./464662.js");
var d = require("./271186.js");
var p = require("./99245.js");
var f = require("./191873.js");
var _ = require("./457087.js");
const g = ["forceRefresh"];
const m = ["name", "message", "stack"];
exports.FETCH_STATE = {
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR"
};
const h = new class {
  constructor() {
    var e = this;
    this._locked = false;
    this._fetch = (0, l.default)(() => "all", function () {
      var t = (0, o.default)(function* (t) {
        let {
          signal: n
        } = t;
        try {
          const t = yield (0, _.sendQueryMediaConn)(n);
          e._err = null;
          e._data = {
            auth: t.auth,
            authExpirationTime: new Date(t.queryStartTime.getTime() + t.authTTL),
            authTTL: t.authTTL,
            hosts: t.hosts.map(e => new c.MediaHost(e)),
            hostsRefreshTime: new Date(t.queryStartTime.getTime() + t.ttl),
            queryStartTime: t.queryStartTime,
            maxBuckets: t.maxBuckets
          };
        } catch (t) {
          const i = t;
          var r;
          if (i instanceof u.E507) {
            e._data = e._previousData;
            e._previousData = null;
            e._locked = true;
            return void self.setTimeout((0, o.default)(function* () {
              yield e._refreshIfStale({
                signal: n
              });
              e._locked = false;
            }), (r = i.backoff) !== null && r !== undefined ? r : undefined);
          }
          e._data = null;
          e._err = i;
          if (i.name === s.ABORT_ERROR) {
            return void __LOG__(2)`mediaHosts.sendQueryMediaConn aborted`;
          }
          __LOG__(3, true)`mediaHosts.sendQueryMediaConn error: ${function (e) {
            const {
              name: t,
              message: n,
              stack: r
            } = e;
            const i = (0, a.default)(e, m);
            const o = (0, f.normalizeStack)(e);
            const s = o.slice(o.indexOf("\n") + 1);
            const l = Object.keys(i).length === 0 ? "" : " " + JSON.stringify(i, (e, t) => e && typeof t == "object" ? String(t) : t);
            return `${e.name || "Error"}: ${e.message}${l}\n${s}`;
          }(i)}`;
          __LOG__(4, undefined, new Error(), true)`Assertion failed!`;
          SEND_LOGS("Error fetching mms hosts");
        }
      });
      return function () {
        return t.apply(this, arguments);
      };
    }());
    this._reset();
  }
  forceRefresh(e) {
    if (this._locked) {
      return Promise.resolve(false);
    } else {
      return this._refreshIfStale({
        signal: e,
        forceRefresh: true
      });
    }
  }
  getCachedHostsInfo(e) {
    var t = this;
    if (!this._locked) {
      const n = {
        signal: e.signal || new r().signal,
        forceRefresh: false
      };
      self.setTimeout((0, o.default)(function* () {
        yield t._refreshIfStale(n);
        t._locked = false;
      }), 0);
    }
    return this._getPreferredHostsInfo(e);
  }
  getHostsInfo(e) {
    var t = this;
    let {
      directPath: n,
      encFilehash: i,
      operation: a,
      type: s,
      signal: l,
      forceRefresh: u = false
    } = e;
    return (0, o.default)(function* () {
      if (!t._locked) {
        const e = {
          signal: l || new r().signal,
          forceRefresh: u
        };
        yield t._refreshIfStale(e);
      }
      return t._getPreferredHostsInfo({
        directPath: n,
        encFilehash: i,
        operation: a,
        type: s
      });
    })();
  }
  getHostsInfoByBucket(e) {
    var t = this;
    let {
      preferredBuckets: n,
      signal: i,
      forceRefresh: a = false
    } = e;
    return (0, o.default)(function* () {
      if (!t._locked) {
        const e = {
          signal: i || new r().signal,
          forceRefresh: a
        };
        yield t._refreshIfStale(e);
      }
      if (!t._data) {
        throw new d.NoMediaHostsError("no fetched data");
      }
      const {
        auth: e,
        hosts: o
      } = t._data;
      if (!o.length) {
        throw new d.NoMediaHostsError("no selected host");
      }
      const s = new Map(n.map(e => [e, null]));
      let l;
      let u;
      o.forEach(e => {
        var t;
        const n = (t = e.downloadBuckets) === null || t === undefined ? undefined : t.find(e => s.has(e));
        if (n != null) {
          s.set(n, e);
        }
      });
      for (const e of s.values()) {
        if (e != null) {
          if (l) {
            if (!u) {
              u = e;
              break;
            }
          } else {
            l = e;
          }
        }
      }
      if (l || u) {
        if (!u) {
          u = o[0];
        }
      } else {
        l = o[0];
        u = o[1];
      }
      if (!l) {
        throw new d.NoMediaHostsError("no selected host");
      }
      return {
        auth: e,
        selectedHost: l,
        fallbackHost: u
      };
    })();
  }
  _isExpiredOrMissing() {
    if (!this._data) {
      return true;
    }
    const e = this._data;
    return new Date() >= e.authExpirationTime;
  }
  _getPreferredHostsInfo(e) {
    if (!this._data) {
      throw new d.NoMediaHostsError("no fetched data");
    }
    const {
      directPath: t,
      encFilehash: n,
      operation: r,
      type: i
    } = e;
    const {
      auth: a,
      hosts: o,
      maxBuckets: s
    } = this._data;
    const {
      selectedHost: l,
      fallbackHost: u
    } = (0, p.routeSelection)({
      directPath: t,
      encFilehash: n,
      hosts: o,
      operation: r,
      type: i,
      maxBuckets: s
    });
    if (!l) {
      throw new d.NoMediaHostsError("no selected host");
    }
    return {
      auth: a,
      selectedHost: l,
      fallbackHost: u
    };
  }
  _needsRefresh() {
    if (!this._data) {
      return true;
    }
    const e = this._data;
    if (new Date() >= e.hostsRefreshTime) {
      return true;
    }
    const {
      authTTL: t,
      queryStartTime: n
    } = e;
    const r = Math.floor(t * 0.8);
    const i = new Date(n.getTime() + r);
    return new Date() >= i;
  }
  _refreshIfStale(e) {
    var t = this;
    let {
      forceRefresh: n
    } = e;
    let r = (0, a.default)(e, g);
    return (0, o.default)(function* () {
      if (t._isExpiredOrMissing() || n) {
        t._reset();
        yield t._fetch(r);
        return true;
      } else {
        return !!t._needsRefresh() && (t._fetch(r), false);
      }
    })();
  }
  _reset() {
    this._previousData = this._data;
    this._data = null;
    this._err = null;
  }
}();
exports.mediaHosts = h;