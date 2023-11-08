Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logShopsManagementEvent = function (e, t) {
  const {
    shouldLogJid: n = true,
    isShopsProductPreviewVisible: a
  } = t != null ? t : {};
  new o.WaShopsManagementWamEvent({
    shopsManagementAction: e,
    shopsSellerJid: n ? l() : undefined,
    isShopsProductPreviewVisible: a
  }).commit();
};
var a = require("../app/445729.js");
var r = require("../app/459857.js");
var o = require("./506384.js");
function l() {
  const e = a.Conn.isSMB ? (0, r.getMaybeMeUser)() : undefined;
  if (e == null) {
    return undefined;
  } else {
    return e.user;
  }
}