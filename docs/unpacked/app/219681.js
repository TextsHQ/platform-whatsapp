var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFtsWorker = function (e, t) {
  if (!s) {
    s = new l();
    s.initialize(e, t);
  }
  return s;
};
var i = r(require("./670983.js"));
var a = r(require("./567124.js"));
var o = r(require("./914116.js"));
let s = null;
class l {
  initialize(e, t) {
    this.worker = new o.default();
    this.worker.onmessage = t => {
      e(t.data);
    };
    this.worker.onerror = t;
    (0, a.default)(this);
  }
  postMessage(e, t) {
    (0, i.default)(this.worker, "this.worker").postMessage(e, t);
  }
  terminate() {
    (0, i.default)(this.worker, "this.worker").terminate();
  }
}