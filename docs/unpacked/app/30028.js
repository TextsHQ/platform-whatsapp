var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Semaphore = undefined;
var i = r(require("./415227.js"));
exports.Semaphore = class {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    this._count = 0;
    this._queue = [];
    this._size = e;
  }
  acquire() {
    return new Promise((e, t) => {
      this._performAcquisition(e, t);
    });
  }
  availablePermits() {
    return this._size - this._count;
  }
  _performRelease() {
    this._count--;
    this._dequeue();
  }
  _performAcquisition(e, t) {
    if (this._count < this._size) {
      this._count++;
      let t = false;
      e({
        release: () => {
          if (t) {
            throw (0, i.default)("Permit has already been released");
          }
          t = true;
          this._performRelease();
        }
      });
    } else {
      this._enqueue(e, t);
    }
  }
  _enqueue(e, t) {
    this._queue.push([e, t]);
  }
  _dequeue() {
    if (this._queue.length === 0) {
      return;
    }
    const [e, t] = this._queue.shift();
    this._performAcquisition(e, t);
  }
};