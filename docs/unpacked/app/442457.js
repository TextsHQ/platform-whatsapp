Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FakeCacheMap = undefined;
exports.FakeCacheMap = class {
  constructor() {
    this.size = 0;
  }
  clear() {}
  delete() {
    return false;
  }
  get() {}
  has() {
    return false;
  }
  set() {
    return this;
  }
};