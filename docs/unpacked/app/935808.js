var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("./173207.js"));
var o = require("./840669.js");
var s = r(require("./24824.js"));
var l = require("./203750.js");
var u = r(require("./556869.js"));
class c extends a.default {
  constructor() {
    super();
    this._store = new s.default(o.initialize, l.IdbArrayBufferTable);
  }
  doGet(e) {
    var t = this;
    return (0, i.default)(function* () {
      const n = yield t._store.get(e);
      if (n) {
        return n.data;
      } else {
        return null;
      }
    })();
  }
  doQueryByIndex() {
    throw (0, u.default)("Not implemented. Actual Arraybuffer store does not need it.");
  }
  doGetAll() {
    throw (0, u.default)("Not implemented. Actual Arraybuffer store does not need it.");
  }
  doPut(e, t) {
    var n = this;
    return (0, i.default)(function* () {
      return (yield n._store.put(e, {
        id: e,
        data: t
      })).data;
    })();
  }
  doDel(e) {
    return this._store.del(e);
  }
  doCount() {
    return this._store.count();
  }
  clear() {
    return this._store.clear();
  }
  doOpen() {
    return Promise.resolve();
  }
  doClose() {
    return Promise.resolve();
  }
}
exports.default = c;