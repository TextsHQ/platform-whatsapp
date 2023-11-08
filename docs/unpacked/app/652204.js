Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PromiseQueueMap = exports.PromiseQueue = undefined;
exports.PromiseQueue = class {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
    this._promise = Promise.resolve();
    this._size = 0;
    this._maxDelay = e;
  }
  wait() {
    return this._promise;
  }
  enqueueHandlers(e, t, r) {
    this._size++;
    const i = this._promise.then(() => e).then(t, r);
    const a = i.then();
    this._promise = n(i, this._maxDelay).finally(() => {
      this._size--;
    });
    return a;
  }
  enqueue(e) {
    this._size++;
    const t = this._promise.then(e);
    const r = t.then();
    this._promise = n(t, this._maxDelay).finally(() => {
      this._size--;
    });
    return r;
  }
  size() {
    return this._size;
  }
};
function n(e, t) {
  if (t >= 0) {
    return new Promise(n => {
      const r = () => {
        n();
      };
      e.then(r, r);
      setTimeout(r, t);
    });
  } else {
    return e.then(r, r);
  }
}
function r() {}
exports.PromiseQueueMap = class {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
    this._map = new Map();
    this._maxDelay = e;
  }
  waitIfPending(e) {
    return this._map.get(e);
  }
  wait(e) {
    return this._map.get(e) || Promise.resolve();
  }
  enqueueHandlers(e, t, n, r) {
    const i = this.wait(e).then(() => t).then(n, r);
    return this._addToMap(e, i);
  }
  enqueue(e, t) {
    const n = this.wait(e).then(t);
    return this._addToMap(e, n);
  }
  _addToMap(e, t) {
    const r = t.then();
    let i;
    const a = () => {
      if (this._map.get(e) === i) {
        this._map.delete(e);
      }
    };
    i = n(t, this._maxDelay).then(a, a);
    this._map.set(e, i);
    return r;
  }
};