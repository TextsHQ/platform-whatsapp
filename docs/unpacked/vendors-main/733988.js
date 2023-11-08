var t;
/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/
t = function () {
  var e = {};
  var t = {};
  e.on = function (e, r) {
    var n = {
      name: e,
      handler: r
    };
    t[e] = t[e] || [];
    t[e].unshift(n);
    return n;
  };
  e.off = function (e) {
    var r = t[e.name].indexOf(e);
    if (r !== -1) {
      t[e.name].splice(r, 1);
    }
  };
  e.trigger = function (e, r) {
    var n;
    var a = t[e];
    if (a) {
      for (n = a.length; n--;) {
        a[n].handler(r);
      }
    }
  };
  return e;
};
module.exports = t;