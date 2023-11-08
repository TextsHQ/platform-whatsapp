var r = function (e) {
  var t;
  var n;
  function r() {
    return e.apply(this, arguments) || this;
  }
  n = e;
  (t = r).prototype = Object.create(n.prototype);
  t.prototype.constructor = t;
  t.__proto__ = n;
  return r;
}(require("./694348.js"));
module.exports = r;