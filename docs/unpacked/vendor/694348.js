function r(e) {
  if (e === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return e;
}
function i(e, t, n) {
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
var a = require("./820741.js");
var o = require("./201117.js");
var s = function (e) {
  return e.content;
};
var u = function (e) {
  var t;
  var n;
  function o(t, n) {
    var o;
    i(r(o = e.call(this, t, n) || this), "$$typeof", a.REACT_ELEMENT_TYPE);
    i(r(o), "key", null);
    i(r(o), "props", undefined);
    i(r(o), "ref", null);
    i(r(o), "type", s);
    o.props = {
      content: t
    };
    return o;
  }
  n = e;
  (t = o).prototype = Object.create(n.prototype);
  t.prototype.constructor = t;
  t.__proto__ = n;
  o.get = function (e) {
    return new o(e.contents, e.errorListener);
  };
  return o;
}(o);
module.exports = u;