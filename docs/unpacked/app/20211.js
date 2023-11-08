Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MexResponse = undefined;
exports.MexResponse = class {
  constructor(e, t) {
    this.data = e;
    if (t != null) {
      this.errors = t;
    }
  }
  getError(e) {
    if (this.errors != null) {
      return this.errors.find(t => {
        const n = t.path;
        let r = this.data;
        if (r == null || typeof r != "object") {
          return false;
        }
        for (let t = 0; t < n.length; t++) {
          r = r[n[t]];
          if (r === e) {
            return true;
          }
        }
      });
    }
  }
};