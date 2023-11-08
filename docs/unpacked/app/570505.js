var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LtHash16 = exports.LT_HASH_ANTI_TAMPERING = exports.KEY_LENGTH_BYTES = exports.EMPTY_LT_HASH = undefined;
var i = r(require("../vendor/311504.js"));
var a = require("./562075.js");
const o = 128;
exports.KEY_LENGTH_BYTES = o;
const s = new ArrayBuffer(o);
exports.EMPTY_LT_HASH = s;
class l {
  constructor(e) {
    this.salt = e;
  }
  add(e, t) {
    var n = this;
    return t.reduce(function () {
      var e = (0, i.default)(function* (e, t) {
        return n._addSingle(yield e, t);
      });
      return function () {
        return e.apply(this, arguments);
      };
    }(), Promise.resolve(e));
  }
  subtract(e, t) {
    var n = this;
    return t.reduce(function () {
      var e = (0, i.default)(function* (e, t) {
        return n._subtractSingle(yield e, t);
      });
      return function () {
        return e.apply(this, arguments);
      };
    }(), Promise.resolve(e));
  }
  subtractThenAdd(e, t, n) {
    var r = this;
    return (0, i.default)(function* () {
      return r.add(yield r.subtract(e, n), t);
    })();
  }
  _addSingle(e, t) {
    var n = this;
    return (0, i.default)(function* () {
      const r = yield (0, a.extractAndExpand)(t, n.salt, o);
      return n.performPointwiseWithOverflow(e, r, (e, t) => e + t);
    })();
  }
  _subtractSingle(e, t) {
    var n = this;
    return (0, i.default)(function* () {
      const r = yield (0, a.extractAndExpand)(t, n.salt, o);
      return n.performPointwiseWithOverflow(e, r, (e, t) => e - t);
    })();
  }
  performPointwiseWithOverflow(e, t, n) {
    const r = new DataView(e);
    const i = new DataView(t);
    const a = new ArrayBuffer(r.byteLength);
    const o = new DataView(a);
    for (let e = 0; e < r.byteLength; e += 2) {
      o.setUint16(e, n(r.getUint16(e, true), i.getUint16(e, true)), true);
    }
    return a;
  }
}
exports.LtHash16 = l;
const u = new l("WhatsApp Patch Integrity");
exports.LT_HASH_ANTI_TAMPERING = u;