var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("./556869.js"));
exports.default = class {
  open() {
    if (this._openPromise) {
      return this._openPromise;
    } else if (this._closePromise) {
      this._openPromise = this._closePromise.catch(e => {
        this._openPromise = null;
        throw e;
      }).then(() => {
        this._openPromise = null;
        return this.open();
      });
      return this._openPromise;
    } else {
      this._openPromise = this.doOpen().catch(e => {
        this._openPromise = null;
        throw e;
      }).then(() => {
        this._openPromise = null;
      });
      return this._openPromise;
    }
  }
  close() {
    if (this._closePromise) {
      return this._closePromise;
    } else if (this._openPromise) {
      this._closePromise = this._openPromise.catch(e => {
        this._closePromise = null;
        throw e;
      }).then(() => {
        this._closePromise = null;
        return this.close();
      });
      return this._closePromise;
    } else {
      this._closePromise = this.doClose().catch(e => {
        this._closePromise = null;
        throw e;
      }).then(() => {
        this._closePromise = null;
      });
      return this._closePromise;
    }
  }
  get(e) {
    var t = this;
    return (0, i.default)(function* () {
      yield t.open();
      return t.doGet(e);
    })();
  }
  queryByIndex(e, t) {
    var n = this;
    return (0, i.default)(function* () {
      yield n.open();
      return n.doQueryByIndex(e, t);
    })();
  }
  getAll() {
    var e = this;
    return (0, i.default)(function* () {
      yield e.open();
      return e.doGetAll();
    })();
  }
  put(e, t) {
    var n = this;
    return (0, i.default)(function* () {
      yield n.open();
      return n.doPut(e, t);
    })();
  }
  del(e) {
    var t = this;
    return (0, i.default)(function* () {
      yield t.open();
      return t.doDel(e);
    })();
  }
  count() {
    var e = this;
    return (0, i.default)(function* () {
      yield e.open();
      return e.doCount();
    })();
  }
  clear() {
    var e = this;
    return (0, i.default)(function* () {
      yield e.open();
      return e.doClear();
    })();
  }
  doGet() {
    throw (0, a.default)("Not implemented");
  }
  doQueryByIndex() {
    throw (0, a.default)("Not implemented");
  }
  doGetAll() {
    throw (0, a.default)("Not implemented");
  }
  doPut() {
    throw (0, a.default)("Not implemented");
  }
  doDel() {
    throw (0, a.default)("Not implemented");
  }
  doCount() {
    throw (0, a.default)("Not implemented");
  }
  doClear() {
    throw (0, a.default)("Not implemented");
  }
  doOpen() {
    throw (0, a.default)("Not implemented");
  }
  doClose() {
    throw (0, a.default)("Not implemented");
  }
};