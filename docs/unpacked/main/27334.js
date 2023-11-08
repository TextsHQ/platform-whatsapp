var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readPinInChatFromDB = undefined;
var r = a(require("../vendor/348926.js"));
var o = require("../app/183381.js");
var l = require("../app/722091.js");
const i = function () {
  var e = (0, r.default)(function* (e) {
    const t = yield (0, o.getPinInChatByChatId)(e);
    l.PinInChatCollection.add(t.map(l.createPinInChatModel));
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
exports.readPinInChatFromDB = i;