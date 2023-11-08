var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.areGlobalsReady = function () {
  return s != null;
};
exports.getConfig = function () {
  return l().config;
};
exports.getMyDeviceJid = function () {
  var e;
  const t = (e = l().myJids) === null || e === undefined ? undefined : e.deviceJid;
  if (t == null) {
    throw (0, o.default)("Trying to access myDeviceJid, but it's not set");
  }
  return (0, a.unsafeCoerceToPhoneDeviceJid)(t);
};
exports.getMyDisplayName = function () {
  return l().displayName;
};
exports.getMyLidDeviceJid = function () {
  return l().lidDeviceJid;
};
exports.setGlobals = function (e) {
  s = e;
  (0, i.setGlobals)(e);
};
exports.setMyDisplayName = function (e) {
  l().displayName = e;
};
exports.setMyLidDeviceJid = function (e) {
  l().lidDeviceJid = e;
};
var i = require("./819416.js");
var a = require("./418987.js");
var o = r(require("./556869.js"));
let s = null;
function l() {
  if (s == null) {
    throw (0, o.default)("globals api called before set");
  }
  return s;
}