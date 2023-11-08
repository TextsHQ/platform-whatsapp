var r = require("./286556.js");
var i = require("./364626.js");
var a = require("./477133.js");
var o = require("./200278.js");
var s = require("./738517.js");
var u = require("./135694.js");
var l = require("./701469.js");
var c = require("./229246.js");
var f = require("./644144.js");
var d = require("./623560.js");
var h = require("./513218.js");
var p = require("./968630.js");
var m = require("./936719.js");
var v = require("./636390.js");
var g = require("./959881.js");
module.exports = function (e, t, n, y, b, w, _) {
  var x = v(e, n);
  var S = v(t, n);
  var E = _.get(S);
  if (E) {
    r(e, n, E);
  } else {
    var k = w ? w(x, S, n + "", e, t, _) : undefined;
    var O = k === undefined;
    if (O) {
      var N = l(S);
      var T = !N && f(S);
      var M = !N && !T && m(S);
      k = S;
      if (N || T || M) {
        if (l(x)) {
          k = x;
        } else if (c(x)) {
          k = o(x);
        } else if (T) {
          O = false;
          k = i(S, true);
        } else if (M) {
          O = false;
          k = a(S, true);
        } else {
          k = [];
        }
      } else if (p(S) || u(S)) {
        k = x;
        if (u(x)) {
          k = g(x);
        } else if (!(h(x) && !d(x))) {
          k = s(S);
        }
      } else {
        O = false;
      }
    }
    if (O) {
      _.set(S, k);
      b(k, S, y, w, _);
      _.delete(S);
    }
    r(e, n, k);
  }
};