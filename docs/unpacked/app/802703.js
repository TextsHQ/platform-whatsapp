var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarredMsgCollection = exports.AllStarredMsgsCollection = undefined;
exports.addStarredMsgs = function (e) {
  f.add(e);
  e.forEach(e => {
    var t;
    if (!((t = (0, s.getChat)(e).starredMsgs) === null || t === undefined)) {
      t.add(e);
    }
  });
};
exports.removeStarredMsgs = _;
var i = r(require("./670983.js"));
var a = require("./392125.js");
var o = require("./292220.js");
var s = require("./163755.js");
var l = require("./61113.js");
var u = require("./772358.js");
var c = require("./226562.js");
var d = require("./38878.js");
class p extends a.BaseCollection {
  constructor() {
    super();
    this.syncPromise = null;
    this.isSynced = false;
    this.listenTo(d.Socket, "change:stream", () => {
      if (d.Socket.stream === c.SOCKET_STREAM.DISCONNECTED) {
        this.isSynced = false;
      } else if (d.Socket.stream === c.SOCKET_STREAM.CONNECTED) {
        this.delete();
      }
    });
  }
  process(e, t, n, r) {
    if (r) {
      this.delete();
    } else {
      this.updateMsgs(e, t, n);
    }
  }
  sync(e) {
    if (this.isSynced) {
      return Promise.resolve();
    }
    if (this.syncPromise != null) {
      return this.syncPromise;
    }
    const t = this;
    let n;
    const r = this.last();
    if (r) {
      n = r.id;
    }
    this.syncPromise = l.MsgCollection.getStarred(e, o.PAGE_SIZE, n).then(function (e) {
      if (e.length) {
        t.add(e, {
          silent: true
        });
      }
      if (e.length < o.PAGE_SIZE) {
        t.isSynced = true;
      }
    }).catch(function () {
      __LOG__(3)`starred msg sync error: `;
    }).finally(() => {
      t.syncPromise = null;
      t.trigger("sync");
    });
    this.trigger("sync");
    return (0, i.default)(this.syncPromise, "syncPromise can not be null");
  }
  updateMsgs(e, t, n) {
    const r = this.syncPromise || Promise.resolve();
    this.syncPromise = r.then(() => {
      if (e) {
        return (t.length > 0 ? l.MsgCollection.incrementalStarredUpdate(t) : Promise.resolve([])).then(e => {
          const t = e.concat(n);
          if (this.isSynced) {
            this.add(t, {
              silent: true
            });
          }
          t.forEach(e => {
            var t;
            if (!((t = (0, s.getChat)(e).starredMsgs) === null || t === undefined)) {
              t.add(e);
            }
          });
          this.trigger("sync");
        }).catch(() => {
          __LOG__(3)`models:starred:update:error: `;
        });
      }
      _(t.concat(n).filter(e => !e.star));
    }).finally(() => {
      this.syncPromise = null;
    });
  }
  delete() {
    this.isSynced = false;
    super.delete();
  }
}
exports.StarredMsgCollection = p;
p.model = u.Msg;
p.comparator = (e, t) => t.t - e.t;
const f = new p();
function _(e) {
  f.remove(e);
  e.forEach(e => {
    var t;
    if (!((t = (0, s.getChat)(e).starredMsgs) === null || t === undefined)) {
      t.remove(e);
    }
  });
}
exports.AllStarredMsgsCollection = f;