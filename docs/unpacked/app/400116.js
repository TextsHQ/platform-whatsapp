var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initDevicePairingLatencyMeasurement = function () {
  const e = (0, o.unixTimeMs)();
  __LOG__(2)`[history sync][reg] begin device pairing latency measurement`;
  l.Cmd.on("on_critical_sync_done", () => {
    __LOG__(2)`[history sync][reg] main screen unblocked in ${(0, o.unixTimeMs)() - e}ms`;
  });
};
exports.logoutAfterValidationFail = function () {
  new a.ShiftTimer(() => {
    E();
  }).onOrAfter(1000);
};
exports.resetCompanionReg = function () {
  g = false;
  m = false;
};
exports.startInitialHistorySyncTimeout = function () {
  if (v == null) {
    v = self.setTimeout(h, 180000);
    l.Cmd.on("on_initial_chat_synced", () => {
      self.clearTimeout(v);
    });
  }
};
exports.startLogin = function () {
  return y.apply(this, arguments);
};
exports.startLogout = E;
var i = r(require("../vendor/348926.js"));
var a = require("./685639.js");
var o = require("./632157.js");
var s = require("./678002.js");
var l = require("./780549.js");
var u = require("./332108.js");
var c = require("./314189.js");
var d = require("./38878.js");
var p = require("./68389.js");
var f = require("./784898.js");
var _ = require("./72687.js");
let g = false;
let m = false;
function h() {
  __LOG__(4, undefined, new Error())`logout due to initial history sync timeout`;
  (0, c.socketLogout)(u.LogoutReason.HistorySyncTimeout);
}
function y() {
  return (y = (0, i.default)(function* () {
    if (!(g || m)) {
      yield (0, f.setDeviceLinkPairStage)(_.MD_LINK_DEVICE_COMPANION_STAGE.FIRST_CONNECT);
      g = true;
      yield (0, s.clearADVSecretKey)();
      (0, p.setIsConnectedAsRegistered)(true);
    }
  })).apply(this, arguments);
}
function E() {
  return S.apply(this, arguments);
}
function S() {
  return (S = (0, i.default)(function* () {
    if (!(g || m)) {
      m = true;
      yield d.Socket.clearCredentialsAndStoredData();
      yield (0, s.clearADVSecretKey)();
    }
  })).apply(this, arguments);
}
let v;