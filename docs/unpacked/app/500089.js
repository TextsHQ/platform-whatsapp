var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./122583.js");
var o = require("./984330.js");
var s = require("./392125.js");
var l = require("./163755.js");
var u = require("./61113.js");
var c = require("./772358.js");
class d extends s.BaseCollection {
  constructor() {
    var e;
    super(...arguments);
    e = this;
    this.hasDocBefore = true;
    this._count = null;
    this.count = function () {
      var t = (0, i.default)(function* (t) {
        var n;
        if (e._count != null) {
          return e._count;
        }
        const r = t.msgs.filter(p);
        const i = (n = r[0]) !== null && n !== undefined ? n : t.msgs.head();
        if (i == null) {
          return 0;
        }
        try {
          var a;
          const t = (a = (yield u.MsgCollection.queryMedia(i.id.remote, 1 / 0, "before", i.id, "document")).length) !== null && a !== undefined ? a : 0;
          const n = t > 0 && r.length > 0 ? 1 : 0;
          e._count = t + r.length - n;
          return e._count;
        } catch (e) {
          __LOG__(4, true, new Error(), true)`Failed to count docs for chat ${t.id}`;
          SEND_LOGS(`md-failed-docs-count: ${e.message}`);
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
  queryDocs(e, t) {
    if (t) {
      if (!this.queryDocBefore) {
        this.queryDocBefore = u.MsgCollection.queryMedia(t.id.remote, u.MEDIA_QUERY_LIMIT, "before", t.id, "document").then(e => {
          if (!e || e.length < u.MEDIA_QUERY_LIMIT) {
            this.hasDocBefore = false;
          }
          this.add(e.filter(p), {
            at: 0
          });
          return {
            length: e.length
          };
        }).catch((0, a.filteredCatch)(o.E404, () => {})).finally(() => {
          this.queryDocBefore = null;
          this.trigger("query_doc_before");
        });
        this.trigger("query_doc_before");
      }
      return this.queryDocBefore;
    }
    const n = e.msgs;
    if (this.length === 0) {
      if (!n || n.length === 0) {
        this.hasDocBefore = false;
        return new Promise(e => {
          e({
            eof: true
          });
        });
      }
      this.add(n.filter(p), {
        at: 0
      });
    }
    if (e.msgs.msgLoadState.noEarlierMsgs) {
      this.hasDocBefore = false;
      return new Promise(e => {
        e({
          eof: true
        });
      });
    }
    if (this.length <= u.MEDIA_QUERY_LIMIT * 2) {
      const t = this.length === 0 ? n.head() : this.head();
      return this.queryDocs(e, t);
    }
    return new Promise(e => {
      e({
        eof: false
      });
    });
  }
}
function p(e) {
  return (0, l.getAsDoc)(e) != null && !e.isVcardOverMmsDocument;
}
exports.default = d;
d.model = c.Msg;