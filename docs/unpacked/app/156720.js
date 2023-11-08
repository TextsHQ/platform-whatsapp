Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./6906.js");
function i(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    if (t) {
      r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      });
    }
    n.push.apply(n, r);
  }
  return n;
}
function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    if (t % 2) {
      i(Object(n), true).forEach(function (t) {
        o(e, t, n[t]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
    } else {
      i(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
  }
  return e;
}
function o(e, t, n) {
  if (t in e) {
    Object.defineProperty(e, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    e[t] = n;
  }
  return e;
}
function s(e) {
  for (var t = e.reverse(), n = {}; t.length;) {
    var r = t.pop();
    if (Array.isArray(r)) {
      for (var i = r.length - 1; i >= 0; i--) {
        t.push(r[i]);
      }
    } else {
      var a = r;
      if (a != null && typeof a == "object") {
        for (var o in a) {
          var s = a[o];
          if (typeof s == "string") {
            n[o] = s;
          } else if (typeof s == "object") {
            var l;
            n[o] = (l = n[o]) !== null && l !== undefined ? l : {};
            Object.assign(n[o], s);
          }
        }
      }
    }
  }
  return n;
}
function l(...e) {
  var t = s(e);
  var n = "";
  for (var r in t) {
    if (Boolean(t[r])) {
      if (typeof t[r] == "string") {
        n += n ? " " + t[r] : t[r];
      } else if (typeof t[r] == "object") {
        var i = t[r];
        for (var a in i) {
          var o = i[a];
          n += n ? " " + o : o;
        }
      }
    }
  }
  return n;
}
l.compose = function (...e) {
  return s(e);
};
l.create = function (e) {
  throw new Error("stylex.create should never be called. It should be compiled away.");
};
l.keyframes = e => {
  throw new Error("stylex.keyframes should never be called");
};
l.inject = (e, t, n = null) => {
  r.styleSheet.insert(e, t, n);
};
l.dedupe = (...e) => l(...e);
l.absoluteFill = {
  bottom: 0,
  boxSizing: "border-box",
  end: 0,
  position: "absolute",
  start: 0,
  top: 0
};
l.absoluteCenter = {
  boxSizing: "border-box",
  left: "50%",
  position: "absolute",
  top: "50%",
  transform: "translate(-50%, -50%)"
};
l.blockBase = {
  borderStyle: "solid",
  borderWidth: 0,
  boxSizing: "border-box",
  display: "block",
  flexGrow: 1,
  flexShrink: 1,
  margin: 0,
  padding: 0,
  position: "relative",
  zIndex: 0
};
l.inlineBase = a(a({}, l.blockBase), {}, {
  display: "inline"
});
l.buttonBase = {
  appearance: "none",
  backgroundColor: "transparent",
  borderStyle: "solid",
  borderWidth: 0,
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  position: "relative",
  textAlign: "inherit",
  zIndex: 0
};
l.flexBase = {
  alignItems: "stretch",
  borderStyle: "solid",
  borderWidth: 0,
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  flexShrink: 1,
  justifyContent: "space-between",
  margin: 0,
  minHeight: 0,
  minWidth: 0,
  padding: 0,
  position: "relative",
  zIndex: 0
};
l.flexInlineBase = a(a({}, l.flexBase), {}, {
  display: "inline-flex"
});
l.linkBase = {
  backgroundColor: "transparent",
  backgroundImage: "none",
  boxSizing: "border-box",
  color: "inherit",
  cursor: "pointer",
  position: "relative",
  textDecoration: "none",
  zIndex: 0
};
l.listBase = {
  boxSizing: "border-box",
  listStyle: "none",
  marginBottom: 0,
  marginTop: 0,
  paddingStart: 0
};
l.visuallyHidden = {
  clip: "rect(0, 0, 0, 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  width: 1
};
var u = l;
exports.default = u;