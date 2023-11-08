var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GzipWrapper = undefined;
exports.createDeflate = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new o(e);
};
exports.inflate = function (e) {
  return (0, a.decompressSync)(e);
};
var i = r(require("./415227.js"));
var a = require("../vendor/256856.js");
class o extends a.Gzip {
  constructor(e) {
    super(e);
    this._chunks = [];
    this.ondata = (e, t) => {
      this._chunks.push(e);
      if (!t) {
        return;
      }
      let n = 0;
      this._chunks.forEach(e => {
        n += e.length;
      });
      const r = new Uint8Array(n);
      let i = 0;
      this._chunks.forEach(e => {
        r.set(e, i);
        i += e.length;
      });
      this._result = r;
    };
  }
  push(e, t) {
    if (this._result != null) {
      throw (0, i.default)("Tried to push chunk to compressor after final block");
    }
    if (e instanceof Uint8Array) {
      super.push(e, t);
    } else if (e instanceof ArrayBuffer) {
      super.push(new Uint8Array(e), t);
    } else {
      super.push((0, a.strToU8)(e), t);
    }
  }
  result() {
    if (this._result == null) {
      throw (0, i.default)("Tried to access result before adding final block");
    }
    return this._result;
  }
}
exports.GzipWrapper = o;