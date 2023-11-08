var t = /\w*$/;
module.exports = function (e) {
  var n = new e.constructor(e.source, t.exec(e));
  n.lastIndex = e.lastIndex;
  return n;
};