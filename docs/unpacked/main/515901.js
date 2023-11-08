var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteExpiredPins = undefined;
var r = a(require("../vendor/348926.js"));
var o = require("../app/722091.js");
var l = require("./743122.js");
var i = require("../app/669050.js");
const u = function () {
  var e = (0, r.default)(function* (e) {
    yield (0, l.seekAndDestroyExpiredPins)(o.PinInChatCollection.byChatId((0, i.toChatWid)(e)).toArray());
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
exports.deleteExpiredPins = u;