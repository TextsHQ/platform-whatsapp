function n(e, t) {
  for (var n = e.length, r = new Array(n), i = {}, a = n; a--;) {
    if (!i[a]) {
      o(e[a], a, []);
    }
  }
  return r;
  function o(a, s, u) {
    if (u.indexOf(a) >= 0) {
      throw new Error("Cyclic dependency: " + JSON.stringify(a));
    }
    if (!~e.indexOf(a)) {
      throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(a));
    }
    if (!i[s]) {
      i[s] = true;
      var l = t.filter(function (e) {
        return e[0] === a;
      });
      if (s = l.length) {
        var c = u.concat(a);
        do {
          var f = l[--s][1];
          o(f, e.indexOf(f), c);
        } while (s);
      }
      r[--n] = a;
    }
  }
}
module.exports = exports = function (e) {
  return n(function (e) {
    for (var t = [], n = 0, r = e.length; n < r; n++) {
      var i = e[n];
      if (t.indexOf(i[0]) < 0) {
        t.push(i[0]);
      }
      if (t.indexOf(i[1]) < 0) {
        t.push(i[1]);
      }
    }
    return t;
  }(e), e);
};
exports.array = n;