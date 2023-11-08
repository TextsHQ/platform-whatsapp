Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var n = new class {
  constructor() {
    this._resetNextSet = false;
    this._value = 0;
  }
  get() {
    return this._value;
  }
  _checkReset() {
    if (this._resetNextSet) {
      this._resetNextSet = false;
      this._value = 0;
      this.initialDisplayDate = null;
    }
  }
  inc() {
    this._checkReset();
    return this.set(this._value + 1);
  }
  set(e) {
    this._checkReset();
    if (this._value !== e) {
      if (e === 1) {
        this.initialDisplayDate = Math.floor(window.performance.now());
      }
      this._value = e;
      return this.get();
    }
  }
  reset() {
    this._resetNextSet = true;
  }
}();
exports.default = n;