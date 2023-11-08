var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return s.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("./140854.js"));
var o = require("./787742.js");
function s() {
  return (s = (0, i.default)(function* (e, t) {
    var n;
    if ((0, o.getIsGroupMsg)(e) || t.msgs.length !== 0) {
      return null;
    } else {
      return (0, a.default)(t.id, t.contact.privacyMode, (n = t.contact.businessProfile) === null || n === undefined ? undefined : n.automatedType);
    }
  })).apply(this, arguments);
}