var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DroppingMsgRowDueToLogout = undefined;
exports.encryptMultipleDBMsgs = function () {
  return _.apply(this, arguments);
};
exports.processAndEncryptSingleMsgRow = g;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./138291.js");
var s = r(require("./542817.js"));
var l = require("./659102.js");
var u = require("./907539.js");
var c = require("./878685.js");
var d = require("./446303.js");
var p = require("./851698.js");
class f extends Error {
  constructor() {
    super(...arguments);
    this.name = "DroppingMsgRowDueToLogout";
  }
}
function _() {
  return (_ = (0, a.default)(function* (e) {
    let t;
    let n = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    yield l.DbEncKeyStore.waitForFinalDbMsgEncKey();
    yield new Promise(e => self.setTimeout(e, 0));
    if (n) {
      t = [];
      for (let n = 0; n < e.length; n++) {
        try {
          const r = e[n];
          const i = yield g(r, n);
          t.push(i);
        } catch (e) {
          if (e instanceof f) {
            throw e;
          }
          __LOG__(4, undefined, new Error(), undefined, ["message-store"])`processAndEncryptSingleMsgRow with throttle failed with error: ${e.name}, message: ${e.message}, stack: ${e.stack}`;
        }
      }
    } else {
      t = (yield Promise.all(e.map(function () {
        var e = (0, a.default)(function* (e) {
          return yield g(e).catch(e => {
            if (e instanceof f) {
              throw e;
            }
            __LOG__(4, undefined, new Error(), undefined, ["message-store"])`processAndEncryptSingleMsgRow without throttle failed with error: ${e.name}, message: ${e.message}, stack: ${e.stack}`;
          }).finally(() => {});
        });
        return function () {
          return e.apply(this, arguments);
        };
      }()))).filter(Boolean);
    }
    return t;
  })).apply(this, arguments);
}
function g() {
  return m.apply(this, arguments);
}
function m() {
  return (m = (0, a.default)(function* (e, t) {
    if (s.default.isLogoutInProgress) {
      return Promise.reject(new f());
    }
    if (t != null) {
      yield (0, o.asyncSleepAfterGivenLoopIteration)(t, 35, 100);
    }
    const n = (0, p.getMessageTable)();
    const r = (0, c.getVcardWids)(e);
    const a = (0, u.dbRowFromMessage)(e);
    const l = yield n.preflightEncryptSingleRecord((0, i.default)({}, a));
    return [(0, i.default)((0, i.default)((0, i.default)({}, a), l), {}, {
      vcardWAids: r
    }), (0, d.hasHttpLink)(e)];
  })).apply(this, arguments);
}
exports.DroppingMsgRowDueToLogout = f;