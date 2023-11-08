Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jidToPnString = function (e) {
  if (e != null) {
    if (!e.isLid()) {
      return e.user;
    }
    const t = a.ContactCollection.get(e);
    if (e.isLid() && (t == null ? undefined : t.phoneNumber) != null) {
      return t.phoneNumber.user;
    }
  }
  return "-1";
};
var a = require("../app/177938.js");