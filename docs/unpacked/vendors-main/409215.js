function n() {
  var e;
  try {
    e = exports.storage.debug;
  } catch (e) {}
  if (!e && typeof process != "undefined" && "env" in process) {
    e = process.env.DEBUG;
  }
  return e;
}
(exports = module.exports = require("./655046.js")).log = function () {
  return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
};
exports.formatArgs = function (e) {
  var r = this.useColors;
  e[0] = (r ? "%c" : "") + this.namespace + (r ? " %c" : " ") + e[0] + (r ? "%c " : " ") + "+" + exports.humanize(this.diff);
  if (!r) {
    return;
  }
  var n = "color: " + this.color;
  e.splice(1, 0, n, "color: inherit");
  var a = 0;
  var o = 0;
  e[0].replace(/%[a-zA-Z%]/g, function (e) {
    if (e !== "%%") {
      a++;
      if (e === "%c") {
        o = a;
      }
    }
  });
  e.splice(o, 0, n);
};
exports.save = function (e) {
  try {
    if (e == null) {
      exports.storage.removeItem("debug");
    } else {
      exports.storage.debug = e;
    }
  } catch (e) {}
};
exports.load = n;
exports.useColors = function () {
  if (typeof window != "undefined" && window.process && window.process.type === "renderer") {
    return true;
  }
  return typeof document != "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window != "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator != "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator != "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
};
exports.storage = typeof chrome != "undefined" && chrome.storage !== undefined ? chrome.storage.local : function () {
  try {
    return window.localStorage;
  } catch (e) {}
}();
exports.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"];
exports.formatters.j = function (e) {
  try {
    return JSON.stringify(e);
  } catch (e) {
    return "[UnexpectedJSONParseError]: " + e.message;
  }
};
exports.enable(n());