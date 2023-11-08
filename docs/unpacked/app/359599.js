Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
exports.default = class {
  constructor(e) {
    this.cache = new Map();
    this.howBig = 0;
    this.fn = e;
  }
  getKeyString(e) {
    if (typeof e == "string") {
      return e;
    } else {
      return e.join("_");
    }
  }
  getRefSetter(e) {
    const t = this.getKeyString(e);
    let n = this.cache.get(t);
    if (!n) {
      n = n => {
        this.fn(e, n);
        if (!n) {
          this.cache.delete(t);
        }
      };
      this.cache.set(t, n);
      if (Math.floor(this.cache.size / 500) > this.howBig) {
        __LOG__(4, undefined, new Error())`[SetRefCache] Large cache detected with ${this.cache.size} entries`;
        this.howBig = Math.floor(this.cache.size / 500);
      }
    }
    return n;
  }
};