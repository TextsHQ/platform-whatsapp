var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOpusDecoderWorker = function (e) {
  return new a(e);
};
exports.getOpusEncoderWorker = function () {
  return new a();
};
var i = r(require("./384328.js"));
class a {
  constructor(e) {
    this._worker = new i.default();
    this._worker.onmessage = e;
  }
  getWorker() {
    return this._worker;
  }
  postMessage(e, t) {
    this._worker.postMessage(e, t);
  }
  addEventListener(e, t) {
    this._worker.addEventListener(e, t);
  }
  removeEventListener(e, t) {
    this._worker.addEventListener(e, t);
  }
}