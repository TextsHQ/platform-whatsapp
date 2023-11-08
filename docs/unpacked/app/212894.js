var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pruneExpiredMessages = function () {
  return u.apply(this, arguments);
};
exports.removeExpiredMessagesFromHistory = function (e) {
  return (0, o.removeMessagesFromHistory)(e.map(e => e.id.toString()));
};
var i = r(require("../vendor/348926.js"));
var a = require("./632157.js");
var o = require("./384766.js");
var s = require("./808716.js");
var l = require("./851698.js");
function u() {
  return (u = (0, i.default)(function* () {
    __LOG__(2, undefined, undefined, undefined, ["ephemeral-messages"])`pruneExpiredMessages started`;
    const e = (yield (0, l.getMessageTable)().lessThan(["expiredTimestamp"], (0, a.unixTime)(), {
      shouldDecrypt: false
    })).filter(e => !(0, s.isKept)(e.kicState));
    yield (0, o.removeMessagesFromHistory)(e.map(e => e.id.toString()));
    __LOG__(2, undefined, undefined, undefined, ["ephemeral-messages"])`pruneExpiredMessages completed`;
    return e;
  })).apply(this, arguments);
}