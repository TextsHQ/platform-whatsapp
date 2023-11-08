var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateLastSeenTimestamp = function () {
  return i.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/632157.js");
var l = require("../app/185212.js");
function i() {
  return (i = (0, r.default)(function* (e) {
    const t = (0, o.unixTime)();
    yield (0, l.persistGroupMetadata)(e.id, {
      lastSeenActivityTimestamp: t
    });
    e.lastSeenActivityTimestamp = t;
  })).apply(this, arguments);
}