var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./122583.js");
var o = require("./984330.js");
var s = require("./392125.js");
var l = require("./61113.js");
var u = require("./787742.js");
var c = require("./772358.js");
const d = "before";
const p = "after";
function f(e) {
  return (0, u.getIsMedia)(e) && !e.isViewOnce;
}
class _ extends s.BaseCollection {
  constructor() {
    var e;
    super(...arguments);
    e = this;
    this.hasMediaBefore = true;
    this.hasMediaAfter = true;
    this._count = null;
    this.count = function () {
      var t = (0, i.default)(function* (t) {
        var n;
        if (e._count != null) {
          return e._count;
        }
        const r = t.msgs.filter(f);
        const i = (n = r[0]) !== null && n !== undefined ? n : t.msgs.head();
        if (i == null) {
          return 0;
        }
        try {
          var a;
          const t = (a = (yield l.MsgCollection.queryMedia(i.id.remote, 1 / 0, "before", i.id)).mediaCount) !== null && a !== undefined ? a : 0;
          const n = t > 0 && r.length > 0 ? 1 : 0;
          e._count = t + r.length - n;
          return e._count;
        } catch (e) {
          __LOG__(4, true, new Error(), true)`Failed to count medias for chat ${t.id}`;
          SEND_LOGS(`md-failed-medias-count: ${e.message}`);
          return null;
        }
      });
      return function () {
        return t.apply(this, arguments);
      };
    }();
  }
  delete() {
    super.delete();
    this.stopListening();
  }
  add(e, t) {
    this._count = null;
    return super.add(e, t);
  }
  remove(e, t) {
    this._count = null;
    return super.remove(e, t);
  }
  getAfter(e) {
    const t = this.indexOf(e);
    if (t < 0 || t === this.length - 1) {
      return null;
    } else {
      return this.at(t + 1);
    }
  }
  getBefore(e) {
    const t = this.indexOf(e);
    if (t <= 0) {
      return null;
    } else {
      return this.at(t - 1);
    }
  }
  loadEarlierMedias() {
    const e = this.head();
    if (e) {
      this.queryMedia({
        msg: e
      });
    }
  }
  loadRecentMedias() {
    const e = this.last();
    if (e) {
      this.queryMedia({
        msg: e,
        direction: p
      });
    }
  }
  loadMoreAroundIfNeeded(e) {
    if (!e || e.isViewOnce) {
      return;
    }
    const t = this.indexOf(e);
    if (t < 20 && this.hasMediaBefore) {
      this.loadEarlierMedias();
    }
    if (this.length - t < 20 && this.hasMediaAfter) {
      this.loadRecentMedias();
    }
  }
  queryMedia(e) {
    var t;
    const {
      chat: n,
      msg: r
    } = e;
    const i = (t = e.direction) !== null && t !== undefined ? t : d;
    if (!r && n) {
      const e = n.msgs;
      if (!e || e.length === 0) {
        this.hasMediaBefore = false;
        return new Promise(e => {
          e({
            eof: true
          });
        });
      }
      this.add(e.filter(f), {
        at: 0
      });
      const t = this.toArray();
      if (n.msgs.msgLoadState.noEarlierMsgs) {
        this.hasMediaBefore = false;
        return new Promise(e => {
          e({
            eof: true
          });
        });
      }
      if (t.length <= l.MEDIA_QUERY_LIMIT * 2) {
        const r = t.length === 0 ? e.head() : t[0];
        return this.queryMedia({
          chat: n,
          msg: r
        });
      }
      return new Promise(e => {
        e({
          eof: false
        });
      });
    }
    if (r && i === d) {
      if (this.queryMediaBefore) {
        return this.queryMediaBefore;
      }
      let e = 0;
      this.queryMediaBefore = l.MsgCollection.queryMedia(r.id.remote, l.MEDIA_QUERY_LIMIT, i, (0, u.getIsMedia)(r) ? r.id : undefined).then(t => {
        const n = t.messages;
        if (!n || n.length < l.MEDIA_QUERY_LIMIT) {
          this.hasMediaBefore = false;
        }
        let r = [];
        if (n && n.length > 0) {
          r = n.filter(f);
        }
        this.add(r, {
          at: 0
        });
        e = r.length;
        return {
          length: e
        };
      }).catch((0, a.filteredCatch)(o.E404, () => {})).finally(() => {
        this.queryMediaBefore = null;
        this.trigger("query_media_before", e);
      });
      this.trigger("query_media_before", 0);
      return this.queryMediaBefore;
    }
    if (r && i === p) {
      if (this.queryMediaAfter) {
        return this.queryMediaAfter;
      } else {
        return this.queryMediaAfter = l.MsgCollection.queryMedia(r.id.remote, l.MEDIA_QUERY_LIMIT, i, r.id).then(e => {
          const t = e.messages;
          if (!t || t.length < l.MEDIA_QUERY_LIMIT) {
            this.hasMediaAfter = false;
          }
          let n = [];
          if (t && t.length > 0) {
            n = t.filter(f);
          }
          this.add(n);
          return {
            length: n.length
          };
        }).catch((0, a.filteredCatch)(o.E404, () => {})).finally(() => {
          this.queryMediaAfter = null;
          this.trigger("query_media_after");
        });
      }
    }
  }
}
exports.default = _;
_.model = c.Msg;
_.comparator = (e, t) => e.t - t.t;