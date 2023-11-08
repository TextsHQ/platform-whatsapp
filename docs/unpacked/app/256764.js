Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SyncdRetryableError = exports.SyncdMissingKeyError = exports.SyncdFatalError = undefined;
class n extends Error {
  constructor() {
    super(...arguments);
    this.name = "SyncdMissingKeyError";
  }
}
exports.SyncdMissingKeyError = n;
class r extends Error {
  constructor(e, t) {
    super(e);
    this.name = "SyncdRetryableError";
    this.backoff = t;
    this.message = e;
  }
}
exports.SyncdRetryableError = r;
class i extends Error {
  constructor(e) {
    super(e);
    this.name = "SyncdFatalError";
    this.message = e;
  }
}
exports.SyncdFatalError = i;