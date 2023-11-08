var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgLoadState = exports.ChatMsgsCollection = undefined;
var i = r(require("../vendor/81109.js"));
var a = require("./392125.js");
var o = require("./481173.js");
var s = require("./42185.js");
var l = require("./975565.js");
var u = require("./787742.js");
var c = require("./772358.js");
var d = r(require("../vendor/441143.js"));
class p extends o.BaseModel {
  constructor() {
    super(...arguments);
    this.noEarlierMsgs = (0, o.prop)();
    this.isLoadingEarlierMsgs = (0, o.prop)();
    this.isLoadingRecentMsgs = (0, o.prop)();
    this.isLoadingAroundMsgs = (0, o.prop)();
    this.isRepairingMsgHistory = (0, o.prop)();
    this.contextLoaded = (0, o.prop)();
  }
}
p.Proxy = "msgLoad";
const f = (0, o.defineModel)(p);
exports.MsgLoadState = f;
class _ extends a.BaseCollection {
  constructor() {
    super();
    this.msgLoadState = new f({
      noEarlierMsgs: false,
      isLoadingEarlierMsgs: false,
      isLoadingRecentMsgs: false,
      isLoadingAroundMsgs: false,
      contextLoaded: false,
      isRepairingMsgHistory: false
    });
    this.listenTo(this, "add remove reset sort", this.triggerChangeLast);
  }
  delete() {
    this.stopListening();
    super.delete();
    this.msgLoadState.delete();
  }
  triggerChangeLast(e, t, n) {
    const r = this.last();
    if (this._last !== r) {
      this._last = r;
      let i = false;
      const a = !!n.add;
      const o = !!n.remove;
      if (t.includes(e) && a && !o) {
        i = true;
      }
      this.trigger("change:last", r, i);
    }
  }
  add(e, t) {
    let r;
    if (Array.isArray(e)) {
      if (e.length === 1) {
        r = e[0];
      }
    } else {
      r = e;
    }
    let a = [];
    if (r != null && ((0, u.getIsInitialE2ENotification)(r) || (0, u.getIsDisappearingModeSystemMessage)(r))) {
      const n = this.some(e => (0, u.getIsInitialE2ENotification)(e));
      if ((0, u.getIsInitialE2ENotification)(r)) {
        if (!n) {
          a = super.add(e, (0, i.default)((0, i.default)({}, t), {}, {
            at: 0
          }));
        }
      }
      if ((0, u.getIsDisappearingModeSystemMessage)(r)) {
        if (!this.some(e => (0, u.getIsDisappearingModeSystemMessage)(e))) {
          const r = n ? 1 : 0;
          a = super.add(e, (0, i.default)((0, i.default)({}, t), {}, {
            at: r
          }));
        }
      }
      if (a) {
        this.trigger("insert_msgs", a, t);
      }
    } else {
      a = super.add(e, t);
    }
    if (a.length > 0) {
      const e = require("./61113.js").MsgCollection.add(a, t);
      e.forEach(e => {
        if (e && this.isModel(e)) {
          e.msgChunk = this;
        }
      });
      this.trigger("bulk_add", a, t);
      e.forEach(e => (0, l.logDeepConversation)(e));
    }
    return a;
  }
  remove(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    const r = super.remove(e, t);
    const i = !!t && t.silent;
    const a = r.filter(e => !!e);
    if (a.length && !i) {
      this.trigger("remove_msgs", a, t);
      if (!n) {
        this.trigger("update_sort_time");
      }
    }
    return r;
  }
  replace(e) {
    this.msgLoadState = e.msgLoadState;
    this.loadRecentPromise = e.loadRecentPromise;
    this.loadEarlierPromise = e.loadEarlierPromise;
    this.loadAroundPromise = e.loadAroundPromise;
    const t = e.getModelsArray();
    this.set(t, {
      silent: true,
      merge: false
    });
    t.forEach(e => {
      if (this.isModel(e)) {
        e.msgChunk = this;
      }
    });
    this.trigger("bulk_add", t);
  }
  onMsgLoadStateChange(e) {
    let t;
    const n = () => {
      e();
    };
    const r = () => {
      (0, d.default)(t != null, "prevMsgLoadState cannot be null after bulk_add");
      t.off("change", n);
      const r = this.msgLoadState;
      r.on("change", n);
      t = r;
      e();
    };
    t = this.msgLoadState;
    t.on("change", n);
    this.on("bulk_add", r);
    let i = () => {
      (0, d.default)(t != null, "prevMsgLoadState cannot be null when unsubscribing");
      this.off("bulk_add", r);
      t.off("change", n);
    };
    return () => {
      const e = i;
      if (e) {
        i = null;
        e();
      }
    };
  }
}
exports.ChatMsgsCollection = _;
_.model = c.Msg;
_.comparator = s.msgComparator;