Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
exports.default = class {
  constructor(e, t) {
    this._valueFn = e;
    this._heap = [];
    this._load(t);
  }
  size() {
    return this._heap.length;
  }
  _load(e) {
    if (e == null ? undefined : e.length) {
      e.forEach(e => {
        this.push(e);
      });
    }
  }
  _swap(e, t) {
    const n = this._heap[t];
    this._heap[t] = this._heap[e];
    this._heap[e] = n;
  }
  _siftUp() {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    if (e === 0) {
      return;
    }
    const t = this._getParent(e);
    const n = t * 2 + 1;
    const r = t * 2 + 2;
    const i = this._heap.length;
    if (e >= i) {
      return;
    }
    let a = this._getVal(t);
    let o = t;
    if (n < i) {
      const e = this._getVal(n);
      if (a > e) {
        o = n;
        a = e;
      }
    }
    if (r < i) {
      if (a > this._getVal(r)) {
        o = r;
      }
    }
    if (o !== t) {
      this._swap(o, t);
      this._siftUp(t);
    }
  }
  _doHeapify() {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    const t = e * 2 + 1;
    const n = e * 2 + 2;
    const r = this._heap.length;
    if (e >= r) {
      return;
    }
    let i = this._getVal(e);
    let a = e;
    if (t < r) {
      const e = this._getVal(t);
      if (i > e) {
        a = t;
        i = e;
      }
    }
    if (n < r) {
      if (i > this._getVal(n)) {
        a = n;
      }
    }
    if (a !== e) {
      this._swap(a, e);
    }
    if (t < r) {
      this._doHeapify(t);
    }
    if (n < r) {
      this._doHeapify(n);
    }
  }
  _getVal(e) {
    return this._valueFn(this._heap[e]);
  }
  _getParent(e) {
    if (e % 2 == 0) {
      return (e - 2) / 2;
    } else {
      return (e - 1) / 2;
    }
  }
  push(e) {
    this._heap.push(e);
    const t = this._heap.length - 1;
    this._siftUp(t);
  }
  pull() {
    const e = this._heap.shift();
    this.heapify();
    return e;
  }
  heapify() {
    this._doHeapify(0);
  }
  peek() {
    return this._heap[0];
  }
};