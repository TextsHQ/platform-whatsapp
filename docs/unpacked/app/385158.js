var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  const e = new Promise(function (e) {
    function t() {
      e(false);
    }
    if (self.requestFileSystem) {
      self.requestFileSystem(window.TEMPORARY, 1, t, function (t) {
        e(t.name === "SecurityError");
      });
    } else if (s.default) {
      const n = s.default.open("pb_detect");
      if (n) {
        n.onsuccess = t;
        n.onerror = function (t) {
          t.preventDefault();
          if (window.InvalidStateError) {
            e(t instanceof window.InvalidStateError);
          } else {
            e(true);
          }
        };
      } else {
        t();
      }
    } else if (u.UA.isTrident) {
      e(true);
    } else {
      t();
    }
  }).then(function (e) {
    if (e) {
      return e;
    }
    if (!l.default) {
      return false;
    }
    try {
      l.default.setItem("INCOG", "0");
      l.default.removeItem("INCOG");
      return false;
    } catch (e) {
      if (e.name === "QuotaExceededError") {
        return true;
      }
      throw e;
    }
  });
  return (0, o.promiseTimeout)(e, 100, "detectIncognitoTimeout").catch((0, a.filteredCatch)(i.TimeoutError, function () {
    return false;
  })).catch(function (e) {
    __LOG__(3, undefined, undefined, true)`promiseUtil:determineIncognito failed check: ${String(e)}`;
    SEND_LOGS("incog-throw");
    return false;
  });
};
var i = require("./477689.js");
var a = require("./122583.js");
var o = require("./434517.js");
var s = r(require("./422660.js"));
var l = r(require("./174285.js"));
var u = require("./368170.js");