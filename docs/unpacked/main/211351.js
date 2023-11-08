var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDisappearingMode = function () {
  return s.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/632157.js");
var l = require("./574798.js");
var i = require("../app/622868.js");
var u = require("../app/459857.js");
function s() {
  return (s = (0, r.default)(function* (e) {
    yield (0, l.setDisappearingMode)(e);
    yield (0, i.updateDisappearingModeForContact)((0, u.getMaybeMeUser)(), e, (0, o.unixTime)());
  })).apply(this, arguments);
}