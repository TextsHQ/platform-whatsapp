module.exports = function (e) {
  var t = [];
  if (e != null) {
    for (var n in Object(e)) {
      t.push(n);
    }
  }
  return t;
};