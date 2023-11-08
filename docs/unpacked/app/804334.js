var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LockScreenResolvable = undefined;
exports.lockScreenAndTriggerUnlockFlow = function () {
  return f.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./950376.js");
var s = require("./780549.js");
var l = require("./188472.js");
var u = require("./659102.js");
var c = require("./114850.js");
var d = require("./65410.js");
const p = new class {
  constructor() {
    this.deferred = new o.Resolvable();
  }
  waitForPasscode() {
    var e;
    s.Cmd.openLockScreenModal();
    if ((e = this.deferred) === null || e === undefined) {
      return undefined;
    } else {
      return e.promise;
    }
  }
  waitForPasscodeAfterIncorrectAttempt() {
    var e;
    this.deferred = new o.Resolvable();
    s.Cmd.incorrectPasscodeLockScreen();
    if ((e = this.deferred) === null || e === undefined) {
      return undefined;
    } else {
      return e.promise;
    }
  }
  enterPasscode(e) {
    this.deferred.resolve(e);
  }
  correctPasscodeEntered(e) {
    this.deferred = new o.Resolvable();
    s.Cmd.correctPasscodeLockScreen(e);
    c.ModalManager.close();
  }
}();
function f() {
  return (f = (0, i.default)(function* () {
    if (d.waNoiseInfo.cachedPasscodeDerivedKey == null) {
      __LOG__(3, undefined, undefined, true)`[screeen-lock] passcode derived key is null when trying to encrypt`;
      SEND_LOGS("[screeen-lock] passcode derived key is null when trying to encrypt");
      return void location.reload();
    }
    const e = (0, a.getComms)();
    if (e == null) {
      return void location.reload();
    }
    const {
      ChatCollection: t
    } = require("./351053.js");
    const r = t.getActive();
    if (r) {
      s.Cmd.closeChat(r);
    }
    const {
      MsgCollection: i
    } = require("./61113.js");
    yield i.encrpytAndClearModels();
    d.waNoiseInfo.resetCachedPasscodeDerivedKey();
    u.DbEncKeyStore.deleteKeyCache();
    u.DbEncKeyStore.resetDB();
    if (e.softCloseSocket) {
      e.softCloseSocket();
      yield (0, l.initEncSalt)();
      e.socketLoop.start();
    } else {
      location.reload();
    }
  })).apply(this, arguments);
}
exports.LockScreenResolvable = p;