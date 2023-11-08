var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./597687.js"));
var a = class extends i.default {
  constructor() {
    super();
    this.aborted = false;
  }
  dispatchEvent(e) {
    if (e.type === "abort") {
      this.aborted = true;
      if (typeof this.onabort == "function") {
        this.onabort.call(this, e);
      }
    }
    return super.dispatchEvent(e);
  }
  toString() {
    return "[object AbortSignal]";
  }
};
exports.default = a;