Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateContactTable = function (e, t) {
  const n = e.isLid() ? (0, r.toLidUserJid)(e.user) : (0, r.toPhoneUserJid)(e.user);
  return (0, i.getContactTable)().merge(n, t);
};
var r = require("./714443.js");
var i = require("./691195.js");