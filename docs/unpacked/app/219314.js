Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
exports.default = class {
  constructor(e, t, n) {
    this.retryCount = 0;
    this.asset = e;
    this.resolution = t;
    this.priority = n;
  }
  getLoadUrlPromise() {
    return this._loadUrlPromise;
  }
  setLoadUrlPromise(e, t) {
    this._loadUrlPromise = e;
    this._loadUrlAbortController = t;
  }
  abortLoadUrlPromise() {
    var e;
    if (!((e = this._loadUrlAbortController) === null || e === undefined)) {
      e.abort();
    }
  }
  getConsumerPromise() {
    return this._consumerPromise;
  }
  setConsumerPromise(e) {
    this._consumerPromise = e;
  }
  getConsumerPromiseResolve() {
    return this._consumerPromiseResolve;
  }
  setConsumerPromiseResolve(e, t) {
    this._consumerPromiseResolve = e;
    this._consumerAbortController = t;
  }
  abortConsumerPromise() {
    var e;
    if (!((e = this._consumerAbortController) === null || e === undefined)) {
      e.abort();
    }
  }
};