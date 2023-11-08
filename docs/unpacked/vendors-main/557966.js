function t(e) {
  var r;
  var n;
  var a = "";
  if (typeof e == "string" || typeof e == "number") {
    a += e;
  } else if (typeof e == "object") {
    if (Array.isArray(e)) {
      for (r = 0; r < e.length; r++) {
        if (e[r] && (n = t(e[r]))) {
          if (a) {
            a += " ";
          }
          a += n;
        }
      }
    } else {
      for (r in e) {
        if (e[r]) {
          if (a) {
            a += " ";
          }
          a += r;
        }
      }
    }
  }
  return a;
}
function r() {
  for (var e, r, n = 0, a = ""; n < arguments.length;) {
    if ((e = arguments[n++]) && (r = t(e))) {
      if (a) {
        a += " ";
      }
      a += r;
    }
  }
  return a;
}
module.exports = r;
module.exports.clsx = r;