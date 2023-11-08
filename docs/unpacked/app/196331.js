Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var n = new class {
  constructor() {
    this._cagGroups = new Set();
  }
  add(e) {
    this._cagGroups.add(e.toString());
  }
  remove(e) {
    this._cagGroups.delete(e.toString());
  }
  isCag(e) {
    return this._cagGroups.has(e.toString());
  }
  clear() {
    this._cagGroups.clear();
  }
}();
exports.default = n;