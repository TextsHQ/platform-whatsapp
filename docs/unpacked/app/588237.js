var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PassiveTaskManager = undefined;
var a = require("./898817.js");
var o = i(require("./229922.js"));
var s = require("./950376.js");
var l = require("./53439.js");
var u = require("./780549.js");
const c = new class {
  constructor() {
    this._disconnectAbortController = new r();
    this._passiveEndPromise = new s.Resolvable();
    this._debugPassiveModeEnabled = false;
    this._passiveTasks = [];
    this._passiveModeTimeout = 60000;
    u.Cmd.on("socket_stream_disconnected", () => {
      var e;
      __LOG__(2)`PassiveModeManager: trying to abort passive mode because of disconnect`;
      __LOG__(2)`PassiveModeManager: ${this._passiveTasks.length} current tasks`;
      __LOG__(2)`PassiveModeManager: processing tasks finished: ${this._passiveEndPromise.resolveWasCalled()}`;
      if (!((e = this._disconnectAbortController) === null || e === undefined)) {
        e.abort();
      }
      this.resetState();
    });
  }
  resetState() {
    __LOG__(2)`PassiveModeManager: reset status`;
    this._passiveTasks = [];
    if (this._passiveTimeoutTimer) {
      self.clearTimeout(this._passiveTimeoutTimer);
      this._passiveTimeoutTimer = null;
    }
    this._debugPassiveModeEnabled = false;
    if (!this._passiveEndPromise.resolveWasCalled()) {
      this._passiveEndPromise.resolve();
    }
    this._passiveEndPromise = new s.Resolvable();
    this._disconnectAbortController = new r();
  }
  registerPassiveTask(e) {
    __LOG__(2)`PassiveModeManager: register passive task`;
    this._passiveTasks.push(e);
  }
  enableDebugPassiveMode() {}
  executePassiveTasks() {
    if (this.shouldConnectAsPassiveMode()) {
      __LOG__(2)`PassiveModeManager: executePassiveTasks: start to execute ${this._passiveTasks.length} passive tasks`;
      (0, o.default)(Promise.all(this._passiveTasks.map(e => e().catch(e => {
        __LOG__(4, undefined, new Error())`PassiveModeManager: executePassiveTasks: failed for single task with ${e}`;
      }))), this._disconnectAbortController.signal).then(() => {
        __LOG__(2)`PassiveModeManager: executePassiveTasks: complete all tasks`;
        this._endPassiveMode();
      }).catch((0, a.catchAbort)(() => {
        __LOG__(2)`PassiveModeManager: executePassiveTasks: abort by disconnect, skip send active`;
        this._passiveEndPromise.resolve();
      })).catch(e => {
        __LOG__(4, undefined, new Error())`PassiveModeManager: executePassiveTasks: end with error ${e}`;
        this._endPassiveMode();
      }).finally(() => {
        __LOG__(2)`PassiveModeManager: executePassiveTasks: done`;
        this.resetState();
      });
      this._passiveTimeoutTimer = self.setTimeout(() => {
        __LOG__(4, undefined, new Error(), true)`PassiveModeManager: executePassiveTasks: passive mode end with timeout`;
        SEND_LOGS("passive-timeout");
        this._endPassiveMode();
        this.resetState();
      }, this._passiveModeTimeout);
    } else {
      this._passiveEndPromise.resolve();
    }
  }
  _endPassiveMode() {
    __LOG__(2)`PassiveModeManager: _endPassiveMode`;
    this._passiveEndPromise.resolve();
    if (!this._debugPassiveModeEnabled) {
      __LOG__(2)`PassiveModeManager: send passive active iq`;
      (0, l.sendPassiveModeProtocol)("active");
    }
  }
  waitForPassiveTaskEnd() {
    return this._passiveEndPromise.promise;
  }
  shouldConnectAsPassiveMode() {
    return this._debugPassiveModeEnabled || this._passiveTasks.length > 0;
  }
  setPassiveModeTimeout(e) {
    __LOG__(2)`PassiveModeManager: setPassiveModeTimeout: config timeout to be ${e}`;
    this._passiveModeTimeout = e;
  }
}();
exports.PassiveTaskManager = c;