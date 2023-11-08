Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
  return typeof e;
} : function (e) {
  if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
    return "symbol";
  } else {
    return typeof e;
  }
};
var a = u(require("./733988.js"));
var o = u(require("./855900.js"));
var i = u(require("./989125.js"));
function u(e) {
  if (e && e.__esModule) {
    return e;
  } else {
    return {
      default: e
    };
  }
}
var c = undefined;
exports.default = function (e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var r = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
  var u = (0, a.default)();
  if (!c) {
    c = (0, o.default)(u);
  }
  if (t.events) {
    throw new Error("Event handlers cannot be overwritten.");
  }
  if (typeof e == "string" && !document.getElementById(e)) {
    throw new Error("Element \"" + e + "\" does not exist.");
  }
  t.events = i.default.proxyEvents(u);
  var s = new Promise(function (r) {
    if ((e === undefined ? "undefined" : n(e)) === "object" && e.playVideo instanceof Function) {
      r(e);
    } else {
      c.then(function (n) {
        var a = new n.Player(e, t);
        u.on("ready", function () {
          r(a);
        });
        return null;
      });
    }
  });
  var l = i.default.promisifyPlayer(s, r);
  l.on = u.on;
  l.off = u.off;
  return l;
};
module.exports = exports.default;