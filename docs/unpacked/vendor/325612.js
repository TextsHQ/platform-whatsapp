Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyPhonologicalRules = function (e) {
  for (var t = function (e) {
      var t = e != null ? e : "";
      var n = l[t];
      if (n == null) {
        n = l[t] = function (e) {
          var t = [];
          var n = i.default.get(e);
          for (var r in n.patterns) {
            var a = n.patterns[r];
            for (var o in n.meta) {
              var s = new RegExp(o.slice(1, -1), "g");
              var u = n.meta[o];
              r = r.replace(s, u);
              a = a.replace(s, u);
            }
            if (a === "javascript") {
              a = function (e) {
                return e.slice(1).toLowerCase();
              };
            }
            t.push([new RegExp(r.slice(1, -1), "g"), a]);
          }
          return t;
        }(e);
      }
      return n;
    }(r.default.getViewerContext().locale), n = e, a = 0; a < t.length; a++) {
    var o = t[a];
    var s = o[0];
    var u = o[1];
    n = n.replace(s, u);
  }
  return n.replace(/\x01/g, "");
};
exports.dedupeStops = function (e, t) {
  if (function (e, t) {
    var n;
    var r = c.get(e);
    var i = c.get(t);
    return ((n = m.get(r)) === null || n === undefined ? undefined : n.has(i)) === true;
  }(e[e.length - 1], t)) {
    return "";
  } else {
    return t;
  }
};
exports.PUNCT_CHAR_CLASS = undefined;
var r = o(require("./48041.js"));
var i = o(require("./380605.js"));
var a = o(require("./4983.js"));
function o(e) {
  if (e && e.__esModule) {
    return e;
  } else {
    return {
      default: e
    };
  }
}
function s(e, t) {
  var n;
  if (typeof Symbol == "undefined" || e[Symbol.iterator] == null) {
    if (Array.isArray(e) || (n = function (e, t) {
      if (!e) {
        return;
      }
      if (typeof e == "string") {
        return u(e, t);
      }
      var n = Object.prototype.toString.call(e).slice(8, -1);
      if (n === "Object" && e.constructor) {
        n = e.constructor.name;
      }
      if (n === "Map" || n === "Set") {
        return Array.from(e);
      }
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
        return u(e, t);
      }
    }(e)) || t && e && typeof e.length == "number") {
      if (n) {
        e = n;
      }
      var r = 0;
      var i = function () {};
      return {
        s: i,
        n: function () {
          if (r >= e.length) {
            return {
              done: true
            };
          } else {
            return {
              done: false,
              value: e[r++]
            };
          }
        },
        e: function (e) {
          throw e;
        },
        f: i
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var a;
  var o = true;
  var s = false;
  return {
    s: function () {
      n = e[Symbol.iterator]();
    },
    n: function () {
      var e = n.next();
      o = e.done;
      return e;
    },
    e: function (e) {
      s = true;
      a = e;
    },
    f: function () {
      try {
        if (!(o || n.return == null)) {
          n.return();
        }
      } finally {
        if (s) {
          throw a;
        }
      }
    }
  };
}
function u(e, t) {
  if (t == null || t > e.length) {
    t = e.length;
  }
  for (var n = 0, r = new Array(t); n < t; n++) {
    r[n] = e[n];
  }
  return r;
}
exports.PUNCT_CHAR_CLASS = "[.!?。！？।…ຯ᠁ฯ．]";
var l = {};
var c = new Map();
for (var f in a.default.equivalencies) {
  var d;
  var h = s([f].concat(a.default.equivalencies[f]));
  try {
    for (h.s(); !(d = h.n()).done;) {
      var p = d.value;
      c.set(p, f);
    }
  } catch (e) {
    h.e(e);
  } finally {
    h.f();
  }
}
var m = new Map();
for (var v in a.default.redundancies) {
  m.set(v, new Set(a.default.redundancies[v]));
}