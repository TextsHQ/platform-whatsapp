var a = require("../app/530066.js").default;
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var o = require("../app/898817.js");
var l = r(require("../app/229922.js"));
var i = require("../app/392125.js");
var u = require("../app/351053.js");
var s = require("../app/713105.js");
var c = require("../app/163755.js");
var d = require("../app/61113.js");
var f = require("../app/772358.js");
var p = require("./382117.js");
var m = require("./744976.js");
var h = require("../app/818674.js");
class g extends i.BaseCollection {
  constructor(e) {
    super();
    this.hasMoreMsgs = true;
    this.resultPage = 0;
    this.searchPromise = null;
    this.searchAbortController = null;
    this.searchTerm = null;
    this.searchLabel = null;
    this.updateFtsAfterMsgLabelUpdate = () => {
      if (!this.currentLabelSearch) {
        return;
      }
      const e = this.filter(e => !e.labels || !e.labels.includes(this.currentLabelSearch));
      this.remove(e, {
        silent: true
      });
    };
    const t = e ? e.msgs : d.MsgCollection;
    this.listenTo(t, "remove_msgs", e => {
      if (this.remove(e, {
        silent: true
      }).filter(e => !!e).length) {
        this.trigger("bulk_remove");
      }
    });
    this.listenTo(u.ChatCollection, "remove", e => {
      const t = [];
      this.forEach(n => {
        if (n.id.remote.equals(e.id)) {
          t.push(n);
        }
      });
      if (this.remove(t, {
        silent: true
      }).filter(e => !!e).length) {
        this.trigger("bulk_remove");
      }
    });
  }
  delete(e) {
    if (e) {
      this.stopListening();
    }
    super.delete();
  }
  resetSearch() {
    var e;
    this.hasMoreMsgs = true;
    this.resultPage = 0;
    this.searchTerm = null;
    if (!((e = this.searchAbortController) === null || e === undefined)) {
      e.abort();
    }
  }
  search(e) {
    let {
      chat: t,
      count: n,
      filter: r = {},
      searchTerm: i
    } = e;
    const u = `${i}__${r.label || r.kind && r.kind || ""}`;
    this.currentLabelSearch = r.label;
    let f = false;
    if (this.searchTerm !== u) {
      if (this.searchTerm && i.indexOf(this.searchTerm) === 0) {
        f = true;
      } else {
        this.searchTerm = u;
        this.delete();
      }
      this.resultPage = 0;
      this.hasMoreMsgs = true;
    } else {
      f = true;
    }
    const g = new p.UiActionWamEvent({
      uiActionType: m.UI_ACTION_TYPE.FIRST_FTS_RESULT,
      uiActionPreloaded: f
    });
    if (this.searchPromise) {
      var E;
      if (this.searchTerm === u) {
        return this.searchPromise;
      }
      if (!((E = this.searchAbortController) === null || E === undefined)) {
        E.abort();
      }
    }
    this.searchAbortController = new a();
    const v = this.searchAbortController.signal;
    let _;
    _ = t ? (0, s.fts)(t, i, ++this.resultPage, n) : d.MsgCollection.search(i, ++this.resultPage, n, undefined, r);
    this.searchPromise = (0, l.default)(_, v).then(e => {
      if (e.eof) {
        this.hasMoreMsgs = false;
      }
      if (this.searchTerm !== u) {
        this.delete();
      }
      this.searchTerm = u;
      if (e.messages) {
        if (r.kind || r.label != null) {
          e.messages = e.messages.filter(e => (0, c.getChat)(e) && (0, s.matchFilter)((0, c.getChat)(e), r));
        }
        this.add(e.messages.filter(e => !(0, c.getAsRevoked)(e)));
      }
      g.markUiActionT();
      g.commit();
      (0, h.logUiActionShadowPrivateStatsTestEvents)();
      return e;
    }).catch((0, o.catchAbort)(() => {})).finally(() => {
      this.searchPromise = null;
      this.searchAbortController = null;
      this.trigger("searchPromise_update");
    });
    this.trigger("searchPromise_update");
    return this.searchPromise;
  }
}
exports.default = g;
g.model = f.Msg;