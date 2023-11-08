var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writeSyncdLogImpl = exports.printSyncdLogs = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./122393.js");
var o = require("./632157.js");
var s = require("./267973.js");
const l = new Map();
function u() {
  return (u = (0, i.default)(function* (e) {
    var t;
    const n = (t = l.get(e)) !== null && t !== undefined ? t : 0;
    l.set(e, n + 1);
    if (n % 90 == 0) {
      const t = yield (0, s.getSyncdLogsTable)().equals(["collection"], e);
      if (t.length < 80) {
        return;
      }
      const n = t.sort((e, t) => e.ts - t.ts).slice(0, t.length - 80).map(e => e.id);
      yield (0, s.getSyncdLogsTable)().bulkRemove(n);
    }
  })).apply(this, arguments);
}
const c = function () {
  var e = (0, i.default)(function* (e, t) {
    try {
      yield function () {
        return u.apply(this, arguments);
      }(e);
      yield (0, s.getSyncdLogsTable)().bulkCreate([{
        collection: e,
        log: t,
        ts: (0, o.unixTimeMs)()
      }]);
    } catch (e) {
      __LOG__(4, undefined, new Error())`syncd: error while writing to syncd logs: ${e}`;
    }
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
exports.writeSyncdLogImpl = c;
const d = function () {
  var e = (0, i.default)(function* () {
    try {
      const e = [...Array.from(a.CollectionName.members()), ""].map(function () {
        var e = (0, i.default)(function* (e) {
          const t = (yield (0, s.getSyncdLogsTable)().equals(["collection"], e)).filter(e => (0, o.happenedWithin)((0, o.castMilliSecondsToUnixTime)(e.ts), o.DAY_MILLISECONDS * 60)).map(e => `${(0, o.toHttpHeaderDate)((0, o.castMilliSecondsToUnixTime)(e.ts))}: ${e.log}\r\n`);
          __LOG__(2)`\r\n\r\nsyncd: logs for fatal: collection ${e}: \r\n\r\n`;
          for (let e = 0; e < t.length; e += 20) {
            __LOG__(2)`${t.slice(e, e + 20)}`;
          }
        });
        return function () {
          return e.apply(this, arguments);
        };
      }());
      yield Promise.all(e != null ? e : []);
    } catch (e) {
      __LOG__(4, undefined, new Error())`syncd: error while printing fatal logs: ${e}`;
    }
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
exports.printSyncdLogs = d;