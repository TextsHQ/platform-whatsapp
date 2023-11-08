var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./122583.js");
var o = require("./904086.js");
var s = require("./984330.js");
var l = require("./392125.js");
var u = require("./61113.js");
var c = require("./44118.js");
var d = require("./772358.js");
class p extends l.BaseCollection {
  constructor() {
    var e;
    super(...arguments);
    e = this;
    this.hasLinkBefore = true;
    this._count = null;
    this.count = function () {
      var t = (0, i.default)(function* (t) {
        var n;
        if (e._count != null) {
          return e._count;
        }
        const r = t.msgs.filter(e => (0, c.getLinksFromMsg)(e).length > 0);
        const i = (n = r[0]) !== null && n !== undefined ? n : t.msgs.head();
        if (i == null) {
          return 0;
        }
        try {
          var a;
          const t = (a = (yield u.MsgCollection.queryMedia(i.id.remote, 1 / 0, "before", i.id, "url")).length) !== null && a !== undefined ? a : 0;
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
    this.reset();
  }
  add(e, t) {
    this._count = null;
    return super.add(e, t);
  }
  remove(e, t) {
    this._count = null;
    return super.remove(e, t);
  }
  queryLinks(e, t) {
    if (t) {
      if (!this.queryLinkBefore) {
        this.queryLinkBefore = u.MsgCollection.queryMedia(t.id.remote, u.MEDIA_QUERY_LIMIT, "before", t.id, "url").then(e => {
          if (!e || e.length < u.MEDIA_QUERY_LIMIT) {
            this.hasLinkBefore = false;
          }
          this.add(e, {
            at: 0
          });
          this.createLinksAndAddMsgs(e);
          return {
            length: e.length
          };
        }).catch((0, a.filteredCatch)(s.E404, () => {})).finally(() => {
          this.queryLinkBefore = null;
          this.trigger("query_link_before");
        });
        this.trigger("query_link_before");
      }
      return this.queryLinkBefore;
    }
    const n = e.msgs.getModelsArray();
    if (this.length === 0) {
      if (!n || n.length === 0) {
        this.hasLinkBefore = false;
        return new Promise(e => {
          e({
            eof: true
          });
        });
      }
      this.add(n.filter(e => (0, c.getLinksFromMsg)(e).length > 0), {
        at: 0
      });
      this.createLinksAndAddMsgs(n);
    }
    if (e.msgs.msgLoadState.noEarlierMsgs) {
      this.hasLinkBefore = false;
      return new Promise(e => {
        e({
          eof: true
        });
      });
    }
    if (this.length <= u.MEDIA_QUERY_LIMIT * 2) {
      const t = this.length === 0 ? e.msgs.head() : this.head();
      return this.queryLinks(e, t);
    }
    return new Promise(e => {
      e({
        eof: false
      });
    });
  }
  createLinksAndAddMsgs(e) {
    const t = [];
    (0, o.promiseLoop)((n, r, i) => {
      if (e.length === i) {
        return void n();
      }
      const a = e[i];
      if (a != null) {
        if ((0, c.getLinksFromMsg)(a).length) {
          t.push(a);
        }
      }
    }).then(() => {
      this.add(t);
      this.trigger("query_link_before");
    });
  }
}
exports.default = p;
p.model = d.Msg;
p.comparator = (e, t) => e.t - t.t;