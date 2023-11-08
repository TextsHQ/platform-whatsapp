var n = this && this.__assign || function () {
  return (n = Object.assign || function (e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      for (var a in t = arguments[r]) {
        if (Object.prototype.hasOwnProperty.call(t, a)) {
          e[a] = t[a];
        }
      }
    }
    return e;
  }).apply(this, arguments);
};
var a = this && this.__rest || function (e, t) {
  var r = {};
  for (var n in e) {
    if (Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0) {
      r[n] = e[n];
    }
  }
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var a = 0;
    for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) {
      if (t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a])) {
        r[n[a]] = e[n[a]];
      }
    }
  }
  return r;
};
var o = this && this.__importDefault || function (e) {
  if (e && e.__esModule) {
    return e;
  } else {
    return {
      default: e
    };
  }
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = o(require("../vendor/667294.js"));
function u(e) {
  return "".concat(e, "%");
}
exports.default = function (e) {
  var t = e.children;
  var r = e.className;
  var o = e.count;
  var c = e.direction;
  var s = e.offset;
  var l = e.style;
  var f = e.wrap;
  var d = a(e, ["children", "className", "count", "direction", "offset", "style", "wrap"]);
  return i.default.createElement("div", n({
    className: r,
    style: n({
      display: "flex",
      flexDirection: c,
      flexWrap: f ? "wrap" : "nowrap"
    }, l)
  }, d), i.default.Children.map(t, function (e, t) {
    var r = s && t === 0 ? u(s * 100 / o) : null;
    return i.default.cloneElement(e, n(n({}, e.props), {
      style: {
        flexBasis: u(100 / o),
        flexShrink: 0,
        flexGrow: 0,
        overflow: "hidden",
        marginLeft: r,
        marginInlineStart: r,
        marginInlineEnd: 0
      }
    }));
  }));
};