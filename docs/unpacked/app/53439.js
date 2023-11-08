var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendPassiveModeProtocol = function () {
  return s.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./265946.js");
var o = require("./706366.js");
function s() {
  return (s = (0, i.default)(function* (e) {
    if (e === "active") {
      yield (0, a.sendActiveIQRPC)();
    } else {
      yield (0, o.sendPassiveIQRPC)();
    }
    __LOG__(2)`sendPassiveModeIq: passive mode set to '${e}'`;
  })).apply(this, arguments);
}