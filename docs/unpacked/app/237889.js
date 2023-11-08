var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/441609.js"));
var a = r(require("./395654.js"));
class o extends a.default {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    let t = arguments.length > 1 ? arguments[1] : undefined;
    let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "next";
    super();
    this.list = e;
    this.index = -1;
    this.value = undefined;
    this.getter = t;
    this.deleteDir = n;
  }
  init() {
    let e;
    let t;
    let n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    let r = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    this.list = n;
    if (this.value != null) {
      if ((0, i.default)(n)) {
        this.unset();
      } else {
        e = n.indexOf(this.value);
        if (e > -1) {
          if (e === this.index) {
            return;
          }
          t = true;
          r = false;
        } else if (!r || this.index < 0) {
          e = -1;
        } else {
          const r = this.deleteDir === "prev" ? -1 : 0;
          e = this.index + r;
          e = Math.max(e, 0);
          e = Math.min(e, n.length - 1);
          t = e > -1;
        }
        this.set(e, r, t);
      }
    }
  }
  unset() {
    const e = this.value;
    this.value = undefined;
    this.index = -1;
    if (e != null) {
      this._trigger(e, false);
      this.trigger("unset");
    }
  }
  reset() {
    let e = !(arguments.length > 0 && arguments[0] !== undefined) || arguments[0];
    let t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
    if (!(this.index < 0)) {
      if (this.value != null) {
        this._trigger(this.value, t === true ? "focus" : "select", e);
      }
    }
  }
  set(e) {
    let t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
    let n = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2];
    if (!this.list.length) {
      return;
    }
    const r = Math.min(Math.max(e, -1), this.list.length - 1);
    const i = this.value;
    const a = r > -1 ? this.list[r] : undefined;
    if (a != null) {
      this.value = a;
      this._trigger(a, t === true ? "focus" : "select");
    } else if (n === true) {
      this.value = undefined;
    }
    if (n === true && i != null && i !== a) {
      this._trigger(i, false);
    }
    this.trigger("change", {
      current: this.value,
      previous: i
    });
    this.index = r;
  }
  getVal() {
    return this.value;
  }
  setVal(e) {
    let t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
    const n = this.list.indexOf(e);
    if (n > -1) {
      this.set(n, t);
    } else {
      this.unset();
      this.value = e;
    }
  }
  setFirst() {
    let e = !(arguments.length > 0 && arguments[0] !== undefined) || arguments[0];
    if (!(0, i.default)(this.list)) {
      this.set(0, e, true);
    }
  }
  setLast() {
    let e = !(arguments.length > 0 && arguments[0] !== undefined) || arguments[0];
    if (!(0, i.default)(this.list)) {
      this.set(this.list.length - 1, e, true);
    }
  }
  setPrev() {
    let e = !(arguments.length > 0 && arguments[0] !== undefined) || arguments[0];
    let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    if (!(0, i.default)(this.list)) {
      this.set(this.prev(t), e, true);
    }
  }
  setNext() {
    let e = !(arguments.length > 0 && arguments[0] !== undefined) || arguments[0];
    let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    if (!(0, i.default)(this.list)) {
      this.set(this.next(t), e, true);
    }
  }
  prev() {
    let e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    if ((0, i.default)(this.list)) {
      return -1;
    } else if (e) {
      if (this.index - 1 < 0) {
        return this.list.length - 1;
      } else {
        return this.index - 1;
      }
    } else if (this.index === -1) {
      return -1;
    } else {
      return this.index - 1;
    }
  }
  next() {
    let e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    if ((0, i.default)(this.list)) {
      return -1;
    } else if (e) {
      if (this.index + 1 > this.list.length - 1) {
        return 0;
      } else {
        return this.index + 1;
      }
    } else {
      return Math.min(this.index + 1, this.list.length - 1);
    }
  }
  _trigger(e) {
    if (this.getter != null) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {
        n[r - 1] = arguments[r];
      }
      this.trigger(this.getter(e), ...n);
    }
  }
}
exports.default = o;