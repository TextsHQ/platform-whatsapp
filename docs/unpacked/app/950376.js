Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Resolvable = undefined;
exports.Resolvable = class {
  constructor() {
    this._resolve = () => {};
    this._isResolved = false;
    this.promise = new Promise(e => {
      this._resolve = e;
    });
  }
  resolve(e) {
    this._isResolved = true;
    this._resolve(e);
  }
  reject(e) {
    this.resolve(Promise.reject(e));
  }
  resolveWasCalled() {
    return this._isResolved;
  }
};