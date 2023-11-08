var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./670983.js"));
class a {
  constructor(e, t, n) {
    this.key = e;
    this.value = t;
    this.timestamp = n != null ? n : Date.now();
    this.prev = undefined;
    this.next = undefined;
  }
}
class o {
  constructor() {
    this.start = new a(null, null);
    this.end = new a(null, null);
    this.start.next = this.end;
    this.end.prev = this.start;
  }
  append(e, t) {
    const n = new a(e, t);
    const r = this.end;
    const o = (0, i.default)(this.end.prev, "this.end.prev");
    n.next = r;
    n.prev = o;
    r.prev = n;
    o.next = n;
    return n;
  }
  prepend(e, t) {
    const n = new a(e, t);
    const r = this.start;
    const o = (0, i.default)(this.start.next, "this.start.next");
    n.prev = r;
    n.next = o;
    r.next = n;
    o.prev = n;
    return n;
  }
  popEnd() {
    const e = (0, i.default)(this.end.prev, "this.end.prev");
    if (e === this.start) {
      return;
    }
    const t = (0, i.default)(e.prev, "entry.prev");
    const n = (0, i.default)(e.next, "entry.next");
    t.next = n;
    n.prev = t;
    e.next = undefined;
    e.prev = undefined;
    return e;
  }
  popFront() {
    const e = (0, i.default)(this.start.next, "this.start.next");
    if (e === this.end) {
      return;
    }
    const t = (0, i.default)(e.prev, "entry.prev");
    const n = (0, i.default)(e.next, "entry.next");
    t.next = n;
    n.prev = t;
    e.next = undefined;
    e.prev = undefined;
    return e;
  }
  peekFront() {
    const e = (0, i.default)(this.start.next, "this.start.next");
    if (e !== this.end) {
      return e;
    }
  }
  peekEnd() {
    const e = (0, i.default)(this.end.prev, "this.end.prev");
    if (e !== this.start) {
      return e;
    }
  }
  remove(e) {
    const t = (0, i.default)(e.prev, "entry.prev");
    const n = (0, i.default)(e.next, "entry.next");
    t.next = n;
    n.prev = t;
    e.next = undefined;
    e.prev = undefined;
    return e;
  }
  stats() {
    let e = this.start;
    let t = 0;
    for (; e !== this.end;) {
      e = (0, i.default)(e.next, "entry.next");
      t += 1;
    }
    return t - 1;
  }
}
exports.default = class {
  constructor() {
    this.keyMap = new Map();
    this.entryList = new o();
  }
  lookup(e) {
    const t = this.keyMap.get(e);
    if (t) {
      this.entryList.remove(t);
      const e = this.entryList.append(t.key, t.value);
      this.keyMap.set(e.key, e);
      return t.value;
    }
  }
  add(e, t) {
    let n = this.keyMap.get(e);
    if (n) {
      n.value = t;
    } else {
      n = this.entryList.append(e, t);
      this.keyMap.set(e, n);
    }
    return t;
  }
  expireKeys(e) {
    let t = this.entryList.peekFront();
    for (; t && t.timestamp < e;) {
      this.entryList.popFront();
      this.keyMap.delete(t.key);
      t = this.entryList.peekFront();
    }
  }
  printStats() {
    __LOG__(2)`========================== STATS =============================`;
    __LOG__(2)`entry list: ${this.entryList.stats()}`;
    __LOG__(2)`map keys: ${this.keyMap.size}`;
  }
};