var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadStackPromisePolyfill = function () {
  function e(e) {
    this.message = e;
    this.stack = (0, i.default)(e || this.name).stack;
  }
  Promise.prototype.cancellable = function () {
    console.info("StackPromise.cancellable noop");
    return this;
  };
  Promise.prototype.cancel = function () {
    console.info("StackPromise.cancel noop");
    return this;
  };
  e.prototype = Object.create(Error.prototype, {
    name: {
      value: "AbortError"
    }
  });
  Promise.CancellationError = e;
};
var i = r(require("./415227.js"));