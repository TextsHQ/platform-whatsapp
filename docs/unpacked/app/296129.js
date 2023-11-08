var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./415227.js"));
exports.default = class {
  constructor(e) {
    if (e <= 0) {
      throw (0, i.default)("BitArray:numBits should be positive");
    }
    this._numBits = e;
    this._array = new Uint8Array(Math.ceil(this._numBits / 8));
  }
  get(e) {
    const [t, n] = this._getArrayIndexOffset(e);
    return Boolean(this._array[t] >> n & 1);
  }
  set(e) {
    const [t, n] = this._getArrayIndexOffset(e);
    this._array[t] |= 1 << n;
  }
  unset(e) {
    const [t, n] = this._getArrayIndexOffset(e);
    this._array[t] &= ~(1 << n);
  }
  toggle(e) {
    const [t, n] = this._getArrayIndexOffset(e);
    this._array[t] ^= 1 << n;
  }
  clear() {
    this._array = new Uint8Array(Math.ceil(this._numBits / 8));
  }
  toArray() {
    const e = [];
    for (let t = 0; t < this._numBits; t++) {
      e.push(this.get(t));
    }
    return e;
  }
  toString() {
    return this.toArray().map(e => e ? "1" : "0").join("");
  }
  _getArrayIndexOffset(e) {
    if (e < 0 || e >= this._numBits) {
      throw (0, i.default)("BitArray:index out of bounds");
    }
    const t = Math.floor(e / 8);
    return [t, e - t * 8];
  }
};