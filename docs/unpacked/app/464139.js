Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MexExtensionError = undefined;
class n extends Error {
  constructor(e, t) {
    super();
    this.name = "MexExtensionError";
    this.data = e;
    this.errors = t;
  }
}
exports.MexExtensionError = n;