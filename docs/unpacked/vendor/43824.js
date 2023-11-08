var t = Object.prototype.hasOwnProperty;
module.exports = function (e) {
  var n = e.length;
  var r = new e.constructor(n);
  if (n && typeof e[0] == "string" && t.call(e, "index")) {
    r.index = e.index;
    r.input = e.input;
  }
  return r;
};