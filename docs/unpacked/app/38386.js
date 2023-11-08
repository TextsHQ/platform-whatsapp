Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var n = new class {
  constructor() {
    this.chatEphemeralExemptionMap = new Map();
  }
  has(e) {
    return this.chatEphemeralExemptionMap.has(e);
  }
  get(e) {
    var t;
    if ((t = this.chatEphemeralExemptionMap.get(e)) !== null && t !== undefined) {
      return t;
    } else {
      return null;
    }
  }
  add(e, t) {
    this.chatEphemeralExemptionMap.set(e, t);
  }
  clear() {
    this.chatEphemeralExemptionMap.clear();
  }
}();
exports.default = n;