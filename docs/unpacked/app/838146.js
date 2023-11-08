var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./670983.js"));
var a = require("./434517.js");
var o = require("./950376.js");
var s = r(require("./556869.js"));
var l = r(require("../vendor/441143.js"));
var u = new class {
  init() {
    this._port = null;
    this._deferred = new o.Resolvable();
    return (0, a.promiseTimeout)(this._deferred.promise, 5000);
  }
  isConnected() {
    return this._port != null;
  }
  getPort() {
    return this._port;
  }
  waitForConnection() {
    var e;
    return (0, i.default)((e = this._deferred) === null || e === undefined ? undefined : e.promise, "ConnectionManager Initialization Promise");
  }
  connectVia(e) {
    if (this.isConnected()) {
      throw (0, s.default)("Connection already established");
    }
    (0, l.default)(this._deferred, "ConnectionManager not initialized");
    this._port = e;
    this._deferred.resolve();
  }
}();
exports.default = u;