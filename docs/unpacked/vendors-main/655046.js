var n;
function a(e) {
  function r() {
    if (r.enabled) {
      var e = r;
      var a = +new Date();
      var o = a - (n || a);
      e.diff = o;
      e.prev = n;
      e.curr = a;
      n = a;
      for (var i = new Array(arguments.length), u = 0; u < i.length; u++) {
        i[u] = arguments[u];
      }
      i[0] = exports.coerce(i[0]);
      if (typeof i[0] != "string") {
        i.unshift("%O");
      }
      var c = 0;
      i[0] = i[0].replace(/%([a-zA-Z%])/g, function (r, n) {
        if (r === "%%") {
          return r;
        }
        c++;
        var a = exports.formatters[n];
        if (typeof a == "function") {
          var o = i[c];
          r = a.call(e, o);
          i.splice(c, 1);
          c--;
        }
        return r;
      });
      exports.formatArgs.call(e, i);
      var s = r.log || exports.log || console.log.bind(console);
      s.apply(e, i);
    }
  }
  r.namespace = e;
  r.enabled = exports.enabled(e);
  r.useColors = exports.useColors();
  r.color = function (e) {
    var r;
    var n = 0;
    for (r in e) {
      n = (n << 5) - n + e.charCodeAt(r);
      n |= 0;
    }
    return exports.colors[Math.abs(n) % exports.colors.length];
  }(e);
  if (typeof exports.init == "function") {
    exports.init(r);
  }
  return r;
}
(exports = module.exports = a.debug = a.default = a).coerce = function (e) {
  if (e instanceof Error) {
    return e.stack || e.message;
  } else {
    return e;
  }
};
exports.disable = function () {
  exports.enable("");
};
exports.enable = function (e) {
  exports.save(e);
  exports.names = [];
  exports.skips = [];
  for (var r = (typeof e == "string" ? e : "").split(/[\s,]+/), n = r.length, a = 0; a < n; a++) {
    if (r[a]) {
      if ((e = r[a].replace(/\*/g, ".*?"))[0] === "-") {
        exports.skips.push(new RegExp("^" + e.substr(1) + "$"));
      } else {
        exports.names.push(new RegExp("^" + e + "$"));
      }
    }
  }
};
exports.enabled = function (e) {
  var r;
  var n;
  r = 0;
  n = exports.skips.length;
  for (; r < n; r++) {
    if (exports.skips[r].test(e)) {
      return false;
    }
  }
  r = 0;
  n = exports.names.length;
  for (; r < n; r++) {
    if (exports.names[r].test(e)) {
      return true;
    }
  }
  return false;
};
exports.humanize = require("./814680.js");
exports.names = [];
exports.skips = [];
exports.formatters = {};