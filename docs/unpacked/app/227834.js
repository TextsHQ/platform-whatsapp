Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shouldBlockByTos = function (e) {
  var t;
  if ((0, i.tos3GatingEnabled)() && o.TosManager.getState(o.TOS_3_ID) === "NOT_ACCEPTED" && ((t = e.privacyMode) === null || t === undefined ? undefined : t.hostStorage) === a.HostStorageEnumType.Facebook && !(0, r.getFbBrandedNumber)(e.id.user)) {
    return true;
  }
  return false;
};
var r = require("./513592.js");
var i = require("./72696.js");
var a = require("./257845.js");
var o = require("./87429.js");