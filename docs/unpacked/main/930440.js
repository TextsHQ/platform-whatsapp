var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/402525.js"));
var o = a(require("../vendor/441609.js"));
var l = require("../app/79672.js");
var i = a(require("../app/395654.js"));
const u = require("../vendor/76672.js").Mirrored(["Boolean", "Number"]);
class s extends i.default {
  constructor(e, t) {
    let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : u.Boolean;
    super();
    this.list = e;
    this.selected = e.reduce((e, t, a) => {
      e[a] = n === u.Number && 0;
      return e;
    }, {});
    this.getter = t;
    this.selectedDataType = n;
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    if (!(0, o.default)(this.selected)) {
      if ((0, o.default)(e)) {
        this.unsetAll();
      } else {
        this.selected = e.reduce((e, t, n) => {
          const a = this.list.indexOf(t);
          e[n] = a > -1 && this.selected[a];
          return e;
        }, {});
        this.list = e;
      }
    }
  }
  unsetAll() {
    (0, r.default)(this.selected, (e, t) => {
      if (e) {
        this.set(t, this.selectedDataType === u.Number && 0);
      }
    });
  }
  reset() {
    let e = !(arguments.length > 0 && arguments[0] !== undefined) || arguments[0];
    (0, r.default)(this.selected, (t, n) => {
      if (t) {
        this.trigger(this.getter(this.list[n]), true, true, e);
        this.trigger("all", true, true, e);
      }
    });
  }
  set(e) {
    let t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
    let n = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2];
    if (!this.list.length) {
      return;
    }
    const a = Math.min(Math.max(e, -1), this.list.length - 1);
    const r = a > -1 ? this.list[a] : undefined;
    if (r) {
      if (this.selected[a] !== t) {
        this.selected[a] = t;
        this.trigger(this.getter(r), t, n);
      }
      if (this.isUnreadChat(r)) {
        this.trigger("unread_chat", t ? 1 : -1);
      }
      if (!this.isMutedChat(r)) {
        this.trigger("unmuted_chat", t ? 1 : -1);
      }
      this.trigger("all", t, n);
    }
  }
  setVal(e) {
    let t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
    let n = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2];
    let a = this.list.indexOf(e);
    if (a === -1) {
      a = this.list.length;
      this.list.push(e);
      this.selected[a] = typeof t == "number" && 0;
    }
    this.set(a, t, n);
  }
  getVal(e) {
    return this.selected[this.list.indexOf(e)];
  }
  setFirst() {
    let e = !(arguments.length > 0 && arguments[0] !== undefined) || arguments[0];
    if (!(0, o.default)(this.list)) {
      this.set(0, this.selectedDataType !== u.Number || 1, e);
    }
  }
  setLast() {
    let e = !(arguments.length > 0 && arguments[0] !== undefined) || arguments[0];
    if (!(0, o.default)(this.list)) {
      this.set(this.list.length - 1, this.selectedDataType !== u.Number || 1, e);
    }
  }
  getSelected() {
    return this.list.reduce((e, t, n) => {
      if (this.selected[n]) {
        e.push(t);
      }
      return e;
    }, []);
  }
  isSelected(e) {
    return !!this.getVal(e);
  }
  isUnreadChat(e) {
    return e instanceof l.Chat && e.hasUnread;
  }
  isMutedChat(e) {
    return e instanceof l.Chat && e.mute.isMuted;
  }
  isInList(e) {
    return this.list.includes(e);
  }
}
exports.default = s;