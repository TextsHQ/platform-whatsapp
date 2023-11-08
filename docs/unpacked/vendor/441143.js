module.exports = function (e, t, n, r, i, a, o, s) {
  if (!e) {
    var u;
    if (t === undefined) {
      u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    } else {
      var l = [n, r, i, a, o, s];
      var c = 0;
      (u = new Error(t.replace(/%s/g, function () {
        return l[c++];
      }))).name = "Invariant Violation";
    }
    u.framesToPop = 1;
    throw u;
  }
};