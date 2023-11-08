var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("./173207.js"));
class o extends a.default {
  constructor(e, t) {
    super();
    this._initialize = e;
    this._table = t;
  }
  doGet(e) {
    var t = this;
    return (0, i.default)(function* () {
      yield t._initialize();
      return t._table.get(e);
    })();
  }
  doQueryByIndex(e, t) {
    var n = this;
    return (0, i.default)(function* () {
      yield n._initialize();
      return n._table.all({
        limit: t.limit,
        index: [e]
      });
    })();
  }
  doGetAll() {
    var e = this;
    return (0, i.default)(function* () {
      yield e._initialize();
      return e._table.all();
    })();
  }
  doPut(e, t) {
    var n = this;
    return (0, i.default)(function* () {
      yield n._initialize().then(() => n._table.createOrReplace(t));
      return t;
    })();
  }
  doDel(e) {
    var t = this;
    return (0, i.default)(function* () {
      yield t._initialize();
      return t._table.remove(e);
    })();
  }
  doCount() {
    var e = this;
    return (0, i.default)(function* () {
      yield e._initialize();
      return e._table.count();
    })();
  }
  doClear() {
    var e = this;
    return (0, i.default)(function* () {
      yield e._initialize();
      return e._table.clear(true);
    })();
  }
  doOpen() {
    return this._initialize();
  }
  doClose() {
    return Promise.resolve();
  }
}
exports.default = o;