Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = u(require("./409215.js"));
var a = u(require("./28255.js"));
var o = u(require("./165279.js"));
var i = u(require("./66006.js"));
function u(e) {
  if (e && e.__esModule) {
    return e;
  } else {
    return {
      default: e
    };
  }
}
var c = (0, n.default)("youtube-player");
var s = {
  proxyEvents: function (e) {
    var t = {};
    var r = function (r) {
      var n = "on" + r.slice(0, 1).toUpperCase() + r.slice(1);
      t[n] = function (t) {
        c("event \"%s\"", n, t);
        e.trigger(r, t);
      };
    };
    var n = true;
    var a = false;
    var i = undefined;
    try {
      for (var u, s = o.default[Symbol.iterator](); !(n = (u = s.next()).done); n = true) {
        r(u.value);
      }
    } catch (e) {
      a = true;
      i = e;
    } finally {
      try {
        if (!n && s.return) {
          s.return();
        }
      } finally {
        if (a) {
          throw i;
        }
      }
    }
    return t;
  },
  promisifyPlayer: function (e) {
    var t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    var r = {};
    var n = function (n) {
      if (t && i.default[n]) {
        r[n] = function () {
          for (var t = arguments.length, r = Array(t), a = 0; a < t; a++) {
            r[a] = arguments[a];
          }
          return e.then(function (e) {
            var t = i.default[n];
            var a = e.getPlayerState();
            var o = e[n].apply(e, r);
            if (t.stateChangeRequired || Array.isArray(t.acceptableStates) && t.acceptableStates.indexOf(a) === -1) {
              return new Promise(function (r) {
                e.addEventListener("onStateChange", function n() {
                  var a = e.getPlayerState();
                  var o = undefined;
                  if (typeof t.timeout == "number") {
                    o = setTimeout(function () {
                      e.removeEventListener("onStateChange", n);
                      r();
                    }, t.timeout);
                  }
                  if (Array.isArray(t.acceptableStates) && t.acceptableStates.indexOf(a) !== -1) {
                    e.removeEventListener("onStateChange", n);
                    clearTimeout(o);
                    r();
                  }
                });
              }).then(function () {
                return o;
              });
            } else {
              return o;
            }
          });
        };
      } else {
        r[n] = function () {
          for (var t = arguments.length, r = Array(t), a = 0; a < t; a++) {
            r[a] = arguments[a];
          }
          return e.then(function (e) {
            return e[n].apply(e, r);
          });
        };
      }
    };
    var o = true;
    var u = false;
    var c = undefined;
    try {
      for (var s, l = a.default[Symbol.iterator](); !(o = (s = l.next()).done); o = true) {
        var f = s.value;
        n(f);
      }
    } catch (e) {
      u = true;
      c = e;
    } finally {
      try {
        if (!o && l.return) {
          l.return();
        }
      } finally {
        if (u) {
          throw c;
        }
      }
    }
    return r;
  }
};
exports.default = s;
module.exports = exports.default;