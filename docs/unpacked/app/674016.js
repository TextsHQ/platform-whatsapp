var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addMeToContacts = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./714443.js");
var o = require("./65889.js");
var s = require("./691195.js");
var l = require("./459857.js");
function u() {
  return (u = (0, i.default)(function* () {
    const e = yield (0, o.requireContactCollection)();
    const t = (0, l.getMaybeMeUser)();
    const n = (0, a.toPhoneUserJid)(t.user);
    yield (0, s.getContactTable)().createOrMerge(n, {
      id: n
    });
    e.gadd(t);
  })).apply(this, arguments);
}