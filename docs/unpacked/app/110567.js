var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ftsClient = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/81109.js"));
var o = r(require("./670983.js"));
var s = require("./387273.js");
var l = r(require("./155275.js"));
var u = require("./219681.js");
var c = r(require("./556869.js"));
const d = new class {
  constructor() {
    this._pendingMap = new Map();
  }
  initialize() {
    if (!this._worker) {
      const e = (0, u.getFtsWorker)(e => {
        this._handleWorkerResponse(e);
      }, e => this._handleWorkerError(e));
      this._worker = e;
    }
  }
  _handleMessageError() {}
  _handleWorkerError(e) {
    __LOG__(3)`FTS:client: worker error: ${e}`;
  }
  _handleWorkerResponse(e) {
    const {
      reqId: t
    } = e;
    const n = this._pendingMap.get(t);
    if (n) {
      if (e.error) {
        __LOG__(3)`FTS:client: worker completed job ${n.command.operation} with error`;
        n.reject((0, c.default)("FTS worker error"));
      } else {
        n.resolve(e.result);
      }
      this._untrackInvocation(t);
    }
  }
  startIndexer() {
    return this._runCommand({
      operation: "start-indexer"
    });
  }
  indexFull() {
    return this._runCommand({
      operation: "run"
    });
  }
  index() {
    return this._runCommand({
      operation: "consume"
    });
  }
  purge(e) {
    return this._runCommand({
      operation: "purge",
      ids: e
    });
  }
  purgeRange(e) {
    return this._runCommand((0, a.default)({
      operation: "purge-range"
    }, e));
  }
  reInit() {
    return this._runCommand({
      operation: "re-init"
    });
  }
  clearInitializationPromises() {
    return this._runCommand({
      operation: "clear-init"
    });
  }
  search(e, t) {
    var n = this;
    return (0, i.default)(function* () {
      const r = yield n._runCommand({
        operation: "find",
        query: e,
        queryOptions: t
      });
      return n._coerceToSearchResult(r);
    })();
  }
  _coerceToSearchResult(e) {
    var t = this;
    return (0, i.default)(function* () {
      if (Array.isArray(e) || typeof e == "boolean") {
        return {
          canceled: false,
          eof: true,
          status: 404,
          messages: []
        };
      }
      const {
        resolved: n,
        unresolved: r
      } = yield (0, s.resolveMsgIds)(e.messages);
      const {
        eof: i,
        status: a
      } = e;
      if (r.length > 0) {
        t.purge(r);
      }
      return {
        canceled: false,
        eof: i,
        status: a,
        messages: n
      };
    })();
  }
  _runCommand(e) {
    this.initialize();
    const t = (0, l.default)();
    return new Promise((n, r) => {
      this._pendingMap.set(t, {
        resolve: n,
        reject: r,
        command: e
      });
      this._message({
        command: e,
        reqId: t
      });
    }).finally(() => {
      this._untrackInvocation(t);
    });
  }
  _untrackInvocation(e) {
    this._pendingMap.delete(e);
  }
  _message(e) {
    (0, o.default)(this._worker, "this._worker").postMessage(e);
  }
}();
exports.ftsClient = d;