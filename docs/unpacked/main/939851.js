var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendConversationArchive = function (e, t) {
  const n = (0, l.unixTimeMs)();
  return u.default.getMutationsForArchive(n, t, e).then(function () {
    var n = (0, r.default)(function* (n) {
      try {
        yield (0, s.lockForMessageRangeSync)(["chat"], n, function () {
          var a = (0, r.default)(function* (a) {
            let [r] = a;
            if (n[0].action !== o.Actions.Archive) {
              throw (0, d.default)("syncd: expected archive action from getMutationsForArchive");
            }
            yield (0, i.addActiveMessageRange)(e.toString(), "archive", n[0].binarySyncAction);
            return r.merge(e.toString(), function (e) {
              const t = {
                archive: e
              };
              if (e) {
                t.pin = undefined;
              }
              return t;
            }(t));
          });
          return function () {
            return a.apply(this, arguments);
          };
        }());
        return {
          status: 200
        };
      } catch (e) {
        if (e instanceof c.DbOnLogoutAbort) {
          throw e;
        }
        __LOG__(4, true, new Error(), true)`update chat table failed`;
        SEND_LOGS("update chat table failed when send conversation to archive");
        throw (0, d.default)("update chat table failed");
      }
    });
    return function () {
      return n.apply(this, arguments);
    };
  }());
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/122393.js");
var l = require("../app/632157.js");
var i = require("../app/791381.js");
var u = a(require("../app/212485.js"));
var s = require("../app/414240.js");
var c = require("../app/288057.js");
var d = a(require("../app/556869.js"));