var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConfig = function () {
  return o().config;
};
exports.getDbImpls = function () {
  return o().db;
};
exports.getJidUtilsApi = function () {
  return o().jidUtils;
};
exports.getMyDeviceJid = function () {
  var e;
  const t = (e = o().myJids) === null || e === undefined ? undefined : e.deviceJid;
  if (t == null) {
    throw (0, i.default)("Trying to access myDeviceJid, but it's not set");
  }
  return t;
};
exports.getMyUserJid = function () {
  var e;
  const t = (e = o().myJids) === null || e === undefined ? undefined : e.userJid;
  if (t == null) {
    throw (0, i.default)("Trying to access myUserJid, but it's not set");
  }
  return t;
};
exports.getQplConfig = function () {
  return o().qpl;
};
exports.runInTransaction = function (e, t) {
  return o().runInTransaction(e, t);
};
exports.setGlobals = function (e) {
  a = e;
};
exports.setMyJids = function (e) {
  o().myJids = e;
};
var i = r(require("./415227.js"));
let a = null;
function o() {
  if (a == null) {
    throw (0, i.default)("Trying to access WAGlobals before being set");
  }
  return a;
}